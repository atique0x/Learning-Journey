# TypeScript Optional Parameters

Optional parameters allow function parameters, interface, classes properties to be provided **optionally**.  
They are denoted using `?` after the parameter name.

---

**Example – Function with Optional Parameter**

```ts
function greet(name: string, age?: number) {
if (age) {
console.log(Hello ${name}, you are ${age} years old.);
} else {
console.log(Hello ${name});
}
}

greet("Atique", 25); // Hello Atique, you are 25 years old.
greet("Atique"); // Hello Atique
```

✅ **Key Points**

- Optional parameters are implicitly `undefined` if not passed.
- Optional parameters must come **after required parameters**.

---

## Rules for Optional Parameters

### Required Parameters Cannot Follow Optional Parameters

```ts
// ❌ Invalid
// function test(a?: number, b: string) {}

// ✅ Valid
function test(a: number, b?: string) {}
```

## Optional Properties in Interfaces

Optional parameters can also be used in **interfaces** to define properties that may or may not exist.

```ts
interface Logger {
  message: string; // required
  level?: string; // optional
}

const log1: Logger = {
  message: "Default Message",
};

console.log(log1.level); // undefined

const log2: Logger = {
  message: "Default Message",
  level: "Info",
};

console.log(log2.level); // Info
```

✅ **Key Points**

- Optional interface properties are denoted using `?`.
- If a property is not provided, its value is `undefined`.
- Useful for flexible configuration objects or callbacks.
