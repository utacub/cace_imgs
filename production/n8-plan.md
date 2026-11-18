# N8 · Dos esdeveniments · Proposta per revisar

Estat: **només planificació i revisió**. Cap generació, importació, commit, push o publicació autoritzats. Les autoritzacions i els límits horaris històrics de N7 no s’apliquen a N8.

Definició exacta del catàleg: **Relacionar dues accions o estats.** Baseline local: 0.1.135, 3669 imatges i 861 entrades; HEAD f5c8bcd5a0e1efee805f0f6b10b6746951399620. Arbre de treball inicial net. No s’ha consultat ni modificat la publicació remota.

## Fonts i abast

- `src/catalog-data.json`: N8: Dos esdeveniments; relacionar dues accions o estats. N9: ordre temporal i transformacions. N10: causes i conseqüències visibles.
- `production/n6-plan.json`: N6 té una sola acció: el gest receptor de DONAR no és un segon esdeveniment.
- `production/n7-plan.json`: N7 té una sola acció i el distractor és estàtic; N8 exigeix un segon esdeveniment.
- `README.md`: N5–N7 complets; 200 estímuls, 100 fotografies habituals i 100 dibuixos insòlits per nivell.
- `PAUSA.md`: N7 complet i revisió anatòmica publicada; no traslladar les autoritzacions històriques a N8.
- `production/CRITERIS.md`: Fons blanc, marges, correspondència semàntica i anatomia humana natural reforçada.

No s’ha localitzat cap altre document específic de progressió didàctica ni cap AGENTS.md aplicable al repositori. S’han llegit README, PAUSA, CRITERIS i els plans N5–N7. El catàleg fixa l’objectiu de N8; la resta de decisions següents són una proposta revisable.

## Objectiu i selecció

Identificar dos participants, atribuir a cadascun una acció o estat diferent i relacionar les dues predicacions com a coexistents en una mateixa escena. Es pot descriure qui fa què i què fa o com està l’altre. No exigeix pronunciar un connector concret.

Una escena contínua en un únic instant, dos participants diferents i exactament dues predicacions objectiu. És una concreció de planificació compatible amb les fonts, no l’única definició possible de N8. Aquesta primera selecció no inclou un mateix agent fent dues coses, per evitar simultaneïtats anatòmicament impossibles.

**200 estímuls**: una imatge per construcció, **100 fotografies habituals i 100 dibuixos plans insòlits**. Per grup: **50 acció–acció, 30 acció–estat i 20 estat–estat**. Total: 100, 60 i 40 respectivament.

Proposta revisable, no quota del catàleg: 50 combinacions de deu accions amb cinc accions diferents; 30 de les deu accions amb tres estats; 20 de cinc parelles d’estats amb quatre combinacions de participants. Cent famílies amb homòlegs humans i animals: no són 200 situacions independents.

Les deu accions principals són: LLEGIR LLIBRE; BEURE AIGUA; MENJAR POMA; REGAR PLANTA; PINTAR CAIXA; NETEJAR PLAT; ASSECAR CULLERA; PENTINAR NINA; TALLAR PLASTILINA; ESTRIPAR PAPER. Els cinc companys d’acció són: PORTAR CISTELL; AIXECAR PILOTA; OLORAR FLOR; ABRAÇAR COIXÍ; SALTAR. Cada acció principal es combina amb cadascun dels cinc companys.

Acció–estat combina les deu accions principals amb SEURE, DORMIR i RIURE. Estat–estat utilitza SEURE/DORMIR, SEURE/RIURE, SEURE/PLORAR, DORMIR/RIURE i RIURE/PLORAR, cadascuna amb quatre combinacions diferents de participants. Són activitats i estats plausibles en un espai compartit; les escenes no demanen inferir una causa entre ells.

## Progressió i relació

- **N2**: No es limita a entitat i atribut: hi ha dues predicacions assignades a dos participants.
- **N3**: Cadascun dels dos esdeveniments pot tenir un nucli N3, però s’han de comprendre tots dos dins la mateixa imatge.
- **N4**: Els pacients, si calen, són propis de cada acció; el segon participant també fa o presenta alguna cosa explícita.
- **N5**: La mera relació entre dos referents no basta per constituir dos esdeveniments.
- **N6**: Una eina, el receptor de DONAR i un lloc no compten com a segon esdeveniment. Cap proposta es basa només en un lliurament.
- **N7**: No hi ha selecció entre dos exemplars de la mateixa classe. Tots dos participants són objectiu i tenen predicats diferents.
- **N9**: Sense seqüència, vinyetes, duplicació del mateix agent, abans/després ni transformació temporal.
- **N10**: No exigir una causa ni inferir que un participant provoca l’acció o estat de l’altre.
- **N11**: No afegir tercer esdeveniment ni trama; només dues predicacions visibles.
- **N12**: L’agent animal insòlit manté el precedent visual N5–N7; no converteix explicar l’absurd en objectiu N8.

«i» i «mentre» només pertanyen a la prosa explicativa. No hi ha una entrada I ni MENTRE en el catàleg; no s’inventen ni se substitueixen per AMB, TAMBÉ o PERQUÈ. La relació s’anota com a metadada del pla. No s’indexen ABANS, DESPRÉS ni PERQUÈ.

## Etiquetes i estructura

- agent1 + action1 (+ patient1); agent2 + action2 (+ patient2)
- agent1 + action1 + patient1; agent2 + state2
- agent1 + state1; agent2 + state2

labels/wordIds són la unió ordenada sense duplicats de les etiquetes dels dos esdeveniments. events conserva els papers i els wordIds de cada esdeveniment. primaryWordId futur: agent del primer esdeveniment; no substitueix l’indexat dels dos.

Eines i suports imprescindibles es registren a context amb wordIds existents, separats de les etiquetes objectiu. No es converteixen en complements N6 a treballar ni en un tercer esdeveniment.

No reobrir producció individual d’Expressions, Preguntes i partícules, Atributs, Sensacions i sentiments o Espai, ni entrades personals excloses. No es modifica cap paraula del catàleg.

Cada esdeveniment té agent i predicat propis, amb pacient quan cal. Entre quatre i sis etiquetes objectiu per imatge. Les formes de diccionari i els identificadors són exactes; la prosa pot flexionar-les. «/» al títol separa les dues predicacions, sense ser cap etiqueta ni cap divisió dins la imatge. La posició esquerra/dreta es contrabalança: 50/50 per grup i invertida entre homòlegs.

## Criteris visuals

- Una sola imatge futura per estímul. Fotografia sintètica per a escenes habituals humanes; dibuix pla per a dos animals antropomòrfics amables, recognoscibles i sencers, fent activitats humanes.
- Fons blanc, context mínim, figures i objectes sencers amb marges amplis. Sense text, lletres, xifres, marques, filigranes, bafarades, fletxes, línies de moviment ni símbols emocionals.
- Una única escena contínua amb un pla de terra i perspectiva compartits; sense marc, separador, vinyeta ni collage de dues imatges. Taula compartida quan tots dos ho necessiten, amb dos llocs pròxims sense oclusió.
- Dos participants d’etiquetes diferents, cossos i mans separables, amb llegibilitat i escala comparables. L’ordre dels esdeveniments no és temporal; es contrabalança esquerra/dreta. No dependre del color de la roba per identificar-los.
- Màxim dos pacients objectiu, un per acció; instruments muts i suports funcionals només quan calen. Cap persona extra, joguina amb aspecte d’agent actiu, animal de fons ni tercer verb protagonista.
- Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants.
- En DORMIR, un llit baix i un coixí amb suport complet; l’altre participant queda al costat, sense tocar ni despertar. En SEURE, una cadira estable i peus recolzats. No posar qui dorm o seu en una postura d’acció.
- RIURE i PLORAR requereixen evidència facial prou llegible també a mida reduïda. Cap lesió, perill, burla o causalitat suggerida. Si no es reconeixen sense text, regenerar o revisar la proposta abans de produir-la.
- Diversitat de pell, roba, cabell i constitució entre fotografies, sense inferir parentius ni professions. No fer servir el gènere o l’edat com a única pista d’una acció.

## Decisions de revisió

- **Dos papers d’una acció comptats com dos esdeveniments**: Cada esdeveniment té agent i verb propis; no s’inclou DONAR/REBRE com si fossin dos.
- **Dues imatges juxtaposades o dues fases**: Un instant i un espai compartits; no hi ha ordre de lectura temporal.
- **Estat mental no visible**: Només SEURE postural, DORMIR, RIURE i PLORAR amb evidència explícita; no VOLER, PENSAR, SABER o ESTIMAR.
- **Somriure o llàgrimes massa petits**: Augmentar la mida útil de tots dos rostres mantenint figures senceres; no aprovar una cara que només s’entengui amb el títol.
- **Braços allargats per encabir dues activitats**: Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants.
- **Accions creuades o interacció causal**: Pacients propis, mans separades i cap contacte entre agents; el segon no és receptor ni víctima del primer.
- **Dos estats del mateix participant o atribut secundari**: Exigir dos agents diferents. SEURE és el predicat objectiu només quan s’ha etiquetat; una cadira de suport no crea un tercer objectiu.
- **Metadades perden la vinculació agent-verb**: Conservar events i els seus roles; tags és només un índex pla. La importació futura ha de preservar els dos esdeveniments o una estructura equivalent validada.

## Acceptació i rebuig

- Revisió individual de les 200 futures imatges: sense llegir el títol, descriure separadament els dos esdeveniments i identificar quin participant correspon a cada verb.
- Comprovar exactitud de cada agent, verb i pacient, existència de les dues evidències i simultaneïtat espacial; rebutjar si només una meitat és clara o hi ha un tercer esdeveniment protagonista.
- Comprovar anatomia, articulacions, nombre i pertinença d’extremitats, preses, suport, absència de retalls i abast natural en cadascuna de les 100 fotografies. Mateixa revisió de coherència corporal en dibuixos.
- Comprovar la lectura a miniatura i a mida completa, especialment ulls tancats, llàgrimes, expressió de RIURE, contacte d’eines i peus del salt.
- Rebutjar/reforçar el brief i regenerar si hi ha ambigüitat, intercanvi de pacients, fusió de participants, oclusió, collage, text o deformació. Arxivar cada descart amb motiu; no corregir l’etiqueta per justificar una imatge errònia.
- No importar cap pendent. Registre per estímul: prompt exacte, intents, fitxer triat, revisió semàntica, revisió anatòmica, decisió i SHA-256; l’acceptació visual futura no equival a validació clínica o psicomètrica.

## Lots i futura publicació

Pilot de 10 imatges, després nou lots de 20 i un lot final de 10. Tots els lots són mixtos 50/50. El pilot inclou dos casos acció–acció, dos acció–estat i un estat–estat en cada estil. Si la composició o els estats no són llegibles, revisar el pla abans de continuar. Els lots ordenen la producció futura i no constitueixen una autorització.

- **n8-lot-01** (10; 5 fotos / 5 dibuixos): n8-001, n8-101, n8-002, n8-102, n8-052, n8-152, n8-053, n8-153, n8-089, n8-189.
- **n8-lot-02** (20; 10 fotos / 10 dibuixos): n8-003, n8-103, n8-004, n8-104, n8-005, n8-105, n8-006, n8-106, n8-007, n8-107, n8-008, n8-108, n8-009, n8-109, n8-010, n8-110, n8-011, n8-111, n8-012, n8-112.
- **n8-lot-03** (20; 10 fotos / 10 dibuixos): n8-013, n8-113, n8-014, n8-114, n8-015, n8-115, n8-016, n8-116, n8-017, n8-117, n8-018, n8-118, n8-019, n8-119, n8-020, n8-120, n8-021, n8-121, n8-022, n8-122.
- **n8-lot-04** (20; 10 fotos / 10 dibuixos): n8-023, n8-123, n8-024, n8-124, n8-025, n8-125, n8-026, n8-126, n8-027, n8-127, n8-028, n8-128, n8-029, n8-129, n8-030, n8-130, n8-031, n8-131, n8-032, n8-132.
- **n8-lot-05** (20; 10 fotos / 10 dibuixos): n8-033, n8-133, n8-034, n8-134, n8-035, n8-135, n8-036, n8-136, n8-037, n8-137, n8-038, n8-138, n8-039, n8-139, n8-040, n8-140, n8-041, n8-141, n8-042, n8-142.
- **n8-lot-06** (20; 10 fotos / 10 dibuixos): n8-043, n8-143, n8-044, n8-144, n8-045, n8-145, n8-046, n8-146, n8-047, n8-147, n8-048, n8-148, n8-049, n8-149, n8-050, n8-150, n8-051, n8-151, n8-054, n8-154.
- **n8-lot-07** (20; 10 fotos / 10 dibuixos): n8-055, n8-155, n8-056, n8-156, n8-057, n8-157, n8-058, n8-158, n8-059, n8-159, n8-060, n8-160, n8-061, n8-161, n8-062, n8-162, n8-063, n8-163, n8-064, n8-164.
- **n8-lot-08** (20; 10 fotos / 10 dibuixos): n8-065, n8-165, n8-066, n8-166, n8-067, n8-167, n8-068, n8-168, n8-069, n8-169, n8-070, n8-170, n8-071, n8-171, n8-072, n8-172, n8-073, n8-173, n8-074, n8-174.
- **n8-lot-09** (20; 10 fotos / 10 dibuixos): n8-075, n8-175, n8-076, n8-176, n8-077, n8-177, n8-078, n8-178, n8-079, n8-179, n8-080, n8-180, n8-081, n8-181, n8-082, n8-182, n8-083, n8-183, n8-084, n8-184.
- **n8-lot-10** (20; 10 fotos / 10 dibuixos): n8-085, n8-185, n8-086, n8-186, n8-087, n8-187, n8-088, n8-188, n8-090, n8-190, n8-091, n8-191, n8-092, n8-192, n8-093, n8-193, n8-094, n8-194, n8-095, n8-195.
- **n8-lot-11** (10; 5 fotos / 5 dibuixos): n8-096, n8-196, n8-097, n8-197, n8-098, n8-198, n8-099, n8-199, n8-100, n8-200.

