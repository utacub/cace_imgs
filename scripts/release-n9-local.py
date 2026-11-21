"""Prepare and validate one reviewed N9 publication batch."""
from pathlib import Path
import json
import re
import subprocess
import sys

root = Path(__file__).resolve().parents[1]
version, baseline = sys.argv[1:3]

def run(*args):
    subprocess.run(args, cwd=root, check=True)

run(sys.executable, 'scripts/import-n9-reviewed.py', version)
run('node', 'scripts/audit-n9-production.cjs')
catalog = json.loads((root / 'src/catalog-data.json').read_text(encoding='utf-8'))
rows = [asset for asset in catalog['assets'] if asset.get('constructionId', '').startswith('n9-')]
photos = sum(asset['kind'] == 'photo' for asset in rows)
readme_path = root / 'README.md'
readme = readme_path.read_text(encoding='utf-8')
readme = re.sub(r'La versió [\d.]+ conté \*\*\d+ imatges\*\*',
                f"La versió {version} conté **{len(catalog['assets'])} imatges**", readme)
readme = re.sub(r'El N9 incorpora \*\*\d+ de les 200 seqüències aprovades\*\*: \d+ fotografies habituals i \d+ dibuixos plans insòlits',
                f'El N9 incorpora **{len(rows)} de les 200 seqüències aprovades**: {photos} fotografies habituals i {len(rows)-photos} dibuixos plans insòlits', readme)
readme = re.sub(r'`bank/`: les \d+ imatges', f"`bank/`: les {len(catalog['assets'])} imatges", readme)
readme_path.write_text(readme, encoding='utf-8')
progress_path = root / 'production/progress.json'
progress = json.loads(progress_path.read_text(encoding='utf-8'))
progress.update(catalogVersion=version, totalImages=len(catalog['assets']))
progress_path.write_text(json.dumps(progress, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
run('node', '--test', 'tests/search.test.cjs')
run(sys.executable, 'scripts/build.py', '--site-only', '--since', baseline)
run(sys.executable, 'scripts/pack-bank.py')
run(sys.executable, 'scripts/check-site.py', '--since', baseline)
run('git', 'diff', '--check')
