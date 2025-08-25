# Utility: `ReturnType<T>`

**ReturnType<T>** is a TypeScript utility type that **extracts the return type of a function type**.  
It is useful when you want to **reuse a function’s return type without manually specifying it**.

---

## Syntax

```ts
ReturnType<typeof functionName>;
```

- `typeof functionName` → gives the **type of the function**
- `ReturnType` → gives the **type of what that function returns**

---

## Use of ReturnType

- **Avoid repeating types manually**
- **Stay consistent** with the function’s return type

---

## Examples

```ts
function fetchUser() {
  return { id: 1, name: "Atique" };
}

type UserType = ReturnType<typeof fetchUser>;

const user: UserType = { id: 1, name: "Atique" }; // ✅ Allowed
// const invalidUser: UserType = { id: 2 }; // ❌ Error: missing property
```

---

### Another Example (Combine with Readonly):

```ts
function getSettings() {
  return { theme: "dark", fontSize: 16 };
}

type Settings = ReturnType<typeof getSettings>;
type ReadonlySettings = Readonly<Settings>;

const cfg: ReadonlySettings = { theme: "dark", fontSize: 16 };
// ❌ Error: Cannot modify readonly property
// cfg.fontSize = 18;
```

---

## Key Takeaways

- **Extracts the return type** of a function
- **Uses `infer R`** in a conditional type internally
- **Avoids manual type duplication** and keeps code consistent
- Useful for **assigning function results, passing values, and maintaining type safety**
