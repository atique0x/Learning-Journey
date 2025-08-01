# JavaScript Cookies Guide

## What Are Cookies?

Cookies are small data files stored in the browser to remember user-specific information like:

-   Login details
-   Theme preferences
-   Language settings
-   Session info

They help maintain state and personalize the user experience.

---

## Basic Cookie Behavior

-   Cookies are stored as **name=value** pairs.
-   Automatically **sent to the server with each HTTP request** (as part of the request header).
-   Can be **created, read, modified, and deleted** using the `document.cookie` property in JavaScript.

## Creating a Cookie

```js
document.cookie = "username=John Doe";
```

## Add Expiry & Path

```js
document.cookie =
    "username=John Doe; expires=Thu, 18 Dec 2030 12:00:00 UTC; path=/";
```

## Cookie Details

### `expires`

-   Specifies the **UTC expiry date** of the cookie.
-   If omitted, the cookie becomes a **session cookie** and is deleted when the browser closes.

### `path`

-   Defines the URL path where the cookie is valid.
-   Default: current page path.
-   Common setting: `/` (makes the cookie available site-wide).

---

## Delete a Cookie

Set `expires` to a past date and include the correct path to delete a cookie:

```js
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
```

### Limitations & Tips

-   **Max size**: ~4 KB per cookie.
-   **Security**: Cookies are included in every HTTP request.  
    ➤ Don't store passwords, tokens, or large data in cookies.
-   **Privacy**: Cookies are not private — accessible via `document.cookie`.
