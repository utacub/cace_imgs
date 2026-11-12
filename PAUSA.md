# N7 · Producció autoritzada · 12/11/2026

Sessió activa de generació, revisió i publicació progressiva de les 200 N7 aprovades. Final a les 22:20 Europe/Madrid; tall preventiu de generació a les 22:15. Preservar les 3469 imatges i les 861 entrades anteriors. Estat vigent a production/n7-progress.json; prompts i revisions a production/n7.

---

# N6 · 200 imatges completades i publicades

Les 200 N6 estan generades, revisades i publicades: 100 fotografies habituals i 100 dibuixos insòlits; 68 instruments, 66 destinataris i 66 llocs. Catàleg públic 0.1.125: 3469 imatges. Verificació pública completa el 2026-11-11T22:36:19Z: catàleg idèntic i 200 descàrregues WebP comprovades amb SHA-256. Les 3269 imatges i 861 entrades CACE prèvies es conserven exactament.

La generació es va tancar abans de les 22:30. El desplegament es va completar en una represa posterior autoritzada per l’usuari, amb una execució manual nova de GitHub Actions (43112540809). No s’ha regenerat cap imatge durant la recuperació. No generar més N6.

Registre: production/n6-session-completion.json; evidència: output/n6-publication-verification.json; lliurament: output/n6-completion-delivery.json. Originals a output/production/n6; prompts i revisions a production/n6.


---

# N5 · 200 construccions completades

Les 21 pendents de l’última represa s’han generat, revisat i importat. El N5 té 200/200 estímuls: 100 fotografies habituals i 100 dibuixos insòlits, sense pendents. Espai: 80; possessió: 60; contingut: 60. Catàleg 0.1.116, 3269 imatges. Les 3248 imatges publicades abans d’aquesta represa i les 861 entrades CACE es conserven exactament.

Estat de producció a production/n5-session-completion.json. Originals PNG a output/production/n5, prompts i revisions a production/n5; totes les còpies WebP són al banc versionat. El desplegament final es comprova després del push; evidència pública a output/n5-publication-verification.json i output/n5-completion-delivery.json. No cal generar més N5.

---

# N5 · Compleció de les 200 construccions autoritzada

Nova instrucció: generar, revisar i publicar les 21 N5 restants. Substitueix la pausa i el límit horari de la sessió anterior; aquesta represa acaba quan les 200 N5 siguin públiques i verificades. Estat a production/n5-session-completion.json i production/n5-progress.json.

---

# N5 · Tancament de la sessió de tarda · 11 de novembre de 2026

Generació aturada a 2026-11-11T17:21:25.265Z, reservant el tram final per publicar i verificar abans de les 18:30 Europe/Madrid. 179/200 N5 revisades i importades (84 noves en aquesta represa); 21 pendents, enumerades a production/n5-progress.json. Versió 0.1.115, 3248 imatges totals. Espai i possessió complets; els pendents són de contingut. Cap nova generació després del tall; una nova sessió necessita una nova instrucció.

Originals PNG i galeria a output/production/n5 i output/n5-review.html. Les còpies WebP es distribueixen amb el banc versionat. La publicació final està preparada després de comprovar el catàleg, les imatges i la preservació del banc anterior. La comprovació pública posterior es desa a output/n5-publication-verification.json; consultar-la per l’estat final verificat.

---

# N5 · Represa autoritzada fins a les 18:30 · 11 de novembre de 2026

Primer lot publicat i verificat: versió 0.1.108, commit 72cf613145ae1dfdbff8f3557ffe6483f23af25b, GitHub Actions 43056590014 success. 95 descàrregues N5 verificades SHA-256; 3164 imatges totals. La generació següent només incorpora pendents del pla. Evidència pública a output/n5-publication-verification.json.

L’usuari ha demanat reprendre la publicació pendent i després continuar generant, revisant i publicant N5 fins a les 18:30 Europe/Madrid (17:30 UTC). Substitueix la pausa anterior. Tall de noves generacions a les 18:25 per reservar temps de tancament; comprovar l’hora abans de cada crida. Publicar primer les 95 imatges importades. Continuar només amb els pendents de production/n5-progress.json, preservant catàleg i nivells anteriors. Habilitat imagegen integrada, sense API externa. No produir més enllà dels 200 estímuls del pla.

