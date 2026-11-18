const fs=require('node:fs'),cp=require('node:child_process');
const plan=JSON.parse(fs.readFileSync('production/n8-plan.json','utf8'));
const progress=JSON.parse(fs.readFileSync('production/n8-progress.json','utf8'));
if(progress.status!=='active'||Date.now()>=Date.parse(progress.generationCutoff))throw Error('Session inactive or generation cutoff reached');
const count=Number(process.argv[2]||4);
const pending=new Set(progress.pending),order=plan.futureBatches.flatMap(b=>b.items);
const selected=order.filter(id=>pending.has(id)).slice(0,count);
const names={NENA:'school-age girl',NEN:'school-age boy',NOIA:'young woman',NOI:'young man',DONA:'adult woman',HOME:'adult man',MICO:'monkey',ÓS:'bear',CONILL:'rabbit',ELEFANT:'elephant',GAT:'cat',GOS:'dog',CANGUR:'kangaroo',PINGUÍ:'penguin',ZEBRA:'zebra',GIRAFA:'giraffe'};
const prompts={};
for(const id of selected){
 const x=plan.items.find(x=>x.id===id);
 let prompt=`Use case: scientific-educational. ONE finished CACE classroom image. ${x.kind==='photo'?'Photorealistic synthetic studio photograph of two real human people, natural skin, fabric and body proportions.':'Clean flat 2D illustration of two friendly anthropomorphic animals, solid colors and simple clear outlines, no photo textures. Real recognizable species, no costumes or extra human limbs.'} Pure white seamless background. Landscape composition. Leave at least 7 percent white border on all sides around every complete body and prop: full heads, hands, feet and tails inside the frame. Two equally prominent participants at comparable visual scale in ONE continuous shared floor and perspective, close enough to belong to the same scene. No panels, separators, collage, repeated participant or timeline. First participant: ${names[x.events[0].roles[0].label]}, on the ${x.composition.event1Side==='esquerra'?'LEFT':'RIGHT'}. Second participant: ${names[x.events[1].roles[0].label]}, on the ${x.composition.event2Side==='esquerra'?'LEFT':'RIGHT'}. Follow exactly these two simultaneous events (Catalan specification): ${x.visualDescription} Critical anatomy: normal upper arms, forearms, hands, torso and legs; plausible joints, grip and weight support. Bring objects and furniture within normal reach, adjust support height or bend knees; NEVER elongate limbs. Keep hands assigned to their own participant and prop, no cross-contact. For sleep, eyes clearly closed with head on pillow and body fully supported. For laughing/crying, make facial evidence readable without symbols; never suggest ridicule or a cause. No text, letters, numbers, brands, logos, watermark, speech balloons, motion lines or graphic symbols anywhere. Book pages, paper and packages blank. Exactly two target events, no additional active characters.`;
 const allowed=[...new Set(x.events.flatMap(e=>[...e.roles.filter(r=>r.role==='patient').map(r=>r.label),...e.context.map(w=>w.label)]))];
 prompt+=' STRICT minimal objects: ONLY '+(allowed.length?allowed.join(', '):'no objects')+'. No extra furniture, desks, pencils, cups, paper or books. Do not add school supplies. Each participant stands naturally except SEURE (seated on ONE bare chair), DORMIR (lying on bed), and SALTAR (airborne low jump). In LLEGIR the reader STANDS holding the book, NO chair or desk. In RIURE or PLORAR the participant STANDS, with hands relaxed beside body and no objects. Only furniture explicitly needed by the target action is allowed.';
 if(x.events.some(e=>e.roles[1].label==='AIXECAR'))prompt+=' For AIXECAR include one VERY LOW empty rectangular block NEXT TO the ball lifter, clearly below the raised ball. It is a necessary support and overrides the object list. Both feet firmly grounded on the shared floor with a small shadow. Never place feet on block or obscure them.';
 const record=`production/n8/${id}.json`;
 if(fs.existsSync(record)){const r=JSON.parse(fs.readFileSync(record,'utf8'));if(r.reviewed)throw Error('Already reviewed');prompts[id]=r.prompt;}
 else{cp.execFileSync('node',['scripts/record-n8-production.cjs','prepare',id,prompt]);prompts[id]=prompt;}
}
fs.writeFileSync('output/n8-current-prompts.json',JSON.stringify(prompts,null,2)+'\n');
console.log(JSON.stringify(prompts));
