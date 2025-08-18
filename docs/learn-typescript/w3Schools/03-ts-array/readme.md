# TypeScript Arrays

An array is a collection of elements of the same or different types. TypeScript adds type safety by allowing you to specify the types of elements in an array.

---

## 1. Array without Type Annotation (Type Inference)

```ts
// TypeScript infers the type from the initial values
let user = ["atique", 25, true];
// Inferred type: (string | number | boolean)[]

user.push("ashik"); // ✅ string
user.push(26); // ✅ number
user.push(false); // ✅ boolean

// user.push({}); // ❌ Error: object not part of inferred type
```

**Key Points:**

- TypeScript infers the type based on initial values.
- Array becomes a union of all inferred types.

---

## 2. Array with Type Annotation (Homogeneous Array)

```ts
// Array with only string type allowed
let user2: string[] = ["atique", "ashik"];

user2.push("new name"); // ✅ Allowed
// user2.push(25);      // ❌ Error: number not allowed
```

**Key Points:**

- Forces all elements to have the same type.
- Helps prevent accidental type errors.

---

## 3. Array with Union Types (Heterogeneous Array)

```ts
// Array allowing multiple types: string or number
let user3: (string | number)[] = ["atique", "ashik", 26];

user3.push(99); // ✅ Allowed (number)
user3.push("hello"); // ✅ Allowed (string)
// user3.push(true);  // ❌ Error: boolean not allowed
```

**Key Points:**

- Union types allow multiple types in the same array.
- Useful for arrays where elements can be different types but only a specific set.

---

## 4. Readonly Array

```ts
// Readonly array: cannot be modified
const colors: readonly string[] = ["red", "green", "blue"];

// colors.push("yellow"); // ❌ Error: Cannot modify a readonly array
// colors[0] = "purple";  // ❌ Error: Cannot modify elements
```

**Key Points:**

- `readonly` ensures the array cannot be modified after initialization.
- Safe for constants or configuration data.

---

## 5. Array with Nested Types

```ts
let users: { name: string; age: number }[] = [
  { name: "Atique", age: 25 },
  { name: "Ashik", age: 26 },
];

users.push({ name: "Ali", age: 27 }); // ✅ Allowed
// users.push({ name: "Rahim" });    // ❌ Error: missing 'age'
```

**Key Points:**

- Arrays can hold objects.
- TypeScript enforces object structure for each element.

---

## 6. Tuples (Fixed Array Types)

```ts
let userTuple: [string, number, boolean] = ["Atique", 25, true];

userTuple[0] = "Ashik"; // ✅ string
// userTuple[1] = "hello"; // ❌ Error: must be number
```

**Key Points:**

- Tuples are arrays with fixed length and types.
- Great for structured data like `[name, age, isActive]`.

---
