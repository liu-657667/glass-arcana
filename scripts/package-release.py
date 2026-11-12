"""Prepare local preview-source and web ZIPs only. Never upload or publish."""
from pathlib import Path
import hashlib,json,re,zipfile
root=Path(__file__).resolve().parents[1]
out=root/'.staging/release';out.mkdir(parents=True,exist_ok=True)
files=[]
for name in ['.gitignore','.nvmrc','package.json','package-lock.json','index.html','tsconfig.json','vite.config.ts','README.md','SOURCES.md','VALIDATION.md','LICENSE','CONTENT-LICENSE.md','ARTWORK-NOTICE.md','THIRD_PARTY_NOTICES.md']:
 p=root/name
 if not p.is_file(): raise RuntimeError('Missing required source file: '+name)
 files.append(p)
for name in ['src','server','tests','scripts','docs','licenses','public']:
 files.extend(p for p in (root/name).rglob('*') if p.is_file() and p.name!='.DS_Store')
for p in files:
 if p.is_symlink():raise RuntimeError('Symlink requires manual review: '+str(p.relative_to(root)))
 if p.name.startswith('.env') or p.suffix in ['.key','.pem','.log','.zip']:raise RuntimeError('Forbidden packaging input: '+p.name)
 if p.suffix in ['.ts','.vue','.mjs','.py','.json','.md','.html']:
  text=p.read_text()
  if re.search(r'sk-(?:proj-)?[A-Za-z0-9_-]{32,}',text):raise RuntimeError('Possible secret in source; manual review required')
  if re.search('/'+'Users'+r'/[^/\s]+/',text):raise RuntimeError('Private absolute path needs review: '+str(p.relative_to(root)))
def pack(name,items,base,prefix):
 dest=out/name
 with zipfile.ZipFile(dest,'w',zipfile.ZIP_DEFLATED,compresslevel=6) as z:
  for p in sorted(items):z.write(p,prefix+str(p.relative_to(base)))
 with zipfile.ZipFile(dest) as z:
  if z.testzip():raise RuntimeError('ZIP CRC failed')
 return {'name':name,'bytes':dest.stat().st_size,'sha256':hashlib.sha256(dest.read_bytes()).hexdigest(),'files':len(items)}
results=[pack('glass-arcana-preview-source.zip',files,root,'glass-arcana/')]
web=list(p for p in (root/'dist-web').rglob('*') if p.is_file())
for required in ['LICENSE','CONTENT-LICENSE.md','ARTWORK-NOTICE.md','THIRD_PARTY_NOTICES.md','licenses/CC-BY-4.0.txt']:
 if not (root/'dist-web'/required).is_file():raise RuntimeError('Missing web notice: '+required)
results.append(pack('glass-arcana-preview-web.zip',web,root/'dist-web',''))
(out/'manifest.json').write_text(json.dumps(results,indent=2)+'\n')
print(json.dumps(results,indent=2))
