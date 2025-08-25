# Utility Type: `Partial<T>`

`Partial<T>` is a built-in TypeScript utility type that converts **all properties** of a given type `T` into **optional** properties.

```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

---

### Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPartial = Partial<User>;
```

This is equivalent to:

```ts
type UserPartial = {
  id?: number;
  name?: string;
  email?: string;
};
```

---

> “Take every key in `T`, make it optional, keep its original type.”

---

## Why Use Partial<T>

- Because sometimes, you **don’t want to require all properties**.
- It's especially useful when **updating objects** — you only change a few fields.

---

## Example 1 — Without Partial

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(id: number, updates: User) {
  // ❌ Must provide ALL properties, even if only one changes
}

updateUser(1, {
  id: 1,
  name: "Atique",
  email: "atique@example.com",
});
```

---

## With Partial ✅

```ts
function updateUser(id: number, updates: Partial<User>) {
  // ✅ Only provide what you want to update
}

updateUser(1, { name: "Atique Shariar" });
```

---

## Advanced: Deep Partial

By default, `Partial<T>` works **only at the first level**.  
For **nested objects**, you can create a custom **DeepPartial**:

```ts
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface User {
  id: number;
  profile: {
    name: string;
    email: string;
  };
}

const update: DeepPartial<User> = {
  profile: {
    name: "Atique", // ✅ Works fine, nested properties are optional
  },
};
```

---

## Quick Visual

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPartial = Partial<User>;

// Equivalent to:
type UserPartial = {
  id?: number;
  name?: string;
  email?: string;
};
```
