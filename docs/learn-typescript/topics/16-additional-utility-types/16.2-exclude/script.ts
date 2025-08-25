type AllRoles = "admin" | "editor" | "viewer" | "guest";

// Using Exclude<T, U> utility type
// Create a new type by removing "guest"
type AllowedRoles = Exclude<AllRoles, "guest">;

// ✅ Only allowed roles remain
const role1: AllowedRoles = "admin";
const role2: AllowedRoles = "editor";

// ❌ Error: "guest" is excluded
// const role3: AllowedRoles = "guest";

// Using in functions
function assignRole(role: Exclude<AllRoles, "guest">) {
  console.log(`Assigned role: ${role}`);
}

assignRole("admin"); // ✅ Allowed
// assignRole("guest"); // ❌ Error

// Combining with other utility types
// Example: Making excluded role optional using Partial
type PartialAllowedRoles = Partial<Exclude<AllRoles, "guest">>;

const partialRole: PartialAllowedRoles = "viewer"; // ✅ Allowed
