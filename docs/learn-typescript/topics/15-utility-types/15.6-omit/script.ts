{
  interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
  }

  // Using Omit<T, K> utility type
  // Create a new type by removing 'password' and 'isAdmin'
  type PublicUser = Omit<User, "password" | "isAdmin">;

  // ✅ Only remaining properties are allowed
  const safeUser: PublicUser = {
    id: 1,
    name: "Atique",
    email: "atique@example.com",
  };

  // ❌ Error: 'password' and 'isAdmin' cannot exist in PublicUser
  // const invalidUser: PublicUser = {
  //   id: 2,
  //   name: "Shariar",
  //   email: "shariar@example.com",
  //   password: "1234",
  //   isAdmin: true
  // };

  // Using in functions
  function sendUserData(user: Omit<User, "password">) {
    console.log("Sending user data:", user);
  }

  sendUserData({
    id: 3,
    name: "Atique",
    email: "atique@example.com",
    isAdmin: false,
  });

  // Combining with other utility types
  type PartialSafeUser = Partial<Omit<User, "password">>;

  const partialUser: PartialSafeUser = {
    name: "Shariar", // ✅ optional because of Partial
  };
}
