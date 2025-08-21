# TypeScript Union Types (`|`)

In TypeScript, a **union type** allows a variable, parameter, or return value to accept **more than one type**.  
You use the **pipe** (`|`) symbol to combine multiple types.

## **Basic Syntax**

```js
let value: string | number;

value = "Hello"; // ✅ valid
value = 100; // ✅ valid
// value = true;  // ❌ Error: Type 'boolean' is not assignable
```

> Here, value can be either a string or a number.

---

## **Union Types with Functions**

You can define function parameters to accept multiple types.

```ts
function printId(id: string | number): void {
  console.log("ID:", id);
}

printId(101); // ✅ number
printId("TS123"); // ✅ string
// printId(true);    // ❌ Error
```

```ts
function returnCheck(num: number, str: string): number | string {
  if (num === 1) {
    return str.length;
  }
  return str.toUpperCase();
}

console.log(returnCheck(1, "Atique"));
console.log(returnCheck(0, "Atique"));
```

---

## **Accessing Properties in Union Types**

When using unions, you **cannot directly access properties** unless they are **common to all types**.

```ts
function getLength(value: string | number) {
  // ❌ Error: Property 'length' does not exist on type 'number'
  // return value.length;

  // ✅ Solution → Narrowing
  if (typeof value === "string") {
    return value.length;
  }
  return value.toString().length;
}

console.log(getLength("Hello")); // 5
console.log(getLength(12345)); // 5
```

---

## **Union Types with Arrays**

You can create arrays that contain **multiple types**.

```ts
let items: (string | number)[] = ["apple", 10, "banana", 25];
```
