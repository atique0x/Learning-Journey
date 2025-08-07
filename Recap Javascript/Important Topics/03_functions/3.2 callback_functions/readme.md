# Callback Function

A **callback function** is a function passed as an argument to another function, which is then invoked (called) later within that function.  
It’s a key part of asynchronous programming, but also used in synchronous logic.

### Key Points:

-   A function passed as an argument to another function.
-   Invoked (called) inside the outer function, allowing **deferred** or **conditional** execution.
-   Widely used for **asynchronous tasks** (like data fetching, file handling) but also useful in **synchronous flow control**.

## ✅ Basic Callback Example

Function that adds two numbers and calls a callback to handle the result.

```js
function add(a, b, callback) {
    let c = a + b;
    callback(c); // calls the callback with the result
}

function display(sum) {
    console.log("The result of a & b:", sum);
}

add(4, 5, display); // Output: The result of a & b: 9
```

## 🧱 Simple Sequential Execution Without Callbacks

These run one after another immediately.

```js
const firstExecutes = () => {
    console.log("Execution - 1");
    seceondExecutes();
};

const seceondExecutes = () => {
    console.log("Execution - 2");
    thirdExecutes();
};

const thirdExecutes = () => {
    console.log("Execution - 3");
    fourthExecutes();
};

const fourthExecutes = () => {
    console.log("Execution - 4");
};

firstExecutes(); // Executes all steps synchronously
```

## 🔄 Callback-Based Sequential Execution

Each function accepts a callback and executes the next step only after the previous is done.

```js
const firstExecutes1 = (callback_second) => {
    console.log("Step:1 Data is generating...");
    callback_second();
};

const seceondExecutes2 = (callback_third) => {
    console.log("Step:2 Data is loading...");
    callback_third();
};

const thirdExecutes3 = (callback_fourth) => {
    console.log("Step:3 Data is ready...");
    callback_fourth();
};

const fourthExecutes4 = () => {
    console.log("Step:4 Data is ready to display...");
};

firstExecutes1(() => {
    seceondExecutes2(() => {
        thirdExecutes3(() => {
            fourthExecutes4();
        });
    });
});
// This simulates a data processing pipeline
```

## ⏱ Callback Chain with Delays

Simulating async steps using setTimeout.

```js
const stepOne = () => {
    setTimeout(() => {
        console.log("Step 1");
        stepTwo();
    }, 1000);
};

const stepTwo = () => {
    setTimeout(() => {
        console.log("Step 2");
        stepThree();
    }, 1000);
};

const stepThree = () => {
    console.log("Step 3");
};

stepOne();
// This simulates delayed operations like fetching data
```

## 📦 Callback Chaining with Parameters

```js
const step1 = (next) => {
    setTimeout(() => {
        console.log("Step 1: Fetching data...");
        next();
    }, 3000);
};

const step2 = (next) => {
    setTimeout(() => {
        console.log("Step 2: Loading...");
        next();
    }, 1000);
};

const step3 = () => {
    console.log("Step 3: Rendering complete!");
};

step1(() => {
    step2(() => {
        step3();
    });
});
// This simulates chained processing with waiting steps
```

## 👉 Callback

```js
const stepsOne = (nextStep) => {
    setTimeout(() => {
        console.log("Step 1: Fetching data");
        nextStep(); // Call passed function
    }, 6000);
};

const sayGoodbye = () => {
    console.log("Goodbye!");
};

stepsOne(sayGoodbye); // Pass named function as callback
```

---

## Scenario: Load Profile → Post → Comment

```js
const user = {
    id: 1,
    name: "Atique",
};

// Step 1: Load user profile
const loadProfile = (user, nextPost) => {
    const { name } = user;
    console.log(`Profile of ${name} is ready.`);
    setTimeout(() => {
        const post = "Today is Wednesday. I learn Functions";
        nextPost(post); // Pass post to next function
    }, 1000);
};

// Step 2: Load post content
const loadPost = (post, nextComment) => {
    setTimeout(() => {
        console.log("Post is loading...");
        nextComment(post); // Pass same post to next
    }, 2000);
};

// Step 3: Load comments related to the post
const loadComment = (post) => {
    console.log(post);
};

loadProfile(user, (post) => {
    loadPost(post, (post) => {
        loadComment(post);
    });
});
// Simulates dependent operations: user → post → comments
```

## Create Post After User Load, Then Display It

```js
const loadUser = (callback) => {
    setTimeout(() => {
        const user = { id: 1, name: "Atique" };
        console.log(`User ${user.name} loaded`);
        callback(user); // Pass user to next function
    }, 1000);
};

const createPost = (user, title, body, callback) => {
    setTimeout(() => {
        console.log(`Post created by ${user.name}`);
        console.log(`Title: ${title}`);
        callback(title, body, user.name); // Pass all post data
    }, 1500);
};

const displayPost = (title, body, author) => {
    console.log("🔽 Displaying Post:");
    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);
    console.log(`Author: ${author}`);
};

const title = "Learn JS";
const body = "Discussing functions";

loadUser((user) => {
    createPost(user, title, body, (title, body, author) => {
        displayPost(title, body, author);
    });
});
```

## 📧 User Registration → Email → Login Flow

```js
const userData = {
    username: "Atique",
    email: "atique@example.com",
    role: "Admin",
    isEnrolled: false,
};

function registerUser(data, callbackSendEmail) {
    console.log("Registering user:", data.username);
    if (data.isEnrolled) {
        console.log("User already logged in");
    } else {
        setTimeout(() => {
            console.log("User registered successfully.");
            callbackSendEmail(data.email); // Pass email
        }, 1000);
    }
}

function sendWelcomeEmail(email, callbackLogin) {
    console.log(`Sending welcome email to ${email}...`);
    setTimeout(() => {
        console.log("Email sent.");
        callbackLogin(); // Proceed to login
    }, 1000);
}

function loginUser() {
    console.log("Logging user in...");
    setTimeout(() => {
        console.log("✅ User logged in.");
    }, 1000);
}

registerUser(userData, (email) => {
    sendWelcomeEmail(email, () => {
        loginUser();
    });
});
```
