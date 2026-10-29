import json, hashlib, re, sys
from pathlib import Path

source=Path(sys.argv[1])
target=Path(__file__).resolve().parents[1]/'src/catalog-data.json'
d=json.loads(source.read_text(encoding='utf-8-sig'))
categories=[
('expressions','Expressions','Expresiones','message'),
('persones','Persones','Personas','person'),
('animals','Animals i plantes','Animales y plantas','leaf'),
('jocs','Jocs i esports','Juegos y deportes','ball'),
('particules','Preguntes i partícules','Preguntas y partículas','help'),
('verbs','Verbs','Verbos','activity'),
('atributs','Atributs','Atributos','sparkles'),
('sensacions','Sensacions i sentiments','Sensaciones y sentimientos','heart'),
('cos','Cos, higiene i salut','Cuerpo, higiene y salud','plus'),
('roba','Roba i complements','Ropa y complementos','shirt'),
('aliments','Aliments i begudes','Alimentos y bebidas','apple'),
('objectes','Objectes','Objetos','box'),
('colors','Colors, forma i mida','Colores, forma y tamaño','palette'),
('temps','Temps','Tiempo','clock'),
('llocs','Llocs','Lugares','pin'),
('mobles','Aparells i mobles','Aparatos y muebles','chair'),
('transports','Transports','Transportes','car'),
('espai','Espai','Espacio','compass'),
('activitats','Activitats i festes','Actividades y fiestas','calendar'),
('personal','Sobre mi','Sobre mí','person'),
]
prefixes=[('EXPRESSIONS','expressions'),('PERSONES','persones'),('ANIMALS I PLANTES','animals'),('JOCS I ESPORTS','jocs'),('PREGUNTES','particules'),('VERBS','verbs'),('ATRIBUTS','atributs'),('SENSACIONS','sensacions'),('COS, HIGIENE','cos'),('ROBA','roba'),('ALIMENTS','aliments'),('OBJECTES','objectes'),('COLOR','colors'),('TEMPS','temps'),('LLOCS','llocs'),('APARELLS','mobles'),('TRANSPORTS','transports'),('ESPAI','espai'),('ACTIVITATS','activitats'),('PERSONAL','personal')]
missing_es={'MELMELADA':'MERMELADA','XOCOLATA':'CHOCOLATE','PASTÍS':'PASTEL','TORRÓ':'TURRÓN','PANELLETS':'PANELLETS','BEGUDES':'BEBIDAS','AIGUA':'AGUA','SUC':'ZUMO','LLET':'LECHE','CAFÈ':'CAFÉ','CEREALS':'CEREALES','OLI':'ACEITE','VINAGRE':'VINAGRE','ENTREPÀ':'BOCADILLO','OLIVES':'ACEITUNAS','EMBOTIT':'EMBUTIDO','PERNIL':'JAMÓN'}
corrections={'DIVERTIT':'DIVERTIDO','PACIÈNCIA':'PACIENCIA','FORN DE PA':'PANADERÍA'}
words={}
for g in d['grids']:
    name=g.get('label',{}).get('ca','').strip()
    category=next((cat for prefix,cat in prefixes if name.upper().startswith(prefix)),None)
    if not category: continue
    for e in g['gridElements']:
        ca=e.get('label',{}).get('ca','').strip()
        actions=e.get('actions',[])
        if not ca or not any(a.get('modelName') in ['GridActionSpeak','GridActionSpeakCustom'] for a in actions): continue
        if any(a.get('modelName')=='GridActionNavigate' for a in actions): continue
        key=category+'|'+ca
        es=e.get('label',{}).get('es','').strip()
        es=corrections.get(ca,es or missing_es.get(ca,ca))
        if key not in words:
            words[key]={'id':'w-'+hashlib.sha1(key.encode()).hexdigest()[:12],'ca':ca,'es':es,'category':category,'refs':[]}
        words[key]['refs'].append({'board':name,'x':e.get('x'),'y':e.get('y')})
