"""Rewrite tag-list alternative texts of N5-N8 as short descriptive sentences.

The sentences are built from the structured roles of each construction plan,
so they describe the scene the image was reviewed against. N9 sequences take
their texts from production/alt-n9.json, written from the moment evidence.
"""
from pathlib import Path
import json
import sys

root = Path(__file__).resolve().parents[1]
catalog_path = root / 'src/catalog-data.json'
data = json.loads(catalog_path.read_text(encoding='utf-8'))
words = {w['id']: w for w in data['words']}
plans = {n: {i['id']: i for i in json.loads((root / f'production/n{n}-plan.json').read_text(encoding='utf-8'))['items']} for n in range(5, 10)}

# --- Lexicon -----------------------------------------------------------------
CA_FEM = {'FLOR', 'CLAU', 'NEU', 'LLUM', 'POSTAL', 'CLASSE', 'LLET', 'HABITACIÓ', 'PELL', 'DONA', 'MAR_F'}
CA_MASC_A = {'PIJAMA', 'PARAIGUA'}
ES_FEM = {'FLOR', 'LLAVE', 'NIEVE', 'LUZ', 'POSTAL', 'CLASE', 'LECHE', 'NUBE', 'HABITACIÓN', 'PIEL', 'MUJER'}
ES_MASC_A = {'PIJAMA', 'PLANETA'}
CA_PLURAL_FEM = {'PECES', 'ANELLES', 'GALETES', 'SABATES', 'ULLERES', 'TISORES', 'BALES', 'LLENTIES', 'CONSTRUCCIONS'}
CA_PLURAL_MASC = {'GOMETS', 'CROMOS', 'PÈSOLS', 'CIGRONS', 'MACARRONS', 'CÈNTIMS'}
ES_PLURAL_FEM = {'PIEZAS', 'ANILLAS', 'GALLETAS', 'PEGATINAS', 'GAFAS', 'TIJERAS', 'CANICAS', 'LENTEJAS', 'CONSTRUCCIONES'}
ES_PLURAL_MASC = {'ZAPATOS', 'CROMOS', 'GUISANTES', 'GARBANZOS', 'MACARRONES', 'CÉNTIMOS'}
MASS = {'AIGUA', 'LLET', 'SUC', 'ARRÒS', 'SOPA', 'PLASTILINA', 'XOCOLATA', 'CAFÈ', 'AMANIDA', 'HERBA', 'NEU', 'ROBA', 'PA', 'FORMATGE',
        'AGUA', 'LECHE', 'ZUMO', 'ARROZ', 'CHOCOLATE', 'CAFÉ', 'ENSALADA', 'HIERBA', 'NIEVE', 'ROPA', 'PAN', 'QUESO'}
ANIMATE = {'NOI', 'DONA', 'HOME', 'NENA', 'NEN', 'NOIA', 'NADÓ', 'GOS', 'ÓS', 'MICO', 'ESQUIROL', 'ELEFANT', 'RUC', 'TORTUGA', 'PORC', 'CONILL',
           'GAT', 'ZEBRA', 'GIRAFA', 'PINGUÍ', 'CANGUR', 'CABRA', 'OVELLA', 'TIGRE', 'CRANC', 'SARGANTANA', 'VACA', 'CAMELL', 'RATOLÍ', 'CAVALL',
           'FOCA', 'LLOP', 'DINOSAURE', 'GALLINA', 'ÀNEC', 'MUSSOL', 'GRANOTA', 'LLEÓ', 'PAPALLONA', 'BALENA', 'OCELL', 'PEIX', 'VAMPIR', 'MONSTRE'}
# Plural forms for ENTRE (two identical referents).
CA_PLURALS = {'CAIXA': 'caixes', 'CADIRA': 'cadires', 'COIXÍ': 'coixins', 'ARBRE': 'arbres', 'COTXE': 'cotxes', 'TASSA': 'tasses',
              'SABATES': 'sabates', 'LLAPIS': 'llapis', 'PLAT': 'plats'}
ES_PLURALS = {'CAJA': 'cajas', 'SILLA': 'sillas', 'ALMOHADA': 'almohadas', 'ÁRBOL': 'árboles', 'COCHE': 'coches', 'TAZA': 'tazas',
              'ZAPATOS': 'zapatos', 'LÁPIZ': 'lápices', 'PLATO': 'platos'}
CA_TWO = {'m': 'dos', 'f': 'dues'}
ES_TWO = {'m': 'dos', 'f': 'dos'}

