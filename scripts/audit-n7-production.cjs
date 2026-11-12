const fs=require('node:fs');
const assert=require('node:assert/strict');
const crypto=require('node:crypto');
const {execFileSync}=require('node:child_process');
const catalogBytes=fs.readFileSync('src/catalog-data.json');
const catalog=JSON.parse(catalogBytes);
const previousBytes=execFileSync('git',['show','a3b6ffbb11a1504ac9f31585eaa0faa4bd091cdc:src/catalog-data.json'],{maxBuffer:64*1024*1024});
const previous=JSON.parse(previousBytes);
assert.deepEqual(catalog.words,previous.words);
assert.deepEqual(catalog.levels,previous.levels);
assert.deepEqual(catalog.categories,previous.categories);
for(const old of previous.assets)assert.deepEqual(catalog.assets.find(x=>x.id===old.id),old);
for(const old of previous.collections)assert.deepEqual(catalog.collections.find(x=>x.id===old.id),old);
const plan=JSON.parse(fs.readFileSync('production/n7-plan.json','utf8'));
const progress=JSON.parse(fs.readFileSync('production/n7-progress.json','utf8'));
const records=fs.readdirSync('production/n7').filter(x=>/^n7-\d{3}\.json$/.test(x)).map(x=>JSON.parse(fs.readFileSync(`production/n7/${x}`,'utf8')));
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
const publishedAssets=catalog.assets.filter(x=>x.constructionId?.startsWith('n7-'));
if(publishedAssets.length){
 assert.ok(publishedAssets.length<=accepted.length);
 for(const rec of accepted.filter(r=>publishedAssets.some(a=>a.constructionId===r.constructionId))){
  const asset=publishedAssets.find(x=>x.constructionId===rec.constructionId);
  assert.ok(asset);
  assert.deepEqual(asset.tags,rec.construction.wordIds);
  assert.deepEqual(asset.levels,[7]);
  assert.equal(asset.originalSha256,rec.originalSha256);
  const bytes=fs.readFileSync('dist/'+asset.src);
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),asset.displaySha256);
 }
 assert.deepEqual(new Set(catalog.collections.find(x=>x.id==='cace-n7-precisio').items),new Set(publishedAssets.map(x=>x.id)));
}
const report={status:'valid',checkedAt:new Date().toISOString(),catalogVersion:catalog.version,previousCataloguePreserved:true,existingImagesPreserved:previous.assets.length,existingWordsPreserved:previous.words.length,catalogImages:catalog.assets.length,importedN7:publishedAssets.length,generatedAndReviewed:accepted.length,uniqueOriginalHashes:accepted.length,habitual:accepted.filter(x=>x.construction.group==='habitual').length,insolita:accepted.filter(x=>x.construction.group==='insolita').length,rejectedAttempts:records.reduce((sum,x)=>sum+(x.rejectedAttempts?.length||0),0),recordsAwaitingReview:records.filter(x=>!x.reviewed).map(x=>x.constructionId),scope:'Originals, metadades i còpies WebP verificats; preservació del catàleg anterior comprovada respecte de a3b6ffb. La verificació pública es registra separadament.',files:accepted.map(x=>({id:x.constructionId,file:x.file,sha256:x.originalSha256,width:x.width,height:x.height}))};
fs.writeFileSync('output/n7-production-audit.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,files:undefined},null,2));
