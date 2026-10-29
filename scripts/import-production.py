"""Import reviewed production packages into the hosted catalogue, without pixel changes."""
from pathlib import Path
import argparse
import base64
import hashlib
import json
import os
import zipfile

parser=argparse.ArgumentParser()
parser.add_argument('--package', required=True)
parser.add_argument('--version', help='Version label for the updated app')
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]
catalog_path=root/'src/catalog-data.json'
catalog=json.loads(catalog_path.read_text())
def write_verified(path, data):
    temporary=path.with_name(path.name+'.tmp')
    with temporary.open('wb',buffering=0) as stream:
        for start in range(0,len(data),1024*1024):
            chunk=memoryview(data)[start:start+1024*1024]
            while chunk:
                written=stream.write(chunk)
                if not written:
                    raise OSError('No bytes written to '+str(temporary))
                chunk=chunk[written:]
        os.fsync(stream.fileno())
    assert temporary.stat().st_size==len(data)
    assert hashlib.sha256(temporary.read_bytes()).digest()==hashlib.sha256(data).digest()
    temporary.replace(path)
with zipfile.ZipFile(args.package) as archive:
    manifest=json.loads(archive.read('production-manifest.json'))
    originals={f"cace-{c['id']}-{a['variant']}":(c,a) for c in manifest['concepts'] for a in c['assets'] if a['status']=='ready'}
    rows=[]
    collection_map={}
    for name in sorted(n for n in archive.namelist() if n.startswith('CACE_Imatges_import_') and n.endswith('.json')):
        imported=json.loads(archive.read(name))
        assert imported['format']=='cace-imatges-backup' and imported['version']==1
        rows.extend(imported['assets'])
        for c in imported['collections']:
            current=collection_map.setdefault(c['id'],dict(c,items=[]))
            current['items']=list(dict.fromkeys(current['items']+c['items']))
    assert len({a['id'] for a in rows})==len(rows)
    for a in rows:
        concept,record=originals[a['id']]
        image_bytes=archive.read('images/'+record['relative_file'])
        assert hashlib.sha256(image_bytes).hexdigest()==record['sha256']
        assert base64.b64decode(a['src'].split(',',1)[1])==image_bytes
        relative='assets/individuals/'+record['relative_file']
        destination=root/'dist'/relative
        destination.parent.mkdir(parents=True,exist_ok=True)
        write_verified(destination,image_bytes)
        a.update(src=relative,origin='generated',target=concept['id'],targetWordIds=concept['word_ids'],variant=record['variant'],originalSha256=record['sha256'])
new_ids={a['id'] for a in rows}
existing=[a for a in catalog['assets'] if a['id'] not in new_ids]
catalog['assets']=rows+existing
current_collections={c['id']:c for c in catalog.get('collections',[])}
for key,c in collection_map.items():
    previous=current_collections.get(key)
    if previous:
        c['items']=list(dict.fromkeys(previous['items']+c['items']))
    current_collections[key]=c
catalog['collections']=list(current_collections.values())
catalog['version']=args.version or catalog.get('version','0.1.1')
write_verified(catalog_path,json.dumps(catalog,ensure_ascii=False,indent=2).encode('utf-8'))
print(json.dumps({'package_assets':len(rows),'catalog_assets':len(catalog['assets']),'collections':[{'name':c['name'],'count':len(c['items'])} for c in catalog['collections']]},ensure_ascii=False))
