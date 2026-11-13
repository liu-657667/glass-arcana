import { chromium, expect } from '@playwright/test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { mkdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Own loopback server, ephemeral port and fresh browser context: never reuse personal state.
const root = fileURLToPath(new URL('../', import.meta.url));
const artifacts = new URL('../test-results/browser/', import.meta.url);
await mkdir(artifacts, { recursive: true });
const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', '0'], {
  cwd: root, env: { ...process.env, NO_COLOR: '1' }, stdio: ['ignore', 'pipe', 'pipe'],
});
let browser;
let output = '';
try {
  const origin = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Vite startup timed out: ${output}`)), 15_000);
    const fail = error => { clearTimeout(timer); reject(error); };
    server.once('error', fail);
    server.once('exit', code => fail(new Error(`Vite exited (${code}): ${output}`)));
    const inspect = chunk => {
      output += chunk.toString();
      const match = output.match(/http:\/\/127\.0\.0\.1:\d+/);
      if (match) { clearTimeout(timer); resolve(match[0]); }
    };
    server.stdout.on('data', inspect);
    server.stderr.on('data', inspect);
  });
  const launch = { headless: true };
  if (process.env.PLAYWRIGHT_EXECUTABLE_PATH) launch.executablePath = process.env.PLAYWRIGHT_EXECUTABLE_PATH;
  else if (process.env.PLAYWRIGHT_CHANNEL) launch.channel = process.env.PLAYWRIGHT_CHANNEL;
  browser = await chromium.launch(launch);
  const context = await browser.newContext({ viewport: { width: 1440, height: 1100 }, serviceWorkers: 'block' });
  const unexpectedRequests = [];
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    if (url.origin === origin) return route.continue();
    unexpectedRequests.push(url.origin);
    return route.abort(); // Includes local/live model backends; no API calls are allowed.
  });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto(origin);
  await expect(page.locator('.home-card-back img')).toBeVisible();
  await page.getByLabel('此刻，你想探索什么？').fill('离线合成验收问题');
  await page.getByRole('button', { name: '洗牌 · 开始探索', exact: true }).click();
  await expect(page.locator('.drawn')).toHaveCount(3);
  await expect(page.locator('.card-caption h3')).toHaveCount(0);
  for (const face of await page.locator('.drawn .face').all()) await face.click();
  await expect(page.locator('.card-caption h3')).toHaveCount(3);
  const first = await page.locator('.card-caption h3').allTextContents();
  assert.equal(new Set(first).size, 3);
  const orientations = await page.locator('.orientation').allTextContents();
  await page.getByRole('button', { name: '结束本次解读', exact: true }).click();
  await page.getByRole('button', { name: '我的记录', exact: true }).click();
  await expect(page.locator('.history-item')).toHaveCount(1);
  await page.reload();
  await page.getByRole('button', { name: '我的记录', exact: true }).click();
  await page.locator('.history-item').click();
  await expect(page.locator('.card-caption h3')).toHaveText(first);
  await expect(page.locator('.orientation')).toHaveText(orientations);

  await page.getByRole('button', { name: '78 张牌', exact: true }).click();
  await expect(page.locator('.mini-card')).toHaveCount(78);
  await page.getByLabel('搜索牌名', { exact: true }).fill('死神');
  await expect(page.locator('.mini-card')).toHaveCount(1);
  await page.locator('.mini-card').click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(page.locator('.mini-card')).toBeFocused();
  await page.getByRole('button', { name: 'Switch to English' }).click();
  await page.getByLabel('Search cards', { exact: true }).fill('DEATH');
  await expect(page.locator('.mini-card')).toHaveCount(1);
  await page.getByLabel('Search cards', { exact: true }).fill('no-such-tarot-card-xyz');
  await expect(page.locator('.mini-card')).toHaveCount(0);
  await page.getByLabel('Search cards', { exact: true }).fill('');
  await expect(page.locator('.mini-card')).toHaveCount(78);
  await page.getByRole('button', { name: '切换到中文' }).click();
  await page.getByRole('button', { name: '静心抽牌', exact: true }).click();
  await page.getByRole('button', { name: '结束本次解读', exact: true }).click();
  await page.getByRole('button', { name: /单张 · 此刻/ }).click();
  await page.getByRole('checkbox', { name: /纳入逆位视角/ }).uncheck();
  await page.getByRole('button', { name: '洗牌 · 开始探索', exact: true }).click();
  await expect(page.locator('.drawn')).toHaveCount(1);
  await page.locator('.drawn .face').click();
  await expect(page.locator('.orientation')).toContainText('正位');
  await expect(page.locator('.ai-panel input')).not.toBeChecked();
  await expect(page.locator('.real-acceptance input')).not.toBeChecked();

  for (const width of [390, 320]) {
    await page.setViewportSize({ width, height: 844 });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow at ${width}px`);
    await page.screenshot({ path: fileURLToPath(new URL(`reading-${width}.png`, artifacts)), fullPage: true });
  }
  await page.getByRole('button', { name: '我的记录', exact: true }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: '导出 JSON 备份', exact: true }).click();
  const download = await downloadPromise;
  const exportPath = fileURLToPath(new URL('synthetic-history.json', artifacts));
  await download.saveAs(exportPath);
  const exported = JSON.parse(await readFile(exportPath, 'utf8'));
  assert.equal(Array.isArray(exported) ? exported.length : exported.readings?.length, 2);
  page.once('dialog', dialog => dialog.dismiss());
  await page.getByRole('button', { name: '清除本地记录', exact: true }).click();
  await expect(page.locator('.history-item')).toHaveCount(2);
  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: '清除本地记录', exact: true }).click();
  await expect(page.locator('.history-item')).toHaveCount(0);
  await page.reload();
  await page.getByRole('button', { name: '我的记录', exact: true }).click();
  await expect(page.locator('.history-item')).toHaveCount(0);
  assert.deepEqual(errors, []);
  assert.deepEqual(unexpectedRequests, []);
  console.log('PASS offline Chromium: reveal, unique draws, immutable history, bilingual search, Escape/focus, upright-only draw, 390/320px layout, export and cancel/confirm clear. No model calls.');
} finally {
  try { await browser?.close(); } finally {
    if (server.exitCode === null) { const stopped = once(server, 'exit'); server.kill('SIGTERM'); await stopped; }
  }
}
