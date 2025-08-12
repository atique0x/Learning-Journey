# Fetch API: Overview

The **Fetch API** is a modern, **promise-based** JavaScript interface for making HTTP requests (GET, POST, PUT, DELETE, etc.) from the browser. It provides a simpler, cleaner, and more powerful alternative to the older XMLHttpRequest method.

## Syntax

```js
fetch(url, options)
  .then((response) => {
    // handle the response
  })
  .catch((error) => {
    // handle network or parsing errors
  });
```

- **url** — The URL of the resource you want to fetch.
- **options** (optional) — An object to configure the request: **HTTP method, headers, body, mode, credentials, cache**, etc.

## Key Features of Fetch API

- **Promise-based:** Simplifies handling asynchronous HTTP requests.
- Supports **all HTTP methods**: GET, POST, PUT, DELETE, PATCH etc.
- Flexible request configuration: Customize **headers, body, mode (cors, no-cors), credentials (cookies), cache control** etc.
- Response streaming: Allows reading the response body progressively.
- Supports various response types: **JSON, text, Blob, FormData** etc.
- Handles **CORS**: Works with Cross-Origin Resource Sharing, respecting server policies.
- Better error handling: Network errors reject the promise; however, HTTP status errors (like 404) do **not** automatically reject — you must check **`response.ok`** manually.
- Works well with **async/await** for cleaner asynchronous code.

## Parsing the Response Body

The response body is a stream of bytes, so you need to parse it according to the data format.  
Common methods to parse the body:

- **`res.json()`** — Parses JSON response into JavaScript objects (returns a Promise)
- `res.text()` — Reads response as plain text
- `res.blob()` — Reads response as binary Blob
- `res.formData()` — Parses form data

> Most APIs send JSON, so **`res.json()`** is frequently used.

## What is `res` in `.then((res) => ...)`?

**`res`** is the **Response object** returned by the Fetch API after the HTTP request completes.

It represents the entire HTTP response, including:

- **Status code** (like 200, 404)
- Status text (like "OK", "Not Found")
- Headers (metadata about the response)
- Body (the actual content/data sent back from the server)

## Why do we call `res.json()`?

The response body is a stream of bytes (often text) and needs to be parsed into usable JavaScript data.

`res.json()` is a method on the Response object that:

- Reads the response body stream.
- Parses it as **JSON**.
- Returns a **Promise** that resolves to the parsed JavaScript object or array.

> This makes it easy to work with API data formatted as **JSON**.

## What about `.catch()`?

**`.catch()`** is used to handle any errors that occur during the fetch request or while parsing the response.

Examples of errors caught in `.catch()`:

- **Network failures** (no internet, server unreachable).
- **JSON parsing errors** (if response isn’t valid JSON).

> It is important to always add a `.catch()` handler to gracefully handle such errors and avoid unhandled promise rejections.

---

## Simple GET Request

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data); // parsed user data
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });
```

## POST Request with JSON

```js
const newUser = { name: "Atique Shahriar", email: "satique06@gmail.com" };

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // tells server the request body is JSON
  },
  body: JSON.stringify(newUser), // convert JS object to JSON string
})
  .then((res) => res.json())
  .then((data) => {
    console.log("Created user:", data);
  })
  .catch((err) => {
    console.error("Error creating user:", err);
  });
```

## DELETE Request

```js
fetch("https://api.example.com/user/123", {
  method: "DELETE",
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to delete");
    }
    return res.json();
  })
  .then((data) => {
    console.log("Deleted:", data);
  })
  .catch((err) => console.error(err));
```

## Handling HTTP Errors

Fetch only rejects the promise for **network errors** (e.g., no internet, server unreachable). HTTP errors like 404, 500 do **not** reject the promise automatically.

```js
fetch(url)
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    /* handle data */
  })
  .catch((err) => {
    /* handle network or thrown errors */
  });
```

## Fetch and CORS (Cross-Origin Resource Sharing)

- When making requests to a different domain, the browser enforces **CORS**.
- The server must include proper headers (e.g., **`Access-Control-Allow-Origin`**) to allow cross-origin requests.
- If the server doesn't allow it, the browser blocks the response.
- Fetch respects **CORS** rules automatically.

## Additional Useful Points

- **AbortController:** You can cancel a fetch request using AbortController.
- **Timeouts:** Fetch doesn't have built-in timeouts; you can implement it with AbortController or custom logic.
- **Credentials:** Use **`credentials: 'include'`** in options to send cookies with cross-origin requests.
- **Streaming:** You can consume large responses in chunks via **ReadableStream**.
- **Headers:** You can get/set request and response headers via the **Headers interface**.

## Summary

- **Fetch API** is a modern, **promise-based** HTTP client for browsers.
- It replaces **XMLHttpRequest** with simpler, cleaner syntax.
- Supports **all HTTP methods** and response types.
- Requires manual error handling for **HTTP status errors**.
- Works seamlessly with **async/await**.
- Handles **CORS** according to browser and server policies.
- Provides flexibility and power for network requests in web apps.

<br>

# Example

Link: https://fetch-apis0.netlify.app/

```js
const apiUrl = "https://jsonplaceholder.typicode.com/users";
const statusDiv = document.getElementById("status");
const usersTable = document.getElementById("usersTable");
const tbody = usersTable.querySelector("tbody");
const errorMsg = document.getElementById("errorMsg");

async function loadUsers() {
  try {
    statusDiv.textContent = "Loading users...";
    errorMsg.textContent = "";
    usersTable.style.display = "none";

    const res = await fetch(apiUrl);
    if (!res.ok) throw new Error("Failed to fetch users");

    const users = await res.json();

    tbody.innerHTML = "";

    users.forEach((user) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
        `;
      tbody.appendChild(tr);
    });

    statusDiv.textContent = "";
    usersTable.style.display = "table";
  } catch (err) {
    statusDiv.textContent = "";
    errorMsg.textContent = err.message;
  }
}

async function userForm(e) {
  e.preventDefault();
  errorMsg.textContent = "";
  statusDiv.textContent = "Adding user...";
  const newUser = {
    name: e.target.name.value.trim(),
    email: e.target.email.value.trim(),
  };

  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    if (!res.ok) throw new Error("Failed to add user");

    const createdUser = await res.json();

    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${createdUser.id}</td>
        <td>${createdUser.name}</td>
        <td>${createdUser.email}</td>
      `;
    tbody.appendChild(tr);

    statusDiv.textContent = "User added successfully!";

    setTimeout(() => (statusDiv.textContent = ""), 3000);
  } catch (err) {
    statusDiv.textContent = "";
    errorMsg.textContent = err.message;
  }
}
```
