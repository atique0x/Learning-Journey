## JavaScript Datatypes

JavaScript has 8 data types:

### 🧱 Primitive Types (Immutable)

-   **String**: `"Hello"`, `'World'`, \`Backtick\`
-   **Number**: `5`, `3.14`, `-42`, `NaN`, `-Infinity`, `Infinity`
-   **Boolean**: `true`, `false`
-   **Undefined**: a variable declared but not assigned
-   **Null**: intentional absence of any value
-   **Symbol**: unique and immutable value (used for object keys)
-   **BigInt**: for very large integers (e.g., `9007199254740991n`)

### 📦 Non-Primitive Type (Reference Type)

Stored by reference and can hold multiple values:

-   **Plain Objects**: `{ name: "Atique" }`
-   **Arrays**: `[1, 2, 3]`
-   **Functions**: `function(){}`
-   **Others**: `Date`, `RegExp`, `Map`, `Set`, etc.

---

## 🔍 Feature Comparison

| Feature         | Primitive          | Object (Reference)         |
| --------------- | ------------------ | -------------------------- |
| **Storage**     | Stored by value    | Stored by reference        |
| **Memory Size** | Fixed              | Dynamic (can grow)         |
| **Copying**     | Creates a new copy | Copies the reference       |
| **Comparison**  | Compared by value  | Compared by memory address |

---

## 🧪 Examples & Type Checks

```js
let name = "Atique"; // String
let age = 25; // Number
let isActive = true; // Boolean
let x; // Undefined
let y = null; // Null
let big = 123456789012345678901234567890n; // BigInt
let sym = Symbol("id"); // Symbol
let user = { name: "Atique", age: 25 }; // Object
let another = BigInt(999999999999);
```

```js
typeof 5; // "number"
typeof null; // "object" (bug!)
typeof []; // "object"
Array.isArray([]); // true
typeof (() => {}); // "function"
typeof NaN; // "number"
typeof Infinity; // "number"
typeof BigInt(9); // "bigint"
typeof 9n; // "bigint"
```