1. Només després d’una nova instrucció: preparar prompts i progress.json N8 a partir dels 200 IDs aprovats. No heretar els horaris N7; aplicar només els que indiqui la nova autorització.
2. Pilot de 10 estímuls abans de continuar: comprovar escena contínua, dos predicats i llegibilitat facial. Revisar cada imatge, sense aprovació automàtica del lot.
3. Produir i revisar els lots següents; importar només acceptats, una còpia WebP per construcció, originals i descartades conservats. No modificar cap dels 3669 assets previs ni les 861 entrades.
4. Abans de publicar: validar IDs, duplicats, 100/100 i quotes; comparar totes les metadades i hashes antics amb la baseline; comprovar cerca en català/castellà, filtre N8, col·lecció, pantalla completa i descàrregues.
5. Adaptar importador/auditoria i check-site a events N8 en la futura implementació; no es pressuposa que els importadors N7 siguin compatibles. Executar proves pertinents, build --site-only, empaquetar bank, check-site i git diff --check.
6. Revisar el diff i els fitxers abans de commit/push autoritzats. Esperar GitHub Actions i verificar catàleg públic, recompte, preservació i SHA-256 de totes les descàrregues N8 publicades en cada lot.
7. Tancar amb 3869 imatges si es completen les 200, 861 entrades intactes, auditoria final i registre de publicació. Si hi ha una pausa, desar IDs acceptats, descartats i pendents, sense completar-los fictíciament.

Comprovació reproduïble: `node scripts/validate-n8-plan.cjs`. Informe: `production/n8-plan-validation.json`. Verifica referències, esdeveniments, quotes, lots, coherència dels dos formats i preservació local; no acredita comprensió clínica ni qualitat d’imatges inexistents. L’aprovació del pla i l’autorització de producció són passos posteriors.

## Habituals · fotografia

1. **n8-001 · nena · llegir · llibre / nen · portar · cistell**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-001; homòleg: n8-101.
   - Etiquetes: NENA · LLEGIR · LLIBRE · NEN · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-ef0bd41d6ee3 · w-3bb995df42bf · w-b4012100fe09 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=NEN (w-b4012100fe09); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a esquerra: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. NEN a dreta: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

2. **n8-002 · nen · llegir · llibre / dona · aixecar · pilota**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-002; homòleg: n8-102.
   - Etiquetes: NEN · LLEGIR · LLIBRE · DONA · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-ef0bd41d6ee3 · w-3bb995df42bf · w-72e9fe9a8b43 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=DONA (w-72e9fe9a8b43); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. DONA a esquerra: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

3. **n8-003 · noia · llegir · llibre / noi · olorar · flor**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-003; homòleg: n8-103.
   - Etiquetes: NOIA · LLEGIR · LLIBRE · NOI · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-ef0bd41d6ee3 · w-3bb995df42bf · w-01bc6dcab46b · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=NOIA (w-b38ff488f862); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=NOI (w-01bc6dcab46b); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOIA a esquerra: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. NOI a dreta: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

4. **n8-004 · home · llegir · llibre / nena · abraçar · coixí**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-004; homòleg: n8-104.
   - Etiquetes: HOME · LLEGIR · LLIBRE · NENA · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-ef0bd41d6ee3 · w-3bb995df42bf · w-cda6fa4a9867 · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=NENA (w-cda6fa4a9867); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a dreta: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. NENA a esquerra: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

5. **n8-005 · dona · llegir · llibre / home · saltar**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-005; homòleg: n8-105.
   - Etiquetes: DONA · LLEGIR · LLIBRE · HOME · SALTAR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-ef0bd41d6ee3 · w-3bb995df42bf · w-cfe24f6b3c38 · w-aac354dd31c8.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=HOME (w-cfe24f6b3c38); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a esquerra: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. HOME a dreta: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

6. **n8-006 · nen · beure · aigua / noia · portar · cistell**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-006; homòleg: n8-106.
   - Etiquetes: NEN · BEURE · AIGUA · NOIA · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-a5ddba336d84 · w-00e8b2c10536 · w-b38ff488f862 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=NOIA (w-b38ff488f862); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. NOIA a esquerra: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

7. **n8-007 · noi · beure · aigua / dona · aixecar · pilota**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-007; homòleg: n8-107.
   - Etiquetes: NOI · BEURE · AIGUA · DONA · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-a5ddba336d84 · w-00e8b2c10536 · w-72e9fe9a8b43 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=NOI (w-01bc6dcab46b); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=DONA (w-72e9fe9a8b43); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOI a esquerra: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. DONA a dreta: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

8. **n8-008 · nena · beure · aigua / noia · olorar · flor**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-008; homòleg: n8-108.
   - Etiquetes: NENA · BEURE · AIGUA · NOIA · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-a5ddba336d84 · w-00e8b2c10536 · w-b38ff488f862 · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=NOIA (w-b38ff488f862); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a dreta: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. NOIA a esquerra: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

9. **n8-009 · home · beure · aigua / noi · abraçar · coixí**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-009; homòleg: n8-109.
   - Etiquetes: HOME · BEURE · AIGUA · NOI · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-a5ddba336d84 · w-00e8b2c10536 · w-01bc6dcab46b · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=NOI (w-01bc6dcab46b); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a esquerra: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. NOI a dreta: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

10. **n8-010 · dona · beure · aigua / nena · saltar**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-010; homòleg: n8-110.
   - Etiquetes: DONA · BEURE · AIGUA · NENA · SALTAR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-a5ddba336d84 · w-00e8b2c10536 · w-cda6fa4a9867 · w-aac354dd31c8.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=NENA (w-cda6fa4a9867); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a dreta: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. NENA a esquerra: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

11. **n8-011 · nena · menjar · poma / nen · portar · cistell**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-011; homòleg: n8-111.
   - Etiquetes: NENA · MENJAR · POMA · NEN · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-c248ebfe6f67 · w-809c680b5699 · w-b4012100fe09 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=NEN (w-b4012100fe09); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a esquerra: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. NEN a dreta: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

12. **n8-012 · nen · menjar · poma / dona · aixecar · pilota**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-012; homòleg: n8-112.
   - Etiquetes: NEN · MENJAR · POMA · DONA · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-c248ebfe6f67 · w-809c680b5699 · w-72e9fe9a8b43 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=DONA (w-72e9fe9a8b43); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. DONA a esquerra: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

13. **n8-013 · noia · menjar · poma / noi · olorar · flor**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-013; homòleg: n8-113.
   - Etiquetes: NOIA · MENJAR · POMA · NOI · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-c248ebfe6f67 · w-809c680b5699 · w-01bc6dcab46b · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=NOIA (w-b38ff488f862); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=NOI (w-01bc6dcab46b); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOIA a esquerra: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. NOI a dreta: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

14. **n8-014 · home · menjar · poma / nena · abraçar · coixí**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-014; homòleg: n8-114.
   - Etiquetes: HOME · MENJAR · POMA · NENA · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-c248ebfe6f67 · w-809c680b5699 · w-cda6fa4a9867 · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=NENA (w-cda6fa4a9867); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a dreta: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. NENA a esquerra: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

15. **n8-015 · dona · menjar · poma / home · saltar**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-015; homòleg: n8-115.
   - Etiquetes: DONA · MENJAR · POMA · HOME · SALTAR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-c248ebfe6f67 · w-809c680b5699 · w-cfe24f6b3c38 · w-aac354dd31c8.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=HOME (w-cfe24f6b3c38); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a esquerra: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. HOME a dreta: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

16. **n8-016 · nen · regar · planta / noia · portar · cistell**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-016; homòleg: n8-116.
   - Etiquetes: NEN · REGAR · PLANTA · NOIA · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-00107994a0cd · w-03d524b232d7 · w-b38ff488f862 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=NOIA (w-b38ff488f862); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. NOIA a esquerra: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

17. **n8-017 · noi · regar · planta / dona · aixecar · pilota**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-017; homòleg: n8-117.
   - Etiquetes: NOI · REGAR · PLANTA · DONA · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-00107994a0cd · w-03d524b232d7 · w-72e9fe9a8b43 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=NOI (w-01bc6dcab46b); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=DONA (w-72e9fe9a8b43); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOI a esquerra: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. DONA a dreta: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

18. **n8-018 · nena · regar · planta / noia · olorar · flor**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-018; homòleg: n8-118.
   - Etiquetes: NENA · REGAR · PLANTA · NOIA · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-00107994a0cd · w-03d524b232d7 · w-b38ff488f862 · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=NOIA (w-b38ff488f862); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a dreta: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. NOIA a esquerra: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

19. **n8-019 · home · regar · planta / noi · abraçar · coixí**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-019; homòleg: n8-119.
   - Etiquetes: HOME · REGAR · PLANTA · NOI · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-00107994a0cd · w-03d524b232d7 · w-01bc6dcab46b · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=NOI (w-01bc6dcab46b); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a esquerra: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. NOI a dreta: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

20. **n8-020 · dona · regar · planta / nena · saltar**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-020; homòleg: n8-120.
   - Etiquetes: DONA · REGAR · PLANTA · NENA · SALTAR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-00107994a0cd · w-03d524b232d7 · w-cda6fa4a9867 · w-aac354dd31c8.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=NENA (w-cda6fa4a9867); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a dreta: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. NENA a esquerra: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

21. **n8-021 · nena · pintar · caixa / nen · portar · cistell**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-021; homòleg: n8-121.
   - Etiquetes: NENA · PINTAR · CAIXA · NEN · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-b04a48827310 · w-696b7c739d30 · w-b4012100fe09 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=NEN (w-b4012100fe09); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a esquerra: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. NEN a dreta: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

22. **n8-022 · nen · pintar · caixa / dona · aixecar · pilota**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-022; homòleg: n8-122.
   - Etiquetes: NEN · PINTAR · CAIXA · DONA · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-b04a48827310 · w-696b7c739d30 · w-72e9fe9a8b43 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=DONA (w-72e9fe9a8b43); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. DONA a esquerra: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

23. **n8-023 · noia · pintar · caixa / noi · olorar · flor**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-023; homòleg: n8-123.
   - Etiquetes: NOIA · PINTAR · CAIXA · NOI · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-b04a48827310 · w-696b7c739d30 · w-01bc6dcab46b · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=NOIA (w-b38ff488f862); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=NOI (w-01bc6dcab46b); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOIA a esquerra: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. NOI a dreta: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

24. **n8-024 · home · pintar · caixa / nena · abraçar · coixí**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-024; homòleg: n8-124.
   - Etiquetes: HOME · PINTAR · CAIXA · NENA · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-b04a48827310 · w-696b7c739d30 · w-cda6fa4a9867 · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=NENA (w-cda6fa4a9867); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a dreta: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. NENA a esquerra: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

25. **n8-025 · dona · pintar · caixa / home · saltar**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-025; homòleg: n8-125.
   - Etiquetes: DONA · PINTAR · CAIXA · HOME · SALTAR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-b04a48827310 · w-696b7c739d30 · w-cfe24f6b3c38 · w-aac354dd31c8.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=HOME (w-cfe24f6b3c38); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a esquerra: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. HOME a dreta: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

26. **n8-026 · nen · netejar · plat / noia · portar · cistell**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-026; homòleg: n8-126.
   - Etiquetes: NEN · NETEJAR · PLAT · NOIA · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-4e6be686e7c1 · w-55d250f4cf1e · w-b38ff488f862 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (accio): agent=NOIA (w-b38ff488f862); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. NOIA a esquerra: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

27. **n8-027 · noi · netejar · plat / dona · aixecar · pilota**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-027; homòleg: n8-127.
   - Etiquetes: NOI · NETEJAR · PLAT · DONA · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-4e6be686e7c1 · w-55d250f4cf1e · w-72e9fe9a8b43 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=NOI (w-01bc6dcab46b); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (accio): agent=DONA (w-72e9fe9a8b43); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOI a esquerra: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. DONA a dreta: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

28. **n8-028 · nena · netejar · plat / noia · olorar · flor**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-028; homòleg: n8-128.
   - Etiquetes: NENA · NETEJAR · PLAT · NOIA · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-4e6be686e7c1 · w-55d250f4cf1e · w-b38ff488f862 · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (accio): agent=NOIA (w-b38ff488f862); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a dreta: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. NOIA a esquerra: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

