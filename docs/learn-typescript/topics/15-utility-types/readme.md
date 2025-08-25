## `Partial<T>`: Makes all properties optional

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
const partialUser: Partial<User> = { name: "Atique" }; // ✅ optional
```

## `Required<T>`: Makes all properties required

```ts
interface User {
  id?: number;
  name?: string;
}
const requiredUser: Required<User> = { id: 1, name: "Atique" }; // ✅ all required now
```

## `Readonly<T>` : Makes all properties immutable

```ts
interface Config {
  port: number;
  secure: boolean;
}
const cfg: Readonly<Config> = { port: 3000, secure: true };
// cfg.port = 500; ❌ cannot modify
```

## `Pick<T, K>` : Select specific properties ()

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
type UserProfile = Pick<User, "id" | "name">;
const profile: UserProfile = { id: 1, name: "Atique" };
```

## `Omit<T, K>` : Remove specific properties / hide sensitive data ()

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}
type PublicUser = Omit<User, "password">;
const user: PublicUser = { id: 1, name: "Atique", email: "atique@example.com" };
```
