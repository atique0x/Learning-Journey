# JavaScript Promise & Async-Await

## What is a JavaScript Promise?

A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Instead of immediately returning a value, an asynchronous function returns a **Promise** that will either:

-   **Resolve** with a value (successful completion)
-   **Reject** with a reason/error (failure)

## Why use Promises?

Before Promises, asynchronous operations were often handled with callbacks, which could get messy and lead to **“callback hell”** — deeply nested callbacks that are hard to read and maintain.

Promises provide a cleaner, more manageable way to:

-   Chain async operations
-   Handle errors

## Promise States

A Promise can be in one of these states:

-   **Pending:** Initial state, neither fulfilled nor rejected.
-   **Fulfilled:** Operation completed successfully.
-   **Rejected:** Operation failed.

---

## Promise Methods

-   `Promise.resolve(value)`  
    Returns a promise that is resolved with the given value.

-   `Promise.reject(reason)`  
    Returns a promise that is rejected with the given reason.

-   `Promise.all([p1, p2, ...])`  
    Waits for all promises to resolve or any to reject.

-   `Promise.race([p1, p2, ...])`  
    Resolves or rejects as soon as one of the promises resolves or rejects.

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
