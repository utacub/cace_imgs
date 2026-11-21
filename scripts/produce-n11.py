"""Record individual N11 reviews and build batches from accepted originals."""
import argparse
from datetime import datetime, timezone
import hashlib
import json
from pathlib import Path
import re
import shutil
import subprocess
import sys

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PRODUCTION = ROOT / 'production'
ORIGINALS = ROOT / 'output/production/n11'
CATALOG = ROOT / 'src/catalog-data.json'
COLLECTION = 'cace-n11-relats'


def read_json(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(path.suffix + '.tmp')
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    temporary.replace(path)


def timestamp():
    return datetime.now(timezone.utc).isoformat(timespec='seconds')


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def run(*command):
    subprocess.run(command, cwd=ROOT, check=True)


def catalog_at(ref):
    return json.loads(subprocess.check_output(
        ['git', 'show', ref + ':src/catalog-data.json'], cwd=ROOT
    ))


def record_path(item_id):
    return PRODUCTION / 'n11' / f'{item_id}.json'


def record_review(decision, item):
    item_id = item['id']
    directory = ORIGINALS / item_id
    directory.mkdir(parents=True, exist_ok=True)
    record_file = record_path(item_id)
    record = read_json(record_file) if record_file.exists() else {'construction': item, 'attempts': []}
    assert record['construction'] == item
    source = Path(decision['source'])
    source_hash = digest(source)
    if any(attempt['sha256'] == source_hash for attempt in record['attempts']):
        return
    assert record.get('status') != 'accepted', item_id
    assert decision['status'] in ('accepted', 'rejected'), item_id
    assert decision['review'].strip() and decision['prompt'].strip(), item_id
    accepted = decision['status'] == 'accepted'
    if accepted:
        assert decision['alt']['ca'].strip() and decision['alt']['es'].strip(), item_id
    with Image.open(source) as image:
        assert image.format == 'PNG'
        width, height = image.size
        assert width > height
        image.verify()
    name = 'image.png' if accepted else f'rejected-{len(record["attempts"]) + 1:02d}.png'
    destination = directory / name
    if destination.exists():
        assert digest(destination) == source_hash, destination
    else:
        temporary = destination.with_suffix('.tmp')
        shutil.copyfile(source, temporary)
        temporary.replace(destination)
    relative = destination.relative_to(ROOT).as_posix()
    record['attempts'].append({
        'status': decision['status'], 'sha256': source_hash, 'file': relative, 'prompt': decision['prompt'],
        'review': decision['review'], 'reviewedAt': timestamp(),
    })
    record['status'] = decision['status']
    if accepted:
        record.update({
            'reviewed': True, 'prompt': decision['prompt'], 'review': decision['review'], 'alt': decision['alt'],
            'originalSha256': source_hash, 'file': relative, 'width': width, 'height': height,
            'created': timestamp(), 'tool': 'ImageGen integrat',
        })
    write_json(record_file, record)
    write_json(directory / 'brief.json', record)


def progress(plan_items, catalog):
    records = [read_json(record_path(key)) for key in plan_items if record_path(key).exists()]
    accepted = [record['construction']['id'] for record in records if record['status'] == 'accepted']
    imported = [asset['constructionId'] for asset in catalog['assets'] if asset.get('levels') == [11]]
    progress_file = PRODUCTION / 'n11-progress.json'
    state = read_json(progress_file) if progress_file.exists() else {}
    state.update({
        'status': 'active', 'authorization': {'generation': True, 'import': True, 'publication': True},
        'deadlineLocal': '2026-11-21T23:15:00+01:00',
        'planned': len(plan_items), 'reviewed': len(accepted), 'imported': len(imported),
        'catalogVersion': catalog['version'], 'catalogImages': len(catalog['assets']),
        'pending': [key for key in plan_items if key not in accepted],
        'rejectedAttempts': sum(attempt['status'] == 'rejected' for record in records for attempt in record['attempts']),
        'publications': state.get('publications', []),
    })
    write_json(progress_file, state)


def verify_previous(catalog, earlier):
    for key in earlier:
        if key not in ('assets', 'collections', 'version'):
            assert catalog[key] == earlier[key], key
    prior_ids = {asset['id'] for asset in earlier['assets']}
    assert [asset for asset in catalog['assets'] if asset['id'] in prior_ids] == earlier['assets']
    prior_collections = {entry['id'] for entry in earlier['collections']} - {COLLECTION}
    assert ([entry for entry in catalog['collections'] if entry['id'] in prior_collections]
            == [entry for entry in earlier['collections'] if entry['id'] in prior_collections])


def import_batch(items, catalog, version):
    assert re.fullmatch(r'\d+\.\d+\.\d+', version)
    words = {word['id']: word for word in catalog['words']}
    existing = {asset['constructionId']: asset for asset in catalog['assets'] if asset.get('constructionId')}
    collection = next((entry for entry in catalog['collections'] if entry['id'] == COLLECTION), None)
    if collection is None:
        collection = {'id': COLLECTION, 'name': 'N11 · Relats', 'items': []}
        catalog['collections'].append(collection)
    additions = []
    for item_id, item in items.items():
        file = record_path(item_id)
        if not file.exists():
            continue
        record = read_json(file)
        if record['status'] != 'accepted':
            continue
        assert record['reviewed'] and record['construction'] == item, item_id
        original = ROOT / record['file']
        assert original == ORIGINALS / item_id / 'image.png'
        assert digest(original) == record['originalSha256'], item_id
        if item_id in existing:
            assert existing[item_id]['originalSha256'] == record['originalSha256'], item_id
            continue
        assert [words[word_id]['ca'] for word_id in item['wordIds']] == item['labels'], item_id
        relative = f'assets/constructions/n11/{item_id}.webp'
        display = ROOT / 'dist' / relative
        display.parent.mkdir(parents=True, exist_ok=True)
        with Image.open(original) as image:
            temporary = display.with_suffix('.tmp')
            image.save(temporary, format='WEBP', quality=93, method=6)
            temporary.replace(display)
        asset = {
            'id': 'cace-' + item_id, 'src': relative, 'kind': item['kind'], 'levels': [11],
            'title': {'ca': item['title']['ca'], 'es': ' · '.join(words[key]['es'] for key in item['wordIds'])},
            'alt': record['alt'], 'tags': item['wordIds'], 'primaryWordId': item['primaryWordId'],
            'targetWordIds': item['wordIds'], 'origin': 'generated',
            'credit': 'Imatge generada amb IA per a CACE Imatges.', 'created': record['created'],
            'target': item_id, 'constructionId': item_id, 'variant': item['variant'],
            'moments': item['moments'], 'continuity': item['continuity'],
            'semanticRelation': {'type': 'relat', 'familyId': item['familyId'], 'participants': item['participants'],
                                 'settings': item['settings'], 'narrative': item['narrative']},
            'originalSha256': record['originalSha256'], 'displayEncoding': 'webp-quality-93-original-dimensions',
            'displaySha256': digest(display),
        }
        additions.append(asset)
        collection['items'].append(asset['id'])
    assert additions or (catalog['version'] == version and collection['items']), 'No hi ha cap lot revisat per preparar'
    if additions:
        assert tuple(map(int, version.split('.'))) > tuple(map(int, catalog['version'].split('.')))
    catalog['assets'] = additions + catalog['assets']
    catalog['version'] = version
    return collection


def release(plan, items, catalog, version):
    original = catalog_at(plan['baseline']['head'])
    previous = catalog_at('HEAD')
    verify_previous(catalog, original)
    collection = import_batch(items, catalog, version)
    verify_previous(catalog, original)
    verify_previous(catalog, previous)
    n11 = [asset for asset in catalog['assets'] if asset.get('levels') == [11]]
    assert len({asset['originalSha256'] for asset in n11}) == len(n11)
    assert len(n11) == len(collection['items']) == len({asset['id'] for asset in n11})
    assert len(catalog['assets']) == len(original['assets']) + len(n11)
    write_json(CATALOG, catalog)
    package = ROOT / 'package.json'
    write_json(package, dict(read_json(package), version=version))
    general = PRODUCTION / 'progress.json'
    write_json(general, dict(read_json(general), catalogVersion=version, totalImages=len(catalog['assets'])))
    readme_path = ROOT / 'README.md'
    readme = readme_path.read_text(encoding='utf-8')
    readme = re.sub(r'La versió [\d.]+ conté \*\*\d+ imatges\*\*',
                    f"La versió {version} conté **{len(catalog['assets'])} imatges**", readme)
    readme = re.sub(r'\*\*200 seqüències causals N10\*\*(?:, \*\*\d+ relats N11\*\*)?',
                    f'**200 seqüències causals N10**, **{len(n11)} relats N11**', readme)
    readme = readme.replace('N8, N9 o N10 té', 'N8, N9, N10 o N11 té')
    readme = re.sub(r'\x60bank/\x60: les \d+ imatges', f"`bank/`: les {len(catalog['assets'])} imatges", readme)
    readme_path.write_text(readme, encoding='utf-8')
    progress(items, catalog)
    run('node', '--test', 'tests/search.test.cjs')
    run(sys.executable, 'scripts/build.py', '--site-only', '--since', 'HEAD')
    run(sys.executable, 'scripts/pack-bank.py')
    run(sys.executable, 'scripts/check-site.py', '--since', 'HEAD')
    run('git', 'diff', '--check')


def main():
    parser = argparse.ArgumentParser()
    actions = parser.add_subparsers(dest='command', required=True)
    actions.add_parser('review').add_argument('decisions', type=Path)
    actions.add_parser('release').add_argument('version')
    args = parser.parse_args()
    plan = read_json(PRODUCTION / 'n11-plan.json')
    items = {item['id']: item for item in plan['items']}
    catalog = read_json(CATALOG)
    if args.command == 'review':
        for decision in read_json(args.decisions):
            record_review(decision, items[decision['id']])
        progress(items, catalog)
    else:
        release(plan, items, catalog, args.version)


if __name__ == '__main__':
    main()
