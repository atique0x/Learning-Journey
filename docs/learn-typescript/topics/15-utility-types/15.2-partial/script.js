// Normally: must provide all properties
var user = {
    id: 1,
    name: "Atique",
    email: "atique@example.com",
};
// Using Partial: all fields optional
var partialUser = {
    name: "Atique", // ✅ only name provided
    id: 2, // ✅ optional but added
    // password: 1234 ❌ Error: not part of User interface
};
// Using Admin interface (inherits from Partial<User>)
var admin = {
    role: "Admin", // ✅ required
    id: 3, // ✅ optional from User
};
// Using AdminT type (similar to Admin interface above)
var adminT = {
    role: "Admin",
    name: "Shariar", // ✅ optional from User
};
