//Basic Usage
const name = null ?? "Guest";
console.log(name); // 'Guest'

const count = 0 ?? 10;
console.log(count); // 0 (NOT 10, because 0 is NOT null/undefined)

//Why Use ?? Instead of ||
const val = 0 || 10; // returns 10
const val2 = 0 ?? 10; // returns 0

function greet(user) {
    const name = user.name ?? "Anonymous";
    console.log(`Hello, ${name}!`);
    const age = user.age || "False Age";
    console.log(`Age: ${age}`);
}

greet({ name: "Alice", age: 25 }); // Hello, Alice!
greet({ name: "", age: 0 }); // Hello, !
greet({ name: null, age: null }); //// Hello, Anonymous!
greet({}); // Hello, Anonymous!
