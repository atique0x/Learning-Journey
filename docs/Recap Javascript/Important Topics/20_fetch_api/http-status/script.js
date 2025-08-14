function statusCheck(status) {
  switch (status) {
    // Success
    case 200:
      alert("200   OK: Request succeeded");
      break;
    case 201:
      alert("201   Created: Resource successfully created");
      break;
    case 204:
      alert("204   No Content: Request succeeded but nothing returned");
      break;

    // Client Errors
    case 400:
      alert("400   Bad Request: Invalid input");
      break;
    case 401:
      alert("401   Unauthorized: Please login");
      break;
    case 403:
      alert("403   Forbidden: Access denied");
      break;
    case 404:
      alert("404   Not Found: Resource does not exist");
      break;

    // Server Errors
    case 500:
      alert("500   Internal Server Error: Something went wrong on server");
      break;
    case 502:
      alert("502   Bad Gateway: Upstream server failed");
      break;
    case 503:
      alert("503   Service Unavailable: Server overloaded or down");
      break;
    case 504:
      alert("504   Gateway Timeout: Upstream server did not respond");
      break;

    // Default
    default:
      alert(`${status}   Unexpected status code`);
  }
}

function fetchUserData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      statusCheck(res.status);
      return res.json();
    })
    .then((data) => data)
    .catch((err) => console.log(err));
}

function fetchWrongData() {
  fetch("invalid")
    .then((res) => {
      statusCheck(res.status);
      return res.json();
    })
    .then((data) => data)
    .catch((err) => console.log(err));
}

function postUserData() {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: 1 }),
  })
    .then((res) => {
      statusCheck(res.status);
      return res.json();
    })
    .then((data) => data)
    .catch((err) => console.log(err));
}
