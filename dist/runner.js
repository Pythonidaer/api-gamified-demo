(function(root){
const core=typeof module!=='undefined'?require('./game-core.js'):root.CourierCore;
async function runExercise(m,code,selected){
 const result={calls:[],reports:[]};
 try{
  if(m.kind==='choice')return {...result,selected};
  if(m.kind==='json'){try{result.value=JSON.parse(code)}catch(e){result.error='Invalid JSON: '+e.message+' Use double quotes, separate entries with commas, and remove trailing commas.'}return result;}
  const mockFetch=async(url,options)=>{const r=core.simulate(url,options);result.calls.push(r);let used=false;return {status:r.status,ok:r.ok,headers:{get:name=>String(name).toLowerCase()==='content-type'?'application/json':null},json:async()=>{if(used)throw new TypeError('Response body has already been read.');used=true;return structuredClone(r.body)}}};
  const AsyncFunction=Object.getPrototypeOf(async function(){}).constructor;
  await new AsyncFunction(...(m.data===undefined?['fetch','report']:['fetch','report','data']),code)(mockFetch,v=>result.reports.push(structuredClone(v)),structuredClone(m.data));
 }catch(e){result.error=e.name+': '+e.message}
 return result;
}
if(typeof module!=='undefined')module.exports={runExercise};else root.runExercise=runExercise;
})(typeof self!=='undefined'?self:globalThis);
