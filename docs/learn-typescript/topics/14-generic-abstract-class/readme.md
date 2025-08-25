# Abstract & Generic Classes

## Abstract Classes

An **abstract class** is a blueprint for other classes.  
It can define **common properties and methods** but **cannot be instantiated directly**.  
Useful for **enforcing a structure** across multiple subclasses.

### Key Points

- Use the `abstract` keyword before the class.
- Can have:
  - **Abstract methods** (declared but not implemented)
  - **Concrete methods** (with implementation, optionally overridden)

### Declaration Example

```ts
abstract class Payment {
  public amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  // Abstract method → must be implemented by subclasses
  abstract processPayment(): void;

  // Concrete method → optional override
  validate(): void {
    console.log(`Validating payment of $${this.amount}`);
  }
}
```

### Abstract Methods

- Declared but **not implemented** in the abstract class.
- **Subclasses must implement** all abstract methods.

```ts
abstract processPayment(): void;
```

### Concrete Methods

- Can have **implementation**.
- Subclasses **may override** them if needed.

```ts
validate(): void {
console.log(`Validating payment of $${this.amount}`);
}
```

### Instantiation

- **Cannot create an instance** of an abstract class directly:

```ts
// ❌ Error
// const payment = new Payment(500);
```

### Subclasses

- Must implement **all abstract methods**.
- Can optionally override **concrete methods**.

```ts
class CreditCardPayment extends Payment {
  constructor(amount: number) {
    super(amount); // Calls parent constructor
  }

  processPayment(): void {
    console.log(`Processing credit card payment of $${this.amount + 1000}`);
  }

  validate(): void {
    // Optional override
    console.log(`Validating credit card payment of $${this.amount + 1000}`);
  }
}

class PayPalPayment extends Payment {
  processPayment(): void {
    console.log(`Processing PayPal payment of $${this.amount}`);
  }
}
```

### Example Usage

```ts
const credit = new CreditCardPayment(500);
credit.validate(); // Validating credit card payment of $1500
credit.processPayment(); // Processing credit card payment of $1500

const paypal = new PayPalPayment(500);
paypal.validate(); // Validating payment of $500
paypal.processPayment(); // Processing PayPal payment of $500
```

---

## Generic Classes

A **generic class** allows defining a class with **type parameters**.
Makes the class **reusable for multiple data types**.

### Syntax

```ts
class ClassName<T> { ... }
```

- `T` is a **placeholder type**.

### Example:

```ts
class ApiResponse<T> {
constructor(
public status: number,
public message: string,
public data: T
) {}
}

// Usage with different types
const userResponse = new ApiResponse(200, "Success", { id: 1, name: "Atique" });
const productResponse = new ApiResponse(200, "Success", { id: 5, title: "Laptop", price: 45000 });

console.log(userResponse.data.name); // Atique
console.log(productResponse.data.title); // Laptop

---
```

## Combining Abstract + Generic

- Use **abstract classes** for **common structure**.
- Use **generic classes** for **reusable data handling**.

```ts
abstract class BaseEntity {
  constructor(public id: number) {}
}

class Repository<T extends BaseEntity> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  display(): void {
    console.log(this.items);
  }
}

class User extends BaseEntity {
  constructor(id: number, public name: string) {
    super(id);
  }
}

const userRepo = new Repository<User>();
userRepo.add(new User(1, "Atique"));
userRepo.add(new User(2, "Sara"));
userRepo.display();
```

✅ Repository can handle **any entity extending BaseEntity**.

✅ Ensures **type safety** and **code reusability**.
