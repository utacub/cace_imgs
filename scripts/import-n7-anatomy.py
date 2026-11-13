"""Replace only reviewed N7 photographs and retain their prior originals and metadata."""
from pathlib import Path
from datetime import datetime, timezone
from PIL import Image
import hashlib,json,shutil,sys
root=Path(__file__).resolve().parents[1]
def read(p): return json.loads((root/p).read_text(encoding='utf-8'))
def write(p,x): (root/p).write_text(json.dumps(x,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
def sha(p): return hashlib.sha256((root/p).read_bytes()).hexdigest()
review=read('production/n7-anatomy-review.json');version=sys.argv[1]
assert review['status']=='generating'
catalog=read('src/catalog-data.json')
assert catalog['version']=='0.1.134'
jobs=[read('production/n7-anatomy/'+i+'.json') for i in review['replacements']]
assert len(jobs)==24 and all(j['status']=='accepted' for j in jobs)
for j in jobs:
    assert sha(j['file'])==j['originalSha256']
    r=read('production/n7/'+j['id']+'.json')
    assert r['kind']=='photo' and sha(r['file'])==j['previousOriginalSha256']
for j in jobs:
    id=j['id'];recordPath='production/n7/'+id+'.json';r=read(recordPath)
    a=next(a for a in catalog['assets'] if a.get('constructionId')==id)
    assert a['kind']=='photo' and a['originalSha256']==j['previousOriginalSha256']
    parent=Path(r['file']).parent
    previousOriginal=str(parent/'before-anatomy-2026-11-13.png').replace('\\','/')
    previousWebp=str(parent/'before-anatomy-2026-11-13.webp').replace('\\','/')
    assert not (root/previousOriginal).exists()
    shutil.copy2(root/r['file'],root/previousOriginal)
    shutil.copy2(root/'dist'/a['src'],root/previousWebp)
    r.setdefault('revisions',[]).append({'type':'anatomy-correction','replacedAt':datetime.now(timezone.utc).isoformat(),'previousRecord':'production/n7-anatomy/previous/'+id+'.json','previousOriginal':previousOriginal,'previousWebP':previousWebp,'previousOriginalSha256':a['originalSha256'],'previousDisplaySha256':a['displaySha256']})
    shutil.copy2(root/j['file'],root/r['file'])
    source=f'assets/constructions/n7/{id}-anatomy-v2.webp'
    with Image.open(root/j['file']) as im: im.save(root/'dist'/source,'WEBP',quality=93,method=6)
    r.update(prompt=j['prompt'],review=j['review'],reviewedAt=j['reviewedAt'],originalSha256=j['originalSha256'],width=j['width'],height=j['height'],generatedWith=j['generatedWith'],publicationVersion=version,importedAt=datetime.now(timezone.utc).isoformat())
    r.pop('referenceFile',None);r.pop('referenceConstructionId',None)
    if j.get('referenceFile'): r['referenceFile']=j['referenceFile']
    write(recordPath,r);write(str(parent/'brief.json'),r)
    a.update(src=source,originalSha256=j['originalSha256'],displaySha256=sha('dist/'+source))
    j.update(status='imported',publicationVersion=version);write('production/n7-anatomy/'+id+'.json',j)
catalog['version']=version;write('src/catalog-data.json',catalog)
package=read('package.json');package['version']=version;write('package.json',package)
progress=read('production/n7-progress.json');progress['catalogVersion']=version
progress['anatomyRevision']={'reviewedPhotos':100,'replacedPhotos':24,'unchangedDrawings':100,'status':'imported','record':'production/n7-anatomy-review.json'};write('production/n7-progress.json',progress)
review.update(status='imported',catalogVersion=version,importedAt=datetime.now(timezone.utc).isoformat());write('production/n7-anatomy-review.json',review)
print(json.dumps({'version':version,'replacedPhotos':24,'totalImages':len(catalog['assets'])}))
