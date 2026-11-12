# N7 · Precisió · Proposta per revisar

Estat: **només planificació i revisió**. Pendent d’aprovació; cap generació, importació, commit, push o publicació autoritzats.

Definició exacta del catàleg: **Distingir referents semblants.** Baseline local: 0.1.125, 3469 imatges i 861 entrades; HEAD a3b6ffbb11a1504ac9f31585eaa0faa4bd091cdc. No s’ha consultat ni modificat la publicació remota en aquesta planificació.

200 estímuls, una imatge futura per construcció: 100 fotografies habituals i 100 dibuixos plans insòlits. Cada grup conté 50 parelles inverses: 40 estímuls d’aspecte (16 color, 12 mida/longitud, 12 estampat), 30 d’estat (10 neteja, 10 humitat, 10 ple/buit) i 30 de posició (16 dins/fora, 14 sobre/sota). Les quotes són una proposta, no una prescripció del catàleg.

Cada escena mostra un agent i **dos exemplars del mateix tipus**, amb una sola diferència pertinent. L’agent actua només sobre el que satisfà el qualificador. El company de parella canvia la selecció: no són dues variants del mateix objectiu. En posició hi ha un únic suport i només TOCAR, per conservar la relació visible.

Per grup: 60 TOCAR, 16 AIXECAR, 14 AGAFAR i 10 PORTAR. TOCAR predomina intencionalment per conservar posició i estat mentre es discrimina el referent. Per a ús didàctic, barrejar els estímuls i separar els companys de parella; l’ordre del fitxer només facilita la revisió. Són 50 famílies amb homòlegs humans i animals, no 200 situacions independents.

Quatre etiquetes exactes: agent, acció, pacient i qualificador; cinc quan cal suport espacial. La forma de diccionari es conserva (p. ex. PETITA o MULLAT). El distractor i el seu qualificador tenen wordIds CACE existents en camps de context, però no s’afegeixen a les etiquetes de l’objectiu. Les preposicions de la prosa no creen entrades noves.

## Criteris i progressió

- **N2**: La propietat no apareix aïllada: cal seleccionar entre dos candidats presents i seguir una acció dirigida a un d’ells.
- **N4**: El pacient es restringeix amb una propietat o relació contrastiva; hi ha un distractor real de la mateixa classe.
- **N5**: La relació localitza quin dels dos pacients rep una acció. No basta mostrar un sol referent en relació amb un suport.
- **N6**: No s’afegeix instrument, destinatari ni un lloc funcional. L’objectiu és resoldre quin exemplar, amb el distractor dins la mateixa imatge.
- **N8**: Una sola acció en un instant; el distractor i el suport són estàtics. Sense vinyetes, abans/després ni esdeveniments paral·lels.

- Una sola futura imatge per estímul: fotografia sintètica habitual o dibuix pla insòlit, adequats per a ús escolar.
- Fons blanc, figures i objectes complets amb marges amplis. Dos candidats igualment grans al pla de la imatge i amb llegibilitat comparable, excepte el contrast intencional GRAN/PETITA.
- Cap text, xifra, marca, filigrana, fletxa, cercle de resposta ni ressaltat gràfic. Els llibres i papers, si apareixen com a suport, són muts.
- Un únic agent actua sobre un únic pacient; el distractor no rep cap contacte. La mirada sola no acredita la selecció.
- Conservar forma, color, mida, orientació i estat dels dos candidats excepte la propietat que es contrasta. Per als colors, el canvi cromàtic és deliberat; entre famílies canvien objectes, accions i agents.
- Alternar el costat del referent seleccionat entre estímuls i invertir-lo entre homòlegs habitual/insòlit. El costat no forma part de les etiquetes. No hi ha panells de resposta dins la imatge.
- Insòlit: animal real antropomòrfic fent una acció humana amable. Conservar anatomia recognoscible, sense joguines, disfresses ni perill.
- Roba i cossos humans diversos; no inferir parentius, professions o propietat legal. Cap contingut de marca ni anatomia exclosa.

Les exclusions individuals continuen vigents: emprar atributs o relacions dins una construcció segueix N2/N5 i no reobre variants de paraules individuals. No hi ha FER PIPI ni FER CACA ni cap entrada nova. Les fotografies són plausibles; el caràcter insòlit prové de l’agent animal fent l’acció humana. Els colors contrastius són intencionals; la diversitat del conjunt també depèn de classes d’objectes, accions, agents i tipus de precisió.

## Decisions de revisió

- **N7 interpretat com una frase més llarga**: Exigir dos exemplars simultanis de la mateixa classe i una selecció visible. Eliminar escenes amb un únic referent.
- **Distractor indexat com a resposta**: Separar les etiquetes de l’objectiu de les dades de context. Cap etiqueta negativa o connector inventat.
- **Color, textura o estat inferit**: Només colors saturats contrastats, estampats grans, terra visible per BRUT, gotes i zona humida per MULLAT i boca oberta per PLE/BUIT. No incloure gust, temperatura, rapidesa, valoració subjectiva ni propietat.
- **Mida confosa amb perspectiva**: Mateix pla i distància, proporció aproximada 2:1 per GRAN/PETITA i longitud 2:1 amb el mateix gruix per LLARG/CURT.
- **AGAFAR elimina la posició o el contingut**: En posició només TOCAR, sense moure l’objecte. En PLE/BUIT també TOCAR, recipients drets i oberts.
- **MULLAT confós amb brut o només canvi de color**: Afegir gotes i humitat local visible amb la resta igual. Si no es llegeix a mida petita, rebutjar i refer, sense inventar una entrada.
- **Parella d’imatges pràcticament repetida**: Cada parella és un contrast invers deliberat: mateixes propietats i acció sobre l’altre candidat; no és una variant duplicada del mateix estímul. Les parelles porten IDs i claus diferents.

## Acceptació de les futures imatges

- Dos candidats complets del mateix tipus; exactament un satisfà el qualificador etiquetat i exactament aquest rep el contacte.
- La propietat o relació es veu a mida de miniatura. En posició, el suport i els dos candidats han de quedar sense oclusions decisives.
- No acceptar canvi de color secundari, roba, escala, il·luminació o proximitat a l’agent que ofereixi una pista alternativa sistemàtica.
- Revisió visual individual i comparació de cada parella abans de qualsevol importació futura. Una proposta no valida imatges inexistents ni té validació clínica.
- No generar, importar, fer commit, push ni publicar fins a una nova instrucció explícita.

Comprovació reproduïble: node scripts/validate-n7-plan.cjs. Informe a production/n7-plan-validation.json. La comprovació estructural i la revisió dels briefs no acrediten qualitat perceptiva, comprensió clínica ni eficàcia psicomètrica. Cal revisar les 200 imatges i les 100 parelles quan hi hagi autorització de producció.

## Habituals · fotografia

1. **n7-001 · nena · agafar · pilota · vermell**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: NENA · AGAFAR · PILOTA · VERMELL.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-677819a0a32a · w-b7f578451973 · w-26a2697058f7.
   - Parella: n7-h-01; contrast invers: n7-002.
   - Context distractor: PILOTA (w-b7f578451973), BLAU (w-a78d9867b0c8).
   - Visual: NENA: dos exemplars de PILOTA, un VERMELL i l’altre BLAU. L’objectiu és PILOTA VERMELL; el distractor és PILOTA BLAU. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

2. **n7-002 · nena · agafar · pilota · blau**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: NENA · AGAFAR · PILOTA · BLAU.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-677819a0a32a · w-b7f578451973 · w-a78d9867b0c8.
   - Parella: n7-h-01; contrast invers: n7-001.
   - Context distractor: PILOTA (w-b7f578451973), VERMELL (w-26a2697058f7).
   - Visual: NENA: dos exemplars de PILOTA, un VERMELL i l’altre BLAU. L’objectiu és PILOTA BLAU; el distractor és PILOTA VERMELL. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

3. **n7-003 · nen · aixecar · got · groc**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: NEN · AIXECAR · GOT · GROC.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-e12d88415c80 · w-1bed9f18ebab · w-6b6fe6ec5a2e.
   - Parella: n7-h-02; contrast invers: n7-004.
   - Context distractor: GOT (w-1bed9f18ebab), VERD (w-5f5b9a1df897).
   - Visual: NEN: dos exemplars de GOT, un GROC i l’altre VERD. L’objectiu és GOT GROC; el distractor és GOT VERD. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

4. **n7-004 · nen · aixecar · got · verd**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: NEN · AIXECAR · GOT · VERD.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-e12d88415c80 · w-1bed9f18ebab · w-5f5b9a1df897.
   - Parella: n7-h-02; contrast invers: n7-003.
   - Context distractor: GOT (w-1bed9f18ebab), GROC (w-6b6fe6ec5a2e).
   - Visual: NEN: dos exemplars de GOT, un GROC i l’altre VERD. L’objectiu és GOT VERD; el distractor és GOT GROC. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

5. **n7-005 · noia · tocar · caixa · blau**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: NOIA · TOCAR · CAIXA · BLAU.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-696b7c739d30 · w-a78d9867b0c8.
   - Parella: n7-h-03; contrast invers: n7-006.
   - Context distractor: CAIXA (w-696b7c739d30), GROC (w-6b6fe6ec5a2e).
   - Visual: NOIA: dos exemplars de CAIXA, un BLAU i l’altre GROC. L’objectiu és CAIXA BLAU; el distractor és CAIXA GROC. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

6. **n7-006 · noia · tocar · caixa · groc**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: NOIA · TOCAR · CAIXA · GROC.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-696b7c739d30 · w-6b6fe6ec5a2e.
   - Parella: n7-h-03; contrast invers: n7-005.
   - Context distractor: CAIXA (w-696b7c739d30), BLAU (w-a78d9867b0c8).
   - Visual: NOIA: dos exemplars de CAIXA, un BLAU i l’altre GROC. L’objectiu és CAIXA GROC; el distractor és CAIXA BLAU. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

7. **n7-007 · noi · portar · galleda · vermell**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: NOI · PORTAR · GALLEDA · VERMELL.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-73b71e1ff757 · w-7f04619a8649 · w-26a2697058f7.
   - Parella: n7-h-04; contrast invers: n7-008.
   - Context distractor: GALLEDA (w-7f04619a8649), VERD (w-5f5b9a1df897).
   - Visual: NOI: dos exemplars de GALLEDA, un VERMELL i l’altre VERD. L’objectiu és GALLEDA VERMELL; el distractor és GALLEDA VERD. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

8. **n7-008 · noi · portar · galleda · verd**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: NOI · PORTAR · GALLEDA · VERD.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-73b71e1ff757 · w-7f04619a8649 · w-5f5b9a1df897.
   - Parella: n7-h-04; contrast invers: n7-007.
   - Context distractor: GALLEDA (w-7f04619a8649), VERMELL (w-26a2697058f7).
   - Visual: NOI: dos exemplars de GALLEDA, un VERMELL i l’altre VERD. L’objectiu és GALLEDA VERD; el distractor és GALLEDA VERMELL. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

9. **n7-009 · dona · agafar · llapis · blau**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: DONA · AGAFAR · LLAPIS · BLAU.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-677819a0a32a · w-1775aa96869e · w-a78d9867b0c8.
   - Parella: n7-h-05; contrast invers: n7-010.
   - Context distractor: LLAPIS (w-1775aa96869e), GROC (w-6b6fe6ec5a2e).
   - Visual: DONA: dos exemplars de LLAPIS, un BLAU i l’altre GROC. L’objectiu és LLAPIS BLAU; el distractor és LLAPIS GROC. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

10. **n7-010 · dona · agafar · llapis · groc**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: DONA · AGAFAR · LLAPIS · GROC.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-677819a0a32a · w-1775aa96869e · w-6b6fe6ec5a2e.
   - Parella: n7-h-05; contrast invers: n7-009.
   - Context distractor: LLAPIS (w-1775aa96869e), BLAU (w-a78d9867b0c8).
   - Visual: DONA: dos exemplars de LLAPIS, un BLAU i l’altre GROC. L’objectiu és LLAPIS GROC; el distractor és LLAPIS BLAU. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

11. **n7-011 · home · aixecar · samarreta · vermell**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: HOME · AIXECAR · SAMARRETA · VERMELL.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-e12d88415c80 · w-0702f52b3b74 · w-26a2697058f7.
   - Parella: n7-h-06; contrast invers: n7-012.
   - Context distractor: SAMARRETA (w-0702f52b3b74), BLAU (w-a78d9867b0c8).
   - Visual: HOME: dos exemplars de SAMARRETA, un VERMELL i l’altre BLAU. L’objectiu és SAMARRETA VERMELL; el distractor és SAMARRETA BLAU. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

12. **n7-012 · home · aixecar · samarreta · blau**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: HOME · AIXECAR · SAMARRETA · BLAU.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-e12d88415c80 · w-0702f52b3b74 · w-a78d9867b0c8.
   - Parella: n7-h-06; contrast invers: n7-011.
   - Context distractor: SAMARRETA (w-0702f52b3b74), VERMELL (w-26a2697058f7).
   - Visual: HOME: dos exemplars de SAMARRETA, un VERMELL i l’altre BLAU. L’objectiu és SAMARRETA BLAU; el distractor és SAMARRETA VERMELL. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

13. **n7-013 · nena · portar · coixí · groc**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: NENA · PORTAR · COIXÍ · GROC.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-73b71e1ff757 · w-44260b79b61e · w-6b6fe6ec5a2e.
   - Parella: n7-h-07; contrast invers: n7-014.
   - Context distractor: COIXÍ (w-44260b79b61e), LILA (w-4776cd4c2990).
   - Visual: NENA: dos exemplars de COIXÍ, un GROC i l’altre LILA. L’objectiu és COIXÍ GROC; el distractor és COIXÍ LILA. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

14. **n7-014 · nena · portar · coixí · lila**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: NENA · PORTAR · COIXÍ · LILA.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-73b71e1ff757 · w-44260b79b61e · w-4776cd4c2990.
   - Parella: n7-h-07; contrast invers: n7-013.
   - Context distractor: COIXÍ (w-44260b79b61e), GROC (w-6b6fe6ec5a2e).
   - Visual: NENA: dos exemplars de COIXÍ, un GROC i l’altre LILA. L’objectiu és COIXÍ LILA; el distractor és COIXÍ GROC. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

15. **n7-015 · nen · tocar · pala · verd**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: NEN · TOCAR · PALA · VERD.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-072ecc01e120 · w-208167fa638f · w-5f5b9a1df897.
   - Parella: n7-h-08; contrast invers: n7-016.
   - Context distractor: PALA (w-208167fa638f), LILA (w-4776cd4c2990).
   - Visual: NEN: dos exemplars de PALA, un VERD i l’altre LILA. L’objectiu és PALA VERD; el distractor és PALA LILA. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

16. **n7-016 · nen · tocar · pala · lila**
   - Grup/tipus: habitual / photo; precisió: aspecte / color.
   - Etiquetes: NEN · TOCAR · PALA · LILA.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-072ecc01e120 · w-208167fa638f · w-4776cd4c2990.
   - Parella: n7-h-08; contrast invers: n7-015.
   - Context distractor: PALA (w-208167fa638f), VERD (w-5f5b9a1df897).
   - Visual: NEN: dos exemplars de PALA, un VERD i l’altre LILA. L’objectiu és PALA LILA; el distractor és PALA VERD. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

17. **n7-017 · noia · tocar · pilota · gran**
   - Grup/tipus: habitual / photo; precisió: aspecte / mida.
   - Etiquetes: NOIA · TOCAR · PILOTA · GRAN.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-b7f578451973 · w-461bd834b14a.
   - Parella: n7-h-09; contrast invers: n7-018.
   - Context distractor: PILOTA (w-b7f578451973), PETITA (w-12c5f9c8621a).
   - Visual: NOIA: dos exemplars de PILOTA, un GRAN i l’altre PETITA. L’objectiu és PILOTA GRAN; el distractor és PILOTA PETITA. Exemplars del mateix model, mateix pla i distància; un té el doble de mida lineal, sense perspectiva forçada. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

18. **n7-018 · noia · tocar · pilota · petita**
   - Grup/tipus: habitual / photo; precisió: aspecte / mida.
   - Etiquetes: NOIA · TOCAR · PILOTA · PETITA.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-b7f578451973 · w-12c5f9c8621a.
   - Parella: n7-h-09; contrast invers: n7-017.
   - Context distractor: PILOTA (w-b7f578451973), GRAN (w-461bd834b14a).
   - Visual: NOIA: dos exemplars de PILOTA, un GRAN i l’altre PETITA. L’objectiu és PILOTA PETITA; el distractor és PILOTA GRAN. Exemplars del mateix model, mateix pla i distància; un té el doble de mida lineal, sense perspectiva forçada. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

19. **n7-019 · noi · agafar · caixa · gran**
   - Grup/tipus: habitual / photo; precisió: aspecte / mida.
   - Etiquetes: NOI · AGAFAR · CAIXA · GRAN.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-677819a0a32a · w-696b7c739d30 · w-461bd834b14a.
   - Parella: n7-h-10; contrast invers: n7-020.
   - Context distractor: CAIXA (w-696b7c739d30), PETITA (w-12c5f9c8621a).
   - Visual: NOI: dos exemplars de CAIXA, un GRAN i l’altre PETITA. L’objectiu és CAIXA GRAN; el distractor és CAIXA PETITA. Exemplars del mateix model, mateix pla i distància; un té el doble de mida lineal, sense perspectiva forçada. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

