importScripts('game-core.js','runner.js');
self.onmessage=async e=>{
 const {mission,code,selected}=e.data;
 try{self.postMessage(await runExercise(mission,code,selected))}catch(e){self.postMessage({calls:[],reports:[],error:e.name+': '+e.message})}
};
