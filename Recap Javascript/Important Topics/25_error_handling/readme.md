# Error Handling in JavaScript

## What is Error Handling?

Error handling is the process of **detecting**, **managing**, and **recovering** from problems that occur during program execution.  
In JavaScript, errors can happen for many reasons:

- Invalid user input
- Failed network requests
- Missing or incorrect data from APIs
- Bugs in code logic
- Unexpected external conditions (e.g., unavailable resources)

### Without error handling:

- The program may **crash**.
- It may behave **unexpectedly** or produce incorrect results.

### With error handling:

- You can **gracefully recover**.
- Provide **meaningful feedback** to users.
- Prevent application-wide failures.

## try...catch Structure

- **try block**: Wraps code that might produce an error.
- **catch block**: Executes only if an error occurs inside the try block.
- **error object**: Represents the error with properties such as:
  - `name` (type of error)
  - `message` (description)
  - `stack` (stack trace for debugging)

## The throw Statement

- Used to manually create (raise) an error.
- Helps indicate when something has gone wrong intentionally.
- Supports built-in error types (e.g., Error, TypeError, RangeError) or custom error messages.
- Allows creating custom error classes to represent specific error scenarios.

# JavaScript Error Types

This document provides an overview of the most common JavaScript error types and when they typically occur.

| Error Type       | Description                                            |
| ---------------- | ------------------------------------------------------ |
| `SyntaxError`    | Occurs when code has invalid syntax.                   |
| `ReferenceError` | Variable that doesn't exist is accessed.               |
| `TypeError`      | Wrong type used (e.g., call a number like a function). |
| `RangeError`     | A value is out of the allowable range.                 |
| `EvalError`      | Issues related to the `eval()` function (rare).        |
| `URIError`       | Problems with `encodeURI()` or `decodeURI()`.          |
| `AggregateError` | Represents multiple errors (e.g., in `Promise.any()`). |

## finally Block (Additional)

- An optional block after try...catch.
- Always runs regardless of whether an error occurred or not.
- Useful for cleanup actions like closing resources or resetting states.

## Benefits of Error Handling

- Improves application stability and robustness.
- Facilitates easier debugging and maintenance.
- Enhances user experience by avoiding abrupt crashes.
- Allows graceful fallback or recovery strategies.
- Helps enforce business rules and validation logic consistently.

## Common Best Practices

- Handle errors at the right level — don’t swallow errors silently.
- Provide clear and actionable error messages.
- Log errors for monitoring and diagnostics.
- Use custom error types for better error categorization.
- Clean up resources in `finally` or equivalent mechanisms.

<br>
<br>

# Example

```js
async function getUser(userId) {
  try {
    if (!userId) {
      throw new Error("User Id is required");
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const users = await response.json();

    const findingUser = users.find((user) => user.id === userId);
    if (!findingUser) {
      throw new Error(`User is not exist with user id-${userId}`);
    }

    console.log(findingUser);
  } catch (err) {
    console.log("Error: ", err.message);
  }
}

getUser(1); //User information
getUser(""); //Error: User Id is required
getUser(12); //Error: User is not exist with user id-12
```
