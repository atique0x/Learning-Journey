# Memory Management in JavaScript

## 1. What is Memory Management?

In any programming language, memory management is the process of:

- **Allocating memory** – when you create something (variable, object, function).
- **Using memory** – reading/writing data during program execution.
- **Releasing memory** – when it’s no longer needed.

In JavaScript, you don’t manually allocate or free memory (unlike C/C++).  
The JavaScript Engine uses **Automatic Garbage Collection (GC)** to manage memory.

## 2. How Memory Works in JS

| Memory Area | Stores                                | Example            |
| ----------- | ------------------------------------- | ------------------ |
| **Stack**   | Primitive values & references         | `let age = 25`     |
| **Heap**    | Objects, arrays, functions, DOM nodes | `{ name: "John" }` |

- **Stack** → Fast, fixed-size storage for primitives (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) and references to objects.
- **Heap** → Flexible, dynamic storage for non-primitives (objects, arrays, functions, DOM nodes).

<br>

## 3. Memory Life Cycle in JS

Every piece of memory goes through **three stages**:

1. **Allocation** – JS reserves memory.
   ```js
   let obj = { name: "Alice" }; // Allocated in heap
   ```
2. **Usage** – Reading or modifying data.
   ```js
   console.log(obj.name);
   ```
3. **Release** – If there are no references left, the Garbage Collector frees it.

## 4. Garbage Collection in JS

**Main strategy → Mark-and-Sweep Algorithm**:

1. **Mark**: GC starts from roots (global variables, active functions, closures) and marks all reachable objects.
2. **Sweep**: Unmarked (unreachable) objects are removed from memory.

Example:

```js
let user = { name: "John" }; // allocated
user = null; // reference removed
// GC frees it in the next cleanup cycle
```

## 5. Common Memory Leaks in JavaScript

### ❌ Unused Global Variables

Large data stored in global scope remains until page refresh.

```js
globalData = new Array(1000000); // stays until page refresh
```

### ❌ Forgotten Timers

Intervals or timeouts left running will keep references alive.

```js
setInterval(() => console.log("Hello"), 1000); // never cleared
```

### ❌ Detached DOM References

Removing DOM elements without also removing event listeners keeps them in memory.

```js
const button = document.getElementById("myBtn");
function handleClick() {
  console.log("Clicked!");
}
button.addEventListener("click", handleClick);

// Later, removed from DOM but listener still attached
document.body.removeChild(button);
```

✅ **Fix**: Remove event listeners and nullify variables before removing DOM elements.

```js
button.removeEventListener("click", handleClick);
document.body.removeChild(button);
button = null;
```

## 6. Best Practices to Avoid Memory Issues

- ✅ Use `let` and `const` (avoid `var`) to limit scope.
- ✅ Nullify references when no longer needed.
  ```js
  obj = null;
  ```
- ✅ Clear timers/intervals when done.
  ```js
  clearInterval(myInterval);
  ```
- ✅ Remove event listeners before removing DOM elements.
- ✅ Avoid large unnecessary data in global variables.
- ✅ Be mindful of closures holding large data.

## 7. Analogy: JS Memory as a Hotel

- **Stack** → Reception desk (fast, small storage).
- **Heap** → Hotel rooms (flexible storage for guests — objects).
- **Garbage Collector** → Housekeeping (cleans rooms only when guests are truly gone).
