# What are Cookies?

Cookies are small pieces of data (typically up to 4KB) stored on the user's browser.  
They are sent automatically with every HTTP request to the server for the cookie’s domain.  
Cookies can be set by the server via HTTP headers or by JavaScript on the client side.

**Main uses:**

- Authentication (session management)
- Personalization
- Tracking user activity

Cookies have properties such as expiration date, path, domain, Secure flag, HttpOnly, and SameSite policy.

## Syntax

```js
document.cookie =
  "cookie-name=cookie-value; expires=GMT-date-string; path=path; secure; SameSite=Strict | Lax | None>";
```

## Cookie Characteristics

| Feature            | Description                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| Size Limit         | ~4KB per cookie                                                                     |
| Sent with Requests | Yes, with every HTTP request matching domain/path                                   |
| Lifetime           | Session cookie (expires when browser closes) or persistent (set expiration date)    |
| Accessibility      | JavaScript can access cookies unless HttpOnly flag is set                           |
| Security Flags     | Secure (HTTPS only), HttpOnly (no JS access), SameSite (cross-site request control) |
| Scope              | Domain and Path specify cookie accessibility                                        |

## Cookie Properties

- **Name=Value:** The stored data.
- **Expires / Max-Age:** Expiration time of the cookie. **[Max-Age=0 tells the browser to delete the cookie immediately]**
- **Domain:** Which domain can access the cookie.
- **Path:** URL path scope.
- **Secure:** Cookie sent only over HTTPS.
- **HttpOnly:** Cannot be accessed via JavaScript (helps prevent XSS).
- **SameSite:** Controls cross-site request behavior (Strict, Lax, or None).

## How to Work with Cookies in JavaScript (Conceptual Overview)

- **Setting a Cookie:**
  The string format is: "name=value; property1; property2; ..."
- Date format: Fri, 31 Dec 2025 23:59:59 GMT

  ```js
  document.cookie =
    "username=Atique; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
  ```

- **Reading Cookies:**
  Cookies are returned as a single string separated by semicolons (`;`).

  ```js
  console.log(document.cookie);
  // Output: "username=Atique; theme=dark"
  ```

- **Parsing Cookies:**
  You can parse the cookie string to extract a specific cookie’s value by name.

  ```js
  function getCookie(name = "password") {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [key, value] = cookie.trim().split("=");
      if (key === name) {
        return value;
      }
    }
    return null; // cookie not found
  }
  console.log(getCookie()); // logs the password cookie value
  ```

- **Deleting a Cookie:**
  Set the cookie with an expiration date in the past to remove it.
  ```js
  function deleteCookie(name) {
    document.cookie =
      name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
  // Usage:
  deleteCookie("username");
  deleteCookie("password");
  ```

<br>

## Security Best Practices with Cookies

| Practice                   | Description                                       |
| -------------------------- | ------------------------------------------------- |
| Use Secure flag            | Cookies sent only over HTTPS                      |
| Use HttpOnly flag          | Prevent JavaScript access to sensitive cookies    |
| Use SameSite flag          | Control cross-site cookie sending to prevent CSRF |
| Keep size small            | Avoid large cookies for performance               |
| Set proper path and domain | Limit cookie scope to what’s needed               |

## Security Flags

| Flag     | Purpose                                        | How to Use                                | Notes & Details                                                                     |
| -------- | ---------------------------------------------- | ----------------------------------------- | ----------------------------------------------------------------------------------- |
| Secure   | Send cookie only over HTTPS                    | `name=value; Secure`                      | Protects cookie from being sent over insecure HTTP. Requires HTTPS.                 |
| HttpOnly | Prevent JavaScript access                      | Server-side only: `name=value; HttpOnly`  | Protects against XSS by hiding cookie from `document.cookie`. Cannot be set via JS. |
| SameSite | Controls cookie sending on cross-site requests | `Set-Cookie: name=value; SameSite=Strict` | Controls cross-site behavior to prevent CSRF attacks.                               |

## SameSite Attribute Values and Behavior

| Value  | Behavior                                                       | Use Case / Notes                                                                                                                      |
| ------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Strict | Cookie sent only on same-site requests                         | Most secure. Blocks all cross-site cookie sending.                                                                                    |
| Lax    | Cookie sent on same-site and some safe cross-site GET requests | Default in modern browsers. Allows top-level navigation from other sites; blocks unsafe cross-site requests like POST.                |
| None   | Cookie sent on all requests, including cross-site              | Allows cross-site usage (e.g., third-party cookies, embedded iframes). Must use Secure flag. Older browsers may not support properly. |

## Extra

- Use encodeURIComponent when setting cookie values with special characters.

- Use decodeURIComponent when reading cookie values to get original content.

<br>

### LocalStorage & Cookies: [Storage project live link](https://atique0x.github.io/Learning-Journey/Recap%20Javascript/Important%20Topics/19_cookies/project/index.html)

<br>

## Example

Link: [Cookie project live link](https://cookies-0.netlify.app/)

```js
const form = document.getElementById("cookieForm");

const cookiesTableBody = document.querySelector("#cookiesTable tbody");

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=/;`;
}

function getAllCookies() {
  const cookies = document.cookie ? document.cookie.split("; ") : [];
  const result = [];

  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split("=");
    const key = parts[0];
    const value = decodeURIComponent(parts.slice(1).join("="));
    result.push({ key, value });
  }

  return result;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function renderCookies() {
  const cookies = getAllCookies();
  cookiesTableBody.innerHTML = "";

  if (cookies.length === 0) {
    cookiesTableBody.innerHTML =
      '<tr><td colspan="3">No cookies found</td></tr>';
    return;
  }

  cookies.forEach(({ key, value }) => {
    const tr = document.createElement("tr");

    const tdKey = document.createElement("td");
    tdKey.textContent = key;

    const tdValue = document.createElement("td");
    tdValue.textContent = value;

    const tdAction = document.createElement("td");
    const delBtn = document.createElement("button");

    delBtn.textContent = "Delete";
    delBtn.className = "deleteBtn";

    delBtn.onclick = () => {
      deleteCookie(key);
      alert(`Cookie "${key}" deleted`);
      renderCookies();
    };

    tdAction.appendChild(delBtn);

    tr.appendChild(tdKey);
    tr.appendChild(tdValue);
    tr.appendChild(tdAction);

    cookiesTableBody.appendChild(tr);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const key = document.getElementById("cookieKey").value.trim();
  const value = document.getElementById("cookieValue").value.trim();
  if (key && value) {
    setCookie(key, value, 7);
    alert(`Cookie "${key}" set with value "${value}"`);
    form.reset();
    renderCookies();
  }
});

window.onload = () => {
  renderCookies();
};
```

<br>
<br>

# Comparison Table

| Feature       | Cookies                              | Local Storage                          | Session Storage                         |
| ------------- | ------------------------------------ | -------------------------------------- | --------------------------------------- |
| Storage Limit | ~4 KB                                | ~5–10 MB                               | ~5–10 MB                                |
| Expiration    | Manually set via `expires` attribute | Never expires (until manually cleared) | Expires when tab/window is closed       |
| Scope         | Sent with every HTTP request         | Stored only in the browser             | Stored only in the browser              |
| Accessed By   | Server & client                      | Client-side (JavaScript)               | Client-side (JavaScript)                |
| Use Case      | Authentication, tracking, small data | Caching, storing user settings         | Temporary form data, short-term storage |
| Security      | Less secure (sent in requests)       | Safer (not sent with requests)         | Safer (not sent with requests)          |
| Persistent?   | Yes, if `expires` is set             | Yes                                    | No                                      |
