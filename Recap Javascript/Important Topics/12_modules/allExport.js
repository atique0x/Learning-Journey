//NAMED EXPORT

// 1. Primitive values
export const numberValue = 42;
export const stringValue = "Hello, World";
export const booleanValue = true;
export const nullValue = null;
export const undefinedValue = undefined;

// 2. Array
export const fruits = ["apple", "banana", "cherry"];

// 3. Object
export const user = {
    name: "Atique",
    role: "Developer",
};

// 4. Function declaration
export function greet(name) {
    return `Hello, ${name}!`;
}

// 5. Arrow function
export const square = (n) => n * n;

// 6. Class
export class Person {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hi, I'm ${this.name}`;
    }
}

// 7. Inline calculated value
export const randomNumber = Math.random();

// 8. Named export later
const PI = 3.14159;
const multiply = (a, b) => a * b;
export { PI, multiply };

//DEFAULT EXPORT

// The default export will be the "main" thing of this module
export default function main() {
    console.log("This is the default exported function from allExports.js");
}
