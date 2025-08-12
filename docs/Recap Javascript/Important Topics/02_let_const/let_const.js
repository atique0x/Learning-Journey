let count = 10;
count = 20; // ✅ Reassignment allowed

{
    let count = 30; // different variable inside this block
    console.log(count); // 30
}

console.log(count); // 20 (outer count unchanged)

const PI = 3.14;
// PI = 3.1415; // ❌ Error: Assignment to constant variable

const user = { name: "Atique" };
user.name = "Shariar"; // ✅ Allowed! Object properties can be changed

// Hoisting with var
console.log(a); // Output: undefined
// 'var a' is hoisted to the top and initialized with undefined.
// So this line doesn’t throw an error, but logs undefined.

var a;
a = 1;
console.log(a); // Output: 1
// After assigning the value, it logs 1.

// Hoisting with let
// console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
// 'let b' is hoisted but not initialized.
// Accessing it before declaration causes a ReferenceError due to the Temporal Dead Zone (TDZ).

let b;
b = 1;
console.log(b); // Output: 1
// After declaration and assignment, it works normally.

var file = "image.png";
console.log(file);
var file = "image.jpg";
console.log(file);
file = "image.jpeg";
console.log(file);

let documents = "word.pdf";
console.log(documents);
documents = "";
// let documents = "word.doc";
// console.log(documents);
