# Functions in TypeScript

Functions in TypeScript are just like JavaScript, but with type safety.
You can specify parameter types, return types, optional parameters, default values, overloads, and more.

### Basic Function with Return Type

```ts
function getTime(): string {
  return `${new Date().getTime()}`;
}
```

- Use (): type to declare return type.
- TypeScript will check that the returned value matches the type.

---

### Arrow Function

```ts
const getDate = (): number => {
  return new Date().getDate();
};
```

- (): number → return type annotation.

---

### Void Function

```ts
const getDay = (): void => {
  console.log(`Today is ${new Date().getDay()}`);
};
```

- void → function returns nothing.

---

### Functions with Parameters

```ts
const sum = (a: number, b: number, c: number): number => {
  return a + b + c;
};
```

- All parameters required.
- TypeScript checks that arguments are of the correct type.

---

### Optional Parameters

```ts
const add = (a: number, b: number, c?: number) => {
  if (c !== undefined) return a + b + c;
  return a + b;
};
```

- c?: number → optional parameter.
- Always check if c exists before using it.

---

### Default Parameters

```ts
const mul = (a: number = 1, b: number = 1, c?: number) => {
  return a * b * (c || 1);
};
```

- Assign default values (a = 1).
- Useful to avoid undefined values.
- Tip: Use c ?? 1 instead of c || 1 to allow 0.

### Function Type Alias

```ts
type Negate = (val: number) => number;
const negationFun: Negate = (num) => num * -1;
```

- Type alias defines a function signature.
- Reusable for multiple functions with same input/output types.

---

### Rest Parameters

```ts
const sumAll = (a: number, b: number, ...rest: number[]) => {
  return a + b + rest.reduce((acc, cur) => acc + cur);
};
```

- ...rest: number[] → collects extra arguments into an array.
- Useful for functions with variable arguments.

### Promises

```ts
function fetchData(): Promise<string> {
  const promise: Promise<string> = new Promise((resolve, reject) => {
    if (true) resolve("Data fetched");
    else reject("Error in fetching");
  });
  return promise;
}
```

- Promise<string> → function returns a promise resolving to a string.
- Always type Promise<type> for safety.

---

### Async/Await

```ts
async function dataFetch(): Promise<void> {
  try {
    const res: string = await fetchData();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
dataFetch();
```

- All async functions automatically return a Promise.
- void because the function doesn’t explicitly return anything.
- If it returned a value like return res, type would be Promise<string>.
- fetchData() returns Promise<string> (from your previous function).
- await unwraps the promise, so the type of res is string
