# JavaScript Modules

A **JavaScript Module** is a file containing code (variables, functions, classes) that is isolated from the **global scope** and can be **imported/exported** to or from other files.

> Modules help organize code into small, reusable, and maintainable parts, avoiding naming conflicts and making dependency management easier.

## Why Use Modules?

1. **Avoid Global Scope Pollution**

    - Keeps variables and functions private to their own file.
    - Reduces the risk of name collisions.

2. **Code Reusability**

    - Functions, constants, and classes can be shared across multiple files.

3. **Maintainability & Scalability**

    - Code is easier to read, debug, and extend.

4. **Dependency Management**
    - Control exactly what is shared between files.

## Exports

Modules export values so that they can be imported elsewhere.

### **Types of Exports**

#### 1. Named Export (`export`)

-   Allows exporting multiple variables, functions, or classes from one file.
-   Must be imported using the exact exported name.
-   Useful for exporting **many utilities or constants**.

#### 2. Default Export (`export default`)

-   Only **one default export** per file.
-   Can be imported **with any name**.
-   Useful when exporting **one main thing** from a module.

```js
//export.js

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
```

```js
//import.js
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
} from "./export.js";

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
```

## Imports

-   **Named Import** → Must use curly braces `{}` and match the exact name of the export.
-   **Default Import** → No curly braces, can use any name.

## Better Usage Tips

-   Use **default export** for the main purpose of a file.
-   Use **named exports** for additional utilities or multiple related items.
    bility.

## 📊 Summary Table

| Feature              | Named Export (`export`)         | Default Export (`export default`) |
| -------------------- | ------------------------------- | --------------------------------- |
| **Number per file**  | Multiple                        | Only one                          |
| **Import syntax**    | `import { name }`               | `import name`                     |
| **Rename on import** | Must use `as` keyword           | Can freely rename                 |
| **Use case**         | Export many utilities/constants | Export one main thing             |

## 🔑 Key Points to Remember

-   Modules are **always in strict mode** by default.
-   Import/export statements **only work in module-aware environments** (e.g., modern browsers with `type="module"`, Node.js with ES module support).
-   File paths for imports should be **relative or absolute** and **include the file extension** (in browsers).
