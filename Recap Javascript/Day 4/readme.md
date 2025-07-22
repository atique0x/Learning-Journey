# JavaScript Real-Life Regex Examples (All in One)

A handy collection of practical regular expressions with usage examples in JavaScript.

**Email Validation (standard)**

```js
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
console.log(emailRegex.test("user@example.com")); // true
```

**Strong Password (Min 8 chars, 1 letter, 1 number)**

```js
const passwordRegex = /^(?=._[A-Za-z])(?=._\d)[A-Za-z\d]{8,}$/;
console.log(passwordRegex.test("abc12345")); // true
```

**Username (only letters, numbers, underscores, 3-15 chars)**

```js
const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
console.log(usernameRegex.test("user_123")); // true
```

**Phone Number (Bangladesh, flexible)**

```js
const bdPhoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
console.log(bdPhoneRegex.test("01712345678")); // true
```

**URL Validator**

```js
const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]\*$/;
console.log(urlRegex.test("https://www.google.com")); // true
```

**Date (dd-mm-yyyy or dd/mm/yyyy)**

```js
const dateRegex = /^\d{2}[-\/]\d{2}[-\/]\d{4}$/;
console.log(dateRegex.test("22/07/2025")); // true
```

**Hex Color Code**

```js
const hexColorRegex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
console.log(hexColorRegex.test("#ff5733")); // true
```

**Credit Card (basic, 13 to 19 digits)**

```js
const creditCardRegex = /^\d{13,19}$/;
console.log(creditCardRegex.test("4111111111111111")); // true
```

**IP Address (IPv4)**

```js
const ipRegex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(?!$)|$){4}$/;
console.log(ipRegex.test("192.168.1.1")); // true
```

**Extract Numbers from String**

```js
const numberExtract = "Total: 95 Taka".match(/\d+/g);
console.log(numberExtract); // ["95"]
```

**Remove All Whitespace**

```js
const clean = " Hello World ".replace(/\s+/g, "");
console.log(clean); // "HelloWorld"
```

**Contains only Alphabets**

```js
const alphaOnly = /^[A-Za-z]+$/;
console.log(alphaOnly.test("OnlyLetters")); // true
```

**Contains only Numbers**

```js
const numOnly = /^\d+$/;
console.log(numOnly.test("123456")); // true
```

**Contains both letters & numbers (no symbols)**

```js
const alnumRegex = /^[A-Za-z0-9]+$/;
console.log(alnumRegex.test("abc123")); // true
```

**Match All Words in a Sentence**

```js
const words = "I love JavaScript!".match(/\b\w+\b/g);
console.log(words); // ["I", "love", "JavaScript"]
```

# JavaScript Error Types

This document provides an overview of the most common JavaScript error types and when they typically occur.

| Error Type       | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `SyntaxError`    | Occurs when code has invalid syntax.                   |
| `ReferenceError` | Variable that doesn't exist is accessed.               |
| `TypeError`      | Wrong type used (e.g., call a number like a function). |
| `RangeError`     | A value is out of the allowable range.                 |
| `EvalError`      | Issues related to the `eval()` function (rare).        |
| `URIError`       | Problems with `encodeURI()` or `decodeURI()`.          |
| `AggregateError` | Represents multiple errors (e.g., in `Promise.any()`). |

# JavaScript Scope Overview

| Scope Type   | Declared With         | Accessible Where              | Notes                                                                                                   |
| ------------ | --------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Global**   | `var`, `let`, `const` | Anywhere in the code          | Declared outside functions or blocks; pollutes global namespace if overused                             |
| **Function** | `var`, `let`, `const` | Inside the entire function    | Variables exist throughout the function scope; `var` is function-scoped but ignores block scope         |
| **Block**    | `let`, `const`        | Inside the nearest `{}` block | Applies to loops, conditionals, etc.; `var` does NOT have block scope, it is hoisted to function/global |