20. **n7-020 · noi · agafar · caixa · petita**
   - Grup/tipus: habitual / photo; precisió: aspecte / mida.
   - Etiquetes: NOI · AGAFAR · CAIXA · PETITA.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-677819a0a32a · w-696b7c739d30 · w-12c5f9c8621a.
   - Parella: n7-h-10; contrast invers: n7-019.
   - Context distractor: CAIXA (w-696b7c739d30), GRAN (w-461bd834b14a).
   - Visual: NOI: dos exemplars de CAIXA, un GRAN i l’altre PETITA. L’objectiu és CAIXA PETITA; el distractor és CAIXA GRAN. Exemplars del mateix model, mateix pla i distància; un té el doble de mida lineal, sense perspectiva forçada. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

21. **n7-021 · dona · aixecar · galleda · gran**
   - Grup/tipus: habitual / photo; precisió: aspecte / mida.
   - Etiquetes: DONA · AIXECAR · GALLEDA · GRAN.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-e12d88415c80 · w-7f04619a8649 · w-461bd834b14a.
   - Parella: n7-h-11; contrast invers: n7-022.
   - Context distractor: GALLEDA (w-7f04619a8649), PETITA (w-12c5f9c8621a).
   - Visual: DONA: dos exemplars de GALLEDA, un GRAN i l’altre PETITA. L’objectiu és GALLEDA GRAN; el distractor és GALLEDA PETITA. Exemplars del mateix model, mateix pla i distància; un té el doble de mida lineal, sense perspectiva forçada. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

22. **n7-022 · dona · aixecar · galleda · petita**
   - Grup/tipus: habitual / photo; precisió: aspecte / mida.
   - Etiquetes: DONA · AIXECAR · GALLEDA · PETITA.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-e12d88415c80 · w-7f04619a8649 · w-12c5f9c8621a.
   - Parella: n7-h-11; contrast invers: n7-021.
   - Context distractor: GALLEDA (w-7f04619a8649), GRAN (w-461bd834b14a).
   - Visual: DONA: dos exemplars de GALLEDA, un GRAN i l’altre PETITA. L’objectiu és GALLEDA PETITA; el distractor és GALLEDA GRAN. Exemplars del mateix model, mateix pla i distància; un té el doble de mida lineal, sense perspectiva forçada. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

23. **n7-023 · home · tocar · llapis · llarg**
   - Grup/tipus: habitual / photo; precisió: aspecte / mida.
   - Etiquetes: HOME · TOCAR · LLAPIS · LLARG.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-072ecc01e120 · w-1775aa96869e · w-8c01add53f6c.
   - Parella: n7-h-12; contrast invers: n7-024.
   - Context distractor: LLAPIS (w-1775aa96869e), CURT (w-617a2c98adb5).
   - Visual: HOME: dos exemplars de LLAPIS, un LLARG i l’altre CURT. L’objectiu és LLAPIS LLARG; el distractor és LLAPIS CURT. Exemplars rectes i estesos, igual gruix i amplada, però un té el doble de longitud; extrems visibles. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

24. **n7-024 · home · tocar · llapis · curt**
   - Grup/tipus: habitual / photo; precisió: aspecte / mida.
   - Etiquetes: HOME · TOCAR · LLAPIS · CURT.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-072ecc01e120 · w-1775aa96869e · w-617a2c98adb5.
   - Parella: n7-h-12; contrast invers: n7-023.
   - Context distractor: LLAPIS (w-1775aa96869e), LLARG (w-8c01add53f6c).
   - Visual: HOME: dos exemplars de LLAPIS, un LLARG i l’altre CURT. L’objectiu és LLAPIS CURT; el distractor és LLAPIS LLARG. Exemplars rectes i estesos, igual gruix i amplada, però un té el doble de longitud; extrems visibles. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

25. **n7-025 · nena · aixecar · mocador · llarg**
   - Grup/tipus: habitual / photo; precisió: aspecte / mida.
   - Etiquetes: NENA · AIXECAR · MOCADOR · LLARG.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-e12d88415c80 · w-35e3a6c8a7fd · w-8c01add53f6c.
   - Parella: n7-h-13; contrast invers: n7-026.
   - Context distractor: MOCADOR (w-35e3a6c8a7fd), CURT (w-617a2c98adb5).
   - Visual: NENA: dos exemplars de MOCADOR, un LLARG i l’altre CURT. L’objectiu és MOCADOR LLARG; el distractor és MOCADOR CURT. Exemplars rectes i estesos, igual gruix i amplada, però un té el doble de longitud; extrems visibles. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

26. **n7-026 · nena · aixecar · mocador · curt**
   - Grup/tipus: habitual / photo; precisió: aspecte / mida.
   - Etiquetes: NENA · AIXECAR · MOCADOR · CURT.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-e12d88415c80 · w-35e3a6c8a7fd · w-617a2c98adb5.
   - Parella: n7-h-13; contrast invers: n7-025.
   - Context distractor: MOCADOR (w-35e3a6c8a7fd), LLARG (w-8c01add53f6c).
   - Visual: NENA: dos exemplars de MOCADOR, un LLARG i l’altre CURT. L’objectiu és MOCADOR CURT; el distractor és MOCADOR LLARG. Exemplars rectes i estesos, igual gruix i amplada, però un té el doble de longitud; extrems visibles. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

27. **n7-027 · nen · agafar · pal · llarg**
   - Grup/tipus: habitual / photo; precisió: aspecte / mida.
   - Etiquetes: NEN · AGAFAR · PAL · LLARG.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-677819a0a32a · w-c8538c4482a2 · w-8c01add53f6c.
   - Parella: n7-h-14; contrast invers: n7-028.
   - Context distractor: PAL (w-c8538c4482a2), CURT (w-617a2c98adb5).
   - Visual: NEN: dos exemplars de PAL, un LLARG i l’altre CURT. L’objectiu és PAL LLARG; el distractor és PAL CURT. Exemplars rectes i estesos, igual gruix i amplada, però un té el doble de longitud; extrems visibles. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

28. **n7-028 · nen · agafar · pal · curt**
   - Grup/tipus: habitual / photo; precisió: aspecte / mida.
   - Etiquetes: NEN · AGAFAR · PAL · CURT.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-677819a0a32a · w-c8538c4482a2 · w-617a2c98adb5.
   - Parella: n7-h-14; contrast invers: n7-027.
   - Context distractor: PAL (w-c8538c4482a2), LLARG (w-8c01add53f6c).
   - Visual: NEN: dos exemplars de PAL, un LLARG i l’altre CURT. L’objectiu és PAL CURT; el distractor és PAL LLARG. Exemplars rectes i estesos, igual gruix i amplada, però un té el doble de longitud; extrems visibles. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

29. **n7-029 · noia · tocar · samarreta · ratlles**
   - Grup/tipus: habitual / photo; precisió: aspecte / estampat.
   - Etiquetes: NOIA · TOCAR · SAMARRETA · RATLLES.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-0702f52b3b74 · w-19a396681127.
   - Parella: n7-h-15; contrast invers: n7-030.
   - Context distractor: SAMARRETA (w-0702f52b3b74), TOPOS (w-69c93e868621).
   - Visual: NOIA: dos exemplars de SAMARRETA, un RATLLES i l’altre TOPOS. L’objectiu és SAMARRETA RATLLES; el distractor és SAMARRETA TOPOS. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

30. **n7-030 · noia · tocar · samarreta · topos**
   - Grup/tipus: habitual / photo; precisió: aspecte / estampat.
   - Etiquetes: NOIA · TOCAR · SAMARRETA · TOPOS.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-0702f52b3b74 · w-69c93e868621.
   - Parella: n7-h-15; contrast invers: n7-029.
   - Context distractor: SAMARRETA (w-0702f52b3b74), RATLLES (w-19a396681127).
   - Visual: NOIA: dos exemplars de SAMARRETA, un RATLLES i l’altre TOPOS. L’objectiu és SAMARRETA TOPOS; el distractor és SAMARRETA RATLLES. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

31. **n7-031 · noi · agafar · bufanda · ratlles**
   - Grup/tipus: habitual / photo; precisió: aspecte / estampat.
   - Etiquetes: NOI · AGAFAR · BUFANDA · RATLLES.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-677819a0a32a · w-0b4612bc4b9f · w-19a396681127.
   - Parella: n7-h-16; contrast invers: n7-032.
   - Context distractor: BUFANDA (w-0b4612bc4b9f), TOPOS (w-69c93e868621).
   - Visual: NOI: dos exemplars de BUFANDA, un RATLLES i l’altre TOPOS. L’objectiu és BUFANDA RATLLES; el distractor és BUFANDA TOPOS. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

32. **n7-032 · noi · agafar · bufanda · topos**
   - Grup/tipus: habitual / photo; precisió: aspecte / estampat.
   - Etiquetes: NOI · AGAFAR · BUFANDA · TOPOS.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-677819a0a32a · w-0b4612bc4b9f · w-69c93e868621.
   - Parella: n7-h-16; contrast invers: n7-031.
   - Context distractor: BUFANDA (w-0b4612bc4b9f), RATLLES (w-19a396681127).
   - Visual: NOI: dos exemplars de BUFANDA, un RATLLES i l’altre TOPOS. L’objectiu és BUFANDA TOPOS; el distractor és BUFANDA RATLLES. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

33. **n7-033 · dona · aixecar · tassa · ratlles**
   - Grup/tipus: habitual / photo; precisió: aspecte / estampat.
   - Etiquetes: DONA · AIXECAR · TASSA · RATLLES.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-e12d88415c80 · w-adecb8403118 · w-19a396681127.
   - Parella: n7-h-17; contrast invers: n7-034.
   - Context distractor: TASSA (w-adecb8403118), TOPOS (w-69c93e868621).
   - Visual: DONA: dos exemplars de TASSA, un RATLLES i l’altre TOPOS. L’objectiu és TASSA RATLLES; el distractor és TASSA TOPOS. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

34. **n7-034 · dona · aixecar · tassa · topos**
   - Grup/tipus: habitual / photo; precisió: aspecte / estampat.
   - Etiquetes: DONA · AIXECAR · TASSA · TOPOS.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-e12d88415c80 · w-adecb8403118 · w-69c93e868621.
   - Parella: n7-h-17; contrast invers: n7-033.
   - Context distractor: TASSA (w-adecb8403118), RATLLES (w-19a396681127).
   - Visual: DONA: dos exemplars de TASSA, un RATLLES i l’altre TOPOS. L’objectiu és TASSA TOPOS; el distractor és TASSA RATLLES. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

35. **n7-035 · home · portar · bossa · ratlles**
   - Grup/tipus: habitual / photo; precisió: aspecte / estampat.
   - Etiquetes: HOME · PORTAR · BOSSA · RATLLES.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-73b71e1ff757 · w-7db8d682fed4 · w-19a396681127.
   - Parella: n7-h-18; contrast invers: n7-036.
   - Context distractor: BOSSA (w-7db8d682fed4), TOPOS (w-69c93e868621).
   - Visual: HOME: dos exemplars de BOSSA, un RATLLES i l’altre TOPOS. L’objectiu és BOSSA RATLLES; el distractor és BOSSA TOPOS. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

36. **n7-036 · home · portar · bossa · topos**
   - Grup/tipus: habitual / photo; precisió: aspecte / estampat.
   - Etiquetes: HOME · PORTAR · BOSSA · TOPOS.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-73b71e1ff757 · w-7db8d682fed4 · w-69c93e868621.
   - Parella: n7-h-18; contrast invers: n7-035.
   - Context distractor: BOSSA (w-7db8d682fed4), RATLLES (w-19a396681127).
   - Visual: HOME: dos exemplars de BOSSA, un RATLLES i l’altre TOPOS. L’objectiu és BOSSA TOPOS; el distractor és BOSSA RATLLES. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

37. **n7-037 · nena · tocar · coixí · ratlles**
   - Grup/tipus: habitual / photo; precisió: aspecte / estampat.
   - Etiquetes: NENA · TOCAR · COIXÍ · RATLLES.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-072ecc01e120 · w-44260b79b61e · w-19a396681127.
   - Parella: n7-h-19; contrast invers: n7-038.
   - Context distractor: COIXÍ (w-44260b79b61e), TOPOS (w-69c93e868621).
   - Visual: NENA: dos exemplars de COIXÍ, un RATLLES i l’altre TOPOS. L’objectiu és COIXÍ RATLLES; el distractor és COIXÍ TOPOS. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

38. **n7-038 · nena · tocar · coixí · topos**
   - Grup/tipus: habitual / photo; precisió: aspecte / estampat.
   - Etiquetes: NENA · TOCAR · COIXÍ · TOPOS.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-072ecc01e120 · w-44260b79b61e · w-69c93e868621.
   - Parella: n7-h-19; contrast invers: n7-037.
   - Context distractor: COIXÍ (w-44260b79b61e), RATLLES (w-19a396681127).
   - Visual: NENA: dos exemplars de COIXÍ, un RATLLES i l’altre TOPOS. L’objectiu és COIXÍ TOPOS; el distractor és COIXÍ RATLLES. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

39. **n7-039 · nen · aixecar · pilota · ratlles**
   - Grup/tipus: habitual / photo; precisió: aspecte / estampat.
   - Etiquetes: NEN · AIXECAR · PILOTA · RATLLES.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-e12d88415c80 · w-b7f578451973 · w-19a396681127.
   - Parella: n7-h-20; contrast invers: n7-040.
   - Context distractor: PILOTA (w-b7f578451973), TOPOS (w-69c93e868621).
   - Visual: NEN: dos exemplars de PILOTA, un RATLLES i l’altre TOPOS. L’objectiu és PILOTA RATLLES; el distractor és PILOTA TOPOS. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

40. **n7-040 · nen · aixecar · pilota · topos**
   - Grup/tipus: habitual / photo; precisió: aspecte / estampat.
   - Etiquetes: NEN · AIXECAR · PILOTA · TOPOS.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-e12d88415c80 · w-b7f578451973 · w-69c93e868621.
   - Parella: n7-h-20; contrast invers: n7-039.
   - Context distractor: PILOTA (w-b7f578451973), RATLLES (w-19a396681127).
   - Visual: NEN: dos exemplars de PILOTA, un RATLLES i l’altre TOPOS. L’objectiu és PILOTA TOPOS; el distractor és PILOTA RATLLES. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

41. **n7-041 · noia · agafar · plat · net**
   - Grup/tipus: habitual / photo; precisió: estat / neteja.
   - Etiquetes: NOIA · AGAFAR · PLAT · NET.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-677819a0a32a · w-55d250f4cf1e · w-8cc4542c0125.
   - Parella: n7-h-21; contrast invers: n7-042.
   - Context distractor: PLAT (w-55d250f4cf1e), BRUT (w-e8c7f0581229).
   - Visual: NOIA: dos exemplars de PLAT, un NET i l’altre BRUT. L’objectiu és PLAT NET; el distractor és PLAT BRUT. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

42. **n7-042 · noia · agafar · plat · brut**
   - Grup/tipus: habitual / photo; precisió: estat / neteja.
   - Etiquetes: NOIA · AGAFAR · PLAT · BRUT.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-677819a0a32a · w-55d250f4cf1e · w-e8c7f0581229.
   - Parella: n7-h-21; contrast invers: n7-041.
   - Context distractor: PLAT (w-55d250f4cf1e), NET (w-8cc4542c0125).
   - Visual: NOIA: dos exemplars de PLAT, un NET i l’altre BRUT. L’objectiu és PLAT BRUT; el distractor és PLAT NET. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

43. **n7-043 · noi · tocar · galleda · net**
   - Grup/tipus: habitual / photo; precisió: estat / neteja.
   - Etiquetes: NOI · TOCAR · GALLEDA · NET.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-072ecc01e120 · w-7f04619a8649 · w-8cc4542c0125.
   - Parella: n7-h-22; contrast invers: n7-044.
   - Context distractor: GALLEDA (w-7f04619a8649), BRUT (w-e8c7f0581229).
   - Visual: NOI: dos exemplars de GALLEDA, un NET i l’altre BRUT. L’objectiu és GALLEDA NET; el distractor és GALLEDA BRUT. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

44. **n7-044 · noi · tocar · galleda · brut**
   - Grup/tipus: habitual / photo; precisió: estat / neteja.
   - Etiquetes: NOI · TOCAR · GALLEDA · BRUT.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-072ecc01e120 · w-7f04619a8649 · w-e8c7f0581229.
   - Parella: n7-h-22; contrast invers: n7-043.
   - Context distractor: GALLEDA (w-7f04619a8649), NET (w-8cc4542c0125).
   - Visual: NOI: dos exemplars de GALLEDA, un NET i l’altre BRUT. L’objectiu és GALLEDA BRUT; el distractor és GALLEDA NET. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

45. **n7-045 · dona · aixecar · sabates · net**
   - Grup/tipus: habitual / photo; precisió: estat / neteja.
   - Etiquetes: DONA · AIXECAR · SABATES · NET.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-e12d88415c80 · w-6e2a67944770 · w-8cc4542c0125.
   - Parella: n7-h-23; contrast invers: n7-046.
   - Context distractor: SABATES (w-6e2a67944770), BRUT (w-e8c7f0581229).
   - Visual: DONA: dos exemplars de SABATES, un NET i l’altre BRUT. L’objectiu és SABATES NET; el distractor és SABATES BRUT. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

