# Utility: `Exclude<T, U>`

`Exclude<T, U>` is a TypeScript utility type that removes from T all types that are assignable to U.
Essentially, it filters out specific types from a union.
The resulting type contains only the types not assignable to U.

> “Exclude any type from T that is assignable to U.”

---

## Why use Exclude?

- To filter unwanted types from unions

## Examples

```ts
type AllRoles = "admin" | "editor" | "viewer" | "guest";

// Remove guest
type AllowedRoles = Exclude<AllRoles, "guest">;

const role: AllowedRoles = "admin"; // ✅ Allowed
// const invalidRole: AllowedRoles = "guest"; // ❌ Error
```

```ts
//Function Example:

function assignRole(role: Exclude<AllRoles, "guest">) {
  console.log(`Assigned role: ${role}`);
}

assignRole("editor"); // ✅ Allowed
// assignRole("guest"); // ❌ Error
```

### Combining with Partial:

```ts
type PartialAllowedRoles = Partial<Exclude<AllRoles, "guest">>;

const roleOption: PartialAllowedRoles = "viewer"; // ✅ Optional
```

### Another Example:

```ts
interface User {
  id: number;
  role: AllRoles;
  name: string;
}

type SafeUserRole = Readonly<Pick<User, "role">> & {
  allowedRole: Exclude<AllRoles, "guest">;
};

const user: SafeUserRole = {
  role: "editor", // original property
  allowedRole: "viewer", // only allowed roles
};

// ❌ Error: "guest" is not assignable
// user.allowedRole = "guest";
```

---

## Key Takeaways

- Removes types from a union
- Filter unwanted types, enforce type safety
- Restrict literal unions, define safe sets of values
- Can be combined with Partial, Pick, Readonly, Omit for complex type control

## Comparison: Omit vs Exclude

### Exclude

```ts
type Roles = "admin" | "editor" | "user";

// Remove "admin" from union
type NonAdminRoles = Exclude<Roles, "admin">;
// NonAdminRoles = "editor" | "user"
```

### Omit

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

// Remove "email" property
type PublicUser = Omit<User, "email">;

const user: PublicUser = {
  id: 1,
  name: "Atique",
  // email: "example@mail.com" // ❌ Error: Property 'email' does not exist
};
```

| Feature  | Omit<T, K>                             | Exclude<T, U>                |
| -------- | -------------------------------------- | ---------------------------- |
| Works on | Object types                           | Union types                  |
| Removes  | Properties (keys) of an object         | Members (types) from a union |
| Use case | Simplifying objects by removing fields | Filtering union types        |