VERBS = {  # label: (ca 3sg, es 3sg, ca preposition before patient, es preposition before patient)
    'CLASSIFICAR': ('classifica', 'clasifica'), 'POSAR': ('posa', 'pone'), 'GUARDAR': ('guarda', 'guarda'), 'MULLAR': ('mulla', 'moja'),
    'ASSECAR': ('asseca', 'seca'), 'DIBUIXAR': ('dibuixa', 'dibuja'), 'PINTAR': ('pinta', 'pinta'), 'NETEJAR': ('neteja', 'limpia'),
    'TRENCAR': ('trenca', 'rompe'), 'PUNXAR': ('punxa', 'pincha'), 'TALLAR': ('talla', 'corta'), 'ESTRIPAR': ('estripa', 'rasga'),
    'JUGAR': ('juga amb', 'juega con'), 'COSIR': ('cus', 'cose'), 'PLANTAR': ('planta', 'planta'), 'REGAR': ('rega', 'riega'),
    'MENJAR': ('menja', 'come'), 'TANCAR': ('tanca', 'cierra'), 'AGAFAR': ('agafa', 'coge'), 'PENTINAR': ('pentina', 'peina'),
    'PUJAR': ('puja', 'sube'), 'BAIXAR': ('baixa', 'baja'), 'OBRIR': ('obre', 'abre'), 'PORTAR': ('porta', 'lleva'), 'TOCAR': ('toca', 'toca'),
    'OLORAR': ('olora', 'huele'), 'LLEGIR': ('llegeix', 'lee'), 'BEURE': ('beu', 'bebe'), 'VESTIR': ('vesteix', 'viste'),
    'BALLAR': ('balla', 'baila'), 'DORMIR': ('dorm', 'duerme'), 'RIURE': ('riu', 'ríe'), 'PLORAR': ('plora', 'llora'),
    'SEURE': ('SEURE', 'SEURE'), 'ABRAÇAR': ('abraça', 'abraza'), 'SALTAR': ('salta', 'salta'), 'AIXECAR': ('aixeca', 'levanta'),
    'DONAR': ('dona', 'da'), 'ESTIRAR': ('estira', 'estira'), 'PASSEJAR': ('passeja', 'pasea'), 'CUINAR': ('cuina', 'cocina'),
}
ADJ = {  # label: ca (m, f, mpl, fpl), es (m, f, mpl, fpl)
    'BUIT': (('buit', 'buida', 'buits', 'buides'), ('vacío', 'vacía', 'vacíos', 'vacías')),
    'PLE': (('ple', 'plena', 'plens', 'plenes'), ('lleno', 'llena', 'llenos', 'llenas')),
    'NET': (('net', 'neta', 'nets', 'netes'), ('limpio', 'limpia', 'limpios', 'limpias')),
    'BRUT': (('brut', 'bruta', 'bruts', 'brutes'), ('sucio', 'sucia', 'sucios', 'sucias')),
    'SEC': (('sec', 'seca', 'secs', 'seques'), ('seco', 'seca', 'secos', 'secas')),
    'MULLAT': (('mullat', 'mullada', 'mullats', 'mullades'), ('mojado', 'mojada', 'mojados', 'mojadas')),
    'GRAN': (('gran', 'gran', 'grans', 'grans'), ('grande', 'grande', 'grandes', 'grandes')),
    'PETITA': (('petit', 'petita', 'petits', 'petites'), ('pequeño', 'pequeña', 'pequeños', 'pequeñas')),
    'LLARG': (('llarg', 'llarga', 'llargs', 'llargues'), ('largo', 'larga', 'largos', 'largas')),
    'CURT': (('curt', 'curta', 'curts', 'curtes'), ('corto', 'corta', 'cortos', 'cortas')),
    'BLAU': (('blau', 'blava', 'blaus', 'blaves'), ('azul', 'azul', 'azules', 'azules')),
    'GROC': (('groc', 'groga', 'grocs', 'grogues'), ('amarillo', 'amarilla', 'amarillos', 'amarillas')),
    'VERMELL': (('vermell', 'vermella', 'vermells', 'vermelles'), ('rojo', 'roja', 'rojos', 'rojas')),
    'LILA': (('lila', 'lila', 'lila', 'lila'), ('lila', 'lila', 'lilas', 'lilas')),
    'VERD': (('verd', 'verda', 'verds', 'verdes'), ('verde', 'verde', 'verdes', 'verdes')),
    'TOPOS': (('de topos',) * 4, ('de lunares',) * 4),
    'RATLLES': (('de ratlles',) * 4, ('de rayas',) * 4),
}
POSITION = {  # specifier label: (ca, es) phrase placed before the anchor noun phrase
    'SOTA': ('sota', 'debajo de'), 'SOBRE': ('sobre', 'sobre'), 'DINS': ('dins de', 'dentro de'), 'FORA': ('fora de', 'fuera de'),
}
N5_PREP = {
    'SOTA': ('sota', 'debajo de'), 'SOBRE': ('sobre', 'sobre'), 'DINS': ('dins de', 'dentro de'), 'FORA': ('fora de', 'fuera de'),
    'DAVANT': ('davant de', 'delante de'), 'DARRERE': ('darrere de', 'detrás de'), 'AL COSTAT': ('al costat de', 'al lado de'),
    'AMB': ('amb', 'con'), 'TENIR': ('té', 'tiene'),
}


