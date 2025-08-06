class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const user1 = new Person("Atique", 25);
console.log(user1);

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get gettingPrice() {
        return `The price is ${this.price}bdt.`;
    }
    set settingPrice(value) {
        this.price = value;
    }
}

const newProduct1 = new Product("Mouse", 1500);
console.log(newProduct1.gettingPrice);
newProduct1.settingPrice = 2000;
console.log(newProduct1.gettingPrice);

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} doesn't makes a noise.`);
    }
    bark() {
        console.log(`${this.name} barks.`);
    }
}

const dog1 = new Dog("Rex");
dog1.speak(); // Rex makes a noise.
dog1.bark(); // Rex barks.

const employees = [
    {
        id: 1,
        name: "Alice",
        age: 28,
        department: "HR",
        position: "Recruiter",
        salary: 45000,
    },
    {
        id: 2,
        name: "Bob",
        age: 32,
        department: "IT",
        position: "Software Engineer",
        salary: 75000,
    },
    {
        id: 3,
        name: "Charlie",
        age: 25,
        department: "HR",
        position: "Coordinator",
        salary: 40000,
    },
    {
        id: 4,
        name: "David",
        age: 35,
        department: "Finance",
        position: "Accountant",
        salary: 55000,
    },
    {
        id: 5,
        name: "Eve",
        age: 29,
        department: "IT",
        position: "Frontend Developer",
        salary: 72000,
    },
    {
        id: 6,
        name: "Frank",
        age: 45,
        department: "Admin",
        position: "Manager",
        salary: 60000,
    },
    {
        id: 7,
        name: "Grace",
        age: 31,
        department: "HR",
        position: "HR Manager",
        salary: 65000,
    },
    {
        id: 8,
        name: "Heidi",
        age: 27,
        department: "Marketing",
        position: "SEO Specialist",
        salary: 48000,
    },
    {
        id: 9,
        name: "Ivan",
        age: 38,
        department: "IT",
        position: "Backend Developer",
        salary: 78000,
    },
    {
        id: 10,
        name: "Judy",
        age: 26,
        department: "Finance",
        position: "Analyst",
        salary: 52000,
    },
];

const addNewItem = {
    name: "Atique",
    age: 26,
    department: "Finance",
    position: "Analyst",
    salary: 52000,
};

class Functions {
    constructor(items) {
        this.items = items;
    }

    addItem(newItem) {
        if (
            typeof newItem === "object" &&
            !Array.isArray(newItem) &&
            newItem !== null &&
            newItem.name &&
            newItem.department &&
            newItem.salary
        ) {
            newItem.id = this.items.length + 1;
            this.items.push(newItem);
        } else {
            alert("Please provide a valid employee object.");
        }
    }

    printAll() {
        this.items.forEach((emp) => {
            console.log(`Employee #${emp.id}: ${emp.name}, ${emp.position}`);
        });
    }

    groupByDepartment() {
        return this.items.reduce((acc, curr) => {
            if (!acc[curr.department]) {
                acc[curr.department] = [];
            }
            acc[curr.department].push(curr.name);
            return acc;
        }, {});
    }

    averageSalary() {
        const total = this.items.reduce((sum, emp) => sum + emp.salary, 0);
        const avg = total / this.items.length;
        return `Average salary is ${avg}`;
    }
}

// Usage
const newInstance = new Functions(employees);

console.log("Initial count:", newInstance.items.length);

newInstance.addItem(addNewItem);

newInstance.printAll();

console.log("Updated count:", newInstance.items.length);

console.log("Grouped by Department:", newInstance.groupByDepartment());

console.log(newInstance.averageSalary());

//
//
//
//
//

let newUser;
const tableBody = document.getElementById("tableBody");

const userInfo = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const age = e.target.age.value.trim();
    const department = e.target.department.value;

    newUser = { name, email, age, department };
    userManagement.addUser(newUser);

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.age.value = "";
};
const activeStatusToggling = () => {
    console.log("Toggle Clicked");
    userManagement.activeToggle();
};

const deleteUser = () => {
    const userEmail = prompt("Type user id need to delete");
    if (userEmail !== null && userEmail.trim()) {
        console.log("User to delete:", userEmail);
        userManagement.deleteUserByEmail(userEmail.toLowerCase());
    } else {
        console.log("No email entered or operation cancelled.");
    }
};

const activeByDepartment = () => {
    const dept = prompt("Enter department to activate users:");
    if (dept !== null && dept.trim()) {
        userManagement.activeDepartment(dept.toLowerCase());
    } else {
        console.log("No department entered or operation cancelled.");
    }
};

class UserManagementSystem {
    constructor() {
        this.user = [];
        this.getFromLocalStorage();
    }

    addUser(user) {
        if (user.name && user.email && user.age) {
            this.user.push({
                id: crypto.randomUUID(),
                ...user,
                createdAt: new Date().toDateString(),
                isActive: true,
            });
            console.log(this.user);
            this.saveToLocalStorage();
            this.userCreateTable();
        } else {
            alert(
                "Please provide all the information like name, email and age"
            );
        }
    }

    saveToLocalStorage() {
        localStorage.setItem("users", JSON.stringify(this.user));
    }

    getFromLocalStorage() {
        const data = localStorage.getItem("users");
        if (data) {
            this.user = JSON.parse(data);
            this.countId = this.user.length;
            this.userCreateTable();
        }
    }

    userCreateTable() {
        tableBody.innerText = "";
        console.log(this.user);
        let count = 0;
        for (let user of this.user) {
            const tr = document.createElement("tr");
            count++;
            for (let key in user) {
                const td = document.createElement("td");

                if (key === "id") {
                    td.innerText = count;
                } else if (key === "isActive") {
                    td.innerText = user[key] === true ? "Active" : "Inactive";
                } else {
                    td.innerText = user[key];
                }
                tr.appendChild(td);
            }
            tableBody.appendChild(tr);
        }
    }

    activeToggle() {
        this.user.forEach((user) => {
            console.log(user);
            user.isActive = !user.isActive;
            this.saveToLocalStorage();
            this.userCreateTable();
        });
    }
    deleteUserByEmail(userEmail) {
        const isFind = this.user.find((user) => user.email == userEmail);
        if (isFind) {
            this.user = this.user.filter((user) => user.email != userEmail);
            this.saveToLocalStorage();
            this.userCreateTable();
        } else {
            console.log("User is not found");
        }
    }
    activeDepartment(department) {
        console.log("Deparment");
        this.user.forEach((user) => {
            if (user.department.toLowerCase() === department) {
                user.isActive = true;
            }
        });
        userManagement.saveToLocalStorage();
        userManagement.userCreateTable();
    }
}
const userManagement = new UserManagementSystem();