29. **n8-029 · home · netejar · plat / noi · abraçar · coixí**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-029; homòleg: n8-129.
   - Etiquetes: HOME · NETEJAR · PLAT · NOI · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-4e6be686e7c1 · w-55d250f4cf1e · w-01bc6dcab46b · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (accio): agent=NOI (w-01bc6dcab46b); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a esquerra: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. NOI a dreta: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

30. **n8-030 · dona · netejar · plat / nena · saltar**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-030; homòleg: n8-130.
   - Etiquetes: DONA · NETEJAR · PLAT · NENA · SALTAR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-4e6be686e7c1 · w-55d250f4cf1e · w-cda6fa4a9867 · w-aac354dd31c8.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (accio): agent=NENA (w-cda6fa4a9867); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a dreta: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. NENA a esquerra: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

31. **n8-031 · nena · assecar · cullera / nen · portar · cistell**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-031; homòleg: n8-131.
   - Etiquetes: NENA · ASSECAR · CULLERA · NEN · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-ae417aa563dd · w-9c9849fac1d3 · w-b4012100fe09 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (accio): agent=NEN (w-b4012100fe09); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a esquerra: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. NEN a dreta: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

32. **n8-032 · nen · assecar · cullera / dona · aixecar · pilota**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-032; homòleg: n8-132.
   - Etiquetes: NEN · ASSECAR · CULLERA · DONA · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-ae417aa563dd · w-9c9849fac1d3 · w-72e9fe9a8b43 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (accio): agent=DONA (w-72e9fe9a8b43); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. DONA a esquerra: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

33. **n8-033 · noia · assecar · cullera / noi · olorar · flor**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-033; homòleg: n8-133.
   - Etiquetes: NOIA · ASSECAR · CULLERA · NOI · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-ae417aa563dd · w-9c9849fac1d3 · w-01bc6dcab46b · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=NOIA (w-b38ff488f862); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (accio): agent=NOI (w-01bc6dcab46b); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOIA a esquerra: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. NOI a dreta: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

34. **n8-034 · home · assecar · cullera / nena · abraçar · coixí**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-034; homòleg: n8-134.
   - Etiquetes: HOME · ASSECAR · CULLERA · NENA · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-ae417aa563dd · w-9c9849fac1d3 · w-cda6fa4a9867 · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (accio): agent=NENA (w-cda6fa4a9867); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a dreta: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. NENA a esquerra: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

35. **n8-035 · dona · assecar · cullera / home · saltar**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-035; homòleg: n8-135.
   - Etiquetes: DONA · ASSECAR · CULLERA · HOME · SALTAR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-ae417aa563dd · w-9c9849fac1d3 · w-cfe24f6b3c38 · w-aac354dd31c8.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (accio): agent=HOME (w-cfe24f6b3c38); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a esquerra: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. HOME a dreta: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

36. **n8-036 · nen · pentinar · nina / noia · portar · cistell**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-036; homòleg: n8-136.
   - Etiquetes: NEN · PENTINAR · NINA · NOIA · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-83c248429f07 · w-db89958a3c63 · w-b38ff488f862 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=NOIA (w-b38ff488f862); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. NOIA a esquerra: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

37. **n8-037 · noi · pentinar · nina / dona · aixecar · pilota**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-037; homòleg: n8-137.
   - Etiquetes: NOI · PENTINAR · NINA · DONA · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-83c248429f07 · w-db89958a3c63 · w-72e9fe9a8b43 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=NOI (w-01bc6dcab46b); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=DONA (w-72e9fe9a8b43); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOI a esquerra: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. DONA a dreta: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

38. **n8-038 · nena · pentinar · nina / noia · olorar · flor**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-038; homòleg: n8-138.
   - Etiquetes: NENA · PENTINAR · NINA · NOIA · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-83c248429f07 · w-db89958a3c63 · w-b38ff488f862 · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=NOIA (w-b38ff488f862); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a dreta: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. NOIA a esquerra: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

39. **n8-039 · home · pentinar · nina / noi · abraçar · coixí**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-039; homòleg: n8-139.
   - Etiquetes: HOME · PENTINAR · NINA · NOI · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-83c248429f07 · w-db89958a3c63 · w-01bc6dcab46b · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=NOI (w-01bc6dcab46b); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a esquerra: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. NOI a dreta: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

40. **n8-040 · dona · pentinar · nina / nena · saltar**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-040; homòleg: n8-140.
   - Etiquetes: DONA · PENTINAR · NINA · NENA · SALTAR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-83c248429f07 · w-db89958a3c63 · w-cda6fa4a9867 · w-aac354dd31c8.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=NENA (w-cda6fa4a9867); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a dreta: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. NENA a esquerra: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

41. **n8-041 · nena · tallar · plastilina / nen · portar · cistell**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-041; homòleg: n8-141.
   - Etiquetes: NENA · TALLAR · PLASTILINA · NEN · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-7a101d803c16 · w-0606be9fcf92 · w-b4012100fe09 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (accio): agent=NEN (w-b4012100fe09); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a esquerra: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. NEN a dreta: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

42. **n8-042 · nen · tallar · plastilina / dona · aixecar · pilota**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-042; homòleg: n8-142.
   - Etiquetes: NEN · TALLAR · PLASTILINA · DONA · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-7a101d803c16 · w-0606be9fcf92 · w-72e9fe9a8b43 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (accio): agent=DONA (w-72e9fe9a8b43); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. DONA a esquerra: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

43. **n8-043 · noia · tallar · plastilina / noi · olorar · flor**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-043; homòleg: n8-143.
   - Etiquetes: NOIA · TALLAR · PLASTILINA · NOI · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-7a101d803c16 · w-0606be9fcf92 · w-01bc6dcab46b · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=NOIA (w-b38ff488f862); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (accio): agent=NOI (w-01bc6dcab46b); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOIA a esquerra: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. NOI a dreta: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

44. **n8-044 · home · tallar · plastilina / nena · abraçar · coixí**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-044; homòleg: n8-144.
   - Etiquetes: HOME · TALLAR · PLASTILINA · NENA · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-7a101d803c16 · w-0606be9fcf92 · w-cda6fa4a9867 · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (accio): agent=NENA (w-cda6fa4a9867); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a dreta: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. NENA a esquerra: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

45. **n8-045 · dona · tallar · plastilina / home · saltar**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-045; homòleg: n8-145.
   - Etiquetes: DONA · TALLAR · PLASTILINA · HOME · SALTAR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-7a101d803c16 · w-0606be9fcf92 · w-cfe24f6b3c38 · w-aac354dd31c8.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (accio): agent=HOME (w-cfe24f6b3c38); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a esquerra: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. HOME a dreta: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

46. **n8-046 · nen · estripar · paper / noia · portar · cistell**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-046; homòleg: n8-146.
   - Etiquetes: NEN · ESTRIPAR · PAPER · NOIA · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-b38ff488f862 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=NOIA (w-b38ff488f862); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. NOIA a esquerra: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

47. **n8-047 · noi · estripar · paper / dona · aixecar · pilota**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-047; homòleg: n8-147.
   - Etiquetes: NOI · ESTRIPAR · PAPER · DONA · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-72e9fe9a8b43 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=NOI (w-01bc6dcab46b); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=DONA (w-72e9fe9a8b43); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOI a esquerra: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. DONA a dreta: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

48. **n8-048 · nena · estripar · paper / noia · olorar · flor**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-048; homòleg: n8-148.
   - Etiquetes: NENA · ESTRIPAR · PAPER · NOIA · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-b38ff488f862 · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=NOIA (w-b38ff488f862); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a dreta: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. NOIA a esquerra: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

49. **n8-049 · home · estripar · paper / noi · abraçar · coixí**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-049; homòleg: n8-149.
   - Etiquetes: HOME · ESTRIPAR · PAPER · NOI · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-01bc6dcab46b · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=NOI (w-01bc6dcab46b); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a esquerra: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. NOI a dreta: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

50. **n8-050 · dona · estripar · paper / nena · saltar**
   - Grup/tipus: habitual / photo; estructura: accio-accio; família: n8-f-050; homòleg: n8-150.
   - Etiquetes: DONA · ESTRIPAR · PAPER · NENA · SALTAR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-cda6fa4a9867 · w-aac354dd31c8.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=NENA (w-cda6fa4a9867); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a dreta: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. NENA a esquerra: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

51. **n8-051 · nena · llegir · llibre / nen · seure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-051; homòleg: n8-151.
   - Etiquetes: NENA · LLEGIR · LLIBRE · NEN · SEURE.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-ef0bd41d6ee3 · w-3bb995df42bf · w-b4012100fe09 · w-045dc98b2849.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=NEN (w-b4012100fe09); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a esquerra: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. NEN a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

52. **n8-052 · nen · llegir · llibre / dona · dormir**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-052; homòleg: n8-152.
   - Etiquetes: NEN · LLEGIR · LLIBRE · DONA · DORMIR.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-ef0bd41d6ee3 · w-3bb995df42bf · w-72e9fe9a8b43 · w-2c4809267c13.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=DONA (w-72e9fe9a8b43); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. DONA a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

53. **n8-053 · noia · llegir · llibre / noi · riure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-053; homòleg: n8-153.
   - Etiquetes: NOIA · LLEGIR · LLIBRE · NOI · RIURE.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-ef0bd41d6ee3 · w-3bb995df42bf · w-01bc6dcab46b · w-8a560cbf66b0.
   - e1 (accio): agent=NOIA (w-b38ff488f862); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOIA a esquerra: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. NOI a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

54. **n8-054 · home · beure · aigua / nena · seure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-054; homòleg: n8-154.
   - Etiquetes: HOME · BEURE · AIGUA · NENA · SEURE.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-a5ddba336d84 · w-00e8b2c10536 · w-cda6fa4a9867 · w-045dc98b2849.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (estat): agent=NENA (w-cda6fa4a9867); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a dreta: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. NENA a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

55. **n8-055 · dona · beure · aigua / home · dormir**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-055; homòleg: n8-155.
   - Etiquetes: DONA · BEURE · AIGUA · HOME · DORMIR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-a5ddba336d84 · w-00e8b2c10536 · w-cfe24f6b3c38 · w-2c4809267c13.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (estat): agent=HOME (w-cfe24f6b3c38); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a esquerra: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. HOME a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

56. **n8-056 · nen · beure · aigua / noia · riure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-056; homòleg: n8-156.
   - Etiquetes: NEN · BEURE · AIGUA · NOIA · RIURE.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-a5ddba336d84 · w-00e8b2c10536 · w-b38ff488f862 · w-8a560cbf66b0.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (estat): agent=NOIA (w-b38ff488f862); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. NOIA a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

57. **n8-057 · noi · menjar · poma / dona · seure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-057; homòleg: n8-157.
   - Etiquetes: NOI · MENJAR · POMA · DONA · SEURE.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-c248ebfe6f67 · w-809c680b5699 · w-72e9fe9a8b43 · w-045dc98b2849.
   - e1 (accio): agent=NOI (w-01bc6dcab46b); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=DONA (w-72e9fe9a8b43); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOI a esquerra: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. DONA a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

58. **n8-058 · nena · menjar · poma / noia · dormir**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-058; homòleg: n8-158.
   - Etiquetes: NENA · MENJAR · POMA · NOIA · DORMIR.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-c248ebfe6f67 · w-809c680b5699 · w-b38ff488f862 · w-2c4809267c13.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=NOIA (w-b38ff488f862); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a dreta: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. NOIA a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

59. **n8-059 · home · menjar · poma / noi · riure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-059; homòleg: n8-159.
   - Etiquetes: HOME · MENJAR · POMA · NOI · RIURE.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-c248ebfe6f67 · w-809c680b5699 · w-01bc6dcab46b · w-8a560cbf66b0.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a esquerra: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. NOI a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

60. **n8-060 · dona · regar · planta / nena · seure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-060; homòleg: n8-160.
   - Etiquetes: DONA · REGAR · PLANTA · NENA · SEURE.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-00107994a0cd · w-03d524b232d7 · w-cda6fa4a9867 · w-045dc98b2849.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (estat): agent=NENA (w-cda6fa4a9867); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a dreta: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. NENA a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

61. **n8-061 · nena · regar · planta / nen · dormir**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-061; homòleg: n8-161.
   - Etiquetes: NENA · REGAR · PLANTA · NEN · DORMIR.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-00107994a0cd · w-03d524b232d7 · w-b4012100fe09 · w-2c4809267c13.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (estat): agent=NEN (w-b4012100fe09); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a esquerra: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. NEN a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

62. **n8-062 · nen · regar · planta / dona · riure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-062; homòleg: n8-162.
   - Etiquetes: NEN · REGAR · PLANTA · DONA · RIURE.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-00107994a0cd · w-03d524b232d7 · w-72e9fe9a8b43 · w-8a560cbf66b0.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (estat): agent=DONA (w-72e9fe9a8b43); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. DONA a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

63. **n8-063 · noia · pintar · caixa / noi · seure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-063; homòleg: n8-163.
   - Etiquetes: NOIA · PINTAR · CAIXA · NOI · SEURE.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-b04a48827310 · w-696b7c739d30 · w-01bc6dcab46b · w-045dc98b2849.
   - e1 (accio): agent=NOIA (w-b38ff488f862); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOIA a esquerra: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. NOI a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

