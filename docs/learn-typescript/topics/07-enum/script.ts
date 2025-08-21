enum Direction {
  Up,
  Down,
  Left,
  Right,
}
// let direction: number = Direction.Up;
let direction: Direction = Direction.Up;
console.log(direction); //Start with 0
console.log(Direction[0]); // "Up"

enum HttpStatus {
  OK = 200, // OK
  Created = 201, // Created
  Accepted = 202, // Accepted
  NoContent = 204, // No Content
  BadRequest = 400, // Bad Request
  Unauthorized = 401, // Unauthorized
}

console.log(HttpStatus.Unauthorized);

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
console.log(Color.Green); // Output: GREEN

enum userRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = 6,
}

console.log(userRole.Guest);

enum Status {
  Pending = "PENDING",
  InProgress = "IN_PROGRESS",
  Completed = "COMPLETED",
  Failed = "FAILED",
}

function getCurrentStatus(status: Status): void {
  console.log(`Current status is: ${status}`);
}
getCurrentStatus(Status.Pending);
//getCurrentStatus("Others"); // This will cause a TypeScript error since "Others" is not a valid Status enum value

enum Menu {
  Home = "HOME",
  About = "ABOUT",
  Contact = "CONTACT",
  Services = "SERVICES",
  Blog = "BLOG",
  FAQ = "FAQ",
  Terms = "TERMS",
  Privacy = "PRIVACY",
  Support = "SUPPORT",
}

function navigateTo(menu: Menu): void {
  console.log(`Navigating to: ${menu}`);
}

navigateTo(Menu.Home); // Output: HOME
navigateTo(Menu.About); // Output: Navigating to: ABOUT
navigateTo(Menu.Contact); // Output: Navigating to: CONTACT
//navigateTo(Menu.Career); //Career is not a valid Menu enum value, this will cause a TypeScript error
//navigateTo("Services"); // This will also cause a TypeScript error since "Services" is not a valid Menu enum value

enum UserRole {
  Admin = "ADMIN",
  Moderator = "MODERATOR",
  User = "USER",
}

function checkAccess(role: UserRole) {
  if (role === UserRole.Admin) {
    console.log("Full access granted");
  } else if (role === UserRole.Moderator) {
    console.log("Limited access granted");
  } else {
    console.log("Basic access granted");
  }
}

checkAccess(UserRole.Moderator); // Limited access granted

enum NewStatus {
  Pending = "PENDING",
  Completed = "COMPLETED",
}

// Later
enum NewStatus {
  Failed = "FAILED",
}

enum Enum {
  A = 1,
  B,
  C = 2,
}

console.log("Value of enum b", Enum.B);
console.log("Value of enum c", Enum.C);
