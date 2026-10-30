from pathlib import Path
import argparse,json,base64,subprocess,re,mimetypes,sys
root=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser(description='Build the web app and optionally a standalone HTML file.')
parser.add_argument('--site-only',action='store_true',help='Build dist/ without embedding every image into an offline HTML file.')
parser.add_argument('--offline-output',type=Path,default=root/'output/CACE_Imatges_v0.1.html')
args=parser.parse_args()
subprocess.run([sys.executable,str(root/'scripts/materialize-assets.py')],check=True)
subprocess.run([sys.executable,str(root/'scripts/optimize-catalog.py')],check=True)
subprocess.run(['node','--check',str(root/'src/app.js')],check=True)
data=json.loads((root/'src/catalog-data.json').read_text())
template=(root/'src/template.html').read_text()
css=(root/'src/styles.css').read_text()
app=(root/'src/app.js').read_text()
def compile(data):
    payload=json.dumps(data,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c')
    return template.replace('/*__STYLES__*/',css).replace('/*__DATA__*/',payload).replace('/*__APP__*/',app)
for a in data['assets']:
    assert (root/'dist'/a['src']).is_file(),a['src']
    assert a['tags'] and a['levels']
    assert all(x in {w['id'] for w in data['words']} for x in a['tags'])
    assert all(x in range(1,13) for x in a['levels'])
(root/'dist/index.html').write_text(compile(data))
if args.site_only:
    print(json.dumps({'site_html_bytes':(root/'dist/index.html').stat().st_size,'images':len(data['assets']),'vocabulary_entries':len(data['words'])}))
    raise SystemExit(0)
path=args.offline_output.expanduser().resolve()
path.parent.mkdir(parents=True,exist_ok=True)
# Stream each original image separately so a growing catalogue does not require
# several copies of the complete embedded-image document in memory.
prefix,suffix=template.split('/*__DATA__*/')
prefix=prefix.replace('/*__STYLES__*/',css).replace('/*__APP__*/',app)
suffix=suffix.replace('/*__STYLES__*/',css).replace('/*__APP__*/',app)
def encoded(value):
    return json.dumps(value,ensure_ascii=False,separators=(',',':')).replace('<','\\u003c')
with path.open('w',encoding='utf-8') as f:
    f.write(prefix+'{')
    for index,(key,value) in enumerate(data.items()):
        if index:f.write(',')
        f.write(encoded(key)+':')
        if key!='assets':
            f.write(encoded(value));continue
        f.write('[')
        for i,a in enumerate(value):
            if i:f.write(',')
            offline_asset=dict(a)
            mime=mimetypes.guess_type(a['src'])[0]
            assert mime in {'image/png','image/jpeg','image/webp'},mime
            offline_asset['src']='data:'+mime+';base64,'+base64.b64encode((root/'dist'/a['src']).read_bytes()).decode()
            f.write(encoded(offline_asset))
        f.write(']')
    f.write('}'+suffix)
print(json.dumps({'site_html_bytes':(root/'dist/index.html').stat().st_size,'offline_html_bytes':path.stat().st_size,'images':len(data['assets']),'vocabulary_entries':len(data['words']),'offline_path':str(path)}))
