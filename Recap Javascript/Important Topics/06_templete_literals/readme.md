# JavaScript Template Literals

Template literals, also known as **template strings**, use **backticks** (` ` `) instead of single (`'`) or double (`"`) quotes. They allow:

-   Embedding variables and expressions inside strings
-   Creating multi-line strings easily
-   Using special formatting with **tagged templates**

The `${}` syntax allows you to embed **variables or expressions** directly inside the string.

```js
const name = "Atique";
const message = `Hello, ${name}!`;
console.log(message); // Hello, Atique!
```

## Multi-line Strings

Using backticks, you can write strings across multiple lines without `\n`.

```js
const multiline = `This is line one.
This is line two.
This is line three.`;
```

No need for \n or + to break lines.

## Expression Evaluation

You can do calculations or logic directly inside the `${}`.

```js
const age = 25;
console.log(`I will be ${age + 1}`);
```

> Any valid JavaScript expression can be placed inside `${}`.

---

## Nesting Template Literals

Template literals can even contain **other** template literals.

```js
const food = "Pizza";
const msg = `I love ${`${food}`.toUpperCase()}!`;
// I love PIZZA!
```

## Common Use Cases

-   Creating clean multi-line text
-   Building dynamic strings
-   Generating HTML templates in JavaScript
-   Embedding values in logs or messages
-   Formatting strings without `+` operators