64. **n8-064 · home · pintar · caixa / nena · dormir**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-064; homòleg: n8-164.
   - Etiquetes: HOME · PINTAR · CAIXA · NENA · DORMIR.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-b04a48827310 · w-696b7c739d30 · w-cda6fa4a9867 · w-2c4809267c13.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (estat): agent=NENA (w-cda6fa4a9867); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a dreta: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. NENA a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

65. **n8-065 · dona · pintar · caixa / home · riure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-065; homòleg: n8-165.
   - Etiquetes: DONA · PINTAR · CAIXA · HOME · RIURE.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-b04a48827310 · w-696b7c739d30 · w-cfe24f6b3c38 · w-8a560cbf66b0.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (estat): agent=HOME (w-cfe24f6b3c38); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a esquerra: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. HOME a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

66. **n8-066 · nen · netejar · plat / noia · seure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-066; homòleg: n8-166.
   - Etiquetes: NEN · NETEJAR · PLAT · NOIA · SEURE.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-4e6be686e7c1 · w-55d250f4cf1e · w-b38ff488f862 · w-045dc98b2849.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (estat): agent=NOIA (w-b38ff488f862); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. NOIA a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

67. **n8-067 · noi · netejar · plat / dona · dormir**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-067; homòleg: n8-167.
   - Etiquetes: NOI · NETEJAR · PLAT · DONA · DORMIR.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-4e6be686e7c1 · w-55d250f4cf1e · w-72e9fe9a8b43 · w-2c4809267c13.
   - e1 (accio): agent=NOI (w-01bc6dcab46b); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (estat): agent=DONA (w-72e9fe9a8b43); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOI a esquerra: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. DONA a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

68. **n8-068 · nena · netejar · plat / noia · riure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-068; homòleg: n8-168.
   - Etiquetes: NENA · NETEJAR · PLAT · NOIA · RIURE.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-4e6be686e7c1 · w-55d250f4cf1e · w-b38ff488f862 · w-8a560cbf66b0.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (estat): agent=NOIA (w-b38ff488f862); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a dreta: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. NOIA a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

69. **n8-069 · home · assecar · cullera / noi · seure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-069; homòleg: n8-169.
   - Etiquetes: HOME · ASSECAR · CULLERA · NOI · SEURE.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-ae417aa563dd · w-9c9849fac1d3 · w-01bc6dcab46b · w-045dc98b2849.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a esquerra: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. NOI a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

70. **n8-070 · dona · assecar · cullera / nena · dormir**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-070; homòleg: n8-170.
   - Etiquetes: DONA · ASSECAR · CULLERA · NENA · DORMIR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-ae417aa563dd · w-9c9849fac1d3 · w-cda6fa4a9867 · w-2c4809267c13.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (estat): agent=NENA (w-cda6fa4a9867); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a dreta: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. NENA a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

71. **n8-071 · nena · assecar · cullera / nen · riure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-071; homòleg: n8-171.
   - Etiquetes: NENA · ASSECAR · CULLERA · NEN · RIURE.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-ae417aa563dd · w-9c9849fac1d3 · w-b4012100fe09 · w-8a560cbf66b0.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (estat): agent=NEN (w-b4012100fe09); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a esquerra: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. NEN a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

72. **n8-072 · nen · pentinar · nina / dona · seure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-072; homòleg: n8-172.
   - Etiquetes: NEN · PENTINAR · NINA · DONA · SEURE.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-83c248429f07 · w-db89958a3c63 · w-72e9fe9a8b43 · w-045dc98b2849.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (estat): agent=DONA (w-72e9fe9a8b43); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. DONA a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

73. **n8-073 · noia · pentinar · nina / noi · dormir**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-073; homòleg: n8-173.
   - Etiquetes: NOIA · PENTINAR · NINA · NOI · DORMIR.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-83c248429f07 · w-db89958a3c63 · w-01bc6dcab46b · w-2c4809267c13.
   - e1 (accio): agent=NOIA (w-b38ff488f862); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOIA a esquerra: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. NOI a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

74. **n8-074 · home · pentinar · nina / nena · riure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-074; homòleg: n8-174.
   - Etiquetes: HOME · PENTINAR · NINA · NENA · RIURE.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-83c248429f07 · w-db89958a3c63 · w-cda6fa4a9867 · w-8a560cbf66b0.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (estat): agent=NENA (w-cda6fa4a9867); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a dreta: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. NENA a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

75. **n8-075 · dona · tallar · plastilina / home · seure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-075; homòleg: n8-175.
   - Etiquetes: DONA · TALLAR · PLASTILINA · HOME · SEURE.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-7a101d803c16 · w-0606be9fcf92 · w-cfe24f6b3c38 · w-045dc98b2849.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (estat): agent=HOME (w-cfe24f6b3c38); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a esquerra: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. HOME a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

76. **n8-076 · nen · tallar · plastilina / noia · dormir**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-076; homòleg: n8-176.
   - Etiquetes: NEN · TALLAR · PLASTILINA · NOIA · DORMIR.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-7a101d803c16 · w-0606be9fcf92 · w-b38ff488f862 · w-2c4809267c13.
   - e1 (accio): agent=NEN (w-b4012100fe09); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (estat): agent=NOIA (w-b38ff488f862); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NEN a dreta: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. NOIA a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

77. **n8-077 · noi · tallar · plastilina / dona · riure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-077; homòleg: n8-177.
   - Etiquetes: NOI · TALLAR · PLASTILINA · DONA · RIURE.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-7a101d803c16 · w-0606be9fcf92 · w-72e9fe9a8b43 · w-8a560cbf66b0.
   - e1 (accio): agent=NOI (w-01bc6dcab46b); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (estat): agent=DONA (w-72e9fe9a8b43); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOI a esquerra: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. DONA a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

78. **n8-078 · nena · estripar · paper / noia · seure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-078; homòleg: n8-178.
   - Etiquetes: NENA · ESTRIPAR · PAPER · NOIA · SEURE.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-b38ff488f862 · w-045dc98b2849.
   - e1 (accio): agent=NENA (w-cda6fa4a9867); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=NOIA (w-b38ff488f862); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a dreta: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. NOIA a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

79. **n8-079 · home · estripar · paper / noi · dormir**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-079; homòleg: n8-179.
   - Etiquetes: HOME · ESTRIPAR · PAPER · NOI · DORMIR.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-01bc6dcab46b · w-2c4809267c13.
   - e1 (accio): agent=HOME (w-cfe24f6b3c38); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a esquerra: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. NOI a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

80. **n8-080 · dona · estripar · paper / nena · riure**
   - Grup/tipus: habitual / photo; estructura: accio-estat; família: n8-f-080; homòleg: n8-180.
   - Etiquetes: DONA · ESTRIPAR · PAPER · NENA · RIURE.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-cda6fa4a9867 · w-8a560cbf66b0.
   - e1 (accio): agent=DONA (w-72e9fe9a8b43); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=NENA (w-cda6fa4a9867); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a dreta: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. NENA a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

81. **n8-081 · nena · seure / nen · dormir**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-081; homòleg: n8-181.
   - Etiquetes: NENA · SEURE · NEN · DORMIR.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-045dc98b2849 · w-b4012100fe09 · w-2c4809267c13.
   - e1 (estat): agent=NENA (w-cda6fa4a9867); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=NEN (w-b4012100fe09); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. NEN a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

82. **n8-082 · noia · seure / noi · dormir**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-082; homòleg: n8-182.
   - Etiquetes: NOIA · SEURE · NOI · DORMIR.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-045dc98b2849 · w-01bc6dcab46b · w-2c4809267c13.
   - e1 (estat): agent=NOIA (w-b38ff488f862); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOIA a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. NOI a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

83. **n8-083 · dona · seure / home · dormir**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-083; homòleg: n8-183.
   - Etiquetes: DONA · SEURE · HOME · DORMIR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-045dc98b2849 · w-cfe24f6b3c38 · w-2c4809267c13.
   - e1 (estat): agent=DONA (w-72e9fe9a8b43); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=HOME (w-cfe24f6b3c38); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. HOME a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

84. **n8-084 · noi · seure / dona · dormir**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-084; homòleg: n8-184.
   - Etiquetes: NOI · SEURE · DONA · DORMIR.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-045dc98b2849 · w-72e9fe9a8b43 · w-2c4809267c13.
   - e1 (estat): agent=NOI (w-01bc6dcab46b); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=DONA (w-72e9fe9a8b43); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOI a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. DONA a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

85. **n8-085 · dona · seure / home · riure**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-085; homòleg: n8-185.
   - Etiquetes: DONA · SEURE · HOME · RIURE.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-045dc98b2849 · w-cfe24f6b3c38 · w-8a560cbf66b0.
   - e1 (estat): agent=DONA (w-72e9fe9a8b43); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=HOME (w-cfe24f6b3c38); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. HOME a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

86. **n8-086 · noi · seure / dona · riure**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-086; homòleg: n8-186.
   - Etiquetes: NOI · SEURE · DONA · RIURE.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-045dc98b2849 · w-72e9fe9a8b43 · w-8a560cbf66b0.
   - e1 (estat): agent=NOI (w-01bc6dcab46b); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=DONA (w-72e9fe9a8b43); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOI a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. DONA a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

87. **n8-087 · home · seure / noi · riure**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-087; homòleg: n8-187.
   - Etiquetes: HOME · SEURE · NOI · RIURE.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-045dc98b2849 · w-01bc6dcab46b · w-8a560cbf66b0.
   - e1 (estat): agent=HOME (w-cfe24f6b3c38); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. NOI a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

88. **n8-088 · nena · seure / nen · riure**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-088; homòleg: n8-188.
   - Etiquetes: NENA · SEURE · NEN · RIURE.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-045dc98b2849 · w-b4012100fe09 · w-8a560cbf66b0.
   - e1 (estat): agent=NENA (w-cda6fa4a9867); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=NEN (w-b4012100fe09); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. NEN a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

89. **n8-089 · home · seure / noi · plorar**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-089; homòleg: n8-189.
   - Etiquetes: HOME · SEURE · NOI · PLORAR.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-045dc98b2849 · w-01bc6dcab46b · w-9fbc08b69e53.
   - e1 (estat): agent=HOME (w-cfe24f6b3c38); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. NOI a dreta: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

90. **n8-090 · nena · seure / nen · plorar**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-090; homòleg: n8-190.
   - Etiquetes: NENA · SEURE · NEN · PLORAR.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-045dc98b2849 · w-b4012100fe09 · w-9fbc08b69e53.
   - e1 (estat): agent=NENA (w-cda6fa4a9867); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=NEN (w-b4012100fe09); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. NEN a esquerra: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

91. **n8-091 · noia · seure / noi · plorar**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-091; homòleg: n8-191.
   - Etiquetes: NOIA · SEURE · NOI · PLORAR.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-045dc98b2849 · w-01bc6dcab46b · w-9fbc08b69e53.
   - e1 (estat): agent=NOIA (w-b38ff488f862); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOIA a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. NOI a dreta: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

92. **n8-092 · dona · seure / home · plorar**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-092; homòleg: n8-192.
   - Etiquetes: DONA · SEURE · HOME · PLORAR.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-045dc98b2849 · w-cfe24f6b3c38 · w-9fbc08b69e53.
   - e1 (estat): agent=DONA (w-72e9fe9a8b43); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=HOME (w-cfe24f6b3c38); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. HOME a esquerra: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

93. **n8-093 · noia · dormir / noi · riure**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-093; homòleg: n8-193.
   - Etiquetes: NOIA · DORMIR · NOI · RIURE.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-2c4809267c13 · w-01bc6dcab46b · w-8a560cbf66b0.
   - e1 (estat): agent=NOIA (w-b38ff488f862); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOIA a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. NOI a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

94. **n8-094 · dona · dormir / home · riure**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-094; homòleg: n8-194.
   - Etiquetes: DONA · DORMIR · HOME · RIURE.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-2c4809267c13 · w-cfe24f6b3c38 · w-8a560cbf66b0.
   - e1 (estat): agent=DONA (w-72e9fe9a8b43); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - e2 (estat): agent=HOME (w-cfe24f6b3c38); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. DONA a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. HOME a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

95. **n8-095 · noi · dormir / dona · riure**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-095; homòleg: n8-195.
   - Etiquetes: NOI · DORMIR · DONA · RIURE.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-2c4809267c13 · w-72e9fe9a8b43 · w-8a560cbf66b0.
   - e1 (estat): agent=NOI (w-01bc6dcab46b); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - e2 (estat): agent=DONA (w-72e9fe9a8b43); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOI a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. DONA a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

96. **n8-096 · home · dormir / noi · riure**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-096; homòleg: n8-196.
   - Etiquetes: HOME · DORMIR · NOI · RIURE.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-2c4809267c13 · w-01bc6dcab46b · w-8a560cbf66b0.
   - e1 (estat): agent=HOME (w-cfe24f6b3c38); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. NOI a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