46. **n7-046 · dona · aixecar · sabates · brut**
   - Grup/tipus: habitual / photo; precisió: estat / neteja.
   - Etiquetes: DONA · AIXECAR · SABATES · BRUT.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-e12d88415c80 · w-6e2a67944770 · w-e8c7f0581229.
   - Parella: n7-h-23; contrast invers: n7-045.
   - Context distractor: SABATES (w-6e2a67944770), NET (w-8cc4542c0125).
   - Visual: DONA: dos exemplars de SABATES, un NET i l’altre BRUT. L’objectiu és SABATES BRUT; el distractor és SABATES NET. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

47. **n7-047 · home · portar · pala · net**
   - Grup/tipus: habitual / photo; precisió: estat / neteja.
   - Etiquetes: HOME · PORTAR · PALA · NET.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-73b71e1ff757 · w-208167fa638f · w-8cc4542c0125.
   - Parella: n7-h-24; contrast invers: n7-048.
   - Context distractor: PALA (w-208167fa638f), BRUT (w-e8c7f0581229).
   - Visual: HOME: dos exemplars de PALA, un NET i l’altre BRUT. L’objectiu és PALA NET; el distractor és PALA BRUT. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

48. **n7-048 · home · portar · pala · brut**
   - Grup/tipus: habitual / photo; precisió: estat / neteja.
   - Etiquetes: HOME · PORTAR · PALA · BRUT.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-73b71e1ff757 · w-208167fa638f · w-e8c7f0581229.
   - Parella: n7-h-24; contrast invers: n7-047.
   - Context distractor: PALA (w-208167fa638f), NET (w-8cc4542c0125).
   - Visual: HOME: dos exemplars de PALA, un NET i l’altre BRUT. L’objectiu és PALA BRUT; el distractor és PALA NET. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

49. **n7-049 · nena · tocar · caixa · net**
   - Grup/tipus: habitual / photo; precisió: estat / neteja.
   - Etiquetes: NENA · TOCAR · CAIXA · NET.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-072ecc01e120 · w-696b7c739d30 · w-8cc4542c0125.
   - Parella: n7-h-25; contrast invers: n7-050.
   - Context distractor: CAIXA (w-696b7c739d30), BRUT (w-e8c7f0581229).
   - Visual: NENA: dos exemplars de CAIXA, un NET i l’altre BRUT. L’objectiu és CAIXA NET; el distractor és CAIXA BRUT. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

50. **n7-050 · nena · tocar · caixa · brut**
   - Grup/tipus: habitual / photo; precisió: estat / neteja.
   - Etiquetes: NENA · TOCAR · CAIXA · BRUT.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-072ecc01e120 · w-696b7c739d30 · w-e8c7f0581229.
   - Parella: n7-h-25; contrast invers: n7-049.
   - Context distractor: CAIXA (w-696b7c739d30), NET (w-8cc4542c0125).
   - Visual: NENA: dos exemplars de CAIXA, un NET i l’altre BRUT. L’objectiu és CAIXA BRUT; el distractor és CAIXA NET. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

51. **n7-051 · nen · agafar · tovallola · sec**
   - Grup/tipus: habitual / photo; precisió: estat / humitat.
   - Etiquetes: NEN · AGAFAR · TOVALLOLA · SEC.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-677819a0a32a · w-045fa0b1ae9d · w-88d8bd2c2fd2.
   - Parella: n7-h-26; contrast invers: n7-052.
   - Context distractor: TOVALLOLA (w-045fa0b1ae9d), MULLAT (w-8d5a009dde27).
   - Visual: NEN: dos exemplars de TOVALLOLA, un SEC i l’altre MULLAT. L’objectiu és TOVALLOLA SEC; el distractor és TOVALLOLA MULLAT. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

52. **n7-052 · nen · agafar · tovallola · mullat**
   - Grup/tipus: habitual / photo; precisió: estat / humitat.
   - Etiquetes: NEN · AGAFAR · TOVALLOLA · MULLAT.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-677819a0a32a · w-045fa0b1ae9d · w-8d5a009dde27.
   - Parella: n7-h-26; contrast invers: n7-051.
   - Context distractor: TOVALLOLA (w-045fa0b1ae9d), SEC (w-88d8bd2c2fd2).
   - Visual: NEN: dos exemplars de TOVALLOLA, un SEC i l’altre MULLAT. L’objectiu és TOVALLOLA MULLAT; el distractor és TOVALLOLA SEC. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

53. **n7-053 · noia · tocar · mocador · sec**
   - Grup/tipus: habitual / photo; precisió: estat / humitat.
   - Etiquetes: NOIA · TOCAR · MOCADOR · SEC.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-35e3a6c8a7fd · w-88d8bd2c2fd2.
   - Parella: n7-h-27; contrast invers: n7-054.
   - Context distractor: MOCADOR (w-35e3a6c8a7fd), MULLAT (w-8d5a009dde27).
   - Visual: NOIA: dos exemplars de MOCADOR, un SEC i l’altre MULLAT. L’objectiu és MOCADOR SEC; el distractor és MOCADOR MULLAT. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

54. **n7-054 · noia · tocar · mocador · mullat**
   - Grup/tipus: habitual / photo; precisió: estat / humitat.
   - Etiquetes: NOIA · TOCAR · MOCADOR · MULLAT.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-35e3a6c8a7fd · w-8d5a009dde27.
   - Parella: n7-h-27; contrast invers: n7-053.
   - Context distractor: MOCADOR (w-35e3a6c8a7fd), SEC (w-88d8bd2c2fd2).
   - Visual: NOIA: dos exemplars de MOCADOR, un SEC i l’altre MULLAT. L’objectiu és MOCADOR MULLAT; el distractor és MOCADOR SEC. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

55. **n7-055 · noi · aixecar · esponja · sec**
   - Grup/tipus: habitual / photo; precisió: estat / humitat.
   - Etiquetes: NOI · AIXECAR · ESPONJA · SEC.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-e12d88415c80 · w-2d404e0d8979 · w-88d8bd2c2fd2.
   - Parella: n7-h-28; contrast invers: n7-056.
   - Context distractor: ESPONJA (w-2d404e0d8979), MULLAT (w-8d5a009dde27).
   - Visual: NOI: dos exemplars de ESPONJA, un SEC i l’altre MULLAT. L’objectiu és ESPONJA SEC; el distractor és ESPONJA MULLAT. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

56. **n7-056 · noi · aixecar · esponja · mullat**
   - Grup/tipus: habitual / photo; precisió: estat / humitat.
   - Etiquetes: NOI · AIXECAR · ESPONJA · MULLAT.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-e12d88415c80 · w-2d404e0d8979 · w-8d5a009dde27.
   - Parella: n7-h-28; contrast invers: n7-055.
   - Context distractor: ESPONJA (w-2d404e0d8979), SEC (w-88d8bd2c2fd2).
   - Visual: NOI: dos exemplars de ESPONJA, un SEC i l’altre MULLAT. L’objectiu és ESPONJA MULLAT; el distractor és ESPONJA SEC. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

57. **n7-057 · dona · portar · samarreta · sec**
   - Grup/tipus: habitual / photo; precisió: estat / humitat.
   - Etiquetes: DONA · PORTAR · SAMARRETA · SEC.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-73b71e1ff757 · w-0702f52b3b74 · w-88d8bd2c2fd2.
   - Parella: n7-h-29; contrast invers: n7-058.
   - Context distractor: SAMARRETA (w-0702f52b3b74), MULLAT (w-8d5a009dde27).
   - Visual: DONA: dos exemplars de SAMARRETA, un SEC i l’altre MULLAT. L’objectiu és SAMARRETA SEC; el distractor és SAMARRETA MULLAT. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

58. **n7-058 · dona · portar · samarreta · mullat**
   - Grup/tipus: habitual / photo; precisió: estat / humitat.
   - Etiquetes: DONA · PORTAR · SAMARRETA · MULLAT.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-73b71e1ff757 · w-0702f52b3b74 · w-8d5a009dde27.
   - Parella: n7-h-29; contrast invers: n7-057.
   - Context distractor: SAMARRETA (w-0702f52b3b74), SEC (w-88d8bd2c2fd2).
   - Visual: DONA: dos exemplars de SAMARRETA, un SEC i l’altre MULLAT. L’objectiu és SAMARRETA MULLAT; el distractor és SAMARRETA SEC. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

59. **n7-059 · home · tocar · tovalló · sec**
   - Grup/tipus: habitual / photo; precisió: estat / humitat.
   - Etiquetes: HOME · TOCAR · TOVALLÓ · SEC.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-072ecc01e120 · w-b9ac8312c767 · w-88d8bd2c2fd2.
   - Parella: n7-h-30; contrast invers: n7-060.
   - Context distractor: TOVALLÓ (w-b9ac8312c767), MULLAT (w-8d5a009dde27).
   - Visual: HOME: dos exemplars de TOVALLÓ, un SEC i l’altre MULLAT. L’objectiu és TOVALLÓ SEC; el distractor és TOVALLÓ MULLAT. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

60. **n7-060 · home · tocar · tovalló · mullat**
   - Grup/tipus: habitual / photo; precisió: estat / humitat.
   - Etiquetes: HOME · TOCAR · TOVALLÓ · MULLAT.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-072ecc01e120 · w-b9ac8312c767 · w-8d5a009dde27.
   - Parella: n7-h-30; contrast invers: n7-059.
   - Context distractor: TOVALLÓ (w-b9ac8312c767), SEC (w-88d8bd2c2fd2).
   - Visual: HOME: dos exemplars de TOVALLÓ, un SEC i l’altre MULLAT. L’objectiu és TOVALLÓ MULLAT; el distractor és TOVALLÓ SEC. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

61. **n7-061 · nena · tocar · got · ple**
   - Grup/tipus: habitual / photo; precisió: estat / contingut.
   - Etiquetes: NENA · TOCAR · GOT · PLE.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-072ecc01e120 · w-1bed9f18ebab · w-427a0daa495d.
   - Parella: n7-h-31; contrast invers: n7-062.
   - Context distractor: GOT (w-1bed9f18ebab), BUIT (w-1d8378757b29).
   - Visual: NENA: dos exemplars de GOT, un PLE i l’altre BUIT. L’objectiu és GOT PLE; el distractor és GOT BUIT. Recipients oberts idèntics: un ple d’aigua fins prop de la vora amb superfície llegible i l’altre buit, amb el fons interior completament visible. Vista prou elevada, sense vessar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

62. **n7-062 · nena · tocar · got · buit**
   - Grup/tipus: habitual / photo; precisió: estat / contingut.
   - Etiquetes: NENA · TOCAR · GOT · BUIT.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-072ecc01e120 · w-1bed9f18ebab · w-1d8378757b29.
   - Parella: n7-h-31; contrast invers: n7-061.
   - Context distractor: GOT (w-1bed9f18ebab), PLE (w-427a0daa495d).
   - Visual: NENA: dos exemplars de GOT, un PLE i l’altre BUIT. L’objectiu és GOT BUIT; el distractor és GOT PLE. Recipients oberts idèntics: un ple d’aigua fins prop de la vora amb superfície llegible i l’altre buit, amb el fons interior completament visible. Vista prou elevada, sense vessar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

63. **n7-063 · nen · tocar · tassa · ple**
   - Grup/tipus: habitual / photo; precisió: estat / contingut.
   - Etiquetes: NEN · TOCAR · TASSA · PLE.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-072ecc01e120 · w-adecb8403118 · w-427a0daa495d.
   - Parella: n7-h-32; contrast invers: n7-064.
   - Context distractor: TASSA (w-adecb8403118), BUIT (w-1d8378757b29).
   - Visual: NEN: dos exemplars de TASSA, un PLE i l’altre BUIT. L’objectiu és TASSA PLE; el distractor és TASSA BUIT. Recipients oberts idèntics: un ple d’aigua fins prop de la vora amb superfície llegible i l’altre buit, amb el fons interior completament visible. Vista prou elevada, sense vessar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

64. **n7-064 · nen · tocar · tassa · buit**
   - Grup/tipus: habitual / photo; precisió: estat / contingut.
   - Etiquetes: NEN · TOCAR · TASSA · BUIT.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-072ecc01e120 · w-adecb8403118 · w-1d8378757b29.
   - Parella: n7-h-32; contrast invers: n7-063.
   - Context distractor: TASSA (w-adecb8403118), PLE (w-427a0daa495d).
   - Visual: NEN: dos exemplars de TASSA, un PLE i l’altre BUIT. L’objectiu és TASSA BUIT; el distractor és TASSA PLE. Recipients oberts idèntics: un ple d’aigua fins prop de la vora amb superfície llegible i l’altre buit, amb el fons interior completament visible. Vista prou elevada, sense vessar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

65. **n7-065 · noia · tocar · galleda · ple**
   - Grup/tipus: habitual / photo; precisió: estat / contingut.
   - Etiquetes: NOIA · TOCAR · GALLEDA · PLE.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-7f04619a8649 · w-427a0daa495d.
   - Parella: n7-h-33; contrast invers: n7-066.
   - Context distractor: GALLEDA (w-7f04619a8649), BUIT (w-1d8378757b29).
   - Visual: NOIA: dos exemplars de GALLEDA, un PLE i l’altre BUIT. L’objectiu és GALLEDA PLE; el distractor és GALLEDA BUIT. Recipients oberts idèntics: un ple d’aigua fins prop de la vora amb superfície llegible i l’altre buit, amb el fons interior completament visible. Vista prou elevada, sense vessar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

66. **n7-066 · noia · tocar · galleda · buit**
   - Grup/tipus: habitual / photo; precisió: estat / contingut.
   - Etiquetes: NOIA · TOCAR · GALLEDA · BUIT.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-7f04619a8649 · w-1d8378757b29.
   - Parella: n7-h-33; contrast invers: n7-065.
   - Context distractor: GALLEDA (w-7f04619a8649), PLE (w-427a0daa495d).
   - Visual: NOIA: dos exemplars de GALLEDA, un PLE i l’altre BUIT. L’objectiu és GALLEDA BUIT; el distractor és GALLEDA PLE. Recipients oberts idèntics: un ple d’aigua fins prop de la vora amb superfície llegible i l’altre buit, amb el fons interior completament visible. Vista prou elevada, sense vessar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

67. **n7-067 · noi · tocar · carmanyola · ple**
   - Grup/tipus: habitual / photo; precisió: estat / contingut.
   - Etiquetes: NOI · TOCAR · CARMANYOLA · PLE.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-072ecc01e120 · w-c3b8bd56e942 · w-427a0daa495d.
   - Parella: n7-h-34; contrast invers: n7-068.
   - Context distractor: CARMANYOLA (w-c3b8bd56e942), BUIT (w-1d8378757b29).
   - Visual: NOI: dos exemplars de CARMANYOLA, un PLE i l’altre BUIT. L’objectiu és CARMANYOLA PLE; el distractor és CARMANYOLA BUIT. Carmanyoles obertes idèntiques, sense tapa: una plena fins a la vora de peces de fusta neutres i l’altra amb el fons interior completament visible. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

68. **n7-068 · noi · tocar · carmanyola · buit**
   - Grup/tipus: habitual / photo; precisió: estat / contingut.
   - Etiquetes: NOI · TOCAR · CARMANYOLA · BUIT.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-072ecc01e120 · w-c3b8bd56e942 · w-1d8378757b29.
   - Parella: n7-h-34; contrast invers: n7-067.
   - Context distractor: CARMANYOLA (w-c3b8bd56e942), PLE (w-427a0daa495d).
   - Visual: NOI: dos exemplars de CARMANYOLA, un PLE i l’altre BUIT. L’objectiu és CARMANYOLA BUIT; el distractor és CARMANYOLA PLE. Carmanyoles obertes idèntiques, sense tapa: una plena fins a la vora de peces de fusta neutres i l’altra amb el fons interior completament visible. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

69. **n7-069 · dona · tocar · cistell · ple**
   - Grup/tipus: habitual / photo; precisió: estat / contingut.
   - Etiquetes: DONA · TOCAR · CISTELL · PLE.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-072ecc01e120 · w-120fb6b37e88 · w-427a0daa495d.
   - Parella: n7-h-35; contrast invers: n7-070.
   - Context distractor: CISTELL (w-120fb6b37e88), BUIT (w-1d8378757b29).
   - Visual: DONA: dos exemplars de CISTELL, un PLE i l’altre BUIT. L’objectiu és CISTELL PLE; el distractor és CISTELL BUIT. Cistells oberts idèntics: un ple fins a la vora de peces de fusta neutres i l’altre amb el fons interior completament visible. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

70. **n7-070 · dona · tocar · cistell · buit**
   - Grup/tipus: habitual / photo; precisió: estat / contingut.
   - Etiquetes: DONA · TOCAR · CISTELL · BUIT.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-072ecc01e120 · w-120fb6b37e88 · w-1d8378757b29.
   - Parella: n7-h-35; contrast invers: n7-069.
   - Context distractor: CISTELL (w-120fb6b37e88), PLE (w-427a0daa495d).
   - Visual: DONA: dos exemplars de CISTELL, un PLE i l’altre BUIT. L’objectiu és CISTELL BUIT; el distractor és CISTELL PLE. Cistells oberts idèntics: un ple fins a la vora de peces de fusta neutres i l’altre amb el fons interior completament visible. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

