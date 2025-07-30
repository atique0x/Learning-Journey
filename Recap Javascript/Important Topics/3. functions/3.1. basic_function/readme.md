## Why Use Functions?

-   **Avoid Code Repetition**
-   **Improve Readability & Reusability**
-   **Better Organization**

## Function Declaration

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

```js
display(); //works - beacuse of hoisting
function display() {
    console.log("Learn js function");
}
display(); //also works as usual
```

> Can be used **before** it's defined due to **hoisting**.

<br>

## Function with Parameters

```js
function add(a, b) {
    return a + b;
}
```

> If only one value is passed, the other becomes `undefined`, which leads to `NaN`.

### Function with Default Parameters

Solves the `NaN` problem if arguments are missing by using default parameters.

```js
function add(a = 0, b = 0) {
    return a + b;
}
```

<br>

## IIFE () - Immediately Invoked Function Expression

Executes **immediately** after creation.

```js
(function () {
    console.log("Immediately Invoked Function Expression");
})();
```

### IIFE with Parameters

We can pass arguments just like a regular function.

```js
(function (topic1, topic2 = "Typescript") {
    console.log("Parameter with IIFE. Topic name: ", topic1, topic2);
})("Javascript", topic2);
```

<br>

## arguments Object

-   Available **only in regular functions** (not arrow functions).
-   Contains all passed arguments (like an array).

```js
function showArguments() {
    console.log(arguments);
}
```

<br>

## Function Expression

**Not hoisted** — must be defined before use.

```js
const expressionFunction = function () {
    return "This is function expression";
};
expressionFunction();
```
