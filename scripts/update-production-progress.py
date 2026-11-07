"""Persist reviewed briefs and a resumable queue of single-word entries."""
from pathlib import Path
import json
from collections import defaultdict
from production_policy import required_variants, SINGLE_IMAGE_TIME_WORDS, SINGLE_IMAGE_ABSTRACT_WORDS, TEXT_BRAND_EXCEPTIONS

root = Path(__file__).resolve().parents[1]
catalog = json.loads((root/'src/catalog-data.json').read_text(encoding='utf-8'))
targets = defaultdict(set)
for asset in catalog['assets']:
    if asset.get('origin') == 'generated':
        for word_id in asset.get('targetWordIds', []):
            targets[word_id].add(asset['variant'])
words = {word['id']: word for word in catalog['words']}
complete = {word_id for word_id, variants in targets.items() if variants == required_variants(words[word_id])}
excluded_categories = {'expressions', 'particules', 'atributs', 'sensacions', 'espai'}
selection = json.loads((root/'production/multiword-selection.json').read_text(encoding='utf-8'))
authorized_multiword = {(word['category'], word['ca']) for word in selection['authorized']}
discarded_multiword = {(word['category'], word['ca']) for word in selection['discarded']}
if selection.get('discardUnproducedMultiwordPersonalEntries'):
    discarded_multiword.update((word['category'], word['ca']) for word in catalog['words'] if word['category'] == 'personal' and len(word['ca'].split()) > 1)
pending = [dict(word, status='pending', needsSemanticReview=True) for word in catalog['words'] if (len(word['ca'].split()) == 1 or (word['category'], word['ca']) in authorized_multiword) and word['id'] not in complete and word['category'] not in excluded_categories and (word['category'], word['ca']) not in discarded_multiword]
folder = root/'production'
folder.mkdir(exist_ok=True)
for brief_path in sorted((root/'output').glob('brief-*.json')):
    brief = json.loads(brief_path.read_text(encoding='utf-8'))
    for variant, record in brief['images'].items():
        record['file'] = f"output/production/{brief['slug']}/{variant}.png"
    (folder/(brief['slug']+'.json')).write_text(json.dumps(brief,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
progress = {'catalogVersion': catalog['version'], 'totalImages': len(catalog['assets']), 'completeVocabularyEntries': len(complete), 'pendingSingleWordEntries': len(pending), 'criteria': {'variants':['foto-01','foto-02','realista-01','pla-01'], 'differentConcreteExemplars':True, 'reviewEveryImageBeforeImport':True, 'noTextInAnyImage':True, 'canonicalRepository':'https://github.com/utacub/cace_imgs', 'hosting':'GitHub Pages'}, 'pending':pending}
progress['criteria']['excludedSingleWordCategories'] = sorted(excluded_categories)
progress['pendingSingleWordEntries'] = sum(len(word['ca'].split()) == 1 for word in pending)
progress['pendingMultiwordEntries'] = sum(len(word['ca'].split()) > 1 for word in pending)
progress['criteria']['authorizedMultiwordEntries'] = selection['authorized']
progress['criteria']['discardedMultiwordEntries'] = [dict(ca=ca, category=category) for category, ca in sorted(discarded_multiword)]
progress['criteria']['singleImageWords'] = {'category': 'temps', 'words': sorted(SINGLE_IMAGE_TIME_WORDS), 'variants': ['pla-01']}
progress['criteria']['singleImageAbstractWords'] = {'categories': SINGLE_IMAGE_ABSTRACT_WORDS, 'variants': ['pla-01']}
progress['criteria']['noTextInAnyImage'] = False
progress['criteria']['noTextOutsideExplicitExceptions'] = True
progress['criteria']['textAndBrandExceptions'] = {'words': sorted(TEXT_BRAND_EXCEPTIONS), 'instructionDate': '2026-11-06', 'scope': 'Only alphabet letters or identifying brand words and marks; no unrelated text or branding.'}
(folder/'progress.json').write_text(json.dumps(progress,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps({key:value for key,value in progress.items() if key not in ('pending','criteria')}))
