import { sum } from "./function.js";
import functionObj from "./function.js";
import { multiply } from "./function.js";
// Import default + named together
import mainFunction, {
    numberValue,
    stringValue,
    booleanValue,
    nullValue,
    undefinedValue,
    fruits,
    user,
    greet,
    square,
    Person,
    randomNumber,
    PI,
    multiply as anotherMultiply,
} from "./allExport.js";

const { sub, add, display } = functionObj;

console.log(sum(5, 10));
console.log(sub(10, 5));

add(5, 5, display);

console.log(multiply(2, 3));

// Using the default export
mainFunction(); // Logs: This is the default exported function from allExports.js

// Using named exports
console.log(numberValue); // 42
console.log(stringValue); // Hello, World
console.log(booleanValue); // true
console.log(nullValue); // null
console.log(undefinedValue); // undefined

console.log(fruits); // ['apple', 'banana', 'cherry']
console.log(user.name); // Atique

console.log(greet("Atique")); // Hello, Atique!
console.log(square(5)); // 25

// Class usage
const person = new Person("John");
console.log(person.sayHi()); // Hi, I'm John

console.log(randomNumber); // Random number
console.log(PI); // 3.14159
console.log(anotherMultiply(3, 4)); // 12
