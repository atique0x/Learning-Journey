# JavaScript Array Methods

## 🚀 Commonly Used Methods (From Most to Less)

| **Method**     | **Real-Life Use Case**                           | **Example**                                |
| -------------- | ------------------------------------------------ | ------------------------------------------ |
| `push()`       | Add new data to the end of a list                | `arr.push(newItem)`                        |
| `pop()`        | Remove last item from list                       | `arr.pop()`                                |
| `unshift()`    | Add item to start                                | `arr.unshift(newMsg)`                      |
| `shift()`      | Remove first item                                | `arr.shift()`                              |
| `map()`        | Transform each item for rendering or logic       | `arr.map(x => x * 2)`                      |
| `forEach()`    | Iterate through each element (no return)         | `arr.forEach(x => console.log(x))`         |
| `filter()`     | Create new array based on condition              | `arr.filter(x => x.active)`                |
| `find()`       | Get the **first** matching element               | `arr.find(x => x.id === 3)`                |
| `findIndex()`  | Get index of first match                         | `arr.findIndex(x => x.name === "Tom")`     |
| `reduce()`     | Calculate totals, combine values                 | `arr.reduce((sum, p) => sum + p.price, 0)` |
| `some()`       | Validate if **any** item passes the condition    | `arr.some(x => x.isAdmin)`                 |
| `every()`      | Check if **all** items pass a condition          | `arr.every(x => x !== null)`               |
| `includes()`   | Check if a value exists                          | `arr.includes("admin")`                    |
| `slice()`      | Copy/preview a part of array (pagination, top 5) | `arr.slice(0, 5)`                          |
| `splice()`     | Add/remove items at specific index (mutates)     | `arr.splice(2, 1)`                         |
| `join()`       | Convert array to string                          | `arr.join(", ")`                           |
| `sort()`       | Sort numbers, strings, or objects (mutates)      | `arr.sort((a, b) => a.price - b.price)`    |
| `toSorted()`   | Immutable version of `sort()` (ES2023+)          | `arr.toSorted((a, b) => a - b)`            |
| `reverse()`    | Reverses the array order (mutates)               | `arr.reverse()`                            |
| `toReversed()` | Immutable reverse (ES2023+)                      | `arr.toReversed()`                         |
| `at()`         | Get value by index (supports negative index)     | `arr.at(-1)`                               |
| `flat()`       | Flatten nested arrays                            | `[1, [2, [3]]].flat(2)`                    |

> 🔹 Methods marked with a \* modify (mutate) the original array.

---

## 🔄 map() vs forEach()

| **Feature**      | **`map()`**                               | **`forEach()`**                                     |
| ---------------- | ----------------------------------------- | --------------------------------------------------- |
| **Purpose**      | Transform elements and return a new array | Perform actions per item without returning anything |
| **Return Value** | ✅ Returns new array                      | ❌ Returns `undefined`                              |
| **Use Case**     | When creating a new array                 | When doing side-effects (e.g., logging, UI update)  |

```js
// map()
const prices = [10, 20, 30];
const taxed = prices.map((p) => p * 1.15); // [11.5, 23, 34.5]

// forEach()
prices.forEach((p) => console.log(p)); // logs 10, 20, 30
```
