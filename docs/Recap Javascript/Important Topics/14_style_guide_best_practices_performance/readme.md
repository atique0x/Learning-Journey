> # JavaScript Style Guide

### Naming Conventions

- **Variables & Functions → camelCase**

```js
let userName = "Atique";
function getUserData() {}
```

- **Global Variables & Constants → UPPERCASE**

```js
const API_KEY = "12345";
let MAX_USERS = 100;
```

- **File Names → lowercase**

```js
user.js;
app.js;
index.js;
```

<br>

# Files & Folders Naming

| File Type / Purpose       | Example File Name / Folder                             |
| ------------------------- | ------------------------------------------------------ |
| HTML pages                | about-us.html, contact.html                            |
| CSS selectors & variables | .btn-primary, .form-input                              |
| JS utilities/modules      | form-validation.js, dom-utils.js                       |
| JS config/constants       | config.js, env-setup.js                                |
| TS utilities/modules      | form-validation.ts, dom-utils.ts                       |
| TS config/constants       | config.ts, env-setup.ts                                |
| Angular component (TS)    | user-profile.component.ts, login-form.component.ts     |
| Angular component (HTML)  | user-profile.component.html, login-form.component.html |
| Angular component (CSS)   | user-profile.component.css, login-form.component.css   |
| Angular service           | auth.service.ts, user.service.ts                       |
| Angular module            | dashboard.module.ts, auth.module.ts                    |
| Folders                   | /user-profile, /order-management                       |

<br>

# Code & Identifier Naming

| Item                                          | Recommended Naming Style | Example                  |
| --------------------------------------------- | ------------------------ | ------------------------ |
| HTML class, id, name                          | kebab-case               | main-header, form-input  |
| CSS selectors & variables                     | kebab-case               | .btn-primary             |
| JavaScript / TypeScript variables & functions | camelCase                | userName, calculateSum() |
| TypeScript classes & interfaces               | PascalCase               | UserProfile, IUserData   |

<br>

# Function Naming Patterns

| Priority | Pattern                | Use Case                    |
| -------- | ---------------------- | --------------------------- |
| 1        | Verb + Noun            | Most general actions        |
| 2        | Modal/Adjective + Verb | Boolean/state checks        |
| 3        | Verb + Adjective       | Action with state/condition |

<br>

# Function Naming Examples

| Action / Purpose                     | Better Name       | Worse Name          | Why?                                                        | Part of Speech (Better Name) |
| ------------------------------------ | ----------------- | ------------------- | ----------------------------------------------------------- | ---------------------------- |
| Fetch user data                      | fetchUserData()   | getData()           | Clearly says _what_ data is fetched.                        | Verb + Noun Phrase           |
| Get a user                           | getUser()         | get()               | Specific about what is returned; `get()` is vague.          | Verb + Noun                  |
| Check if user is logged in (Boolean) | isLoggedIn()      | loggedIn()          | Indicates a Boolean check clearly.                          | Adjective + Verb (Boolean)   |
| Check access (Boolean)               | hasAccess()       | checkAccess()       | `hasAccess()` implies true/false; `checkAccess()` is vague. | Verb + Noun (Boolean)        |
| Calculate total price                | calculateTotal()  | total()             | Implies action; `total()` sounds like a variable.           | Verb + Noun                  |
| Get total price                      | getTotalPrice()   | price()             | More descriptive; `price()` is too generic.                 | Verb + Noun Phrase           |
| Save user details                    | saveUserDetails() | save()              | Clearly states what is being saved.                         | Verb + Noun Phrase           |
| Submit a form                        | submitForm()      | submit()            | Specifies which form is submitted.                          | Verb + Noun                  |
| Toggle dark mode                     | toggleDarkMode()  | switchMode()        | Clearly describes what is toggled.                          | Verb + Noun Phrase           |
| Generic toggle/change                | toggleDarkMode()  | toggle() / change() | Too generic, no idea what is toggled or changed.            | Verb + Noun Phrase           |

<br>

### Formatting Rules

- **Spaces around operators:**

```js
let sum = a + b;
if (x === 10) {
}
```

- **Spaces for indentation:**

```js
function greet() {
  console.log("Hello");
}
```

- **Semicolons at the end of statements:**

```js
let count = 5;
console.log(count);
```

---

### Variable Declarations

- **Always declare variables with let, const, or var**: `let` and `const` provide block scope (safer than `var` which is function scoped and hoisted).

- **Prefer const for objects and arrays**: `const` means you cannot reassign the variable but you **can mutate contents** of objects and arrays:

- **Put all declarations at the top**

---

### Object and Array Creation

