function getUser() {
    return { id: 1, name: "Atique" };
}
// Equivalent to:
// type User = { id: number; name: string }
var user = {
    id: 1,
    name: "Atique",
};
function fetchUser() {
    return { id: 1, name: "Atique", email: "atique@example.com" };
}
// ✅ Use extracted type
var user1 = {
    id: 1,
    name: "Atique",
    email: "atique@example.com",
};
// ❌ Error: Cannot assign incompatible type
// const invalidUser: UserType = {
//   id: 2,
//   name: "Shariar",
// };
