# Utility: `Record<K, T>`

`Record<K, T>` is a TypeScript utility type that constructs an object type with a set of keys K and value type T.
Essentially, it maps keys to specific types.
All keys from K are required unless combined with Partial.

> “Take a set of keys and assign a specific type to all of them.”

---

## Why use Record?

- To create lookup tables or dictionaries
- Useful for mapping enums, roles, settings, or configurations
- When you have fixed sets of keys with associated values
- When mapping literal unions to types

---

## Examples

```ts
type Roles = "admin" | "editor" | "viewer";
type RolePermissions = Record<Roles, string[]>;

const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};
```

### Partial Record:

```ts
type PartialPermissions = Partial<Record<Roles, string[]>>;

const partialPerms: PartialPermissions = {
  admin: ["read"], // other keys optional
};
```

### Combine Record with Readonly and Partial:

```ts
type ReadonlyPermissions = Readonly<Partial<Record<Roles, string[]>>>;

const readonlyPerms: ReadonlyPermissions = {
  admin: ["read", "write"],
};

// ❌ Error: Cannot modify readonly property
// readonlyPerms.admin = ["delete"];
```
