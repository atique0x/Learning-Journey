# TypeScript Classes, Inheritance & Member Visibility

TypeScript allows you to define classes with properties and methods, and control access using visibility modifiers: **public**, **private**, and **protected**. Classes can also inherit from other classes.

---

## 1. Class Basics

A class is a blueprint for creating objects with properties and methods.

```ts
class Person {
  name: string; // property
  age: number;

  constructor(name: string, age: number) {
    this.name = name; // initialize properties
    this.age = age;
  }

  display(): string {
    return `Hello, my name is ${this.name}`;
  }
}

const p1 = new Person("Atique", 26);
console.log(p1.display()); // Hello, my name is Atique
```

- `constructor()` is used to initialize objects.
- Methods define behaviors for the object.
- By default, members are **public**.

---

## Member Visibility

### Public (default)

- Accessible anywhere: inside class, subclass, and outside.

```ts
class User {
  public username: string;

  constructor(username: string) {
    this.username = username;
  }

  public greet() {
    console.log(`Hi, I'm ${this.username}`);
  }
}

const u = new User("Atique");
console.log(u.username); // ✅ Accessible
u.greet(); // ✅ Accessible
```

### Private

- Accessible only within the class where it is defined.

```ts
class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number) {
    this.balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  getBalance() {
    return this.balance;
  }
}

const account = new BankAccount(1000);
account.deposit(500); // ✅ Works
console.log(account.getBalance()); // ✅ Works
// console.log(account.balance);   // ❌ Error: private
```

### Protected

- Accessible within the class and its subclasses, but not outside.

```ts
class Employee {
  protected salary: number;

  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  displaySalary(): void {
    console.log(`Manager's salary: ${this.salary}`);
  }
}

const m = new Manager(80000);
m.displaySalary(); // ✅ Works
// console.log(m.salary); // ❌ Error: protected
```

---

## Inheritance

- Inheritance allows a class to extend another class, reusing properties and methods.

```ts
class Employee {
  protected salary: number;
  constructor(salary: number) {
    this.salary = salary;
  }
}

class Manager extends Employee {
  displaySalary(): void {
    console.log(`Manager's salary: ${this.salary}`);
  }
}

const manager = new Manager(90000);
manager.displaySalary(); // ✅ 90000
```

- `extends` keyword is used.
- Subclass can access **public** and **protected** members of the parent.
- **Private** members are **not inherited**.

---

## Member Visibility

| Modifier  | Access in Class | Access in Subclass | Access Outside |
| --------- | --------------- | ------------------ | -------------- |
| public    | ✅ Yes          | ✅ Yes             | ✅ Yes         |
| private   | ✅ Yes          | ❌ No              | ❌ No          |
| protected | ✅ Yes          | ✅ Yes             | ❌ No          |