- **Avoid `new Object()` and `new Array()`**
- **Avoid `new String()`, `new Number()`, `new Boolean()`**
- **Use Literal Syntax**
  - `const num = 25`
  - `const obj = { }`
  - `const arr = []`
  - **WHY**
    | Creation Type | Performance / Notes |
    |-------------------------------|-----------------------------------------------|
    | `new Object()` | Extra constructor call, slower |
    | `{}` (literal) | Direct allocation, optimized |
    | `new Array()` | Can create sparse arrays, slower |
    | `[]` (literal) | Direct allocation, optimized |
    | `new String()` / `new Number()` / `new Boolean()` | Extra memory, unexpected comparison bugs |
    | `"string"` / `42` / `true` | Fast, simple, expected behavior |

---

### Comparison Operators

**Use `===` and `!==` always instead of `==` and `!=`**

- `==` performs type coercion and can cause subtle bugs.
- `===` checks both type and value strictly.

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

### Missing Arguments

```js
// Function with five parameters
function checkParameter(a, b, c, d, e) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  console.log(`c: ${c}`);
  console.log(`d: ${d}`);
  console.log(`e: ${e}`);
}

// 1️⃣ Passing undefined for missing arguments
// Explicitly skip parameters by passing undefined
checkParameter(1, 2, undefined, 4, undefined);
/*
Output:
a: 1
b: 2
c: undefined
d: 4
e: undefined
*/

// 2️⃣ Using spread operator with an array
// Sparse array slots become undefined automatically
checkParameter(...[1, 2, , , 6]);
/*
Output:
a: 1
b: 2
c: undefined
d: undefined
e: 6
*/

// 3️⃣ Using an object with destructuring
function checkObjectParameter({ a, b, c, d, e }) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  console.log(`c: ${c}`);
  console.log(`d: ${d}`);
  console.log(`e: ${e}`);
}

// Pass only the arguments you want by property name
checkObjectParameter({ a: 3, e: 2, b: 5 });
/*
Output:
a: 3
b: 5
c: undefined
d: undefined
e: 2
*/
```

---

### Switch Statements

**Always end with `default` and use `break`**

<br>
<br>

> # JavaScript Best Practices

### Avoid Globals

- Global variables risk being overwritten by other scripts or libraries.
- Difficult to track, debug, and maintain.

---

### `'use strict'`

- Eliminates some silent errors.
- Disallows undeclared variables.
- Prevents accidental globals.

---

### Error Handling

- Use `try/catch` only where you expect errors (e.g. network requests).
- Avoid catching errors too early or globally unless necessary.
- Always log or handle errors meaningfully.

---

### Comments

- Avoid redundant comments (e.g. `i++; // increment i`)
- Use comments to explain **why** the code does something non-obvious.

---

### Functions

- Write pure functions when possible. **[One function → One task → one expected outcome → simpler to test.]**
- **Single-task functions = clear + reusable + testable + maintainable + composable.**
- Use meaningful names and keep functions short [short function is helpful for unit testing].

  - ### Unit Testing:

    Unit testing is a technique in software development where individual units (functions, methods, or classes) are tested in isolation to check if they work correctly.

    **Goal:**  
    Verify that each piece of code behaves as expected before integrating it into a larger system.

    ### How Unit Testing Works

    1. **Choose a unit to test**  
       Usually a function or method.

    2. **Define expected behavior**  
       Specify inputs and the expected output or behavior.

    3. **Write test cases**  
       Use a testing framework (like **Jest**, **Mocha**, or **Jasmine** in JavaScript).

    4. **Run the tests**  
       The testing framework calls your function with the inputs and checks the output against the expected result.

    5. **Check results**  
       The framework reports **pass** or **fail** for each test case.

- Avoid long parameter lists (use objects to pass many parameters).

<br>
<br>

> # Performance Tips

### Minimize DOM Access

- DOM queries like `document.getElementById` are expensive.
- Cache the result if used multiple times.

---

### Let and Const vs Var

- `var` hoists and has function scope → can lead to bugs.
- `let` and `const` have block scope → safer, predictable.

---

### Optimize Loops

- Use simple `for` loops or `for...of` for arrays.
- Avoid nested loops when possible (O(n²) complexity). [By hashing table]

```js
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

// Nested loop approach (O(n²))
const duplicates = arr1.filter((x) => arr2.includes(x));
//arr1.filter() → O(n)
//arr2.includes() for each → O(m)
//Total: O(n*m) → same as nested loop in worst case.

// Create a Set or Map from arr2 for O(1) lookups
const set2 = new Set(arr2);
const duplicates = arr1.filter((x) => set2.has(x));
```

---
