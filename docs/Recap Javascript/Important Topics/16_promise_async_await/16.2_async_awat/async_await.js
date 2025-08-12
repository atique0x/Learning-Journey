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
