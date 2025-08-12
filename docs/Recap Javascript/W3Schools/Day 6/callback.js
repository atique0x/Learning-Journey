// =========================
// Section 1: Synchronous vs Asynchronous Example
// =========================

console.log("Order has been received");

function synchronus() {
    console.log("Order is cooking");

    // Simulate heavy synchronous blocking task
    for (let i = 0; i < 2500000000; i++) {}

    console.log("Order is ready");

    // Asynchronous tasks (will execute after synchronous finishes)
    setTimeout(() => {
        console.log("Order is ready.......3s");
    }, 3000);

    setTimeout(() => {
        console.log("Order is ready.......1s");
    }, 1000);

    setTimeout(() => {
        console.log("Order is ready.......5s");
    }, 5000);
}

synchronus();

console.log("Order delivered");

// =========================
// Section 2: Another Blocking vs Async Example
// =========================

console.log("Start");

setTimeout(() => {
    console.log("Timeout after 1 second");
}, 1000);

// Heavy blocking task (synchronous)
const start = Date.now();
console.log("Start time (sec):", Date.now() / 1000);

while (Date.now() - start < 3000) {
    // Blocking main thread for 3 seconds
}

console.log("End");
console.log("End time (sec):", Date.now() / 1000);

// =========================
// Section 3: Basic Calculator with Callback
// =========================

function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2) {
    let sum = num1 + num2;
    myDisplayer(sum);
}

myCalculator(5, 5);

// =========================
// Section 4: Advanced Callback Example
// =========================

function add(a, b, callback, callback2) {
    const sum = a + b;
    console.log("Callback Functions:", callback, callback2);
    callback(sum, callback2);
}

function callFun(sum, callback) {
    console.log("Inner Callback:", callback);
    console.log(`Display result: ${sum}`);

    if (typeof callback === "function") {
        callback();
    } else {
        console.log("No display function provided.");
    }
}

function displayFun() {
    console.log("The result is printed");
}

// Safe call with both callbacks
add(5, 5, callFun, displayFun);

// Unsafe call removed/commented to avoid runtime error
// add(5, 5, callFun); // Will fail if callFun doesn't check for undefined
