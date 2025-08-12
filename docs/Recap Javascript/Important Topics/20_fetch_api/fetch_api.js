//Simple GET request

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//POST request with JSON body
const newUser = {
  id: 11,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newUser),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//Example with Async/Await

async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log("Response", response);
    console.log("Response Status: ", response.status);
    console.log("Response Ok: ", response.ok);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
fetchUser();

//
//
const loadBtn = document.getElementById("loadBtn");
const output = document.getElementById("output");

loadBtn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
      return res.json();
    })
    .then((users) => {
      output.innerHTML = "";

      users.forEach((user) => {
        const userDiv = document.createElement("div");
        userDiv.style.border = "1px solid #ccc";
        userDiv.style.padding = "10px";
        userDiv.style.marginBottom = "10px";
        userDiv.style.borderRadius = "5px";

        userDiv.innerHTML = `
            <strong>${user.name} (${user.username})</strong><br>
            Email: ${user.email}<br>
            Phone: ${user.phone}<br>
            Website: <a href="http://${user.website}" target="_blank">${user.website}</a><br>
            Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}<br>
            Company: ${user.company.name} - <em>${user.company.catchPhrase}</em>
          `;

        output.appendChild(userDiv);
      });
    })
    .catch((err) => {
      output.textContent = "Error: " + err.message;
    });
});

/*

User Management

*/
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
