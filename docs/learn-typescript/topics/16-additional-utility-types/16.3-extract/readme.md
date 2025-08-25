# Utility: `Extract<T, U>`

`Extract<T, U>` is a TypeScript utility type that selects from T only those types that are assignable to U.

Essentially, it filters a union type to include only specific members.
The resulting type contains only the types that exist in both T and U.

> “Keep only the types from T that match U.”

---

## Why use Extract?

- To narrow down union types to a subset
- To filter specific roles, permissions, or literals

---

## Examples

```ts
type AllRoles = "admin" | "editor" | "viewer" | "guest";

// Keep only admin and editor
type AdminEditorRoles = Extract<AllRoles, "admin" | "editor">;

const role: AdminEditorRoles = "admin"; // ✅ Allowed
// const invalidRole: AdminEditorRoles = "guest"; // ❌ Error
```

### Function Example:

```ts
function assignAdminEditorRole(role: Extract<AllRoles, "admin" | "editor">) {
  console.log(`Assigned role: ${role}`);
}

assignAdminEditorRole("editor"); // ✅ Allowed
// assignAdminEditorRole("viewer"); // ❌ Error
```

### Another Example:

```ts
interface User {
  id: number;
  role: AllRoles;
  name: string;
}

type SafeUserRole = Readonly<Pick<User, "role">> & {
  allowedRole: Extract<AllRoles, "admin" | "editor">;
};

const user: SafeUserRole = {
  role: "admin", // original property
  allowedRole: "editor", // only extracted roles
};

// ❌ Error: "viewer" or "guest" are not assignable
// user.allowedRole = "guest";
```

---

## Key Takeaways

- Keeps only types from a union that match another type
- Filter a union to a safe subset, enforce type safety

---

## Extract vs Pick

```ts
//Extract
type Roles = "admin" | "editor" | "user";
type AdminOrEditor = Extract<Roles, "admin" | "editor">;
// Result: 'admin' | 'editor'
```

```ts
//Pick
interface User {
  id: number;
  name: string;
  email: string;
}

type UserPreview = Pick<User, "id" | "name">;
// Result: { id: number; name: string }
```

| Utility   | Works On     | Keeps / Removes                                    |
| --------- | ------------ | -------------------------------------------------- |
| `Pick`    | Object types | Keeps only specified **properties** from an object |
| `Extract` | Union types  | Keeps only specified **members** from a union      |