71. **n7-071 · home · tocar · pilota · dins · caixa**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: HOME · TOCAR · PILOTA · DINS · CAIXA.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-072ecc01e120 · w-b7f578451973 · w-f871f670a944 · w-696b7c739d30.
   - Parella: n7-h-36; contrast invers: n7-072.
   - Context distractor: PILOTA (w-b7f578451973), FORA (w-9daa4c89a9c6).
   - Visual: HOME: dos exemplars de PILOTA, un DINS i l’altre FORA, respecte d’un únic suport CAIXA. L’objectiu és PILOTA DINS; el distractor és PILOTA FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

72. **n7-072 · home · tocar · pilota · fora · caixa**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: HOME · TOCAR · PILOTA · FORA · CAIXA.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-072ecc01e120 · w-b7f578451973 · w-9daa4c89a9c6 · w-696b7c739d30.
   - Parella: n7-h-36; contrast invers: n7-071.
   - Context distractor: PILOTA (w-b7f578451973), DINS (w-f871f670a944).
   - Visual: HOME: dos exemplars de PILOTA, un DINS i l’altre FORA, respecte d’un únic suport CAIXA. L’objectiu és PILOTA FORA; el distractor és PILOTA DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

73. **n7-073 · nena · tocar · llapis · dins · got**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: NENA · TOCAR · LLAPIS · DINS · GOT.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-072ecc01e120 · w-1775aa96869e · w-f871f670a944 · w-1bed9f18ebab.
   - Parella: n7-h-37; contrast invers: n7-074.
   - Context distractor: LLAPIS (w-1775aa96869e), FORA (w-9daa4c89a9c6).
   - Visual: NENA: dos exemplars de LLAPIS, un DINS i l’altre FORA, respecte d’un únic suport GOT. L’objectiu és LLAPIS DINS; el distractor és LLAPIS FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

74. **n7-074 · nena · tocar · llapis · fora · got**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: NENA · TOCAR · LLAPIS · FORA · GOT.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-072ecc01e120 · w-1775aa96869e · w-9daa4c89a9c6 · w-1bed9f18ebab.
   - Parella: n7-h-37; contrast invers: n7-073.
   - Context distractor: LLAPIS (w-1775aa96869e), DINS (w-f871f670a944).
   - Visual: NENA: dos exemplars de LLAPIS, un DINS i l’altre FORA, respecte d’un únic suport GOT. L’objectiu és LLAPIS FORA; el distractor és LLAPIS DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

75. **n7-075 · nen · tocar · poma · dins · cistell**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: NEN · TOCAR · POMA · DINS · CISTELL.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-072ecc01e120 · w-809c680b5699 · w-f871f670a944 · w-120fb6b37e88.
   - Parella: n7-h-38; contrast invers: n7-076.
   - Context distractor: POMA (w-809c680b5699), FORA (w-9daa4c89a9c6).
   - Visual: NEN: dos exemplars de POMA, un DINS i l’altre FORA, respecte d’un únic suport CISTELL. L’objectiu és POMA DINS; el distractor és POMA FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

76. **n7-076 · nen · tocar · poma · fora · cistell**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: NEN · TOCAR · POMA · FORA · CISTELL.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-072ecc01e120 · w-809c680b5699 · w-9daa4c89a9c6 · w-120fb6b37e88.
   - Parella: n7-h-38; contrast invers: n7-075.
   - Context distractor: POMA (w-809c680b5699), DINS (w-f871f670a944).
   - Visual: NEN: dos exemplars de POMA, un DINS i l’altre FORA, respecte d’un únic suport CISTELL. L’objectiu és POMA FORA; el distractor és POMA DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

77. **n7-077 · noia · tocar · nina · dins · caixa**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: NOIA · TOCAR · NINA · DINS · CAIXA.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-db89958a3c63 · w-f871f670a944 · w-696b7c739d30.
   - Parella: n7-h-39; contrast invers: n7-078.
   - Context distractor: NINA (w-db89958a3c63), FORA (w-9daa4c89a9c6).
   - Visual: NOIA: dos exemplars de NINA, un DINS i l’altre FORA, respecte d’un únic suport CAIXA. L’objectiu és NINA DINS; el distractor és NINA FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

78. **n7-078 · noia · tocar · nina · fora · caixa**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: NOIA · TOCAR · NINA · FORA · CAIXA.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-db89958a3c63 · w-9daa4c89a9c6 · w-696b7c739d30.
   - Parella: n7-h-39; contrast invers: n7-077.
   - Context distractor: NINA (w-db89958a3c63), DINS (w-f871f670a944).
   - Visual: NOIA: dos exemplars de NINA, un DINS i l’altre FORA, respecte d’un únic suport CAIXA. L’objectiu és NINA FORA; el distractor és NINA DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

79. **n7-079 · noi · tocar · mocador · dins · bossa**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: NOI · TOCAR · MOCADOR · DINS · BOSSA.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-072ecc01e120 · w-35e3a6c8a7fd · w-f871f670a944 · w-7db8d682fed4.
   - Parella: n7-h-40; contrast invers: n7-080.
   - Context distractor: MOCADOR (w-35e3a6c8a7fd), FORA (w-9daa4c89a9c6).
   - Visual: NOI: dos exemplars de MOCADOR, un DINS i l’altre FORA, respecte d’un únic suport BOSSA. L’objectiu és MOCADOR DINS; el distractor és MOCADOR FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

80. **n7-080 · noi · tocar · mocador · fora · bossa**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: NOI · TOCAR · MOCADOR · FORA · BOSSA.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-072ecc01e120 · w-35e3a6c8a7fd · w-9daa4c89a9c6 · w-7db8d682fed4.
   - Parella: n7-h-40; contrast invers: n7-079.
   - Context distractor: MOCADOR (w-35e3a6c8a7fd), DINS (w-f871f670a944).
   - Visual: NOI: dos exemplars de MOCADOR, un DINS i l’altre FORA, respecte d’un únic suport BOSSA. L’objectiu és MOCADOR FORA; el distractor és MOCADOR DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

81. **n7-081 · dona · tocar · cullera · dins · carmanyola**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: DONA · TOCAR · CULLERA · DINS · CARMANYOLA.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-072ecc01e120 · w-9c9849fac1d3 · w-f871f670a944 · w-c3b8bd56e942.
   - Parella: n7-h-41; contrast invers: n7-082.
   - Context distractor: CULLERA (w-9c9849fac1d3), FORA (w-9daa4c89a9c6).
   - Visual: DONA: dos exemplars de CULLERA, un DINS i l’altre FORA, respecte d’un únic suport CARMANYOLA. L’objectiu és CULLERA DINS; el distractor és CULLERA FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

82. **n7-082 · dona · tocar · cullera · fora · carmanyola**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: DONA · TOCAR · CULLERA · FORA · CARMANYOLA.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-072ecc01e120 · w-9c9849fac1d3 · w-9daa4c89a9c6 · w-c3b8bd56e942.
   - Parella: n7-h-41; contrast invers: n7-081.
   - Context distractor: CULLERA (w-9c9849fac1d3), DINS (w-f871f670a944).
   - Visual: DONA: dos exemplars de CULLERA, un DINS i l’altre FORA, respecte d’un únic suport CARMANYOLA. L’objectiu és CULLERA FORA; el distractor és CULLERA DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

83. **n7-083 · home · tocar · coixí · dins · cistell**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: HOME · TOCAR · COIXÍ · DINS · CISTELL.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-072ecc01e120 · w-44260b79b61e · w-f871f670a944 · w-120fb6b37e88.
   - Parella: n7-h-42; contrast invers: n7-084.
   - Context distractor: COIXÍ (w-44260b79b61e), FORA (w-9daa4c89a9c6).
   - Visual: HOME: dos exemplars de COIXÍ, un DINS i l’altre FORA, respecte d’un únic suport CISTELL. L’objectiu és COIXÍ DINS; el distractor és COIXÍ FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

84. **n7-084 · home · tocar · coixí · fora · cistell**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: HOME · TOCAR · COIXÍ · FORA · CISTELL.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-072ecc01e120 · w-44260b79b61e · w-9daa4c89a9c6 · w-120fb6b37e88.
   - Parella: n7-h-42; contrast invers: n7-083.
   - Context distractor: COIXÍ (w-44260b79b61e), DINS (w-f871f670a944).
   - Visual: HOME: dos exemplars de COIXÍ, un DINS i l’altre FORA, respecte d’un únic suport CISTELL. L’objectiu és COIXÍ FORA; el distractor és COIXÍ DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

85. **n7-085 · nena · tocar · esponja · dins · galleda**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: NENA · TOCAR · ESPONJA · DINS · GALLEDA.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-072ecc01e120 · w-2d404e0d8979 · w-f871f670a944 · w-7f04619a8649.
   - Parella: n7-h-43; contrast invers: n7-086.
   - Context distractor: ESPONJA (w-2d404e0d8979), FORA (w-9daa4c89a9c6).
   - Visual: NENA: dos exemplars de ESPONJA, un DINS i l’altre FORA, respecte d’un únic suport GALLEDA. L’objectiu és ESPONJA DINS; el distractor és ESPONJA FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

86. **n7-086 · nena · tocar · esponja · fora · galleda**
   - Grup/tipus: habitual / photo; precisió: posicio / interior.
   - Etiquetes: NENA · TOCAR · ESPONJA · FORA · GALLEDA.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-072ecc01e120 · w-2d404e0d8979 · w-9daa4c89a9c6 · w-7f04619a8649.
   - Parella: n7-h-43; contrast invers: n7-085.
   - Context distractor: ESPONJA (w-2d404e0d8979), DINS (w-f871f670a944).
   - Visual: NENA: dos exemplars de ESPONJA, un DINS i l’altre FORA, respecte d’un únic suport GALLEDA. L’objectiu és ESPONJA FORA; el distractor és ESPONJA DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

87. **n7-087 · nen · tocar · pilota · sobre · taula**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: NEN · TOCAR · PILOTA · SOBRE · TAULA.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-072ecc01e120 · w-b7f578451973 · w-d44584204864 · w-1544f4efec59.
   - Parella: n7-h-44; contrast invers: n7-088.
   - Context distractor: PILOTA (w-b7f578451973), SOTA (w-e0a6aeb46069).
   - Visual: NEN: dos exemplars de PILOTA, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és PILOTA SOBRE; el distractor és PILOTA SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

88. **n7-088 · nen · tocar · pilota · sota · taula**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: NEN · TOCAR · PILOTA · SOTA · TAULA.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-072ecc01e120 · w-b7f578451973 · w-e0a6aeb46069 · w-1544f4efec59.
   - Parella: n7-h-44; contrast invers: n7-087.
   - Context distractor: PILOTA (w-b7f578451973), SOBRE (w-d44584204864).
   - Visual: NEN: dos exemplars de PILOTA, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és PILOTA SOTA; el distractor és PILOTA SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

89. **n7-089 · noia · tocar · llibre · sobre · cadira**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: NOIA · TOCAR · LLIBRE · SOBRE · CADIRA.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-3bb995df42bf · w-d44584204864 · w-e1efe2c4e23d.
   - Parella: n7-h-45; contrast invers: n7-090.
   - Context distractor: LLIBRE (w-3bb995df42bf), SOTA (w-e0a6aeb46069).
   - Visual: NOIA: dos exemplars de LLIBRE, un SOBRE i l’altre SOTA, respecte d’un únic suport CADIRA. L’objectiu és LLIBRE SOBRE; el distractor és LLIBRE SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

90. **n7-090 · noia · tocar · llibre · sota · cadira**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: NOIA · TOCAR · LLIBRE · SOTA · CADIRA.
   - wordIds, en el mateix ordre: w-b38ff488f862 · w-072ecc01e120 · w-3bb995df42bf · w-e0a6aeb46069 · w-e1efe2c4e23d.
   - Parella: n7-h-45; contrast invers: n7-089.
   - Context distractor: LLIBRE (w-3bb995df42bf), SOBRE (w-d44584204864).
   - Visual: NOIA: dos exemplars de LLIBRE, un SOBRE i l’altre SOTA, respecte d’un únic suport CADIRA. L’objectiu és LLIBRE SOTA; el distractor és LLIBRE SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

91. **n7-091 · noi · tocar · coixí · sobre · taula**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: NOI · TOCAR · COIXÍ · SOBRE · TAULA.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-072ecc01e120 · w-44260b79b61e · w-d44584204864 · w-1544f4efec59.
   - Parella: n7-h-46; contrast invers: n7-092.
   - Context distractor: COIXÍ (w-44260b79b61e), SOTA (w-e0a6aeb46069).
   - Visual: NOI: dos exemplars de COIXÍ, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és COIXÍ SOBRE; el distractor és COIXÍ SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

92. **n7-092 · noi · tocar · coixí · sota · taula**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: NOI · TOCAR · COIXÍ · SOTA · TAULA.
   - wordIds, en el mateix ordre: w-01bc6dcab46b · w-072ecc01e120 · w-44260b79b61e · w-e0a6aeb46069 · w-1544f4efec59.
   - Parella: n7-h-46; contrast invers: n7-091.
   - Context distractor: COIXÍ (w-44260b79b61e), SOBRE (w-d44584204864).
   - Visual: NOI: dos exemplars de COIXÍ, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és COIXÍ SOTA; el distractor és COIXÍ SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

93. **n7-093 · dona · tocar · motxilla · sobre · cadira**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: DONA · TOCAR · MOTXILLA · SOBRE · CADIRA.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-072ecc01e120 · w-43db0ea26088 · w-d44584204864 · w-e1efe2c4e23d.
   - Parella: n7-h-47; contrast invers: n7-094.
   - Context distractor: MOTXILLA (w-43db0ea26088), SOTA (w-e0a6aeb46069).
   - Visual: DONA: dos exemplars de MOTXILLA, un SOBRE i l’altre SOTA, respecte d’un únic suport CADIRA. L’objectiu és MOTXILLA SOBRE; el distractor és MOTXILLA SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

94. **n7-094 · dona · tocar · motxilla · sota · cadira**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: DONA · TOCAR · MOTXILLA · SOTA · CADIRA.
   - wordIds, en el mateix ordre: w-72e9fe9a8b43 · w-072ecc01e120 · w-43db0ea26088 · w-e0a6aeb46069 · w-e1efe2c4e23d.
   - Parella: n7-h-47; contrast invers: n7-093.
   - Context distractor: MOTXILLA (w-43db0ea26088), SOBRE (w-d44584204864).
   - Visual: DONA: dos exemplars de MOTXILLA, un SOBRE i l’altre SOTA, respecte d’un únic suport CADIRA. L’objectiu és MOTXILLA SOTA; el distractor és MOTXILLA SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

95. **n7-095 · home · tocar · galleda · sobre · taula**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: HOME · TOCAR · GALLEDA · SOBRE · TAULA.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-072ecc01e120 · w-7f04619a8649 · w-d44584204864 · w-1544f4efec59.
   - Parella: n7-h-48; contrast invers: n7-096.
   - Context distractor: GALLEDA (w-7f04619a8649), SOTA (w-e0a6aeb46069).
   - Visual: HOME: dos exemplars de GALLEDA, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és GALLEDA SOBRE; el distractor és GALLEDA SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

96. **n7-096 · home · tocar · galleda · sota · taula**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: HOME · TOCAR · GALLEDA · SOTA · TAULA.
   - wordIds, en el mateix ordre: w-cfe24f6b3c38 · w-072ecc01e120 · w-7f04619a8649 · w-e0a6aeb46069 · w-1544f4efec59.
   - Parella: n7-h-48; contrast invers: n7-095.
   - Context distractor: GALLEDA (w-7f04619a8649), SOBRE (w-d44584204864).
   - Visual: HOME: dos exemplars de GALLEDA, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és GALLEDA SOTA; el distractor és GALLEDA SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

97. **n7-097 · nena · tocar · tassa · sobre · taula**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: NENA · TOCAR · TASSA · SOBRE · TAULA.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-072ecc01e120 · w-adecb8403118 · w-d44584204864 · w-1544f4efec59.
   - Parella: n7-h-49; contrast invers: n7-098.
   - Context distractor: TASSA (w-adecb8403118), SOTA (w-e0a6aeb46069).
   - Visual: NENA: dos exemplars de TASSA, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és TASSA SOBRE; el distractor és TASSA SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

98. **n7-098 · nena · tocar · tassa · sota · taula**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: NENA · TOCAR · TASSA · SOTA · TAULA.
   - wordIds, en el mateix ordre: w-cda6fa4a9867 · w-072ecc01e120 · w-adecb8403118 · w-e0a6aeb46069 · w-1544f4efec59.
   - Parella: n7-h-49; contrast invers: n7-097.
   - Context distractor: TASSA (w-adecb8403118), SOBRE (w-d44584204864).
   - Visual: NENA: dos exemplars de TASSA, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és TASSA SOTA; el distractor és TASSA SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

99. **n7-099 · nen · tocar · carmanyola · sobre · cadira**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: NEN · TOCAR · CARMANYOLA · SOBRE · CADIRA.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-072ecc01e120 · w-c3b8bd56e942 · w-d44584204864 · w-e1efe2c4e23d.
   - Parella: n7-h-50; contrast invers: n7-100.
   - Context distractor: CARMANYOLA (w-c3b8bd56e942), SOTA (w-e0a6aeb46069).
   - Visual: NEN: dos exemplars de CARMANYOLA, un SOBRE i l’altre SOTA, respecte d’un únic suport CADIRA. L’objectiu és CARMANYOLA SOBRE; el distractor és CARMANYOLA SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

