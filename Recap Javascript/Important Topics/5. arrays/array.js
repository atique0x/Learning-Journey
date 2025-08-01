//First Table
{
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
            <td>${eachObject.address}</td>
            <td>${eachObject.username.firstName} ${
                eachObject.username.lastName
            }</td>
            <td>${eachObject.isActive ? "Active" : "Inactive"}</td>
            <td>${eachObject.phone}</td>
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
                              return `${
                                  key[0].toUpperCase() + key.slice(1)
                              }: ${value}`;
                          })
                          .join("\n")
            }</td>
            <td>${
                eachObject.theme()[0].toUpperCase() +
                eachObject.theme().slice(1)
            }</td>`;

            tableBody.appendChild(newRow);
        });
    }
    // showingData();
}

//Second Table
{
    const users = [
        {
            username: "  atique shahriar  ",
            email: "atique.shahriar@example.com",
            roles: ["admin", "editor", "contributor"],
            scores: [95, 87, null, 76, 88],
            settings: {
                theme: "dark",
                notifications: true,
                fontSize: "medium",
                autoSave: true,
            },
            lastLogin: "2025-07-28T10:15:00Z",
        },
        {
            username: "ayesha khan    ",
            email: "  ayesha.khan@example.com ",
            roles: ["user"],
            scores: [45, 55, 65, null],
            settings: {
                theme: "light",
                notifications: false,
                fontSize: "small",
            },
            lastLogin: "2025-07-27T22:40:00Z",
        },
        {
            username: "rafi hasan",
            email: "rafi@example.com",
            roles: ["moderator", "user"],
            scores: [],
            settings: { notifications: true },
            lastLogin: null,
        },
        {
            username: "   nadia islam",
            email: "nadia.islam@example.com",
            roles: [],
            scores: [100, 100, 98, 99],
            settings: { notifications: true, fontSize: "large" },
            lastLogin: "2025-07-25T05:00:00Z",
        },
        {
            username: "mehedi hassan",
            email: "mehedi@example.com",
            roles: ["moderator", "admin"],
            scores: [null, null, 70, 65],
            settings: { theme: "dark", notifications: false, autoSave: false },
            lastLogin: "2025-07-29T14:20:00Z",
        },
        {
            username: "sabina akter",
            email: "sabina.akter@example.com",
            roles: ["guest"],
            scores: [5, 10, null],
            settings: null,
            lastLogin: "2025-07-30T08:30:00Z",
        },
        {
            username: "farhan rahman",
            email: "farhan.rahman@example.com",
            roles: ["editor", "user"],
            scores: [85, 90, 88, 92],
            settings: { notifications: true, darkMode: true },
            lastLogin: "2025-07-30T12:00:00Z",
        },
        {
            username: "tania sultana",
            email: "tania@example.com",
            roles: ["guest"],
            scores: [2, null, 5, 7],
            settings: { notifications: false, darkMode: false },
            lastLogin: "2025-07-28T20:45:00Z",
        },
        {
            username: "zahid hossain",
            email: " zahid.hossain@example.com ",
            roles: ["user"],
            scores: [9, 6, null, 15],
            settings: { darkMode: false, autoSave: true },
            lastLogin: null,
        },
        {
            username: "lubna rahim",
            email: "lubna.rahim@example.com",
            roles: [],
            scores: [],
            settings: null,
            lastLogin: "2025-07-26T16:00:00Z",
        },
    ];

    console.log(users[0]);
    console.log(users.slice(2));
    console.log(users.slice(3, 6));
    console.log(
        users.splice(
            3,
            1,
            {
                username: "zainul abedin",
                email: "zainul.abedin@example.net",
                roles: ["viewer", "analyst"],
                scores: [82, null, 91, 87, 78],
                settings: {
                    theme: "solarized",
                    notifications: true,
                    fontSize: "large",
                    language: "en",
                },
                lastLogin: "2025-07-30T09:05:00Z",
            },
            {
                username: "maria fernandez",
                email: "  maria.f.fernandez@example.org ",
                roles: ["editor", "reviewer", "user"],
                scores: [null, 69, 73, 85, 90],
                settings: {
                    theme: "light",
                    notifications: false,
                    darkMode: false,
                    autoSave: true,
                },
                lastLogin: "2025-07-29T18:20:00Z",
            },
            {
                username: "li wei",
                email: "liwei@example.com",
                roles: [],
                scores: [],
                settings: null,
                lastLogin: null,
            }
        )
    );

    console.log(users);

    function filteredByNotification(usersData = users) {
        const notifiedUsers = usersData.filter(
            (user) => user.settings?.notifications === true
        );
        display(notifiedUsers);
    }

    function slicingUser(usersData = users) {
        const newUsers = usersData.slice(3, 8);
        display(newUsers);
    }

    function cleanUserName(usersData = users) {
        usersData.forEach((user) => {
            user.username = user.username
                .trim()
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ");
        });
        display();
    }

    function analyzeScore(usersData = users) {
        usersData.forEach((user) => {
            user.scores =
                user.scores.length === 0
                    ? 0
                    : user.scores
                          .map((score) => score ?? 0)
                          .reduce((total, curr) => total + curr);
        });
        display();
    }

    function roleModified(usersData = users) {
        usersData.forEach((user) => {
            user.roles = user.roles.includes("admin")
                ? "Admin"
                : user.roles.includes("editor")
                ? "Editor"
                : user.roles.includes("moderator")
                ? "Moderator"
                : user.roles.includes("user")
                ? "User"
                : "Guest";
        });
        display();
    }

    function sortByScore(usersData = users) {
        usersData.sort((a, b) => a.scores - b.scores);
        display();
    }

    function display(usersData = users) {
        const table = document.getElementById("tableTwoId");
        table.innerHTML = "";

        const tableHead = document.createElement("thead");
        table.appendChild(tableHead);

        const tableHeadRow = document.createElement("tr");
        tableHead.appendChild(tableHeadRow);

        Object.keys(usersData[0]).map((eachKey) => {
            const headData = document.createElement("th");
            headData.innerText = eachKey[0].toUpperCase() + eachKey.slice(1);
            tableHead.appendChild(headData);
        });

        const tableBody = document.createElement("tbody");

        table.appendChild(tableBody);

        usersData.map((user) => {
            const tableRow = document.createElement("tr");
            tableRow.innerHTML = `<td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.roles}</td>
        <td>${user.scores}</td>
        <td>${
            user.settings == null
                ? "Default"
                : Object.entries(user.settings)
                      .map(
                          ([key, value]) =>
                              `${
                                  key[0].toUpperCase() +
                                  key.slice(1).toLowerCase()
                              }: ${value}`
                      )
                      .sort()
                      .join(" ")
        }</td>
        <td>${new Date(user.lastLogin).toDateString()}</td>`;

            tableBody.appendChild(tableRow);
        });
    }
}

//Array Reduce
{
    console.log("Array Reduce_________________");

    const numbers = [1, 2, 3, 4];
    const result = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(result); // 10

    const words = ["JavaScript", "is", "fun"];
    const text = words.reduce((acc, curr) => {
        console.log(acc, curr);
        return acc + " " + curr;
    }, "");
    console.log(text);

    const nested = [[1, 2], [3, 4], [5]];
    const flatArr = nested.reduce((acc, cur) => {
        console.log(acc, cur);
        return acc.concat(cur);
    });
    console.log(flatArr);

    const fruits = ["apple", "banana", "apple", "orange", "banana"];

    //traditional way
    const countFruits = {};
    for (let fruit of fruits) {
        if (countFruits[fruit]) {
            countFruits[fruit] += 1;
        } else {
            countFruits[fruit] = 1;
        }
    }
    console.log(countFruits);

    const fruitsCount = fruits.reduce((acc, cur) => {
        if (acc[cur]) {
            acc[cur] += 1;
        } else {
            acc[cur] = 1;
        }
        return acc;
    }, {});

    console.log(fruitsCount);

    const groupedUsers = {};
    const users = [
        { name: "Alice", role: "admin" },
        { name: "Bob", role: "user" },
        { name: "Charlie", role: "admin" },
        { name: "David", role: "user" },
    ];

    for (let user of users) {
        if (!groupedUsers[user.role]) {
            groupedUsers[user.role] = [];
        }
        groupedUsers[user.role].push(user);
    }
    console.log(groupedUsers);

    const userGrouped = users.reduce((acc, cur) => {
        if (!acc[cur.role]) {
            acc[cur.role] = [];
        }
        acc[cur.role].push(cur);
        return acc;
    }, {});
    console.log(userGrouped);

    const students = [
        { name: "A", score: 80 },
        { name: "B", score: 70 },
        { name: "C", score: 90 },
    ];

    const averege = students.reduce((acc, cur, index, students) => {
        return acc + cur.score / students.length;
    }, 0);
    console.log(averege);

    const items = [
        { id: 1, value: "a" },
        { id: 2, value: "b" },
        { id: 3, value: "c" },
    ];

    const reduceItem = items.reduce((acc, cur) => {
        acc[cur.id] = cur.value;
        return acc;
    }, {});
    console.log(reduceItem);

    const employees = [
        { name: "Alice", department: "HR" },
        { name: "Bob", department: "IT" },
        { name: "Charlie", department: "HR" },
    ];
    const groupedEmployee = employees.reduce((acc, cur) => {
        if (!acc[cur.department]) {
            acc[cur.department] = [];
        }
        acc[cur.department].push(cur.name);
        return acc;
    }, {});
    console.log(groupedEmployee);
}
