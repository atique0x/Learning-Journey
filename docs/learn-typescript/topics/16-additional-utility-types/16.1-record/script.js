var _a;
// ✅ Initialize a record
var permissions = {
    admin: ["read", "write", "delete"],
    editor: ["read", "write"],
    viewer: ["read"],
};
// Accessing values
console.log(permissions.admin); // ["read", "write", "delete"]
// ❌ Error: Invalid key
// permissions.guest = ["read"]; // ❌ Not assignable
// Using in functions
function getPermissions(role) {
    return permissions[role];
}
console.log(getPermissions("editor")); // ["read", "write"]
var partialPerms = {
    admin: ["read"],
    // editor and viewer optional
};
var pages = {
    home: "Home Page",
    about: "About Page",
};
var products = {
    1: { id: 1, name: "Laptop", price: 1200 },
    2: { id: 2, name: "Phone", price: 800 },
};
console.log((_a = products[1]) === null || _a === void 0 ? void 0 : _a.name); // "Laptop"
