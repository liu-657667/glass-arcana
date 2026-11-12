"""Build an independent web asset tree. Never delete or overwrite original PNGs."""
import hashlib,json,shutil,subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[1]
out=root/'.staging/web-public/art';out.mkdir(parents=True,exist_ok=True)
shutil.copytree(root/'public/art/derived',out/'derived',dirs_exist_ok=True)
shutil.copy2(root/'public/art/card-back.svg',out/'card-back.svg')
manifest={}
for src in sorted((root/'public/art').glob('*.png')):
 digest=hashlib.sha256(src.read_bytes()).hexdigest();dest=out/(src.stem+'.jpg')
 subprocess.run(['magick',str(src),'-resize','1024x1536>','-background','white','-alpha','remove','-alpha','off','-sampling-factor','4:4:4','-quality','90',str(dest)],check=True)
 assert hashlib.sha256(src.read_bytes()).hexdigest()==digest
 manifest[src.stem]={'originalSha256':digest,'originalBytes':src.stat().st_size,'fallbackSha256':hashlib.sha256(dest.read_bytes()).hexdigest(),'fallbackBytes':dest.stat().st_size}
assert len(manifest)==78
(root/'.staging/web-assets-manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('Preserved 78 originals. JPEG fallback total bytes:',sum(x['fallbackBytes'] for x in manifest.values()))
