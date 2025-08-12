# JavaScript Promise & Async-Await

## What is a JavaScript Promise?

A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Instead of immediately returning a value, an asynchronous function returns a **Promise** that will either:

- **Resolve** with a value (successful completion)
- **Reject** with a reason/error (failure)

## What does it mean when a Promise is **resolved**?

- **Resolved** means the Promise completed its job successfully.
- The asynchronous operation inside the Promise finished without problems.
- The Promise now has a **result value** that you can use.
- When a Promise is resolved, the `.then()` callbacks are executed with the resolved value.

## What does it mean when a Promise is **rejected**?

- **Rejected** means the Promise failed to complete its job.
- There was an error or problem in the asynchronous operation.
- The Promise now has a **reason for failure** (usually an error object or message).
- When a Promise is rejected, the `.catch()` callbacks are executed with the rejection reason.

## Why use Promises?

Before Promises, asynchronous operations were often handled with callbacks, which could get messy and lead to **“callback hell”** — deeply nested callbacks that are hard to read and maintain.

Promises provide a cleaner, more manageable way to:

- Chain async operations
- Handle errors

## Promise States

A Promise can be in one of these states:

- **Pending:** Initial state, neither fulfilled nor rejected.
- **Fulfilled:** Operation completed successfully.
- **Rejected:** Operation failed.

## Promise Methods

- `Promise.resolve(value)`  
  Returns a promise that is resolved with the given value.

- `Promise.reject(reason)`  
  Returns a promise that is rejected with the given reason.

- `Promise.all([p1, p2, ...])`  
  Waits for all promises to resolve or any to reject.

- `Promise.race([p1, p2, ...])`  
  Resolves or rejects as soon as one of the promises resolves or rejects.

## Promise Constructor and Executor Function

A **Promise** is created by calling the `Promise` constructor:

```js
const promise = new Promise((resolve, reject) => {
  // Executor function: start async operation here

  // When operation succeeds:
  resolve(result);

  // When operation fails:
  reject(error);
});
```

- The constructor takes an **executor function** as an argument.
- The executor function is called **immediately** by the Promise constructor.
- It receives two functions as parameters:
  - `resolve`: used to **fulfill** the Promise with a value.
  - `reject`: used to **reject** the Promise with a reason (usually an error).

Inside the executor function:

- Start the asynchronous operation.
- When the operation **succeeds**, call `resolve(result)` to fulfill the Promise.
- When the operation **fails**, call `reject(error)` to reject the Promise.

This pattern allows you to define how the Promise will complete based on the outcome of the async operation.

### Promise and Event Loop: https://github.com/atique0x/Learning-Journey/tree/main/docs/Recap%20Javascript/Important%20Topics/22_event_loop

<br>
<br>

# Detailed Note on JavaScript Async/Await

## What is Async/Await?

- **Async/await** is syntactic sugar to work with Promises more easily.
- It allows writing asynchronous code that looks and behaves more like synchronous code.
- Helps avoid deeply nested `.then()` chains, improving readability and maintainability.

## The `async` Function

- Marking a function with the `async` keyword means:
  - The function **always returns a Promise**, implicitly.
  - You can use the `await` keyword inside it.

**Behavior:**

- Returning a value inside an async function is equivalent to returning a resolved Promise with that value.
- Throwing an error inside rejects the returned Promise.

## The `await` Operator

- `await` pauses the execution of the async function until the Promise is **settled** (resolved or rejected).
- It unwraps the Promise’s resolved value.
- If the Promise rejects, `await` throws the rejection as an exception.

## How Async/Await Works Internally

- Internally, async/await uses Promises.
- `await` expressions behave like `.then()` callbacks but are written sequentially.
- The JavaScript engine pauses the async function at each `await` and resumes when the Promise settles.

## Error Handling with Async/Await

- Use `try...catch` blocks to handle errors from awaited Promises.
- Errors thrown inside async functions reject the returned Promise.

> Async/await = Promise chains + better syntax. No exclusive functionality.

<br>

### Project Link: https://atique0x.github.io/Learning-Journey/Recap%20Javascript/Important%20Topics/16_promise_async_await/project/index.html

<br>

# Promise & async-await Example

```js
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

const books = [
  { title: "JavaScript Basics", copies: 3 },
  { title: "Advanced CSS", copies: 0 },
  { title: "Python 101", copies: 2 },
];

const borrowTransaction = [];

const userId = 1;
const bookTitle = "JavaScript Basics";

function verifyUser(userId) {
  console.log("Verifying user...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.id === userId);
      if (!user) {
        reject(`User with ID ${userId} not found.`);
      } else if (!user.active) {
        reject(`User ${user.name} is inactive.`);
      } else {
        resolve(user);
      }
    }, 1000);
  });
}

function checkBookAvailability(bookTitle) {
  console.log("Verifying book availability...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const book = books.find(
        (b) => b.title.toLowerCase() === bookTitle.toLowerCase()
      );
      if (!book) {
        reject(`Book titled "${bookTitle}" not found.`);
      } else if (book.copies < 1) {
        reject(`No copies available for "${book.title}".`);
      } else {
        console.log(`Book is found`);
        resolve(book);
      }
    }, 1000);
  });
}

function reservedBook(book) {
  return new Promise((resolve) => {
    book.copies -= 1;
    console.log(book);
    resolve(book);
  });
}

function recordHistory(user, book) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const transaction = {
        _id: new Date().toISOString(),
        userId: user.id,
        userName: user.name,
        bookName: book.title,
        date: new Date().toLocaleString(),
      };
      borrowTransaction.push(transaction);
      resolve(transaction);
    }, 1000);
  });
}

function sendConfirmation(transaction) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const message = `Success! ${transaction.userName} borrowed "${transaction.bookName}" on ${transaction.date}. Transaction ID: ${transaction._id}`;
      resolve(message);
    }, 1000);
  });
}
```

```js
//Chainning by promise - more complex
verifyUser(userId)
  .then((user) => {
    return checkBookAvailability(bookTitle).then((book) => ({
      user,
      book,
    }));
  })
  .then(({ user, book }) => {
    return reservedBook(book).then(() => ({ user, book }));
  })
  .then(({ user, book }) => {
    return recordHistory(user, book);
  })
  .then((transaction) => {
    return sendConfirmation(transaction);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

```js
//Chain with async-await - easy
async function booking(userId, bookTitle) {
  try {
    const user = await verifyUser(userId);
    const book = await checkBookAvailability(bookTitle);
    const reserved = await reservedBook(book);
    const transaction = await recordHistory(user, book);
    const message = await sendConfirmation(transaction);
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}

booking(userId, bookTitle);
```
