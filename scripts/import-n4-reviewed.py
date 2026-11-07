"""Import only individually reviewed N4 constructions; preserve all previous assets."""
from pathlib import Path
from datetime import datetime,timezone
import json,sys,shutil,hashlib,subprocess
from PIL import Image
root=Path(__file__).resolve().parents[1]
version=sys.argv[1]
plan=json.loads((root/'production/n4-plan.json').read_text(encoding='utf-8'))
path=root/'src/catalog-data.json'
catalog=json.loads(path.read_text(encoding='utf-8'))
words={w['id']:w for w in catalog['words']}
existing={a.get('constructionId'):a for a in catalog['assets'] if a.get('constructionId')}
collection=next((c for c in catalog['collections'] if c['id']=='cace-n4-subjecte-accio-objecte'),None)
if collection is None:
 collection={'id':'cace-n4-subjecte-accio-objecte','name':'N4 · Subjecte, acció i objecte','items':[]}
 catalog['collections'].append(collection)
new=[]
for item in plan['items']:
 if item['id'] in existing:continue
 record_path=root/'output'/f"n4-generated-{item['id']}.json"
 if not record_path.exists():continue
 record=json.loads(record_path.read_text(encoding='utf-8'))
 if record.get('reviewed') is not True:continue
 assert record.get('review') and record.get('prompt')
 assert record['constructionId']==item['id']
 assert record['kind']==item['kind'] and record['variant']==item['variant']
 assert all(wid in words for wid in item['wordIds']) and len(set(item['wordIds']))==3
 assert [words[wid]['ca'] for wid in item['wordIds']]==item['labels']
 with Image.open(record['file']) as im:im.verify()
 archive=root/'output/production/n4'/item['id']
 archive.mkdir(parents=True,exist_ok=True)
 original=archive/'image.png'
 assert not original.exists(),original
 shutil.copy2(record['file'],original)
 source=f"assets/constructions/n4/{item['id']}.webp"
 dest=root/'dist'/source
 dest.parent.mkdir(parents=True,exist_ok=True)
 assert not dest.exists(),dest
 with Image.open(original) as im:im.save(dest,'WEBP',quality=93,method=6)
 created=datetime.now(timezone.utc).isoformat().replace('+00:00','Z')
 row={'id':'cace-'+item['id'],'src':source,'title':item['title'],'alt':record['alt'],'tags':item['wordIds'],'primaryWordId':item['wordIds'][0],'targetWordIds':item['wordIds'],'levels':[4],'kind':item['kind'],'origin':'generated','credit':'Imatge generada amb IA per a CACE Imatges.','created':created,'target':item['id'],'constructionId':item['id'],'variant':item['variant'],'originalSha256':hashlib.sha256(original.read_bytes()).hexdigest(),'displayEncoding':'webp-quality-93-original-dimensions','displaySha256':hashlib.sha256(dest.read_bytes()).hexdigest()}
 new.append(row)
 collection['items'].append(row['id'])
 brief=dict(record,construction=item,version=version,created=created,file=original.relative_to(root).as_posix())
 folder=root/'production/n4';folder.mkdir(exist_ok=True)
 (folder/(item['id']+'.json')).write_text(json.dumps(brief,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
 (archive/'brief.json').write_text(json.dumps(brief,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
catalog['assets']=new+catalog['assets']
catalog['version']=version
temporary=path.with_suffix('.json.tmp')
temporary.write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
temporary.replace(path)
package_path=root/'package.json';package=json.loads(package_path.read_text(encoding='utf-8'));package['version']=version
package_path.write_text(json.dumps(package,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
done={a['constructionId'] for a in catalog['assets'] if a.get('constructionId') in {item['id'] for item in plan['items']}}
progress={'level':4,'catalogVersion':version,'planned':200,'complete':len(done),'pending':[item['id'] for item in plan['items'] if item['id'] not in done],'completedHabitual':sum(item['group']=='habitual' and item['id'] in done for item in plan['items']),'completedInsolita':sum(item['group']=='insolita' and item['id'] in done for item in plan['items'])}
(root/'production/n4-progress.json').write_text(json.dumps(progress,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
subprocess.run([sys.executable,'-B',str(root/'scripts/update-production-progress.py')],check=True)
print(json.dumps({'version':version,'imported':len(new),'n4Complete':len(done),'images':len(catalog['assets'])},ensure_ascii=False))
