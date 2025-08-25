interface Users {
  id: number;
  name?: string;
  email?: string;
}

// Using Required<T> utility type
type RequiredUser = Required<Users>;

// ❌ Error: missing properties not allowed
// const user1: RequiredUser = {
//   id: 1
// };

// ✅ Correct: all properties must be provided
const user2: RequiredUser = {
  id: 1,
  name: "Atique",
  email: "atique@example.com",
};

// Using in functions
function saveUser(user: Required<Users>) {
  console.log("Saving user:", user);
}

saveUser({
  id: 2,
  name: "Shariar",
  email: "shariar@example.com",
});