---

# Publicació N5 interrompuda a petició de l’usuari · 11 de novembre de 2026

L’usuari necessita apagar l’equip i ha demanat interrompre la feina. **Aturada, sense commit, push ni desplegament.** L’autorització de publicar les 95 imatges revisades es conserva per quan l’usuari demani reprendre; no autoritza generar imatges noves.

Estat local: catàleg i package.json **0.1.108**, **3164 imatges**, 95 N5 importades (49 fotografies i 46 dibuixos) a «N5 · Relacions». Originals i còpies WebP locals presents. Les 3069 imatges anteriors, les col·leccions anteriors i les 861 entrades CACE preservades, comprovat per `node scripts/audit-n5-production.cjs`. **16 proves de cerca i filtres superades**, inclosa N5; `git diff --check` correcte. Scripts nous d’importació i auditoria i ampliació de check-site per a N5 preparats. README i criteris actualitzats. Fitxers sense commit, inclosos pla, registres N5 i PAUSA.md.

**Construcció interrompuda** amb Ctrl+C mentre `scripts/build.py --site-only` executava la fase d’optimització. L’HTML de dist encara és antic: cal tornar a construir. No s’ha executat `pack-bank.py`; el banc versionat encara conté les 3069 imatges anteriors. No s’ha executat la comprovació final de check-site ni la verificació pública. Git local i main remot continuen a `495106da268ded14e3648cabc6cdf9cdff592530`; comprovar de nou el remot en reprendre.

Per reprendre: executar Python del runtime empaquetat amb UTF-8 (el llançador `py` i l’àlies `python` no funcionen en aquesta sessió; trobar el runtime amb `load_workspace_dependencies`). Completar build, pack-bank, check-site, auditoria i proves si hi ha canvis nous; revisar diff i selecció de fitxers; fer commit i push autoritzats a main; esperar GitHub Actions i verificar el catàleg públic i els SHA-256 de les 95 descàrregues, seguint `output/check-published.py 495106d HEAD`. Desar el lliurament. Publicar les 95 seleccionades; els dos intents descartats no s’importen. Les altres 105 propostes N5 continuen pendents i la generació aturada.

---

# N5 · Generació aturada · 11 de novembre de 2026

**95/200 estímuls generats i revisats localment**: 49 fotografies habituals i 46 dibuixos insòlits. 105 pendents, enumerats a production/n5-progress.json. Dos intents descartats i refets: n5-109 per marges massa estrets i n5-016 per una casa massa semblant a una caseta de gos.

El límit autoritzat era les 10:15 Europe/Madrid. S’ha detectat el retard a les 10:19; s’han aturat noves generacions i s’ha tancat la crida ja en curs. No presentar aquesta sessió com una aturada puntual a les 10:15. No reprendre sense nova instrucció. Registre: production/n5-session-2026-11-11.json.

Originals a output/production/n5/; prompts exactes, etiquetes, identificadors, alternatives i revisions a production/n5/; galeria output/n5-review.html; auditoria output/n5-production-audit.json. Catàleg 0.1.107 intacte amb 3069 imatges anteriors i 861 entrades CACE. Cap importació a l’app, commit, push, desplegament ni publicació.

---

# N5 · Generació local autoritzada l’11 de novembre de 2026

L’usuari ha indicat en aquest xat: «Segueix generant imatges fins a les 10:15». Autorització de generació local dels estímuls de `production/n5-plan.json` fins a les **10:15 Europe/Madrid de l’11/11/2026 (09:15 UTC)**. Substitueix, només per aquesta sessió i per generar N5, el bloqueig històric «No generar N5». No autoritza publicació, importació a l’app, commit, push ni desplegament.

