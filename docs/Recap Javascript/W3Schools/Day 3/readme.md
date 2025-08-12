# 📘 Day 3: JavaScript Study Notes

## ✅ Indexes in JavaScript

-   **Arrays** use **numbered indexes** (e.g., `arr[0]`)
-   **Objects** use **named indexes** (e.g., `obj["key"]` or `obj.key`)

---

## 🔁 JavaScript Array Methods

| Method         | Real-Life Use Case                         | Mutates | Example                                    |
| -------------- | ------------------------------------------ | ------- | ------------------------------------------ |
| `map()`        | Transform data (e.g., extract names)       | ❌      | `arr.map(user => user.name)`               |
| `filter()`     | Filter data (e.g., active users)           | ❌      | `arr.filter(item => item.active)`          |
| `forEach()`    | Perform actions (e.g., send requests)      | ❌      | `arr.forEach(item => send(item))`          |
| `push()`       | Add to end (e.g., add to cart)             | ✅      | `arr.push(newItem)`                        |
| `pop()`        | Remove last item (e.g., undo last action)  | ✅      | `arr.pop()`                                |
| `includes()`   | Check existence (e.g., roles, tags)        | ❌      | `arr.includes("admin")`                    |
| `find()`       | Get first match (e.g., find user by ID)    | ❌      | `arr.find(p => p.id === 101)`              |
| `some()`       | Any condition true? (e.g., stock check)    | ❌      | `arr.some(p => p.stock === 0)`             |
| `slice()`      | Copy/preview part (e.g., top 5)            | ❌      | `arr.slice(0, 5)`                          |
| `sort()`       | Sort array (e.g., by price)                | ✅      | `arr.sort((a, b) => a.price - b.price)`    |
| `reduce()`     | Aggregate (e.g., total cost)               | ❌      | `arr.reduce((sum, p) => sum + p.price, 0)` |
| `splice()`     | Modify at index (e.g., remove item)        | ✅      | `arr.splice(2, 1)`                         |
| `every()`      | All conditions true? (e.g., fields filled) | ❌      | `arr.every(x => x !== null)`               |
| `unshift()`    | Add to beginning (e.g., prepend message)   | ✅      | `arr.unshift(newMsg)`                      |
| `shift()`      | Remove first (e.g., from queue)            | ✅      | `arr.shift()`                              |
| `join()`       | Combine to string (e.g., tag list)         | ❌      | `arr.join(", ")`                           |
| `findIndex()`  | Index of first match (e.g., update/delete) | ❌      | `arr.findIndex(p => p.id === 10)`          |
| `flat()`       | Flatten nested arrays                      | ❌      | `[1, [2, [3]]].flat(2)`                    |
| `at()`         | Index access with negative support         | ❌      | `arr.at(-1)`                               |
| `fill()`       | Fill array with static value               | ✅      | `arr.fill(0)`                              |
| `copyWithin()` | Copy inside the same array                 | ✅      | `arr.copyWithin(0, 2)`                     |
| `toSorted()`   | Immutable sort (ES2023+)                   | ❌      | `arr.toSorted((a, b) => a - b)`            |
| `toReversed()` | Immutable reverse (ES2023+)                | ❌      | `arr.toReversed()`                         |
| `flatMap()`    | Map + Flatten (e.g., calendar slots)       | ❌      | `arr.flatMap(x => x.items)`                |

---

## 🧮 JavaScript Math Methods

| Method                        | Description                   | Example                        | Result       |
| ----------------------------- | ----------------------------- | ------------------------------ | ------------ |
| `Math.abs(x)`                 | Absolute value                | `Math.abs(-7)`                 | `7`          |
| `Math.round(x)`               | Round to nearest integer      | `Math.round(4.6)`              | `5`          |
| `Math.floor(x)`               | Round down                    | `Math.floor(4.9)`              | `4`          |
| `Math.ceil(x)`                | Round up                      | `Math.ceil(4.1)`               | `5`          |
| `Math.trunc(x)`               | Remove decimal part           | `Math.trunc(4.9)`              | `4`          |
| `Math.max(a, b, ...)`         | Largest value                 | `Math.max(3, 5, 1)`            | `5`          |
| `Math.min(a, b, ...)`         | Smallest value                | `Math.min(3, 5, 1)`            | `1`          |
| `Math.pow(x, y)`              | Power (x^y)                   | `Math.pow(2, 3)`               | `8`          |
| `Math.sqrt(x)`                | Square root                   | `Math.sqrt(16)`                | `4`          |
| `Math.cbrt(x)`                | Cube root                     | `Math.cbrt(27)`                | `3`          |
| `Math.random()`               | Random number between 0 and 1 | `Math.random()`                | `0.472...`   |
| `Math.floor(Math.random()*N)` | Random integer `0–(N-1)`      | `Math.floor(Math.random()*10)` | `0–9`        |
| `Math.sign(x)`                | Returns -1, 0, or 1           | `Math.sign(-5)`                | `-1`         |
| `Math.log(x)`                 | Natural log (base e)          | `Math.log(10)`                 | `2.302...`   |
| `Math.log10(x)`               | Base-10 logarithm             | `Math.log10(1000)`             | `3`          |
| `Math.exp(x)`                 | Exponential (e^x)             | `Math.exp(1)`                  | `2.718...`   |
| `Math.PI`                     | π Constant                    | `Math.PI`                      | `3.14159...` |
| `Math.E`                      | Euler’s number                | `Math.E`                       | `2.71828...` |
| `Math.hypot(x, y)`            | √(x² + y²)                    | `Math.hypot(3, 4)`             | `5`          |

---

## ⚠️ JavaScript Falsy Values

These are considered **falsy** (evaluate to `false` in conditionals):

-   `false`
-   `0`
-   `-0`
-   `0n` _(BigInt zero)_
-   `null`
-   `undefined`
-   `NaN`
-   `""` _(empty string)_

---

## 🔁 JavaScript Iterables

The following are **iterable** in JavaScript (you can use them in loops like `for...of`):

-   `String`
-   `Array`
-   `TypedArray`
-   `Set`
-   `Map`

> ❌ **Note:** `Objects` are **not** iterable by default.

---

## ✍️ Author

**Atique Shahriar**  
Continuing the JavaScript journey — exploring arrays, math methods, and the language fundamentals.
