"""Wait until the uploaded Pages artifact is visible to the deployment API."""
import json
import os
import time
import urllib.request


def wait_for_artifact(fetch, artifact_id, artifact_name, attempts=24, pause=time.sleep):
    stable = 0
    for attempt in range(attempts):
        matches = [a for a in fetch()['artifacts'] if a['name'] == artifact_name]
        if len(matches) == 1 and str(matches[0]['id']) == str(artifact_id):
            stable += 1
            # A single positive response can precede visibility on the API
            # replica subsequently used by deploy-pages. Require 30 seconds
            # of consistent metadata before handing over to deployment.
            if stable >= 7:
                return
        else:
            stable = 0
        if attempt + 1 < attempts:
            pause(5)
    raise RuntimeError('Uploaded Pages artifact metadata did not become visible')


if __name__ == '__main__':
    url = (f"{os.environ['GITHUB_API_URL']}/repos/{os.environ['GITHUB_REPOSITORY']}"
           f"/actions/runs/{os.environ['GITHUB_RUN_ID']}/artifacts")

    def fetch():
        request = urllib.request.Request(url, headers={
            'Authorization': 'Bearer ' + os.environ['GH_TOKEN'],
            'Accept': 'application/vnd.github+json',
            'User-Agent': 'CACE-Pages-deployment',
        })
        with urllib.request.urlopen(request, timeout=20) as response:
            return json.load(response)

    wait_for_artifact(fetch, os.environ['ARTIFACT_ID'], os.environ['ARTIFACT_NAME'])
    print('Uploaded Pages artifact metadata verified')