97. **n8-097 · noi · riure / dona · plorar**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-097; homòleg: n8-197.
   - Etiquetes: NOI · RIURE · DONA · PLORAR.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-8a560cbf66b0 · w-72e9fe9a8b43 · w-9fbc08b69e53.
   - e1 (estat): agent=NOI (w-01bc6dcab46b); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=DONA (w-72e9fe9a8b43); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOI a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. DONA a dreta: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

98. **n8-098 · home · riure / noi · plorar**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-098; homòleg: n8-198.
   - Etiquetes: HOME · RIURE · NOI · PLORAR.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-8a560cbf66b0 · w-01bc6dcab46b · w-9fbc08b69e53.
   - e1 (estat): agent=HOME (w-cfe24f6b3c38); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. HOME a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. NOI a esquerra: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

99. **n8-099 · nena · riure / nen · plorar**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-099; homòleg: n8-199.
   - Etiquetes: NENA · RIURE · NEN · PLORAR.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-8a560cbf66b0 · w-b4012100fe09 · w-9fbc08b69e53.
   - e1 (estat): agent=NENA (w-cda6fa4a9867); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=NEN (w-b4012100fe09); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NENA a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. NEN a dreta: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

100. **n8-100 · noia · riure / noi · plorar**
   - Grup/tipus: habitual / photo; estructura: estat-estat; família: n8-f-100; homòleg: n8-200.
   - Etiquetes: NOIA · RIURE · NOI · PLORAR.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-8a560cbf66b0 · w-01bc6dcab46b · w-9fbc08b69e53.
   - e1 (estat): agent=NOIA (w-b38ff488f862); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=NOI (w-01bc6dcab46b); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. NOIA a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. NOI a esquerra: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dues persones senceres amb proporcions humanes naturals; fotografia sintètica. Proporcions naturals de braços, avantbraços, mans, tronc i cames; articulacions, preses i suport físic plausibles. Acostar persona o objecte, ajustar el suport o flexionar els genolls si cal; mai allargar extremitats. No creuar braços entre participants. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.


## Insòlites · dibuix pla

101. **n8-101 · mico · llegir · llibre / ós · portar · cistell**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-001; homòleg: n8-001.
   - Etiquetes: MICO · LLEGIR · LLIBRE · ÓS · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-12a87560751b · w-ef0bd41d6ee3 · w-3bb995df42bf · w-a06249642996 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=MICO (w-12a87560751b); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=ÓS (w-a06249642996); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. MICO a dreta: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. ÓS a esquerra: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

102. **n8-102 · conill · llegir · llibre / elefant · aixecar · pilota**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-002; homòleg: n8-002.
   - Etiquetes: CONILL · LLEGIR · LLIBRE · ELEFANT · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-ef0bd41d6ee3 · w-3bb995df42bf · w-b059d8ef0bc9 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=CONILL (w-51a7805e979b); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CONILL a esquerra: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. ELEFANT a dreta: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

103. **n8-103 · gat · llegir · llibre / gos · olorar · flor**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-003; homòleg: n8-003.
   - Etiquetes: GAT · LLEGIR · LLIBRE · GOS · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-ef0bd41d6ee3 · w-3bb995df42bf · w-4761fde107a7 · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=GAT (w-11ff74d27c02); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=GOS (w-4761fde107a7); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GAT a dreta: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. GOS a esquerra: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

104. **n8-104 · cangur · llegir · llibre / pinguí · abraçar · coixí**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-004; homòleg: n8-004.
   - Etiquetes: CANGUR · LLEGIR · LLIBRE · PINGUÍ · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-ef0bd41d6ee3 · w-3bb995df42bf · w-5993b1ea57aa · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=CANGUR (w-d5395d03acbf); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CANGUR a esquerra: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. PINGUÍ a dreta: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

105. **n8-105 · zebra · llegir · llibre / girafa · saltar**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-005; homòleg: n8-005.
   - Etiquetes: ZEBRA · LLEGIR · LLIBRE · GIRAFA · SALTAR.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-ef0bd41d6ee3 · w-3bb995df42bf · w-e60f76be7b6c · w-aac354dd31c8.
   - e1 (accio): agent=ZEBRA (w-0dc8fba9677d); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=GIRAFA (w-e60f76be7b6c); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ZEBRA a dreta: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. GIRAFA a esquerra: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

106. **n8-106 · ós · beure · aigua / conill · portar · cistell**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-006; homòleg: n8-006.
   - Etiquetes: ÓS · BEURE · AIGUA · CONILL · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-a06249642996 · w-a5ddba336d84 · w-00e8b2c10536 · w-51a7805e979b · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=ÓS (w-a06249642996); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=CONILL (w-51a7805e979b); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ÓS a esquerra: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. CONILL a dreta: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

107. **n8-107 · elefant · beure · aigua / gat · aixecar · pilota**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-007; homòleg: n8-007.
   - Etiquetes: ELEFANT · BEURE · AIGUA · GAT · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-a5ddba336d84 · w-00e8b2c10536 · w-11ff74d27c02 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=GAT (w-11ff74d27c02); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ELEFANT a dreta: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. GAT a esquerra: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

108. **n8-108 · gos · beure · aigua / cangur · olorar · flor**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-008; homòleg: n8-008.
   - Etiquetes: GOS · BEURE · AIGUA · CANGUR · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-a5ddba336d84 · w-00e8b2c10536 · w-d5395d03acbf · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=GOS (w-4761fde107a7); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=CANGUR (w-d5395d03acbf); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GOS a esquerra: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. CANGUR a dreta: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

109. **n8-109 · pinguí · beure · aigua / zebra · abraçar · coixí**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-009; homòleg: n8-009.
   - Etiquetes: PINGUÍ · BEURE · AIGUA · ZEBRA · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-a5ddba336d84 · w-00e8b2c10536 · w-0dc8fba9677d · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=ZEBRA (w-0dc8fba9677d); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. PINGUÍ a dreta: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. ZEBRA a esquerra: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

110. **n8-110 · girafa · beure · aigua / mico · saltar**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-010; homòleg: n8-010.
   - Etiquetes: GIRAFA · BEURE · AIGUA · MICO · SALTAR.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-a5ddba336d84 · w-00e8b2c10536 · w-12a87560751b · w-aac354dd31c8.
   - e1 (accio): agent=GIRAFA (w-e60f76be7b6c); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=MICO (w-12a87560751b); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GIRAFA a esquerra: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. MICO a dreta: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

111. **n8-111 · mico · menjar · poma / ós · portar · cistell**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-011; homòleg: n8-011.
   - Etiquetes: MICO · MENJAR · POMA · ÓS · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-12a87560751b · w-c248ebfe6f67 · w-809c680b5699 · w-a06249642996 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=MICO (w-12a87560751b); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=ÓS (w-a06249642996); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. MICO a dreta: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. ÓS a esquerra: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

112. **n8-112 · conill · menjar · poma / elefant · aixecar · pilota**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-012; homòleg: n8-012.
   - Etiquetes: CONILL · MENJAR · POMA · ELEFANT · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-c248ebfe6f67 · w-809c680b5699 · w-b059d8ef0bc9 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=CONILL (w-51a7805e979b); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CONILL a esquerra: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. ELEFANT a dreta: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

113. **n8-113 · gat · menjar · poma / gos · olorar · flor**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-013; homòleg: n8-013.
   - Etiquetes: GAT · MENJAR · POMA · GOS · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-c248ebfe6f67 · w-809c680b5699 · w-4761fde107a7 · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=GAT (w-11ff74d27c02); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=GOS (w-4761fde107a7); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GAT a dreta: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. GOS a esquerra: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

114. **n8-114 · cangur · menjar · poma / pinguí · abraçar · coixí**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-014; homòleg: n8-014.
   - Etiquetes: CANGUR · MENJAR · POMA · PINGUÍ · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-c248ebfe6f67 · w-809c680b5699 · w-5993b1ea57aa · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=CANGUR (w-d5395d03acbf); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CANGUR a esquerra: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. PINGUÍ a dreta: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

115. **n8-115 · zebra · menjar · poma / girafa · saltar**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-015; homòleg: n8-015.
   - Etiquetes: ZEBRA · MENJAR · POMA · GIRAFA · SALTAR.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-c248ebfe6f67 · w-809c680b5699 · w-e60f76be7b6c · w-aac354dd31c8.
   - e1 (accio): agent=ZEBRA (w-0dc8fba9677d); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=GIRAFA (w-e60f76be7b6c); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ZEBRA a dreta: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. GIRAFA a esquerra: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

116. **n8-116 · ós · regar · planta / conill · portar · cistell**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-016; homòleg: n8-016.
   - Etiquetes: ÓS · REGAR · PLANTA · CONILL · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-a06249642996 · w-00107994a0cd · w-03d524b232d7 · w-51a7805e979b · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=ÓS (w-a06249642996); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=CONILL (w-51a7805e979b); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ÓS a esquerra: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. CONILL a dreta: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

117. **n8-117 · elefant · regar · planta / gat · aixecar · pilota**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-017; homòleg: n8-017.
   - Etiquetes: ELEFANT · REGAR · PLANTA · GAT · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-00107994a0cd · w-03d524b232d7 · w-11ff74d27c02 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=GAT (w-11ff74d27c02); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ELEFANT a dreta: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. GAT a esquerra: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

118. **n8-118 · gos · regar · planta / cangur · olorar · flor**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-018; homòleg: n8-018.
   - Etiquetes: GOS · REGAR · PLANTA · CANGUR · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-00107994a0cd · w-03d524b232d7 · w-d5395d03acbf · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=GOS (w-4761fde107a7); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=CANGUR (w-d5395d03acbf); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GOS a esquerra: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. CANGUR a dreta: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

119. **n8-119 · pinguí · regar · planta / zebra · abraçar · coixí**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-019; homòleg: n8-019.
   - Etiquetes: PINGUÍ · REGAR · PLANTA · ZEBRA · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-00107994a0cd · w-03d524b232d7 · w-0dc8fba9677d · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=ZEBRA (w-0dc8fba9677d); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. PINGUÍ a dreta: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. ZEBRA a esquerra: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

120. **n8-120 · girafa · regar · planta / mico · saltar**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-020; homòleg: n8-020.
   - Etiquetes: GIRAFA · REGAR · PLANTA · MICO · SALTAR.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-00107994a0cd · w-03d524b232d7 · w-12a87560751b · w-aac354dd31c8.
   - e1 (accio): agent=GIRAFA (w-e60f76be7b6c); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (accio): agent=MICO (w-12a87560751b); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GIRAFA a esquerra: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. MICO a dreta: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

121. **n8-121 · mico · pintar · caixa / ós · portar · cistell**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-021; homòleg: n8-021.
   - Etiquetes: MICO · PINTAR · CAIXA · ÓS · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-12a87560751b · w-b04a48827310 · w-696b7c739d30 · w-a06249642996 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=MICO (w-12a87560751b); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=ÓS (w-a06249642996); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. MICO a dreta: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. ÓS a esquerra: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

122. **n8-122 · conill · pintar · caixa / elefant · aixecar · pilota**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-022; homòleg: n8-022.
   - Etiquetes: CONILL · PINTAR · CAIXA · ELEFANT · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-b04a48827310 · w-696b7c739d30 · w-b059d8ef0bc9 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=CONILL (w-51a7805e979b); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CONILL a esquerra: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. ELEFANT a dreta: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

123. **n8-123 · gat · pintar · caixa / gos · olorar · flor**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-023; homòleg: n8-023.
   - Etiquetes: GAT · PINTAR · CAIXA · GOS · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-b04a48827310 · w-696b7c739d30 · w-4761fde107a7 · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=GAT (w-11ff74d27c02); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=GOS (w-4761fde107a7); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GAT a dreta: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. GOS a esquerra: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

124. **n8-124 · cangur · pintar · caixa / pinguí · abraçar · coixí**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-024; homòleg: n8-024.
   - Etiquetes: CANGUR · PINTAR · CAIXA · PINGUÍ · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-b04a48827310 · w-696b7c739d30 · w-5993b1ea57aa · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=CANGUR (w-d5395d03acbf); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CANGUR a esquerra: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. PINGUÍ a dreta: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

125. **n8-125 · zebra · pintar · caixa / girafa · saltar**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-025; homòleg: n8-025.
   - Etiquetes: ZEBRA · PINTAR · CAIXA · GIRAFA · SALTAR.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-b04a48827310 · w-696b7c739d30 · w-e60f76be7b6c · w-aac354dd31c8.
   - e1 (accio): agent=ZEBRA (w-0dc8fba9677d); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=GIRAFA (w-e60f76be7b6c); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ZEBRA a dreta: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. GIRAFA a esquerra: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

126. **n8-126 · ós · netejar · plat / conill · portar · cistell**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-026; homòleg: n8-026.
   - Etiquetes: ÓS · NETEJAR · PLAT · CONILL · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-a06249642996 · w-4e6be686e7c1 · w-55d250f4cf1e · w-51a7805e979b · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=ÓS (w-a06249642996); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (accio): agent=CONILL (w-51a7805e979b); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ÓS a esquerra: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. CONILL a dreta: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

