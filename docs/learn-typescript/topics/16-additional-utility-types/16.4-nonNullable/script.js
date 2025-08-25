// ✅ Only string allowed
var user1 = "Atique";
// ❌ Error: null and undefined are not allowed
// const user2: SafeUser = null;
// const user3: SafeUser = undefined;
// Using in functions
function greet(user) {
    console.log("Hello, ".concat(user, "!"));
}
greet("Shariar"); // ✅ Allowed
var status1 = "pending";
var names = "Atique"; // ✅ Allowed
// const invalidName: SafeUserName = null; // ❌ Error
