// Simple delayed greeting without callback
function delayGreet(name) {
    setTimeout(() => {
        console.log(name);
        afterGreet(); // Called after greeting is printed
    }, 3000);
}

function afterGreet() {
    console.log("Greeting finished");
}

delayGreet("Atique");

// Delayed greeting with callback pattern
function delayedGreeting(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}`);
        callback(); // Called after greeting, allows custom next steps
    }, 1000);
}

function afterGreeting() {
    console.log("Greeting finished.");
}

delayedGreeting("Atique", afterGreeting);

// Traditional tasks calling next task internally
function task1() {
    console.log("Task 1 is running...");
    setTimeout(() => {
        console.log("Task 1 is complete");
        task2(); // Call next task explicitly
    }, 2000);
}

function task2() {
    console.log("Task 2 is running...");
    setTimeout(() => {
        console.log("Task 2 is complete");
        task3();
    }, 2000);
}

function task3() {
    console.log("Task 3 is running...");
    setTimeout(() => {
        console.log("Task 3 is complete");
        task4();
    }, 2000);
}

function task4() {
    console.log("Task 4 is running...");
    setTimeout(() => {
        console.log("Task 4 is complete");
        taskComplete();
    }, 2000);
}

function taskComplete() {
    console.log("All Task is complete");
}

task1();

// Callback-based tasks with explicit callbacks passed as arguments
function callbackTask1(callback_task2) {
    console.log("Task 1 is running...");
    // console.log(callback_task2); // Logs the callback function reference
    setTimeout(() => {
        console.log("Task 1 is complete");
        callback_task2(); // Execute next task via callback
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

// Start the callback chain
callbackTask1(() => {
    callbackTask2(() => {
        callbackTask3(() => {
            callbackTask4(() => {
                callbackTaskComplete();
            });
        });
    });
});

function admission(callback) {
    console.log("Ready for getting admission");
    setTimeout(() => {
        console.log("Enquire for admission");
        console.log("Need documents....");
        callback();
    }, 2000);
}

function documents(callback) {
    console.log("Document is ready");
    console.log("Need Payments...");
    setTimeout(() => {
        callback();
    }, 2000);
}

function payments(callback) {
    setTimeout(() => {
        console.log("Payment is ready");
        console.log("Verification....");
        callback();
    }, 2000);
}

function admitted() {
    console.log("Admission going on");
    setTimeout(() => {
        console.log("Admission Done");
    });
}

admission(() => {
    documents(() => {
        payments(() => {
            admitted();
        });
    });
});
