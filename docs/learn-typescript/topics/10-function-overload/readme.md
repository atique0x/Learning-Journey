# Function Overloading in TypeScript

Function **Overloading** in TypeScript is the ability to define multiple **function signatures** (ways to call a function) for a **single function implementation**.  
Each signature specifies **different parameter types** or **different numbers of parameters**.

- **Helps TypeScript enforce type safety** while allowing flexible usage.
- **Key Point:** You can call the same function in different ways, and TypeScript knows which types are valid.
- Accepts **multiple types of input** — e.g., a function can take a **string**, **number**, or **array of numbers**.

---

## Example

```ts
function double(value: number): number;
function double(value: number[]): number[];
function double(value: number | number[]): number | number[] {
if (Array.isArray(value)) return value.map(v => v _ 2);
return value _ 2;
}

console.log(double(5)); // 10
console.log(double([1, 2, 3])); // [2, 4, 6]
```

**Why Overloading Here?**

- A **single function** handles both **numbers** and **arrays**.
- TypeScript infers the **exact return type** based on the input type.

---

## User Registration Form

Users can register with:

- Just a **username** and **password**.
- Or they can provide a **full name** and/or **email**.

**Live Example:**  
[User Registration Form Demo](https://atique0x.github.io/Learning-Journeylearn-typescript/topics/10-function-overload/index.html)

### TypeScript Code

```ts
interface User {
  username: string;
  password: string;
}

interface UserWithFullName extends User {
  name: string;
}

interface UserWithEmail extends User {
  email: string;
}

interface UserWithEmailFullName extends User {
  email: string;
  name: string;
}

type UserCategory =
  | User
  | UserWithEmail
  | UserWithFullName
  | UserWithEmailFullName;

// Overload Signatures
function submitUser(username: string, password: string): User;
function submitUser(
  username: string,
  password: string,
  fullname: string
): UserWithFullName;
function submitUser(
  username: string,
  password: string,
  email: string
): UserWithEmail;
function submitUser(
  username: string,
  password: string,
  fullname: string,
  email: string
): UserWithEmailFullName;

// Implementation
function submitUser(
  username: string,
  password: string,
  name?: string,
  email?: string
): UserCategory {
  let user: UserCategory;

  if (name && email) {
    user = { username, password, name, email };
    return user;
  } else if (name) {
    user = { username, password, name };
    return user;
  } else if (email) {
    user = { username, password, email };
    return user;
  } else {
    user = { username, password };
    return user;
  }
}
//Form Handling
const form = document.getElementById("userForm") as HTMLFormElement;
const output = document.getElementById("output") as HTMLDivElement;

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  const username = (
    form.elements.namedItem("username") as HTMLInputElement
  ).value.trim();
  const password = (
    form.elements.namedItem("password") as HTMLInputElement
  ).value.trim();
  const fullname = (
    form.elements.namedItem("fullname") as HTMLInputElement
  ).value.trim();
  const email = (
    form.elements.namedItem("email") as HTMLInputElement
  ).value.trim();

  if (!username || !password) {
    alert("Username and password are required!");
    return;
  }
  let user: UserCategory;
  if (fullname && email) user = submitUser(username, password, fullname, email);
  else if (fullname) user = submitUser(username, password, fullname);
  else if (email) user = submitUser(username, password, email);
  else user = submitUser(username, password);

  output.classList.remove("hidden");
  output.innerHTML = `
        <h2 class="text-lg font-semibold mb-2">Submitted User:</h2>
        <pre class="bg-gray-200 rounded-lg p-3 text-sm">${JSON.stringify(
          user,
          null,
          2
        )}</pre>
      `;
});
```

**Explanation:**

- Each overload represents a **different way to submit a user**.
- The implementation uses **optional parameters** to handle all scenarios.

## Function Overloads vs Union Types

### Using Union Types (Problematic)

```ts
function doubles(value: number | number[]): number | number[] {
if (Array.isArray(value)) return value.map((v) => v _ 2);
return value _ 2;
}

const results1 = doubles(5); // number | number[]
const results2 = doubles([1, 2, 3]); // number | number[]

results1.toFixed(2); // ❌ Error: 'number | number[]' is not assignable to 'number'
```

**Problem:**  
The compiler always thinks the return type is `number | number[]` — even when it's clearly a `number`.

---

### **Using Function Overloads (Better)**

```ts
function double(value: number): number;
function double(value: number[]): number[];
function double(value: number | number[]): number | number[] {
if (Array.isArray(value)) return value.map((v) => v _ 2);
return value _ 2;
}

const result1 = double(5); // ✅ number
const result2 = double([1, 2, 3]); // ✅ number[]

console.log(result1.toFixed(2)); // ✅ Works directly
console.log(result2.map(v => v + 1)); // ✅ Works directly
```

---

## **Why Overloading Works Better**

- Overload signatures tell TypeScript **exactly**:
  - If input is **number**, output is **number**.
  - If input is **number[]**, output is **number[]**.

---
