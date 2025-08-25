{
  interface User {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
  }

  // Using Pick<T, K> utility type
  // Create a smaller type with only selected properties
  type UserProfile = Pick<User, "id" | "name">;

  // ✅ Only selected properties are allowed
  const profile: UserProfile = {
    id: 1,
    name: "Atique",
  };

  // ❌ Error: 'email' and 'isAdmin' cannot exist in UserProfile
  // const invalidProfile: UserProfile = {
  //   id: 2,
  //   name: "Shariar",
  //   email: "shariar@example.com"
  // };

  // Using in functions
  function showProfile(user: Pick<User, "name" | "email">) {
    console.log(`User: ${user.name}, Email: ${user.email}`);
  }

  showProfile({
    name: "Atique",
    email: "atique@example.com",
  });

  // Combining multiple types
  interface Admin {
    email: string;
    isAdmin: boolean;
  }

  // Combine User and Admin
  type Combined = User & Admin;

  // Pick properties from the combined type
  type AdminProfile = Pick<Combined, "id" | "name" | "isAdmin">;

  const admin: AdminProfile = {
    id: 1,
    name: "Atique",
    isAdmin: true,
  };
}
