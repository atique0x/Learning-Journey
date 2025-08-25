function getUser() {
  return { id: 1, name: "Atique" };
}

type User = ReturnType<typeof getUser>;

// Equivalent to:
// type User = { id: number; name: string }

const user: User = {
  id: 1,
  name: "Atique",
};

function fetchUser() {
  return { id: 1, name: "Atique", email: "atique@example.com" };
}

// Using ReturnType<T> utility type
// Extracts the return type of the function
type UserType = ReturnType<typeof fetchUser>;

// ✅ Use extracted type
const user1: UserType = {
  id: 1,
  name: "Atique",
  email: "atique@example.com",
};

// ❌ Error: Cannot assign incompatible type
// const invalidUser: UserType = {
//   id: 2,
//   name: "Shariar",
// };
