# Generics Types

Generics allow you to create reusable, type-safe, and flexible code without sacrificing the ability to infer types.

---

## Why Use Generics?

Without generics, you'd either:

- Lose type safety by using `any`
- Duplicate code for each type

**Example Without Generics**

```ts
function identityNumber(value: number): number {
  return value;
}

function identityString(value: string): string {
  return value;
}
```

> ❌ Problem → We write duplicate functions.
> **Using Generics**

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(42)); // Explicit generic
console.log(identity("Atique")); // Inferred generic
```

> ✅ Solution → One function, any type, full type safety.

---

## Generic Type Variables

Generics work by creating a type placeholder that gets replaced at compile-time.

```ts
function loggingIdentity<T>(arg: T[]): number {
  return arg.length;
}

console.log(loggingIdentity<number>([1, 2, 3, 4]));
```

- `T` is a generic type variable.
- `T[]` ensures `arg` is an array of `T`.
- The return type can depend on `T` or be something else.

---

## Generics with Multiple Type Parameters

You can pass more than one generic.

```ts
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const user = merge({ name: "Atique" }, { age: 24 });
console.log(user.name, user.age);
```

- `T & U` → Intersection type → merged type.
- Fully type-safe and reusable.

---

## Constraints in Generics (`extends`)

Restrict what kinds of types a generic can accept.

**Object Constraint**

```ts
function printName<T extends { name: string }>(obj: T): void {
  console.log(obj.name);
}

printName({ name: "Atique", age: 24 }); // ✅ Works
printName({ age: 24 }); // ❌ Error
```

---

## Generics in Interfaces

Generics can make interfaces reusable.

```ts
interface ApiResponse<T> {
  apiId: number;
  data: T;
  status: "pending" | "running" | "complete";
  message?: string | null;
}

interface User {
  userId: number;
  name: string;
  email?: string;
}

const response: ApiResponse<User> = {
  apiId: 1,
  data: { userId: 1, name: "Atique" },
  status: "complete",
  message: "Successful",
};
```

> ✅ Real-life → Same API structure, but different data types.

---

## Generics in Classes

Generics make classes reusable for any type.
**Example**

```ts
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  get size(): number {
    return this.items.length;
  }
}

const numberStack = new Stack<number>();
numberStack.push(10);
numberStack.push(20);
console.log(numberStack.pop()); // 20
```
