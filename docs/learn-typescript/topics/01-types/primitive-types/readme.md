# Primitive Types: `number`, `string`, `boolen`, `null`, `undefiend`, `symbol`

## `Number`

TypeScript has a single number type for all numeric values — there is no separate int or float type like some other languages.

```ts
let num1: number = 15; // integer
let num2: number = 15.6; // floating-point
```

> Both integers and decimals are allowed in number.

TypeScript ensures type safety: you cannot assign a string to a variable declared as number.

```ts
// Error: Type 'string' is not assignable to type 'number'
let num: number = "";
```

### Arithmetic Operations

```ts
const total: number = num1 + num2;
console.log(total); // 30.6
console.log(typeof total); // "number"
```

**Adding a number and a string causes string concatenation in JavaScript. TypeScript prevents assigning this to a number.**

```ts
let num3 = "10";
// const add: number = num1 + num2 + num3; // ❌ Error
const add: number = num1 + num2 + Number(num3); // ✅ Correct
console.log(add); // 40.6
```

### Number literals in different bases

| Format      | Prefix | Example  | Value |
| ----------- | ------ | -------- | ----- |
| Decimal     | -      | `15`     | 15    |
| Octal       | `0o`   | `0o112`  | 74    |
| Binary      | `0b`   | `0b0101` | 5     |
| Hexadecimal | `0x`   | `0x012d` | 301   |

```ts
let oct: number = 0o112;
let bin: number = 0b0101;
let hex: number = 0x012d;
console.log(oct, bin, hex); // 74 5 301
```

<br>
<br>
<br>

## `String`

Strings can be defined with single quotes, double quotes, or backticks (template literals).

```ts
const userName: string = "atique0x";
const userAddress: string = "Dhaka";
const user: string = `Name of user is ${userName} and address is ${userAddress}`;
console.log(user);
// Output: "Name of user is atique0x and address is Dhaka"
```

> Template literals allow embedding variables and multi-line strings.

### String methods - **str="atique0x"**

| Category                 | Method / Property            | Example                        | Output                       |
| ------------------------ | ---------------------------- | ------------------------------ | ---------------------------- |
| **Properties**           | `length`                     | `str.length`                   | `8`                          |
| **Case Conversion**      | `toUpperCase()`              | `str.toUpperCase()`            | `"ATIQUE0X"`                 |
|                          | `toLowerCase()`              | `str.toLowerCase()`            | `"atique0x"`                 |
| **Searching & Matching** | `includes(sub)`              | `str.includes("tiq")`          | `true`                       |
|                          | `startsWith(sub)`            | `str.startsWith("at")`         | `true`                       |
|                          | `endsWith(sub)`              | `str.endsWith("0x")`           | `true`                       |
|                          | `indexOf(sub)`               | `str.indexOf("i")`             | `2`                          |
|                          | `lastIndexOf(sub)`           | `str.lastIndexOf("i")`         | `2`                          |
|                          | `search(regex)`              | `str.search(/q/)`              | `3`                          |
|                          | `match(regex)`               | `str.match(/[aeiou]/g)`        | `["a","i","u","e"]`          |
| **Extracting Parts**     | `slice(start,end)`           | `str.slice(2,5)`               | `"iqu"`                      |
|                          | `substring(start,end)`       | `str.substring(2,5)`           | `"iqu"`                      |
|                          | `substr(start,length)`       | `str.substr(2,3)`              | `"iqu"`                      |
| **Manipulating Strings** | `replace(search,replace)`    | `str.replace("0x","99")`       | `"atique99"`                 |
|                          | `replaceAll(search,replace)` | `str.replaceAll("a","A")`      | `"Atique0x"`                 |
|                          | `trim()`                     | `"   atique0x   ".trim()`      | `"atique0x"`                 |
|                          | `trimStart()`                | `"   atique0x   ".trimStart()` | `"atique0x   "`              |
|                          | `trimEnd()`                  | `"   atique0x   ".trimEnd()`   | `"   atique0x"`              |
|                          | `concat(...strings)`         | `str.concat("_end")`           | `"atique0x_end"`             |
| **Splitting & Joining**  | `split(separator)`           | `str.split("i")`               | `["at","que0x"]`             |
|                          | `repeat(n)`                  | `str.repeat(3)`                | `"atique0xatique0xatique0x"` |
|                          | `padStart(target,pad)`       | `"5".padStart(3,"0")`          | `"005"`                      |
|                          | `padEnd(target,pad)`         | `"5".padEnd(3,"0")`            | `"500"`                      |
| **Character Access**     | `charAt(index)`              | `str.charAt(3)`                | `"u"`                        |
|                          | `charCodeAt(index)`          | `str.charCodeAt(3)`            | `117`                        |
|                          | `[index]`                    | `str[3]`                       | `"u"`                        |

<br>
<br>

## `Boolean`

Only true and false are valid for boolean.

```ts
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;
```

<br>
<br>

## `Null and Undefiend`

- undefined → A variable has been declared but not assigned a value.
- null → A variable is explicitly assigned "no value".

```ts
let a; // type: any, value: undefined
let b: null = null; // value: null
```

### Comparison

- null == undefined → true (loose equality, values considered equal).

- null === undefined → false (strict equality, types different).

### Use Cases

- undefined → Usually means a value was not set yet (default/uninitialized).

- null → Explicitly indicates “empty” or “no value”.

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

<br>
<br>
<br>

## `Symbol`

Every symbol value is unique and immutable, even if they have the same description.

Often used as unique object keys to avoid property name collisions.

```ts
let sym1: symbol = Symbol("id");
let sym2: symbol = Symbol("id");
console.log(sym1 === sym2); // false (always unique)
```

### Symbols can be used as property keys in objects, ensuring uniqueness.

```ts
const id = Symbol("id");

let user = {
  name: "Atique",
  [id]: 123,
};

console.log(user.name); // "Atique"
console.log(user[id]); // 123
// user.id ❌ undefined (cannot access with dot)
```
