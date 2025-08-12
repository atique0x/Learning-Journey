# What Are Web Workers?

Web Workers provide a way to run JavaScript in **background threads**, separate from the main UI thread.

- They help **offload CPU-intensive tasks** from the main thread.
- This keeps the **UI smooth and responsive** by preventing blocking.
- Workers run in a **separate global context**, which means they **do not have access to the DOM** or window-related APIs.

# Creating a Web Worker

A worker is created by specifying a script that runs in the worker’s thread. This script executes independently from the main thread.

```js
const worker = new Worker("worker.js");
```

# Communication Between Main Thread and Worker

Communication happens via message passing using the following methods and events:

### Main Thread Methods & Events

| Method / Event             | Description                                                                                         |
| -------------------------- | --------------------------------------------------------------------------------------------------- |
| `new Worker(scriptURL)`    | Creates a new worker thread running the specified script.                                           |
| `worker.postMessage(data)` | Sends a message (any serializable data) to the worker.                                              |
| `worker.onmessage`         | Event handler triggered when the worker sends a message. Receives an event containing `event.data`. |
| `worker.onerror`           | Event handler triggered on errors happening in the worker.                                          |
| `worker.terminate()`       | Immediately terminates the worker thread.                                                           |

### Worker Thread Methods & Events

| Method / Event           | Description                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| `self.postMessage(data)` | Sends a message back to the main thread.                                                                 |
| `self.onmessage`         | Event handler triggered when the main thread sends a message. Receives an event containing `event.data`. |
| `close()`                | Terminates the worker from inside the worker itself.                                                     |

---

# Summary

- Worker code runs **independently and concurrently** with the main thread.
- The main thread **does not wait** for the worker to finish unless explicitly coordinated via message passing.
- Since workers run on separate threads, the **exact order of execution between main thread macrotasks and worker tasks cannot be predicted**.
- Workers cannot access the DOM or `window` object, which helps prevent conflicts and keeps execution safe.

<br><br>

# Example

```js
//worker.js
console.log("Worker: started heavy computation");

self.onmessage = function (event) {
  const iterations = event.data;
  let count = 0;

  for (let i = 0; i < iterations; i++) {
    count += i;
  }

  // Send result back to main thread
  self.postMessage(`Sum of numbers from 0 to ${iterations - 1} is ${count}`);
};
//
```

```js
//Main
console.log("Main: started");

const worker = new Worker("worker.js");

worker.onmessage = function (event) {
  console.log("Main: message from worker:", event.data);
};

worker.postMessage(1e8); // Large number for big loop

console.log("Main: message sent");

// Main thread can continue running other tasks without blocking
for (let i = 0; i < 5; i++) {
  console.log("Main: UI responsive loop", i);
}
```
