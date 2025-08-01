"use strict";
console.log("Strict Mode");

try {
    // x = 10;
    // console.log(x);
} catch (err) {
    console.log(err);
}

let a = 5;
//delete a; // ❌ SyntaxError: Delete of an unqualified identifier in strict mode

// function test(a, a) {
//     return a;
// }
// ❌ SyntaxError: Duplicate parameter name not allowed in this context
