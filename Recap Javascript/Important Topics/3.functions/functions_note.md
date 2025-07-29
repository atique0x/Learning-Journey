# JavaScript Functions — Key Notes

---

## 1. Function Declaration

-   Defined using the `function` keyword with a name.
-   Can have parameters (placeholders) and accept arguments (actual values) when called.
-   Supports **default parameters** to provide fallback values.

```js
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet("Atique")); // Hello, Atique!
console.log(greet()); // Hello, Guest!
```

## 2. Callback Function

A **callback function** is a function passed as an argument to another function, which is then invoked (called) later within that function. It’s a key part of asynchronous programming but is also used in synchronous logic.

-   Passed as an argument to another function.
-   Invoked inside the outer function, allowing deferred or conditional execution.
-   Widely used for asynchronous tasks (like timers, network calls) and synchronous flow control.

### Example:

```js
function add(a, b, callback) {
    let c = a + b;
    callback(c); // calls the callback with the result
}

function display(sum) {
    console.log("The result of a & b:", sum);
}

add(4, 5, display); // The result of a & b: 9
```

## 3. Arrow Function

-   A shorter syntax for writing functions.
-   Automatically returns the expression if written **without curly braces `{}`**.
-   Does **not** have its own `this` — it is **lexically bound**.
-   Cannot be used as constructors (i.e., you cannot use `new` with arrow functions).

### Example:

```js
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Atique")); // Hello, Atique!
```
