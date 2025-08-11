# Session Storage

Session Storage is a feature of the **Web Storage API** that allows storing key–value pairs in the browser for the duration of a page session.

## Key Characteristics

-   **Scope:** Data is available only to the **same tab or window**.
-   **Lifetime:** Automatically cleared when the tab or window is closed.
-   **Capacity:** Stores approximately **5–10 MB** of data per domain (varies by browser).
-   **Storage Format:** Data is stored as **strings** (objects and arrays can be stored by converting to JSON).
-   **Privacy:** Data is not sent to the server with every HTTP request.
-   **Access:** Managed via the JavaScript `sessionStorage` object.

## Why Use Session Storage?

Session Storage is useful for temporary data that should only last for the current browser session.

### Common Use Cases

-   Temporary shopping cart (clears when the tab is closed)
-   Multi-step form data during a session
-   Storing UI state (e.g., dark mode toggle) for the current tab only

## Advantages

-   **Fast and simple:** No server communication required.
-   **Isolated to the session:** Data exists only while the tab is open.

## Basic Operations

1. **Set an item** – Store a value under a specific key.

    ```js
    sessionStorage.setItem("key", "value");
    ```

2. **Get an item** – Retrieve a stored value using its key.

    ```js
    const value = sessionStorage.getItem("key");
    ```

3. **Remove an item** – Delete a specific key-value pair.

    ```js
    sessionStorage.removeItem("key");
    ```

4. **Clear all items** – Remove all stored data.

    ```js
    sessionStorage.clear();
    ```

---

## Important Details

-   Only strings can be stored.
-   Use `JSON.stringify()` before storing and `JSON.parse()` when retrieving objects or arrays.
-   Data is scoped to the current **browser tab or window**.

# Example

```js
const form = document.getElementById("userForm");
const savedInfo = document.getElementById("savedInfo");

const allUser = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInfo = {
        _id: allUser.length + 1,
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        age: form.age.value.trim(),
        address: {
            town: form.town.value.trim(),
            city: form.city.value.trim(),
            postcode: form.postcode.value.trim(),
        },
    };

    if (
        !userInfo.name ||
        !userInfo.email ||
        !userInfo.age ||
        !userInfo.address.town ||
        !userInfo.address.city ||
        !userInfo.address.postcode
    ) {
        alert("Please fill out all fields.");
        return;
    }

    allUser.push(userInfo);
    setItemOnSessionStorage(allUser);

    form.name.value = "";
    form.email.value = "";
    form.age.value = "";
    form.town.value = "";
    form.city.value = "";
    form.postcode.value = "";
});

function setItemOnSessionStorage(users) {
    sessionStorage.setItem("users-information", JSON.stringify(users));
    alert("Item is stored in session storage");
}

function getDataBtn() {
    const userData = JSON.parse(sessionStorage.getItem("users-information"));
    if (!userData) {
        alert("Currently no user available");
        return;
    }
    console.log(userData);
    showDataUI(userData);
}

function showDataUI(users) {
    savedInfo.innerHTML = ""; // Clear previous data
    savedInfo.style.display = "block"; // Show the container
    users.map((user) => {
        const div = document.createElement("div");
        const name = document.createElement("h3");
        const age = document.createElement("p");
        const email = document.createElement("p");
        const fullAddress = document.createElement("p");

        div.style.border = "1px solid #ccc";
        div.style.padding = "10px";
        div.style.marginBottom = "10px";
        div.style.borderRadius = "5px";

        name.innerText = `Name: ${user.name}`;
        age.innerText = `Age: ${user.age}`;
        email.innerText = user.email;

        const town = user.address.town;
        const city = user.address.city;
        const postcode = user.address.postcode;
        const address = `${town}, ${city}-${postcode}`;
        fullAddress.innerText = address;

        div.appendChild(name);
        div.appendChild(age);
        div.appendChild(email);
        div.appendChild(fullAddress);
        savedInfo.appendChild(div);
    });
}

function clearBtn() {
    sessionStorage.removeItem("users-information");
}

function clearAllBtn() {
    sessionStorage.clear();
}
```
