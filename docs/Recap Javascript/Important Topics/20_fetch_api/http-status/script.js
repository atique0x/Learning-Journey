function statusChech(status) {
  switch (status) {
    // Success
    case 200:
      console.log("200   OK: Request succeeded");
      break;
    case 201:
      console.log("201   Created: Resource successfully created");
      break;
    case 204:
      console.log("204   No Content: Request succeeded but nothing returned");
      break;

    // Client Errors
    case 400:
      console.log("400   Bad Request: Invalid input");
      break;
    case 401:
      console.log("401   Unauthorized: Please login");
      break;
    case 403:
      console.log("403   Forbidden: Access denied");
      break;
    case 404:
      console.log("404   Not Found: Resource does not exist");
      break;
    case 405:
      console.log("405   Method Not Allowed: Wrong HTTP method");
      break;
    case 429:
      console.log("429   Too Many Requests: Rate limit exceeded");
      break;

    // Server Errors
    case 500:
      console.log(
        "500   Internal Server Error: Something went wrong on server"
      );
      break;
    case 502:
      console.log("502   Bad Gateway: Upstream server failed");
      break;
    case 503:
      console.log("503   Service Unavailable: Server overloaded or down");
      break;
    case 504:
      console.log("504   Gateway Timeout: Upstream server did not respond");
      break;

    // Default
    default:
      console.log(`${status}   Unexpected status code`);
  }
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    statusChech(res.status);
    return res.json();
  })
  .then((data) => data)
  .catch((err) => console.log(err));

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ user: 1 }),
})
  .then((res) => {
    statusChech(res.status);
    return res.json();
  })
  .then((data) => data)
  .catch((err) => console.log(err));