127. **n8-127 · elefant · netejar · plat / gat · aixecar · pilota**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-027; homòleg: n8-027.
   - Etiquetes: ELEFANT · NETEJAR · PLAT · GAT · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-4e6be686e7c1 · w-55d250f4cf1e · w-11ff74d27c02 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (accio): agent=GAT (w-11ff74d27c02); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ELEFANT a dreta: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. GAT a esquerra: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

128. **n8-128 · gos · netejar · plat / cangur · olorar · flor**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-028; homòleg: n8-028.
   - Etiquetes: GOS · NETEJAR · PLAT · CANGUR · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-4e6be686e7c1 · w-55d250f4cf1e · w-d5395d03acbf · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=GOS (w-4761fde107a7); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (accio): agent=CANGUR (w-d5395d03acbf); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GOS a esquerra: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. CANGUR a dreta: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

129. **n8-129 · pinguí · netejar · plat / zebra · abraçar · coixí**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-029; homòleg: n8-029.
   - Etiquetes: PINGUÍ · NETEJAR · PLAT · ZEBRA · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-4e6be686e7c1 · w-55d250f4cf1e · w-0dc8fba9677d · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (accio): agent=ZEBRA (w-0dc8fba9677d); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. PINGUÍ a dreta: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. ZEBRA a esquerra: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

130. **n8-130 · girafa · netejar · plat / mico · saltar**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-030; homòleg: n8-030.
   - Etiquetes: GIRAFA · NETEJAR · PLAT · MICO · SALTAR.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-4e6be686e7c1 · w-55d250f4cf1e · w-12a87560751b · w-aac354dd31c8.
   - e1 (accio): agent=GIRAFA (w-e60f76be7b6c); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (accio): agent=MICO (w-12a87560751b); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GIRAFA a esquerra: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. MICO a dreta: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

131. **n8-131 · mico · assecar · cullera / ós · portar · cistell**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-031; homòleg: n8-031.
   - Etiquetes: MICO · ASSECAR · CULLERA · ÓS · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-12a87560751b · w-ae417aa563dd · w-9c9849fac1d3 · w-a06249642996 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=MICO (w-12a87560751b); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (accio): agent=ÓS (w-a06249642996); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. MICO a dreta: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. ÓS a esquerra: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

132. **n8-132 · conill · assecar · cullera / elefant · aixecar · pilota**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-032; homòleg: n8-032.
   - Etiquetes: CONILL · ASSECAR · CULLERA · ELEFANT · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-ae417aa563dd · w-9c9849fac1d3 · w-b059d8ef0bc9 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=CONILL (w-51a7805e979b); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CONILL a esquerra: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. ELEFANT a dreta: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

133. **n8-133 · gat · assecar · cullera / gos · olorar · flor**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-033; homòleg: n8-033.
   - Etiquetes: GAT · ASSECAR · CULLERA · GOS · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-ae417aa563dd · w-9c9849fac1d3 · w-4761fde107a7 · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=GAT (w-11ff74d27c02); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (accio): agent=GOS (w-4761fde107a7); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GAT a dreta: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. GOS a esquerra: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

134. **n8-134 · cangur · assecar · cullera / pinguí · abraçar · coixí**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-034; homòleg: n8-034.
   - Etiquetes: CANGUR · ASSECAR · CULLERA · PINGUÍ · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-ae417aa563dd · w-9c9849fac1d3 · w-5993b1ea57aa · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=CANGUR (w-d5395d03acbf); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CANGUR a esquerra: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. PINGUÍ a dreta: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

135. **n8-135 · zebra · assecar · cullera / girafa · saltar**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-035; homòleg: n8-035.
   - Etiquetes: ZEBRA · ASSECAR · CULLERA · GIRAFA · SALTAR.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-ae417aa563dd · w-9c9849fac1d3 · w-e60f76be7b6c · w-aac354dd31c8.
   - e1 (accio): agent=ZEBRA (w-0dc8fba9677d); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (accio): agent=GIRAFA (w-e60f76be7b6c); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ZEBRA a dreta: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. GIRAFA a esquerra: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

136. **n8-136 · ós · pentinar · nina / conill · portar · cistell**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-036; homòleg: n8-036.
   - Etiquetes: ÓS · PENTINAR · NINA · CONILL · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-a06249642996 · w-83c248429f07 · w-db89958a3c63 · w-51a7805e979b · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=ÓS (w-a06249642996); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=CONILL (w-51a7805e979b); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ÓS a esquerra: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. CONILL a dreta: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

137. **n8-137 · elefant · pentinar · nina / gat · aixecar · pilota**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-037; homòleg: n8-037.
   - Etiquetes: ELEFANT · PENTINAR · NINA · GAT · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-83c248429f07 · w-db89958a3c63 · w-11ff74d27c02 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=GAT (w-11ff74d27c02); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ELEFANT a dreta: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. GAT a esquerra: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

138. **n8-138 · gos · pentinar · nina / cangur · olorar · flor**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-038; homòleg: n8-038.
   - Etiquetes: GOS · PENTINAR · NINA · CANGUR · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-83c248429f07 · w-db89958a3c63 · w-d5395d03acbf · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=GOS (w-4761fde107a7); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=CANGUR (w-d5395d03acbf); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GOS a esquerra: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. CANGUR a dreta: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

139. **n8-139 · pinguí · pentinar · nina / zebra · abraçar · coixí**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-039; homòleg: n8-039.
   - Etiquetes: PINGUÍ · PENTINAR · NINA · ZEBRA · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-83c248429f07 · w-db89958a3c63 · w-0dc8fba9677d · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=ZEBRA (w-0dc8fba9677d); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. PINGUÍ a dreta: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. ZEBRA a esquerra: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

140. **n8-140 · girafa · pentinar · nina / mico · saltar**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-040; homòleg: n8-040.
   - Etiquetes: GIRAFA · PENTINAR · NINA · MICO · SALTAR.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-83c248429f07 · w-db89958a3c63 · w-12a87560751b · w-aac354dd31c8.
   - e1 (accio): agent=GIRAFA (w-e60f76be7b6c); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (accio): agent=MICO (w-12a87560751b); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GIRAFA a esquerra: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. MICO a dreta: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

141. **n8-141 · mico · tallar · plastilina / ós · portar · cistell**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-041; homòleg: n8-041.
   - Etiquetes: MICO · TALLAR · PLASTILINA · ÓS · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-12a87560751b · w-7a101d803c16 · w-0606be9fcf92 · w-a06249642996 · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=MICO (w-12a87560751b); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (accio): agent=ÓS (w-a06249642996); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. MICO a dreta: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. ÓS a esquerra: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

142. **n8-142 · conill · tallar · plastilina / elefant · aixecar · pilota**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-042; homòleg: n8-042.
   - Etiquetes: CONILL · TALLAR · PLASTILINA · ELEFANT · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-7a101d803c16 · w-0606be9fcf92 · w-b059d8ef0bc9 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=CONILL (w-51a7805e979b); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CONILL a esquerra: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. ELEFANT a dreta: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

143. **n8-143 · gat · tallar · plastilina / gos · olorar · flor**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-043; homòleg: n8-043.
   - Etiquetes: GAT · TALLAR · PLASTILINA · GOS · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-7a101d803c16 · w-0606be9fcf92 · w-4761fde107a7 · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=GAT (w-11ff74d27c02); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (accio): agent=GOS (w-4761fde107a7); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GAT a dreta: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. GOS a esquerra: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

144. **n8-144 · cangur · tallar · plastilina / pinguí · abraçar · coixí**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-044; homòleg: n8-044.
   - Etiquetes: CANGUR · TALLAR · PLASTILINA · PINGUÍ · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-7a101d803c16 · w-0606be9fcf92 · w-5993b1ea57aa · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=CANGUR (w-d5395d03acbf); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CANGUR a esquerra: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. PINGUÍ a dreta: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

145. **n8-145 · zebra · tallar · plastilina / girafa · saltar**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-045; homòleg: n8-045.
   - Etiquetes: ZEBRA · TALLAR · PLASTILINA · GIRAFA · SALTAR.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-7a101d803c16 · w-0606be9fcf92 · w-e60f76be7b6c · w-aac354dd31c8.
   - e1 (accio): agent=ZEBRA (w-0dc8fba9677d); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (accio): agent=GIRAFA (w-e60f76be7b6c); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ZEBRA a dreta: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. GIRAFA a esquerra: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

146. **n8-146 · ós · estripar · paper / conill · portar · cistell**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-046; homòleg: n8-046.
   - Etiquetes: ÓS · ESTRIPAR · PAPER · CONILL · PORTAR · CISTELL.
   - wordIds, en el mateix ordre: w-a06249642996 · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-51a7805e979b · w-73b71e1ff757 · w-120fb6b37e88.
   - e1 (accio): agent=ÓS (w-a06249642996); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=CONILL (w-51a7805e979b); action=PORTAR (w-73b71e1ff757); patient=CISTELL (w-120fb6b37e88). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ÓS a esquerra: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. CONILL a dreta: Cistell buit sostingut per la nansa al costat del cos mentre fa un pas curt sobre el mateix terra; sense lliurament al company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

147. **n8-147 · elefant · estripar · paper / gat · aixecar · pilota**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-047; homòleg: n8-047.
   - Etiquetes: ELEFANT · ESTRIPAR · PAPER · GAT · AIXECAR · PILOTA.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-11ff74d27c02 · w-e12d88415c80 · w-b7f578451973.
   - e1 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=GAT (w-11ff74d27c02); action=AIXECAR (w-e12d88415c80); patient=PILOTA (w-b7f578451973). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ELEFANT a dreta: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. GAT a esquerra: Dues mans eleven una pilota lleugera fins a l’altura del pit, separada d’una base baixa; colzes flexionats i base sencera visible. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