class Noun:
    def __init__(self, word_id):
        self.word = words[word_id]
        self.ca_label, self.es_label = self.word['ca'], self.word['es']
        self.ca_text, self.es_text = self.ca_label.lower(), self.es_label.lower()

    def gender(self, language):
        label = self.ca_label if language == 'ca' else self.es_label
        if language == 'ca':
            if label in CA_PLURAL_FEM: return 'f'
            if label in CA_PLURAL_MASC: return 'm'
            if label in CA_FEM: return 'f'
            if label in CA_MASC_A: return 'm'
            return 'f' if label.endswith('A') else 'm'
        if label in ES_PLURAL_FEM: return 'f'
        if label in ES_PLURAL_MASC: return 'm'
        if label in ES_FEM: return 'f'
        if label in ES_MASC_A: return 'm'
        return 'f' if label.endswith('A') else 'm'

    def plural(self, language):
        return (self.ca_label in CA_PLURAL_FEM | CA_PLURAL_MASC) if language == 'ca' else (self.es_label in ES_PLURAL_FEM | ES_PLURAL_MASC)

    def bare(self, language):
        label = self.ca_label if language == 'ca' else self.es_label
        return label in MASS or self.plural(language)

    def text(self, language):
        return self.ca_text if language == 'ca' else self.es_text

    def indefinite(self, language, other=False, plural_article=False):
        noun = self.text(language)
        if plural_article and self.plural(language):
            f = self.gender(language) == 'f'
            return (('unes ' if f else 'uns ') if language == 'ca' else ('unas ' if f else 'unos ')) + noun
        if self.bare(language):
            return noun
        g = self.gender(language)
        if other:
            return (('una altra ' if g == 'f' else 'un altre ') if language == 'ca' else ('otra ' if g == 'f' else 'otro ')) + noun
        return (('una ' if g == 'f' else 'un ') if language == 'ca' else ('una ' if g == 'f' else 'un ')) + noun

    def definite(self, language):
        noun, g, plural = self.text(language), self.gender(language), self.plural(language)
        if language == 'es':
            return {('m', False): 'el ', ('f', False): 'la ', ('m', True): 'los ', ('f', True): 'las '}[(g, plural)] + noun
        if plural:
            return ('les ' if g == 'f' else 'els ') + noun
        vowel = noun[0] in 'aeiouàèéíòóúh'
        if vowel and not (g == 'f' and noun[:1] in 'iuíú'):
            return "l'" + noun
        return ('la ' if g == 'f' else 'el ') + noun

    def adjective(self, label, language):
        forms = ADJ[label][0 if language == 'ca' else 1]
        index = (1 if self.gender(language) == 'f' else 0) + (2 if self.plural(language) else 0)
        return forms[index]


def join_prep(prep, noun_phrase, language):
    if prep.endswith(' de') or prep == 'de':
        base = prep[:-2]
        if noun_phrase.startswith('el '):
            return base + 'del ' + noun_phrase[3:]
        if language == 'ca' and noun_phrase.startswith('els '):
            return base + 'dels ' + noun_phrase[4:]
        if language == 'ca' and noun_phrase[:1] in 'aeiouàèéíòóúh':
            return base + "d'" + noun_phrase
    return prep + ' ' + noun_phrase


def cap(text):
    return text[:1].upper() + text[1:]


def verb_phrase(label, agent, language):
    ca, es = VERBS[label]
    if label == 'SEURE':
        f = agent.gender(language) == 'f'
        return ('està asseguda' if f else 'està assegut') if language == 'ca' else ('está sentada' if f else 'está sentado')
    return ca if language == 'ca' else es


def object_phrase(noun, language, verb_label=None, other=False):
    phrase = noun.indefinite(language, other)
    if language == 'es' and noun.ca_label in ANIMATE and verb_label not in ('JUGAR',):
        phrase = 'a ' + phrase
    return phrase


def roles_of(item):
    return {r['role']: r for r in item['roles']}


def n5(item, language):
    a, rel, b = item['labels']
    first, second = Noun(item['wordIds'][0]), Noun(item['wordIds'][2])
    if rel == 'ENTRE':
        plural = (CA_PLURALS if language == 'ca' else ES_PLURALS)[second.ca_label if language == 'ca' else second.es_label]
        two = '' if second.plural(language) and second.ca_label == 'SABATES' else (CA_TWO if language == 'ca' else ES_TWO)[second.gender(language)] + ' '
        if second.ca_label == 'SABATES':
            phrase = 'dos parells de sabates' if language == 'ca' else 'dos pares de zapatos'
        else:
            phrase = two + plural
        return cap(first.indefinite(language)) + ' entre ' + phrase + '.'
    prep = N5_PREP[rel][0 if language == 'ca' else 1]
    if rel == 'TENIR':
        return cap(first.indefinite(language)) + ' ' + prep + ' ' + second.indefinite(language) + '.'
    return cap(first.indefinite(language)) + ' ' + join_prep(prep, second.indefinite(language, plural_article=rel != 'AMB'), language) + '.'