100. **n7-100 · nen · tocar · carmanyola · sota · cadira**
   - Grup/tipus: habitual / photo; precisió: posicio / vertical.
   - Etiquetes: NEN · TOCAR · CARMANYOLA · SOTA · CADIRA.
   - wordIds, en el mateix ordre: w-b4012100fe09 · w-072ecc01e120 · w-c3b8bd56e942 · w-e0a6aeb46069 · w-e1efe2c4e23d.
   - Parella: n7-h-50; contrast invers: n7-099.
   - Context distractor: CARMANYOLA (w-c3b8bd56e942), SOBRE (w-d44584204864).
   - Visual: NEN: dos exemplars de CARMANYOLA, un SOBRE i l’altre SOTA, respecte d’un únic suport CADIRA. L’objectiu és CARMANYOLA SOTA; el distractor és CARMANYOLA SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Persona sencera amb roba neutra; fotografia sintètica. Fons blanc, marges amplis, una sola acció, cap text ni marques.

## Insòlites · dibuix pla

101. **n7-101 · gat · agafar · pilota · vermell**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: GAT · AGAFAR · PILOTA · VERMELL.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-677819a0a32a · w-b7f578451973 · w-26a2697058f7.
   - Parella: n7-i-01; contrast invers: n7-102.
   - Context distractor: PILOTA (w-b7f578451973), BLAU (w-a78d9867b0c8).
   - Visual: GAT: dos exemplars de PILOTA, un VERMELL i l’altre BLAU. L’objectiu és PILOTA VERMELL; el distractor és PILOTA BLAU. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

102. **n7-102 · gat · agafar · pilota · blau**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: GAT · AGAFAR · PILOTA · BLAU.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-677819a0a32a · w-b7f578451973 · w-a78d9867b0c8.
   - Parella: n7-i-01; contrast invers: n7-101.
   - Context distractor: PILOTA (w-b7f578451973), VERMELL (w-26a2697058f7).
   - Visual: GAT: dos exemplars de PILOTA, un VERMELL i l’altre BLAU. L’objectiu és PILOTA BLAU; el distractor és PILOTA VERMELL. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

103. **n7-103 · gos · aixecar · got · groc**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: GOS · AIXECAR · GOT · GROC.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-e12d88415c80 · w-1bed9f18ebab · w-6b6fe6ec5a2e.
   - Parella: n7-i-02; contrast invers: n7-104.
   - Context distractor: GOT (w-1bed9f18ebab), VERD (w-5f5b9a1df897).
   - Visual: GOS: dos exemplars de GOT, un GROC i l’altre VERD. L’objectiu és GOT GROC; el distractor és GOT VERD. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

104. **n7-104 · gos · aixecar · got · verd**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: GOS · AIXECAR · GOT · VERD.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-e12d88415c80 · w-1bed9f18ebab · w-5f5b9a1df897.
   - Parella: n7-i-02; contrast invers: n7-103.
   - Context distractor: GOT (w-1bed9f18ebab), GROC (w-6b6fe6ec5a2e).
   - Visual: GOS: dos exemplars de GOT, un GROC i l’altre VERD. L’objectiu és GOT VERD; el distractor és GOT GROC. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

105. **n7-105 · conill · tocar · caixa · blau**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: CONILL · TOCAR · CAIXA · BLAU.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-072ecc01e120 · w-696b7c739d30 · w-a78d9867b0c8.
   - Parella: n7-i-03; contrast invers: n7-106.
   - Context distractor: CAIXA (w-696b7c739d30), GROC (w-6b6fe6ec5a2e).
   - Visual: CONILL: dos exemplars de CAIXA, un BLAU i l’altre GROC. L’objectiu és CAIXA BLAU; el distractor és CAIXA GROC. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

106. **n7-106 · conill · tocar · caixa · groc**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: CONILL · TOCAR · CAIXA · GROC.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-072ecc01e120 · w-696b7c739d30 · w-6b6fe6ec5a2e.
   - Parella: n7-i-03; contrast invers: n7-105.
   - Context distractor: CAIXA (w-696b7c739d30), BLAU (w-a78d9867b0c8).
   - Visual: CONILL: dos exemplars de CAIXA, un BLAU i l’altre GROC. L’objectiu és CAIXA GROC; el distractor és CAIXA BLAU. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

107. **n7-107 · ós · portar · galleda · vermell**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: ÓS · PORTAR · GALLEDA · VERMELL.
   - wordIds, en el mateix ordre: w-a06249642996 · w-73b71e1ff757 · w-7f04619a8649 · w-26a2697058f7.
   - Parella: n7-i-04; contrast invers: n7-108.
   - Context distractor: GALLEDA (w-7f04619a8649), VERD (w-5f5b9a1df897).
   - Visual: ÓS: dos exemplars de GALLEDA, un VERMELL i l’altre VERD. L’objectiu és GALLEDA VERMELL; el distractor és GALLEDA VERD. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

108. **n7-108 · ós · portar · galleda · verd**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: ÓS · PORTAR · GALLEDA · VERD.
   - wordIds, en el mateix ordre: w-a06249642996 · w-73b71e1ff757 · w-7f04619a8649 · w-5f5b9a1df897.
   - Parella: n7-i-04; contrast invers: n7-107.
   - Context distractor: GALLEDA (w-7f04619a8649), VERMELL (w-26a2697058f7).
   - Visual: ÓS: dos exemplars de GALLEDA, un VERMELL i l’altre VERD. L’objectiu és GALLEDA VERD; el distractor és GALLEDA VERMELL. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

109. **n7-109 · mico · agafar · llapis · blau**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: MICO · AGAFAR · LLAPIS · BLAU.
   - wordIds, en el mateix ordre: w-12a87560751b · w-677819a0a32a · w-1775aa96869e · w-a78d9867b0c8.
   - Parella: n7-i-05; contrast invers: n7-110.
   - Context distractor: LLAPIS (w-1775aa96869e), GROC (w-6b6fe6ec5a2e).
   - Visual: MICO: dos exemplars de LLAPIS, un BLAU i l’altre GROC. L’objectiu és LLAPIS BLAU; el distractor és LLAPIS GROC. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

110. **n7-110 · mico · agafar · llapis · groc**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: MICO · AGAFAR · LLAPIS · GROC.
   - wordIds, en el mateix ordre: w-12a87560751b · w-677819a0a32a · w-1775aa96869e · w-6b6fe6ec5a2e.
   - Parella: n7-i-05; contrast invers: n7-109.
   - Context distractor: LLAPIS (w-1775aa96869e), BLAU (w-a78d9867b0c8).
   - Visual: MICO: dos exemplars de LLAPIS, un BLAU i l’altre GROC. L’objectiu és LLAPIS GROC; el distractor és LLAPIS BLAU. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

111. **n7-111 · pinguí · aixecar · samarreta · vermell**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: PINGUÍ · AIXECAR · SAMARRETA · VERMELL.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-e12d88415c80 · w-0702f52b3b74 · w-26a2697058f7.
   - Parella: n7-i-06; contrast invers: n7-112.
   - Context distractor: SAMARRETA (w-0702f52b3b74), BLAU (w-a78d9867b0c8).
   - Visual: PINGUÍ: dos exemplars de SAMARRETA, un VERMELL i l’altre BLAU. L’objectiu és SAMARRETA VERMELL; el distractor és SAMARRETA BLAU. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

112. **n7-112 · pinguí · aixecar · samarreta · blau**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: PINGUÍ · AIXECAR · SAMARRETA · BLAU.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-e12d88415c80 · w-0702f52b3b74 · w-a78d9867b0c8.
   - Parella: n7-i-06; contrast invers: n7-111.
   - Context distractor: SAMARRETA (w-0702f52b3b74), VERMELL (w-26a2697058f7).
   - Visual: PINGUÍ: dos exemplars de SAMARRETA, un VERMELL i l’altre BLAU. L’objectiu és SAMARRETA BLAU; el distractor és SAMARRETA VERMELL. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

113. **n7-113 · elefant · portar · coixí · groc**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: ELEFANT · PORTAR · COIXÍ · GROC.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-73b71e1ff757 · w-44260b79b61e · w-6b6fe6ec5a2e.
   - Parella: n7-i-07; contrast invers: n7-114.
   - Context distractor: COIXÍ (w-44260b79b61e), LILA (w-4776cd4c2990).
   - Visual: ELEFANT: dos exemplars de COIXÍ, un GROC i l’altre LILA. L’objectiu és COIXÍ GROC; el distractor és COIXÍ LILA. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

114. **n7-114 · elefant · portar · coixí · lila**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: ELEFANT · PORTAR · COIXÍ · LILA.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-73b71e1ff757 · w-44260b79b61e · w-4776cd4c2990.
   - Parella: n7-i-07; contrast invers: n7-113.
   - Context distractor: COIXÍ (w-44260b79b61e), GROC (w-6b6fe6ec5a2e).
   - Visual: ELEFANT: dos exemplars de COIXÍ, un GROC i l’altre LILA. L’objectiu és COIXÍ LILA; el distractor és COIXÍ GROC. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

115. **n7-115 · zebra · tocar · pala · verd**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: ZEBRA · TOCAR · PALA · VERD.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-072ecc01e120 · w-208167fa638f · w-5f5b9a1df897.
   - Parella: n7-i-08; contrast invers: n7-116.
   - Context distractor: PALA (w-208167fa638f), LILA (w-4776cd4c2990).
   - Visual: ZEBRA: dos exemplars de PALA, un VERD i l’altre LILA. L’objectiu és PALA VERD; el distractor és PALA LILA. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

116. **n7-116 · zebra · tocar · pala · lila**
   - Grup/tipus: insolita / drawing; precisió: aspecte / color.
   - Etiquetes: ZEBRA · TOCAR · PALA · LILA.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-072ecc01e120 · w-208167fa638f · w-4776cd4c2990.
   - Parella: n7-i-08; contrast invers: n7-115.
   - Context distractor: PALA (w-208167fa638f), VERD (w-5f5b9a1df897).
   - Visual: ZEBRA: dos exemplars de PALA, un VERD i l’altre LILA. L’objectiu és PALA LILA; el distractor és PALA VERD. Dues superfícies del mateix material, llises i de color uniforme saturat; colors llegibles sense reflexos ni estampats. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

117. **n7-117 · cangur · tocar · pilota · gran**
   - Grup/tipus: insolita / drawing; precisió: aspecte / mida.
   - Etiquetes: CANGUR · TOCAR · PILOTA · GRAN.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-072ecc01e120 · w-b7f578451973 · w-461bd834b14a.
   - Parella: n7-i-09; contrast invers: n7-118.
   - Context distractor: PILOTA (w-b7f578451973), PETITA (w-12c5f9c8621a).
   - Visual: CANGUR: dos exemplars de PILOTA, un GRAN i l’altre PETITA. L’objectiu és PILOTA GRAN; el distractor és PILOTA PETITA. Exemplars del mateix model, mateix pla i distància; un té el doble de mida lineal, sense perspectiva forçada. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

118. **n7-118 · cangur · tocar · pilota · petita**
   - Grup/tipus: insolita / drawing; precisió: aspecte / mida.
   - Etiquetes: CANGUR · TOCAR · PILOTA · PETITA.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-072ecc01e120 · w-b7f578451973 · w-12c5f9c8621a.
   - Parella: n7-i-09; contrast invers: n7-117.
   - Context distractor: PILOTA (w-b7f578451973), GRAN (w-461bd834b14a).
   - Visual: CANGUR: dos exemplars de PILOTA, un GRAN i l’altre PETITA. L’objectiu és PILOTA PETITA; el distractor és PILOTA GRAN. Exemplars del mateix model, mateix pla i distància; un té el doble de mida lineal, sense perspectiva forçada. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

119. **n7-119 · girafa · agafar · caixa · gran**
   - Grup/tipus: insolita / drawing; precisió: aspecte / mida.
   - Etiquetes: GIRAFA · AGAFAR · CAIXA · GRAN.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-677819a0a32a · w-696b7c739d30 · w-461bd834b14a.
   - Parella: n7-i-10; contrast invers: n7-120.
   - Context distractor: CAIXA (w-696b7c739d30), PETITA (w-12c5f9c8621a).
   - Visual: GIRAFA: dos exemplars de CAIXA, un GRAN i l’altre PETITA. L’objectiu és CAIXA GRAN; el distractor és CAIXA PETITA. Exemplars del mateix model, mateix pla i distància; un té el doble de mida lineal, sense perspectiva forçada. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

120. **n7-120 · girafa · agafar · caixa · petita**
   - Grup/tipus: insolita / drawing; precisió: aspecte / mida.
   - Etiquetes: GIRAFA · AGAFAR · CAIXA · PETITA.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-677819a0a32a · w-696b7c739d30 · w-12c5f9c8621a.
   - Parella: n7-i-10; contrast invers: n7-119.
   - Context distractor: CAIXA (w-696b7c739d30), GRAN (w-461bd834b14a).
   - Visual: GIRAFA: dos exemplars de CAIXA, un GRAN i l’altre PETITA. L’objectiu és CAIXA PETITA; el distractor és CAIXA GRAN. Exemplars del mateix model, mateix pla i distància; un té el doble de mida lineal, sense perspectiva forçada. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

121. **n7-121 · gat · aixecar · galleda · gran**
   - Grup/tipus: insolita / drawing; precisió: aspecte / mida.
   - Etiquetes: GAT · AIXECAR · GALLEDA · GRAN.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-e12d88415c80 · w-7f04619a8649 · w-461bd834b14a.
   - Parella: n7-i-11; contrast invers: n7-122.
   - Context distractor: GALLEDA (w-7f04619a8649), PETITA (w-12c5f9c8621a).
   - Visual: GAT: dos exemplars de GALLEDA, un GRAN i l’altre PETITA. L’objectiu és GALLEDA GRAN; el distractor és GALLEDA PETITA. Exemplars del mateix model, mateix pla i distància; un té el doble de mida lineal, sense perspectiva forçada. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

122. **n7-122 · gat · aixecar · galleda · petita**
   - Grup/tipus: insolita / drawing; precisió: aspecte / mida.
   - Etiquetes: GAT · AIXECAR · GALLEDA · PETITA.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-e12d88415c80 · w-7f04619a8649 · w-12c5f9c8621a.
   - Parella: n7-i-11; contrast invers: n7-121.
   - Context distractor: GALLEDA (w-7f04619a8649), GRAN (w-461bd834b14a).
   - Visual: GAT: dos exemplars de GALLEDA, un GRAN i l’altre PETITA. L’objectiu és GALLEDA PETITA; el distractor és GALLEDA GRAN. Exemplars del mateix model, mateix pla i distància; un té el doble de mida lineal, sense perspectiva forçada. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

123. **n7-123 · gos · tocar · llapis · llarg**
   - Grup/tipus: insolita / drawing; precisió: aspecte / mida.
   - Etiquetes: GOS · TOCAR · LLAPIS · LLARG.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-072ecc01e120 · w-1775aa96869e · w-8c01add53f6c.
   - Parella: n7-i-12; contrast invers: n7-124.
   - Context distractor: LLAPIS (w-1775aa96869e), CURT (w-617a2c98adb5).
   - Visual: GOS: dos exemplars de LLAPIS, un LLARG i l’altre CURT. L’objectiu és LLAPIS LLARG; el distractor és LLAPIS CURT. Exemplars rectes i estesos, igual gruix i amplada, però un té el doble de longitud; extrems visibles. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

124. **n7-124 · gos · tocar · llapis · curt**
   - Grup/tipus: insolita / drawing; precisió: aspecte / mida.
   - Etiquetes: GOS · TOCAR · LLAPIS · CURT.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-072ecc01e120 · w-1775aa96869e · w-617a2c98adb5.
   - Parella: n7-i-12; contrast invers: n7-123.
   - Context distractor: LLAPIS (w-1775aa96869e), LLARG (w-8c01add53f6c).
   - Visual: GOS: dos exemplars de LLAPIS, un LLARG i l’altre CURT. L’objectiu és LLAPIS CURT; el distractor és LLAPIS LLARG. Exemplars rectes i estesos, igual gruix i amplada, però un té el doble de longitud; extrems visibles. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

125. **n7-125 · conill · aixecar · mocador · llarg**
   - Grup/tipus: insolita / drawing; precisió: aspecte / mida.
   - Etiquetes: CONILL · AIXECAR · MOCADOR · LLARG.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-e12d88415c80 · w-35e3a6c8a7fd · w-8c01add53f6c.
   - Parella: n7-i-13; contrast invers: n7-126.
   - Context distractor: MOCADOR (w-35e3a6c8a7fd), CURT (w-617a2c98adb5).
   - Visual: CONILL: dos exemplars de MOCADOR, un LLARG i l’altre CURT. L’objectiu és MOCADOR LLARG; el distractor és MOCADOR CURT. Exemplars rectes i estesos, igual gruix i amplada, però un té el doble de longitud; extrems visibles. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

126. **n7-126 · conill · aixecar · mocador · curt**
   - Grup/tipus: insolita / drawing; precisió: aspecte / mida.
   - Etiquetes: CONILL · AIXECAR · MOCADOR · CURT.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-e12d88415c80 · w-35e3a6c8a7fd · w-617a2c98adb5.
   - Parella: n7-i-13; contrast invers: n7-125.
   - Context distractor: MOCADOR (w-35e3a6c8a7fd), LLARG (w-8c01add53f6c).
   - Visual: CONILL: dos exemplars de MOCADOR, un LLARG i l’altre CURT. L’objectiu és MOCADOR CURT; el distractor és MOCADOR LLARG. Exemplars rectes i estesos, igual gruix i amplada, però un té el doble de longitud; extrems visibles. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

