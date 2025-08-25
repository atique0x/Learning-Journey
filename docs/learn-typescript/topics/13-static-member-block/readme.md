# Static Members & Static Blocks in TypeScript 🚀

In **TypeScript**, the `static` keyword is used to define **properties** and **methods** that **belong to the class itself** rather than its **instances**.

- **Static properties** → stored at the **class level**, not inside each object.
- **Static methods** → callable **without creating an object**.
- **Static blocks** → execute **once** when the class is loaded — great for **initialization logic**.

---

## **Static Members (Properties & Methods)**

### **Example**

```ts
class App {
  static appName: string = "My App"; // ✅ static property
  username: string; // instance property

  constructor(username: string) {
    this.username = username;
  }

  static greet() {
    console.log(`Welcome to ${App.appName} from static method`);
  }

  greetings() {
    console.log(
      `Welcome to ${App.appName} from instance method. Username: ${this.username}`
    );
  }
}

const app1 = new App("Atique");
const app2 = new App("Shariar");

app1.greetings(); // Welcome to My App ... Username: Atique
app2.greetings(); // Welcome to My App ... Username: Shariar

console.log(App.appName); // "My App"
App.greet(); // "Welcome to My App"
```

---

## Static vs Instance Members

| **Feature**          | **Instance Member**                | **Static Member**             |
| -------------------- | ---------------------------------- | ----------------------------- |
| **Where stored**     | Inside each object                 | On the class itself           |
| **Accessed via**     | `object.property`                  | `ClassName.property`          |
| **Memory usage**     | Duplicated per object              | Shared across all objects     |
| **When initialized** | Every time a new object is created | Once when the class is loaded |

---

## **Static Blocks**

A **static block** is a special block inside a class that:

- Executes **only once** when the class is loaded.
- Useful for **complex initialization** of static properties.
- Can read **environment variables**, **API configs**, or perform calculations.

### **Example**

```ts
class App {
  static appName: string;
  static version: string;

  // Static block executes only once when the class loads
  static {
    this.appName = "My App";
    this.version = process.env.APP_VERSION || "1.0.0";
    console.log(`Static block initialized: ${this.appName} v${this.version}`);
  }
}

console.log(App.appName); // "My App"
console.log(App.version); // "1.0.0"
```

---

## **Utility Classes Using Static Methods**

Static methods are commonly used in **utility** classes:

```ts
export class DateUtils {
    static format(date: Date): string {
    return date.toLocaleDateString("en-US");
    }

    static differenceInDays(start: Date, end: Date): number {
        const diff = Math.abs(end.getTime() - start.getTime());
    return Math.floor(diff / (1000 _ 60 _ 60 \* 24));
    }
}

// ✅ Use without creating objects
console.log(DateUtils.format(new Date())); // "Aug 23, 2025"
console.log(DateUtils.differenceInDays(new Date(), new Date("2025-09-01"))); // 9
```

---

## **Auto-Increment Example**

Static properties are great for **sharing state** across all objects.

### ✅ **Correct Approach**

```ts
class User {
  private static userCount = 0; // shared counter ✅
  id: number;
  name: string;

  constructor(name: string) {
    this.name = name;
    this.id = ++User.userCount; // increment shared counter
  }

  static getTotalUsers(): number {
    return User.userCount;
  }
}

const u1 = new User("Atique");
const u2 = new User("Shariar");
const u3 = new User("Rahim");

console.log(u1.id); // 1
console.log(u2.id); // 2
console.log(u3.id); // 3

console.log(User.getTotalUsers()); // 3 ✅
```

---

### Without static

```ts
class User {
  userCount: number = 0; // instance property ❌
  id: number;
  name: string;

  constructor(name: string) {
    this.name = name;
    this.id = ++this.userCount; // ❌ each instance has its own counter
  }
}

const u1 = new User("Atique");
const u2 = new User("Shariar");

console.log(u1.id); // 1 ✅ (for this instance)
console.log(u2.id); // 1 ❌ (should be 2)
console.log(u1.userCount); // 1 ❌ (should be 2)
console.log(u2.userCount); // 1 ❌ (should be 2)
```

**Why it fails:**

- Each object has its **own** `userCount`, so the counter is **not shared**.

---

## **Why Not Use a Global Variable Instead?**

```ts
let totalCustomers = 0;

class BankAccount {
  customerName: string;
  constructor(customerName: string) {
    this.customerName = customerName;
    totalCustomers++;
  }
}

console.log(totalCustomers); // works ✅
```

**Although this works, it's not recommended ❌ because:**

- The counter logically **belongs to the `BankAccount` class**.
- Keeping it outside **breaks OOP principles**.

✅ Using **static** keeps the counter **encapsulated** inside the class.

---

## **Why Use Static Methods**

Static methods are best when:

- They **don’t depend** on **instance-specific** data.
- They **operate on class-level data**.

### **Example**

```ts
class MathUtils {
    static PI = 3.14159;

    static circleArea(radius: number) {
    return MathUtils.PI _ radius _ radius;
    }
}

console.log(MathUtils.circleArea(10)); // ✅ 314.159
```

_No need to create an object to use the method._

---

## **Memory Visualization**

### **Without static**

u1 → { name: "Atique", userCount: 1 }  
u2 → { name: "Shariar", userCount: 1 }  
u3 → { name: "Rahim", userCount: 1 }

🔴 **Problem:** Every object **keeps its own counter**.

---

### **With static**

User.userCount = 3 ✅

u1 → { name: "Atique" }  
u2 → { name: "Shariar" }  
u3 → { name: "Rahim" }

✅ **Advantage:** Only **one shared counter** exists in memory.

---

## **Summary**

- **Static properties** → belong to the **class**, not objects.
- **Static methods** → can be called **without creating an instance**.
- **Static blocks** → run **once** for complex initialization.

✅ Use `static` when:

- You need **shared data**.
- You need **utility/helper functions**.
- You want to **encapsulate class-level logic**.

---