def n6(item, language):
    r = roles_of(item)
    agent = Noun(r['agent']['wordId'])
    verb = r['action']['label']
    sentence = cap(agent.indefinite(language)) + ' ' + verb_phrase(verb, agent, language)
    kind = item['informationType']
    if kind == 'instrument':
        sentence += ' ' + object_phrase(Noun(r['patient']['wordId']), language, verb)
        sentence += (' amb ' if language == 'ca' else ' con ') + Noun(r['instrument']['wordId']).indefinite(language)
    elif kind == 'destinatari':
        sentence += ' ' + Noun(r['theme']['wordId']).indefinite(language)
        sentence += ' a ' + Noun(r['recipient']['wordId']).indefinite(language, other=r['recipient']['label'] == r['agent']['label'])
    else:
        sentence += ' ' + object_phrase(Noun(r['patient']['wordId']), language, verb)
        sentence += ' en ' + Noun(r['location']['wordId']).indefinite(language)
    return sentence + '.'


def other_one(noun, language):
    f, plural = noun.gender(language) == 'f', noun.plural(language)
    if language == 'ca':
        return ('les altres' if f else 'els altres') if plural else ("l'altra" if f else "l'altre")
    return ('las otras' if f else 'los otros') if plural else ('la otra' if f else 'el otro')


def n7(item, language):
    """Name the chosen referent only; the distractor's qualifier stays out of the indexed text."""
    r = roles_of(item)
    agent, patient = Noun(r['agent']['wordId']), Noun(r['patient']['wordId'])
    verb = r['action']['label']
    target = r['specifier']['label']
    personal = 'a ' if language == 'es' and patient.ca_label in ANIMATE else ''
    head = cap(agent.indefinite(language)) + ' ' + verb_phrase(verb, agent, language) + ' ' + personal
    if target in POSITION:
        anchor = Noun(r['anchor']['wordId'])
        where = join_prep(POSITION[target][0 if language == 'ca' else 1], anchor.definite(language), language)
        relative = (' que hi ha ' if language == 'ca' else ' que está ') + where
        chosen = patient.definite(language) + relative
    else:
        chosen = patient.definite(language) + ' ' + patient.adjective(target, language)
    joiner = ' i no ' if language == 'ca' else ' y no '
    return head + chosen + joiner + personal + other_one(patient, language) + '.'


def clause(event, language, previous_agent=None):
    r = {x['role']: x for x in event['roles']}
    agent = Noun(r['agent']['wordId'])
    same = previous_agent is not None and previous_agent == r['agent']['label']
    subject = agent.indefinite(language, other=same)
    label = (r.get('action') or r.get('state'))['label']
    text = subject + ' ' + verb_phrase(label, agent, language)
    if 'patient' in r:
        text += ' ' + object_phrase(Noun(r['patient']['wordId']), language, label)
    return text, r['agent']['label']


def n8(item, language):
    first, agent = clause(item['events'][0], language)
    second, _ = clause(item['events'][1], language, agent)
    return cap(first) + (' mentre ' if language == 'ca' else ' mientras ') + second + '.'


BUILDERS = {5: n5, 6: n6, 7: n7, 8: n8}


def main():
    n9_texts = json.loads((root / 'production/alt-n9.json').read_text(encoding='utf-8')) if (root / 'production/alt-n9.json').exists() else {}
    changed = 0
    preview = '--preview' in sys.argv
    for asset in data['assets']:
        prefix = asset['id'].split('-')[1]
        if prefix not in {'n5', 'n6', 'n7', 'n8', 'n9'}:
            continue
        if '·' not in asset['alt']['ca']:
            continue
        level = int(prefix[1:])
        item = plans[level][asset['constructionId']]
        if level == 9:
            if asset['constructionId'] not in n9_texts:
                continue
            new = n9_texts[asset['constructionId']]
        else:
            new = {language: BUILDERS[level](item, language) for language in ('ca', 'es')}
        if preview:
            print(asset['id'], '|', asset['alt']['ca'], '=>', new['ca'], '||', new['es'])
            continue
        asset['alt'] = {'ca': new['ca'], 'es': new['es']}
        changed += 1
    if not preview:
        catalog_path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
        print(json.dumps({'altTextsRewritten': changed}))


if __name__ == '__main__':
    main()
