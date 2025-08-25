# Utility Type: `Pick<T, K>`

`Pick<T, K>` is a TypeScript utility type that creates a **new type** by selecting **only the specified properties `K`** from type `T`.  
It allows you to create **smaller, focused types** from a larger object. Only the keys listed in `K` are included.

---

## Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

type UserProfile = Pick<User, "id" | "name">;
// Only 'id' and 'name' are included
```

> “Take only the properties I want from a type.”

---

## Why Use Pick<T, K>?

- Create a **lightweight type** from a large type.
- Avoid accidental inclusion of unnecessary or sensitive fields.
- Use when you need a **subset of an object type**, e.g., sending limited fields to an API.

---

## Examples

```ts
type UserProfile = Pick<User, "id" | "name">;

const profile: UserProfile = {
  id: 1,
  name: "Atique",
};
// ❌ 'email' and 'isAdmin' are not allowed
```

---

### Function Example

```ts
function showProfile(user: Pick<User, "name" | "email">) {
  console.log(`Name: ${user.name}, Email: ${user.email}`);
}

showProfile({
  name: "Atique",
  email: "atique@example.com",
});
```

---

## Combining Types Example

```ts
interface Admin {
  email: string;
  isAdmin: boolean;
}

type Combined = User & Admin;
type AdminProfile = Pick<Combined, "id" | "name" | "isAdmin">;

const admin: AdminProfile = {
  id: 1,
  name: "Atique",
  isAdmin: true,
};
```

---

### With Partial

```ts
type PartialProfile = Partial<Pick<User, "id" | "name">>;

const user1: PartialProfile = {
  name: "Atique", // ✅ optional because of Partial
};
```

---