148. **n8-148 · gos · estripar · paper / cangur · olorar · flor**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-048; homòleg: n8-048.
   - Etiquetes: GOS · ESTRIPAR · PAPER · CANGUR · OLORAR · FLOR.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-d5395d03acbf · w-fc006ad2b6a7 · w-6c5def9143c8.
   - e1 (accio): agent=GOS (w-4761fde107a7); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=CANGUR (w-d5395d03acbf); action=OLORAR (w-fc006ad2b6a7); patient=FLOR (w-6c5def9143c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GOS a esquerra: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. CANGUR a dreta: Una sola flor amb tija visible prop del nas, cap lleument inclinat i boca tancada; no la menja ni la rega. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

149. **n8-149 · pinguí · estripar · paper / zebra · abraçar · coixí**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-049; homòleg: n8-049.
   - Etiquetes: PINGUÍ · ESTRIPAR · PAPER · ZEBRA · ABRAÇAR · COIXÍ.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-0dc8fba9677d · w-780639e2d630 · w-44260b79b61e.
   - e1 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=ZEBRA (w-0dc8fba9677d); action=ABRAÇAR (w-780639e2d630); patient=COIXÍ (w-44260b79b61e). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. PINGUÍ a dreta: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. ZEBRA a esquerra: Dos braços envolten un coixí ample contra el pit, amb colzes flexionats i mans visibles; no abraça el company. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

150. **n8-150 · girafa · estripar · paper / mico · saltar**
   - Grup/tipus: insolita / drawing; estructura: accio-accio; família: n8-f-050; homòleg: n8-050.
   - Etiquetes: GIRAFA · ESTRIPAR · PAPER · MICO · SALTAR.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-12a87560751b · w-aac354dd31c8.
   - e1 (accio): agent=GIRAFA (w-e60f76be7b6c); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (accio): agent=MICO (w-12a87560751b); action=SALTAR (w-aac354dd31c8). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GIRAFA a esquerra: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. MICO a dreta: Instant d’un salt baix: els dos peus separats del terra, genolls flexionats i ombra petita sota els peus; sense línies de moviment ni equipament. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

151. **n8-151 · mico · llegir · llibre / ós · seure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-051; homòleg: n8-051.
   - Etiquetes: MICO · LLEGIR · LLIBRE · ÓS · SEURE.
   - wordIds, en el mateix ordre: w-12a87560751b · w-ef0bd41d6ee3 · w-3bb995df42bf · w-a06249642996 · w-045dc98b2849.
   - e1 (accio): agent=MICO (w-12a87560751b); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=ÓS (w-a06249642996); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. MICO a dreta: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. ÓS a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

152. **n8-152 · conill · llegir · llibre / elefant · dormir**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-052; homòleg: n8-052.
   - Etiquetes: CONILL · LLEGIR · LLIBRE · ELEFANT · DORMIR.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-ef0bd41d6ee3 · w-3bb995df42bf · w-b059d8ef0bc9 · w-2c4809267c13.
   - e1 (accio): agent=CONILL (w-51a7805e979b); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=ELEFANT (w-b059d8ef0bc9); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CONILL a esquerra: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. ELEFANT a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

153. **n8-153 · gat · llegir · llibre / gos · riure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-053; homòleg: n8-053.
   - Etiquetes: GAT · LLEGIR · LLIBRE · GOS · RIURE.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-ef0bd41d6ee3 · w-3bb995df42bf · w-4761fde107a7 · w-8a560cbf66b0.
   - e1 (accio): agent=GAT (w-11ff74d27c02); action=LLEGIR (w-ef0bd41d6ee3); patient=LLIBRE (w-3bb995df42bf). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=GOS (w-4761fde107a7); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GAT a dreta: Llibre obert sostingut prop del tronc, mirada dirigida a les pàgines i postura de lectura; pàgines sense lletres ni xifres. GOS a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

154. **n8-154 · cangur · beure · aigua / pinguí · seure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-054; homòleg: n8-054.
   - Etiquetes: CANGUR · BEURE · AIGUA · PINGUÍ · SEURE.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-a5ddba336d84 · w-00e8b2c10536 · w-5993b1ea57aa · w-045dc98b2849.
   - e1 (accio): agent=CANGUR (w-d5395d03acbf); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (estat): agent=PINGUÍ (w-5993b1ea57aa); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CANGUR a esquerra: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. PINGUÍ a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

155. **n8-155 · zebra · beure · aigua / girafa · dormir**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-055; homòleg: n8-055.
   - Etiquetes: ZEBRA · BEURE · AIGUA · GIRAFA · DORMIR.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-a5ddba336d84 · w-00e8b2c10536 · w-e60f76be7b6c · w-2c4809267c13.
   - e1 (accio): agent=ZEBRA (w-0dc8fba9677d); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (estat): agent=GIRAFA (w-e60f76be7b6c); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ZEBRA a dreta: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. GIRAFA a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

156. **n8-156 · ós · beure · aigua / conill · riure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-056; homòleg: n8-056.
   - Etiquetes: ÓS · BEURE · AIGUA · CONILL · RIURE.
   - wordIds, en el mateix ordre: w-a06249642996 · w-a5ddba336d84 · w-00e8b2c10536 · w-51a7805e979b · w-8a560cbf66b0.
   - e1 (accio): agent=ÓS (w-a06249642996); action=BEURE (w-a5ddba336d84); patient=AIGUA (w-00e8b2c10536). Context: GOT (w-1bed9f18ebab).
   - e2 (estat): agent=CONILL (w-51a7805e979b); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ÓS a esquerra: Got transparent amb aigua visible inclinat suaument fins als llavis; una sola mà el sosté a distància natural de la boca. CONILL a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

157. **n8-157 · elefant · menjar · poma / gat · seure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-057; homòleg: n8-057.
   - Etiquetes: ELEFANT · MENJAR · POMA · GAT · SEURE.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-c248ebfe6f67 · w-809c680b5699 · w-11ff74d27c02 · w-045dc98b2849.
   - e1 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=GAT (w-11ff74d27c02); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ELEFANT a dreta: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. GAT a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

158. **n8-158 · gos · menjar · poma / cangur · dormir**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-058; homòleg: n8-058.
   - Etiquetes: GOS · MENJAR · POMA · CANGUR · DORMIR.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-c248ebfe6f67 · w-809c680b5699 · w-d5395d03acbf · w-2c4809267c13.
   - e1 (accio): agent=GOS (w-4761fde107a7); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=CANGUR (w-d5395d03acbf); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GOS a esquerra: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. CANGUR a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

159. **n8-159 · pinguí · menjar · poma / zebra · riure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-059; homòleg: n8-059.
   - Etiquetes: PINGUÍ · MENJAR · POMA · ZEBRA · RIURE.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-c248ebfe6f67 · w-809c680b5699 · w-0dc8fba9677d · w-8a560cbf66b0.
   - e1 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=MENJAR (w-c248ebfe6f67); patient=POMA (w-809c680b5699). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=ZEBRA (w-0dc8fba9677d); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. PINGUÍ a dreta: Poma sencera recognoscible amb un mos petit, acostada als llavis; sense una segona peça de fruita. ZEBRA a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

160. **n8-160 · girafa · regar · planta / mico · seure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-060; homòleg: n8-060.
   - Etiquetes: GIRAFA · REGAR · PLANTA · MICO · SEURE.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-00107994a0cd · w-03d524b232d7 · w-12a87560751b · w-045dc98b2849.
   - e1 (accio): agent=GIRAFA (w-e60f76be7b6c); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (estat): agent=MICO (w-12a87560751b); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GIRAFA a esquerra: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. MICO a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

161. **n8-161 · mico · regar · planta / ós · dormir**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-061; homòleg: n8-061.
   - Etiquetes: MICO · REGAR · PLANTA · ÓS · DORMIR.
   - wordIds, en el mateix ordre: w-12a87560751b · w-00107994a0cd · w-03d524b232d7 · w-a06249642996 · w-2c4809267c13.
   - e1 (accio): agent=MICO (w-12a87560751b); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (estat): agent=ÓS (w-a06249642996); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. MICO a dreta: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. ÓS a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

162. **n8-162 · conill · regar · planta / elefant · riure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-062; homòleg: n8-062.
   - Etiquetes: CONILL · REGAR · PLANTA · ELEFANT · RIURE.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-00107994a0cd · w-03d524b232d7 · w-b059d8ef0bc9 · w-8a560cbf66b0.
   - e1 (accio): agent=CONILL (w-51a7805e979b); action=REGAR (w-00107994a0cd); patient=PLANTA (w-03d524b232d7). Context: GOT (w-1bed9f18ebab).
   - e2 (estat): agent=ELEFANT (w-b059d8ef0bc9); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CONILL a esquerra: Got inclinat amb un raig curt que arriba a la terra del test, al costat del cos; planta completa i raig visibles. ELEFANT a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

163. **n8-163 · gat · pintar · caixa / gos · seure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-063; homòleg: n8-063.
   - Etiquetes: GAT · PINTAR · CAIXA · GOS · SEURE.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-b04a48827310 · w-696b7c739d30 · w-4761fde107a7 · w-045dc98b2849.
   - e1 (accio): agent=GAT (w-11ff74d27c02); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (estat): agent=GOS (w-4761fde107a7); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GAT a dreta: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. GOS a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

164. **n8-164 · cangur · pintar · caixa / pinguí · dormir**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-064; homòleg: n8-064.
   - Etiquetes: CANGUR · PINTAR · CAIXA · PINGUÍ · DORMIR.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-b04a48827310 · w-696b7c739d30 · w-5993b1ea57aa · w-2c4809267c13.
   - e1 (accio): agent=CANGUR (w-d5395d03acbf); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (estat): agent=PINGUÍ (w-5993b1ea57aa); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CANGUR a esquerra: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. PINGUÍ a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

165. **n8-165 · zebra · pintar · caixa / girafa · riure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-065; homòleg: n8-065.
   - Etiquetes: ZEBRA · PINTAR · CAIXA · GIRAFA · RIURE.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-b04a48827310 · w-696b7c739d30 · w-e60f76be7b6c · w-8a560cbf66b0.
   - e1 (accio): agent=ZEBRA (w-0dc8fba9677d); action=PINTAR (w-b04a48827310); patient=CAIXA (w-696b7c739d30). Context: PINZELL (w-33df96705776); TAULA (w-1544f4efec59).
   - e2 (estat): agent=GIRAFA (w-e60f76be7b6c); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ZEBRA a dreta: Pinzell en contacte amb una cara d’una caixa petita, deixant una franja fresca de pintura; caixa damunt una taula baixa pròxima. GIRAFA a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

166. **n8-166 · ós · netejar · plat / conill · seure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-066; homòleg: n8-066.
   - Etiquetes: ÓS · NETEJAR · PLAT · CONILL · SEURE.
   - wordIds, en el mateix ordre: w-a06249642996 · w-4e6be686e7c1 · w-55d250f4cf1e · w-51a7805e979b · w-045dc98b2849.
   - e1 (accio): agent=ÓS (w-a06249642996); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (estat): agent=CONILL (w-51a7805e979b); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ÓS a esquerra: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. CONILL a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

167. **n8-167 · elefant · netejar · plat / gat · dormir**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-067; homòleg: n8-067.
   - Etiquetes: ELEFANT · NETEJAR · PLAT · GAT · DORMIR.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-4e6be686e7c1 · w-55d250f4cf1e · w-11ff74d27c02 · w-2c4809267c13.
   - e1 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (estat): agent=GAT (w-11ff74d27c02); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ELEFANT a dreta: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. GAT a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

168. **n8-168 · gos · netejar · plat / cangur · riure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-068; homòleg: n8-068.
   - Etiquetes: GOS · NETEJAR · PLAT · CANGUR · RIURE.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-4e6be686e7c1 · w-55d250f4cf1e · w-d5395d03acbf · w-8a560cbf66b0.
   - e1 (accio): agent=GOS (w-4761fde107a7); action=NETEJAR (w-4e6be686e7c1); patient=PLAT (w-55d250f4cf1e). Context: ESPONJA (w-2d404e0d8979).
   - e2 (estat): agent=CANGUR (w-d5395d03acbf); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GOS a esquerra: Esponja porosa fregant una petita resta de menjar al plat sostingut davant del tronc; contacte i zona netejada visibles. CANGUR a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

169. **n8-169 · pinguí · assecar · cullera / zebra · seure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-069; homòleg: n8-069.
   - Etiquetes: PINGUÍ · ASSECAR · CULLERA · ZEBRA · SEURE.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-ae417aa563dd · w-9c9849fac1d3 · w-0dc8fba9677d · w-045dc98b2849.
   - e1 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (estat): agent=ZEBRA (w-0dc8fba9677d); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. PINGUÍ a dreta: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. ZEBRA a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

170. **n8-170 · girafa · assecar · cullera / mico · dormir**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-070; homòleg: n8-070.
   - Etiquetes: GIRAFA · ASSECAR · CULLERA · MICO · DORMIR.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-ae417aa563dd · w-9c9849fac1d3 · w-12a87560751b · w-2c4809267c13.
   - e1 (accio): agent=GIRAFA (w-e60f76be7b6c); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (estat): agent=MICO (w-12a87560751b); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GIRAFA a esquerra: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. MICO a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

171. **n8-171 · mico · assecar · cullera / ós · riure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-071; homòleg: n8-071.
   - Etiquetes: MICO · ASSECAR · CULLERA · ÓS · RIURE.
   - wordIds, en el mateix ordre: w-12a87560751b · w-ae417aa563dd · w-9c9849fac1d3 · w-a06249642996 · w-8a560cbf66b0.
   - e1 (accio): agent=MICO (w-12a87560751b); action=ASSECAR (w-ae417aa563dd); patient=CULLERA (w-9c9849fac1d3). Context: TOVALLOLA (w-045fa0b1ae9d).
   - e2 (estat): agent=ÓS (w-a06249642996); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. MICO a dreta: Tovallola de ris en contacte amb una cullera de servir humida; gotes visibles, cavitat i mànec descoberts, mans prop del cos. ÓS a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

172. **n8-172 · conill · pentinar · nina / elefant · seure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-072; homòleg: n8-072.
   - Etiquetes: CONILL · PENTINAR · NINA · ELEFANT · SEURE.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-83c248429f07 · w-db89958a3c63 · w-b059d8ef0bc9 · w-045dc98b2849.
   - e1 (accio): agent=CONILL (w-51a7805e979b); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (estat): agent=ELEFANT (w-b059d8ef0bc9); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CONILL a esquerra: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. ELEFANT a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

173. **n8-173 · gat · pentinar · nina / gos · dormir**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-073; homòleg: n8-073.
   - Etiquetes: GAT · PENTINAR · NINA · GOS · DORMIR.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-83c248429f07 · w-db89958a3c63 · w-4761fde107a7 · w-2c4809267c13.
   - e1 (accio): agent=GAT (w-11ff74d27c02); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (estat): agent=GOS (w-4761fde107a7); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GAT a dreta: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. GOS a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

174. **n8-174 · cangur · pentinar · nina / pinguí · riure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-074; homòleg: n8-074.
   - Etiquetes: CANGUR · PENTINAR · NINA · PINGUÍ · RIURE.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-83c248429f07 · w-db89958a3c63 · w-5993b1ea57aa · w-8a560cbf66b0.
   - e1 (accio): agent=CANGUR (w-d5395d03acbf); action=PENTINAR (w-83c248429f07); patient=NINA (w-db89958a3c63). Context: PINTA (w-b91f3bd4d776); TAULA (w-1544f4efec59).
   - e2 (estat): agent=PINGUÍ (w-5993b1ea57aa); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. CANGUR a esquerra: Pinta passant entre els cabells llargs d’una nina completa recolzada en una taula baixa pròxima; no pentina el segon participant. PINGUÍ a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

175. **n8-175 · zebra · tallar · plastilina / girafa · seure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-075; homòleg: n8-075.
   - Etiquetes: ZEBRA · TALLAR · PLASTILINA · GIRAFA · SEURE.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-7a101d803c16 · w-0606be9fcf92 · w-e60f76be7b6c · w-045dc98b2849.
   - e1 (accio): agent=ZEBRA (w-0dc8fba9677d); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (estat): agent=GIRAFA (w-e60f76be7b6c); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ZEBRA a dreta: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. GIRAFA a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

176. **n8-176 · ós · tallar · plastilina / conill · dormir**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-076; homòleg: n8-076.
   - Etiquetes: ÓS · TALLAR · PLASTILINA · CONILL · DORMIR.
   - wordIds, en el mateix ordre: w-a06249642996 · w-7a101d803c16 · w-0606be9fcf92 · w-51a7805e979b · w-2c4809267c13.
   - e1 (accio): agent=ÓS (w-a06249642996); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (estat): agent=CONILL (w-51a7805e979b); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ÓS a esquerra: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. CONILL a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

177. **n8-177 · elefant · tallar · plastilina / gat · riure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-077; homòleg: n8-077.
   - Etiquetes: ELEFANT · TALLAR · PLASTILINA · GAT · RIURE.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-7a101d803c16 · w-0606be9fcf92 · w-11ff74d27c02 · w-8a560cbf66b0.
   - e1 (accio): agent=ELEFANT (w-b059d8ef0bc9); action=TALLAR (w-7a101d803c16); patient=PLASTILINA (w-0606be9fcf92). Context: GANIVET (w-49819bf5e906); TAULA (w-1544f4efec59).
   - e2 (estat): agent=GAT (w-11ff74d27c02); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ELEFANT a dreta: Ganivet de taula de punta arrodonida en contacte amb una tira de plastilina sobre una taula baixa, amb una separació visible; mà de suport fora del tall. GAT a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

178. **n8-178 · gos · estripar · paper / cangur · seure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-078; homòleg: n8-078.
   - Etiquetes: GOS · ESTRIPAR · PAPER · CANGUR · SEURE.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-d5395d03acbf · w-045dc98b2849.
   - e1 (accio): agent=GOS (w-4761fde107a7); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=CANGUR (w-d5395d03acbf); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GOS a esquerra: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. CANGUR a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

179. **n8-179 · pinguí · estripar · paper / zebra · dormir**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-079; homòleg: n8-079.
   - Etiquetes: PINGUÍ · ESTRIPAR · PAPER · ZEBRA · DORMIR.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-0dc8fba9677d · w-2c4809267c13.
   - e1 (accio): agent=PINGUÍ (w-5993b1ea57aa); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=ZEBRA (w-0dc8fba9677d); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. PINGUÍ a dreta: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. ZEBRA a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

180. **n8-180 · girafa · estripar · paper / mico · riure**
   - Grup/tipus: insolita / drawing; estructura: accio-estat; família: n8-f-080; homòleg: n8-080.
   - Etiquetes: GIRAFA · ESTRIPAR · PAPER · MICO · RIURE.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-d6ff14eb6fb5 · w-cd5c60f0d076 · w-12a87560751b · w-8a560cbf66b0.
   - e1 (accio): agent=GIRAFA (w-e60f76be7b6c); action=ESTRIPAR (w-d6ff14eb6fb5); patient=PAPER (w-cd5c60f0d076). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=MICO (w-12a87560751b); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GIRAFA a esquerra: Dues mans separen un full mut: estrip central visible amb les dues parts encara unides per un extrem; sense tisores ni fragments addicionals. MICO a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

181. **n8-181 · mico · seure / ós · dormir**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-081; homòleg: n8-081.
   - Etiquetes: MICO · SEURE · ÓS · DORMIR.
   - wordIds, en el mateix ordre: w-12a87560751b · w-045dc98b2849 · w-a06249642996 · w-2c4809267c13.
   - e1 (estat): agent=MICO (w-12a87560751b); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=ÓS (w-a06249642996); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. MICO a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. ÓS a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

182. **n8-182 · gat · seure / gos · dormir**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-082; homòleg: n8-082.
   - Etiquetes: GAT · SEURE · GOS · DORMIR.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-045dc98b2849 · w-4761fde107a7 · w-2c4809267c13.
   - e1 (estat): agent=GAT (w-11ff74d27c02); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=GOS (w-4761fde107a7); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GAT a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. GOS a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

183. **n8-183 · zebra · seure / girafa · dormir**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-083; homòleg: n8-083.
   - Etiquetes: ZEBRA · SEURE · GIRAFA · DORMIR.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-045dc98b2849 · w-e60f76be7b6c · w-2c4809267c13.
   - e1 (estat): agent=ZEBRA (w-0dc8fba9677d); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=GIRAFA (w-e60f76be7b6c); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ZEBRA a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. GIRAFA a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

184. **n8-184 · elefant · seure / gat · dormir**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-084; homòleg: n8-084.
   - Etiquetes: ELEFANT · SEURE · GAT · DORMIR.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-045dc98b2849 · w-11ff74d27c02 · w-2c4809267c13.
   - e1 (estat): agent=ELEFANT (w-b059d8ef0bc9); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=GAT (w-11ff74d27c02); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ELEFANT a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. GAT a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

185. **n8-185 · zebra · seure / girafa · riure**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-085; homòleg: n8-085.
   - Etiquetes: ZEBRA · SEURE · GIRAFA · RIURE.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-045dc98b2849 · w-e60f76be7b6c · w-8a560cbf66b0.
   - e1 (estat): agent=ZEBRA (w-0dc8fba9677d); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=GIRAFA (w-e60f76be7b6c); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ZEBRA a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. GIRAFA a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

186. **n8-186 · elefant · seure / gat · riure**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-086; homòleg: n8-086.
   - Etiquetes: ELEFANT · SEURE · GAT · RIURE.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-045dc98b2849 · w-11ff74d27c02 · w-8a560cbf66b0.
   - e1 (estat): agent=ELEFANT (w-b059d8ef0bc9); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=GAT (w-11ff74d27c02); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ELEFANT a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. GAT a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

187. **n8-187 · pinguí · seure / zebra · riure**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-087; homòleg: n8-087.
   - Etiquetes: PINGUÍ · SEURE · ZEBRA · RIURE.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-045dc98b2849 · w-0dc8fba9677d · w-8a560cbf66b0.
   - e1 (estat): agent=PINGUÍ (w-5993b1ea57aa); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=ZEBRA (w-0dc8fba9677d); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. PINGUÍ a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. ZEBRA a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

188. **n8-188 · mico · seure / ós · riure**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-088; homòleg: n8-088.
   - Etiquetes: MICO · SEURE · ÓS · RIURE.
   - wordIds, en el mateix ordre: w-12a87560751b · w-045dc98b2849 · w-a06249642996 · w-8a560cbf66b0.
   - e1 (estat): agent=MICO (w-12a87560751b); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=ÓS (w-a06249642996); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. MICO a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. ÓS a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

189. **n8-189 · pinguí · seure / zebra · plorar**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-089; homòleg: n8-089.
   - Etiquetes: PINGUÍ · SEURE · ZEBRA · PLORAR.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-045dc98b2849 · w-0dc8fba9677d · w-9fbc08b69e53.
   - e1 (estat): agent=PINGUÍ (w-5993b1ea57aa); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=ZEBRA (w-0dc8fba9677d); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. PINGUÍ a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. ZEBRA a esquerra: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

190. **n8-190 · mico · seure / ós · plorar**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-090; homòleg: n8-090.
   - Etiquetes: MICO · SEURE · ÓS · PLORAR.
   - wordIds, en el mateix ordre: w-12a87560751b · w-045dc98b2849 · w-a06249642996 · w-9fbc08b69e53.
   - e1 (estat): agent=MICO (w-12a87560751b); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=ÓS (w-a06249642996); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. MICO a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. ÓS a dreta: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

191. **n8-191 · gat · seure / gos · plorar**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-091; homòleg: n8-091.
   - Etiquetes: GAT · SEURE · GOS · PLORAR.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-045dc98b2849 · w-4761fde107a7 · w-9fbc08b69e53.
   - e1 (estat): agent=GAT (w-11ff74d27c02); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=GOS (w-4761fde107a7); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GAT a dreta: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. GOS a esquerra: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

192. **n8-192 · zebra · seure / girafa · plorar**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-092; homòleg: n8-092.
   - Etiquetes: ZEBRA · SEURE · GIRAFA · PLORAR.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-045dc98b2849 · w-e60f76be7b6c · w-9fbc08b69e53.
   - e1 (estat): agent=ZEBRA (w-0dc8fba9677d); state=SEURE (w-045dc98b2849). Context: CADIRA (w-e1efe2c4e23d).
   - e2 (estat): agent=GIRAFA (w-e60f76be7b6c); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ZEBRA a esquerra: Posició asseguda quieta en una cadira: pelvis sostinguda pel seient, esquena dreta, peus recolzats i mans relaxades a les cuixes; ulls oberts i expressió neutra. GIRAFA a dreta: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

193. **n8-193 · gat · dormir / gos · riure**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-093; homòleg: n8-093.
   - Etiquetes: GAT · DORMIR · GOS · RIURE.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-2c4809267c13 · w-4761fde107a7 · w-8a560cbf66b0.
   - e1 (estat): agent=GAT (w-11ff74d27c02); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - e2 (estat): agent=GOS (w-4761fde107a7); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GAT a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. GOS a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

194. **n8-194 · zebra · dormir / girafa · riure**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-094; homòleg: n8-094.
   - Etiquetes: ZEBRA · DORMIR · GIRAFA · RIURE.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-2c4809267c13 · w-e60f76be7b6c · w-8a560cbf66b0.
   - e1 (estat): agent=ZEBRA (w-0dc8fba9677d); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - e2 (estat): agent=GIRAFA (w-e60f76be7b6c); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ZEBRA a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. GIRAFA a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

195. **n8-195 · elefant · dormir / gat · riure**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-095; homòleg: n8-095.
   - Etiquetes: ELEFANT · DORMIR · GAT · RIURE.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-2c4809267c13 · w-11ff74d27c02 · w-8a560cbf66b0.
   - e1 (estat): agent=ELEFANT (w-b059d8ef0bc9); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - e2 (estat): agent=GAT (w-11ff74d27c02); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ELEFANT a dreta: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. GAT a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

196. **n8-196 · pinguí · dormir / zebra · riure**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-096; homòleg: n8-096.
   - Etiquetes: PINGUÍ · DORMIR · ZEBRA · RIURE.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-2c4809267c13 · w-0dc8fba9677d · w-8a560cbf66b0.
   - e1 (estat): agent=PINGUÍ (w-5993b1ea57aa); state=DORMIR (w-2c4809267c13). Context: LLIT (w-5f7c1679605f); COIXÍ (w-44260b79b61e).
   - e2 (estat): agent=ZEBRA (w-0dc8fba9677d); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. PINGUÍ a esquerra: Cos estirat de costat sobre un llit baix complet, cap recolzat en un coixí, ulls tancats i postura relaxada; cos sense manta que el tapi, cap símbol de son. ZEBRA a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

197. **n8-197 · elefant · riure / gat · plorar**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-097; homòleg: n8-097.
   - Etiquetes: ELEFANT · RIURE · GAT · PLORAR.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-8a560cbf66b0 · w-11ff74d27c02 · w-9fbc08b69e53.
   - e1 (estat): agent=ELEFANT (w-b059d8ef0bc9); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=GAT (w-11ff74d27c02); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. ELEFANT a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. GAT a esquerra: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

198. **n8-198 · pinguí · riure / zebra · plorar**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-098; homòleg: n8-098.
   - Etiquetes: PINGUÍ · RIURE · ZEBRA · PLORAR.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-8a560cbf66b0 · w-0dc8fba9677d · w-9fbc08b69e53.
   - e1 (estat): agent=PINGUÍ (w-5993b1ea57aa); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=ZEBRA (w-0dc8fba9677d); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. PINGUÍ a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. ZEBRA a dreta: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

199. **n8-199 · mico · riure / ós · plorar**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-099; homòleg: n8-099.
   - Etiquetes: MICO · RIURE · ÓS · PLORAR.
   - wordIds, en el mateix ordre: w-12a87560751b · w-8a560cbf66b0 · w-a06249642996 · w-9fbc08b69e53.
   - e1 (estat): agent=MICO (w-12a87560751b); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=ÓS (w-a06249642996); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. MICO a dreta: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. ÓS a esquerra: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.

200. **n8-200 · gat · riure / gos · plorar**
   - Grup/tipus: insolita / drawing; estructura: estat-estat; família: n8-f-100; homòleg: n8-100.
   - Etiquetes: GAT · RIURE · GOS · PLORAR.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-8a560cbf66b0 · w-4761fde107a7 · w-9fbc08b69e53.
   - e1 (estat): agent=GAT (w-11ff74d27c02); state=RIURE (w-8a560cbf66b0). Context: cap suport addicional etiquetat.
   - e2 (estat): agent=GOS (w-4761fde107a7); state=PLORAR (w-9fbc08b69e53). Context: cap suport addicional etiquetat.
   - Relació: coexistència en un mateix instant; sense connector CACE, ordre temporal ni afirmació causal.
   - Visual: Dos participants en una mateixa escena contínua i en un únic instant. GAT a esquerra: Rostre prou gran amb somriure obert, galtes elevades i ulls lleument entretancats; cos estable, mans en repòs i sense llàgrimes ni símbols de so. GOS a dreta: Rostre prou gran amb llàgrimes clares sobre les galtes i comissures avall; postura estable, sense ferides, perill, gest d’agressió ni causa suggerida. Cadascun té el seu espai de treball a l’abast; cap contacte entre agents ni pacients intercanviats. Mateix terra i perspectiva, cap separador ni vinyeta. Dos animals antropomòrfics amables, amb cos sencer i espècie recognoscible; dibuix pla. Fons blanc, marges amplis, sense text ni marques. Exactament dues predicacions objectiu; no hi ha abans/després ni causa representada.
