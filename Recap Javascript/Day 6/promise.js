// // const promise = new Promise((resolved, reject) => {
// //     setTimeout(() => {
// //         // resolved("Promise Resolved");
// //         reject("Promise Reject");
// //     }, 2000);
// // });

// // promise
// //     .then((res) => {
// //         console.log(res);
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });

// // console.log(promise);

// function task1() {
//     console.log("Task 1 is running...");
//     const promise = new Promise((resolved, reject) => {
//         setTimeout(() => {
//             // resolved("Task 1 is complete");
//             resolved("Task 1 is complete");
//         }, 1000);
//     });
//     return promise;
// }

// function task2() {
//     console.log("Task 2 is running...");
//     const promise = new Promise((resolved, reject) => {
//         setTimeout(() => {
//             resolved("Task 2 is complete");
//         }, 1000);
//     });
//     return promise;
// }

// function taskComplete() {
//     console.log("All Task is complete");
// }

// console.log(task1());
// // task1()
// //     .then((res) => {
// //         console.log(res);
// //         return task2();
// //     })
// //     .then((res) => {
// //         console.log(res);
// //         taskComplete();
// //     })
// //     .catch((err) => {
// //         console.log(err);
// //     });

// task1().then(task2).catch();

// function admission(callback) {
//     console.log("Ready for getting admission");
//     setTimeout(() => {
//         console.log("Enquire for admission");
//         console.log("Need documents....");
//         callback();
//     }, 2000);
// }

// function documents(callback) {
//     console.log("Document is ready");
//     console.log("Need Payments...");
//     setTimeout(() => {
//         callback();
//     }, 2000);
// }

// function payments(callback) {
//     setTimeout(() => {
//         console.log("Payment is ready");
//         console.log("Verification....");
//         callback();
//     }, 2000);
// }

// function admitted() {
//     console.log("Admission going on");
//     setTimeout(() => {
//         console.log("Admission Done");
//     });
// }

// admission(() => {
//     documents(() => {
//         payments(() => {
//             admitted();
//         });
//     });
// });

function admission() {
    console.log("Ready for getting admission");
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            console.log("Enquire for admission");
            console.log("Need documents....");
            resolved();
        }, 2000);
    });
}

function documents() {
    console.log("Document is ready");
    console.log("Need Payments...");
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved();
        }, 2000);
    });
}

function payments() {
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            console.log("Payment is ready");
            console.log("Verification....");
        }, 2000);
    });
}

function admitted() {
    console.log("Admission going on");
    return new Promise((resolved, reject) => {
        setTimeout(() => {
            resolved("Admission Done");
        });
    });
}

admission()
    .then(documents)
    .then(payments)
    .then((res) => {
        if (res) console.log(res);
        return admitted();
    })
    .then((res) => {
        if (res) console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
console.log("Hello");
