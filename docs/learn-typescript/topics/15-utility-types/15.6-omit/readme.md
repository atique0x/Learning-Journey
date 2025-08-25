# Utility Type: Omit<T, K>

`Omit<T, K>` is a built-in TypeScript utility type that **creates a new type** by **removing the specified keys `K`** from type `T`.

It is useful when you want to **exclude sensitive** or **unnecessary** properties from a type.  
Often used when **exposing data externally** or **simplifying objects**.

---

### Example

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;
// PublicUser now has only: id, name, email
```

> “Take all properties **except** the ones I want to omit.”

---

## Why Use Omit<T, K>?

- **Hide sensitive data** (e.g., passwords, tokens, API keys).
- **Simplify objects** before passing them to components or APIs.
- When passing objects to **functions/components** where certain fields are irrelevant.
- When combining with **other utility types** for precise type control.

---

## Examples

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;

const safeUser: PublicUser = {
  id: 1,
  name: "Atique",
  email: "atique@example.com",
};
// ❌ Cannot include 'password'
```

---

```ts
//Function Example

function sendUserData(user: Omit<User, "password">) {
  console.log("Sending user data:", user);
}

sendUserData({
  id: 2,
  name: "Shariar",
  email: "shariar@example.com",
});
// ✅ Works fine without password
```

---

```ts
//Combining with Partial

type PartialSafeUser = Partial<Omit<User, "password">>;

const partialUser: PartialSafeUser = {
  name: "Atique", // ✅ Optional because of Partial
};
```

---

## Notes

- Can remove **multiple keys** at once:

```ts
type SafeUser = Omit<User, "password" | "isAdmin">;
```
