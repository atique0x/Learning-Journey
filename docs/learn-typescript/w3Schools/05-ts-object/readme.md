# TypeScript Objects

An object is a collection of key-value pairs. Keys are usually strings or symbols. Values can be of any type, including arrays, other objects, functions, or primitive types.

**Types of keys that a TypeScript object can have**

- String Keys
- Number Keys
- Symbol Keys

---

## Example 1 – Explicit Type Annotation

```ts
const user: {
  name: string; // string type
  age: number; // number type
  isActive: boolean; // boolean type
} = {
  name: "atique",
  age: 25,
  isActive: true,
  // address: "Dhaka", // ❌ Not allowed, property not defined in type
};
```

✅ **Key Points:**

- Object properties must match the defined type.
- Extra properties not defined in the type cause errors.

---

## Example 2 – Object with readonly property

```ts
const user: {
  readonly id: number; // cannot be reassigned
  name: string;
  age: number;
} = {
  id: 1,
  name: "Atique",
  age: 25,
};

console.log(user);

// Allowed
user.name = "Ashik"; // ✅ name can be changed
user.age = 26; // ✅ age can be changed

// Not allowed
// user.id = 2; // ❌ Error: Cannot assign to 'id' because it is a read-only property
```

✅ **Key Points:**

- `readonly` properties cannot be reassigned after initialization.
- Other properties remain mutable.

---

## Example 3 – Object with optional properties

```ts
const user: {
  name: string;
  age: number;
  address?: string; // optional
  email?: string; // optional
} = {
  name: "Atique",
  age: 25,
  // address & email are omitted ✅
};

console.log(user);

// Optional properties can be added later
user.address = "Dhaka"; // ✅ Allowed
user.email = "atique06@gmail.com"; // ✅ Allowed

// Optional properties can also be omitted entirely
const user2: { name: string; age: number; address?: string } = {
  name: "Ashik",
  age: 26,
}; // ✅ valid
```

✅ **Key Points:**

- Optional properties may or may not exist.
- They can be added after object creation.

---

## Example 4 – Object with nested property

```ts
const user3: {
  name: string; // string
  age: number; // number
  isActive: boolean; // boolean
  address?: {
    // optional property
    city: string; // city must be string
    country: string; // country must be string
  };
} = {
  name: "atique",
  age: 25,
  isActive: true,
  address: {
    // ✅ nested object provided
    city: "Dhaka",
    country: "Bangladesh",
  },
  // address: { city: "Dhaka" }, // ❌ Error: 'country' property missing
};

console.log(user3);

// Optional property usage
if (user3.address) {
  console.log("City:", user3.address.city);
  console.log("Country:", user3.address.country);
}
```

✅ **Key Points:**

- Nested objects are supported in TypeScript.
- Optional nested objects must include all required sub-properties if present.
- Use optional chaining to safely access nested properties.

---

## Example 5 – Object with dynamic keys using index signature

```ts
const nameAgeMap: { [index: string]: number } = {};

// ✅ Adding entries with string keys and number values
nameAgeMap["atique"] = 25;
nameAgeMap["ashik"] = 30;

// ❌ Not allowed: key must be a string and value must be a number
// nameAgeMap[1] = "twenty";

// ✅ Adding using dot notation (property name is treated as string)
nameAgeMap.akash = 28;

// ❌ Not allowed: value must be a number
// nameAgeMap.rafid = "22";

console.log("Name-Age Map:", nameAgeMap);
```

> **Readonly vs Optional:** `readonly` prevents reassignment, `?` allows missing properties.
