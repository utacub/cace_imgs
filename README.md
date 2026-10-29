# CACE Imatges

Biblioteca visual de vocabulari CACE per a professionals. Interfície en català i castellà, cerca de paraules, categories, nivells de complexitat, pantalla completa, col·leccions, preferides i importació/exportació de còpies personals.

## Estat del banc

La versió 0.1.10 conté **736 estímuls generats i revisats visualment per a 184 paraules**, més **8 mostres inicials**. Cada grup complet inclou dues fotografies sintètiques diferents, un dibuix realista i una il·lustració plana. El catàleg recull 861 entrades de vocabulari; la producció d'imatges encara és incompleta.

La revisió visual de producció no equival a una validació clínica o psicomètrica dels estímuls. Les imatges generades amb IA s'identifiquen a l'aplicació.

## Estructura

- `src/`: aplicació, estils, plantilla i catàleg editable.
- `dist/`: web construïda i les 744 imatges que utilitza.
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
python scripts/check-site.py
```

Els originals PNG dels estímuls es conserven als paquets de producció. La web utilitza còpies WebP amb les mateixes dimensions, qualitat 93 i comprovació SHA-256 de cada fitxer.

## Publicació

El repositori canònic és [utacub/cace_imgs](https://github.com/utacub/cace_imgs). GitHub Pages ha d'utilitzar **GitHub Actions** com a origen de publicació. El flux es publica amb cada canvi a `main` i només serveix el contingut de `dist/`.

## Procedència

El vocabulari parteix de CACE-UTAC 2021, exportat d'AsTeRICS AAC el 27 d'octubre de 2026. `src/catalog-data.json` conserva els identificadors de vocabulari, les categories, les referències dels taulers i les metadades dels estímuls. La migració a GitHub conserva els fitxers d'imatge utilitzats per la versió 0.1.10.
