"""Prepare a reviewed N8 batch, preserving all earlier catalogue entries."""
from pathlib import Path
import subprocess, sys
root = Path(__file__).resolve().parents[1]
version, baseline = sys.argv[1:3]
def run(*args):
    subprocess.run(args, cwd=root, check=True)
run(sys.executable, 'scripts/import-n8-reviewed.py', version)
run('node', 'scripts/update-n8-release.cjs')
run('node', 'scripts/audit-n8-production.cjs')
run('node', '--test', 'tests/search.test.cjs')
run(sys.executable, 'scripts/build.py', '--site-only', '--since', baseline)
run(sys.executable, 'scripts/pack-bank.py')
run(sys.executable, 'scripts/check-site.py', '--since', baseline)
run('git', 'diff', '--check')
