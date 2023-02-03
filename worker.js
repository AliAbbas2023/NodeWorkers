const { parentPort } = require("worker_threads");
let counter = 0;
// setTimeout(() => {
//     counter++;
//     console.log('worker'+counter)
// }, 5000);
for (let i = 0; i < 10000000000; i++) {
  counter++;
}

parentPort.postMessage(counter); 
