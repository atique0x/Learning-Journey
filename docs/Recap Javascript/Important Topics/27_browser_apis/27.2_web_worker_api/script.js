const worker = new Worker("worker.js");

worker.postMessage("Message from worker");

worker.onmessage = function (e) {
  console.log(e.data);
};

worker.onerror = function (e) {
  console.log(e.data);
};

console.log(worker);
