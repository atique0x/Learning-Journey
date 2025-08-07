# JavaScript Classes (ES6+)

A **class** in JavaScript is a blueprint for creating objects with shared structure (properties) and behavior (methods). It makes object-oriented programming easier and cleaner compared to using constructor functions and prototypes.

Defines a new class. A class can contain a constructor and methods.

```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
```

## Constructor

A special method for setting up (initializing) new objects created from the class. Runs automatically when `new` is used.

-   Each class can have **only one** constructor.
-   It’s optional. If not present, JavaScript adds an empty one by default.

```js
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
user1.greet(); // Output: Hi, I'm Atique and I'm 25 years old.
```

## Getter & Setter

```js
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
```

## Extends

Creates a subclass that inherits properties and methods from a parent class.

```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks.`);
    }
}

const dog1 = new Dog("Rex");
dog1.speak(); // Rex makes a noise.
dog1.bark(); // Rex barks.
```

## super

Used to call the constructor or methods of the parent class.  
Must be called before using `this` in a subclass constructor.

```js
super(args); // call parent constructor
super.methodName(); // call parent method
```

```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name); // Calls Animal's constructor
        this.color = color;
    }

    describe() {
        super.speak(); // Calls Animal's speak()
        console.log(`${this.name} is a ${this.color} cat.`);
    }
}

const kitty = new Cat("Whiskers", "white");
kitty.describe();
// Whiskers makes a noise.
// Whiskers is a white cat.
```

## Summary Table

| Keyword       | Purpose                                             |
| ------------- | --------------------------------------------------- |
| `class`       | Defines a class (blueprint for objects)             |
| `constructor` | Initializes class properties when creating instance |
| `extends`     | Inherits from another class                         |
| `super`       | Calls parent constructor or methods                 |

## Example-1

```js
//data
{
    id: 1,
    name: "Alice",
    age: 28,
    department: "HR",
    position: "Recruiter",
    salary: 45000,
}
```

```js
//add item
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
```

<br><br>

## Example - 2 (User Management)

> Link: https://j-class-practice.netlify.app/

**Overview**

-   Add users via a form
-   Display users in a table
-   Toggle active/inactive status
-   Delete users by email
-   Activate users by department
-   Store all data in browser localStorage

```js
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
            const td = document.createElement("td");
            const button = document.createElement("button");
            button.innerText = "Active Toggle";
            button.onclick = () => {
                user.isActive = !user.isActive;
                this.saveToLocalStorage();
                this.userCreateTable();
            };
            td.appendChild(button);
            tr.appendChild(td);
            tableBody.appendChild(tr);
        }
        console.log(tableBody);
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
```
