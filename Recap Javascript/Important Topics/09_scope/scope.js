// 🌍 Global declarations
const username = "atique0x"; // const: block-scoped, cannot be reassigned
let age = 25; // let: block-scoped, can be reassigned
var isActive = true; // var: function-scoped (or global if declared outside functions)

const m = 5;
let n = 10;
var o = 15;

let p = 30;
var q = 40;

function example() {
    // Inside function scope
    // Can access global const/let/var variables here
    console.log("Globally declared from function: ", username, age, isActive);

    // Local block-scoped variables inside function
    const x = "Function"; // block-scoped const
    let y = "Function"; // block-scoped let
    var z = "Function"; // function-scoped var, accessible throughout function

    n = 25; // Allowed: 'n' declared with let, can be reassigned
    o = 30; // Allowed: 'o' declared with var, can be reassigned
    console.log(n, o); // 25 30

    // Variables declared with let and var inside this function:
    let p = "Thirty"; // This 'p' shadows the global 'p' inside this function block
    var q = "Fourty"; // This 'q' shadows global 'q' but since var is function scoped,
    // it replaces the global 'q' within function scope
    console.log(p, q);
    // These 'p' and 'q' only exist inside this function
}
example();

console.log(p, q); // Outputs global variables p and q: 30 40

if (true) {
    // Block scope (inside if block)
    console.log("Globally declared from block: ", username, age, isActive);

    // Block-scope declarations
    const a = "Block";
    let b = "Block";
    var c = "Block";
    var c = "Block"; // var is function scoped, so declared globally here
    console.log("Block locals:", a, b, c);

    // Shadowing global variables inside block
    let p = "Thirty"; // shadows global 'p' only inside this block
    var q = "Fourty"; // redeclares global 'q' because var is function/global scoped
}

// Outside block
// console.log(a, b); // ReferenceError: a and b not defined, because block-scoped

console.log("Var c outside block:", c); // Accessible: 'c' declared with var inside block is hoisted to global

// console.log(x, y, z); // ReferenceError: x, y, z not defined here, they are inside function only

console.log(p, q); // p=30 (global let), q="Fourty" (global var was overwritten by block var)
{
    const greeting = "Hello";

    function constExample() {
        // console.log(greeting); // ReferenceError: Cannot access 'greeting' before initialization
        // If 'const greeting' isn't declared below, then its show
        //Its same for let, undefiend for var, beacuse of hoisting
        const greeting = "Hi"; // local to function
        console.log(greeting); // "Hi"
    }
    constExample();
    console.log(greeting);

    if (true) {
        // console.log(greeting); // ReferenceError: Cannot access 'greeting' before initialization
        // If 'const greeting' isn't declared below, then its show
        //Its same for let. Not for var, beacuse it consider as a global one

        const greeting = "Hi";
        console.log(greeting); // "Hi"
    }
    console.log(greeting); // Global const: "Hello"
}
