const assert=require('node:assert/strict');
const {chapters,lessons,assess,equal}=require('./dist/curriculum.js');
const {runExercise}=require('./dist/runner.js');
const {restore,key}=require('./dist/progress.js');
(async()=>{
 assert.equal(lessons.filter(m=>m.chapter!=='practice').length,18);
 assert.equal(new Set(lessons.map(key)).size,lessons.length);
 for(const c of chapters)assert.equal(lessons.filter(m=>m.chapter===c.id).length,c.id==='practice'?3:6);
 for(const m of lessons){
  const result=await runExercise(m,m.solution,m.answer);assert.equal(assess(m,result).ok,true,key(m)+' solution');
  const wrong=m.kind==='choice'?await runExercise(m,'',(m.answer+1)%m.options.length):await runExercise(m,m.kind==='json'?'null':'report("wrong answer");');
  assert.equal(assess(m,wrong).ok,false,key(m)+' wrong answer');
  if(m.starter){const r=await runExercise(m,m.starter,null);assert.equal(assess(m,r).ok,false,key(m)+' starter should need a change')}
 }
 const strings=lessons.find(m=>m.id==='strings');assert.equal(assess(strings,await runExercise(strings,"{item:'water'}")).ok,false);
 const values=lessons.find(m=>m.id==='values');assert.equal(assess(values,await runExercise(values,'{"notes":null,"damaged":false,"ready":true}')).ok,true,'JSON property order independent');
 const numbers=lessons.find(m=>m.id==='numbers');assert.equal(assess(numbers,await runExercise(numbers,'{"quantity":"3"}')).ok,false,'type checking');
 const read=lessons.find(m=>m.id==='nested');assert.equal(assess(read,await runExercise(read,'report(data["destination"]["name"]);')).ok,true,'equivalent bracket solution');
 const missing=lessons.find(m=>m.id==='missing');assert.equal(assess(missing,await runExercise(missing,'report([data.notes === null, data.trackingCode === undefined]);')).ok,true,'null versus missing');
 assert.equal(equal([1],[1,2]),false);assert.equal(equal(null,{}),false);
 const migrated=restore(null,{completed:[0,2,2,99],level:2,drafts:{0:'old code',99:'bad'}});assert.deepEqual(migrated.completed,['practice:legacy-0','practice:legacy-2']);assert.equal(migrated.drafts['practice:legacy-0'],'old code');assert.equal(migrated.current,key(lessons[0]));
 const s=restore({current:key(lessons[14]),completed:[key(lessons[2]),key(lessons[2]),'bogus'],drafts:{[key(lessons[14])]:'draft',bogus:'ignored'},choices:{[key(lessons[0])]:1}});assert.equal(s.current,key(lessons[14]));assert.equal(s.completed.length,1);assert.equal(s.drafts[key(lessons[14])],'draft');assert.equal(s.choices[key(lessons[0])],1);
 console.log('PASS: 18 chapter missions and 3 preserved missions; solutions, incorrect answers, type/syntax errors, equivalent code, null/missing semantics, and saved-progress migration.');
})().catch(e=>{console.error(e);process.exit(1)});
