# Utility: `NonNullable <T>`

**`NonNullable<T>`** is a TypeScript utility type that **removes null and undefined from a type**.  
Ensures that a value **cannot be null or undefined**.  
Useful when you want **guaranteed safe values**.

> **Remove null and undefined from a type.**

---

## Why use NonNullable?

- **Prevent runtime errors** caused by null or undefined values
- **Enforce strict non-nullable function arguments**

---

## Examples

```ts
type NullableUser = string | null | undefined;
type SafeUser = NonNullable<NullableUser>;

const user: SafeUser = "Atique"; // ✅ Allowed
// const invalidUser: SafeUser = null; // ❌ Error
```

### Combine NonNullable with Pick:

```ts
interface User {
  id: number;
  name: string | null;
  email?: string | null;
}

type SafeUserName = NonNullable<Pick<User, "name">["name"]>; // string only

const name: SafeUserName = "Atique"; // ✅ Allowed
// const invalidName: SafeUserName = null; // ❌ Error
```

---

## Key Takeaways

- Removes null and undefined from a type
- Ensures **safe, non-nullable assignments**
- **Strict null checks**, safe state variables, API responses
