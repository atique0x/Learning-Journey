var userId;
userId = 1234; // number
userId = "1234"; // string
var currentStatus;
currentStatus = "success"; // ✅ Allowed
var user = {
    id: 1,
    name: "Alice",
    age: 30,
};
console.log(user);
var greetUser = function (name) {
    return "Hello, ".concat(name, "!");
};
var greetUser2 = function (name) {
    return "Hello, ".concat(name, "!");
};
var user1 = {
    id: 101,
    name: "Atique",
    email: "satique06@gmail.com",
};
var task1 = {
    id: 401,
    title: "Typescript",
    status: "in-progress",
    priority: "high",
    assignee: user1,
    tags: ["typescript", "learning", "frontend"],
};
var updateTaksStatus = function (task1, status) {
    task1.status = status;
    return task1;
};
var updateAnotherTaksStatus = function (task, status) {
    task.status = status;
    return task;
};
console.log(updateTaksStatus(task1, "done"));
console.log(updateAnotherTaksStatus(task1, "todo"));
var admin1 = {
    id: 1,
    name: "Asif",
    age: 26,
    address: {
        city: {
            name: "Mirpur",
            postcode: 1216,
        },
        house: {},
    },
    role: {
        role_id: 1,
        name: "Admin",
    },
};
