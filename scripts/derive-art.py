"""Reproducible delivery derivatives; source PNGs and review statuses never modified.
Requires the free official libwebp cwebp utility already available on this Mac.
"""
import hashlib,json,subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[1]; out=root/'public/art/derived';out.mkdir(exist_ok=True)
manifest={}
for p in sorted((root/'public/art').glob('*.png')):
 before=hashlib.sha256(p.read_bytes()).hexdigest();row={'originalSha256':before,'originalBytes':p.stat().st_size,'variants':{}}
 for width,quality in [(320,86),(640,90),(1024,92)]:
  dest=out/f'{p.stem}-{width}.webp'
  subprocess.run(['cwebp','-quiet','-q',str(quality),'-m','6','-resize',str(width),'0',str(p),'-o',str(dest)],check=True)
  row['variants'][str(width)]={'bytes':dest.stat().st_size,'sha256':hashlib.sha256(dest.read_bytes()).hexdigest()}
 assert before==hashlib.sha256(p.read_bytes()).hexdigest()
 manifest[p.stem]=row
(root/'src/artDerivatives.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('originals preserved:',len(manifest));print('bytes:',sum(r['originalBytes'] for r in manifest.values()),{w:sum(r['variants'][w]['bytes'] for r in manifest.values()) for w in ['320','640','1024']})
