# Spread Operator (...)

The Spread operator allows you to expand an iterable (like an array or object) into individual elements.

**Syntax:** `...`

## Use Cases

- Expanding arrays
- Copying arrays/objects
- Merging arrays/objects
- Passing elements as function arguments

---

### Spread with Arrays

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
//...arr1 spreads the elements into the new array.
```

### Copying Arrays

```js
const original = [10, 20];
const copy = [...original];
copy.push(30);

console.log(original); // [10, 20]
console.log(copy); // [10, 20, 30]
```

### Merging Arrays

```js
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]
```

### Spread with Objects

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
```

```js
const person = {
  name: "Alice",
  age: 28,
  profession: "Engineer",
  city: "Dhaka",
  isMarried: false,
};

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2021,
  color: "Blue",
  isElectric: false,
};

// const newObj = { ...person, car.color }; //❌ This is wrong
// const newObj = {
//   ...person,
//   carColor: car.color, // Possible but change attribute name
// };

const { color, brand } = car; // pick multiple keys
const newObj = { ...person, color, brand }; // Possible

console.log("New Object: ", newObj);
```

```js
const defaultSettings = { theme: "light", notifications: true };
const userSettings = { notifications: false };

const settings = { ...defaultSettings, ...userSettings };
console.log(settings); // { theme: 'light', notifications: false }
```

### Merging Multiple Objects with Conflicting Properties

```js
const base = { a: 1, b: 2 };
const override1 = { b: 20, c: 30 };
const override2 = { a: 100, d: 40 };

const mergedObj = { ...base, ...override1, ...override2 };
console.log(mergedObj);
// { a: 100, b: 20, c: 30, d: 40 }
```

```js
const users1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const users2 = [
  { id: 2, name: "Bobby" },
  { id: 3, name: "Charlie" },
];

const mergeUser = [...users1, ...users2];
console.log(mergeUser);
```

```js
const mergeUniqueUser = [
  ...users1,
  ...users2.filter((u2) => !users1.find((u1) => u1.id == u2.id)),
];
console.log(mergeUniqueUser);
```

<br>
<br>

# Rest Operator (`...`)

The **Rest operator** collects multiple elements and condenses them into a single array or object.

- It is the opposite of the spread operator (`...`), which expands elements.

## Usage

- Primarily used in **function parameters** to gather remaining arguments into an array.
- Used in **destructuring** to collect the rest of the elements or properties into a new array or object.

---

### Rest in Function Parameters

```js
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10)); // 15
```

### Rest with Array Destructuring

```js
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest); // [20, 30, 40]
```

### Rest with Object Destructuring

```js
const { x, ...others } = { x: 1, y: 2, z: 3 };
console.log(x); // 1
console.log(others); // { b: 2, c: 3 }
```
