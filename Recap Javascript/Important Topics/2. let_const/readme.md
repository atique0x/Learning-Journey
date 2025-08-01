## The Three Ways to Declare Variables

| Keyword | Reassignable? | Scope    | Hoisted?                       | Use Case                           |
| ------- | ------------- | -------- | ------------------------------ | ---------------------------------- |
| `var`   | ✅ Yes        | Function | ✅ Yes (but undefined)         | Legacy code, or inside functions   |
| `let`   | ✅ Yes        | Block    | ✅ Yes (in temporal dead zone) | Most common for mutable values     |
| `const` | ❌ No         | Block    | ✅ Yes (in temporal dead zone) | For constants and fixed references |

<br>

## Why You Should Not Use `var` in JavaScript

-   **Not Block-Scoped**:  
    `var` ignores block scope (`if`, `for`, etc.), which can lead to unexpected variable access and bugs.

-   **Allows Redeclaration**:  
    The same variable can be declared multiple times in the same scope without throwing an error.

-   **Unexpected Behavior in Loops**:  
     `var` doesn’t create a new variable per loop iteration, which can result in closure-related bugs.
    > ✅ Use `let` or `const` instead for predictable and safer scoping.

<br>

## JavaScript Hoisting Explained

Hoisting is JavaScript’s default behavior of moving **declarations** (but **not initializations**) to the top of their scope before the code executes. This allows variables and functions to be referenced before their actual declaration in the code.

## Hoisting with `var`

-   `var` declarations are hoisted and **initialized with `undefined`**.
-   They exist from the start of their scope, but their value is `undefined` until the assignment happens.

```js
console.log(a); // undefined (no error)
var a = 10;
console.log(a); // 10
```

## Behind the scenes with `var`

JavaScript treats code with `var` declarations as if the declarations are moved to the top of their scope before execution.

```js
var a;
console.log(a); // undefined
a = 10;
console.log(a); // 10
```

## Hoisting with `let` and `const`

Variables declared with `let` and `const` are also **hoisted**, but unlike `var`:

-   They are **not initialized** during hoisting.
-   They remain in a **Temporal Dead Zone (TDZ)** from the start of the block until the actual declaration is encountered.

Attempting to access them before their declaration results in a `ReferenceError`.

```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
```

```js
console.log(y); // ReferenceError: Cannot access 'y' before initialization
const y = 10;
```

<br>

## What is the Temporal Dead Zone (TDZ)?

The **Temporal Dead Zone (TDZ)** is the time period between the **start of a block scope** and the **point at which a `let` or `const` variable is declared**.  
During this period, the variable exists in memory but **cannot be accessed**, and any attempt to do so results in a `ReferenceError`.

## Functions & Hoisting

### Function Declarations

Function declarations are **fully hoisted**, meaning you can call them **before** they are defined in the code.

```js
console.log(foo()); // Works fine

function foo() {
    return "Hello";
}
```

### Function Expressions

Function expressions behave like variables and follow hoisting rules based on how they are declared:

-   If declared with `var`, the variable is **hoisted and initialized as `undefined`**.
-   If declared with `let` or `const`, the variable is **hoisted but uninitialized**, and accessing it before declaration results in a `ReferenceError`.

```js
console.log(bar); // undefined

var bar = function () {
    return "Hi";
};
```

<br>

| Feature                           | `var`             | `let` and `const`               |
| --------------------------------- | ----------------- | ------------------------------- |
| **Hoisted**                       | Yes               | Yes                             |
| **Initialized during hoisting**   | Yes (`undefined`) | No (uninitialized, TDZ applies) |
| **Accessible before declaration** | Yes (`undefined`) | No (`ReferenceError` thrown)    |
| **Scope**                         | Function-scoped   | Block-scoped                    |

## Key Points

-   `var` variables are **hoisted and initialized as `undefined`**.
-   `let` and `const` variables are **hoisted but not initialized**, so accessing them early throws a `ReferenceError` due to the **Temporal Dead Zone (TDZ)**.
