let name = "Atique"; // String
let age = 25; // Number
let isActive = true; // Boolean
let x; // Undefined
let y = null; // Null
let big = 123456789012345678901234567890n; // BigInt
let sym = Symbol("id"); // Symbol
let user = { name: "Atique", age: 25 }; // Object
let another = BigInt(999999999999);

console.log(sym);

console.log(typeof 5); // "number"
console.log(typeof null); // "object" (bug!)
console.log(typeof []); // "object"
console.log(Array.isArray([])); // true
console.log(typeof (() => {})); // "function"
console.log(typeof NaN); //Number
console.log(typeof Infinity); //Number
console.log(typeof BigInt(9)); //BigInt
console.log(typeof 9n); //BigInt
