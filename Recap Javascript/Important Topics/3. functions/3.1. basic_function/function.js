// 1. Function Declaration (Hoisted)
display(); // ✅ Can be called before it's defined
function display() {
    console.log("Learn js function");
}
display(); // ✅ Called again after definition

// --------------------------------------------

// 2. Function with Parameters (without default)
function add(a, b) {
    return a + b;
}
console.log(add(6, 7)); // 13
console.log(add(6)); // NaN (undefined + 6)

// --------------------------------------------

// 3. Function with Default Parameters
function add(a = 0, b = 0) {
    return a + b;
}
console.log(add()); // 0 + 0 = 0
console.log(add(6)); // 6 + 0 = 6

// --------------------------------------------

// 4. IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("IIFE");
})();

// --------------------------------------------

// 5. IIFE with Parameters
const topic2 = "Typescript";
(function (topic1, topic2 = "Angular") {
    console.log("Parameter with IIFE. Topic name: ", topic1, topic2);
})("Javascript");

// --------------------------------------------

// 6. Using `arguments` object
function showArguments() {
    console.log(arguments); // Array-like object
    console.log(typeof arguments); // object

    for (let key in arguments) {
        console.log(arguments[key]);
    }
}
showArguments(1, 2, 3, 4, [2, 5, "user"], { user: "atique", age: 25 });

// --------------------------------------------

// 7. Function Expression (NOT hoisted)
// expressionFunction(); ❌ Would cause error if uncommented

const expressionFunction = function () {
    return "This is function expression";
};
console.log(expressionFunction()); // ✅ Safe call after definition

// --------------------------------------------

// 8. Function Stored in `let` Variable
let fun;
fun = function () {
    console.log("Function with let");
};
fun(); // ✅
