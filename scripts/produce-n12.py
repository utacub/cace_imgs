"""Record individual N12 reviews and prepare versioned batches of accepted pictures."""

import argparse
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PRODUCTION = ROOT / 'production'
CATALOG = ROOT / 'src/catalog-data.json'
ORIGINALS = ROOT / 'output/production/n12'
COLLECTION_ID = 'cace-n12-absurds-visuals'


def read_json(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    temporary.replace(path)


def checksum(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def timestamp():
    return datetime.now(timezone.utc).isoformat(timespec='seconds')


def git_catalog(ref):
    return json.loads(subprocess.check_output(['git', 'show', ref + ':src/catalog-data.json'], cwd=ROOT))


def remember_review(item, decision):
    item_id = item['id']
    record_path = PRODUCTION / 'n12' / (item_id + '.json')
    record = read_json(record_path) if record_path.exists() else {'construction': item, 'attempts': []}
    assert record['construction'] == item, item_id
    assert decision['status'] in ('accepted', 'rejected'), item_id
    assert decision['prompt'].strip() and decision['review'].strip(), item_id
    source = Path(decision['source'])
    digest = checksum(source)
    if any(attempt['sha256'] == digest for attempt in record['attempts']):
        return
    accepted = decision['status'] == 'accepted'
    if accepted:
        assert record.get('status') != 'accepted', item_id
        assert set(decision['alt']) == {'ca', 'es'} and all(text.strip() for text in decision['alt'].values()), item_id
    with Image.open(source) as image:
        assert image.format == 'PNG', item_id
        assert min(image.size) >= 768, item_id
        image.verify()
    filename = 'image.png' if accepted else 'rejected-' + str(len(record['attempts']) + 1).zfill(2) + '.png'
    destination = ORIGINALS / item_id / filename
    destination.parent.mkdir(parents=True, exist_ok=True)
    if destination.exists():
        assert checksum(destination) == digest, destination
    else:
        temporary = destination.with_suffix('.tmp')
        shutil.copyfile(source, temporary)
        temporary.replace(destination)
    relative = destination.relative_to(ROOT).as_posix()
    record['attempts'].append({
        'status': decision['status'], 'file': relative, 'sha256': digest,
        'prompt': decision['prompt'], 'review': decision['review'], 'reviewedAt': timestamp(),
    })
    if record.get('status') != 'accepted':
        record['status'] = decision['status']
    if accepted:
        record.update({
            'file': relative, 'originalSha256': digest, 'alt': decision['alt'],
            'reviewed': True, 'tool': 'ImageGen integrat', 'created': timestamp(),
        })
    write_json(record_path, record)


def reviewed_items(items):
    for item in items.values():
        file = PRODUCTION / 'n12' / (item['id'] + '.json')
        if file.exists():
            record = read_json(file)
            assert record['construction'] == item, item['id']
            yield item, record


def update_progress(items, catalog):
    records = list(reviewed_items(items))
    accepted = {item['id'] for item, record in records if record['status'] == 'accepted'}
    imported = [asset['constructionId'] for asset in catalog['assets'] if asset.get('levels') == [12]]
    write_json(PRODUCTION / 'n12-progress.json', {
        'status': 'active', 'authorization': {'generation': True, 'import': True, 'publication': True},
        'planned': len(items), 'reviewed': len(accepted), 'imported': len(imported),
        'catalogVersion': catalog['version'], 'catalogImages': len(catalog['assets']),
        'pending': [item_id for item_id in items if item_id not in accepted],
        'rejectedAttempts': sum(a['status'] == 'rejected' for _, record in records for a in record['attempts']),
    })


def verify_preservation(baseline, catalog):
    for key in baseline.keys() - {'version', 'assets', 'collections'}:
        assert catalog[key] == baseline[key], key
    for key in ('assets', 'collections'):
        protected = [entry for entry in baseline[key] if entry['id'] != COLLECTION_ID]
        protected_ids = {entry['id'] for entry in protected}
        assert [entry for entry in catalog[key] if entry['id'] in protected_ids] == protected, key


def prepare_release(plan, items, catalog, version):
    new_version = re.fullmatch(r'\d+\.\d+\.\d+', version)
    assert new_version, version
    original = git_catalog(plan['baseline']['head'])
    previous = git_catalog('HEAD')
    verify_preservation(original, catalog)
    verify_preservation(previous, catalog)
    word_lookup = {word['id']: word for word in catalog['words']}
    existing = {asset['id']: asset for asset in catalog['assets']}
    additions = []
    for item, record in reviewed_items(items):
        if record['status'] != 'accepted':
            continue
        item_id = item['id']
        asset_id = 'cace-' + item_id
        source = ROOT / record['file']
        assert record['reviewed'] and source == ORIGINALS / item_id / 'image.png', item_id
        assert checksum(source) == record['originalSha256'], item_id
        if asset_id in existing:
            assert existing[asset_id]['originalSha256'] == record['originalSha256'], item_id
            continue
        assert [word_lookup[key]['ca'] for key in item['wordIds']] == [t['label'] for t in item['terms']], item_id
        relative = f'assets/constructions/n12/{item_id}.webp'
        display = ROOT / 'dist' / relative
        display.parent.mkdir(parents=True, exist_ok=True)
        with Image.open(source) as image:
            temporary = display.with_suffix('.tmp')
            image.convert('RGB').save(temporary, format='WEBP', quality=93, method=6)
            temporary.replace(display)
        additions.append({
            'id': asset_id, 'src': relative, 'kind': 'drawing', 'levels': [12],
            'title': {'ca': item['title'], 'es': ' · '.join(word_lookup[key]['es'] for key in item['wordIds'])},
            'alt': record['alt'], 'tags': item['wordIds'], 'primaryWordId': item['primaryWordId'],
            'targetWordIds': item['wordIds'], 'origin': 'generated',
            'credit': 'Imatge generada amb IA per a CACE Imatges.', 'created': record['created'],
            'target': item_id, 'constructionId': item_id, 'variant': 'pla-01',
            'semanticRelation': {'type': 'absurd-visual', 'mechanism': item['mechanism'], 'subtype': item['subtype']},
            'originalSha256': record['originalSha256'], 'displayEncoding': 'webp-quality-93-original-dimensions',
            'displaySha256': checksum(display),
        })
    if additions:
        assert tuple(map(int, version.split('.'))) > tuple(map(int, catalog['version'].split('.')))
        catalog['assets'] = additions + catalog['assets']
        catalog['version'] = version
    else:
        assert catalog['version'] == version, 'Cap imatge nova revisada per al lot'
    n12 = [asset for asset in catalog['assets'] if asset.get('levels') == [12]]
    assert n12 and len({asset['originalSha256'] for asset in n12}) == len(n12)
    assert len(catalog['assets']) == len(original['assets']) + len(n12)
    collection = next((c for c in catalog['collections'] if c['id'] == COLLECTION_ID), None)
    if collection is None:
        collection = {'id': COLLECTION_ID, 'name': 'N12 · Absurds visuals', 'items': []}
        catalog['collections'].append(collection)
    collection['items'] = sorted(asset['id'] for asset in n12)
    verify_preservation(original, catalog)
    verify_preservation(previous, catalog)
    write_json(CATALOG, catalog)
    update_progress(items, catalog)
    for filename in ('package.json', 'production/progress.json'):
        file = ROOT / filename
        data = read_json(file)
        if filename == 'package.json':
            data['version'] = version
        else:
            data.update(catalogVersion=version, totalImages=len(catalog['assets']))
        write_json(file, data)
    readme = ROOT / 'README.md'
    prose = readme.read_text(encoding='utf-8')
    prose = re.sub(r'La versió [\d.]+ conté \*\*\d+ imatges\*\*',
                   f'La versió {version} conté **{len(catalog["assets"])} imatges**', prose)
    prose = re.sub(r'\*\*200 relats N11\*\*(?:, \*\*\d+ absurds visuals N12\*\*)?',
                   f'**200 relats N11**, **{len(n12)} absurds visuals N12**', prose)
    prose = prose.replace('N10 o N11 té', 'N10, N11 o N12 té')
    prose = re.sub(r'(`bank/`: les )\d+ imatges', rf'\g<1>{len(catalog["assets"])} imatges', prose)
    readme.write_text(prose, encoding='utf-8')
    for command in [
        ['node', '--test', 'tests/search.test.cjs'],
        [sys.executable, 'scripts/build.py', '--site-only', '--since', 'HEAD'],
        [sys.executable, 'scripts/pack-bank.py'],
        [sys.executable, 'scripts/check-site.py', '--since', 'HEAD'],
        ['git', 'diff', '--check'],
    ]:
        subprocess.run(command, cwd=ROOT, check=True, env={**os.environ, 'PYTHONUTF8': '1'})


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    actions = parser.add_subparsers(dest='command', required=True)
    actions.add_parser('review').add_argument('decisions', type=Path)
    actions.add_parser('release').add_argument('version')
    args = parser.parse_args()
    plan = read_json(PRODUCTION / 'n12-plan.json')
    items = {item['id']: item for item in plan['items']}
    catalog = read_json(CATALOG)
    if args.command == 'review':
        for decision in read_json(args.decisions):
            remember_review(items[decision['id']], decision)
        update_progress(items, catalog)
    else:
        prepare_release(plan, items, catalog, args.version)


if __name__ == '__main__':
    main()