127. **n7-127 · ós · agafar · pal · llarg**
   - Grup/tipus: insolita / drawing; precisió: aspecte / mida.
   - Etiquetes: ÓS · AGAFAR · PAL · LLARG.
   - wordIds, en el mateix ordre: w-a06249642996 · w-677819a0a32a · w-c8538c4482a2 · w-8c01add53f6c.
   - Parella: n7-i-14; contrast invers: n7-128.
   - Context distractor: PAL (w-c8538c4482a2), CURT (w-617a2c98adb5).
   - Visual: ÓS: dos exemplars de PAL, un LLARG i l’altre CURT. L’objectiu és PAL LLARG; el distractor és PAL CURT. Exemplars rectes i estesos, igual gruix i amplada, però un té el doble de longitud; extrems visibles. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

128. **n7-128 · ós · agafar · pal · curt**
   - Grup/tipus: insolita / drawing; precisió: aspecte / mida.
   - Etiquetes: ÓS · AGAFAR · PAL · CURT.
   - wordIds, en el mateix ordre: w-a06249642996 · w-677819a0a32a · w-c8538c4482a2 · w-617a2c98adb5.
   - Parella: n7-i-14; contrast invers: n7-127.
   - Context distractor: PAL (w-c8538c4482a2), LLARG (w-8c01add53f6c).
   - Visual: ÓS: dos exemplars de PAL, un LLARG i l’altre CURT. L’objectiu és PAL CURT; el distractor és PAL LLARG. Exemplars rectes i estesos, igual gruix i amplada, però un té el doble de longitud; extrems visibles. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

129. **n7-129 · mico · tocar · samarreta · ratlles**
   - Grup/tipus: insolita / drawing; precisió: aspecte / estampat.
   - Etiquetes: MICO · TOCAR · SAMARRETA · RATLLES.
   - wordIds, en el mateix ordre: w-12a87560751b · w-072ecc01e120 · w-0702f52b3b74 · w-19a396681127.
   - Parella: n7-i-15; contrast invers: n7-130.
   - Context distractor: SAMARRETA (w-0702f52b3b74), TOPOS (w-69c93e868621).
   - Visual: MICO: dos exemplars de SAMARRETA, un RATLLES i l’altre TOPOS. L’objectiu és SAMARRETA RATLLES; el distractor és SAMARRETA TOPOS. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

130. **n7-130 · mico · tocar · samarreta · topos**
   - Grup/tipus: insolita / drawing; precisió: aspecte / estampat.
   - Etiquetes: MICO · TOCAR · SAMARRETA · TOPOS.
   - wordIds, en el mateix ordre: w-12a87560751b · w-072ecc01e120 · w-0702f52b3b74 · w-69c93e868621.
   - Parella: n7-i-15; contrast invers: n7-129.
   - Context distractor: SAMARRETA (w-0702f52b3b74), RATLLES (w-19a396681127).
   - Visual: MICO: dos exemplars de SAMARRETA, un RATLLES i l’altre TOPOS. L’objectiu és SAMARRETA TOPOS; el distractor és SAMARRETA RATLLES. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

131. **n7-131 · pinguí · agafar · bufanda · ratlles**
   - Grup/tipus: insolita / drawing; precisió: aspecte / estampat.
   - Etiquetes: PINGUÍ · AGAFAR · BUFANDA · RATLLES.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-677819a0a32a · w-0b4612bc4b9f · w-19a396681127.
   - Parella: n7-i-16; contrast invers: n7-132.
   - Context distractor: BUFANDA (w-0b4612bc4b9f), TOPOS (w-69c93e868621).
   - Visual: PINGUÍ: dos exemplars de BUFANDA, un RATLLES i l’altre TOPOS. L’objectiu és BUFANDA RATLLES; el distractor és BUFANDA TOPOS. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

132. **n7-132 · pinguí · agafar · bufanda · topos**
   - Grup/tipus: insolita / drawing; precisió: aspecte / estampat.
   - Etiquetes: PINGUÍ · AGAFAR · BUFANDA · TOPOS.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-677819a0a32a · w-0b4612bc4b9f · w-69c93e868621.
   - Parella: n7-i-16; contrast invers: n7-131.
   - Context distractor: BUFANDA (w-0b4612bc4b9f), RATLLES (w-19a396681127).
   - Visual: PINGUÍ: dos exemplars de BUFANDA, un RATLLES i l’altre TOPOS. L’objectiu és BUFANDA TOPOS; el distractor és BUFANDA RATLLES. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

133. **n7-133 · elefant · aixecar · tassa · ratlles**
   - Grup/tipus: insolita / drawing; precisió: aspecte / estampat.
   - Etiquetes: ELEFANT · AIXECAR · TASSA · RATLLES.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-e12d88415c80 · w-adecb8403118 · w-19a396681127.
   - Parella: n7-i-17; contrast invers: n7-134.
   - Context distractor: TASSA (w-adecb8403118), TOPOS (w-69c93e868621).
   - Visual: ELEFANT: dos exemplars de TASSA, un RATLLES i l’altre TOPOS. L’objectiu és TASSA RATLLES; el distractor és TASSA TOPOS. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

134. **n7-134 · elefant · aixecar · tassa · topos**
   - Grup/tipus: insolita / drawing; precisió: aspecte / estampat.
   - Etiquetes: ELEFANT · AIXECAR · TASSA · TOPOS.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-e12d88415c80 · w-adecb8403118 · w-69c93e868621.
   - Parella: n7-i-17; contrast invers: n7-133.
   - Context distractor: TASSA (w-adecb8403118), RATLLES (w-19a396681127).
   - Visual: ELEFANT: dos exemplars de TASSA, un RATLLES i l’altre TOPOS. L’objectiu és TASSA TOPOS; el distractor és TASSA RATLLES. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

135. **n7-135 · zebra · portar · bossa · ratlles**
   - Grup/tipus: insolita / drawing; precisió: aspecte / estampat.
   - Etiquetes: ZEBRA · PORTAR · BOSSA · RATLLES.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-73b71e1ff757 · w-7db8d682fed4 · w-19a396681127.
   - Parella: n7-i-18; contrast invers: n7-136.
   - Context distractor: BOSSA (w-7db8d682fed4), TOPOS (w-69c93e868621).
   - Visual: ZEBRA: dos exemplars de BOSSA, un RATLLES i l’altre TOPOS. L’objectiu és BOSSA RATLLES; el distractor és BOSSA TOPOS. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

136. **n7-136 · zebra · portar · bossa · topos**
   - Grup/tipus: insolita / drawing; precisió: aspecte / estampat.
   - Etiquetes: ZEBRA · PORTAR · BOSSA · TOPOS.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-73b71e1ff757 · w-7db8d682fed4 · w-69c93e868621.
   - Parella: n7-i-18; contrast invers: n7-135.
   - Context distractor: BOSSA (w-7db8d682fed4), RATLLES (w-19a396681127).
   - Visual: ZEBRA: dos exemplars de BOSSA, un RATLLES i l’altre TOPOS. L’objectiu és BOSSA TOPOS; el distractor és BOSSA RATLLES. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

137. **n7-137 · cangur · tocar · coixí · ratlles**
   - Grup/tipus: insolita / drawing; precisió: aspecte / estampat.
   - Etiquetes: CANGUR · TOCAR · COIXÍ · RATLLES.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-072ecc01e120 · w-44260b79b61e · w-19a396681127.
   - Parella: n7-i-19; contrast invers: n7-138.
   - Context distractor: COIXÍ (w-44260b79b61e), TOPOS (w-69c93e868621).
   - Visual: CANGUR: dos exemplars de COIXÍ, un RATLLES i l’altre TOPOS. L’objectiu és COIXÍ RATLLES; el distractor és COIXÍ TOPOS. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

138. **n7-138 · cangur · tocar · coixí · topos**
   - Grup/tipus: insolita / drawing; precisió: aspecte / estampat.
   - Etiquetes: CANGUR · TOCAR · COIXÍ · TOPOS.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-072ecc01e120 · w-44260b79b61e · w-69c93e868621.
   - Parella: n7-i-19; contrast invers: n7-137.
   - Context distractor: COIXÍ (w-44260b79b61e), RATLLES (w-19a396681127).
   - Visual: CANGUR: dos exemplars de COIXÍ, un RATLLES i l’altre TOPOS. L’objectiu és COIXÍ TOPOS; el distractor és COIXÍ RATLLES. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

139. **n7-139 · girafa · aixecar · pilota · ratlles**
   - Grup/tipus: insolita / drawing; precisió: aspecte / estampat.
   - Etiquetes: GIRAFA · AIXECAR · PILOTA · RATLLES.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-e12d88415c80 · w-b7f578451973 · w-19a396681127.
   - Parella: n7-i-20; contrast invers: n7-140.
   - Context distractor: PILOTA (w-b7f578451973), TOPOS (w-69c93e868621).
   - Visual: GIRAFA: dos exemplars de PILOTA, un RATLLES i l’altre TOPOS. L’objectiu és PILOTA RATLLES; el distractor és PILOTA TOPOS. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

140. **n7-140 · girafa · aixecar · pilota · topos**
   - Grup/tipus: insolita / drawing; precisió: aspecte / estampat.
   - Etiquetes: GIRAFA · AIXECAR · PILOTA · TOPOS.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-e12d88415c80 · w-b7f578451973 · w-69c93e868621.
   - Parella: n7-i-20; contrast invers: n7-139.
   - Context distractor: PILOTA (w-b7f578451973), RATLLES (w-19a396681127).
   - Visual: GIRAFA: dos exemplars de PILOTA, un RATLLES i l’altre TOPOS. L’objectiu és PILOTA TOPOS; el distractor és PILOTA RATLLES. Mateix color de base i de motiu: un exemplar té franges amples contínues i l’altre punts rodons grans separats. Patró visible en una zona no tapada per la mà. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

141. **n7-141 · gat · agafar · plat · net**
   - Grup/tipus: insolita / drawing; precisió: estat / neteja.
   - Etiquetes: GAT · AGAFAR · PLAT · NET.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-677819a0a32a · w-55d250f4cf1e · w-8cc4542c0125.
   - Parella: n7-i-21; contrast invers: n7-142.
   - Context distractor: PLAT (w-55d250f4cf1e), BRUT (w-e8c7f0581229).
   - Visual: GAT: dos exemplars de PLAT, un NET i l’altre BRUT. L’objectiu és PLAT NET; el distractor és PLAT BRUT. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

142. **n7-142 · gat · agafar · plat · brut**
   - Grup/tipus: insolita / drawing; precisió: estat / neteja.
   - Etiquetes: GAT · AGAFAR · PLAT · BRUT.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-677819a0a32a · w-55d250f4cf1e · w-e8c7f0581229.
   - Parella: n7-i-21; contrast invers: n7-141.
   - Context distractor: PLAT (w-55d250f4cf1e), NET (w-8cc4542c0125).
   - Visual: GAT: dos exemplars de PLAT, un NET i l’altre BRUT. L’objectiu és PLAT BRUT; el distractor és PLAT NET. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

143. **n7-143 · gos · tocar · galleda · net**
   - Grup/tipus: insolita / drawing; precisió: estat / neteja.
   - Etiquetes: GOS · TOCAR · GALLEDA · NET.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-072ecc01e120 · w-7f04619a8649 · w-8cc4542c0125.
   - Parella: n7-i-22; contrast invers: n7-144.
   - Context distractor: GALLEDA (w-7f04619a8649), BRUT (w-e8c7f0581229).
   - Visual: GOS: dos exemplars de GALLEDA, un NET i l’altre BRUT. L’objectiu és GALLEDA NET; el distractor és GALLEDA BRUT. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

144. **n7-144 · gos · tocar · galleda · brut**
   - Grup/tipus: insolita / drawing; precisió: estat / neteja.
   - Etiquetes: GOS · TOCAR · GALLEDA · BRUT.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-072ecc01e120 · w-7f04619a8649 · w-e8c7f0581229.
   - Parella: n7-i-22; contrast invers: n7-143.
   - Context distractor: GALLEDA (w-7f04619a8649), NET (w-8cc4542c0125).
   - Visual: GOS: dos exemplars de GALLEDA, un NET i l’altre BRUT. L’objectiu és GALLEDA BRUT; el distractor és GALLEDA NET. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

145. **n7-145 · conill · aixecar · sabates · net**
   - Grup/tipus: insolita / drawing; precisió: estat / neteja.
   - Etiquetes: CONILL · AIXECAR · SABATES · NET.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-e12d88415c80 · w-6e2a67944770 · w-8cc4542c0125.
   - Parella: n7-i-23; contrast invers: n7-146.
   - Context distractor: SABATES (w-6e2a67944770), BRUT (w-e8c7f0581229).
   - Visual: CONILL: dos exemplars de SABATES, un NET i l’altre BRUT. L’objectiu és SABATES NET; el distractor és SABATES BRUT. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

146. **n7-146 · conill · aixecar · sabates · brut**
   - Grup/tipus: insolita / drawing; precisió: estat / neteja.
   - Etiquetes: CONILL · AIXECAR · SABATES · BRUT.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-e12d88415c80 · w-6e2a67944770 · w-e8c7f0581229.
   - Parella: n7-i-23; contrast invers: n7-145.
   - Context distractor: SABATES (w-6e2a67944770), NET (w-8cc4542c0125).
   - Visual: CONILL: dos exemplars de SABATES, un NET i l’altre BRUT. L’objectiu és SABATES BRUT; el distractor és SABATES NET. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

147. **n7-147 · ós · portar · pala · net**
   - Grup/tipus: insolita / drawing; precisió: estat / neteja.
   - Etiquetes: ÓS · PORTAR · PALA · NET.
   - wordIds, en el mateix ordre: w-a06249642996 · w-73b71e1ff757 · w-208167fa638f · w-8cc4542c0125.
   - Parella: n7-i-24; contrast invers: n7-148.
   - Context distractor: PALA (w-208167fa638f), BRUT (w-e8c7f0581229).
   - Visual: ÓS: dos exemplars de PALA, un NET i l’altre BRUT. L’objectiu és PALA NET; el distractor és PALA BRUT. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

148. **n7-148 · ós · portar · pala · brut**
   - Grup/tipus: insolita / drawing; precisió: estat / neteja.
   - Etiquetes: ÓS · PORTAR · PALA · BRUT.
   - wordIds, en el mateix ordre: w-a06249642996 · w-73b71e1ff757 · w-208167fa638f · w-e8c7f0581229.
   - Parella: n7-i-24; contrast invers: n7-147.
   - Context distractor: PALA (w-208167fa638f), NET (w-8cc4542c0125).
   - Visual: ÓS: dos exemplars de PALA, un NET i l’altre BRUT. L’objectiu és PALA BRUT; el distractor és PALA NET. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

149. **n7-149 · mico · tocar · caixa · net**
   - Grup/tipus: insolita / drawing; precisió: estat / neteja.
   - Etiquetes: MICO · TOCAR · CAIXA · NET.
   - wordIds, en el mateix ordre: w-12a87560751b · w-072ecc01e120 · w-696b7c739d30 · w-8cc4542c0125.
   - Parella: n7-i-25; contrast invers: n7-150.
   - Context distractor: CAIXA (w-696b7c739d30), BRUT (w-e8c7f0581229).
   - Visual: MICO: dos exemplars de CAIXA, un NET i l’altre BRUT. L’objectiu és CAIXA NET; el distractor és CAIXA BRUT. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

150. **n7-150 · mico · tocar · caixa · brut**
   - Grup/tipus: insolita / drawing; precisió: estat / neteja.
   - Etiquetes: MICO · TOCAR · CAIXA · BRUT.
   - wordIds, en el mateix ordre: w-12a87560751b · w-072ecc01e120 · w-696b7c739d30 · w-e8c7f0581229.
   - Parella: n7-i-25; contrast invers: n7-149.
   - Context distractor: CAIXA (w-696b7c739d30), NET (w-8cc4542c0125).
   - Visual: MICO: dos exemplars de CAIXA, un NET i l’altre BRUT. L’objectiu és CAIXA BRUT; el distractor és CAIXA NET. Un exemplar sense taques i l’altre amb diverses taques seques de terra clarament localitzades. Mateix color de base, tots dos secs i sencers. SABATES, quan correspon, són dos parells complets i equivalents. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

151. **n7-151 · pinguí · agafar · tovallola · sec**
   - Grup/tipus: insolita / drawing; precisió: estat / humitat.
   - Etiquetes: PINGUÍ · AGAFAR · TOVALLOLA · SEC.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-677819a0a32a · w-045fa0b1ae9d · w-88d8bd2c2fd2.
   - Parella: n7-i-26; contrast invers: n7-152.
   - Context distractor: TOVALLOLA (w-045fa0b1ae9d), MULLAT (w-8d5a009dde27).
   - Visual: PINGUÍ: dos exemplars de TOVALLOLA, un SEC i l’altre MULLAT. L’objectiu és TOVALLOLA SEC; el distractor és TOVALLOLA MULLAT. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

