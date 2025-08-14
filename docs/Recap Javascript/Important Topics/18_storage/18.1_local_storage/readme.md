# Local Storage

### Link: [Local Storage Project](https://local-storage-000.netlify.app/)

Local Storage is a feature of the **Web Storage API** that provides persistent, key-value storage in the browser.

## Key Characteristics

- Persistent: Data **does not expire until explicitly deleted**.
- Capacity: Stores approximately **5–10 MB** of data per domain (varies by browser).
- Storage Format: **Data is stored as strings (objects and arrays can be stored by converting to JSON).**
- Privacy: Data is **not sent to the server** with every HTTP request.
- Scope: Data is stored **per origin** (protocol + domain + port).
- Access: Managed via the JavaScript `localStorage` object.

## Why Use Local Storage?

Local Storage is ideal for storing data locally in the user's browser that should persist across:

- Page reloads
- Browser restarts

### Common Use Cases

- User preferences
- Theme selection
- Caching data for offline usage

## Advantages

- **Fast and simple**: No server communication required.
- **Persistent**: Data remains until explicitly removed.

## Basic Operations

1. **Set an item** – Store a value under a specific key.

   ```js
   localStorage.setItem("key", "value");
   ```

2. **Get an item** – Retrieve a stored value using its key.

   ```js
   const value = localStorage.getItem("key");
   ```

3. **Remove an item** – Delete a specific key-value pair.

   ```js
   localStorage.removeItem("key");
   ```

4. **Clear all items** – Remove all stored data.

   ```js
   localStorage.clear();
   ```

---

## Important Details

- Only strings can be stored.
- Use `JSON.stringify()` before storing and `JSON.parse()` when retrieving objects or arrays.
- Data persists even after closing and reopening the browser or tab.

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
  setItemOnLocalStorage(allUser);

  form.name.value = "";
  form.email.value = "";
  form.age.value = "";
  form.town.value = "";
  form.city.value = "";
  form.postcode.value = "";
});

function setItemOnLocalStorage(users) {
  localStorage.setItem("users-information", JSON.stringify(users));
  alert("Item is stored on local storage");
}

function getDataBtn() {
  const userData = JSON.parse(localStorage.getItem("users-information"));
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
  localStorage.removeItem("users-information");
}

function clearAllBtn() {
  localStorage.clear();
}
```
