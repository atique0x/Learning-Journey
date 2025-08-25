// ✅ Only allowed roles remain
var role1 = "admin";
var role2 = "editor";
// ❌ Error: "viewer" and "guest" are not included
// const role3: AdminEditorRoles = "viewer";
// Using in functions
function assignAdminEditorRole(role) {
    console.log("Assigned role: ".concat(role));
}
assignAdminEditorRole("admin"); // ✅ Allowed
var partialRole = "editor"; // ✅ Allowed
