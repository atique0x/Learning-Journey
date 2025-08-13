# Nullish Coalescing Operator (`??`)

The **nullish coalescing operator** (`??`) returns the right-hand side **default value** only when the left-hand side is `null` or `undefined`.

```js
value ?? defaultValue;
```

- If `value` is `null` or `undefined`, returns `defaultValue`.
- Otherwise, returns `value` itself, even if it's a falsy value like `0`, `''`, or `false`.

---

## Why use `??` instead of `||`?

- The logical OR (`||`) operator treats all falsy values as fallback, including `0`, `''` (empty string), and `false`.
- The `??` operator treats **only** `null` and `undefined` as needing a fallback.

### Falsy values in JavaScript:

- `false`
- `0`
- `-0`
- `null`
- `undefined`
- `NaN`
- `""` (empty string)

---

### Basic Usage

```js
const name = null ?? "Guest";
console.log(name); // 'Guest'

const count = 0 ?? 10;
console.log(count); // 0 (NOT 10, because 0 is NOT null/undefined)
```

## Comparison with `||`

```js
const val = 0 || 10; // returns 10 because 0 is falsy
const val2 = 0 ?? 10; // returns 0 because 0 is NOT null/undefined
```

```js
function greet(user) {
  const name = user.name ?? "Anonymous";
  console.log(`Hello, ${name}!`);

  const age = user.age || "False Age";
  console.log(`Age: ${age}`);
}

greet({ name: "Alice", age: 25 });
// Hello, Alice!
// Age: 25

greet({ name: "", age: 0 });
// Hello, !
// Age: False Age (because 0 is falsy for ||)

greet({ name: null, age: null });
// Hello, Anonymous!
// Age: False Age

greet({});
// Hello, Anonymous!
// Age: False Age
```

## Summary

- Use `??` to provide defaults only for `null` or `undefined`.
- Use `||` when you want defaults for any falsy value (like `0`, `''`, `false`).
- Helps avoid unexpected fallback when `0`, `false`, or empty strings are valid values.
