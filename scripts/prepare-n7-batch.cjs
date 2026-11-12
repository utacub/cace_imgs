const fs=require('node:fs'),cp=require('node:child_process');
const plan=require('../production/n7-plan.json'),progress=JSON.parse(fs.readFileSync('production/n7-progress.json','utf8'));
if(progress.status!=='active'||Date.now()>=Date.parse(progress.generationCutoff))throw Error('Tall de generació assolit');
const explicit=process.argv.slice(2);
const order=[];
for(let i=0;i<100;i+=2)for(const offset of [0,100])for(const j of [0,1])order.push(i+offset+j);
const selected=explicit.length?explicit.map(id=>plan.items.find(x=>x.id===id)):order.map(i=>plan.items[i]).filter(x=>!fs.existsSync(`production/n7/${x.id}.json`)).slice(0,8);
const ages={NEN:'boy aged 7',NENA:'girl aged 7',NOI:'teenage boy aged 17',NOIA:'teenage girl aged 17',DONA:'adult woman aged 40',HOME:'adult man aged 40'};
const jobs=selected.map(x=>{
if(!x)throw Error('ID absent');
const agent=x.roles[0].label;
const prompt=`Use case: scientific-educational. ONE ${x.kind==='photo'?'synthetic photorealistic studio photograph with real textures':'flat educational illustration with clean simple solid-color shapes'}. CACE N7 PRECISION. Target semantic labels: ${x.labels.join(' + ')}. ${ages[agent]?'Exactly one '+ages[agent]+'.':'Exactly one friendly anthropomorphic '+agent+' animal; NO human figures.'} Exact scene in Catalan: ${x.visualDescription} IMPORTANT: exactly TWO separate candidate instances of ${x.roles[2].label}, target ${x.roles[3].label}, distractor ${x.contrast.distractor.specifier.label}. Both must be equally readable and unoccluded; only target receives the action. ${x.contrastSubtype==='mida'?'Keep actual size/length difference obvious without perspective tricks.':'Identical candidate shape, size and base material except specified contrasting property.'} ${x.precisionType==='posicio'?'Exactly ONE shared anchor '+x.roles[4].label+'; TOCAR means a single visible fingertip/paw/trunk contact, no moving objects.':'No extra location setting.'} Pure white seamless background. Wide distant framing: ENTIRE agent including feet and all objects and furniture legs fit in the CENTRAL 65 percent of canvas, with at least 12 percent empty WHITE BORDER on ALL four sides. One action, one instant, no collage. Absolutely NO text, letters, numerals, logos, watermark, arrows, answer circles or speech bubbles. No extra candidates, people, animals, decorations or decorative plants. Plain unbranded human clothes; vary skin and hair naturally. Clear functional contact, anatomically plausible hands or paws. Do not print any of these instructions.`;
cp.execFileSync(process.execPath,['scripts/record-n7-production.cjs','prepare',x.id,prompt]);return {id:x.id,prompt};
});
fs.writeFileSync('output/n7-next-jobs.json',JSON.stringify(jobs,null,2)+'\n');console.log(jobs.map(x=>x.id).join(' '));
