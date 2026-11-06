"""The user's requested number of variants for each vocabulary entry."""

DEFAULT_VARIANTS = {'foto-01', 'foto-02', 'realista-01', 'pla-01'}
TEXT_BRAND_EXCEPTIONS = {'LLETRES', 'BARÇA', 'COLA-CAO', 'FANTA', 'COCA-COLA'}
SINGLE_IMAGE_TIME_WORDS = {
    'DILLUNS', 'DIMARTS', 'DIMECRES', 'DIJOUS', 'DIVENDRES', 'DISSABTE', 'DIUMENGE',
    'GENER', 'FEBRER', 'MARÇ', 'ABRIL', 'MAIG', 'JUNY', 'JULIOL', 'AGOST',
    'SETEMBRE', 'OCTUBRE', 'NOVEMBRE', 'DESEMBRE',
}


# Semantic review: use one stable symbol for abstract concepts.
SINGLE_IMAGE_ABSTRACT_WORDS = {
    "persones": [
        "JO",
        "TU",
        "ELL",
        "ELLA",
        "NOSALTRES",
        "VOSALTRES",
        "ELLS",
        "TIET",
        "TIETA",
        "COSÍ",
        "COSINA"
    ],
    "verbs": [
        "VOLER",
        "AGRADAR",
        "FER",
        "NECESSITAR",
        "TENIR",
        "SER",
        "ESTAR",
        "ESPERAR",
        "PENSAR",
        "ESTIMAR",
        "OBLIDAR",
        "RECORDAR",
        "APRENDRE",
        "SABER",
        "PERDRE",
        "GUANYAR",
        "CONVIDAR",
        "MOLESTAR"
    ],
    "objectes": [
        "COSA",
        "OBJECTES"
    ],
    "colors": [
        "MIDA",
        "FORMA",
        "TOT",
        "RES",
        "MÉS",
        "MENYS",
        "MOLT",
        "POC"
    ],
    "temps": [
        "CAP DE SETMANA",
        "AHIR",
        "AVUI",
        "DEMÀ",
        "ABANS",
        "DESPRÉS",
        "ARA",
        "DIA",
        "SETMANA",
        "MES",
        "ANY",
        "HORA",
        "MINUT",
        "SEGON",
        "AVIAT",
        "TARD"
    ],
    "llocs": [
        "LLOC"
    ],
    "mobles": [
        "INTERNET"
    ],
    "activitats": [
        "LLENGUA",
        "MEDI",
        "MATEMÀTIQUES"
    ],
    "personal": [
        "NOM",
        "EDAT",
        "M'AGRADA",
        "NO M'AGRADA",
        "NECESSITATS",
        "AFICIONS"
    ]
}

def required_variants(word):
    if word['category'] == 'temps' and word['ca'] in SINGLE_IMAGE_TIME_WORDS:
        return {'pla-01'}
    if word['ca'] in SINGLE_IMAGE_ABSTRACT_WORDS.get(word['category'], []):
        return {'pla-01'}
    return DEFAULT_VARIANTS.copy()
