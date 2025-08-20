# TypeScript Tuples

A tuple is a special type of array in TypeScript with:

- Fixed length
- Fixed type for each position

```ts
const user: [string, number, boolean] = ["Atique", 25, true];
```

---

### Examples

**Example 1 – Basic Tuple**

```ts
const user: [string, number, boolean] = ["Atique", 25, true];
user[0] = "Ashik"; // ✅ allowed
// user[1] = "25"; // ❌ error
```

**Example 2 – Push Problem**

```ts
const tup: [string, number] = ["Atique", 25];
tup.push(28); // ✅ allowed, but not part of the tuple type
console.log(tup); // ["Atique", 25, 28]
```

> push() is type-safe — it can add elements not in the original tuple definition.

**Example 3 – Readonly Tuple**

```ts
const pos: readonly [number, number] = [100, 200];
// pos.push(300); // ❌ error
// pos[0] = 150; // ❌ error
```

**Example 4 – Optional Elements**

```ts
const point: [number, number?] = [10]; // ✅ valid
const point2: [number, number?] = [10, 20]; // ✅ valid
// const point3: [number, number?, number] = [10, 20]; // ❌ invalid
```

---

## Features

| Feature            | Description                                                       |
| ------------------ | ----------------------------------------------------------------- |
| Fixed types        | Each element has a specific type based on its position.           |
| Fixed length       | Number of elements is defined at declaration.                     |
| Index-based access | Access elements using indices, e.g., user[0].                     |
| Destructuring      | You can destructure tuples like arrays: const [name, age] = user. |
| Optional elements  | Only allowed at the end: [number, number?].                       |
| Readonly tuples    | Use readonly to prevent modification: readonly [string, number].  |

---
