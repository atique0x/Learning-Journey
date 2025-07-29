## 2. finally Block

-   Runs after `try` and `catch` blocks, regardless of whether an error was thrown or caught.

---

## Common JavaScript Error Types

| Error Type         | Description                                               |
| ------------------ | --------------------------------------------------------- |
| **SyntaxError**    | Occurs when code has invalid syntax.                      |
| **ReferenceError** | Variable that doesn't exist is accessed.                  |
| **TypeError**      | Wrong type used (e.g., calling a number like a function). |
| **RangeError**     | A value is out of the allowable range.                    |
| **EvalError**      | Issues related to the `eval()` function (rare).           |
| **URIError**       | Problems with `encodeURI()` or `decodeURI()`.             |
| **AggregateError** | Represents multiple errors (e.g., in `Promise.any()`).    |

---

## 3. throw Statement

-   The `throw` statement allows you to manually raise (throw) an error.
-   It interrupts the normal flow of the program.
-   You can throw built-in Error objects or create your own custom errors.

```js
throw new Error("Something went wrong!");
```