levels=[
('Conceptes individuals','Conceptos individuales','Una unitat de significat.','Una unidad de significado.'),
('Entitat i atribut','Entidad y atributo','Una entitat i una característica.','Una entidad y una característica.'),
('Subjecte i acció','Sujeto y acción','Qui fa l’acció o presenta un estat.','Quién realiza la acción o presenta un estado.'),
('Subjecte, acció i objecte','Sujeto, acción y objeto','Qui fa què a qui o a què.','Quién hace qué a quién o a qué.'),
('Relacions','Relaciones','Espai, possessió i contingut.','Espacio, posesión y contenido.'),
('Més informació','Más información','Instrument, destinatari o lloc.','Instrumento, destinatario o lugar.'),
('Precisió','Precisión','Distingir referents semblants.','Distinguir referentes parecidos.'),
('Dos esdeveniments','Dos acontecimientos','Relacionar dues accions o estats.','Relacionar dos acciones o estados.'),
('Seqüències','Secuencias','Ordre temporal i transformacions.','Orden temporal y transformaciones.'),
('Causes','Causas','Causes i conseqüències visibles.','Causas y consecuencias visibles.'),
('Relats','Relatos','Integrar participants i esdeveniments.','Integrar participantes y acontecimientos.'),
('Absurds visuals','Absurdos visuales','Explicar combinacions atípiques.','Explicar combinaciones atípicas.'),
]
def w(ca,category=None):
    values=[v for v in words.values() if v['ca']==ca and (category is None or v['category']==category)]
    assert len(values)==1,(ca,category,len(values))
    return values[0]['id']
def asset(id,file,ca,es,kind,tags,levels,altca,altes):
    return {'id':id,'src':'assets/'+file,'title':{'ca':ca,'es':es},'kind':kind,'tags':[w(*x) if isinstance(x,tuple) else w(x) for x in tags],'levels':levels,'alt':{'ca':altca,'es':altes},'origin':'sample','credit':'CACE Imatges · IA','created':'2026-10-28','notes':{'ca':'Imatge de la mostra inicial.','es':'Imagen de la muestra inicial.'}}
assets=[
asset('sample-girl-drawing','nena-menjar-poma-dibuix.png','Nena · menjar · poma','Niña · comer · manzana','drawing',['NENA',('MENJAR','verbs'),'POMA','VERMELL'],[3,4],'Dibuix d’una nena menjant una poma vermella.','Dibujo de una niña comiendo una manzana roja.'),
asset('sample-man-photo','home-llegir-llibre-foto.png','Home · llegir · llibre','Hombre · leer · libro','photo',['HOME','LLEGIR','LLIBRE','BLAU','SEURE'],[3,4],'Fotografia d’un home llegint un llibre obert.','Fotografía de un hombre leyendo un libro abierto.'),
asset('sample-ball-chair','pilota-sobre-cadira-dibuix.png','Pilota · sobre · cadira','Pelota · sobre · silla','drawing',['PILOTA','SOBRE','CADIRA','VERMELL','FUSTA'],[5],'Dibuix d’una pilota vermella sobre el seient d’una cadira.','Dibujo de una pelota roja sobre el asiento de una silla.'),
asset('sample-apple','poma-foto.png','Poma','Manzana','photo',['POMA','VERMELL'],[1,2],'Fotografia d’una poma vermella sobre fons clar.','Fotografía de una manzana roja sobre fondo claro.'),
asset('sample-dog','gos-foto.png','Gos','Perro','photo',['GOS'],[1],'Fotografia d’un gos dempeus sobre fons clar.','Fotografía de un perro de pie sobre fondo claro.'),
asset('sample-man-drawing','home-llegir-llibre-dibuix.png','Home · llegir · llibre','Hombre · leer · libro','drawing',['HOME','LLEGIR','LLIBRE','BLAU','SEURE'],[3,4],'Dibuix d’un home assegut llegint un llibre blau obert.','Dibujo de un hombre sentado leyendo un libro azul abierto.'),
asset('sample-girl-photo','nena-menjar-poma-foto.png','Nena · menjar · poma','Niña · comer · manzana','photo',['NENA',('MENJAR','verbs'),'POMA','VERMELL'],[3,4],'Fotografia d’una nena menjant una poma.','Fotografía de una niña comiendo una manzana.'),
asset('sample-chair','cadira-dibuix.png','Cadira','Silla','drawing',['CADIRA','FUSTA'],[1,2],'Dibuix d’una cadira de fusta sobre fons clar.','Dibujo de una silla de madera sobre fondo claro.'),
]
data={'version':'0.1.0','source':{'name':'CACE-UTAC 2021 · AsTeRICS AAC','exportDate':'2026-10-27','sha256':hashlib.sha256(source.read_bytes()).hexdigest()},'categories':[dict(zip(['id','ca','es','icon'],x)) for x in categories],'levels':[{'id':i+1,'ca':x[0],'es':x[1],'desc':{'ca':x[2],'es':x[3]}} for i,x in enumerate(levels)],'words':list(words.values()),'assets':assets}
target.write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
print(json.dumps({'words':len(words),'categories':len(categories),'sample_images':len(assets)},ensure_ascii=False))
