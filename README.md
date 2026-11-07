# CACE Imatges

Biblioteca visual de vocabulari CACE per a professionals. Interfície en català i castellà, cerca de paraules, categories, nivells de complexitat, pantalla completa, col·leccions, preferides i importació/exportació de còpies personals.

## Estat del banc

La versió 0.1.105 conté **2977 imatges**: 2561 estímuls de conceptes individuals per a 704 entrades completes, **150 construccions N2**, **150 construccions N3**, **108 construccions N4** i 8 mostres inicials. Els conceptes individuals concrets mantenen quatre variants i els abstractes una sola il·lustració plana. Cada construcció N2, N3 o N4 té una sola fotografia o un sol dibuix. El catàleg conserva les 861 entrades CACE originals.

El N2 conté **150 de les 150 construccions previstes** (75 habituals i 75 insòlites), cadascuna descrita amb dues entrades CACE existents. Es poden trobar al filtre de nivell 2 i a la col·lecció «N2 · Entitat i atribut». La selecció és a `production/n2-plan.json`, el progrés a `production/n2-progress.json` i els prompts i revisions a `production/n2/`. Les exclusions de paraules individuals es mantenen.

El N3 conté **150 de les 150 construccions aprovades** (75 habituals i 75 insòlites), amb dues entrades CACE existents: subjecte i acció. Es troben al nivell 3 i a la col·lecció «N3 · Subjecte i acció». Pla: `production/n3-plan.json`; progrés: `production/n3-progress.json`; prompts i revisions: `production/n3/`. Una imatge per estímul, amb només els elements de suport necessaris per fer visible l'acció.

El N4 conté **108 de les 200 construccions aprovades** (100 habituals i 100 insòlites), amb tres entrades CACE existents: subjecte, acció i objecte. Es troben al nivell 4 i a la col·lecció «N4 · Subjecte, acció i objecte». Pla: `production/n4-plan.json`; progrés: `production/n4-progress.json`; prompts i revisions: `production/n4/`. Una imatge per estímul, amb el subjecte actuant sobre l'objecte indicat i el context mínim necessari.

L'últim lot completa les 24 entrades temàtiques amb diverses paraules autoritzades el 7 de novembre (90 imatges). CAP DE SETMANA i BON NADAL tenen una sola il·lustració plana; les altres 22 entrades tenen quatre variants. La selecció exacta és a `production/multiword-selection.json`: FER PIPI, FER CACA i les 19 entrades amb diverses paraules de Sobre mi queden descartades de nova producció, conservant el vocabulari del catàleg. `production/` conserva els briefs i dos pendents anatòmics bloquejats per l'eina, VULVA i PENIS, que no s'han tornat a sol·licitar. Les exclusions d'Expressions, Preguntes i partícules, Atributs, Sensacions i sentiments i Espai continuen vigents; es conserven les imatges existents. Els originals PNG i els briefs locals són a `output/production/`; les còpies WebP distribuïdes amb l'app estan incloses al banc versionat.

Per autorització explícita del 6 de novembre, només LLETRES, BARÇA, COLA-CAO, FANTA i COCA-COLA poden mostrar les lletres o marques necessàries per identificar el concepte. La norma general de no incloure text ni marques es manté per a la resta.

La revisió visual de producció no equival a una validació clínica o psicomètrica dels estímuls. Les imatges generades amb IA s'identifiquen a l'aplicació.

La cerca consulta només els noms, les paraules clau i les descripcions de l’idioma actiu. Cada imatge té una paraula clau CACE principal, editable a la fitxa: les coincidències amb aquest concepte tenen prioritat sobre les etiquetes secundàries i les mencions a la descripció. Quan hi ha una cerca, l’ordre predeterminat és per rellevància; l’ordre alfabètic i per data es poden triar explícitament.

## Estructura

- `src/`: aplicació, estils, plantilla i catàleg editable.
- `bank/`: les 2977 imatges de la web, empaquetades en parts de 4 MiB amb comprovacions SHA-256.
- `dist/`: web construïda; es genera automàticament i no es versiona.
- `scripts/`: construcció, validació i importació dels paquets de producció.
- `.github/workflows/pages.yml`: construcció, verificació i publicació automàtiques amb GitHub Pages.

L'aplicació és estàtica i no necessita servidor d'aplicacions ni connexions amb serveis d'IA per funcionar. Les imatges i les dades incorporades es distribueixen amb la web. Les imatges personals, les preferides i les col·leccions modificades es desen al navegador del dispositiu; l'aplicació inclou còpia de seguretat i restauració per traslladar-les entre navegadors o adreces web.

## Construcció

Cal Python 3.12 o posterior, Node.js per comprovar la sintaxi de JavaScript i Pillow.

```bash
python -m pip install -r requirements.txt
python scripts/build.py --site-only
python scripts/check-site.py
python -m http.server 8000 --directory dist
```

Per generar també l'HTML autònom amb totes les imatges incorporades:

```bash
python scripts/build.py
```

Es desa a `output/CACE_Imatges_v0.1.html`. Aquest fitxer gran es genera localment i no es versiona a Git.

## Afegir un lot de producció

```bash
python scripts/import-production.py --package /ruta/al/paquet.zip --version 0.1.11
python scripts/build.py --site-only
python scripts/pack-bank.py
python scripts/check-site.py
```

Els originals PNG dels estímuls es conserven als paquets de producció. La web utilitza còpies WebP amb les mateixes dimensions, qualitat 93 i comprovació SHA-256 de cada fitxer.

La construcció restaura automàticament les imatges que falten a `dist/assets/` a partir de `bank/`, sense canviar-ne els píxels. Després d'incorporar imatges noves, cal actualitzar el banc amb `pack-bank.py` i versionar `bank/` juntament amb el catàleg. La web publicada serveix les imatges individuals habituals, no els arxius en parts.

## Comprovar la cerca

Executar `npm test` (o `node --test tests/search.test.cjs`). Les proves comproven la separació d’idiomes, la prioritat de la paraula clau, els filtres i la compatibilitat de les còpies de seguretat. `primaryWordId` identifica la paraula principal de cada imatge; ha de formar part de `tags` i es tradueix amb el vocabulari CACE de l’idioma actiu. La construcció completa les metadades dels catàlegs anteriors amb `scripts/update-search-keywords.py`.

## Publicació

El repositori canònic és [utacub/cace_imgs](https://github.com/utacub/cace_imgs). GitHub Pages ha d'utilitzar **GitHub Actions** com a origen de publicació. El flux es publica amb cada canvi a `main` i només serveix el contingut de `dist/`.

## Procedència

El vocabulari parteix de CACE-UTAC 2021, exportat d'AsTeRICS AAC el 27 d'octubre de 2026. `src/catalog-data.json` conserva els identificadors de vocabulari, les categories, les referències dels taulers i les metadades dels estímuls. La migració a GitHub conserva els fitxers d'imatge utilitzats per la versió 0.1.10.
