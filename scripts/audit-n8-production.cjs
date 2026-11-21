const fs=require('node:fs');
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const {execFileSync}=require('node:child_process');
const catalogBytes=fs.readFileSync('src/catalog-data.json');
const catalog=JSON.parse(catalogBytes);
const previousBytes=execFileSync('git',['show','f5c8bcd5a0e1efee805f0f6b10b6746951399620:src/catalog-data.json'],{maxBuffer:64*1024*1024});
const previous=JSON.parse(previousBytes);
assert.deepEqual(catalog.words,previous.words);
assert.deepEqual(catalog.levels,previous.levels);
assert.deepEqual(catalog.categories,previous.categories);
for(const old of previous.assets)assert.deepEqual(catalog.assets.find(x=>x.id===old.id),old);
for(const old of previous.collections)assert.deepEqual(catalog.collections.find(x=>x.id===old.id),old);
const plan=JSON.parse(fs.readFileSync('production/n8-plan.json','utf8'));
const progress=JSON.parse(fs.readFileSync('production/n8-progress.json','utf8'));
const resumed=progress.sessionBaseline?JSON.parse(execFileSync('git',['show',progress.sessionBaseline.head+':src/catalog-data.json'],{maxBuffer:64*1024*1024})):null;
if(resumed){
 assert.deepEqual(catalog.words,resumed.words);
 for(const old of resumed.assets)assert.deepEqual(catalog.assets.find(x=>x.id===old.id),old);
 for(const old of resumed.collections){
  const now=catalog.collections.find(x=>x.id===old.id);
  if(old.id==='cace-n8-dos-esdeveniments'){assert.equal(now.name,old.name);for(const id of old.items)assert.ok(now.items.includes(id));}
  else assert.deepEqual(now,old);
 }
}
const records=fs.readdirSync('production/n8').filter(x=>/^n8-\d{3}\.json$/.test(x)).map(x=>JSON.parse(fs.readFileSync(`production/n8/${x}`,'utf8')));
const accepted=records.filter(x=>x.reviewed&&x.status==='accepted');
for(const rec of accepted){
 const item=plan.items.find(x=>x.id===rec.constructionId);
 assert.deepEqual(rec.construction,item);
 assert.ok(rec.prompt&&rec.review&&rec.alt.ca&&rec.alt.es);
 assert.equal(rec.generatedWith,'built-in image_gen');
 const bytes=fs.readFileSync(rec.file);
 assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),rec.originalSha256);
 assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
 assert.equal(bytes.readUInt32BE(16),rec.width);
 assert.equal(bytes.readUInt32BE(20),rec.height);
 for(let i=0;i<item.wordIds.length;i++)assert.equal(catalog.words.find(w=>w.id===item.wordIds[i]).ca,item.labels[i]);
}
assert.equal(accepted.length,progress.complete);
assert.equal(new Set(accepted.map(x=>x.constructionId)).size,accepted.length);
assert.equal(new Set(accepted.map(x=>x.originalSha256)).size,accepted.length,'Duplicate generated originals');
assert.equal(progress.complete+progress.pending.length,200);
const publishedAssets=catalog.assets.filter(x=>x.constructionId?.startsWith('n8-'));
if(publishedAssets.length){
 assert.ok(publishedAssets.length<=accepted.length);
 for(const rec of accepted.filter(r=>publishedAssets.some(a=>a.constructionId===r.constructionId))){
  const asset=publishedAssets.find(x=>x.constructionId===rec.constructionId);
  assert.ok(asset);
  assert.deepEqual(asset.tags,rec.construction.wordIds);
  assert.deepEqual(asset.levels,[8]);
  assert.deepEqual(asset.events,rec.construction.events);
  assert.deepEqual(asset.semanticRelation,rec.construction.relation);
  assert.equal(asset.originalSha256,rec.originalSha256);
  const bytes=fs.readFileSync('dist/'+asset.src);
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),asset.displaySha256);
 }
 assert.deepEqual(new Set(catalog.collections.find(x=>x.id==='cace-n8-dos-esdeveniments').items),new Set(publishedAssets.map(x=>x.id)));
}
const report={status:'valid',checkedAt:new Date().toISOString(),catalogVersion:catalog.version,previousCataloguePreserved:true,existingImagesPreserved:previous.assets.length,existingWordsPreserved:previous.words.length,catalogImages:catalog.assets.length,importedN8:publishedAssets.length,generatedAndReviewed:accepted.length,uniqueOriginalHashes:accepted.length,habitual:accepted.filter(x=>x.construction.group==='habitual').length,insolita:accepted.filter(x=>x.construction.group==='insolita').length,rejectedAttempts:records.reduce((sum,x)=>sum+(x.rejectedAttempts?.length||0),0),recordsAwaitingReview:records.filter(x=>!x.reviewed).map(x=>x.constructionId),scope:'Originals, metadades i còpies WebP verificats; preservació del catàleg anterior comprovada respecte de f5c8bcd. La verificació pública es registra separadament.',files:accepted.map(x=>({id:x.constructionId,file:x.file,sha256:x.originalSha256,width:x.width,height:x.height}))};
if(resumed){report.resumeBaselinePreserved=true;report.resumedSessionImagesPreserved=resumed.assets.length;report.resumedSessionWordsPreserved=resumed.words.length;}
fs.writeFileSync('output/n8-production-audit.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,files:undefined},null,2));