152. **n7-152 · pinguí · agafar · tovallola · mullat**
   - Grup/tipus: insolita / drawing; precisió: estat / humitat.
   - Etiquetes: PINGUÍ · AGAFAR · TOVALLOLA · MULLAT.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-677819a0a32a · w-045fa0b1ae9d · w-8d5a009dde27.
   - Parella: n7-i-26; contrast invers: n7-151.
   - Context distractor: TOVALLOLA (w-045fa0b1ae9d), SEC (w-88d8bd2c2fd2).
   - Visual: PINGUÍ: dos exemplars de TOVALLOLA, un SEC i l’altre MULLAT. L’objectiu és TOVALLOLA MULLAT; el distractor és TOVALLOLA SEC. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. La mà o extremitat agafa només el candidat seleccionat, iniciant la presa, amb l’objecte complet i la propietat descoberts. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

153. **n7-153 · elefant · tocar · mocador · sec**
   - Grup/tipus: insolita / drawing; precisió: estat / humitat.
   - Etiquetes: ELEFANT · TOCAR · MOCADOR · SEC.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-072ecc01e120 · w-35e3a6c8a7fd · w-88d8bd2c2fd2.
   - Parella: n7-i-27; contrast invers: n7-154.
   - Context distractor: MOCADOR (w-35e3a6c8a7fd), MULLAT (w-8d5a009dde27).
   - Visual: ELEFANT: dos exemplars de MOCADOR, un SEC i l’altre MULLAT. L’objectiu és MOCADOR SEC; el distractor és MOCADOR MULLAT. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

154. **n7-154 · elefant · tocar · mocador · mullat**
   - Grup/tipus: insolita / drawing; precisió: estat / humitat.
   - Etiquetes: ELEFANT · TOCAR · MOCADOR · MULLAT.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-072ecc01e120 · w-35e3a6c8a7fd · w-8d5a009dde27.
   - Parella: n7-i-27; contrast invers: n7-153.
   - Context distractor: MOCADOR (w-35e3a6c8a7fd), SEC (w-88d8bd2c2fd2).
   - Visual: ELEFANT: dos exemplars de MOCADOR, un SEC i l’altre MULLAT. L’objectiu és MOCADOR MULLAT; el distractor és MOCADOR SEC. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

155. **n7-155 · zebra · aixecar · esponja · sec**
   - Grup/tipus: insolita / drawing; precisió: estat / humitat.
   - Etiquetes: ZEBRA · AIXECAR · ESPONJA · SEC.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-e12d88415c80 · w-2d404e0d8979 · w-88d8bd2c2fd2.
   - Parella: n7-i-28; contrast invers: n7-156.
   - Context distractor: ESPONJA (w-2d404e0d8979), MULLAT (w-8d5a009dde27).
   - Visual: ZEBRA: dos exemplars de ESPONJA, un SEC i l’altre MULLAT. L’objectiu és ESPONJA SEC; el distractor és ESPONJA MULLAT. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

156. **n7-156 · zebra · aixecar · esponja · mullat**
   - Grup/tipus: insolita / drawing; precisió: estat / humitat.
   - Etiquetes: ZEBRA · AIXECAR · ESPONJA · MULLAT.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-e12d88415c80 · w-2d404e0d8979 · w-8d5a009dde27.
   - Parella: n7-i-28; contrast invers: n7-155.
   - Context distractor: ESPONJA (w-2d404e0d8979), SEC (w-88d8bd2c2fd2).
   - Visual: ZEBRA: dos exemplars de ESPONJA, un SEC i l’altre MULLAT. L’objectiu és ESPONJA MULLAT; el distractor és ESPONJA SEC. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. La mà o extremitat aixeca només el candidat seleccionat uns centímetres d’una base baixa; l’altre descansa a la mateixa base. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

157. **n7-157 · cangur · portar · samarreta · sec**
   - Grup/tipus: insolita / drawing; precisió: estat / humitat.
   - Etiquetes: CANGUR · PORTAR · SAMARRETA · SEC.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-73b71e1ff757 · w-0702f52b3b74 · w-88d8bd2c2fd2.
   - Parella: n7-i-29; contrast invers: n7-158.
   - Context distractor: SAMARRETA (w-0702f52b3b74), MULLAT (w-8d5a009dde27).
   - Visual: CANGUR: dos exemplars de SAMARRETA, un SEC i l’altre MULLAT. L’objectiu és SAMARRETA SEC; el distractor és SAMARRETA MULLAT. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

158. **n7-158 · cangur · portar · samarreta · mullat**
   - Grup/tipus: insolita / drawing; precisió: estat / humitat.
   - Etiquetes: CANGUR · PORTAR · SAMARRETA · MULLAT.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-73b71e1ff757 · w-0702f52b3b74 · w-8d5a009dde27.
   - Parella: n7-i-29; contrast invers: n7-157.
   - Context distractor: SAMARRETA (w-0702f52b3b74), SEC (w-88d8bd2c2fd2).
   - Visual: CANGUR: dos exemplars de SAMARRETA, un SEC i l’altre MULLAT. L’objectiu és SAMARRETA MULLAT; el distractor és SAMARRETA SEC. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. L’agent porta només el candidat seleccionat davant del cos mentre fa un pas; l’altre roman a una base baixa adjacent. La diferència de posició és efecte de l’acció, no el qualificador. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

159. **n7-159 · girafa · tocar · tovalló · sec**
   - Grup/tipus: insolita / drawing; precisió: estat / humitat.
   - Etiquetes: GIRAFA · TOCAR · TOVALLÓ · SEC.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-072ecc01e120 · w-b9ac8312c767 · w-88d8bd2c2fd2.
   - Parella: n7-i-30; contrast invers: n7-160.
   - Context distractor: TOVALLÓ (w-b9ac8312c767), MULLAT (w-8d5a009dde27).
   - Visual: GIRAFA: dos exemplars de TOVALLÓ, un SEC i l’altre MULLAT. L’objectiu és TOVALLÓ SEC; el distractor és TOVALLÓ MULLAT. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

160. **n7-160 · girafa · tocar · tovalló · mullat**
   - Grup/tipus: insolita / drawing; precisió: estat / humitat.
   - Etiquetes: GIRAFA · TOCAR · TOVALLÓ · MULLAT.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-072ecc01e120 · w-b9ac8312c767 · w-8d5a009dde27.
   - Parella: n7-i-30; contrast invers: n7-159.
   - Context distractor: TOVALLÓ (w-b9ac8312c767), SEC (w-88d8bd2c2fd2).
   - Visual: GIRAFA: dos exemplars de TOVALLÓ, un SEC i l’altre MULLAT. L’objectiu és TOVALLÓ MULLAT; el distractor és TOVALLÓ SEC. Un exemplar sec sense gotes i l’altre amb zona humida i gotes d’aigua visibles sota una vora; mateix material i color original, tots dos nets. El mullat no està submergit ni en una altra acció. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

161. **n7-161 · gat · tocar · got · ple**
   - Grup/tipus: insolita / drawing; precisió: estat / contingut.
   - Etiquetes: GAT · TOCAR · GOT · PLE.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-072ecc01e120 · w-1bed9f18ebab · w-427a0daa495d.
   - Parella: n7-i-31; contrast invers: n7-162.
   - Context distractor: GOT (w-1bed9f18ebab), BUIT (w-1d8378757b29).
   - Visual: GAT: dos exemplars de GOT, un PLE i l’altre BUIT. L’objectiu és GOT PLE; el distractor és GOT BUIT. Recipients oberts idèntics: un ple d’aigua fins prop de la vora amb superfície llegible i l’altre buit, amb el fons interior completament visible. Vista prou elevada, sense vessar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

162. **n7-162 · gat · tocar · got · buit**
   - Grup/tipus: insolita / drawing; precisió: estat / contingut.
   - Etiquetes: GAT · TOCAR · GOT · BUIT.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-072ecc01e120 · w-1bed9f18ebab · w-1d8378757b29.
   - Parella: n7-i-31; contrast invers: n7-161.
   - Context distractor: GOT (w-1bed9f18ebab), PLE (w-427a0daa495d).
   - Visual: GAT: dos exemplars de GOT, un PLE i l’altre BUIT. L’objectiu és GOT BUIT; el distractor és GOT PLE. Recipients oberts idèntics: un ple d’aigua fins prop de la vora amb superfície llegible i l’altre buit, amb el fons interior completament visible. Vista prou elevada, sense vessar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

163. **n7-163 · gos · tocar · tassa · ple**
   - Grup/tipus: insolita / drawing; precisió: estat / contingut.
   - Etiquetes: GOS · TOCAR · TASSA · PLE.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-072ecc01e120 · w-adecb8403118 · w-427a0daa495d.
   - Parella: n7-i-32; contrast invers: n7-164.
   - Context distractor: TASSA (w-adecb8403118), BUIT (w-1d8378757b29).
   - Visual: GOS: dos exemplars de TASSA, un PLE i l’altre BUIT. L’objectiu és TASSA PLE; el distractor és TASSA BUIT. Recipients oberts idèntics: un ple d’aigua fins prop de la vora amb superfície llegible i l’altre buit, amb el fons interior completament visible. Vista prou elevada, sense vessar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

164. **n7-164 · gos · tocar · tassa · buit**
   - Grup/tipus: insolita / drawing; precisió: estat / contingut.
   - Etiquetes: GOS · TOCAR · TASSA · BUIT.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-072ecc01e120 · w-adecb8403118 · w-1d8378757b29.
   - Parella: n7-i-32; contrast invers: n7-163.
   - Context distractor: TASSA (w-adecb8403118), PLE (w-427a0daa495d).
   - Visual: GOS: dos exemplars de TASSA, un PLE i l’altre BUIT. L’objectiu és TASSA BUIT; el distractor és TASSA PLE. Recipients oberts idèntics: un ple d’aigua fins prop de la vora amb superfície llegible i l’altre buit, amb el fons interior completament visible. Vista prou elevada, sense vessar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

165. **n7-165 · conill · tocar · galleda · ple**
   - Grup/tipus: insolita / drawing; precisió: estat / contingut.
   - Etiquetes: CONILL · TOCAR · GALLEDA · PLE.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-072ecc01e120 · w-7f04619a8649 · w-427a0daa495d.
   - Parella: n7-i-33; contrast invers: n7-166.
   - Context distractor: GALLEDA (w-7f04619a8649), BUIT (w-1d8378757b29).
   - Visual: CONILL: dos exemplars de GALLEDA, un PLE i l’altre BUIT. L’objectiu és GALLEDA PLE; el distractor és GALLEDA BUIT. Recipients oberts idèntics: un ple d’aigua fins prop de la vora amb superfície llegible i l’altre buit, amb el fons interior completament visible. Vista prou elevada, sense vessar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

166. **n7-166 · conill · tocar · galleda · buit**
   - Grup/tipus: insolita / drawing; precisió: estat / contingut.
   - Etiquetes: CONILL · TOCAR · GALLEDA · BUIT.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-072ecc01e120 · w-7f04619a8649 · w-1d8378757b29.
   - Parella: n7-i-33; contrast invers: n7-165.
   - Context distractor: GALLEDA (w-7f04619a8649), PLE (w-427a0daa495d).
   - Visual: CONILL: dos exemplars de GALLEDA, un PLE i l’altre BUIT. L’objectiu és GALLEDA BUIT; el distractor és GALLEDA PLE. Recipients oberts idèntics: un ple d’aigua fins prop de la vora amb superfície llegible i l’altre buit, amb el fons interior completament visible. Vista prou elevada, sense vessar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

167. **n7-167 · ós · tocar · carmanyola · ple**
   - Grup/tipus: insolita / drawing; precisió: estat / contingut.
   - Etiquetes: ÓS · TOCAR · CARMANYOLA · PLE.
   - wordIds, en el mateix ordre: w-a06249642996 · w-072ecc01e120 · w-c3b8bd56e942 · w-427a0daa495d.
   - Parella: n7-i-34; contrast invers: n7-168.
   - Context distractor: CARMANYOLA (w-c3b8bd56e942), BUIT (w-1d8378757b29).
   - Visual: ÓS: dos exemplars de CARMANYOLA, un PLE i l’altre BUIT. L’objectiu és CARMANYOLA PLE; el distractor és CARMANYOLA BUIT. Carmanyoles obertes idèntiques, sense tapa: una plena fins a la vora de peces de fusta neutres i l’altra amb el fons interior completament visible. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

168. **n7-168 · ós · tocar · carmanyola · buit**
   - Grup/tipus: insolita / drawing; precisió: estat / contingut.
   - Etiquetes: ÓS · TOCAR · CARMANYOLA · BUIT.
   - wordIds, en el mateix ordre: w-a06249642996 · w-072ecc01e120 · w-c3b8bd56e942 · w-1d8378757b29.
   - Parella: n7-i-34; contrast invers: n7-167.
   - Context distractor: CARMANYOLA (w-c3b8bd56e942), PLE (w-427a0daa495d).
   - Visual: ÓS: dos exemplars de CARMANYOLA, un PLE i l’altre BUIT. L’objectiu és CARMANYOLA BUIT; el distractor és CARMANYOLA PLE. Carmanyoles obertes idèntiques, sense tapa: una plena fins a la vora de peces de fusta neutres i l’altra amb el fons interior completament visible. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

169. **n7-169 · mico · tocar · cistell · ple**
   - Grup/tipus: insolita / drawing; precisió: estat / contingut.
   - Etiquetes: MICO · TOCAR · CISTELL · PLE.
   - wordIds, en el mateix ordre: w-12a87560751b · w-072ecc01e120 · w-120fb6b37e88 · w-427a0daa495d.
   - Parella: n7-i-35; contrast invers: n7-170.
   - Context distractor: CISTELL (w-120fb6b37e88), BUIT (w-1d8378757b29).
   - Visual: MICO: dos exemplars de CISTELL, un PLE i l’altre BUIT. L’objectiu és CISTELL PLE; el distractor és CISTELL BUIT. Cistells oberts idèntics: un ple fins a la vora de peces de fusta neutres i l’altre amb el fons interior completament visible. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a dreta; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

170. **n7-170 · mico · tocar · cistell · buit**
   - Grup/tipus: insolita / drawing; precisió: estat / contingut.
   - Etiquetes: MICO · TOCAR · CISTELL · BUIT.
   - wordIds, en el mateix ordre: w-12a87560751b · w-072ecc01e120 · w-120fb6b37e88 · w-1d8378757b29.
   - Parella: n7-i-35; contrast invers: n7-169.
   - Context distractor: CISTELL (w-120fb6b37e88), PLE (w-427a0daa495d).
   - Visual: MICO: dos exemplars de CISTELL, un PLE i l’altre BUIT. L’objectiu és CISTELL BUIT; el distractor és CISTELL PLE. Cistells oberts idèntics: un ple fins a la vora de peces de fusta neutres i l’altre amb el fons interior completament visible. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. Situar inicialment el seleccionat a esquerra; invertir el contacte en el company de parella. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

171. **n7-171 · pinguí · tocar · pilota · dins · caixa**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: PINGUÍ · TOCAR · PILOTA · DINS · CAIXA.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-072ecc01e120 · w-b7f578451973 · w-f871f670a944 · w-696b7c739d30.
   - Parella: n7-i-36; contrast invers: n7-172.
   - Context distractor: PILOTA (w-b7f578451973), FORA (w-9daa4c89a9c6).
   - Visual: PINGUÍ: dos exemplars de PILOTA, un DINS i l’altre FORA, respecte d’un únic suport CAIXA. L’objectiu és PILOTA DINS; el distractor és PILOTA FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

172. **n7-172 · pinguí · tocar · pilota · fora · caixa**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: PINGUÍ · TOCAR · PILOTA · FORA · CAIXA.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-072ecc01e120 · w-b7f578451973 · w-9daa4c89a9c6 · w-696b7c739d30.
   - Parella: n7-i-36; contrast invers: n7-171.
   - Context distractor: PILOTA (w-b7f578451973), DINS (w-f871f670a944).
   - Visual: PINGUÍ: dos exemplars de PILOTA, un DINS i l’altre FORA, respecte d’un únic suport CAIXA. L’objectiu és PILOTA FORA; el distractor és PILOTA DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

173. **n7-173 · elefant · tocar · llapis · dins · got**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: ELEFANT · TOCAR · LLAPIS · DINS · GOT.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-072ecc01e120 · w-1775aa96869e · w-f871f670a944 · w-1bed9f18ebab.
   - Parella: n7-i-37; contrast invers: n7-174.
   - Context distractor: LLAPIS (w-1775aa96869e), FORA (w-9daa4c89a9c6).
   - Visual: ELEFANT: dos exemplars de LLAPIS, un DINS i l’altre FORA, respecte d’un únic suport GOT. L’objectiu és LLAPIS DINS; el distractor és LLAPIS FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

174. **n7-174 · elefant · tocar · llapis · fora · got**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: ELEFANT · TOCAR · LLAPIS · FORA · GOT.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-072ecc01e120 · w-1775aa96869e · w-9daa4c89a9c6 · w-1bed9f18ebab.
   - Parella: n7-i-37; contrast invers: n7-173.
   - Context distractor: LLAPIS (w-1775aa96869e), DINS (w-f871f670a944).
   - Visual: ELEFANT: dos exemplars de LLAPIS, un DINS i l’altre FORA, respecte d’un únic suport GOT. L’objectiu és LLAPIS FORA; el distractor és LLAPIS DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

