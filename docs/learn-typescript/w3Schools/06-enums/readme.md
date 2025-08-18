# Enum (Enumeration) in TypeScript

An enum is a way to define a set of named constants. It provides friendly names for values, making code readable, maintainable, and less error-prone.

## Types of Enums

### 1. Numeric Enums (default)

By default, enum members start at 0 and increment by 1. You can also assign custom numeric values.

```ts
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}
console.log(Direction.Up); // Output: 0
```

#### Custom values example:

```ts
enum HttpStatus {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  BadRequest = 400,
  Unauthorized = 401,
}

console.log(HttpStatus.Unauthorized); // Output: 401
```

### 2. String Enums

Members are assigned descriptive string values. Improves readability and logging clarity.

```ts
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}

console.log(Color.Green); // Output: GREEN
```

### 3. Heterogeneous Enums

Can mix numbers and strings in a single enum. Rarely recommended, but possible.

```ts
enum UserRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = 6,
}

console.log(UserRole.Guest); // Output: 6
```

## Rules for Enum Member Values

| Enum Type      | Allowed Values                            | Notes                              |
| -------------- | ----------------------------------------- | ---------------------------------- |
| Numeric        | Numbers (auto-incremented or assigned)    | Default type                       |
| String         | Strings only                              | Must explicitly assign each member |
| Heterogeneous  | Mix of numbers and strings                | Rarely used                        |
| Invalid Values | null, undefined, boolean, arrays, objects | ❌ Not allowed                     |

### Invalid Example

```ts
enum Status {
  Pending = null, // ❌ Invalid
  InProgress = undefined, // ❌ Invalid
  Completed = "COMPLETED", // ✅ Valid
  Failed = true, // ❌ Invalid
  Cancelled = 0, // ✅ Valid
  Others = [1, 2], // ❌ Invalid
}
```

> Only numbers and strings are allowed in enum members. Types like null, undefined, boolean, arrays, or objects are not allowed.

## Menu navigating example

```ts
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

navigateTo(Menu.Home); //✅ Output: HOME
navigateTo(Menu.About); //✅ Output: Navigating to: ABOUT
navigateTo(Menu.Contact); //✅ Output: Navigating to: CONTACT
navigateTo(Menu.Career); //❌ Career is not a valid Menu enum value, this will cause a TypeScript error
navigateTo("Services"); //❌ This will also cause a TypeScript error since "Services" is not a valid Menu enum value
```
