type NullableUser = string | null | undefined;

// Using NonNullable<T> utility type
// Remove null and undefined from the type
type SafeUser = NonNullable<NullableUser>;

// ✅ Only string allowed
const user1: SafeUser = "Atique";

// ❌ Error: null and undefined are not allowed
// const user2: SafeUser = null;
// const user3: SafeUser = undefined;

// Using in functions
function greet(user: NonNullable<string | null>) {
  console.log(`Hello, ${user}!`);
}

greet("Shariar"); // ✅ Allowed
// greet(null);     // ❌ Error

type Status = "pending" | "complete" | null;

type SafeSatus = NonNullable<Status>;
const status1: SafeSatus = "pending";
//const status2: SafeSatus = null;

interface User {
  id: number;
  name: string | null;
  email?: string | null;
}

type SafeUserName = NonNullable<Pick<User, "name">["name"]>; // string only

const names: SafeUserName = "Atique"; // ✅ Allowed
// const invalidName: SafeUserName = null; // ❌ Error
