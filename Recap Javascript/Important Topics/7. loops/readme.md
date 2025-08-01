# Loops in JavaScript

## Loop Types and When to Use Them

| Loop Type    | Use When                                            |
| ------------ | --------------------------------------------------- |
| `for`        | You know exactly how many times to loop.            |
| `while`      | Loop while a condition is true; may not run at all. |
| `do...while` | Loop at least once, then check the condition.       |

## Loop Control Statements (Bonus)

-   `break` — exits the loop immediately.
-   `continue` — skips the current iteration and continues with the next.

## Loop Variants and Their Use Cases

| Loop       | Iterates Over              | Use For                           |
| ---------- | -------------------------- | --------------------------------- |
| `for...in` | Keys/properties (strings)  | Enumerating object properties     |
| `for...of` | Values of iterable objects | Arrays, strings, Maps, Sets, etc. |

<br><br>

## Array Iteration with Loops

### `for` Loop (traditional counter)

```js
for (let i = 0; i < carArr.length; i++) {
    console.log(carArr[i]);
}
```

-   Standard loop for index-based traversal.
-   Good when you need the index `i`.

---

### `while` Loop

```js
let x = 0;
while (x < carArr.length) {
    console.log(carArr[x]);
    x++;
}
```

-   Condition checked before each run.
-   Useful when condition may depend on something changing dynamically.

---

### `do...while` Loop

```js
let y = 0;
do {
    console.log(carArr[y]);
    y++;
} while (y < carArr.length);
```

-   Always runs at least once.
-   Good for menus, input validation, etc.

## Array Looping: `for...of` vs `for...in`

### ✅ `for...of` Loop (gets values)

```js
for (let a of carArr) {
    console.log(a);
}
```

-   Directly gives values from iterable (like arrays, strings).

### ✅ `for...in` Loop (gets indexes)

```js
for (let index in carArr) {
    console.log(index, carArr[index]);
}
```

-   Useful when you want to access both **index and value**.
-   Not ideal for arrays when order matters (use `for` or `for...of` instead).

## Looping through Object Properties

### ✅ `for...in` Loop (on object)

```js
for (let key in carObj) {
    console.log(key, carObj[key]);
}
```

-   Use `for...in` to loop through **keys of objects**.

## Object Property Filter with `break` & `continue`

```js
for (let key in user) {
    if (key === "email") continue; // Skip "email"
    if (key === "isActive") break; // Stop loop at "isActive"
    console.log(key, "→", user[key]);
}
```

-   Use `continue` to skip a property (e.g., skip `"email"`).
-   Use `break` to stop looping at a certain property (e.g., stop at `"isActive"`).

## 🎯 `do...while` with `break` condition

```js
let value;

do {
    value = Number(prompt());
    if (value === 500) break; // stop immediately if 500
} while (value !== 19000);

console.log(value);
```

-   Loops until a specific condition is met.
-   Use `break` to exit early (e.g., if value is `500`).

---

## 📌 Summary

| Loop Type    | Best For                                    |
| ------------ | ------------------------------------------- |
| `for`        | Counting, index-based loops                 |
| `while`      | Conditional loop, unknown length            |
| `do...while` | User input, retry logic, must-run scenarios |
| `for...of`   | Iterating array values                      |
| `for...in`   | Iterating object keys                       |
