# JavaScript Regular Expressions

## What is RegExp?

A **RegExp (Regular Expression)** is a sequence of characters used to define search patterns.
Used for:

-   Pattern matching
-   String searching
-   String replacement

## Used with String Methods

| Method      | Description                          |
| ----------- | ------------------------------------ |
| `match()`   | Returns match result as array        |
| `replace()` | Replaces matched substring           |
| `search()`  | Returns index of first match         |
| `test()`    | Returns `true/false` — match exists? |

---

## Common Flags

| Flag | Description      |
| ---- | ---------------- |
| `g`  | Global match     |
| `i`  | Case-insensitive |
| `m`  | Multiline mode   |

---

## 🔁 `search()` vs `match()`

| Feature          | `search()`           | `match()`                      |
| ---------------- | -------------------- | ------------------------------ |
| Purpose          | Index of first match | Actual match (array or `null`) |
| Return Type      | Number               | Array / null                   |
| Flags Supported  | `i`, `m` only        | All (`g`, `i`, `m`, etc.)      |
| Multiple Matches | ❌ First only        | ✅ If `/g` used                |
| No Match         | `-1`                 | `null`                         |

---

## Common Patterns

| Pattern    | Matches...                    |
| ---------- | ----------------------------- |
| `/abc/`    | Exact string "abc"            |
| `/\d/`     | Any digit 0–9                 |
| `/\w/`     | Word char: a–z, A–Z, 0–9, \_  |
| `/\s/`     | Whitespace (space, tab, etc.) |
| `/^hello/` | Starts with "hello"           |
| `/world$/` | Ends with "world"             |
| `/[a-z]/`  | Any lowercase letter          |
| `/[^0-9]/` | Any character except digits   |
| `/./`      | Any single character          |

---

## Examples

```js
const str = "Hello 123 world!";

console.log(str.match(/\d+/)); // ["123"]
console.log(str.search(/\d/)); // 6
console.log(/\w+/.test(str)); // true
console.log(str.replace(/\d+/, "***")); // "Hello *** world!"
```

# 🧪 JavaScript RegExp Examples

A collection of commonly used regular expressions for everyday validation and matching tasks in JavaScript.

---

### Email Validation (standard)

Checks if the input follows the standard email format.

```js
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
console.log(emailRegex.test("user@example.com")); // true
```

---

### Strong Password Validation

**Requirement**: Minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter and 1 number.

```js
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
console.log(passwordRegex.test("abc12345")); // true
```

---

### Username Validation

**Requirement**: Only letters, numbers, underscores; length between 3 to 15 characters.

```js
const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
console.log(usernameRegex.test("user_123")); // true
```

---

### Phone Number Validation (Bangladesh, Flexible)

**Requirement**: Must start with `01`, optionally prefixed with `+88` or `88`; followed by 9 digits (2nd digit: 3-9).

```js
const bdPhoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
console.log(bdPhoneRegex.test("01712345678")); // true
```

---

### URL Validator

**Requirement**: Should start with `http://` or `https://`, followed by a valid URL structure.

```js
const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/;
console.log(urlRegex.test("https://www.google.com")); // true
```

---

### Number Format

```js
const numberCheck = /^\+\d{3}\s\d{4}\s\d{3}\s\d{3}$/;

console.log(numberCheck.test("+880 1744 320 509")); // true
```

<br>

# Regex Quantifiers Cheat Sheet

| Quantifier | Meaning                           | Example  | Matches                      |
| ---------- | --------------------------------- | -------- | ---------------------------- |
| `{n}`      | Exactly n times                   | `a{3}`   | `aaa`                        |
| `{n,}`     | At least n times (n to ∞)         | `a{2,}`  | `aa`, `aaa`, `aaaa`, ...     |
| `{n,m}`    | Between n and m times (inclusive) | `a{2,4}` | `aa`, `aaa`, `aaaa`          |
| `?`        | 0 or 1 time (optional)            | `a?`     | `""` (empty) or `"a"`        |
| `*`        | 0 or more times                   | `a*`     | `""`, `"a"`, `"aa"`, `"aaa"` |
| `+`        | 1 or more times                   | `a+`     | `"a"`, `"aa"`, `"aaa"`       |

## Special Case: Exactly 2 OR 6 times

To match exactly **2 or 6** repetitions only (not anything in between), use alternation:

```regex
(a{2}|a{6})
```
