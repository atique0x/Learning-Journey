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
            console.log("Verification...");
            resolved();
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

// admission()
//     .then(documents)
//     .then(payments)
//     .then((res) => {
//         if (res) console.log(res);
//         return admitted();
//     })
//     .then((res) => {
//         if (res) console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

async function runFun() {
    try {
        const adm = await admission();
        console.log("Get: ", adm);
        const doc = await documents();
        console.log("Get: ", doc);
        const pay = await payments();
        console.log("Get: ", pay);
        const add = await admitted();
        console.log("Get: ", add);
    } catch {
        (err) => {
            console.log(err);
        };
    }
}

runFun();
