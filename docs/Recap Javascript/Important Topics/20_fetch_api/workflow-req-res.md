# CORS Workflow

## 1. Simple Request (No Preflight)

### When it occurs

- **Methods:** `GET`, `POST`
- **Headers:** Only CORS-safelisted headers:
  - `Accept`
  - `Accept-Language`
  - `Content-Language`
  - `Content-Type` with values: `application/x-www-form-urlencoded`, `multipart/form-data`, or `text/plain`
- No custom headers (like `Authorization`, `X-Token`)

### Client (Browser) workflow:

1. JavaScript code makes a fetch request:

   ```js
   fetch("https://api.example.com/data", {
     method: "GET",
     credentials: "include", // Sends cookies if server allows
   })
     .then((res) => res.json())
     .then((data) => console.log(data))
     .catch((err) => console.error(err));
   ```

2. Browser automatically adds the Origin header:
   ```
   Origin: https://mywebsite.com
   ```
   #### This tells the server: “Which origin is making this request?”

### Server workflow

- Server receives the request and checks the Origin.
- Server decides whether to allow this origin:

  ```pgsql
  HTTP/1.1 200 OK
  Access-Control-Allow-Origin: https://mywebsite.com
  Access-Control-Allow-Credentials: true  // Only if credentials: include
  Content-Type: application/json
  ```

### Browser validation

- Browser checks the `Access-Control-Allow-Origin` header.
- If it matches the requesting origin (https://mywebsite.com), JS code can access the response.
- If credentials (cookies, HTTP auth) were sent:
  - Server must respond with `Access-Control-Allow-Credentials: true`.
  - `Access-Control-Allow-Origin` cannot be \* in this case.

### Summary Table

| Step | Client action                   | Server action                                                | Browser validation          |
| ---- | ------------------------------- | ------------------------------------------------------------ | --------------------------- |
| 1    | Sends GET/POST/HEAD with Origin | Receives request, processes it                               | Checks Origin in response   |
| 2    | Waits for response              | Adds Access-Control-Allow-Origin (and credentials if needed) | Grants JS access if allowed |
| 3    | Reads response                  | Sends response body                                          | JS can access response data |

---

## 2. Preflight Request (OPTIONS)

### When it occurs

- Methods: `PUT`, `DELETE`, `PATCH`
- Custom headers present (`Authorization`, `X-Token`, etc.)
- Content-Type **not** `application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`

> Example: PUT with Authorization header or JSON body triggers preflight.

### Client (Browser) workflow:

```js
fetch("https://api.example.com/data", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer xyz",
  },
  body: JSON.stringify({ key: "value" }),
  credentials: "include", // include cookies
  mode: "cors", // enforce CORS check
});
```

**Browser detects non-simple request → sends preflight OPTIONS request:**

```pgsql
OPTIONS /data HTTP/1.1
Host: api.example.com
Origin: https://mywebsite.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Content-Type, Authorization
```

- `Access-Control-Request-Method`: Method intended for actual request.
- `Access-Control-Request-Headers`: Headers intended for actual request.

### Server workflow

1. Server receives OPTIONS request (preflight).
2. Checks if origin, method, and headers are allowed
3. Responds with CORS headers:

   ```pgsql
   HTTP/1.1 204 No Content
   Access-Control-Allow-Origin: https://mywebsite.com
   Access-Control-Allow-Methods: GET, POST, PUT, DELETE
   Access-Control-Allow-Headers: Content-Type, Authorization
   Access-Control-Allow-Credentials: true
   Access-Control-Max-Age: 3600  // Cache preflight for 1 hour
   ```

- If the server rejects method or headers → browser blocks actual request

### Browser validation

- If `Access-Control-Allow-Methods` includes requested method **and** `Access-Control-Allow-Headers` includes requested headers → browser sends actual request.
- Otherwise, request is blocked before reaching the server.

### Actual Request (after preflight passes)

```pgsql
PUT /data HTTP/1.1
Host: api.example.com
Origin: https://mywebsite.com
Content-Type: application/json
Authorization: Bearer xyz
Cookie: sessionId=abc123
```

- Server processes the request as normal and responds:

```pgsql
HTTP/1.1 200 OK
Access-Control-Allow-Origin: https://mywebsite.com
Access-Control-Allow-Credentials: true
Content-Type: application/json

{ "status": "success" }

```

- Browser allows JS to read response.

<br><br>

## HTTP Methods

| Method     | Purpose                                                        |
| ---------- | -------------------------------------------------------------- |
| **GET**    | Retrieve data from a server                                    |
| **POST**   | Create a new resource on the server                            |
| **PUT**    | Replace a resource completely or create it if it doesn’t exist |
| **PATCH**  | Update part of a resource                                      |
| **DELETE** | Delete a resource from the server                              |

<br>

## Key differences between `POST` and `PUT`

| Feature                     | POST                       | PUT                                 |
| --------------------------- | -------------------------- | ----------------------------------- |
| ID generation               | Server generates unique ID | Client specifies ID                 |
| Multiple identical requests | Creates multiple resources | Overwrites same resource            |
| Typical usage               | Create new resource        | Update or replace existing resource |
