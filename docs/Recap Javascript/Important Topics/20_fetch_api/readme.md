# Fetch API: Overview

#### Link: [Fetch API project live link](https://fetch-apis0.netlify.app/)

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

## Fetch API Options

| Option        | Type                     | Default         | Purpose / Example                                                      |
| ------------- | ------------------------ | --------------- | ---------------------------------------------------------------------- |
| `method`      | string                   | `'GET'`         | HTTP method (`GET`, `POST`, `PUT`, `DELETE`, etc.)                     |
| `headers`     | object                   | `{}`            | HTTP headers to send (`Content-Type`, `Authorization`, etc.)           |
| `body`        | string / FormData / Blob | `null`          | Request body for methods like `POST` or `PUT`                          |
| `mode`        | string                   | `'cors'`        | `'cors'`, `'no-cors'`, `'same-origin'` — affects cross-origin requests |
| `credentials` | string                   | `'same-origin'` | `'include'`, `'omit'`, `'same-origin'` — controls cookies/auth headers |

---

## Origin and Same-Origin Policy (SOP)

An **origin** is a combination of: protocol + host + port

**Example:** `https://example.com:443`

- Origins are important because of the **Same-Origin Policy (SOP)**, which restricts scripts on one origin from accessing data on another.

**Examples:**

| URL                        | Origin                              |
| -------------------------- | ----------------------------------- |
| `https://example.com`      | `https://example.com`               |
| `https://example.com:8080` | Different origin (port differs)     |
| `http://example.com`       | Different origin (protocol differs) |

---

## Same-Site vs Cross-Site Requests

- **Same-Site:** Requests initiated from a page go to the **same origin** as the page.
- **Cross-Site:** Requests initiated from a page go to a **different origin** than the page.

---

## CORS (Cross-Origin Resource Sharing)

CORS is a **browser security feature** that controls how resources on a web page can be requested from a **different domain (origin)** than the one that served the page.

### Why CORS is needed?

By default, browsers enforce the **Same-Origin Policy**, blocking requests to a different origin to protect users from malicious sites.

**Example:**

- Web page loaded from: `https://example.com`
- Attempted request to: `https://api.otherdomain.com` → **blocked** unless CORS is enabled.

How CORS works

- The **server** specifies allowed origins via special headers.
- Header: `Access-Control-Allow-Origin` → Browser allows request if origin matches.
- Without proper headers → request is blocked.

### Key CORS Headers

| Header                             | Purpose                                                                          |
| ---------------------------------- | -------------------------------------------------------------------------------- |
| `Access-Control-Allow-Origin`      | Specifies which origin(s) can access the resource (`https://example.com` or `*`) |
| `Access-Control-Allow-Methods`     | Allowed HTTP methods (`GET`, `POST`, `PUT`, `DELETE`, etc.)                      |
| `Access-Control-Allow-Headers`     | Allowed custom headers                                                           |
| `Access-Control-Allow-Credentials` | Whether credentials (cookies, auth headers) can be sent                          |
| `Access-Control-Max-Age`           | How long preflight results can be cached                                         |

### Simple vs Preflight Requests

- **Simple requests:** `GET`, `POST` (with certain content types) → browser sends request and checks response headers.
- **Preflight requests:** For complex requests (`PUT`, `DELETE`, custom headers) → browser sends an `OPTIONS` request first to check if allowed.

### Summary

- CORS allows **controlled access** to resources on different origins.
- **Server must explicitly allow** cross-origin requests.
- Without proper CORS headers → browser blocks access.

**Key Note:**

- **CORS:** You can access the response if the server allows your origin.
- **No CORS:** Browser sends the request but **you cannot read the response**.

---

## Credentials in Fetch

Credentials = user identification info (cookies, auth headers, etc.)

- **Default behavior:** Browser **doesn’t send credentials** in cross-origin requests.
- **To use credentials:**
  - Client: `credentials: 'include'` in fetch
  - Server: `Access-Control-Allow-Credentials: true`

| Value         | Behavior                                        |
| ------------- | ----------------------------------------------- |
| `include`     | Send cookies even for cross-origin requests     |
| `same-origin` | Send cookies only for same-origin requests      |
| `omit`        | Do not send cookies (default for CORS requests) |

---

## Content-Type

**Purpose:** Tells server or client what type of data is being sent or received.

- Used in **request headers** (Client → Server) and **response headers** (Server → Client).
- Ensures proper parsing and rendering of data.

| Content-Type              | Use Case                    |
| ------------------------- | --------------------------- |
| `application/json`        | Sending/receiving JSON data |
| `text/html`               | HTML pages                  |
| `text/plain`              | Plain text data             |
| `multipart/form-data`     | File uploads                |
| `image/png`, `image/jpeg` | Image files                 |

### [🔗 CORS WORKFLOW NOTE](https://github.com/atique0x/Learning-Journey/tree/main/docs/Recap%20Javascript/Important%20Topics/20_fetch_api/workflow-req-res.md)

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

## Summary

- **Fetch API** is a modern, **promise-based** HTTP client for browsers.
- It replaces **XMLHttpRequest** with simpler, cleaner syntax.
- Supports **all HTTP methods** and response types.
- Requires manual error handling for **HTTP status errors**.
- Works seamlessly with **async/await**.
- Handles **CORS** according to browser and server policies.
- Provides flexibility and power for network requests in web apps.
