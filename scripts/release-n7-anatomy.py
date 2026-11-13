"""Validate and package the already reviewed photograph replacements."""
from pathlib import Path
import subprocess,sys
root=Path(__file__).resolve().parents[1]
def run(*args): subprocess.run(args,cwd=root,check=True)
run('node','scripts/update-n7-release.cjs')
run('node','scripts/audit-n7-anatomy.cjs')
run('node','scripts/audit-n7-production.cjs')
run('node','--test','tests/search.test.cjs')
run(sys.executable,'scripts/build.py','--site-only')
run(sys.executable,'scripts/pack-bank.py')
run(sys.executable,'scripts/check-site.py','--since','376742fb87c9553c38a4a1bc935a656ba5bd6603')
run('git','diff','--check')
