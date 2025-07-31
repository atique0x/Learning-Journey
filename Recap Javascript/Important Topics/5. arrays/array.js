const users = [
    { id: 1, name: "Atique", roles: ["admin"] },
    { id: 2, name: "Akash", roles: ["editor"] },
];

// Adding a new user dynamically
users.push({ id: 3, name: "Asif", roles: ["viewer"] });
console.log(users); // 3

//Remove the last user when they log out or are deleted.
const lastUser = users.pop();
console.log(lastUser, users);

//Add a user at the start — e.g., VIP users should appear first.
users.unshift({ id: 0, name: "Rafid", roles: ["vip", "admin"] });
console.log(users);

//Remove the fisrt index user.
const firstUser = users.shift();
console.log(firstUser);

const allUsers = [
    {
        username: { firstName: "Atique", lastName: "Shahriar" },
        address: "Dhaka",
        phone: 1234,
        isActive: true,
        role: undefined,
        scores: [1, 2, 3, null],
        settings: null,
        theme: function () {
            return "dark";
        },
    },
    {
        username: { firstName: "Ayesha", lastName: "Khan" },
        address: "Chittagong",
        phone: 5678,
        isActive: false,
        role: "User",
        scores: [5, 4, null],
        settings: { notifications: true },
        theme: function () {
            return "light";
        },
    },
    {
        username: { firstName: "Rafi", lastName: "Hasan" },
        address: "Sylhet",
        phone: 9876,
        isActive: true,
        role: "Admin",
        scores: [10, 8, 7],
        settings: { notifications: true },
        theme: function () {
            return this.settings?.darkMode ? "dark" : "light";
        },
    },
    {
        username: { firstName: "Nadia", lastName: "Islam" },
        address: "Rajshahi",
        phone: 4321,
        isActive: false,
        role: null,
        scores: [],
        settings: { notifications: false, fontSize: "large" },
        theme: function () {
            return "default";
        },
    },
    {
        username: { firstName: "Mehedi", lastName: "Hassan" },
        address: "Barisal",
        phone: 7771,
        isActive: true,
        role: "Moderator",
        scores: [7, null, 6],
        settings: { darkMode: true, autoSave: false },
        theme: function () {
            return this.settings?.darkMode ? "dark" : "light";
        },
    },
    {
        username: { firstName: "Sabina", lastName: "Akter" },
        address: "Khulna",
        phone: 8890,
        isActive: false,
        role: undefined,
        scores: [null, null, null],
        settings: null,
        theme: function () {
            return "default";
        },
    },
    {
        username: { firstName: "Farhan", lastName: "Rahman" },
        address: "Jessore",
        phone: 3344,
        isActive: true,
        role: "Editor",
        scores: [8, 9, 10],
        settings: { notifications: true, fontSize: "medium" },
        theme: function () {
            return "light";
        },
    },
    {
        username: { firstName: "Tania", lastName: "Sultana" },
        address: "Mymensingh",
        phone: 9999,
        isActive: false,
        role: "Guest",
        scores: [2, null, 5],
        settings: { notifications: false, darkMode: false },
        theme: function () {
            return this.settings?.darkMode ? "dark" : "light";
        },
    },
    {
        username: { firstName: "Zahid", lastName: "Hossain" },
        address: "Comilla",
        phone: 2468,
        isActive: true,
        role: "User",
        scores: [9, 6, null],
        settings: { darkMode: false, autoSave: true },
        theme: function () {
            return this.settings?.darkMode ? "dark" : "light";
        },
    },
    {
        username: { firstName: "Lubna", lastName: "Rahim" },
        address: "Noakhali",
        phone: 1357,
        isActive: false,
        role: null,
        scores: [],
        settings: null,
        theme: function () {
            return "default";
        },
    },
];

function filteredData(profiles = allUsers) {
    const filteredData = profiles.filter(
        (profile) => profile.settings?.notifications == true
    );
    console.log(filteredData);
    showingData(filteredData);
}

function showingData(profiles = allUsers) {
    const table = document.getElementById("tableId");
    table.innerHTML = "";

    const tableHead = document.createElement("thead");
    table.appendChild(tableHead);

    const tableHeadRow = document.createElement("tr");
    tableHead.appendChild(tableHeadRow);

    Object.keys(profiles[0]).map((eachKey) => {
        const headData = document.createElement("th");
        headData.innerText = eachKey[0].toUpperCase() + eachKey.slice(1);
        tableHead.appendChild(headData);
    });

    const tableBody = document.createElement("tbody");

    table.appendChild(tableBody);

    profiles.map((eachObject) => {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
    <td>${eachObject.username.firstName} ${eachObject.username.lastName}</td>
    <td>${eachObject.address}</td>
    <td>${eachObject.phone}</td>
    <td>${eachObject.isActive ? "Active" : "Inactive"}</td>
    <td>${eachObject.role ?? "Guest"}</td>
    <td>${
        eachObject.scores.length == 0
            ? "---"
            : eachObject.scores.includes(null)
            ? eachObject.scores.map((score) => score ?? 0)
            : eachObject.scores
    }</td>
    <td>${
        eachObject.settings == null
            ? "Null"
            : Object.entries(eachObject.settings)
                  .map(([key, value]) => {
                      return `${key[0].toUpperCase() + key.slice(1)}: ${value}`;
                  })
                  .join("\n")
    }</td>
    <td>${
        eachObject.theme()[0].toUpperCase() + eachObject.theme().slice(1)
    }</td>
    `;
        tableBody.appendChild(newRow);
    });
}

showingData();
