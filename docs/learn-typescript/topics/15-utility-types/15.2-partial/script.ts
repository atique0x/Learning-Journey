{
  interface User {
    id: number;
    name: string;
    email: string;
  }

  // Extending Partial: Admin inherits optional User properties
  interface Admin extends Partial<User> {
    role: "Admin";
  }

  // Alternative type-based Admin definition using intersection
  type UserT = {
    id: string;
    name: string;
  };

  type AdminT = Partial<User> & {
    role: "Admin";
  };

  // Normally: must provide all properties
  const user: User = {
    id: 1,
    name: "Atique",
    email: "atique@example.com",
  };

  // Using Partial: all fields optional
  const partialUser: Partial<User> = {
    name: "Atique", // ✅ only name provided
    id: 2, // ✅ optional but added
    // password: 1234 ❌ Error: not part of User interface
  };

  // Using Admin interface (inherits from Partial<User>)
  const admin: Admin = {
    role: "Admin", // ✅ required
    id: 3, // ✅ optional from User
  };

  // Using AdminT type (similar to Admin interface above)
  const adminT: AdminT = {
    role: "Admin",
    name: "Shariar", // ✅ optional from User
  };
}
