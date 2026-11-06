"""The user's requested number of variants for each vocabulary entry."""

DEFAULT_VARIANTS = {'foto-01', 'foto-02', 'realista-01', 'pla-01'}
SINGLE_IMAGE_TIME_WORDS = {
    'DILLUNS', 'DIMARTS', 'DIMECRES', 'DIJOUS', 'DIVENDRES', 'DISSABTE', 'DIUMENGE',
    'GENER', 'FEBRER', 'MARÇ', 'ABRIL', 'MAIG', 'JUNY', 'JULIOL', 'AGOST',
    'SETEMBRE', 'OCTUBRE', 'NOVEMBRE', 'DESEMBRE',
}


def required_variants(word):
    if word['category'] == 'temps' and word['ca'] in SINGLE_IMAGE_TIME_WORDS:
        return {'pla-01'}
    return DEFAULT_VARIANTS.copy()
