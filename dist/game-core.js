(function(root){
const missions=[
 {concept:'GET / REQUESTS',title:'Bring back supplies.',description:'The outpost needs supplies. GET asks an API for information without creating a new record.',task:'Change the address to /api/supplies. Send the request and report its JSON response.',hint:'Keep fetch(), but replace /api/unknown with /api/supplies. response.json() turns the response body into usable JavaScript data.',starter:'const response = await fetch("/api/unknown");\nconst data = await response.json();\nreport(data);',solution:'const response = await fetch("/api/supplies");\nconst data = await response.json();\nreport(data);',success:'200 OK. The depot returned supply data. fetch() gets a Response; response.json() reads its body. Pip brought the information home.'},
 {concept:'POST / REQUEST BODIES',title:'Arrange a delivery.',description:'POST sends information to create something. This depot accepts JSON and creates a delivery record.',task:'Change the method to POST. Keep the JSON headers and body so the depot knows what to deliver.',hint:'Replace "GET" with "POST". JSON.stringify() turns your JavaScript object into JSON text for the request body. A successful creation returns 201.',starter:'const response = await fetch("/api/deliveries", {\n  method: "GET",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ item: "water", quantity: 3 })\n});\nconst data = await response.json();\nreport(data);',solution:'const response = await fetch("/api/deliveries", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ item: "water", quantity: 3 })\n});\nconst data = await response.json();\nreport(data);',success:'201 Created. The depot created a delivery record from your JSON body. POST sends information; the response describes what was created.'},
 {concept:'JSON / READING A RESPONSE',title:'Find the destination.',description:'An API often returns an object with several fields. Dot notation lets you read the specific value you need.',task:'The response has a destination field. Change report(data) to report only that field.',hint:'Use report(data.destination). The dot accesses the destination property of the object returned by response.json().',starter:'const response = await fetch("/api/deliveries/7");\nconst data = await response.json();\nreport(data);',solution:'const response = await fetch("/api/deliveries/7");\nconst data = await response.json();\nreport(data.destination);',success:'Destination found: North Outpost. data.destination reads one field from the response object. You have requested, created, and read API data.'}
];
function simulate(url,options={}){
 const method=String(options.method||'GET').toUpperCase();
 if(method==='GET'&&options.body!=null)throw new TypeError('GET requests cannot include a body. Use POST for this delivery.');
 const path=String(url);let status=404,body={error:'Route not found. Check the address.'};
 if(path==='/api/supplies'){if(method==='GET'){status=200;body={item:'water',quantity:3,available:true}}else{status=405;body={error:'This route accepts GET.'}}}
 if(path==='/api/deliveries'){
  if(method!=='POST'){status=405;body={error:'Use POST to create a delivery.'}}
  else{
   const headers=Object.fromEntries(Object.entries(options.headers||{}).map(([k,v])=>[k.toLowerCase(),String(v).toLowerCase()]));
   if(!headers['content-type']?.includes('application/json')){status=415;body={error:'Send a Content-Type: application/json header.'}}
   else {let input;try{input=JSON.parse(options.body)}catch{input=null}
    if(!input||input.item!=='water'||input.quantity!==3){status=400;body={error:'Send valid JSON with item "water" and quantity 3.'}}
    else{status=201;body={id:7,...input,destination:'North Outpost',status:'scheduled'}}
   }
  }
 }
 if(path==='/api/deliveries/7'){if(method==='GET'){status=200;body={id:7,item:'water',quantity:3,destination:'North Outpost',status:'scheduled'}}else{status=405;body={error:'This route accepts GET.'}}}
 return {method,url:path,status,ok:status>=200&&status<300,body};
}
function validate(level,calls,reports){
 const route=['/api/supplies','/api/deliveries','/api/deliveries/7'][level];
 const good=calls.find(c=>c.url===route&&c.status===(level===1?201:200));
 if(!good)return {ok:false,message:calls.at(-1)?.body?.error||'Send a request to the address in your task.'};
 if(!reports.length)return {ok:false,message:'The request worked. Add report(data) so we can inspect your answer.'};
 const value=reports.at(-1);
 const ok=level===2?value==='North Outpost':value&&typeof value==='object'&&value.item==='water'&&value.quantity===3&&(level!==1||value.id===7);
 return {ok:!!ok,message:ok?missions[level].success:level===2?'The request worked. Report only data.destination, rather than the whole object.':'The request worked. Read the JSON body with await response.json(), then report that data.'};
}
const api={missions,simulate,validate};root.CourierCore=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
