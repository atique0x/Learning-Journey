// ❌ Error: missing properties not allowed
// const user1: RequiredUser = {
//   id: 1
// };
// ✅ Correct: all properties must be provided
var user2 = {
    id: 1,
    name: "Atique",
    email: "atique@example.com",
};
// Using in functions
function saveUser(user) {
    console.log("Saving user:", user);
}
saveUser({
    id: 2,
    name: "Shariar",
    email: "shariar@example.com",
});
