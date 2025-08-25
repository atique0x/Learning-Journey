// Define possible roles as keys
type Roles = "admin" | "editor" | "viewer";

// Using Record<K, T> utility type
// Map each role to an array of permissions
type RolePermissions = Record<Roles, string[]>;

// ✅ Initialize a record
const permissions: RolePermissions = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
};

// Accessing values
console.log(permissions.admin); // ["read", "write", "delete"]

// ❌ Error: Invalid key
// permissions.guest = ["read"]; // ❌ Not assignable

// Using in functions
function getPermissions(role: Roles): string[] {
  return permissions[role];
}

console.log(getPermissions("editor")); // ["read", "write"]

// Combining with other utility types
type PartialPermissions = Partial<Record<Roles, string[]>>;

const partialPerms: PartialPermissions = {
  admin: ["read"],
  // editor and viewer optional
};

type PageInfo = Record<string, string>;
const pages: PageInfo = {
  home: "Home Page",
  about: "About Page",
};

type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Record<number, Product> = {
  1: { id: 1, name: "Laptop", price: 1200 },
  2: { id: 2, name: "Phone", price: 800 },
};

console.log(products[1]?.name); // "Laptop"
