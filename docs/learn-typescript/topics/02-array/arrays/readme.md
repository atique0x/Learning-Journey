# TypeScript Arrays

An array in TypeScript is a data structure that stores multiple values of the same type (homogeneous) or multiple types (heterogeneous, using union or any).

---

## Array without Type Annotation (Type Inference)

```ts
// TypeScript infers the type from the initial values
let user = ["atique", 25, true];
// Inferred type: (string | number | boolean)[]

user.push("ashik"); // ✅ string
user.push(26); // ✅ number
user.push(false); // ✅ boolean

// user.push({}); // ❌ Error: object not part of inferred type
```

**Key Points:**

- TypeScript infers the type based on initial values.
- Array becomes a union of all inferred types.

---

## Array with Type

```ts
// Array with only string type allowed
let user2: string[] = ["atique", "ashik"]; //recommended
let names: Array<string> = ["Tamim", "Rafid"]; //generic form

//Both are equivalent.

user2.push("new name"); // ✅ Allowed
// user2.push(25);      // ❌ Error: number not allowed
```

**Key Points:**

- Forces all elements to have the same type.
- Helps prevent accidental type errors.

---

## Array with Union Types

```ts
// Array allowing multiple types: string or number
let user3: (string | number)[] = ["atique", "ashik", 26];

user3.push(99); // ✅ Allowed (number)
user3.push("hello"); // ✅ Allowed (string)
// user3.push(true);  // ❌ Error: boolean not allowed
```

**Key Points:**

- Union types allow multiple types in the same array.
- Useful for arrays where elements can be different types but only a specific set.

---

## Readonly Array

```ts
// Readonly array: cannot be modified
const colors: readonly string[] = ["red", "green", "blue"];

// colors.push("yellow"); // ❌ Error: Cannot modify a readonly array
// colors[0] = "purple";  // ❌ Error: Cannot modify elements
```

**Key Points:**

- `readonly` ensures the array cannot be modified after initialization.
- Safe for constants or configuration data.

---

## Array with Nested Types

```ts
let users: { name: string; age: number }[] = [
  { name: "Atique", age: 25 },
  { name: "Ashik", age: 26 },
];

users.push({ name: "Ali", age: 27 }); // ✅ Allowed
// users.push({ name: "Rahim" });    // ❌ Error: missing 'age'
```

**Key Points:**

- Arrays can hold objects.
- TypeScript enforces object structure for each element.

---

## Spread & Rest

```ts
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5];
let merged: number[] = [...arr1, ...arr2]; // [1, 2, 3, 4, 5]

console.log(merged);
```

```ts
function logAll(...args: number[]) {
  console.log(args);
}

logAll(1, 2, 3, 4); // [1, 2, 3, 4]
```

<br>

## Array methods - same as javascript with type stricts

| Category           | Method          | Example                            | Output                                            |
| ------------------ | --------------- | ---------------------------------- | ------------------------------------------------- |
| **Add / Remove**   | `push()`        | `arr.push(4)`                      | Adds element at end → returns new length          |
|                    | `pop()`         | `arr.pop()`                        | Removes last element → returns removed value      |
|                    | `shift()`       | `arr.shift()`                      | Removes first element → returns removed value     |
|                    | `unshift()`     | `arr.unshift(0)`                   | Adds element at start → returns new length        |
|                    | `splice()`      | `arr.splice(1, 2)`                 | Removes/replaces elements → returns removed items |
|                    | `slice()`       | `arr.slice(1, 3)`                  | Copies part of array → returns new array          |
| **Search / Check** | `includes()`    | `arr.includes(3)`                  | `true` if element exists                          |
|                    | `indexOf()`     | `arr.indexOf(3)`                   | First index of element → `-1` if not found        |
|                    | `lastIndexOf()` | `arr.lastIndexOf(3)`               | Last index of element                             |
|                    | `find()`        | `arr.find(x => x > 3)`             | First element matching condition                  |
|                    | `findIndex()`   | `arr.findIndex(x => x > 3)`        | Index of first match                              |
| **Transform**      | `map()`         | `arr.map(x => x * 2)`              | Returns new transformed array                     |
|                    | `filter()`      | `arr.filter(x => x % 2 === 0)`     | Returns new array with matching elements          |
|                    | `reduce()`      | `arr.reduce((a, b) => a + b, 0)`   | Returns a single accumulated value                |
|                    | `flat()`        | `[1, [2, 3]].flat()`               | Flattens nested arrays → `[1, 2, 3]`              |
|                    | `flatMap()`     | `arr.flatMap(x => [x, x * 2])`     | Maps + Flattens in one step                       |
| **Iteration**      | `forEach()`     | `arr.forEach(x => console.log(x))` | Iterates but returns `void`                       |
|                    | `every()`       | `arr.every(x => x > 0)`            | `true` if all match condition                     |
|                    | `some()`        | `arr.some(x => x > 3)`             | `true` if any match condition                     |
| **Sorting**        | `sort()`        | `arr.sort((a, b) => a - b)`        | Sorts array (in place)                            |
|                    | `reverse()`     | `arr.reverse()`                    | Reverses order of elements                        |
| **Conversion**     | `join()`        | `arr.join("-")`                    | Returns string `"1-2-3"`                          |
|                    | `toString()`    | `arr.toString()`                   | Returns string `"1,2,3"`                          |
|                    | `concat()`      | `arr.concat([4, 5])`               | Returns new merged array                          |
