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
