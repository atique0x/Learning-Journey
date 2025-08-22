let user = "name";
// user = 2; // ❌ Error: TypeScript infers 'user' as string

// Example: 'any' Type
let variable: any;

variable = 5; // ✅ number
variable = "hello"; // ✅ string
variable = true; // ✅ boolean
variable = { a: 1 }; // ✅ object
variable = [1, 2, 3]; // ✅ array

// Using 'any' allows unsafe operations:
let something: any = "hello";

something.toUpperCase(); // ✅ works
something = 123;
// something.toUpperCase(); // ❌ Runtime error! TypeScript won’t catch this

// - Disables type checking
// - Allows method calls even if they may fail at runtime

// Example: 'unknown' Type (Safer)
let value: unknown = 10;
console.log(value); // ✅ prints 10

value = "hello";
// console.log(value.toUpperCase()); // ❌ Compile-time error
// ❗ You must narrow the type before using string methods

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe
} else {
  console.log(value); // ✅ Works for other types
}

// 'unknown' Summary:
// - Safer than 'any'
// - TypeScript forces you to check the type before using it

// Example with 'unknown'
const checkUnknown = (value: unknown): void => {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } else if (typeof value === "number") {
    console.log("Number:", value * 2);
  } else {
    console.log("Other type:", value);
  }
};

checkUnknown("hello"); // ✅ String: HELLO
checkUnknown(10); // ✅ Number: 20
checkUnknown(true); // ✅ Other type: true

let arrAny: any[] = [1, "two", true]; // array can contain any type

arrAny.push({ name: "Alice" }); // ✅ no error
//arrAny[0].toUpperCase(); // ❌ TypeScript will not catch this mistake, might cause runtime error

let arrUnknown: unknown[] = [1, "two", true];

arrUnknown.push({ name: "Alice" }); // ✅ allowed
//arrUnknown[0].toUpperCase(); // ❌ Error: Object is of type 'unknown'

// You must narrow the type first
if (typeof arrUnknown[1] === "string") {
  console.log(arrUnknown[1].toUpperCase()); // ✅ safe
}

/*
//More comparison
// ---------------- ANY -----------------
let anyData: any = 2;

// You can reassign any type — number → array here ✅
anyData = [1, 2, 3, 4];

// ❌ Allowed at compile time, but will crash at runtime
// Because arrays don't have toUpperCase()
console.log(anyData.toUpperCase()); // ✅ Compiles | ❌ Runtime Error

// ❌ Same problem: `trim()` exists on strings, not arrays
anyData.trim(); // ✅ Compiles | ❌ Runtime Error

// ❌ You can even call it as a function without error, but it will crash at runtime
anyData(); // ✅ Compiles | ❌ Runtime Error

// ---------------- UNKNOWN -----------------
let unknownData: unknown = 2;

// ❌ Cannot directly call string methods on unknown
// TypeScript forces you to first **check the type** or **assert it**
unknownData.toUpperCase(); // ❌ Compile-time Error

// Reassigning unknown to an array ✅
unknownData = [1, 2, 3, 4];

// ❌ Again, you cannot directly call string methods on unknown
unknownData.toUpperCase(); // ❌ Compile-time Error
*/
