# Strict Mode in JavaScript

Strict Mode is a way to make your JavaScript code more secure, predictable, and error-free by enabling a restricted version of JavaScript.

Activate it by adding `"use strict"` at the top of a script or function.

## Why Use Strict Mode?

-   Preventing accidental global variables
-   Catching silent errors early
-   Blocking unsafe or outdated features
-   Improving code maintainability and debugging

## Modern JavaScript and Strict Mode

In modern JavaScript, you often don’t need to write `"use strict"` manually, because it's enabled automatically in:

1. **Frameworks (React, Angular, Vue)** - These tools enforce strict-like rules internally.

2. **ES Modules (import/export)** - Strict mode is always on in module files.

3. **TypeScript** compiles to strict JavaScript and adds even more safety checks.

<br>

## Common Use Cases

### 1. Preventing Implicit Global Variables

```js
count = 10; // ❌ ReferenceError
```

### 2. No Duplicate Function Parameters

```js
function sum(a, a) {
    // ❌ SyntaxError
    return a + a;
}
```

### 3. No Accidental Writing to Reserved Words

```js
let eval = 10; // ❌ SyntaxError
```

### 4. Avoid Silent Assignment Failures (Read-only or non-writable)

```js
const obj = {};
Object.defineProperty(obj, "id", { value: 1, writable: false });
obj.id = 2; // ❌ TypeError
```
