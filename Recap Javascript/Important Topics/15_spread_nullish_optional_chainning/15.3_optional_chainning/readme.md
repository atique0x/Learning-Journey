# Optional Chaining Operator (`?.`)

The **optional chaining operator** allows you to safely access nested object properties without throwing errors if any intermediate property is `null` or `undefined`.

-   If **anything** in the chain is `null` or `undefined`, it short-circuits and returns `undefined` instead of throwing an error.

## Basic Usage

```js
const user = { profile: { email: "a@b.com" } };
console.log(user?.profile?.email);
// 'a@b.com'
console.log(user?.address?.street);
// undefined (does not throw)
```

## Using with Functions

```js
const obj = {
    func: () => "hello",
};

console.log(obj.func?.()); // 'hello'
console.log(obj.noFunc?.());
// undefined (does not throw)
```

## Using with Arrays

```js
const arr = [1, 2, 3];

console.log(arr?.[1]); // 2
console.log(arr?.[10]); // undefined
```

## Combined with Nullish Coalescing (??) and Logical OR (||)

```js
const response = {
    data: {
        user: {
            profile: 0,
        },
    },
};

//Using optional chaining with nullish coalescing:
const profile1 = response?.data?.user?.profile ?? "Profile is null";
console.log(profile1); // 0

//Using optional chaining with logical OR:
const profile2 = response?.data?.user?.profile || "Profile is null - or";
console.log(profile2); // "Profile is null - or" (because 0 is falsy)

const email = response?.data?.user?.profile?.email ?? "No email found";
console.log(email); // 'No email found'
```

## Summary

-   Use `?.` to safely access nested properties without runtime errors.
-   If any intermediate property is `null` or `undefined`, it returns `undefined`.
-   Can be used with properties, methods, and array elements.
-   Avoids errors in deeply nested or optional data structures, improving code robustness.
