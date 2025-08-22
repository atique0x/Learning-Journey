# TypeScript Special Types: `any` vs `unknown`

TypeScript provides special types for dynamic values:

- `any` → out of type checking.
- `unknown` → safer alternative to `any`.

<br>

# `any`

**Definition:**  
`any` allows a variable to hold any type of value, bypassing TypeScript’s type checking.

```ts
let variable: any;

variable = 42;
variable = "hello";
variable = [1, 2, 3];
variable = { key: "value" };

// TypeScript allows this, but runtime errors may occur
variable.toUpperCase(); // ❌ may fail if variable isn't a string
```

> **When to use `any`:** **Never use any. if needed use unkwon**

**Drawbacks:**

- Removes type safety.
- Can cause runtime errors.
- Not recommended in production code.

---

# `unknown`

**Definition:**  
`unknown` can also hold any value, but you must perform type checks before using it.

```ts
let value: unknown;

value = "hello";
value = 100;
value = true;

// ❌ Cannot use directly
// console.log(value.toUpperCase());

// ✅ Must narrow type first
if (typeof value === "string") {
  console.log(value.toUpperCase());
} else if (typeof value === "number") {
  console.log(value + 10);
}
```

**Advantages over `any`:**

- Safe: prevents accidental misuse.
- Forces explicit type narrowing.
- Ideal for API responses, user input, or dynamic data.
- `unknown` promotes safer code: forces handling types explicitly, reducing runtime errors.

---

## Comparison Table: `any` vs `unknown`

| Feature / Type         | `any`   | `unknown`                      |
| ---------------------- | ------- | ------------------------------ |
| Can hold any value     | ✅ Yes  | ✅ Yes                         |
| Type checking enforced | ❌ No   | ✅ Yes                         |
| Safer usage            | ❌      | ✅                             |
| Compile-time errors    | ❌ None | ✅ Must narrow type before use |

---

# Example any vs unknown

`Any`: **We can do anything — call methods, access properties, or call it as a function. It doesn’t cause compile-time errors; issues only appear at runtime.**

`Unknown`: **We cannot perform operations without proper type checking. It strictly shows errors at compile time if we try to use it directly.**

`Common Point`: **In both any and unknown, we can assign or reassign any value or any type of data.**

```ts
// ---------------- ANY -----------------
let anyData: any = 2;

// You can reassign any type — number → array here ✅
anyData = [1, 2, 3, 4];

// ❌ Allowed at compile time, but will crash at runtime
// Because arrays don't have toUpperCase()
console.log(anyData.toUpperCase()); // ✅ Compiles | ❌ Runtime Error

// ❌ Same problem: `trim()` exists on strings, not arrays
anyData.trim(); // ✅ Compiles | ❌ Runtime Error

// ❌ You can even call it as a function without error, but it will crash at runtime
anyData(); // ✅ Compiles | ❌ Runtime Error

// ---------------- UNKNOWN -----------------
let unknownData: unknown = 2;

// ❌ Cannot directly call string methods on unknown
// TypeScript forces you to first **check the type** or **assert it**
unknownData.toUpperCase(); // ❌ Compile-time Error

// Reassigning unknown to an array ✅
unknownData = [1, 2, 3, 4];

// ❌ Again, you cannot directly call string methods on unknown
unknownData.toUpperCase(); // ❌ Compile-time Error
```

# Comparing any-unknown with array

```ts
let arrAny: any[] = [1, "two", true]; // array can contain any type

arrAny.push({ name: "Alice" }); // ✅ no error
//arrAny[0].toUpperCase(); // ❌ TypeScript will not catch this mistake, might cause runtime error

let arrUnknown: unknown[] = [1, "two", true];

arrUnknown.push({ name: "Alice" }); // ✅ allowed
//arrUnknown[0].toUpperCase(); // ❌ Error: Object is of type 'unknown'

// You must narrow the type first
if (typeof arrUnknown[1] === "string") {
  console.log(arrUnknown[1].toUpperCase()); // ✅ safe
}
```

> type narrowing = type checking + telling TypeScript what the type is.
