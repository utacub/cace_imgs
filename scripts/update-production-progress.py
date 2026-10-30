"""Persist reviewed briefs and a resumable queue of single-word entries."""
from pathlib import Path
import json
from collections import defaultdict

root = Path(__file__).resolve().parents[1]
catalog = json.loads((root/'src/catalog-data.json').read_text(encoding='utf-8'))
targets = defaultdict(set)
for asset in catalog['assets']:
    if asset.get('origin') == 'generated':
        for word_id in asset.get('targetWordIds', []):
            targets[word_id].add(asset['variant'])
complete = {word_id for word_id, variants in targets.items() if variants == {'foto-01','foto-02','realista-01','pla-01'}}
pending = [dict(word, status='pending', needsSemanticReview=True) for word in catalog['words'] if len(word['ca'].split()) == 1 and word['id'] not in complete]
folder = root/'production'
folder.mkdir(exist_ok=True)
for brief_path in sorted((root/'output').glob('brief-*.json')):
    brief = json.loads(brief_path.read_text(encoding='utf-8'))
    for variant, record in brief['images'].items():
        record['file'] = f"output/production/{brief['slug']}/{variant}.png"
    (folder/(brief['slug']+'.json')).write_text(json.dumps(brief,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
progress = {'catalogVersion': catalog['version'], 'totalImages': len(catalog['assets']), 'completeVocabularyEntries': len(complete), 'pendingSingleWordEntries': len(pending), 'criteria': {'variants':['foto-01','foto-02','realista-01','pla-01'], 'differentConcreteExemplars':True, 'reviewEveryImageBeforeImport':True, 'canonicalRepository':'https://github.com/utacub/cace_imgs', 'hosting':'GitHub Pages'}, 'pending':pending}
(folder/'progress.json').write_text(json.dumps(progress,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps({key:value for key,value in progress.items() if key not in ('pending','criteria')}))