Una imatge per estímul: fotografia habitual, dibuix insòlit, revisió visual individual, etiquetes i identificadors CACE exactes. Originals a `output/production/n5/`, prompts i revisions a `production/n5/`, recompte vigent a `production/n5-progress.json`, galeria a `output/n5-review.html`, auditoria a `output/n5-production-audit.json`. El pla original es conserva com a proposta històrica; aquesta nota i el registre de progrés recullen l’autorització posterior. Preservar el catàleg i els nivells anteriors. En arribar al límit, aturar noves generacions i deixar el progrés desat.

---

# N4 complet i publicat: 200/200 verificats

200 estímuls generats amb ImageGen, revisats visualment i importats: 100 fotografies habituals i 100 dibuixos insòlits, una imatge per construcció. N4 · Subjecte, acció i objecte; tres etiquetes exactes CACE cadascun. Versió 0.1.107, commit 495106da268ded14e3648cabc6cdf9cdff592530, 3069 imatges totals. Les 2869 anteriors i les 861 entrades CACE preservades. Auditoria, 15 proves, build, empaquetatge i check-site superats. GitHub Actions 42398831817 success. Catàleg públic i descàrregues SHA-256 de les 200 N4 verificats contra la versió final.

App: https://utacub.github.io/cace_imgs/ . Galeria output/n4-review.html; originals output/production/n4/; prompts i revisions production/n4/; lliurament output/n4-delivery.json. Cap pendent N4. La nova autorització de generar i publicar N4 substitueix la nota històrica de N3 de més avall. No iniciar N5 sense nova instrucció.

---

# N3 complet i publicat: 150/150 verificats

150/150 generats, revisats i importats. 75 fotografies habituals i 75 dibuixos insòlits. Versió 0.1.102, commit 010f20c246c6e2da51b42999d3f522ef778d1cc5 enviat a main. 2869 imatges totals; les 2719 anteriors preservades. Auditoria, 14 proves, build, banc i check-site superats. Primeres 108 imatges publicades i verificades. Publicació final verificada: GitHub Actions 42380654168 success; catàleg públic 0.1.102 amb 2869 imatges. Verificades les 150 descàrregues N3 en tres lots (12 + 96 + 42). No queda feina pendent de N3. Galeria output/n3-review.html; originals output/production/n3/; prompts production/n3/; lliurament output/n3-delivery.json. No generar N4.

---

# N2 · 7 de novembre de 2026 · 150 estímuls generats

- Autorització explícita actual: generar els 150 estímuls i anar-los penjant i afegint a l'app. Aquesta instrucció substitueix el bloqueig antic de publicació indicat més avall.
- Versió local, pujada i publicada: **0.1.98**, commit final **b47ea12b27dbadb23d0dc4e187e0c23c174b36e9**, **2719 imatges totals**, **150 construccions N2 completes**. 75 habituals i 75 insòlites; 67 fotografies i 83 dibuixos. Una imatge per construcció.
- Totes les imatges revisades visualment. Refetes la carmanyola plena (massa objectes aliens) i les botes de vidre (confusió amb pots). Només les versions seleccionades s'han importat.
- Pla: production/n2-plan.json. Progrés: production/n2-progress.json (150 completes, cap pendent). Prompts exactes i notes de revisió: production/n2/n2-XXX.json. Originals: output/production/n2/n2-XXX/image.png. Còpies de l'app: dist/assets/constructions/n2/n2-XXX.webp. Galeria local: output/n2-review.html.
- Auditoria output/n2-audit-0.1.98.json: preservades les 2569 imatges prèvies i les 861 paraules del catàleg; 150 IDs de construcció únics, dues etiquetes CACE exactes cadascun, nivell 2, SHA originals i còpies correctes. 13 proves passades; build, pack-bank, check-site (2719 imatges) i git diff --check correctes.
- **PUBLICACIÓ COMPLETA I VERIFICADA.** El desplegament final **42371086067** ha acabat correctament. Els intents anteriors van esgotar la sincronització de Pages; l'ampliació de timeout no era admesa per l'acció i s'ha retirat. El nou intent ha funcionat sense canviar el material.
- output/check-published.py 7428920 b47ea12 ha confirmat el catàleg públic complet (0.1.98, 2719 imatges) i ha descarregat i verificat els SHA-256 de les 90 imatges noves des de 0.1.96. Els lots anteriors de 12 i 48 N2 ja s'havien verificat de la mateixa manera. Navegador públic verificat visualment: col·lecció «N2 · Entitat i atribut» amb 150 elements i les noves fotografies carregades. Cerca «vaca rosa» comprovada amb un resultat i etiquetes VACA/ROSA.
- **Tasca acabada.** No queda generació, importació ni publicació pendent de N2. Registre de lliurament: output/n2-delivery.json. No tornar a generar res sense una nova instrucció.

