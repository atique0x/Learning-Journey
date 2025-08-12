# JSON Overview

JSON (JavaScript Object Notation) is a lightweight, text-based format for storing and exchanging data.

## JSON Structure

Data is represented as key-value pairs, similar to JavaScript objects.

### Supported data types:

-   **Objects**: `{ "key": value, ... }`
-   **Arrays**: `[value1, value2, ...]`
-   **Strings**: `"text"`
-   **Numbers**: `123`, `3.14`
-   **Boolean**: `true`, `false`
-   **null**

### Doesn't support:

**`undefined`**

```js
age: undefined; // ❌ will be removed
```

**`Date objects (must be serialized as strings)`**

```js
new Date("2025-08-08");
// → "2025-08-08T10:20:30.000Z" (example UTC time)
```

**`Function`**

```js
greet: function () {} // ❌ will be removed
```

**` Symbol`**

```js
[sym1]: "key" // ❌ ignored completely

```

## Important Points

-   JSON keys **must be strings wrapped in double quotes** `" "`.
-   JSON strings **must use double quotes**, not single quotes.
-   Parsing invalid JSON will **throw a syntax error**.

-   > In arrays, undefined is replaced with null in JSON.
-   > Dates are converted to ISO 8601 string format.

## JSON Methods

Convert an object to JSON string:

```js
JSON.stringify(obj); // Convert obj to json
JSON.parse(json); //Convert json to obj
```

<br>

```js
const sym1 = Symbol("id");
const obj = {
    name: "Atique",
    age: undefined,
    greet: function () {
        console.log("Hello!");
    },
    skills: ["JavaScript", undefined, "Angular"],
    date: new Date(),
    [sym1]: "key",
};

console.log(JSON.stringify(obj));

const jsonV = `{"name":"Atique","skills":["JavaScript",null,"Angular"],"date":"2025-08-08T06:52:31.123Z"}`;

console.log(JSON.parse(jsonV));
```

## Summary

| Type                  | Behavior when stringifying |
| --------------------- | -------------------------- |
| `undefined` in object | Property removed           |
| `undefined` in array  | Converted to `null`        |
| `function`            | Removed                    |
| `Symbol` key/value    | Removed                    |
| `Date`                | Converted to ISO string    |
| `NaN`, `Infinity`     | Converted to `null`        |
