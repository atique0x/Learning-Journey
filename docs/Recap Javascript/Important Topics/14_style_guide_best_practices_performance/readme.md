> # JavaScript Style Guide

### Naming Conventions

-   **Variables & Functions → camelCase**

```js
let userName = "Atique";
function getUserData() {}
```

-   **Global Variables & Constants → UPPERCASE**

```js
const API_KEY = "12345";
let MAX_USERS = 100;
```

-   **File Names → lowercase**

```js
user.js;
app.js;
index.js;
```

---

### Formatting Rules

-   **Spaces around operators:**

```js
let sum = a + b;
if (x === 10) {
}
```

-   **Spaces for indentation:**

```js
function greet() {
    console.log("Hello");
}
```

-   **Semicolons at the end of statements:**

```js
let count = 5;
console.log(count);
```

---

### Variable Declarations

-   **Always declare variables with let, const, or var**: `let` and `const` provide block scope (safer than `var` which is function scoped and hoisted).

-   **Prefer const for objects and arrays**: `const` means you cannot reassign the variable but you **can mutate contents** of objects and arrays:

-   **Put all declarations at the top**

---

### Object and Array Creation

-   **Avoid `new Object()` and `new Array()`**
-   **Avoid `new String()`, `new Number()`, `new Boolean()`**

---

### Comparison Operators

**Use `===` and `!==` always instead of `==` and `!=`**

-   `==` performs type coercion and can cause subtle bugs.
-   `===` checks both type and value strictly.

```js
0 == false; // true (surprising!)
0 === false; // false (expected)
null == undefined; // true
null === undefined; // false
```

---

### Default Parameters

**Provide default values to avoid `undefined` bugs**

```js
function greet(name = "Guest") {
    console.log("Hello, " + name);
}
```

---

### Switch Statements

**Always end with `default` and use `break`**

<br>
<br>

> # JavaScript Best Practices

### Avoid Globals

-   Global variables risk being overwritten by other scripts or libraries.
-   Difficult to track, debug, and maintain.

---

### `'use strict'`

-   Eliminates some silent errors.
-   Disallows undeclared variables.
-   Prevents accidental globals.

---

### Error Handling

-   Use `try/catch` only where you expect errors (e.g. network requests).
-   Avoid catching errors too early or globally unless necessary.
-   Always log or handle errors meaningfully.

---

### Comments

-   Avoid redundant comments (e.g. `i++; // increment i`)
-   Use comments to explain **why** the code does something non-obvious.

---

### Functions

-   Write pure functions when possible (no side effects). [One function = one task.]
-   Use meaningful names and keep functions short.
-   Avoid long parameter lists (use objects to pass many parameters).

<br>
<br>

> # Performance Tips

### Minimize DOM Access

-   DOM queries like `document.getElementById` are expensive.
-   Cache the result if used multiple times.

---

### Let and Const vs Var

-   `var` hoists and has function scope → can lead to bugs.
-   `let` and `const` have block scope → safer, predictable.

---

### Optimize Loops

-   Use simple `for` loops or `for...of` for arrays.
-   Avoid nested loops when possible (O(n²) complexity).

---