---

# Historial · Lot del 7 de novembre de 2026 · 24 entrades completades localment

- Autorització nova de l’usuari en aquest xat: produir les 26 entrades temàtiques menys FER PIPI i FER CACA; descartar també les 19 entrades amb diverses paraules de Sobre mi. Recordatori: una sola imatge per als conceptes més abstractes.
- Versió local **0.1.94**, commit **05e469c** a main: **2569 imatges, 704 entrades completes**, amb **90 imatges noves de 24 entrades**. CAP DE SETMANA i BON NADAL: una il·lustració plana; les altres 22: quatre variants.
- Originals seleccionats a output/production/{slug}/, prompts, textos alternatius i revisions a production/{slug}.json. Galeria de revisió: output/nov7-multiword-review.html. Selecció i descartats persistits a production/multiword-selection.json i production/progress.json.
- Auditoria de preservació de les 2479 imatges anteriors, comptatges, originals i SHA superada; construcció i empaquetatge del banc complets; check-site verifica les 2569 imatges; 12 proves de cerca superades; git diff --check correcte. Evidència: output/nov7-multiword-audit.json i output/nov7-multiword-delivery.json.
- **NO PUBLICADA.** La revisió automàtica ha rebutjat git push origin main per manca d’autorització explícita de publicació externa d’aquest lot. No s’ha executat el push ni s’ha intentat cap alternativa. Cal esperar una instrucció explícita de l’usuari per publicar el commit 05e469c. La darrera versió publicada i verificada continua sent 0.1.93 (223c9dc).
- **Generació acabada.** No queda cap pendent de les 24 entrades. VULVA i PENIS continuen com a impediments antics; no s’han tornat a sol·licitar i no són una ordre de producció. No s’han iniciat els nivells de frases.

---

# Actualització del 7 de novembre de 2026 · motor de cerca

- Versió publicada i verificada **0.1.93**, commit 223c9dc.
- Cerca i suggeriments limitats a l’idioma actiu; ordre predeterminat per rellevància.
- Les 2479 imatges tenen primaryWordId, editable a «Editar fitxa».
- 12 proves automatitzades superades localment i a GitHub; publicació i navegador verificats.
- Evidència: output/nov7-search-verification.json i output/search-poma-v0.1.93.jpg.
- L’última petició només autoritza corregir la cerca. La generació continua aturada fins a una nova instrucció de l’usuari.
- El nou xat de planificació (01a1b2f9-1ccf-7463-8a78-7820c64f1926) és només d’anàlisi.

El punt anterior es conserva íntegre a continuació.

---

# Punt de continuació de CACE Imatges · 6 de novembre de 2026

06/11/2026 22.43.01 (Europe/Madrid). **Generació ATURADA. Per reprendre cal una nova instrucció de l’usuari.**

L’usuari ha reprès la generació integrada i la publicació a l’app fins a les **23.10 h locals del 6 de novembre (22.10 UTC)**. Tall preventiu de noves crides a les **22.45 h locals (21.45 UTC)** per revisar, publicar i verificar els darrers lots.

