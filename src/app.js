/* CACE Imatges 0.1 — browser-local catalogue, no remote writes. */
'use strict';
const CATALOG=JSON.parse(document.getElementById('catalog-data').textContent);
const WORDS=new Map(CATALOG.words.map(w=>[w.id,w]));
const CATEGORIES=new Map(CATALOG.categories.map(c=>[c.id,c]));
const LEVELS=new Map(CATALOG.levels.map(l=>[l.id,l]));
const BASE=new Map(CATALOG.assets.map(a=>[a.id,a]));
const DEFAULT_COLLECTIONS=new Map((CATALOG.collections||[]).map(c=>[c.id,c]));
const LEGACY_MEDIA_COLLECTIONS=new Map([
  ['cace-unitats-fotografies',['Fotografies · paraules individuals','foto-']],
  ['cace-unitats-realistes',['Dibuix realista · paraules individuals','realista-']],
  ['cace-unitats-planes',['Il·lustració plana · paraules individuals','pla-']],
]);
const $=s=>document.querySelector(s);
const uid=()=>window.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,12);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const norm=v=>String(v??'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[·.,;!?¿¡()[\]{}]/g,' ').replace(/\s+/g,' ').trim();
const paths={
search:'<circle cx="10.5" cy="10.5" r="6.8"/><path d="m16 16 4.5 4.5"/>',
image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1.5"/><path d="m3 16 5-5 5 5 4-4 4 4"/>',
heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
folder:'<path d="M3 6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
layers:'<path d="m12 3 10 5-10 5L2 8Z"/><path d="m2 12 10 5 10-5M2 16l10 5 10-5"/>',
grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
list:'<path d="M9 5h12M9 12h12M9 19h12M3 5h1M3 12h1M3 19h1"/>',
person:'<circle cx="12" cy="7" r="4"/><path d="M4 21v-2a8 8 0 0 1 16 0v2Z"/>',
leaf:'<path d="M20 3c-9-1-16 3-16 10a6 6 0 0 0 6 6c7 0 11-7 10-16Z"/><path d="M3 21 15 9"/>',
ball:'<circle cx="12" cy="12" r="9"/><path d="m9 8 6 0 2 5-5 4-5-4Zm0 0L7 4m8 4 2-4m0 9 4 1m-9 3v4m-5-8-4 1"/>',
help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 8a2.6 2.6 0 0 1 5 1c0 2-2.5 2-2.5 4M12 17h.01"/>',
activity:'<path d="m3 12 4-1 4 6 3-13 3 8h4"/>',
sparkles:'<path d="m12 3 3 6 6 3-6 3-3 6-3-6-6-3 6-3Z"/>',
plus:'<path d="M12 4v16M4 12h16"/>',
shirt:'<path d="m8 3 4 3 4-3 6 5-4 4-2-2v11H8V10l-2 2-4-4Z"/>',
apple:'<path d="M12 7c-6-4-11 1-8 8 2 6 5 7 8 5 3 2 6 1 8-5 3-7-2-12-8-8Z"/><path d="M12 7V4m0 1c2-4 5-4 6-3-1 3-3 4-6 3Z"/>',
box:'<path d="m12 2 9 5v10l-9 5-9-5V7Z"/><path d="m3 7 9 5 9-5M12 12v10m-4.5-17.5 9 5"/>',
palette:'<path d="M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 1-4c-2-1-1-3 1-3h2a3 3 0 0 0 3-3c0-5-4-8-9-8Z"/><path d="M7 10h.01M10 7h.01M15 7h.01M6 14h.01"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
chair:'<path d="M6 4h12v10H6Zm-2 10h16v4H4Zm2 4v4m12-4v4M7 4V2m10 2V2"/>',
car:'<path d="m5 6 2-3h10l2 3 2 7v6H3v-6Zm-1 6h16M5 19v3m14-3v3M6 16h2m8 0h2"/>',
compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2 6-6 2 2-6Z"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6m10-6v6M3 11h18m-13 4h1m5 0h1"/>',
message:'<path d="M21 12a9 9 0 0 1-9 9H3l2-5a9 9 0 1 1 16-4Z"/><path d="M8 10h8m-8 4h5"/>',
close:'<path d="m6 6 12 12M18 6 6 18"/>',
chevron:'<path d="m9 5 7 7-7 7"/>',
down:'<path d="m6 9 6 6 6-6"/>',
arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
back:'<path d="M19 12H5m6-6-6 6 6 6"/>',
expand:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
shrink:'<path d="M3 8h5V3m8 0v5h5M8 21v-5H3m18 0h-5v5"/>',
download:'<path d="M12 3v12m-5-5 5 5 5-5M3 16v5h18v-5"/>',
upload:'<path d="M12 16V3m-5 5 5-5 5 5M3 16v5h18v-5"/>',
edit:'<path d="m16 3 5 5-12 12H4v-5Zm-2 2 5 5"/>',
check:'<path d="m4 12 5 5 11-11"/>',
menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
eyeoff:'<path d="m3 3 18 18M9 5c7-2 13 7 13 7a19 19 0 0 1-4 4M6 6a20 20 0 0 0-4 6s4 7 10 7c2 0 4-1 5-2"/>',
print:'<path d="M6 8V3h12v5M6 18H3V9h18v9h-3M6 14h12v8H6Zm11-3h1"/>',
backup:'<path d="M3 10a9 9 0 1 1 2 8M3 3v7h7"/><path d="M12 7v5l4 2"/>',
trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/>',
info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10h.01"/>',
camera:'<path d="M3 7h4l2-3h6l2 3h4v14H3Z"/><circle cx="12" cy="13" r="4"/>',
pencil:'<path d="m16 3 5 5-12 12H4v-5Zm-2 2 5 5"/>'
};
const icon=(name,cls='')=>`<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true">${paths[name]||paths.image}</svg>`;
const strings={
ca:{library:'Biblioteca',favorites:'Preferides',collections:'Col·leccions',visualLibrary:'Biblioteca visual',categories:'Categories CACE',allCategories:'Totes les categories',moreCategories:'Veure totes les categories',lessCategories:'Mostrar menys categories',title:'La teva biblioteca d’imatges',subtitle:'Fotografies i dibuixos per explorar i treballar el vocabulari CACE.',addImages:'Afegir imatges',newCollection:'Nova col·lecció',all:'Totes',photos:'Fotografies',drawings:'Dibuixos',photo:'Fotografia',drawing:'Dibuix',search:'Cerca per paraules CACE…',clearSearch:'Netejar cerca',grid:'Vista de galeria',list:'Vista de llista',initialOrder:'Ordre inicial',alphabetic:'Ordre alfabètic',newFirst:'Més recents',image:'imatge',images:'imatges',level:'Nivell',clearFilters:'Netejar filtres',contains:'Conté',allWords:'totes les paraules',anyWord:'alguna paraula',noResults:'Encara no hi ha imatges per a aquesta cerca',noResultsDesc:'Prova una altra paraula o categoria, o afegeix una imatge amb aquestes etiquetes.',noFavorites:'Les teves imatges preferides, aquí',noFavoritesDesc:'Marca el cor d’una imatge per tenir-la sempre a mà.',addTo:'Afegir a una col·lecció',view:'Veure imatge',fullscreen:'Pantalla completa',exitFullscreen:'Sortir de pantalla completa',previous:'Imatge anterior',next:'Imatge següent',otherImages:'Altres imatges',hideLabels:'Ocultar textos',showLabels:'Mostrar textos',hideControls:'Ocultar controls',showControls:'Mostrar controls',backLibrary:'Tornar a la biblioteca',download:'Descarregar imatge',print:'Imprimir',edit:'Editar fitxa',close:'Tancar',cancel:'Cancel·lar',save:'Desar',saved:'Canvis desats',name:'Nom',nameEs:'Nom en castellà (opcional)',description:'Descripció',words:'Paraules CACE',findWords:'Cerca i afegeix paraules CACE…',noWord:'No s’ha trobat cap paraula CACE.',selectWords:'Afegeix almenys una paraula CACE.',selectLevels:'Tria almenys un nivell.',chooseFiles:'Tria imatges o arrossega-les aquí',fileTypes:'PNG, JPG o WEBP · fins a 25 MB per imatge',fileCount:'imatges seleccionades',imageType:'Tipus d’imatge',levels:'Nivells de la jerarquia',editImage:'Editar la fitxa de la imatge',addImageTitle:'Afegir imatges a la biblioteca',addedImages:'Imatges afegides',pickFile:'Tria almenys una imatge.',invalidFile:'Aquest arxiu no és una imatge PNG, JPG o WEBP vàlida de fins a 25 MB.',noCollections:'Prepara la teva primera col·lecció',noCollectionsDesc:'Agrupa imatges per a una sessió, un tema o un objectiu de treball.',collectionName:'Nom de la col·lecció',collectionHint:'Per exemple, materials per a una sessió de llenguatge.',create:'Crear',createdCollection:'Col·lecció creada',emptyCollection:'Aquesta col·lecció encara és buida',emptyCollectionDesc:'Afegeix-hi imatges des de la biblioteca amb el botó de col·lecció.',browseLibrary:'Explorar la biblioteca',rename:'Canviar el nom',deleteCollection:'Eliminar col·lecció',deleteCollectionQuestion:'Eliminar aquesta col·lecció?',deleteCollectionDesc:'Les imatges continuaran disponibles a la biblioteca.',removeFrom:'Treure de la col·lecció',removed:'Imatge treta de la col·lecció',updatedCollection:'Col·lecció actualitzada',selectCollection:'Tria on vols desar aquesta imatge.',backup:'Còpia de seguretat',backupTitle:'Desar i recuperar la biblioteca',exportBackup:'Descarregar còpia',importBackup:'Recuperar una còpia',backupDesc:'La còpia conserva les imatges que has afegit o editat, les preferides i les col·leccions. Les imatges del catàleg continuen disponibles a l’app quan recuperes la còpia.',importDesc:'Les imatges i col·leccions de la còpia s’afegiran a les que ja tens.',exporting:'Preparant la còpia…',exported:'Còpia de seguretat descarregada',imported:'Còpia recuperada',invalidBackup:'No s’ha pogut recuperar la còpia. Comprova que sigui una còpia de CACE Imatges.',storage:'Desat en aquest navegador',storageError:'No s’han pogut desar els canvis al navegador. Descarrega una còpia per conservar-los.',noStorage:'El navegador no permet desar els canvis aquí. Pots continuar treballant i descarregar una còpia.',about:'Sobre CACE Imatges',aboutDesc:'Una biblioteca visual per cercar, organitzar i mostrar imatges amb el vocabulari CACE.',aboutSample:'La biblioteca incorpora {count} imatges. Pots ampliar-la amb fotografies i dibuixos propis.',aboutWords:'Les etiquetes es trien del vocabulari CACE-UTAC 2021. Una imatge pot tenir diverses paraules, categories i nivells.',aboutFull:'El visionat a pantalla completa permet passar d’una imatge a una altra i ocultar els textos. Toca la imatge per recuperar els controls.',source:'Vocabulari CACE-UTAC',version:'Versió',wordCount:'entrades del vocabulari',local:'Les teves col·leccions i imatges afegides es desen en aquest navegador.',imageCredit:'Imatge generada amb IA',wordNoImages:'sense imatges encara',resultsFor:'Resultats per a',exit:'Sortir',controlsHint:'Toca la imatge per mostrar els controls',readMore:'Informació de la biblioteca',minimumName:'Escriu un nom.',unexpectedError:'No s’ha pogut completar l’acció. Torna-ho a provar.',selectAll:'Totes les imatges',fromLibrary:'Biblioteca',changeLanguage:'Idioma',of:'de',showAll:'Veure tota la biblioteca',collection:'Col·lecció',back:'Enrere'},
es:{library:'Biblioteca',favorites:'Favoritas',collections:'Colecciones',visualLibrary:'Biblioteca visual',categories:'Categorías CACE',allCategories:'Todas las categorías',moreCategories:'Ver todas las categorías',lessCategories:'Mostrar menos categorías',title:'Tu biblioteca de imágenes',subtitle:'Fotografías y dibujos para explorar y trabajar el vocabulario CACE.',addImages:'Añadir imágenes',newCollection:'Nueva colección',all:'Todas',photos:'Fotografías',drawings:'Dibujos',photo:'Fotografía',drawing:'Dibujo',search:'Busca por palabras CACE…',clearSearch:'Limpiar búsqueda',grid:'Vista de galería',list:'Vista de lista',initialOrder:'Orden inicial',alphabetic:'Orden alfabético',newFirst:'Más recientes',image:'imagen',images:'imágenes',level:'Nivel',clearFilters:'Limpiar filtros',contains:'Contiene',allWords:'todas las palabras',anyWord:'alguna palabra',noResults:'Todavía no hay imágenes para esta búsqueda',noResultsDesc:'Prueba otra palabra o categoría, o añade una imagen con estas etiquetas.',noFavorites:'Tus imágenes favoritas, aquí',noFavoritesDesc:'Marca el corazón de una imagen para tenerla siempre a mano.',addTo:'Añadir a una colección',view:'Ver imagen',fullscreen:'Pantalla completa',exitFullscreen:'Salir de pantalla completa',previous:'Imagen anterior',next:'Imagen siguiente',otherImages:'Otras imágenes',hideLabels:'Ocultar textos',showLabels:'Mostrar textos',hideControls:'Ocultar controles',showControls:'Mostrar controles',backLibrary:'Volver a la biblioteca',download:'Descargar imagen',print:'Imprimir',edit:'Editar ficha',close:'Cerrar',cancel:'Cancelar',save:'Guardar',saved:'Cambios guardados',name:'Nombre',nameEs:'Nombre en catalán (opcional)',description:'Descripción',words:'Palabras CACE',findWords:'Busca y añade palabras CACE…',noWord:'No se ha encontrado ninguna palabra CACE.',selectWords:'Añade al menos una palabra CACE.',selectLevels:'Elige al menos un nivel.',chooseFiles:'Elige imágenes o arrástralas aquí',fileTypes:'PNG, JPG o WEBP · hasta 25 MB por imagen',fileCount:'imágenes seleccionadas',imageType:'Tipo de imagen',levels:'Niveles de la jerarquía',editImage:'Editar la ficha de la imagen',addImageTitle:'Añadir imágenes a la biblioteca',addedImages:'Imágenes añadidas',pickFile:'Elige al menos una imagen.',invalidFile:'Este archivo no es una imagen PNG, JPG o WEBP válida de hasta 25 MB.',noCollections:'Prepara tu primera colección',noCollectionsDesc:'Agrupa imágenes para una sesión, un tema o un objetivo de trabajo.',collectionName:'Nombre de la colección',collectionHint:'Por ejemplo, materiales para una sesión de lenguaje.',create:'Crear',createdCollection:'Colección creada',emptyCollection:'Esta colección todavía está vacía',emptyCollectionDesc:'Añade imágenes desde la biblioteca con el botón de colección.',browseLibrary:'Explorar la biblioteca',rename:'Cambiar el nombre',deleteCollection:'Eliminar colección',deleteCollectionQuestion:'¿Eliminar esta colección?',deleteCollectionDesc:'Las imágenes seguirán disponibles en la biblioteca.',removeFrom:'Quitar de la colección',removed:'Imagen quitada de la colección',updatedCollection:'Colección actualizada',selectCollection:'Elige dónde quieres guardar esta imagen.',backup:'Copia de seguridad',backupTitle:'Guardar y recuperar la biblioteca',exportBackup:'Descargar copia',importBackup:'Recuperar una copia',backupDesc:'La copia conserva las imágenes que has añadido o editado, las favoritas y las colecciones. Las imágenes del catálogo siguen disponibles en la app al recuperar la copia.',importDesc:'Las imágenes y colecciones de la copia se añadirán a las que ya tienes.',exporting:'Preparando la copia…',exported:'Copia de seguridad descargada',imported:'Copia recuperada',invalidBackup:'No se ha podido recuperar la copia. Comprueba que sea una copia de CACE Imatges.',storage:'Guardado en este navegador',storageError:'No se han podido guardar los cambios en el navegador. Descarga una copia para conservarlos.',noStorage:'El navegador no permite guardar los cambios aquí. Puedes seguir trabajando y descargar una copia.',about:'Sobre CACE Imatges',aboutDesc:'Una biblioteca visual para buscar, organizar y mostrar imágenes con el vocabulario CACE.',aboutSample:'La biblioteca incorpora {count} imágenes. Puedes ampliarla con fotografías y dibujos propios.',aboutWords:'Las etiquetas se eligen del vocabulario CACE-UTAC 2021. Una imagen puede tener varias palabras, categorías y niveles.',aboutFull:'La vista a pantalla completa permite pasar de una imagen a otra y ocultar los textos. Toca la imagen para recuperar los controles.',source:'Vocabulario CACE-UTAC',version:'Versión',wordCount:'entradas del vocabulario',local:'Tus colecciones e imágenes añadidas se guardan en este navegador.',imageCredit:'Imagen generada con IA',wordNoImages:'sin imágenes todavía',resultsFor:'Resultados para',exit:'Salir',controlsHint:'Toca la imagen para mostrar los controles',readMore:'Información de la biblioteca',minimumName:'Escribe un nombre.',unexpectedError:'No se ha podido completar la acción. Inténtalo de nuevo.',selectAll:'Todas las imágenes',fromLibrary:'Biblioteca',changeLanguage:'Idioma',of:'de',showAll:'Ver toda la biblioteca',collection:'Colección',back:'Atrás'}
};
Object.assign(strings.ca,{relevance:'Rellevància',primaryWord:'Paraula clau principal',primaryWordHint:'Tria la paraula CACE que millor identifica la imatge. Tindrà prioritat a la cerca.',selectPrimaryWord:'Tria una paraula clau principal.'});
Object.assign(strings.es,{relevance:'Relevancia',primaryWord:'Palabra clave principal',primaryWordHint:'Elige la palabra CACE que mejor identifica la imagen. Tendrá prioridad en la búsqueda.',selectPrimaryWord:'Elige una palabra clave principal.'});
strings.ca.byLevel='Per nivell';
strings.es.byLevel='Por nivel';
let lang='ca';try{lang=localStorage.getItem('cace-language')==='es'?'es':'ca'}catch{}
const t=k=>strings[lang][k]||strings.ca[k]||k;
const loc=o=>typeof o==='string'?o:(o?.[lang]||o?.ca||o?.es||'');
let stored={assets:[],favorites:[],collections:[],preferences:{}};
const state={view:'library',collection:null,level:null,category:null,kind:'all',drawingStyle:'',query:'',tags:[],wordMode:'all',layout:'grid',sort:'initial',viewer:null,viewerIds:[],present:false,labels:true,controlsHidden:false,categoriesExpanded:false};
let db=null,persistQueue=Promise.resolve(),toastTimer=null,suggestionIndex=-1,lastFocus=null;
function openDB(){return new Promise((resolve,reject)=>{if(!window.indexedDB)return reject(new Error('No IndexedDB'));const req=indexedDB.open('cace-imatges',1);req.onupgradeneeded=()=>req.result.createObjectStore('kv');req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);req.onblocked=()=>reject(new Error('Blocked'))})}
function getStored(){return new Promise((resolve,reject)=>{const tx=db.transaction('kv','readonly');const req=tx.objectStore('kv').get('library');req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2800)}
function storageNotice(message){$('#storageNotice').textContent=message;$('#storageNotice').hidden=false}
function persist(){const snapshot=structuredClone(stored);persistQueue=persistQueue.catch(()=>{}).then(()=>new Promise((resolve,reject)=>{if(!db){storageNotice(t('noStorage'));return resolve()}const tx=db.transaction('kv','readwrite');tx.objectStore('kv').put(snapshot,'library');tx.oncomplete=()=>{const el=$('#saveStatus');if(el)el.textContent=t('storage');resolve()};tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error)})).catch(()=>storageNotice(t('storageError')));return persistQueue}
function primaryWordIdFor(a){
const tags=(a.tags||[]).filter(id=>WORDS.has(id));
const preferred=[a.primaryWordId,...(a.targetWordIds||[]),BASE.get(a.id)?.primaryWordId].find(id=>tags.includes(id));
if(preferred)return preferred;
// Older personal images and backups have tags but no explicit primary word.
return tags.find(id=>['ca','es'].some(language=>WORDS.get(id)[language]&&a.title?.[language]&&norm(WORDS.get(id)[language])===norm(a.title[language].split('·')[0])))||tags[0];
}
let indexedAssets;
function assetIndex(){
  if(indexedAssets?.local===stored.assets)return indexedAssets;
  const byId=new Map(BASE);
  for(const a of stored.assets)byId.set(a.id,BASE.has(a.id)?{...BASE.get(a.id),...a}:a);
  const tagCounts=new Map();
  for(const [id,a] of byId){
    const primaryWordId=primaryWordIdFor(a);
    if(a.primaryWordId!==primaryWordId)byId.set(id,{...a,primaryWordId});
    for(const tag of new Set(a.tags))tagCounts.set(tag,(tagCounts.get(tag)||0)+1);
  }
  indexedAssets={local:stored.assets,byId,tagCounts,rows:[...byId.values()]};
  return indexedAssets;
}
function assets(){return assetIndex().rows}
function assetById(id){return assetIndex().byId.get(id)}
function collectionById(id){return stored.collections.find(c=>c.id===id)}
function collectionName(collection){
  if(!collection)return t('collection');
  const canonical=DEFAULT_COLLECTIONS.get(collection.id);
  if(lang!=='es'||!canonical?.level||collection.name!==canonical.name)return collection.name;
  const level=canonical.level;
  return 'N'+level+' - '+(level===1?'Palabras individuales':LEVELS.get(level).es);
}
function syncCatalogCollections(){
  const previous=stored.catalogImports||{},next={...previous};
  const activeIds=new Set(assets().map(a=>a.id));
  let changed=false;
  for(const [id,[name,variant]] of LEGACY_MEDIA_COLLECTIONS){
    const legacy=collectionById(id);
    if(!legacy||legacy.name!==name)continue;
    const baseline=previous[id]||CATALOG.assets.filter(a=>a.target&&!a.constructionId&&a.variant?.startsWith(variant)).map(a=>a.id);
    const expected=new Set(baseline.filter(assetId=>activeIds.has(assetId)));
    const existing=new Set(legacy.items.filter(assetId=>activeIds.has(assetId)));
    if(existing.size===expected.size&&[...existing].every(assetId=>expected.has(assetId))){
      stored.collections=stored.collections.filter(c=>c.id!==id);
      changed=true;
    }
  }
  for(const c of DEFAULT_COLLECTIONS.values()){
    const seen=previous[c.id],existing=collectionById(c.id);
    if(existing){
      const oldName=c.name.replace(' - ',' · ');
      if(existing.name===oldName&&oldName!==c.name){existing.name=c.name;changed=true}
      const known=new Set(seen||[]);
      const members=new Set(existing.items);
      const additions=c.items.filter(id=>!known.has(id)&&!members.has(id));
      const retained=existing.items.filter(id=>activeIds.has(id));
      if(additions.length||retained.length!==existing.items.length){existing.items=[...retained,...additions];changed=true}
    }else if(!seen){
      stored.collections.push({id:c.id,name:c.name,items:[...c.items]});
      changed=true;
    }
    if(!seen||seen.length!==c.items.length||c.items.some((id,i)=>seen[i]!==id)){
      next[c.id]=[...c.items];
      changed=true;
    }
  }
  const ordered=[...DEFAULT_COLLECTIONS.keys()].map(collectionById).filter(Boolean)
    .concat(stored.collections.filter(c=>!DEFAULT_COLLECTIONS.has(c.id)));
  if(ordered.some((c,i)=>c!==stored.collections[i])){stored.collections=ordered;changed=true}
  if(changed)stored.catalogImports=next;
  return changed;
}
const isFavorite=id=>stored.favorites.includes(id);
const tagName=id=>loc(WORDS.get(id));
const categoryIndex=new WeakMap();
function assetCategories(a){
  if(!categoryIndex.has(a))categoryIndex.set(a,[...new Set(a.tags.map(id=>WORDS.get(id)?.category).filter(Boolean))]);
  return categoryIndex.get(a);
}
// Display labels may fall back to a translation; the search index must not.
const searchLocal=value=>norm(value?.[lang]);
const wordIndex=new Map(CATALOG.words.map(w=>[w.id,{ca:norm(w.ca),es:norm(w.es)}]));
const textIndex={ca:new WeakMap(),es:new WeakMap()};
function searchFields(a){
  const index=textIndex[lang];
  if(index.has(a))return index.get(a);
  const primary=wordIndex.get(a.primaryWordId)?.[lang]||'';
  const tags=a.tags.map(id=>wordIndex.get(id)?.[lang]||'');
  const title=searchLocal(a.title),description=searchLocal(a.alt);
  const fields={primary,tags,title,description,text:[primary,...tags,title,description].join(' ')};
  index.set(a,fields);
  return fields;
}
const hasSearch=()=>Boolean(norm(state.query)||state.tags.length);
const N1_COLLECTION='cace-n1-paraules-individuals';
function usesLevelOrder(){
  // A CACE category filter keeps the N1→N13 order so each category opens with its individual words.
  if(state.view!=='library'||state.level||state.kind!=='all')return false;
  return state.tags.length<=(norm(state.query)?0:1);
}
const concreteCategories=new Set(['animals','objectes','aliments','roba','mobles','transports']);
const broadConcepts=new Set(['ACCIDENT','ALIMENTS','ANIMAL','BEGUDES','COSA','FRUITA','INTERNET','OBJECTES','ROBA','VEHICLE']);
function initialConcreteLabel(asset,level){
  const word=WORDS.get(asset.primaryWordId);
  if(level!==1||!word?.ca||!concreteCategories.has(word.category))return '';
  const label=word.ca.trim();
  return /\s/.test(label)||broadConcepts.has(label)?'':label;
}
function textMatch(text,query){if(!text||!query)return 0;if(text===query)return 4;if((' '+text+' ').includes(' '+query+' '))return 3;if(text.split(' ').some(word=>word.startsWith(query)))return 2;return text.includes(query)?1:0}
function relevance(a,query,terms){
const fields=searchFields(a);
const best=term=>Math.max(textMatch(fields.primary,term)*100,...fields.tags.map(tag=>textMatch(tag,term)*60),textMatch(fields.title,term)*45,textMatch(fields.description,term)*10);
// Exact primary concepts outrank secondary tags, titles and incidental mentions.
// A phrase match wins over scattered terms; term scores break ties for longer queries.
const queryScore=terms.length?best(query)*1000+terms.reduce((sum,term)=>sum+best(term),0)/terms.length:0;
return queryScore+(state.tags.includes(a.primaryWordId)?500000:0);
}
// Fragments inside a word («or» in «porta») are kept only when no image in the current view
// has the term as a whole word or at the start of a word; ranking still puts whole words first.
function termHit(text,term){if(!text||!term)return 0;const words=text.split(/[\s'’]+/);if(words.includes(term)||(' '+text+' ').includes(' '+term+' '))return 3;if(words.some(word=>word.startsWith(term)))return 2;return text.includes(term)?1:0}
function matchMode(pool,term){for(const asset of pool)if(termHit(searchFields(asset).text,term)>=2)return 2;return 1}
function baseAssets(){let list=assets();if(state.view==='favorites')list=list.filter(a=>isFavorite(a.id));if(state.view==='collection'){const items=new Set(collectionById(state.collection)?.items);list=list.filter(a=>items.has(a.id))}return list}
function matches(a,terms,modes){if(state.kind!=='all'&&a.kind!==state.kind)return false;if(state.drawingStyle&&!a.variant?.startsWith(state.drawingStyle))return false;if(state.level&&!a.levels.includes(state.level))return false;if(state.category&&!assetCategories(a).includes(state.category))return false;
if(state.tags.length){const checks=state.tags.map(id=>a.tags.includes(id));if(!(state.wordMode==='all'?checks.every(Boolean):checks.some(Boolean)))return false}
if(terms.length){const {text}=searchFields(a);const checks=terms.map((term,i)=>termHit(text,term)>=(modes?.[i]||1));if(!(state.wordMode==='all'?checks.every(Boolean):checks.some(Boolean)))return false}return true}
function results(){
  const query=norm(state.query),terms=query?query.split(' '):[];
  const pool=baseAssets(),modes=terms.map(term=>matchMode(pool,term));
  const list=pool.filter(asset=>matches(asset,terms,modes));
  if(state.sort==='alpha')return list.sort((a,b)=>loc(a.title).localeCompare(loc(b.title),lang));
  if(state.sort==='new')return list.sort((a,b)=>(b.created||'').localeCompare(a.created||''));
  const searching=Boolean(query||state.tags.length);
  const byLevel=usesLevelOrder();
  // A category filter or the N1 collection lists N1 images alphabetically by their main word.
  const n1Collection=state.view==='collection'&&state.collection===N1_COLLECTION;
  const n1Alpha=!searching&&Boolean(state.category||n1Collection);
  if(!searching&&!byLevel&&!n1Alpha)return list;
  return list.map(asset=>{
    const level=Math.max(...asset.levels);
    // Inside a category, images whose main word belongs to it come before those that only mention it.
    const own=state.category&&WORDS.get(asset.primaryWordId)?.category===state.category?1:0;
    const alpha=n1Alpha&&(level===1||n1Collection)?loc(WORDS.get(asset.primaryWordId))||loc(asset.title):'';
    return {asset,level,own,alpha,score:searching?relevance(asset,query,terms):0,
      concreteLabel:searching?'':initialConcreteLabel(asset,level)};
  })
    .sort((a,b)=>(byLevel?a.level-b.level:0)||(a.alpha&&b.alpha?a.alpha.localeCompare(b.alpha,lang):0)||b.own-a.own||b.score-a.score
      ||Number(Boolean(b.concreteLabel))-Number(Boolean(a.concreteLabel))
      ||a.concreteLabel.localeCompare(b.concreteLabel,'ca'))
    .map(row=>row.asset);
}
const countText=n=>n+' '+t(n===1?'image':'images');
function iconButton(name,action,label,extra=''){return `<button class="icon-btn" data-action="${action}" aria-label="${esc(label)}" title="${esc(label)}" ${extra}>${icon(name)}</button>`}
function navButton(label,ico,active,action,extra='',count=''){return `<button class="nav-item ${active?'active':''}" data-action="${action}" ${active?'aria-current="page"':''} ${extra}>${icon(ico)}<span>${esc(label)}</span>${count!==''?`<span class="count">${count}</span>`:''}</button>`}
function renderSidebar(){const all=assets(),pool=baseAssets();const visibleCategories=state.categoriesExpanded?CATALOG.categories:CATALOG.categories.filter(c=>['persones','verbs','aliments','objectes','mobles','animals','espai'].includes(c.id));
$('#sidebar').innerHTML=`<a href="#" class="brand" data-action="library"><img class="brand-logo" src="brand/utac.webp" alt="UTAC" width="223" height="128"><img class="brand-mark" src="brand/cace-horitzontal.svg" alt="CACE Imatges · ${t('visualLibrary')}" width="1544.8" height="531.3"></a>
<div class="sidebar-scroll">
<nav aria-label="${t('library')}">${navButton(t('library'),'image',state.view==='library'&&!state.viewer,'library','',all.length)}${navButton(t('favorites'),'heart',state.view==='favorites','favorites','',stored.favorites.filter(id=>all.some(a=>a.id===id)).length)}${navButton(t('collections'),'folder',state.view==='collections'||state.view==='collection','collections','',stored.collections.length)}</nav>
<div class="side-label"><span>${t('collections')}</span><button data-action="new-collection" title="${t('newCollection')}" aria-label="${t('newCollection')}">${icon('plus')}</button></div>
<nav class="collection-nav" aria-label="${t('collections')}">${stored.collections.map(c=>navButton(collectionName(c),'folder',state.collection===c.id,'open-collection',`data-id="${esc(c.id)}"`,c.items.length)).join('')}</nav>
<div class="side-label"><span>${t('categories')}</span>${icon('box')}</div>
<nav aria-label="${t('categories')}">${visibleCategories.map(c=>navButton(loc(c),c.icon,state.category===c.id,'category',`data-id="${c.id}"`,pool.filter(a=>assetCategories(a).includes(c.id)).length)).join('')}</nav>
<button class="text-button" style="margin:8px 11px 0" data-action="expand-categories">${t(state.categoriesExpanded?'lessCategories':'moreCategories')}${icon('down')}</button>
</div><footer class="sidebar-footer"><div class="side-footer-row"><button class="text-button" data-action="backup">${icon('backup')}${t('backup')}</button><button class="icon-btn" data-action="about" title="${t('about')}" aria-label="${t('about')}">${icon('info')}</button></div><span id="saveStatus" class="save-status">${t('storage')}</span></footer>`}
function renderTop(){document.documentElement.lang=lang;{const v=$('#appVersion');if(v){v.textContent='v'+CATALOG.version;v.title=t('version')+' '+CATALOG.version+' · '+t('about');v.setAttribute('aria-label',t('version')+' '+CATALOG.version+' · '+t('about'))}}document.title='CACE Imatges · '+t('visualLibrary');$('#search').placeholder=t('search');$('#search').setAttribute('aria-label',t('search'));$('#search').value=state.query;$('#clearSearch').setAttribute('aria-label',t('clearSearch'));$('#clearSearch').hidden=!state.query;$('#langCa').classList.toggle('active',lang==='ca');$('#langEs').classList.toggle('active',lang==='es');$('#langCa').setAttribute('aria-pressed',lang==='ca');$('#langEs').setAttribute('aria-pressed',lang==='es');$('#aboutTop').setAttribute('aria-label',t('about'));$('#aboutTop').innerHTML=icon('info');$('#menuToggle').innerHTML=icon('menu');$('#menuToggle').setAttribute('aria-label',lang==='ca'?'Obrir menú':'Abrir menú');$('#searchIcon').innerHTML=icon('search');$('#clearSearch').innerHTML=icon('close')}
function drawingStyleFilter(){
  if(state.view!=='collection'||state.kind!=='drawing')return '';
  const labels=lang==='ca'?['Tots els dibuixos','Dibuix realista','Il·lustració plana']
    :['Todos los dibujos','Dibujo realista','Ilustración plana'];
  const variants=new Set(baseAssets().filter(a=>a.kind==='drawing').map(a=>a.variant));
  const options=[['realista-',labels[1]],['pla-',labels[2]]]
    .filter(([prefix])=>[...variants].some(variant=>variant?.startsWith(prefix)));
  if(!options.length)return '';
  return `<select class="filter-select" id="drawingStyleFilter" aria-label="${lang==='ca'?'Estil del dibuix':'Estilo del dibujo'}">${[['',labels[0]],...options].map(([value,label])=>`<option value="${value}" ${state.drawingStyle===value?'selected':''}>${label}</option>`).join('')}</select>`;
}
function heading(){let title=t('title'),subtitle=t('subtitle');if(state.view==='favorites'){title=t('favorites');subtitle=t('noFavoritesDesc')}if(state.view==='collection'){title=collectionName(collectionById(state.collection));subtitle=countText(baseAssets().length)}if(state.level){title=String(state.level).padStart(2,'0')+' · '+loc(LEVELS.get(state.level));subtitle=loc(LEVELS.get(state.level).desc)}if(state.category&&!state.level){title=loc(CATEGORIES.get(state.category));subtitle=t('subtitle')}return `<div class="page-heading"><div>${state.view==='collection'?`<div class="breadcrumb"><button data-action="collections">${t('collections')}</button>${icon('chevron')}<span>${esc(title)}</span></div>`:''}<h1>${esc(title)}</h1><p class="subtitle">${esc(subtitle)}</p></div><div class="heading-actions">${state.view==='collection'?`<button class="btn" data-action="rename-collection" data-id="${state.collection}">${icon('edit')}${t('rename')}</button>`:''}<button class="btn primary" data-action="import-images">${icon('plus')}${t('addImages')}</button></div></div>`}
function filterToolbar(){return `<div class="toolbar"><div class="filter-left"><div class="segmented" role="group" aria-label="${t('imageType')}">${[['all','all',null],['photo','photos','camera'],['drawing','drawings','pencil']].map(([id,label,ico])=>`<button data-action="kind" data-id="${id}" class="${state.kind===id?'active':''}" aria-pressed="${state.kind===id}">${ico?icon(ico):''}${t(label)}</button>`).join('')}</div><select class="filter-select" id="categoryFilter" aria-label="${t('categories')}"><option value="">${t('allCategories')}</option>${CATALOG.categories.map(c=>`<option value="${c.id}" ${state.category===c.id?'selected':''}>${esc(loc(c))}</option>`).join('')}</select>${drawingStyleFilter()}</div><div class="view-toggles"><select id="sortSelect" aria-label="${lang==='ca'?'Ordenar imatges':'Ordenar imágenes'}"><option value="initial">${t(usesLevelOrder()?'byLevel':hasSearch()?'relevance':'initialOrder')}</option><option value="alpha" ${state.sort==='alpha'?'selected':''}>${t('alphabetic')}</option><option value="new" ${state.sort==='new'?'selected':''}>${t('newFirst')}</option></select><button class="icon-btn ${state.layout==='grid'?'active':''}" data-action="layout" data-id="grid" aria-label="${t('grid')}" aria-pressed="${state.layout==='grid'}">${icon('grid')}</button><button class="icon-btn ${state.layout==='list'?'active':''}" data-action="layout" data-id="list" aria-label="${t('list')}" aria-pressed="${state.layout==='list'}">${icon('list')}</button></div></div>`}
function filters(){const items=[];if(state.level)items.push(`<button class="filter-chip" data-action="remove-level">${String(state.level).padStart(2,'0')} · ${esc(loc(LEVELS.get(state.level)))}${icon('close')}</button>`);if(state.category)items.push(`<button class="filter-chip" data-action="remove-category">${esc(loc(CATEGORIES.get(state.category)))}${icon('close')}</button>`);for(const id of state.tags)items.push(`<button class="filter-chip" data-action="remove-tag" data-id="${id}">${esc(tagName(id))}${icon('close')}</button>`);if(state.query)items.push(`<button class="filter-chip" data-action="clear-query">“${esc(state.query)}”${icon('close')}</button>`);return items.length?`<div class="filter-strip">${items.join('')}<button class="small-reset" data-action="reset-filters">${t('clearFilters')}</button></div>`:''}
function tagsHTML(a,limit=5,interactive=true){
const primary=primaryWordIdFor(a),ids=[primary,...a.tags.filter(id=>id!==primary)].filter(Boolean);
return ids.slice(0,limit).map(id=>{const label=id===primary?t('primaryWord')+' · ':'';const title=esc(label+loc(CATEGORIES.get(WORDS.get(id)?.category)));const css=id===primary?'primary-keyword':'';return interactive?`<button class="tag ${css} ${state.tags.includes(id)?'selected':''}" data-action="tag" data-id="${id}" title="${title}">${esc(tagName(id))}</button>`:`<span class="tag static ${css}" title="${title}">${esc(tagName(id))}</span>`}).join('')+(ids.length>limit?`<span class="tag static">+${ids.length-limit}</span>`:'');
}
function card(a){return `<article class="image-card"><div class="kind-mark" title="${t(a.kind==='photo'?'photo':'drawing')}">${icon(a.kind==='photo'?'camera':'pencil')}<span>${t(a.kind==='photo'?'photo':'drawing')}</span></div><div class="card-hover-actions"><button class="icon-btn" data-action="fullscreen-card" data-id="${esc(a.id)}" aria-label="${t('fullscreen')} · ${esc(loc(a.title))}" title="${t('fullscreen')}">${icon('expand')}</button><button class="icon-btn ${isFavorite(a.id)?'starred':''}" data-action="favorite" data-id="${esc(a.id)}" aria-label="${t('favorites')} · ${esc(loc(a.title))}" aria-pressed="${isFavorite(a.id)}" title="${t('favorites')}">${icon('heart')}</button></div><button class="card-open" data-action="open-image" data-id="${esc(a.id)}" aria-label="${t('view')} · ${esc(loc(a.title))}"><img src="${esc(a.src)}" alt="${esc(loc(a.alt)||loc(a.title))}" loading="lazy" width="1448" height="1086"></button><div class="card-text"><button class="card-title" data-action="open-image" data-id="${esc(a.id)}">${esc(loc(a.title))}</button><div class="card-bottom"><div class="tags">${tagsHTML(a,3)}</div><span class="level-pill" title="${a.levels.map(id=>esc(loc(LEVELS.get(id)))).join(' · ')}">${t('level')} ${String(Math.max(...a.levels)).padStart(2,'0')}</span></div><div class="card-meta-actions"><button class="card-add" data-action="add-to-collection" data-id="${esc(a.id)}" aria-label="${t('addTo')} · ${esc(loc(a.title))}" title="${t('addTo')}">${icon('folder')}<span>${t('addTo')}</span></button><button class="meta-link" data-action="fullscreen-card" data-id="${esc(a.id)}" aria-label="${t('fullscreen')} · ${esc(loc(a.title))}">${icon('expand')}<span>${t('fullscreen')}</span></button></div></div></article>`}
function empty(iconName,title,desc,actions){return `<section class="empty-state">${icon(iconName)}<h2>${esc(title)}</h2><p>${esc(desc)}</p><div class="empty-actions">${actions}</div></section>`}
const galleryBatchSize=120;
let galleryObserver;
function attachGalleryBatches(list,displayed){
  if(displayed>=list.length)return;
  const grid=$('#main .image-grid'),more=$('#galleryMore');
  const append=()=>{
    if(!more.isConnected)return;
    const next=displayed+galleryBatchSize;
    grid.insertAdjacentHTML('beforeend',list.slice(displayed,next).map(card).join(''));
    displayed=next;
    if(displayed>=list.length){
      galleryObserver?.disconnect();
      more.remove();
    }
  };
  more.onclick=append;
  if(window.IntersectionObserver){
    galleryObserver=new window.IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting))append();
    },{rootMargin:'400px'});
    galleryObserver.observe(more);
  }
}
function renderGallery(){
galleryObserver?.disconnect();
const list=results(),filtered=state.query||state.tags.length||state.level||state.category||state.kind!=='all';
const displayed=list.length>2*galleryBatchSize?galleryBatchSize:list.length;
let content;
if(!list.length){const special=state.view==='favorites'&&!filtered?'Favorites':state.view==='collection'&&!filtered?'Collection':null;content=empty(special==='Favorites'?'heart':special==='Collection'?'folder':'search',special?t(special==='Favorites'?'noFavorites':'emptyCollection'):t('noResults'),special?t(special==='Favorites'?'noFavoritesDesc':'emptyCollectionDesc'):t('noResultsDesc'),special?`<button class="btn primary" data-action="library">${t('browseLibrary')}</button>`:`<button class="btn" data-action="reset-filters">${t('clearFilters')}</button><button class="btn primary" data-action="import-images">${icon('plus')}${t('addImages')}</button>`)}
else content=`<div class="image-grid ${state.layout==='list'?'list-view':''}">${list.slice(0,displayed).map(card).join('')}</div>`+
  (displayed<list.length?`<div class="gallery-more"><button class="btn" id="galleryMore">${lang==='ca'?'Mostra més imatges':'Mostrar más imágenes'}</button></div>`:'');
$('#main').innerHTML=heading()+filterToolbar()+filters()+`<div class="result-meta"><span role="status" aria-live="polite">${countText(list.length)}</span><label class="word-mode">${t('contains')} <select id="wordMode" aria-label="${t('contains')}"><option value="all">${t('allWords')}</option><option value="any" ${state.wordMode==='any'?'selected':''}>${t('anyWord')}</option></select></label></div>`+content+`<footer class="catalog-note"><button class="text-button" data-action="about">${icon('info')}${t('readMore')}</button></footer>`;attachGalleryBatches(list,displayed)}
function renderCollections(){const list=stored.collections;$('#main').innerHTML=`<div class="page-heading"><div><h1>${t('collections')}</h1><p class="subtitle">${t('noCollectionsDesc')}</p></div><button class="btn primary" data-action="new-collection">${icon('plus')}${t('newCollection')}</button></div>`+(list.length?`<div class="collections-grid">${list.map(c=>{const items=c.items.map(assetById).filter(Boolean);return `<article class="collection-card"><button class="collection-cover" data-action="open-collection" data-id="${esc(c.id)}" aria-label="${esc(collectionName(c))}">${items.length?items.slice(0,4).map(a=>`<img src="${esc(a.src)}" alt="" loading="lazy">`).join(''):`<span class="placeholder">${icon('folder')}</span>`}</button><div class="collection-info"><div><button class="collection-title" data-action="open-collection" data-id="${esc(c.id)}">${esc(collectionName(c))}</button><small>${countText(items.length)}</small></div><button class="icon-btn" data-action="rename-collection" data-id="${esc(c.id)}" aria-label="${t('rename')} · ${esc(collectionName(c))}">${icon('edit')}</button></div></article>`}).join('')}</div>`:empty('folder',t('noCollections'),t('noCollectionsDesc'),`<button class="btn primary" data-action="new-collection">${icon('plus')}${t('newCollection')}</button>`))}
let indexedViewer;
function viewerIndex(){
  const index=assetIndex();
  if(indexedViewer?.ids===state.viewerIds&&indexedViewer.index===index)return indexedViewer;
  const rows=state.viewerIds.map(id=>index.byId.get(id)).filter(Boolean);
  const positions=new Map(),byTag=new Map();
  for(const [position,image] of rows.entries()){
    positions.set(image.id,position);
    for(const tag of image.tags){
      if(!byTag.has(tag))byTag.set(tag,[]);
      byTag.get(tag).push(position);
    }
  }
  indexedViewer={ids:state.viewerIds,index,rows,positions,byTag};
  return indexedViewer;
}
function relatedImages(image,viewer){
  const current=viewer.positions.get(image.id),scores=new Map();
  for(const tag of new Set(image.tags)){
    for(const position of viewer.byTag.get(tag)||[]){
      if(position!==current)scores.set(position,(scores.get(position)||0)+1);
    }
  }
  const nearest=[...scores.keys()].sort((a,b)=>scores.get(b)-scores.get(a)||a-b).slice(0,5);
  for(let i=0;i<viewer.rows.length&&nearest.length<5;i++){
    if(i!==current&&!scores.has(i))nearest.push(i);
  }
  return [image,...nearest.map(position=>viewer.rows[position])];
}
let preloadedNeighbors=new Map();
function preloadNeighbors(pool,index){
  if(!window.Image)return;
  const neighbors=new Map();
  for(const asset of [pool[index+1],pool[index-1]].filter(Boolean)){
    let image=preloadedNeighbors.get(asset.src);
    if(!image){
      image=new window.Image();
      image.fetchPriority='low';
      image.src=asset.src;
    }
    neighbors.set(asset.src,image);
  }
  preloadedNeighbors=neighbors;
}
function renderViewer(){
const a=assetById(state.viewer);if(!a){state.viewer=null;renderGallery();return}
const viewer=viewerIndex(),pool=viewer.rows,index=viewer.positions.get(a.id)??-1;
const related=relatedImages(a,viewer);
$('#main').innerHTML=`<div class="focus-heading"><div class="breadcrumb"><button data-action="close-viewer">${state.view==='collection'?esc(collectionName(collectionById(state.collection))):t('library')}</button>${icon('chevron')}<span>${esc(loc(LEVELS.get(Math.max(...a.levels))))}</span></div><div class="focus-actions"><button class="icon-btn" data-action="previous" aria-label="${t('previous')}" title="${t('previous')}" ${index<=0?'disabled':''}>${icon('back')}</button><span class="focus-count">${index+1} / ${pool.length}</span><button class="icon-btn" data-action="next" aria-label="${t('next')}" title="${t('next')}" ${index>=pool.length-1?'disabled':''}>${icon('arrow')}</button>${iconButton('expand','fullscreen',t('fullscreen'))}</div></div>
<div class="focus-layout"><div><section class="focus-main"><div class="image-stage" data-action="stage"><img id="viewerImage" src="${esc(a.src)}" alt="${esc(loc(a.alt)||loc(a.title))}" width="1448" height="1086"></div><div class="focus-caption"><div class="focus-caption-top"><h1>${esc(loc(a.title))}</h1><span class="badge amber">${t('level')} ${String(Math.max(...a.levels)).padStart(2,'0')}</span></div><div class="tags">${tagsHTML(a,30)}</div><div class="focus-categories">${assetCategories(a).map(id=>{const c=CATEGORIES.get(id);return `<button data-action="category" data-id="${id}">${icon(c.icon)}${esc(loc(c))}</button>`}).join('')}<span style="margin-left:auto;font-size:10px">${['sample','generated'].includes(a.origin)?t('imageCredit'):''}</span></div></div></section><div class="focus-footer"><div class="focus-tools"><button class="text-button" data-action="download-image" data-id="${a.id}">${icon('download')}${t('download')}</button><button class="text-button" data-action="edit-image" data-id="${a.id}">${icon('edit')}${t('edit')}</button><button class="text-button" data-action="print">${icon('print')}${t('print')}</button></div><div style="display:flex;gap:7px"><button class="icon-btn ${isFavorite(a.id)?'starred':''}" data-action="favorite" data-id="${a.id}" aria-label="${t('favorites')}" aria-pressed="${isFavorite(a.id)}">${icon('heart')}</button><button class="btn primary" data-action="add-to-collection" data-id="${a.id}">${icon('folder')}${t('addTo')}</button></div></div></div><aside class="related-panel" aria-label="${t('otherImages')}"><h2>${t('otherImages')}</h2><div class="related-list">${related.map(x=>`<button class="related-item ${x.id===a.id?'active':''}" data-action="related-image" data-id="${x.id}" aria-label="${t('view')} · ${esc(loc(x.title))}" aria-pressed="${x.id===a.id}"><img src="${esc(x.src)}" alt="" loading="lazy"><small>${esc(loc(x.title))}</small></button>`).join('')}</div></aside></div>
<div class="present-bar"><span class="present-brand">CACE Imatges</span><div class="present-right"><button class="btn" data-action="toggle-labels">${icon(state.labels?'eyeoff':'eye')}${t(state.labels?'hideLabels':'showLabels')}</button>${iconButton('eyeoff','toggle-controls',t('hideControls'))}<button class="btn" data-action="exit-presentation">${icon('shrink')}${t('exit')}</button></div></div><div class="presentation-caption"><p>${esc(loc(a.title))}</p></div><div class="presentation-controls"><button class="icon-btn" data-action="previous" aria-label="${t('previous')}" ${index<=0?'disabled':''}>${icon('back')}</button><span class="focus-count">${index+1} / ${pool.length}</span><button class="icon-btn" data-action="next" aria-label="${t('next')}" ${index>=pool.length-1?'disabled':''}>${icon('arrow')}</button></div>`;syncPresentation();preloadNeighbors(pool,index)}
function syncPresentation(){document.body.classList.toggle('presenting',state.present);document.body.classList.toggle('labels-visible',state.labels);document.body.classList.toggle('controls-hidden',state.controlsHidden);if(state.present&&state.controlsHidden&&document.activeElement?.closest('.present-bar,.presentation-controls'))$('#main').focus({preventScroll:true})}
function renderMain(){galleryObserver?.disconnect();if(state.viewer)renderViewer();else if(state.view==='collections')renderCollections();else renderGallery()}
function render(){renderTop();renderSidebar();renderMain()}
function resetFilters(){state.level=null;state.category=null;state.tags=[];state.query='';state.kind='all';state.drawingStyle='';$('#search').value='';$('#clearSearch').hidden=true;closeSuggestions()}
function rootView(view){if(state.present)exitPresentation();state.viewer=null;state.view=view;state.collection=null;resetFilters();render();closeSidebar()}
function openViewer(id,full=false){const list=results();state.viewerIds=list.map(a=>a.id);if(!state.viewerIds.includes(id))state.viewerIds.unshift(id);state.viewer=id;closeSuggestions();renderMain();window.scrollTo(0,0);if(full)enterPresentation()}
function stepViewer(delta){const viewer=viewerIndex();const index=viewer.positions.get(state.viewer);const next=viewer.rows[index+delta];if(next){state.viewer=next.id;state.controlsHidden=false;renderViewer()}}
function enterPresentation(){if(!state.viewer)return;state.present=true;state.controlsHidden=false;syncPresentation();if(!document.fullscreenElement&&document.documentElement.requestFullscreen){document.documentElement.requestFullscreen().catch(()=>{/* Edge-to-edge viewport mode remains available. */})}}
function exitPresentation(){state.present=false;state.controlsHidden=false;syncPresentation();if(document.fullscreenElement&&document.exitFullscreen)document.exitFullscreen().catch(()=>{})}
function closeViewer(){exitPresentation();state.viewer=null;preloadedNeighbors.clear();renderMain();window.scrollTo(0,0)}
function toggleFavorite(id){if(isFavorite(id))stored.favorites=stored.favorites.filter(x=>x!==id);else stored.favorites.push(id);persist();renderSidebar();renderMain()}
function chooseTag(id){if(!WORDS.has(id))return;state.viewer=null;if(state.present)exitPresentation();if(state.view==='collections')state.view='library';if(!state.tags.includes(id))state.tags.push(id);state.query='';renderTop();closeSuggestions();renderSidebar();renderMain()}
function closeSidebar(){$('#sidebar').classList.remove('open')}
function closeSuggestions(){$('#searchSuggestions').hidden=true;$('#search').setAttribute('aria-expanded','false');$('#search').removeAttribute('aria-activedescendant');suggestionIndex=-1}
function wordCandidates(query,exclude=[],withImagesOnly=false){const q=norm(query);if(!q)return[];const counts=withImagesOnly?assetIndex().tagCounts:null;return CATALOG.words.filter(w=>!exclude.includes(w.id)&&(!counts||counts.get(w.id))&&wordIndex.get(w.id)[lang].includes(q)).sort((a,b)=>textMatch(wordIndex.get(b.id)[lang],q)-textMatch(wordIndex.get(a.id)[lang],q)||a[lang].localeCompare(b[lang],lang)).slice(0,8)}
// Vocabulary entries without any image stay in the catalogue but are not offered as search suggestions.
function showSuggestions(){const input=$('#search'),list=wordCandidates(input.value,state.tags,true),box=$('#searchSuggestions');suggestionIndex=-1;if(!input.value.trim()){closeSuggestions();return}box.innerHTML=list.map((w,i)=>{const count=assetIndex().tagCounts.get(w.id)||0;return `<button class="suggestion" role="option" id="suggestion-${i}" data-action="search-word" data-id="${w.id}" aria-selected="false">${icon(CATEGORIES.get(w.category)?.icon)}<span><strong>${esc(loc(w))}</strong><small>${esc(loc(CATEGORIES.get(w.category)))}</small></span><span class="mini-count">${count?countText(count):t('wordNoImages')}</span></button>`}).join('')+(list.length?'':`<div class="suggestion-note">${t('noWord')}</div>`);box.hidden=false;input.setAttribute('aria-expanded','true')}
function highlightSuggestion(delta){const opts=[...$('#searchSuggestions').querySelectorAll('.suggestion')];if(!opts.length)return;suggestionIndex=Math.max(0,Math.min(opts.length-1,suggestionIndex+delta));opts.forEach((el,i)=>{el.classList.toggle('highlighted',i===suggestionIndex);el.setAttribute('aria-selected',i===suggestionIndex)});$('#search').setAttribute('aria-activedescendant',opts[suggestionIndex].id);opts[suggestionIndex].scrollIntoView({block:'nearest'})}
function openDialog(title,body,footer='',wide=false){lastFocus=document.activeElement;const d=$('#dialog');d.classList.toggle('wide',wide);d.innerHTML=`<div class="dialog-head"><h2>${esc(title)}</h2>${iconButton('close','close-dialog',t('close'))}</div><div class="dialog-body">${body}</div>${footer?`<div class="dialog-foot">${footer}</div>`:''}`;if(!d.open)d.showModal();setTimeout(()=>{const el=d.querySelector('[autofocus]')||d.querySelector('input:not([type=file]):not([type=checkbox])')||d.querySelector('button');el?.focus()},30)}
function closeDialog(){const d=$('#dialog');if(d.open)d.close();if(lastFocus?.isConnected)lastFocus.focus()}
function errorInDialog(message){let el=$('#dialog .error-message');if(!el){el=document.createElement('div');el.className='error-message';$('#dialog .dialog-body').prepend(el)}el.textContent=message;el.scrollIntoView({block:'nearest'})}
function newCollection(afterId=null){openDialog(t('newCollection'),`<p>${t('collectionHint')}</p><label>${t('collectionName')}<input id="collectionName" autofocus maxlength="100" placeholder="${lang==='ca'?'La meva col·lecció':'Mi colección'}"></label>`,`<button class="btn" data-action="close-dialog">${t('cancel')}</button><button class="btn primary" id="createCollection">${icon('plus')}${t('create')}</button>`);$('#createCollection').onclick=async()=>{const name=$('#collectionName').value.trim();if(!name)return errorInDialog(t('minimumName'));const c={id:'c-'+uid(),name,items:afterId?[afterId]:[]};stored.collections.push(c);$('#createCollection').disabled=true;await persist();closeDialog();renderSidebar();if(state.view==='collections')renderCollections();toast(t('createdCollection'))};$('#collectionName').onkeydown=e=>{if(e.key==='Enter')$('#createCollection').click()}}
function renameCollection(id){const c=collectionById(id);if(!c)return;openDialog(t('rename'),`<label>${t('collectionName')}<input id="collectionName" autofocus maxlength="100" value="${esc(c.name)}"></label>`,`<button class="btn danger" id="deleteCollection">${t('deleteCollection')}</button><button class="btn primary" id="renameCollection">${t('save')}</button>`);$('#renameCollection').onclick=()=>{const name=$('#collectionName').value.trim();if(!name)return errorInDialog(t('minimumName'));c.name=name;persist();closeDialog();renderSidebar();renderMain();toast(t('saved'))};$('#deleteCollection').onclick=()=>{openDialog(t('deleteCollectionQuestion'),`<p>${t('deleteCollectionDesc')}</p>`,`<button class="btn" data-action="close-dialog">${t('cancel')}</button><button class="btn danger" id="confirmDeleteCollection">${t('deleteCollection')}</button>`);$('#confirmDeleteCollection').onclick=()=>{stored.collections=stored.collections.filter(x=>x.id!==id);persist();closeDialog();if(state.collection===id){state.view='collections';state.collection=null;resetFilters()}renderSidebar();renderMain()}}}
function addToCollection(id){const a=assetById(id);if(!a)return;if(!stored.collections.length){newCollection(id);return}openDialog(t('addTo'),`<p>${t('selectCollection')}</p><p style="font-weight:650;color:var(--ink)">${esc(loc(a.title))}</p><div>${stored.collections.map(c=>`<label class="collection-choice">${icon('folder')}<span>${esc(collectionName(c))}</span><input type="checkbox" value="${esc(c.id)}" ${c.items.includes(id)?'checked':''}></label>`).join('')}</div>`,`<button class="btn" id="addNewCollection">${icon('plus')}${t('newCollection')}</button><button class="btn primary" id="saveCollectionChoices">${t('save')}</button>`);$('#addNewCollection').onclick=()=>newCollection(id);$('#saveCollectionChoices').onclick=async()=>{const selected=[...$('#dialog').querySelectorAll('input[type=checkbox]:checked')].map(x=>x.value);for(const c of stored.collections){c.items=c.items.filter(x=>x!==id);if(selected.includes(c.id))c.items.push(id)}$('#saveCollectionChoices').disabled=true;await persist();closeDialog();renderSidebar();renderMain();toast(t('updatedCollection'))}}
function openCollection(id){if(!collectionById(id))return;state.viewer=null;state.view='collection';state.collection=id;resetFilters();render();closeSidebar()}
let importFiles=[],editTags=[],editId=null,editPrimaryWordId=null;
function openImageEditor(id=null){editId=id;importFiles=[];const a=id?assetById(id):null;editTags=a?[...a.tags]:[];editPrimaryWordId=a?primaryWordIdFor(a):null;const secondary=lang==='ca'?'es':'ca';openDialog(t(a?'editImage':'addImageTitle'),`${!a?`<label class="drop-zone" id="dropZone">${icon('upload')}<strong id="fileLabel">${t('chooseFiles')}</strong><small>${t('fileTypes')}</small><input type="file" id="imageFiles" accept="image/png,image/jpeg,image/webp" multiple aria-label="${t('chooseFiles')}"></label>`:`<img class="import-preview" src="${esc(a.src)}" alt="${esc(loc(a.alt))}">`}<div class="two-cols field"><label>${t('name')}<input id="imageName" maxlength="180" value="${esc(a?.title?.[lang]||'')}" placeholder="${lang==='ca'?'Nom de la imatge':'Nombre de la imagen'}"></label><label>${t('nameEs')}<input id="imageNameOther" maxlength="180" value="${esc(a?.title?.[secondary]||'')}"></label></div><div class="field"><label>${t('words')}</label><p class="field-help">${t('aboutWords')}</p><div id="editorTags" class="selected-tags"></div><input id="tagSearch" placeholder="${t('findWords')}" autocomplete="off" style="width:100%" aria-label="${t('findWords')}"><div id="tagResults" class="tag-picker-results" hidden></div><label class="primary-word-field">${t('primaryWord')}<select id="imagePrimaryWord" aria-describedby="primaryWordHint"></select></label><p id="primaryWordHint" class="field-help">${t('primaryWordHint')}</p></div><div class="two-cols field"><label>${t('imageType')}<select id="imageKind"><option value="drawing" ${a?.kind==='drawing'?'selected':''}>${t('drawing')}</option><option value="photo" ${a?.kind==='photo'?'selected':''}>${t('photo')}</option></select></label><label>${t('description')}<textarea id="imageAlt" rows="2">${esc(a?.alt?.[lang]||'')}</textarea></label></div><div class="field"><label>${t('levels')}</label><div class="check-list" style="margin-top:8px">${CATALOG.levels.map(l=>`<label><input type="checkbox" name="imageLevel" value="${l.id}" ${(a?a.levels.includes(l.id):l.id===(state.level||1))?'checked':''}><span>${String(l.id).padStart(2,'0')} · ${esc(loc(l))}</span></label>`).join('')}</div></div>`,`<button class="btn" data-action="close-dialog">${t('cancel')}</button><button class="btn primary" id="saveImage">${icon(a?'check':'plus')}${t(a?'save':'addImages')}</button>`,true);
renderEditorTags();$('#tagSearch').addEventListener('input',renderTagResults);if(!a){$('#imageFiles').onchange=e=>acceptFiles([...e.target.files]);const zone=$('#dropZone');zone.ondragover=e=>{e.preventDefault();zone.classList.add('dragging')};zone.ondragleave=()=>zone.classList.remove('dragging');zone.ondrop=e=>{e.preventDefault();zone.classList.remove('dragging');acceptFiles([...e.dataTransfer.files])}}$('#saveImage').onclick=saveImageEditor}
function acceptFiles(files){if(!files.length)return;const valid=files.every(f=>['image/png','image/jpeg','image/webp'].includes(f.type)&&f.size<=25*1024*1024);if(!valid)return errorInDialog(t('invalidFile'));importFiles=files;$('#fileLabel').textContent=files.length===1?files[0].name:files.length+' '+t('fileCount');if(!$('#imageName').value)$('#imageName').value=files[0].name.replace(/\.[^.]+$/,'').replace(/[_-]+/g,' ')}
function renderEditorTags(){
if(!editTags.includes(editPrimaryWordId))editPrimaryWordId=editTags[0]||null;
$('#editorTags').innerHTML=editTags.map(id=>`<button class="filter-chip" type="button" data-editor-remove="${id}">${esc(tagName(id))}${icon('close')}</button>`).join('');
$('#editorTags').querySelectorAll('[data-editor-remove]').forEach(b=>b.onclick=()=>{editTags=editTags.filter(id=>id!==b.dataset.editorRemove);renderEditorTags();renderTagResults()});
const select=$('#imagePrimaryWord');select.disabled=!editTags.length;
select.innerHTML=editTags.length?editTags.map(id=>`<option value="${id}">${esc(tagName(id))}</option>`).join(''):`<option value="">${t('selectWords')}</option>`;
select.value=editPrimaryWordId||'';select.onchange=()=>{editPrimaryWordId=select.value};
}
function renderTagResults(){const box=$('#tagResults');if(!box)return;const q=$('#tagSearch').value;const list=wordCandidates(q,editTags);box.hidden=!q.trim();box.innerHTML=list.map(w=>`<button class="suggestion" type="button" data-editor-add="${w.id}">${icon('plus')}<span><strong>${esc(loc(w))}</strong><small>${esc(loc(CATEGORIES.get(w.category)))}</small></span></button>`).join('')||`<p class="suggestion-note">${t('noWord')}</p>`;box.querySelectorAll('[data-editor-add]').forEach(b=>b.onclick=()=>{editTags.push(b.dataset.editorAdd);$('#tagSearch').value='';renderEditorTags();renderTagResults();$('#tagSearch').focus()})}
function readDataURL(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=()=>reject(r.error);r.readAsDataURL(file)})}
async function saveImageEditor(){const levels=[...$('#dialog').querySelectorAll('[name=imageLevel]:checked')].map(x=>Number(x.value));if(!editTags.length)return errorInDialog(t('selectWords'));if(!editTags.includes(editPrimaryWordId)||!WORDS.has(editPrimaryWordId))return errorInDialog(t('selectPrimaryWord'));if(!levels.length)return errorInDialog(t('selectLevels'));if(!editId&&!importFiles.length)return errorInDialog(t('pickFile'));const title=$('#imageName').value.trim();if(!title)return errorInDialog(t('minimumName'));const other=$('#imageNameOther').value.trim();const kind=$('#imageKind').value;const alt=$('#imageAlt').value.trim()||title;const names=lang==='ca'?{ca:title,es:other}:{ca:other,es:title};const button=$('#saveImage');button.disabled=true;
try{if(editId){const previous=assetById(editId);const updated={...previous,title:names,alt:{...(previous.alt||{}),[lang]:alt},kind,tags:[...editTags],primaryWordId:editPrimaryWordId,levels};stored.assets=[...stored.assets.filter(a=>a.id!==editId),updated]}else{const added=[];for(const file of importFiles){const src=await readDataURL(file);const autoTitle=importFiles.length>1?file.name.replace(/\.[^.]+$/,'').replace(/[_-]+/g,' '):null;added.push({id:'image-'+uid(),src,title:autoTitle?{...names,[lang]:autoTitle}:names,alt:{ca:'',es:'',[lang]:alt},kind,tags:[...editTags],primaryWordId:editPrimaryWordId,levels,origin:'personal',created:new Date().toISOString(),credit:''})}stored.assets=[...stored.assets,...added]}await persist();closeDialog();renderSidebar();renderMain();toast(t(editId?'saved':'addedImages'))}catch{errorInDialog(t('unexpectedError'));button.disabled=false}}
function downloadBlob(blob,name){const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),20000)}
function filename(title){return norm(title).replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,90)||'cace-imatge'}
async function downloadImage(id){const a=assetById(id);if(!a)return;try{const blob=await(await fetch(a.src)).blob();downloadBlob(blob,filename(loc(a.title))+'.'+(blob.type==='image/jpeg'?'jpg':blob.type==='image/webp'?'webp':'png'))}catch{toast(t('unexpectedError'))}}
function backupDialog(){openDialog(t('backupTitle'),`<div class="dialog-illustration">${icon('backup')}</div><p>${t('backupDesc')}</p><p>${t('importDesc')}</p>`,`<button class="btn" id="importBackup">${icon('upload')}${t('importBackup')}</button><button class="btn primary" id="exportBackup">${icon('download')}${t('exportBackup')}</button>`);$('#importBackup').onclick=()=>$('#backupFile').click();$('#exportBackup').onclick=exportBackup}
async function exportBackup(){const button=$('#exportBackup');if(button)button.disabled=true;toast(t('exporting'));try{const rows=[];for(const a of stored.assets){let src=a.src;if(!src.startsWith('data:'))src=await readDataURL(await(await fetch(src)).blob());rows.push({...a,src,primaryWordId:primaryWordIdFor(a)})}const backup={format:'cace-imatges-backup',version:1,catalogVersion:CATALOG.version,exported:new Date().toISOString(),assets:rows,favorites:stored.favorites,collections:stored.collections};downloadBlob(new Blob([JSON.stringify(backup)],{type:'application/json'}),'CACE_Imatges_copia_'+new Date().toISOString().slice(0,10)+'.json');toast(t('exported'))}catch{errorInDialog(t('unexpectedError'))}finally{if(button)button.disabled=false}}
function validateBackup(raw){if(raw?.format!=='cace-imatges-backup'||raw.version!==1||!Array.isArray(raw.assets)||!Array.isArray(raw.collections))throw Error('Format');const safeAssets=[];for(const a of raw.assets){if(typeof a.id!=='string'||!a.id||a.id.length>150||typeof a.src!=='string'||!/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=\s]+$/.test(a.src)||!a.title||!Array.isArray(a.tags)||!Array.isArray(a.levels))throw Error('Image');const tags=[...new Set(a.tags.filter(id=>WORDS.has(id)))],levels=[...new Set(a.levels.filter(id=>LEVELS.has(id)))];if(!tags.length||!levels.length)throw Error('Tags');const ca=String(a.title.ca||'').slice(0,180),es=String(a.title.es||'').slice(0,180);if(!ca&&!es)throw Error('Title');if(a.primaryWordId!=null&&!tags.includes(a.primaryWordId))throw Error('Primary word');const primaryWordId=primaryWordIdFor({...a,title:{ca,es},tags});safeAssets.push({id:a.id,src:a.src,title:{ca,es},alt:{ca:String(a.alt?.ca||'').slice(0,3000),es:String(a.alt?.es||'').slice(0,3000)},tags,primaryWordId,levels,kind:a.kind==='photo'?'photo':'drawing',origin:BASE.get(a.id)?.origin||'personal',credit:String(a.credit||'').slice(0,300),created:String(a.created||new Date().toISOString()).slice(0,50)})}
const ids=new Set([...assets().map(a=>a.id),...safeAssets.map(a=>a.id)]);const collections=raw.collections.map(c=>{if(typeof c.id!=='string'||!c.id||typeof c.name!=='string'||!Array.isArray(c.items))throw Error('Collection');return{id:c.id.slice(0,150),name:c.name.slice(0,100),items:[...new Set(c.items.filter(id=>ids.has(id)))]}});return{assets:safeAssets,collections,favorites:(Array.isArray(raw.favorites)?raw.favorites:[]).filter(id=>ids.has(id))}}
async function importBackup(file){if(!file)return;try{if(file.size>150*1024*1024)throw Error('Size');const data=validateBackup(JSON.parse(await file.text()));const imageMap=new Map(stored.assets.map(a=>[a.id,a]));data.assets.forEach(a=>imageMap.set(a.id,a));stored.assets=[...imageMap.values()];stored.favorites=[...new Set([...stored.favorites,...data.favorites])];for(const c of data.collections){const existing=collectionById(c.id);if(existing){existing.items=[...new Set([...existing.items,...c.items])]}else stored.collections.push(c)}syncCatalogCollections();await persist();closeDialog();render();toast(t('imported'))}catch{if($('#dialog').open)errorInDialog(t('invalidBackup'));else toast(t('invalidBackup'))}finally{$('#backupFile').value=''}}
// The information window also holds the credits (origin, institutions, tools, licences and references), as in UTAC Keryx.
function aboutDialog(){openDialog(t('about'),`<div class="credits"><div class="credits-logo"><img src="brand/utac.webp" alt="UTAC" width="223" height="128"><img class="credits-mark" src="brand/cace-horitzontal.svg" alt="CACE Imatges" width="1544.8" height="531.3"></div><p>${t('aboutDesc')}</p><p>${t('aboutSample').replace('{count}',CATALOG.assets.length)}</p><div class="about-grid"><div><strong>${assets().length}</strong><span>${t('images')}</span></div><div><strong>${CATALOG.words.length}</strong><span>${t('wordCount')}</span></div></div><p>${t('aboutWords')}</p><p>${t('aboutFull')}</p><p>${t('local')}</p><h3>${t('caceTitle')}</h3><p>${t('caceText')}</p><p><a href="https://www.utac.cat/descarregues/cace-utac/" target="_blank" rel="noopener noreferrer">${t('caceLink')}</a> · www.utac.cat/descarregues/cace-utac</p>${creditsHTML()}<p class="credits-version">UTAC · CACE Imatges · ${t('version')} ${esc(CATALOG.version)}</p></div>`,`<button class="btn primary" data-action="close-dialog">${t('close')}</button>`,true)}
// Credits, adapted from the information window of UTAC Keryx: origin, institutions, tools, licences and references.
Object.assign(strings.ca,{credits:'Crèdits',creditsTitle:'Crèdits de CACE Imatges',caceTitle:'Què és el CACE',caceText:'El CACE-UTAC és un recull de vocabulari de més de 800 paraules, organitzat per camps semàntics, que ha elaborat la UTAC per a la comunicació augmentativa i alternativa. Es pot descarregar en versions per a diversos programes de comunicació i en diverses llengües. CACE Imatges n’utilitza les 861 entrades per etiquetar les imatges.',caceLink:'Descarregar el CACE-UTAC',creditsOrigin:'Origen i institucions',creditsOriginText:'CACE Imatges s’ha creat des de la Unitat de Tècniques Augmentatives de Comunicació (UTAC), fent servir eines d’intel·ligència artificial. El vocabulari és el CACE-UTAC, també de la UTAC.',creditsUtac:'La UTAC és un equip de la Universitat de Barcelona i de la Fundació Bosch i Gimpera. Concreta la seva activitat a partir de dos serveis de la Generalitat de Catalunya: UTAC Educació, del Departament d’Educació i Formació Professional, i UTAC Sírius, del Departament de Drets Socials i Inclusió.',creditsTools:'Eines i recursos',creditsVocabulary:'Vocabulari',creditsApp:'Aplicació',creditsImages:'Imatges',creditsImagesOwner:'Generació d’imatges de ChatGPT i Codex · OpenAI',creditsLicences:'Llicències',creditsLicenceText:'CACE Imatges és lliure. El codi de l’aplicació té la llicència GNU GPL 3.0 o posterior: es pot fer servir, estudiar, modificar i compartir, i les versions modificades s’han de compartir amb la mateixa llicència. Les imatges, les seves descripcions i el catàleg tenen la llicència Creative Commons Reconeixement-CompartirIgual 4.0 Internacional (CC BY-SA 4.0): es poden copiar, adaptar i difondre per a qualsevol finalitat, citant «CACE Imatges, UTAC», i les adaptacions s’han de compartir amb la mateixa llicència.',creditsLogos:'Els logotips de la UTAC, la Universitat de Barcelona, la Fundació Bosch i Gimpera i la Generalitat de Catalunya pertanyen a les seves institucions i no s’inclouen en aquestes llicències.',creditsAi:'Les imatges s’han generat amb IA. Les fotografies són sintètiques. La revisió de producció no equival a una validació clínica o psicomètrica dels estímuls.',creditsSource:'Codi font',creditsReferences:'Referències',creditsVersion:'Versió'});
Object.assign(strings.es,{credits:'Créditos',creditsTitle:'Créditos de CACE Imatges',caceTitle:'Qué es el CACE',caceText:'El CACE-UTAC es una recopilación de vocabulario de más de 800 palabras, organizada por campos semánticos, que ha elaborado la UTAC para la comunicación aumentativa y alternativa. Se puede descargar en versiones para varios programas de comunicación y en varias lenguas. CACE Imatges utiliza sus 861 entradas para etiquetar las imágenes.',caceLink:'Descargar el CACE-UTAC',creditsOrigin:'Origen e instituciones',creditsOriginText:'CACE Imatges se ha creado desde la Unitat de Tècniques Augmentatives de Comunicació (UTAC), utilizando herramientas de inteligencia artificial. El vocabulario es el CACE-UTAC, también de la UTAC.',creditsUtac:'La UTAC es un equipo de la Universitat de Barcelona y de la Fundació Bosch i Gimpera. Concreta su actividad a partir de dos servicios de la Generalitat de Catalunya: UTAC Educació, del Departament d’Educació i Formació Professional, y UTAC Sírius, del Departament de Drets Socials i Inclusió.',creditsTools:'Herramientas y recursos',creditsVocabulary:'Vocabulario',creditsApp:'Aplicación',creditsImages:'Imágenes',creditsImagesOwner:'Generación de imágenes de ChatGPT y Codex · OpenAI',creditsLicences:'Licencias',creditsLicenceText:'CACE Imatges es libre. El código de la aplicación tiene la licencia GNU GPL 3.0 o posterior: se puede usar, estudiar, modificar y compartir, y las versiones modificadas deben compartirse con la misma licencia. Las imágenes, sus descripciones y el catálogo tienen la licencia Creative Commons Reconocimiento-CompartirIgual 4.0 Internacional (CC BY-SA 4.0): se pueden copiar, adaptar y difundir para cualquier finalidad, citando «CACE Imatges, UTAC», y las adaptaciones deben compartirse con la misma licencia.',creditsLogos:'Los logotipos de la UTAC, la Universitat de Barcelona, la Fundació Bosch i Gimpera y la Generalitat de Catalunya pertenecen a sus instituciones y no se incluyen en estas licencias.',creditsAi:'Las imágenes se han generado con IA. Las fotografías son sintéticas. La revisión de producción no equivale a una validación clínica o psicométrica de los estímulos.',creditsSource:'Código fuente',creditsReferences:'Referencias',creditsVersion:'Versión'});
function creditsHTML(){
  const link=(label,url)=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;
  const institutions=[['utac-credits','UTAC','https://www.utac.cat/','Unitat de Tècniques Augmentatives de Comunicació'],['ub','Universitat de Barcelona','https://web.ub.edu/','Universitat de Barcelona'],['fbg','Fundació Bosch i Gimpera','https://www.fbg.ub.edu/','Fundació Bosch i Gimpera'],['gencat-educacio','Departament d’Educació i Formació Professional','https://educacio.gencat.cat/','UTAC Educació · Departament d’Educació i Formació Professional'],['gencat-drets-socials','Departament de Drets Socials i Inclusió','https://dretssocials.gencat.cat/','UTAC Sírius · Departament de Drets Socials i Inclusió']];
  const tools=[[t('creditsVocabulary'),'CACE-UTAC','UTAC','https://www.utac.cat/descarregues/cace-utac/'],[t('creditsImages'),'ChatGPT · Codex',t('creditsImagesOwner'),'https://openai.com/'],[t('creditsApp'),'Codex · Claude','OpenAI · Anthropic',['https://openai.com/codex/','https://claude.ai/']]];
  const refs=[['Creative Commons. (2013). Attribution-ShareAlike 4.0 International (CC BY-SA 4.0).','https://creativecommons.org/licenses/by-sa/4.0/'],['Free Software Foundation. (2007). GNU General Public License, version 3.','https://www.gnu.org/licenses/gpl-3.0.html'],[(lang==='ca'?'Unitat de Tècniques Augmentatives de Comunicació. (s. d.). CACE-UTAC. Universitat de Barcelona.':'Unitat de Tècniques Augmentatives de Comunicació. (s. f.). CACE-UTAC. Universitat de Barcelona.'),'https://www.utac.cat/descarregues/cace-utac/']];
  return `<h3>${t('creditsOrigin')}</h3><p>${t('creditsOriginText')}</p><p>${t('creditsUtac')}</p>
<div class="credits-institutions">${institutions.map(([file,alt,url,caption])=>`<figure><a href="${url}" target="_blank" rel="noopener noreferrer"><img src="brand/${file}.webp" alt="${esc(alt)}" loading="lazy"></a><figcaption>${esc(caption)}</figcaption></figure>`).join('')}</div>
<h3>${t('creditsTools')}</h3><ul class="credits-tools">${tools.map(([use,product,owner,url])=>`<li><span class="use">${esc(use)}</span><strong>${esc(product)}</strong><span>${esc(owner)}</span><span>${[].concat(url).map(u=>link(u.replace(/^https?:\/\//,'').replace(/\/$/,''),u)).join(' · ')}</span></li>`).join('')}</ul>
<h3>${t('creditsLicences')}</h3><p>${t('creditsLicenceText')}</p><p>${link(t('creditsSource'),'https://github.com/utacub/cace_imgs')} · ${link('GNU GPL 3.0','https://www.gnu.org/licenses/gpl-3.0.html')} · ${link('CC BY-SA 4.0','https://creativecommons.org/licenses/by-sa/4.0/deed.'+lang)}</p><p>${t('creditsLogos')}</p><p>${t('creditsAi')}</p>
<h3>${t('creditsReferences')}</h3>${refs.map(([text,url])=>`<p class="credits-ref">${esc(text)} ${link(url,url)}</p>`).join('')}`}
function setLanguage(next){lang=next;try{localStorage.setItem('cace-language',lang)}catch{}closeSuggestions();render();pwaRenderButton()}
function changeFacet(key,value){if(state.present)exitPresentation();state.viewer=null;if(state.view==='collections'){state.view='library';state.collection=null}state[key]=value;renderSidebar();renderMain();closeSidebar()}
// Double click on a gallery image: the first click opens the viewer, the second one (wherever it lands) goes to fullscreen.
let galleryOpenAt=0;
document.addEventListener('click',async e=>{if(e.detail>1&&state.viewer&&Date.now()-galleryOpenAt<700){e.preventDefault();galleryOpenAt=0;if(!state.present)enterPresentation();return}const b=e.target.closest('[data-action]');if(!b){if(!e.target.closest('.search-wrap'))closeSuggestions();return}const action=b.dataset.action,id=b.dataset.id;e.preventDefault();try{switch(action){
case'library':rootView('library');break;case'favorites':rootView('favorites');break;case'collections':rootView('collections');break;case'open-collection':openCollection(id);break;case'new-collection':newCollection();break;case'rename-collection':renameCollection(id);break;case'category':changeFacet('category',state.category===id?null:id);break;case'expand-categories':state.categoriesExpanded=!state.categoriesExpanded;renderSidebar();break;case'kind':state.kind=id;state.drawingStyle='';renderMain();break;case'layout':state.layout=id;stored.preferences.layout=id;persist();renderMain();break;case'remove-level':state.level=null;renderSidebar();renderMain();break;case'remove-category':state.category=null;renderSidebar();renderMain();break;case'remove-tag':state.tags=state.tags.filter(x=>x!==id);renderMain();break;case'clear-query':state.query='';renderTop();renderMain();closeSuggestions();break;case'reset-filters':resetFilters();renderSidebar();renderMain();break;case'tag':case'search-word':chooseTag(id);break;case'open-image':galleryOpenAt=Date.now();openViewer(id);break;case'fullscreen-card':openViewer(id,true);break;case'related-image':state.viewer=id;state.controlsHidden=false;renderViewer();break;case'favorite':toggleFavorite(id);break;case'fullscreen':enterPresentation();break;case'exit-presentation':exitPresentation();break;case'close-viewer':closeViewer();break;case'previous':stepViewer(-1);break;case'next':stepViewer(1);break;case'toggle-labels':state.labels=!state.labels;renderViewer();break;case'toggle-controls':state.controlsHidden=true;syncPresentation();break;case'stage':if(state.present){state.controlsHidden=!state.controlsHidden;syncPresentation()}break;case'add-to-collection':if(state.present)exitPresentation();addToCollection(id);break;case'import-images':closeSuggestions();openImageEditor();break;case'edit-image':openImageEditor(id);break;case'download-image':downloadImage(id);break;case'print':window.print();break;case'close-dialog':closeDialog();break;case'backup':backupDialog();break;case'about':aboutDialog();break;
}}catch(err){console.error('CACE action failed',err);toast(t('unexpectedError'))}});
document.addEventListener('change',e=>{const id=e.target.id;if(id==='categoryFilter')changeFacet('category',e.target.value||null);if(id==='drawingStyleFilter'){state.drawingStyle=e.target.value;renderMain()}if(id==='sortSelect'){state.sort=e.target.value;renderMain()}if(id==='wordMode'){state.wordMode=e.target.value;renderMain()}});
$('#search').addEventListener('input',e=>{state.query=e.target.value;$('#clearSearch').hidden=!state.query;if(state.viewer){state.viewer=null;if(state.present)exitPresentation()}if(state.view==='collections')state.view='library';renderMain();showSuggestions()});
$('#search').addEventListener('focus',()=>{if(state.query)showSuggestions()});
$('#search').addEventListener('keydown',e=>{if(e.key==='ArrowDown'){e.preventDefault();if($('#searchSuggestions').hidden)showSuggestions();highlightSuggestion(1)}if(e.key==='ArrowUp'){e.preventDefault();highlightSuggestion(-1)}if(e.key==='Escape'){closeSuggestions()}if(e.key==='Enter'){e.preventDefault();const opts=[...$('#searchSuggestions').querySelectorAll('.suggestion')];if(suggestionIndex>=0&&opts[suggestionIndex])chooseTag(opts[suggestionIndex].dataset.id);else{closeSuggestions();$('#search').blur()}}});
$('#clearSearch').onclick=()=>{state.query='';renderTop();renderMain();closeSuggestions();$('#search').focus()};
$('#langCa').onclick=()=>setLanguage('ca');$('#langEs').onclick=()=>setLanguage('es');
$('#menuToggle').onclick=()=>$('#sidebar').classList.toggle('open');$('#sidebarShade').onclick=closeSidebar;
$('#backupFile').onchange=e=>importBackup(e.target.files[0]);
$('#dialog').addEventListener('click',e=>{if(e.target===$('#dialog')){const r=$('#dialog').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeDialog()}});
document.addEventListener('dblclick',e=>{if(state.viewer&&!state.present&&e.target.closest('.image-stage'))enterPresentation()});
document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement&&state.present){state.present=false;state.controlsHidden=false;syncPresentation()}});
document.addEventListener('keydown',e=>{if($('#dialog').open)return;if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName))return;if(e.key==='Escape'){if(state.present)exitPresentation();else if(state.viewer)closeViewer();else closeSidebar()}if(state.viewer&&e.key==='ArrowRight'){e.preventDefault();stepViewer(1)}if(state.viewer&&e.key==='ArrowLeft'){e.preventDefault();stepViewer(-1)}if(state.viewer&&e.key.toLowerCase()==='f'){e.preventDefault();state.present?exitPresentation():enterPresentation()}if(state.present&&e.key===' '){e.preventDefault();state.controlsHidden=!state.controlsHidden;syncPresentation()}});

/* Installable app (PWA). The «Instal·lar» button opens a window that says how much the app takes on
   the device and lets the person choose which images are also kept without a connection: none in
   advance (each one is kept the first time it is shown), all of them, or only some collections.
   Chromium browsers (Chrome, Edge, Samsung Internet…) on Windows, Android, ChromeOS, macOS and
   Linux open their own install prompt from the window. Safari (iPhone, iPad, and Mac with Sonoma
   or later) has no prompt: the window explains the steps, and the installed app, which keeps its
   data apart from the browser, asks the choice the first time it opens. The service worker is
   src/sw.js; the sizes come from offline.json, written by scripts/build.py. */
Object.assign(strings.ca,{install:'Instal·lar',installApp:'Instal·lar CACE Imatges',offlineImages:'Imatges sense connexió',installIntro:'Instal·lada, l’app s’obre des de la seva icona, en una finestra pròpia, i funciona sense connexió. Per això es descarrega en aquest dispositiu.',setupIntro:'Perquè CACE Imatges funcioni sense connexió, les imatges que triïs es descarreguen en aquest dispositiu.',offlineWhat:'Quines imatges vols tenir sense connexió?',offlineApp:'Només l’app',offlineAppHint:'Cada imatge es desa la primera vegada que l’obres: sense connexió només es veuen les que ja has vist.',offlineAll:'Totes les imatges',offlineAllHint:'Tota la biblioteca es veu també sense connexió.',offlineSome:'Només algunes col·leccions',offlineSomeHint:'Tria les col·leccions que vols tenir sempre a mà.',offlineWifi:'Es recomana fer-ho amb una connexió wifi.',offlineFree:'Espai disponible per a aquesta app al navegador: {free} MB.',offlineLow:'Potser no hi ha prou espai: calen uns {need} MB i el navegador en té {free} MB disponibles.',offlineLowHint:'Pots triar menys col·leccions o només l’app.',offlineTotal:'Cal descarregar: {need} MB.',offlineNothing:'Ja ho tens tot en aquest dispositiu.',offlineCalculating:'Calculant l’espai que ocupa…',offlineAppSize:'L’app ocupa uns {app} MB. Totes les imatges sumen {all} MB més: ho podràs triar el primer cop que obris l’app instal·lada.',offlinePickOne:'Tria almenys una col·lecció.',next:'Següent',downloadBtn:'Descarregar',notNow:'Ara no',retry:'Tornar-ho a provar',agreed:'D’acord',offlineProgress:'{x} de {y} MB ({p} %)',offlineDone:'Fet! Les imatges triades ja es veuen sense connexió en aquest dispositiu.',offlineFailed:'No s’ha pogut descarregar tot. Torna-ho a provar.',offlineNoNet:'No hi ha connexió a internet. Torna-ho a provar quan n’hi hagi.',offlineInBackground:'La descàrrega continua encara que tanquis aquesta finestra.',installing:'CACE Imatges s’està instal·lant',installed:'CACE Imatges s’ha instal·lat.',iosStep1:'Toca el botó «Compartir» (el quadrat amb una fletxa cap amunt), a dalt o a baix de la pantalla.',iosStep2:'Tria «Afegir a la pantalla d’inici». Si no hi és, llisca la llista cap avall.',iosStep3:'Toca «Afegir». CACE Imatges apareixerà a la pantalla d’inici com una app més.',macStep1:'Al menú «Arxiu» de Safari, tria «Afegir al Dock».',macStep2:'Fes clic a «Afegir». CACE Imatges s’obrirà en una finestra pròpia, des del Dock.',installMenu:'Aquest navegador encara no ofereix la instal·lació directament. Si CACE Imatges ja està instal·lada, obre-la des de la seva icona. Si no, obre el menú del navegador (⋮) i tria «Instal·la CACE Imatges» o «Afegeix a la pantalla d’inici».',stepsAfter:'El primer cop que obris l’app instal·lada, podràs triar quines imatges vols tenir sense connexió.',offlineReady:'Les imatges triades ja es veuen sense connexió.'});
Object.assign(strings.es,{install:'Instalar',installApp:'Instalar CACE Imatges',offlineImages:'Imágenes sin conexión',installIntro:'Instalada, la app se abre desde su icono, en una ventana propia, y funciona sin conexión. Por eso se descarga en este dispositivo.',setupIntro:'Para que CACE Imatges funcione sin conexión, las imágenes que elijas se descargan en este dispositivo.',offlineWhat:'¿Qué imágenes quieres tener sin conexión?',offlineApp:'Solo la app',offlineAppHint:'Cada imagen se guarda la primera vez que la abres: sin conexión solo se ven las que ya has visto.',offlineAll:'Todas las imágenes',offlineAllHint:'Toda la biblioteca se ve también sin conexión.',offlineSome:'Solo algunas colecciones',offlineSomeHint:'Elige las colecciones que quieres tener siempre a mano.',offlineWifi:'Se recomienda hacerlo con una conexión wifi.',offlineFree:'Espacio disponible para esta app en el navegador: {free} MB.',offlineLow:'Puede que no haya espacio suficiente: hacen falta unos {need} MB y el navegador tiene {free} MB disponibles.',offlineLowHint:'Puedes elegir menos colecciones o solo la app.',offlineTotal:'Hay que descargar: {need} MB.',offlineNothing:'Ya lo tienes todo en este dispositivo.',offlineCalculating:'Calculando el espacio que ocupa…',offlineAppSize:'La app ocupa unos {app} MB. Todas las imágenes suman {all} MB más: podrás elegirlo la primera vez que abras la app instalada.',offlinePickOne:'Elige al menos una colección.',next:'Siguiente',downloadBtn:'Descargar',notNow:'Ahora no',retry:'Volver a intentarlo',agreed:'De acuerdo',offlineProgress:'{x} de {y} MB ({p} %)',offlineDone:'¡Hecho! Las imágenes elegidas ya se ven sin conexión en este dispositivo.',offlineFailed:'No se ha podido descargar todo. Vuelve a intentarlo.',offlineNoNet:'No hay conexión a internet. Vuelve a intentarlo cuando la haya.',offlineInBackground:'La descarga continúa aunque cierres esta ventana.',installing:'CACE Imatges se está instalando',installed:'CACE Imatges se ha instalado.',iosStep1:'Toca el botón «Compartir» (el cuadrado con una flecha hacia arriba), arriba o abajo de la pantalla.',iosStep2:'Elige «Añadir a pantalla de inicio». Si no está, desliza la lista hacia abajo.',iosStep3:'Toca «Añadir». CACE Imatges aparecerá en la pantalla de inicio como una app más.',macStep1:'En el menú «Archivo» de Safari, elige «Añadir al Dock».',macStep2:'Haz clic en «Añadir». CACE Imatges se abrirá en una ventana propia, desde el Dock.',installMenu:'Este navegador aún no ofrece la instalación directamente. Si CACE Imatges ya está instalada, ábrela desde su icono. Si no, abre el menú del navegador (⋮) y elige «Instalar CACE Imatges» o «Añadir a pantalla de inicio».',stepsAfter:'La primera vez que abras la app instalada, podrás elegir qué imágenes quieres tener sin conexión.',offlineReady:'Las imágenes elegidas ya se ven sin conexión.'});
const PWA={prompt:null,sizes:null,running:false,KEY:'cace-sense-connexio',IMAGES:'cace-imatges'};
const fill=(text,vars)=>text.replace(/\{(\w+)\}/g,(_,k)=>vars[k]??'');
const pwaHttp=typeof location!=='undefined'&&(location.protocol==='https:'||/^(localhost|127\.)/.test(location.hostname));
// The single offline HTML file embeds every image and cannot be installed.
const pwaWeb=pwaHttp&&!String(CATALOG.assets[0]?.src||'').startsWith('data:');
const pwaStandalone=()=>['standalone','fullscreen','minimal-ui','window-controls-overlay'].some(m=>matchMedia(`(display-mode: ${m})`).matches)||navigator.standalone===true;
// iPadOS says it is a Mac: a Mac with a touch screen is an iPad.
const UA=typeof navigator!=='undefined'?navigator.userAgent||'':'';
const pwaIOS=pwaWeb&&(/iPad|iPhone|iPod/.test(UA)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1));
// Safari 17 or later on a Mac (macOS Sonoma) can add a web app to the Dock.
const pwaMacSafari=pwaWeb&&!pwaIOS&&/Macintosh/.test(UA)&&Number(/Version\/(\d+)/.exec(UA)?.[1]||0)>=17&&/Safari\//.test(UA)&&!/Chrome|Chromium|CriOS|Edg|OPR|Firefox|FxiOS/.test(UA);
const pwaCanCache=pwaWeb&&'serviceWorker' in navigator&&typeof caches!=='undefined';
// Chromium browsers announce that the app can be installed a few seconds after the page loads. The
// button does not wait for it: it is shown at once wherever installing is possible.
const pwaChromium=pwaWeb&&typeof window!=='undefined'&&'onbeforeinstallprompt' in window;
function pwaWay(){if(!pwaWeb)return null;if(pwaStandalone())return pwaCanCache?'setup':null;if(PWA.prompt)return 'prompt';if(pwaIOS)return 'ios';if(pwaMacSafari)return 'mac';if(pwaChromium)return 'prompt';return null}
const mb=bytes=>Math.max(bytes>0?1:0,Math.round(bytes/1e6)).toLocaleString(lang==='es'?'es-ES':'ca-ES');
function pwaSaved(){try{const v=JSON.parse(localStorage.getItem(PWA.KEY)||'null');if(v&&['app','all','some'].includes(v.mode))return{mode:v.mode,collections:Array.isArray(v.collections)?v.collections.filter(id=>DEFAULT_COLLECTIONS.has(id)):[]}}catch{}return null}
function pwaSave(choice){try{localStorage.setItem(PWA.KEY,JSON.stringify(choice))}catch{}}
async function pwaSizes(){if(PWA.sizes)return PWA.sizes;const r=await fetch('offline.json',{cache:'no-cache'});if(!r.ok)throw Error('offline.json');return PWA.sizes=await r.json()}
// The images a choice keeps without a connection, as their paths.
function pwaChoiceSrcs(choice){if(choice.mode==='all')return CATALOG.assets.map(a=>a.src);if(choice.mode!=='some')return[];const ids=new Set(choice.collections.flatMap(id=>DEFAULT_COLLECTIONS.get(id)?.items||[]));return CATALOG.assets.filter(a=>ids.has(a.id)).map(a=>a.src)}
// Images already on the device. Those that are no longer in the catalogue are deleted.
async function pwaCached(){const cache=await caches.open(PWA.IMAGES),keys=await cache.keys(),live=new Set(CATALOG.assets.map(a=>a.src)),have=new Set(),scope=new URL('./',location.href).pathname;for(const req of keys){const path=new URL(req.url).pathname;const rel=path.startsWith(scope)?decodeURI(path.slice(scope.length)):path;if(live.has(rel))have.add(rel);else await cache.delete(req)}return have}
async function pwaFree(){try{const e=await navigator.storage?.estimate?.();return e?.quota?Math.max(0,e.quota-(e.usage||0)):null}catch{return null}}
// Each image is read in full before it is saved: a cache write that waits for the network would hold
// back the images the page is showing meanwhile (see the speed rules in src/sw.js).
async function pwaDownload(srcs,onProgress,signal){await navigator.storage?.persist?.().catch(()=>false);const sizes=await pwaSizes(),have=await pwaCached(),cache=await caches.open(PWA.IMAGES);const todo=srcs.filter(s=>!have.has(s));const total=todo.reduce((n,s)=>n+(sizes.images[s]||0),0);let loaded=0,failed=0,next=0;onProgress(0,total);
  async function worker(){while(next<todo.length&&!signal?.aborted){const src=todo[next++];try{const res=await fetch(src,{cache:'no-cache'});if(!res.ok)throw Error(res.status);const body=await res.blob();await cache.put(src,new Response(body,{headers:res.headers}))}catch{failed++}loaded+=sizes.images[src]||0;onProgress(loaded,total)}}
  await Promise.all(Array.from({length:6},worker));return{failed,total}}
function pwaRenderButton(){if(!pwaWeb)return;const b=$('#installBtn');if(!b)return;const w=pwaWay();b.hidden=!w;if(!w)return;const label=w==='setup'?t('offlineImages'):t('install');b.innerHTML=icon('download')+`<span>${esc(label)}</span>`;b.title=w==='setup'?t('offlineImages'):t('installApp');b.setAttribute('aria-label',b.title)}
function pwaDialog(mode){const choosing=mode==='prompt'||mode==='setup';let choice=pwaSaved()||{mode:'app',collections:[]};let st=null;
  const collections=[...DEFAULT_COLLECTIONS.values()];
  const radio=(value,title,hint)=>`<label class="install-option"><input type="radio" name="installChoice" value="${value}" ${choice.mode===value?'checked':''}><span><strong>${esc(title)}</strong> <span class="install-size" data-size="${value}"></span><span class="install-hint">${esc(hint)}</span></span></label>`;
  const picks=`<div class="install-collections" id="installCollections" ${choice.mode==='some'?'':'hidden'}>${collections.map(c=>`<label class="install-collection"><input type="checkbox" value="${esc(c.id)}" ${choice.collections.includes(c.id)?'checked':''}><span>${esc(collectionName(c))}</span><span class="install-size" data-collection="${esc(c.id)}"></span></label>`).join('')}</div>`;
  const options=choosing?`<fieldset class="install-options"><legend>${t('offlineWhat')}</legend>${radio('app',t('offlineApp'),t('offlineAppHint'))}${radio('all',t('offlineAll'),t('offlineAllHint'))}${radio('some',t('offlineSome'),t('offlineSomeHint'))}${picks}</fieldset>`:`<p id="installSizeLine">${t('offlineCalculating')}</p>`;
  const body=`<div class="install-dialog"><p>${t(mode==='setup'?'setupIntro':'installIntro')}</p>${options}<p class="install-wifi">${t('offlineWifi')}</p><p class="install-space" id="installSpace" aria-live="polite">${choosing?t('offlineCalculating'):''}</p><div class="install-progress" id="installProgress" hidden><progress id="installBar" max="1" value="0"></progress><span id="installBarLabel"></span></div><p class="install-message" id="installMessage" role="status" hidden></p></div>`;
  const goLabel=mode==='prompt'?t('install'):mode==='setup'?t('downloadBtn'):t('next');
  openDialog(mode==='setup'?t('offlineImages'):t('installApp'),body,`<button class="btn" id="installCancel" type="button">${t(mode==='setup'?'notNow':'cancel')}</button><button class="btn primary" id="installGo" type="button">${esc(goLabel)}</button>`,true);
  const d=$('#dialog'),go=$('#installGo'),cancel=$('#installCancel');cancel.onclick=closeDialog;
  const current=()=>{const mode=d.querySelector('input[name=installChoice]:checked')?.value||'app';return{mode,collections:[...d.querySelectorAll('#installCollections input:checked')].map(i=>i.value)}};
  async function refresh(){if(!st)return;const c=current();choice=c;$('#installCollections').hidden=c.mode!=='some';const need=pwaChoiceSrcs(c).filter(s=>!st.have.has(s)).reduce((n,s)=>n+(st.sizes.images[s]||0),0);const free=await pwaFree();const space=$('#installSpace');if(!space)return;space.classList.remove('warn');go.disabled=c.mode==='some'&&!c.collections.length;
    let text=c.mode==='some'&&!c.collections.length?t('offlinePickOne'):need>0?fill(t('offlineTotal'),{need:mb(need)}):t('offlineNothing');
    if(free!==null&&need>0&&free<need*1.1){space.classList.add('warn');text=fill(t('offlineLow'),{need:mb(need),free:mb(free)})+' '+t('offlineLowHint')}else if(free!==null)text+=' '+fill(t('offlineFree'),{free:mb(free)});space.textContent=text}
  (async()=>{try{const sizes=await pwaSizes();const have=pwaCanCache?await pwaCached():new Set();st={sizes,have};
    const bytes=srcs=>srcs.reduce((n,s)=>n+(sizes.images[s]||0),0);const allBytes=bytes(CATALOG.assets.map(a=>a.src));
    if(choosing){d.querySelector('[data-size=app]').textContent='· '+mb(sizes.app)+' MB';d.querySelector('[data-size=all]').textContent='· '+mb(sizes.app+allBytes)+' MB';
      for(const c of collections){const el=d.querySelector(`[data-collection="${CSS.escape(c.id)}"]`);if(el)el.textContent=mb(bytes(pwaChoiceSrcs({mode:'some',collections:[c.id]})))+' MB'}
      d.querySelectorAll('.install-options input').forEach(i=>i.addEventListener('change',refresh));await refresh()}
    else $('#installSizeLine').textContent=fill(t('offlineAppSize'),{app:mb(sizes.app),all:mb(allBytes)})}catch{const s=$('#installSpace');if(s)s.textContent=''}})();
  async function download(){const c=current();pwaSave(c);PWA.running=true;d.querySelectorAll('.install-options input').forEach(i=>i.disabled=true);go.hidden=true;cancel.textContent=t('close');const msg=$('#installMessage');msg.hidden=false;msg.className='install-message';msg.textContent=t('offlineInBackground');$('#installProgress').hidden=false;
    const show=(x,y)=>{const bar=$('#installBar'),label=$('#installBarLabel');if(!bar)return;bar.max=y||1;bar.value=y?x:1;label.textContent=fill(t('offlineProgress'),{x:mb(x),y:mb(y),p:y?Math.floor(x/y*100):100})};
    try{const r=await pwaDownload(pwaChoiceSrcs(c),show);if(r.failed)throw Error('failed');if($('#installMessage')){msg.className='install-message done';msg.textContent=t('offlineDone');cancel.textContent=t('agreed')}else toast(t('offlineReady'))}
    catch{const text=navigator.onLine?t('offlineFailed'):t('offlineNoNet');if($('#installMessage')){msg.className='install-message warn';msg.textContent=text;go.textContent=t('retry');go.hidden=false;go.onclick=()=>{go.onclick=null;download()}}else toast(text)}
    finally{PWA.running=false;pwaRenderButton()}}
  go.onclick=async()=>{if(PWA.running)return;
    if(mode==='ios'||mode==='mac'){const steps=mode==='ios'?['iosStep1','iosStep2','iosStep3']:['macStep1','macStep2'];d.querySelector('.dialog-body').innerHTML=`<ol class="install-steps">${steps.map(k=>`<li>${t(k)}</li>`).join('')}</ol><p class="install-hint">${t('stepsAfter')}</p>`;cancel.remove();go.textContent=t('agreed');go.onclick=closeDialog;go.focus();return}
    // Pressed before the browser has offered the installation: waits for it a moment, and if it does
    // not come (the app is already installed, or the browser offers it only from its menu) says how.
    if(mode==='prompt'&&!PWA.prompt){go.disabled=true;for(let i=0;i<30&&!PWA.prompt;i++)await new Promise(r=>setTimeout(r,100));go.disabled=false;
      if(!PWA.prompt){d.querySelector('.dialog-body').innerHTML=`<p>${t('installMenu')}</p>`;cancel.remove();go.textContent=t('agreed');go.onclick=closeDialog;go.focus();return}}
    if(mode==='prompt'&&PWA.prompt){const ev=PWA.prompt;PWA.prompt=null;pwaRenderButton();try{await ev.prompt();const {outcome}=await ev.userChoice;if(outcome!=='accepted'){closeDialog();return}toast(t('installing'))}catch{closeDialog();return}}
    download()}}
// When the app opens with a connection: finishes quietly what an earlier download left halfway,
// and the images that a new version adds to the chosen collections.
async function pwaResume(){const c=pwaSaved();if(!c||c.mode==='app'||!pwaCanCache||!navigator.onLine||PWA.running)return;PWA.running=true;try{await pwaDownload(pwaChoiceSrcs(c),()=>{})}catch{}finally{PWA.running=false}}
function pwaInit(){if(!pwaWeb)return;
  // The service worker is registered straight away, so the browser can offer the installation sooner.
  const ready='serviceWorker' in navigator?navigator.serviceWorker.register('sw.js').then(()=>navigator.serviceWorker.ready):Promise.reject();
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();PWA.prompt=e;pwaRenderButton()});
  window.addEventListener('appinstalled',()=>{PWA.prompt=null;pwaRenderButton();toast(t('installed'))});
  for(const m of ['standalone','fullscreen','minimal-ui','window-controls-overlay'])matchMedia(`(display-mode: ${m})`).addEventListener?.('change',pwaRenderButton);
  $('#installBtn').onclick=()=>{const w=pwaWay();if(w)pwaDialog(w)};
  pwaRenderButton();
  ready.then(()=>{
    // The installed app, opened for the first time: asks which images to keep (Safari keeps the
    // installed app's data apart, so a choice made in the browser is not there).
    if(pwaStandalone()&&!pwaSaved()&&navigator.onLine&&!$('#dialog').open)pwaDialog('setup');else setTimeout(pwaResume,4000)}).catch(()=>{})}
async function init(){try{db=await openDB();const value=await getStored();if(value&&Array.isArray(value.assets)&&Array.isArray(value.favorites)&&Array.isArray(value.collections))stored={...stored,...value};if(stored.preferences?.layout==='list')state.layout='list'}catch{storageNotice(t('noStorage'))}if(syncCatalogCollections())await persist();render()}
init();pwaInit();