175. **n7-175 · zebra · tocar · poma · dins · cistell**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: ZEBRA · TOCAR · POMA · DINS · CISTELL.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-072ecc01e120 · w-809c680b5699 · w-f871f670a944 · w-120fb6b37e88.
   - Parella: n7-i-38; contrast invers: n7-176.
   - Context distractor: POMA (w-809c680b5699), FORA (w-9daa4c89a9c6).
   - Visual: ZEBRA: dos exemplars de POMA, un DINS i l’altre FORA, respecte d’un únic suport CISTELL. L’objectiu és POMA DINS; el distractor és POMA FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

176. **n7-176 · zebra · tocar · poma · fora · cistell**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: ZEBRA · TOCAR · POMA · FORA · CISTELL.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-072ecc01e120 · w-809c680b5699 · w-9daa4c89a9c6 · w-120fb6b37e88.
   - Parella: n7-i-38; contrast invers: n7-175.
   - Context distractor: POMA (w-809c680b5699), DINS (w-f871f670a944).
   - Visual: ZEBRA: dos exemplars de POMA, un DINS i l’altre FORA, respecte d’un únic suport CISTELL. L’objectiu és POMA FORA; el distractor és POMA DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

177. **n7-177 · cangur · tocar · nina · dins · caixa**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: CANGUR · TOCAR · NINA · DINS · CAIXA.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-072ecc01e120 · w-db89958a3c63 · w-f871f670a944 · w-696b7c739d30.
   - Parella: n7-i-39; contrast invers: n7-178.
   - Context distractor: NINA (w-db89958a3c63), FORA (w-9daa4c89a9c6).
   - Visual: CANGUR: dos exemplars de NINA, un DINS i l’altre FORA, respecte d’un únic suport CAIXA. L’objectiu és NINA DINS; el distractor és NINA FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

178. **n7-178 · cangur · tocar · nina · fora · caixa**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: CANGUR · TOCAR · NINA · FORA · CAIXA.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-072ecc01e120 · w-db89958a3c63 · w-9daa4c89a9c6 · w-696b7c739d30.
   - Parella: n7-i-39; contrast invers: n7-177.
   - Context distractor: NINA (w-db89958a3c63), DINS (w-f871f670a944).
   - Visual: CANGUR: dos exemplars de NINA, un DINS i l’altre FORA, respecte d’un únic suport CAIXA. L’objectiu és NINA FORA; el distractor és NINA DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

179. **n7-179 · girafa · tocar · mocador · dins · bossa**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: GIRAFA · TOCAR · MOCADOR · DINS · BOSSA.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-072ecc01e120 · w-35e3a6c8a7fd · w-f871f670a944 · w-7db8d682fed4.
   - Parella: n7-i-40; contrast invers: n7-180.
   - Context distractor: MOCADOR (w-35e3a6c8a7fd), FORA (w-9daa4c89a9c6).
   - Visual: GIRAFA: dos exemplars de MOCADOR, un DINS i l’altre FORA, respecte d’un únic suport BOSSA. L’objectiu és MOCADOR DINS; el distractor és MOCADOR FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

180. **n7-180 · girafa · tocar · mocador · fora · bossa**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: GIRAFA · TOCAR · MOCADOR · FORA · BOSSA.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-072ecc01e120 · w-35e3a6c8a7fd · w-9daa4c89a9c6 · w-7db8d682fed4.
   - Parella: n7-i-40; contrast invers: n7-179.
   - Context distractor: MOCADOR (w-35e3a6c8a7fd), DINS (w-f871f670a944).
   - Visual: GIRAFA: dos exemplars de MOCADOR, un DINS i l’altre FORA, respecte d’un únic suport BOSSA. L’objectiu és MOCADOR FORA; el distractor és MOCADOR DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

181. **n7-181 · gat · tocar · cullera · dins · carmanyola**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: GAT · TOCAR · CULLERA · DINS · CARMANYOLA.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-072ecc01e120 · w-9c9849fac1d3 · w-f871f670a944 · w-c3b8bd56e942.
   - Parella: n7-i-41; contrast invers: n7-182.
   - Context distractor: CULLERA (w-9c9849fac1d3), FORA (w-9daa4c89a9c6).
   - Visual: GAT: dos exemplars de CULLERA, un DINS i l’altre FORA, respecte d’un únic suport CARMANYOLA. L’objectiu és CULLERA DINS; el distractor és CULLERA FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

182. **n7-182 · gat · tocar · cullera · fora · carmanyola**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: GAT · TOCAR · CULLERA · FORA · CARMANYOLA.
   - wordIds, en el mateix ordre: w-11ff74d27c02 · w-072ecc01e120 · w-9c9849fac1d3 · w-9daa4c89a9c6 · w-c3b8bd56e942.
   - Parella: n7-i-41; contrast invers: n7-181.
   - Context distractor: CULLERA (w-9c9849fac1d3), DINS (w-f871f670a944).
   - Visual: GAT: dos exemplars de CULLERA, un DINS i l’altre FORA, respecte d’un únic suport CARMANYOLA. L’objectiu és CULLERA FORA; el distractor és CULLERA DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

183. **n7-183 · gos · tocar · coixí · dins · cistell**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: GOS · TOCAR · COIXÍ · DINS · CISTELL.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-072ecc01e120 · w-44260b79b61e · w-f871f670a944 · w-120fb6b37e88.
   - Parella: n7-i-42; contrast invers: n7-184.
   - Context distractor: COIXÍ (w-44260b79b61e), FORA (w-9daa4c89a9c6).
   - Visual: GOS: dos exemplars de COIXÍ, un DINS i l’altre FORA, respecte d’un únic suport CISTELL. L’objectiu és COIXÍ DINS; el distractor és COIXÍ FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

184. **n7-184 · gos · tocar · coixí · fora · cistell**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: GOS · TOCAR · COIXÍ · FORA · CISTELL.
   - wordIds, en el mateix ordre: w-4761fde107a7 · w-072ecc01e120 · w-44260b79b61e · w-9daa4c89a9c6 · w-120fb6b37e88.
   - Parella: n7-i-42; contrast invers: n7-183.
   - Context distractor: COIXÍ (w-44260b79b61e), DINS (w-f871f670a944).
   - Visual: GOS: dos exemplars de COIXÍ, un DINS i l’altre FORA, respecte d’un únic suport CISTELL. L’objectiu és COIXÍ FORA; el distractor és COIXÍ DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

185. **n7-185 · conill · tocar · esponja · dins · galleda**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: CONILL · TOCAR · ESPONJA · DINS · GALLEDA.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-072ecc01e120 · w-2d404e0d8979 · w-f871f670a944 · w-7f04619a8649.
   - Parella: n7-i-43; contrast invers: n7-186.
   - Context distractor: ESPONJA (w-2d404e0d8979), FORA (w-9daa4c89a9c6).
   - Visual: CONILL: dos exemplars de ESPONJA, un DINS i l’altre FORA, respecte d’un únic suport GALLEDA. L’objectiu és ESPONJA DINS; el distractor és ESPONJA FORA. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

186. **n7-186 · conill · tocar · esponja · fora · galleda**
   - Grup/tipus: insolita / drawing; precisió: posicio / interior.
   - Etiquetes: CONILL · TOCAR · ESPONJA · FORA · GALLEDA.
   - wordIds, en el mateix ordre: w-51a7805e979b · w-072ecc01e120 · w-2d404e0d8979 · w-9daa4c89a9c6 · w-7f04619a8649.
   - Parella: n7-i-43; contrast invers: n7-185.
   - Context distractor: ESPONJA (w-2d404e0d8979), DINS (w-f871f670a944).
   - Visual: CONILL: dos exemplars de ESPONJA, un DINS i l’altre FORA, respecte d’un únic suport GALLEDA. L’objectiu és ESPONJA FORA; el distractor és ESPONJA DINS. Un exemplar dins un recipient obert baix i l’altre fora, al costat i separat de la vora. El de dins és completament visible des de dalt; recipient proporcionat a l’objecte. La mà toca sense extreure ni desplaçar. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

187. **n7-187 · ós · tocar · pilota · sobre · taula**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: ÓS · TOCAR · PILOTA · SOBRE · TAULA.
   - wordIds, en el mateix ordre: w-a06249642996 · w-072ecc01e120 · w-b7f578451973 · w-d44584204864 · w-1544f4efec59.
   - Parella: n7-i-44; contrast invers: n7-188.
   - Context distractor: PILOTA (w-b7f578451973), SOTA (w-e0a6aeb46069).
   - Visual: ÓS: dos exemplars de PILOTA, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és PILOTA SOBRE; el distractor és PILOTA SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

188. **n7-188 · ós · tocar · pilota · sota · taula**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: ÓS · TOCAR · PILOTA · SOTA · TAULA.
   - wordIds, en el mateix ordre: w-a06249642996 · w-072ecc01e120 · w-b7f578451973 · w-e0a6aeb46069 · w-1544f4efec59.
   - Parella: n7-i-44; contrast invers: n7-187.
   - Context distractor: PILOTA (w-b7f578451973), SOBRE (w-d44584204864).
   - Visual: ÓS: dos exemplars de PILOTA, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és PILOTA SOTA; el distractor és PILOTA SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

189. **n7-189 · mico · tocar · llibre · sobre · cadira**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: MICO · TOCAR · LLIBRE · SOBRE · CADIRA.
   - wordIds, en el mateix ordre: w-12a87560751b · w-072ecc01e120 · w-3bb995df42bf · w-d44584204864 · w-e1efe2c4e23d.
   - Parella: n7-i-45; contrast invers: n7-190.
   - Context distractor: LLIBRE (w-3bb995df42bf), SOTA (w-e0a6aeb46069).
   - Visual: MICO: dos exemplars de LLIBRE, un SOBRE i l’altre SOTA, respecte d’un únic suport CADIRA. L’objectiu és LLIBRE SOBRE; el distractor és LLIBRE SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

190. **n7-190 · mico · tocar · llibre · sota · cadira**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: MICO · TOCAR · LLIBRE · SOTA · CADIRA.
   - wordIds, en el mateix ordre: w-12a87560751b · w-072ecc01e120 · w-3bb995df42bf · w-e0a6aeb46069 · w-e1efe2c4e23d.
   - Parella: n7-i-45; contrast invers: n7-189.
   - Context distractor: LLIBRE (w-3bb995df42bf), SOBRE (w-d44584204864).
   - Visual: MICO: dos exemplars de LLIBRE, un SOBRE i l’altre SOTA, respecte d’un únic suport CADIRA. L’objectiu és LLIBRE SOTA; el distractor és LLIBRE SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

191. **n7-191 · pinguí · tocar · coixí · sobre · taula**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: PINGUÍ · TOCAR · COIXÍ · SOBRE · TAULA.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-072ecc01e120 · w-44260b79b61e · w-d44584204864 · w-1544f4efec59.
   - Parella: n7-i-46; contrast invers: n7-192.
   - Context distractor: COIXÍ (w-44260b79b61e), SOTA (w-e0a6aeb46069).
   - Visual: PINGUÍ: dos exemplars de COIXÍ, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és COIXÍ SOBRE; el distractor és COIXÍ SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

192. **n7-192 · pinguí · tocar · coixí · sota · taula**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: PINGUÍ · TOCAR · COIXÍ · SOTA · TAULA.
   - wordIds, en el mateix ordre: w-5993b1ea57aa · w-072ecc01e120 · w-44260b79b61e · w-e0a6aeb46069 · w-1544f4efec59.
   - Parella: n7-i-46; contrast invers: n7-191.
   - Context distractor: COIXÍ (w-44260b79b61e), SOBRE (w-d44584204864).
   - Visual: PINGUÍ: dos exemplars de COIXÍ, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és COIXÍ SOTA; el distractor és COIXÍ SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

193. **n7-193 · elefant · tocar · motxilla · sobre · cadira**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: ELEFANT · TOCAR · MOTXILLA · SOBRE · CADIRA.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-072ecc01e120 · w-43db0ea26088 · w-d44584204864 · w-e1efe2c4e23d.
   - Parella: n7-i-47; contrast invers: n7-194.
   - Context distractor: MOTXILLA (w-43db0ea26088), SOTA (w-e0a6aeb46069).
   - Visual: ELEFANT: dos exemplars de MOTXILLA, un SOBRE i l’altre SOTA, respecte d’un únic suport CADIRA. L’objectiu és MOTXILLA SOBRE; el distractor és MOTXILLA SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

194. **n7-194 · elefant · tocar · motxilla · sota · cadira**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: ELEFANT · TOCAR · MOTXILLA · SOTA · CADIRA.
   - wordIds, en el mateix ordre: w-b059d8ef0bc9 · w-072ecc01e120 · w-43db0ea26088 · w-e0a6aeb46069 · w-e1efe2c4e23d.
   - Parella: n7-i-47; contrast invers: n7-193.
   - Context distractor: MOTXILLA (w-43db0ea26088), SOBRE (w-d44584204864).
   - Visual: ELEFANT: dos exemplars de MOTXILLA, un SOBRE i l’altre SOTA, respecte d’un únic suport CADIRA. L’objectiu és MOTXILLA SOTA; el distractor és MOTXILLA SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

195. **n7-195 · zebra · tocar · galleda · sobre · taula**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: ZEBRA · TOCAR · GALLEDA · SOBRE · TAULA.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-072ecc01e120 · w-7f04619a8649 · w-d44584204864 · w-1544f4efec59.
   - Parella: n7-i-48; contrast invers: n7-196.
   - Context distractor: GALLEDA (w-7f04619a8649), SOTA (w-e0a6aeb46069).
   - Visual: ZEBRA: dos exemplars de GALLEDA, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és GALLEDA SOBRE; el distractor és GALLEDA SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

196. **n7-196 · zebra · tocar · galleda · sota · taula**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: ZEBRA · TOCAR · GALLEDA · SOTA · TAULA.
   - wordIds, en el mateix ordre: w-0dc8fba9677d · w-072ecc01e120 · w-7f04619a8649 · w-e0a6aeb46069 · w-1544f4efec59.
   - Parella: n7-i-48; contrast invers: n7-195.
   - Context distractor: GALLEDA (w-7f04619a8649), SOBRE (w-d44584204864).
   - Visual: ZEBRA: dos exemplars de GALLEDA, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és GALLEDA SOTA; el distractor és GALLEDA SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

197. **n7-197 · cangur · tocar · tassa · sobre · taula**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: CANGUR · TOCAR · TASSA · SOBRE · TAULA.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-072ecc01e120 · w-adecb8403118 · w-d44584204864 · w-1544f4efec59.
   - Parella: n7-i-49; contrast invers: n7-198.
   - Context distractor: TASSA (w-adecb8403118), SOTA (w-e0a6aeb46069).
   - Visual: CANGUR: dos exemplars de TASSA, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és TASSA SOBRE; el distractor és TASSA SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

198. **n7-198 · cangur · tocar · tassa · sota · taula**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: CANGUR · TOCAR · TASSA · SOTA · TAULA.
   - wordIds, en el mateix ordre: w-d5395d03acbf · w-072ecc01e120 · w-adecb8403118 · w-e0a6aeb46069 · w-1544f4efec59.
   - Parella: n7-i-49; contrast invers: n7-197.
   - Context distractor: TASSA (w-adecb8403118), SOBRE (w-d44584204864).
   - Visual: CANGUR: dos exemplars de TASSA, un SOBRE i l’altre SOTA, respecte d’un únic suport TAULA. L’objectiu és TASSA SOTA; el distractor és TASSA SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

199. **n7-199 · girafa · tocar · carmanyola · sobre · cadira**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: GIRAFA · TOCAR · CARMANYOLA · SOBRE · CADIRA.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-072ecc01e120 · w-c3b8bd56e942 · w-d44584204864 · w-e1efe2c4e23d.
   - Parella: n7-i-50; contrast invers: n7-200.
   - Context distractor: CARMANYOLA (w-c3b8bd56e942), SOTA (w-e0a6aeb46069).
   - Visual: GIRAFA: dos exemplars de CARMANYOLA, un SOBRE i l’altre SOTA, respecte d’un únic suport CADIRA. L’objectiu és CARMANYOLA SOBRE; el distractor és CARMANYOLA SOTA. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.

200. **n7-200 · girafa · tocar · carmanyola · sota · cadira**
   - Grup/tipus: insolita / drawing; precisió: posicio / vertical.
   - Etiquetes: GIRAFA · TOCAR · CARMANYOLA · SOTA · CADIRA.
   - wordIds, en el mateix ordre: w-e60f76be7b6c · w-072ecc01e120 · w-c3b8bd56e942 · w-e0a6aeb46069 · w-e1efe2c4e23d.
   - Parella: n7-i-50; contrast invers: n7-199.
   - Context distractor: CARMANYOLA (w-c3b8bd56e942), SOBRE (w-d44584204864).
   - Visual: GIRAFA: dos exemplars de CARMANYOLA, un SOBRE i l’altre SOTA, respecte d’un únic suport CADIRA. L’objectiu és CARMANYOLA SOTA; el distractor és CARMANYOLA SOBRE. Un exemplar descansa sobre la superfície del suport i l’altre al terra, sota aquella mateixa superfície i entre les potes. Suport obert sense travessers que ocultin; els dos candidats queden complets i accessibles. La mà toca sense moure. Un dit o extremitat toca només el candidat seleccionat; l’altra mà o extremitat queda apartada dels dos candidats. No s’assenyala a distància. La disposició espacial segueix la relació etiquetada; la cambra es pot invertir sense canviar SOBRE/SOTA o DINS/FORA. Animal antropomòrfic amable, cos sencer recognoscible, fent l’acció humana; dibuix pla. Fons blanc, marges amplis, una sola acció, cap text ni marques.
