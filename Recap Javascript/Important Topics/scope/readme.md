# JavaScript Scope

Scope determines where variables, functions, and objects are accessible in your code.

---

## Types of Scope in JavaScript

JavaScript has three main types of scope:

-   **Global Scope**
-   **Function Scope**
-   **Block Scope**

| Scope          | Variables declared with                   | Accessible Inside Block? | Accessible Outside Block?               |
| -------------- | ----------------------------------------- | ------------------------ | --------------------------------------- |
| Global Scope   | `var`, `let`, `const` (outside functions) | Yes                      | Yes                                     |
| Function Scope | `var`, `let`, `const` inside function     | Yes                      | No                                      |
| Block Scope    | `let`, `const` inside `{ }` block         | Yes                      | No                                      |
| Block Scope    | `var` inside `{ }` block                  | No (function-scoped)     | Yes (outside block but inside function) |

---

## 1. Global Scope

```js
let globalVar = "I am global";

function test() {
    console.log(globalVar); // Accessible here
}

console.log(globalVar); // Also accessible here
test();
```

## 2. Function Scope

```js
function example() {
    let functionVar = "I'm local to example()";
    console.log(functionVar); // Works here
}

example();
console.log(functionVar); // ReferenceError: functionVar is not defined
```

## 3. Block Scope

```js
if (true) {
    let blockVar = "I'm block scoped";
    var varVar = "I'm function scoped";
    console.log(blockVar); // Works here
    console.log(varVar); // Works here
}

console.log(blockVar); // ReferenceError: blockVar is not defined
console.log(varVar); // Works here because var ignores block scope
```
