## What is an Arrow Function?

Arrow functions are a shorter way to write functions in JavaScript, introduced in ES6.

-   A shorter syntax for writing functions.
-   Automatically returns the expression if written without curly braces {}.
    > Does not have its own this (lexically bound).

### Basic Syntax

```js
const sayHello = () => {
    console.log("Hello!");
};
sayHello(); // Output: Hello!
```

### One-liner Return (No return keyword, no {} needed)

```js
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // Output: 20
```
