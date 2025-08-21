# TypeScript Interface

An interface in TypeScript is a blueprint for objects or classes. It defines the structure (shape) that objects must follow.  
Exists only at compile-time for type checking.

Does not exist in runtime JavaScript.

## Basic Interface

```ts
interface UserInfo {
  userId: number | string; // can be number or string
  userName: string;
  userEmail: string;
  action: () => string; // function signature
}

const user1: UserInfo = {
  userId: "One",
  userName: "Atique",
  userEmail: "satique06@gmail.com",
  action: () => "Action executed",
};
```

## Optional Properties

Properties can be marked optional with `?`.

```ts
interface UserInfo {
  userId: number | string;
  userPhone?: string; // optional
  userEmail: string;
}
```

## Readonly Properties

Properties marked `readonly` cannot be changed after initialization.

```ts
interface UserInfo {
  readonly userId: number | string; // cannot change
  userName: string;
}

const user: UserInfo = { userId: 1, userName: "Atique" };
user.userName = "Shariar"; // ✅ Allowed
// user.userId = 2;          // ❌ Error
```

## Merging Interfaces

TypeScript merges multiple declarations of the same interface.  
Useful in large projects or library augmentations.

```ts
interface UserInfo {
  userId: number | string;
  userName: string;
}

interface UserInfo {
  userEmail: string;
  userAddress: string;
}

const user: UserInfo = {
  userId: 1,
  userName: "Atique",
  userEmail: "satique06@gmail.com",
  userAddress: "Mirpur, Dhaka-1216",
};
```

## Extending Interfaces

One interface can inherit from another using `extends`.

```ts
interface UserInfo {
  userId: number | string;
  userName: string;
}

interface Admin extends UserInfo {
  role: "admin";
}

const admin1: Admin = {
  userId: 2,
  userName: "Atique",
  role: "admin",
};
```

## Key Points

- Interfaces are compile-time constructs only.
- Supports optional properties, readonly properties, merging, and extension.

<br>
<br>

# Interface vs Type Alias

## Declaration Merging

**Interface:** Supports merging multiple declarations. [Can be reopened and extended multiple times.]

**Type Alias:** Cannot merge; redeclaration causes an error.

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Atique",
  age: 24,
};
//TypeScript automatically merges both interfaces into a single type.
```

```ts
type UserType = { name: string };
type UserType = { age: number }; // ❌ Error: Duplicate identifier 'UserType'
```

> **Takeaway:** Interface merging allows gradual extension of types without breaking existing code.

---

## Implementing in Classes

**Interface:** Can be implemented by classes, enforcing contracts for properties and methods.

**Type Alias:** Cannot be implemented by classes.

```ts
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  makeSound() {
    console.log("Woof!");
  }
}
```

```ts
type AnimalType = {
  name: string;
  makeSound(): void;
};

class Cat implements AnimalType {} // ❌ Error: Cannot implement a type
```

> **Takeaway:** Use interfaces when designing OOP patterns or class contracts.

---

## Unions, Tuples, and Primitives

**Interface:** Cannot define union types, tuples, or primitive types.

**Type Alias:** Fully supports unions, tuples, and primitive types.

```ts
interface Result = "success" | "error"; // ❌ Error
```

```ts
type Result = "success" | "error"; // ✅ allowed
type Point = [number, number]; // ✅ tuple
type ID = number | string; // ✅ union
```

> **Takeaway:** Type aliases are flexible and can represent any TypeScript type, not just objects.

---

## Extending / Composition

**Interface:** Uses `extends` to extend one or multiple interfaces.
**Type Alias:** Uses intersection `&` for combining types.

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}
```

```ts
type Person = { name: string };
type Employee = Person & { employeeId: number };
```

> **Observation:** Both allow composition, but interfaces use OOP-style `extends`, types use functional-style intersections.

---

## Summary

| Feature                   | Interface                             | Type Alias                |
| ------------------------- | ------------------------------------- | ------------------------- |
| Declaration merging       | ✅                                    | ❌                        |
| Implement in class        | ✅                                    | ❌                        |
| Union / Tuple / Primitive | ❌                                    | ✅                        |
| Extending / Composition   | `extends`                             | Intersection `&`          |
| Best use case             | Class contracts, library augmentation | Flexible type composition |
