# Utility Type: `Required<T>`

`Required<T>` is a built-in TypeScript utility type that converts **all optional properties** of a type into **required properties**.  
It ensures that **no property is left out** and is the **opposite of Partial<T>**.

---

## Example

```ts
interface User {
  id?: number;
  name?: string;
  email?: string;
}

type RequiredUser = Required<User>;

// Now all properties are mandatory
```

> “Take every key in `T` and make it mandatory.”

---

## Why Use Required<T>?

- It’s useful when you have optional fields in a base type but want to **enforce completeness** in certain situations.
- Use it when **all properties must exist** for an operation.

---

## Examples

```ts
//Basic Required
interface User {
  id?: number;
  name?: string;
  email?: string;
}

// Required: all fields must be provided
const user: Required<User> = {
  id: 1,
  name: "Atique",
  email: "atique@example.com",
};
```

---

```ts
//Combining Partial + Required
type PartialUser = Partial<User>; // all optional
type FullUser = Required<PartialUser>; // now required again

const user: FullUser = {
  id: 1,
  name: "Atique",
  email: "atique@example.com",
};
```

---

## Notes

Can be combined with other utility types:

```ts
Required<Pick<User, "id" | "name">>;

//makes only `id` and `name` required, leaving others as is.
```

---

## Key Takeaways

| Description                                                       |
| ----------------------------------------------------------------- |
| Makes all optional properties **mandatory**                       |
| Uses **mapped types** + `-?` to remove optional modifier          |
| Ensures objects are complete and prevents missing fields          |
| Validation, database saves, API payloads, enforcing strict typing |
