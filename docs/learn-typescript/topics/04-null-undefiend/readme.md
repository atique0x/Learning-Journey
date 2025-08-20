# `Null & Undefiend`

- `undefined` → A variable has been declared but not assigned a value.
- `null` → A variable is explicitly assigned "no value".

  ```ts
  let a; // type: any, value: undefined
  let b: null = null; // value: null
  ```

### Comparison

- `null` == `undefined` → true (loose equality, values considered equal).

- `null` === `undefined` → false (strict equality, types different).

### Use Cases

- `undefined` → Usually means a value was not set yet (default/uninitialized).

- `null` → Explicitly indicates “empty” or “no value”.

  ```ts
  function findUser(id: number): string | null {
    if (id === 0) return null; // user not found
    return "Atique";
  }
  ```

### Optional Parameters

Function parameters not passed become undefined.

```ts
function greet(name?: string) {
  console.log("Hello " + (name ?? "Guest"));
}

greet("Atique"); // Hello Atique
greet(); // Hello Guest
```

```ts
let val: string | undefined;
console.log(val ?? "Default"); // "Default"
```
