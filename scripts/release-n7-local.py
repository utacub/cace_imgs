"""Prepare and verify a local N7 publication; commit/push remain explicit steps."""
from pathlib import Path
import subprocess, sys
root=Path(__file__).resolve().parents[1]
version,baseline=sys.argv[1:3]
def run(*args):
    subprocess.run(args,cwd=root,check=True)
run(sys.executable,'scripts/import-n7-reviewed.py',version)
run('node','scripts/update-n7-release.cjs')
run('node','scripts/audit-n7-production.cjs')
run('node','--test','tests/search.test.cjs')
run(sys.executable,'scripts/build.py','--site-only')
run(sys.executable,'scripts/pack-bank.py')
run(sys.executable,'scripts/check-site.py','--since',baseline)
run('git','diff','--check')