- [Aplicació](https://utacub.github.io/cace_imgs/) · [Repositori](https://github.com/utacub/cace_imgs)
- Versió publicada i verificada **0.1.92**, commit `503d8ae`, **2479 imatges**.
- Catàleg local **0.1.92**, **2479 imatges**, **680 entrades completes** i **2 entrades elegibles pendents**.
- Imatges noves seleccionades des de `ed311b9` (0.1.84): **99 imatges per a 60 entrades**. Variants anteriors redundants retirades per instrucció de l’usuari: **108**.
- Candidats sense brief importat: **0**.

Verificació final feta: els 99 WebP nous s’han descarregat de l’app i coincideixen amb els SHA-256. L’auditoria ha comprovat originals, còpies, prompts, revisions, textos alternatius i exclusions, i ha preservat les imatges anteriors excepte les 108 variants abstractes retirades per instrucció explícita de l’usuari. Candidats generats: 217; seleccionats: 99; descartats: 118; sense classificar: 0. Últim PNG: 22.32.14 h locals.

## Lots del 6 de novembre

- **0.1.85** — BIPEDESTADOR, BITLLET, DINERS, EDAT, M'AGRADA, NECESSITATS, SABER, VITAMINA
- **0.1.86** — DIJOUS, DILLUNS, DIMARTS, DIMECRES, DISSABTE, DIUMENGE, DIVENDRES, SETMANA
- **0.1.87** — ABRIL, AGOST, DESEMBRE, FEBRER, GENER, JULIOL, JUNY, MAIG, MARÇ, NOVEMBRE, OCTUBRE, SETEMBRE
- **0.1.88** — ABANS, AHIR, ANY, ARA, AVUI, DEMÀ, DESPRÉS, MES
- **0.1.89** — COSINA, COSÍ, HORA, MINUT, SEGON, TIET, TIETA, VEIG-VEIG
- **0.1.90** — AVIAT, COSA, ESTAR, LLENGUA, LLOC, NOM, SER, TARD
- **0.1.91** — CÈNTIMS, DIARI, EURO
- **0.1.92** — BARÇA, COCA-COLA, COLA-CAO, FANTA, LLETRES

## Continuïtat

Seguir `production/CRITERIS.md` i la cua vigent de `production/progress.json`. Els set dies, els dotze mesos i els conceptes massa abstractes tenen una sola il·lustració plana per instrucció explícita del 6 de novembre. La selecció exacta és a scripts/production_policy.py. Les entrades concretes necessiten dues fotografies d’exemplars diferents, un dibuix realista amb llapis de colors visible i una il·lustració plana. Revisar totes les variants exigides per scripts/production_policy.py abans d’importar-les. Fons blanc, marges suficients, figures i objectes complets, sense text, xifres, etiquetes ni marques. No produir entrades de les cinc categories excloses.

Prompts exactes, revisions i textos alternatius: `production/{slug}.json`. Originals seleccionats: `output/production/{slug}/`. Metadades originals: `output/generated-*.json`. Rebutjos: `output/rejected-*.json`. Generació amb l’eina integrada, sense API externa.

Importar abans de construir; després empaquetar el banc, comprovar el web complet, revisar el diff, fer commit i push a main i verificar amb `output/nov6-verify.py BASE HEAD`. En tancar, executar `output/nov6-audit.py` i guardar `output/nov6-final-audit.json`; la verificació acumulada parteix de `ed311b9`.

L’històric anterior és a `output/PAUSA-2026-11-05.md`; també es conserven els punts del 3 i l’1 de novembre i del 31 d’octubre. Els esborranys de `output/nov4-next-batch-draft.json` poden haver-se completat: comprovar sempre els identificadors pendents abans d’utilitzar-los. `output/nov4-pending-review-notes.json` descriu dificultats semàntiques de la cua, sense modificar-ne l’elegibilitat.
Els impediments actuals són a `output/nov6-pending-review-notes.json`: no repetir les peticions d’anatomia per esquivar el bloqueig de seguretat. L’excepció de lletres i marques per a LLETRES, BARÇA, COLA-CAO, FANTA i COCA-COLA ja està autoritzada explícitament i aplicada. Només VULVA i PENIS continuen pendents. En reprendre, comprovar primer l’hora local i la instrucció de l’usuari.
