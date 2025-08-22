# TypeScript Destructuring

Destructuring allows you to **extract values** from arrays or **properties** from objects and assign them to variables easily.

---

## Array Destructuring

Array destructuring lets you **unpack elements** from arrays into separate variables.

### **Basic Example**

```ts
const numbers: number[] = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first); // 10
console.log(second); // 20
console.log(third); // 30
```

### **Skip Elements**

```ts
const numbers = [10, 20, 30, 40];
const [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30
```

✅ Skipped the second element using an empty comma.

---

### **Default Values**

```ts
const numbers = [10, 20];

const [a, b, c = 99] = numbers;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 99 (default)
```

---

### **Rest Operator**

Use `...` to collect remaining items:

```ts
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]
```

---

### **Nested Array Destructuring**

```ts
const nested = [1, [2, 3], 4];

const [a, [b, c], d] = nested;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
```

---

## Object Destructuring

Object destructuring lets you **extract properties** into variables.

```ts
const user = {
  name: "Atique",
  age: 25,
  country: "Bangladesh",
};

const { name, age, country } = user;

console.log(name); // Atique
console.log(age); // 25
console.log(country); // Bangladesh
```

---

### **Renaming Variables**

```ts
const user = {
  name: "Atique",
  age: 25,
};

const { name: username, age: userAge } = user;

console.log(username); // Atique
console.log(userAge); // 25
```

✅ Rename variables while destructuring.

---

### **Default Values**

```ts
const user = { name: "Atique" };

const { name, age = 18 } = user;

console.log(name); // Atique
console.log(age); // 18 (default)
```

---

### **Rest Operator**

```ts
const user = {
  name: "Atique",
  age: 25,
  email: "atique@mail.com",
  country: "Bangladesh",
};

const { name, age, ...rest } = user;

console.log(name); // Atique
console.log(age); // 25
console.log(rest); // { email: "atique@mail.com", country: "Bangladesh" }
```

---

### **Nested Object Destructuring**

```ts
const person = {
  name: "Atique",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

const {
  address: { city, country },
} = person;

console.log(city); // Dhaka
console.log(country); // Bangladesh
```

---

## **Summary**

| Feature                  | Arrays           | Objects           |
| ------------------------ | ---------------- | ----------------- |
| **Basic Use**            | Extract by index | Extract by key    |
| **Skipping**             | ✅ Supported     | ❌ Not applicable |
| **Default Values**       | ✅ Supported     | ✅ Supported      |
| **Renaming**             | ❌ Not needed    | ✅ Supported      |
| **Rest Operator**        | ✅ Supported     | ✅ Supported      |
| **Nested Destructuring** | ✅ Supported     | ✅ Supported      |
