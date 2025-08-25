# Type Narrowing & Type Guards

## **Type Narrowing**

Type narrowing is the process where **TypeScript automatically reduces the possible types of a variable** inside a code block based on runtime checks like `typeof`, `instanceof`, `in`, equality checks, or `switch`.  
TypeScript itself analyzes your conditions and narrows the type.

---

### **Using `typeof` for Primitive Types**

`typeof` is used to check primitive types like `string`, `number`, `boolean`, `symbol`, etc.  
TypeScript automatically understands the type after the `typeof` check.

```ts
function formatValue(value: string | number) {
  if (typeof value === "string") {
    // ⬇️ TS automatically narrows here
    return value.toUpperCase(); // ✅ value: string
  } else {
    return value.toFixed(2); // ✅ value: number
  }
}

console.log(formatValue("atique")); // "ATIQUE"
console.log(formatValue(123.456)); // "123.46"
```

---

### **Using `instanceof` for Classes**

`instanceof` is used to check if an object is an instance of a class.  
Only works with **classes or constructors**, not interfaces or type aliases.

```ts
class Dog {
  bark() {
    console.log("Woof!");
  }
}
class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // ✅ animal: Dog
  } else {
    animal.meow(); // ✅ animal: Cat
  }
}

makeSound(new Dog()); // Woof!
makeSound(new Cat()); // Meow!
```

---

### **Using `in` Operator**

The `in` operator checks if an object has a certain property.  
Useful for discriminating types with interfaces. Works with objects and interfaces.

```ts
interface Admin {
  role: string;
}
interface User {
  name: string;
}

function getRole(account: Admin | User) {
  if ("role" in account) {
    return account.role; // ✅ account: Admin
  } else {
    return account.name; // ✅ account: User
  }
}

console.log(getRole({ role: "admin" })); // "admin"
console.log(getRole({ name: "Atique" })); // "Atique"
```

---

### **Discriminated Unions**

Discriminated unions allow TypeScript to narrow the type automatically based on a **common literal property**.

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

console.log(area({ kind: "circle", radius: 2 })); // 12.566370614359172
```

---

## **Type Guards**

A **type guard** is a **custom function** that explicitly tells TypeScript:

> "If I return true, this value is of a specific type."

Syntax:

```ts
function isFish(pet: Fish | Bird): pet is Fish;
```

The return type `pet is Fish` is the key: it **teaches TypeScript how to narrow the type**.

---

### **Without Type Guard**

```ts
interface Fish {
  swim(): void;
}
interface Bird {
  fly(): void;
}

function move(pet: Fish | Bird) {
  if ("swim" in pet) {
    pet.swim(); // ✅ Works
  } else {
    pet.fly();
  }
}
```

**Limitations**:

- Repeated `"swim" in pet` checks everywhere
- Less reusable

---

### **With Type Guard (Better)**

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return "swim" in pet;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim(); // ✅ TypeScript knows pet: Fish
  } else {
    pet.fly(); // ✅ TypeScript knows pet: Bird
  }
}
```

**Advantages**:

- Reusable anywhere
- Cleaner, more readable
- Explicitly tells TS how to narrow types

---

### Type Guard Example

```ts
interface Guest {
  guestId: number;
}

function isAdmin(account: Admin | User | Guest): account is Admin {
  return "role" in account && account.role === "admin";
}

function getDashboard(account: Admin | User | Guest) {
  if (isAdmin(account)) {
    return "Welcome, Admin!";
  }
  return "Welcome, User!";
}
```

---

### **Summary**

- **Type narrowing** is automatic.  
  TypeScript uses built-in operators like `typeof`, `instanceof`, `in`, `===`, and `switch` to figure out types.
- **Type guards** are custom functions that **explicitly narrow types** and make code reusable, clean, and DRY.
- **Direct checks inline** → Type narrowing
- **Separate `pet is Type` functions** → Type guard
