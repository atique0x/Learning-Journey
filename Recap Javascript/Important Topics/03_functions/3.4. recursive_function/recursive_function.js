// /*
// function recurFun(input) {
//     // 🔹 Base Case: define the stopping condition
//     if (conditionToStop) {
//         return result; // stop the recursion and return a final value
//     }

//     // 🔸 Recursive Case: call the function with a smaller/simpler input
//     return recurFun(smallerInput);
// }

// // Start the recursion
// recurFun(startingValue);
// */

function countUpLoop(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}
countUpLoop(10);

console.log("Recursion");

function countUp(num) {
    console.log(num);
    if (num >= 10) {
        return;
    }
    countUp(num + 1);
}
countUp(1);

console.log("Count Down");
function countDown(num) {
    if (num == 0) {
        return;
    }
    countDown(num - 1);
    console.log(num); //Print after return
}
countDown(10);

function factorialLoop(num) {
    let add = 1;
    for (let i = 1; i <= num; i++) {
        add = add * i;
    }
    return add;
}
console.log(factorialLoop(5));

function factorial(num) {
    if (num === 1) {
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(5));

const folder = {
    name: "root",
    children: [
        { name: "file1" },
        {
            name: "subfolder",
            children: [
                { name: "file2" },
                {
                    name: "nested",
                    children: [{ name: "file3" }],
                },
            ],
        },
    ],
};

function foolderLoop(root) {
    console.log(root); // logs entire root object
    console.log(root.name); // prints "root"

    if (root.children) {
        for (let child of root.children) {
            console.log(child.name); // file1, subfolder

            if (child.children) {
                for (let grandChild of child.children) {
                    console.log(grandChild.name); // file2, nested

                    if (grandChild.children) {
                        for (let anotherChild of grandChild.children) {
                            console.log(anotherChild.name); // file3
                        }
                    }
                }
            }
        }
    }
}
foolderLoop(folder);

console.log("Recursive folder:......");
function folderRecursive(folder) {
    console.log(folder.name); // Print current folder or file name

    if (!folder.children) {
        return; // Base case: no children → stop here
    }

    for (let child of folder.children) {
        folderRecursive(child); // Recursive call for each child
    }
}
folderRecursive(folder);
