console.log("Script Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => {
  console.log("Promise 1");
  queueMicrotask(() => console.log("Microtask inside Promise 1"));
});

Promise.resolve().then(() => console.log("Promise 2"));

console.log("Script End");

//
//
//
//
console.log("first: start");

setTimeout(function timeout1() {
  console.log("timeout1: start");

  Promise.resolve().then(function promiseInTimeout() {
    console.log("promiseInTimeout");
  });

  console.log("timeout1: end");
}, 0);

Promise.resolve().then(function promise1() {
  console.log("promise1: start");

  Promise.resolve().then(function promise2() {
    console.log("promise2");
  });

  setTimeout(function timeout2() {
    console.log("timeout2");
  }, 0);

  console.log("promise1: end");
});

setTimeout(function timeout3() {
  console.log("timeout3: start");

  Promise.resolve().then(function promiseInTimeout3() {
    console.log("promiseInTimeout3");
  });

  console.log("timeout3: end");
}, 0);

console.log("first: end");
