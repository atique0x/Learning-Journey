type AllRoles = "admin" | "editor" | "viewer" | "guest";

// Using Extract<T, U> utility type
// Keep only "admin" and "editor"
type AdminEditorRoles = Extract<AllRoles, "admin" | "editor">;

// ✅ Only allowed roles remain
const role1: AdminEditorRoles = "admin";
const role2: AdminEditorRoles = "editor";

// ❌ Error: "viewer" and "guest" are not included
// const role3: AdminEditorRoles = "viewer";

// Using in functions
function assignAdminEditorRole(role: Extract<AllRoles, "admin" | "editor">) {
  console.log(`Assigned role: ${role}`);
}

assignAdminEditorRole("admin"); // ✅ Allowed
// assignAdminEditorRole("guest"); // ❌ Error

// Combining with other utility types
// Example: Making extracted role optional using Partial
type PartialAdminEditorRoles = Partial<Extract<AllRoles, "admin" | "editor">>;

const partialRole: PartialAdminEditorRoles = "editor"; // ✅ Allowed
