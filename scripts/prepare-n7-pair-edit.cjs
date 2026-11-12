const fs=require('node:fs');
const p=require('../production/n7-plan.json'),ids=process.argv.slice(2);
const progress=JSON.parse(fs.readFileSync('production/n7-progress.json','utf8'));
if(progress.status!=='active'||Date.now()>=Date.parse(progress.generationCutoff))throw Error('Tall assolit');
const jobs=ids.map(id=>{
 const item=p.items.find(x=>x.id===id);if(!item)throw Error(id);
 const recPath=`production/n7/${id}.json`,rec=JSON.parse(fs.readFileSync(recPath,'utf8'));
 const ref=JSON.parse(fs.readFileSync(`production/n7/${item.counterpartId}.json`,'utf8'));
 if(rec.reviewed||!ref.reviewed)throw Error('Cal primer company acceptat i segon pendent');
 const edit=`EDIT the provided partner image. Preserve the SAME agent identity, anatomy, clothing, white background, framing and margins. Preserve the SAME TWO candidate objects, their exact colors, patterns, materials, sizes and positions${item.roles[4]?', and the SAME single anchor '+item.roles[4].label:''}. Change ONLY arm/paw pose and functional contact to perform ${item.roles[1].label} on ONLY the ${item.roles[2].label} qualified by ${item.roles[3].label}. The opposing ${item.contrast.distractor.specifier.label} candidate must receive NO contact and remain clearly visible. ${item.roles[1].label==='AIXECAR'?'The selected object is lifted slightly; the previously lifted distractor now rests on the support.':item.roles[1].label==='PORTAR'?'Only selected candidate is carried; other rests on the low support.':'Do not move either candidate.'} Unused hand/paw visibly away from both candidates, against own body or behind back. No extra objects, no text, no arrows. This is ONE image, never a side-by-side comparison.`;
 rec.prompt=edit+' Original semantic specification: '+rec.prompt;
 rec.referenceFile=ref.file;rec.referenceConstructionId=ref.constructionId;
 fs.writeFileSync(recPath,JSON.stringify(rec,null,2)+'\n');
 return {id,prompt:rec.prompt,referenceFile:ref.file};
});
fs.writeFileSync('output/n7-edit-jobs.json',JSON.stringify(jobs,null,2)+'\n');console.log(ids.join(' '));
