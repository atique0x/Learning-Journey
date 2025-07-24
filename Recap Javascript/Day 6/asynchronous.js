// function delayGreet(name) {
//     setTimeout(() => {
//         console.log(name);
//         afterGreet();
//     }, 3000);
// }

// function afterGreet() {
//     console.log("Greeting finished");
// }

// delayGreet("Atique");

// function delayedGreeting(name, callback) {
//     setTimeout(() => {
//         console.log(`Hello, ${name}`);
//         callback(); // called after delay
//     }, 1000);
// }

// function afterGreeting() {
//     console.log("Greeting finished.");
// }

// delayedGreeting("Atique", afterGreeting);

// function task1() {
//     console.log("Task 1 is running...");

//     setTimeout(() => {
//         console.log("Task 1 is complete");
//         task2();
//     }, 2000);
// }

// function task2() {
//     console.log("Task 2 is running...");
//     setTimeout(() => {
//         console.log("Task 2 is complete");
//         task3();
//     }, 2000);
// }
// function task3() {
//     console.log("Task 3 is running...");
//     setTimeout(() => {
//         console.log("Task 3 is complete");
//         task4();
//     }, 2000);
// }
// function task4() {
//     console.log("Task 4 is running...");
//     setTimeout(() => {
//         console.log("Task 4 is complete");
//         taskComplete();
//     }, 2000);
// }
// function taskComplete() {
//     console.log("All Task is complete");
// }

// task1();

function callbackTask1(callback_task2) {
    console.log("Task 1 is running...");
    console.log(callback_task2);
    setTimeout(() => {
        console.log("Task 1 is complete");
        callback_task2();
    }, 1000);
}

function callbackTask2(callback_task3) {
    console.log("Task 2 is running...");
    setTimeout(() => {
        console.log("Task 2 is complete");
        callback_task3();
    }, 1000);
}
function callbackTask3(callback_task4) {
    console.log("Task 3 is running...");
    setTimeout(() => {
        console.log("Task 3 is complete");
        callback_task4();
    }, 1000);
}
function callbackTask4(callback_complete) {
    console.log("Task 4 is running...");
    setTimeout(() => {
        console.log("Task 4 is complete");
        callback_complete();
    }, 1000);
}
function callbackTaskComplete() {
    console.log("All Task is complete");
}

callbackTask1(() => {
    callbackTask2(() => {
        callbackTask3(() => {
            callbackTask4(() => {
                callbackTaskComplete();
            });
        });
    });
});
