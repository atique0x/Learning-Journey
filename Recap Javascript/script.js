// ==========================
// 1. VARIABLE DECLARATIONS
// ==========================
let a = 5;
let c = 7;
let e = 15; // Global 'e'

// `var` vs `let` vs `const` behavior
// var x = 10; // function scoped
// let x = 10; // block scoped
// const x = 10; // block scoped & can't be reassigned

// ===============
// 2. GLOBAL SCOPE
// ===============
console.log("Global Scope");
block(); // Calls block-scoped function
console.log(a, c, e); // e = 15 (unchanged globally)
c = 8;
console.log(c); // 8 (mutated globally)
console.log(e); // 15

// ===============
// 3. FUNCTION SCOPE
// ===============
function block() {
    let b = 6;
    b = 8;
    b = "Hello"; // dynamically typed

    let d = 10;
    // let d = "Hello"; // ❌ Error: redeclaration with let

    let e = 20; // Shadows global 'e'

    console.log("Function Scope");
    console.log(a, c, e); // Uses global a, c; local e
    console.log(b); // "Hello"
    console.log(d); // 10
}

// console.log(b);        // ❌ Error: b is not defined outside function

// ===========================
// 4. BITWISE & LOGICAL OPS
// ===========================
console.log(5 & 3); // 1 (bitwise AND)
console.log(5 | 3); // 7 (bitwise OR)

// Logical OR vs Bitwise OR
// Bitwise: works on bits → faster in low-level operations
// Logical: works on boolean → used in control flow
console.log(true || false); // true (logical OR)
console.log(true | false); // 1 (bitwise OR)

// =======================
// 5. STRING COMPARISONS
// =======================
console.log("D" > "T"); // false ('D' comes before 'T' in Unicode)

// Related:
console.log("apple" < "banana"); // true
console.log("2" > "15"); // true (string comparison)

// =========================
// 6. TYPEOF QUIRKS & TYPES
// =========================
console.log(typeof null); // object (quirk)
console.log(typeof undefined); // undefined
console.log(typeof NaN); // number
console.log(typeof typeof null); // string
console.log(typeof typeof 5); // string
console.log(typeof typeof []); // string

// Related:
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof (() => {})); // function
console.log(typeof new Date()); // object

// ===========================
// 7. NULL, NAN, UNDEFINED OPS
// ===========================
console.log(null + 3); // 3 → null → 0
console.log(null + "Hello"); // "nullHello"
console.log(null * 3); // 0
console.log(null + 0); // 0

console.log(NaN); // NaN
console.log(undefined); // undefined

// Type coercion:
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// ====================
// 8. DIVISION QUIRKS
// ====================
console.log(0 / 9); // 0
console.log(9 / 0); // Infinity
console.log(typeof (9 / 0)); // number

// Related:
console.log(0 / 0); // NaN

// ====================
// 9. FUNCTION SYNTAX
// ====================
const x = function () {
    return 5;
};

// Arrow function without return → returns undefined
const y = () => {
    5;
};

const y2 = () => 5; // Correct short form with implicit return

console.log(x(), y(), y2()); // 5 undefined 5

// =======================
// 10. REST PARAMS
// =======================
const restFun = (...args) => {
    console.log(...args);
};

restFun(3, 4, 7, "Hello", [5]);

// Related: Spread operator
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3

// ==========================
// 11. ARGUMENTS OBJECT (ONLY IN REGULAR FUNCTIONS)
// ==========================
function BuiltInArgsFun() {
    console.log(arguments); // array-like object
    console.log(arguments[0]); // first arg
}
BuiltInArgsFun(3, 4, 7, "Hello", [5]);

// ❌ arguments not available in arrow functions

// =======================
// 12. THIS KEYWORD
// =======================
function btnClicked() {
    console.log(this); // global object in non-strict mode
}

btnClicked();

// ===========================
// 13. CALL, APPLY, BIND
// ===========================
function sayHello() {
    console.log("Hi " + this.name);
}
const user = { name: "Atique" };
sayHello.call(user); // Hi Atique

// Related:
sayHello.apply(user); // same as call
const boundFunc = sayHello.bind(user);
boundFunc(); // Hi Atique

// ============================
// 14. TYPE CONVERSION TESTS
// ============================
console.log([] + true); // "true" — [] → "" then "true"
console.log([] + {}); // "[object Object]" (coerced to string)
console.log({} + []); // 0 or "[object Object]" depending on context

console.log(Number("123")); // 123
console.log(Number("abc")); // NaN
console.log(Boolean("")); // false
console.log(Boolean(0)); // false
console.log(Boolean("0")); // true (non-empty string)
