// ✅ Only allowed roles remain
var role1 = "admin";
var role2 = "editor";
// ❌ Error: "guest" is excluded
// const role3: AllowedRoles = "guest";
// Using in functions
function assignRole(role) {
    console.log("Assigned role: ".concat(role));
}
assignRole("admin"); // ✅ Allowed
var partialRole = "viewer"; // ✅ Allowed
