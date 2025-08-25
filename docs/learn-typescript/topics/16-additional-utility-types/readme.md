## `Awaited<T>`: Extracts the resolved type from a Promise

```ts
type PromiseType = Promise<string>;
type Result = Awaited<PromiseType>; // string
```

---

## `Exclude<T, U>`: Removes types from a union

```ts
type Roles = "admin" | "editor" | "viewer" | "guest";
type AllowedRoles = Exclude<Roles, "guest">; // "admin" | "editor" | "viewer"
```

---

## `Extract<T, U>`: Keeps only types assignable to U

```ts
type Roles = "admin" | "editor" | "viewer" | "guest";
type AdminRoles = Extract<Roles, "admin" | "editor">; // "admin" | "editor"
```

---

## `NonNullable<T>`: Removes null & undefined

```ts
type NullableUser = string | null | undefined;
type SafeUser = NonNullable<NullableUser>; // string
```

---

## `ReturnType<T>`: Extracts the return type of a function

```ts
function fetchUser() {
  return { id: 1, name: "Atique" };
}
type UserType = ReturnType<typeof fetchUser>;
const user: UserType = { id: 1, name: "Atique" };
```

---

## `Record<K, T>`: Maps keys to a value type

```ts
type Roles = "admin" | "editor" | "viewer";
type RolePermissions = Record<Roles, string[]>;
const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};
```
