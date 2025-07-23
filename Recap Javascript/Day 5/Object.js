// 🧑‍💻 User Object with Methods, Getter, Setter, and Nested Object
const user = {
    username: "atique25",
    firstName: "Atique",
    lastName: "Shahriar",
    email: "atique@example.com",
    isActive: true,

    profile: {
        fullName: "Atique Shahriar",
        city: "Dhaka",
    },

    // Regular method
    fullName() {
        return this.firstName + " " + this.lastName;
    },

    // Method with nested property
    greet() {
        return `Welcome, ${this.profile.fullName}`;
    },
};

// 🔧 Add property and method dynamically
user.workPlace = "Dhaka";
user.workProfile = function () {
    return this.workPlace;
};

// 🔍 Access values
console.log("Invalid Access (undefined):", user.profile.fu); // ❌ undefined
console.log("Full Name (method):", user.fullName()); // ✅ "Atique Shahriar"
console.log("Greet:", user.greet()); // ✅ "Welcome, Atique Shahriar"

// 🧾 Inspect object
console.log("User Object:", user);
console.log("Object.keys():", Object.keys(user)); // Keys (top-level only)
console.log("Object.values():", Object.values(user)); // Values (top-level only)

// 🧬 Prototype Inheritance (shallow copy)
const inheritedUser = Object.create(user);
console.log("Inherited User via Object.create():", inheritedUser);

// 🧠 Type check
console.log("typeof user:", typeof user); // "object"

// 🔁 JSON stringify
const userString = JSON.stringify(user);
console.log("Stringified User:", userString);

// 🧍‍♂️ Person Object with getter/setter
const person = {
    firstName: "Atique",
    lastName: "Shahriar",

    // ❌ Incorrect: evaluated immediately (undefined undefined)
    fullName: this.firstName + " " + this.lastName,

    // ✅ Correct method
    fullName2() {
        return this.firstName + " " + this.lastName;
    },

    // ✅ Another method style
    fullName3: function () {
        return this.firstName + " " + this.lastName;
    },

    // ✅ Getter
    get fullName4() {
        return this.firstName + " " + this.lastName;
    },

    // ✅ Setter
    set fullName5(name) {
        const parts = name.split(" ");
        this.firstName = parts[0] || "";
        this.lastName = parts[1] || "";
    },
};

// 🧪 Testing getter/setter and methods
console.log("Incorrect Full Name (evaluated too early):", person.fullName); // undefined undefined
console.log("fullName2():", person.fullName2()); // "Atique Shahriar"
console.log("fullName3():", person.fullName3()); // "Atique Shahriar"
console.log("fullName4 (getter):", person.fullName4); // "Atique Shahriar"

// 🔁 Updating values using direct assignment and setter
person.firstName = "Ashik";
person.fullName5 = "Golam Faiyaz"; // sets firstName and lastName via setter

console.log("Updated firstName:", person.firstName); // "Golam"
console.log("Updated fullName2():", person.fullName2()); // "Golam Faiyaz"
console.log("Updated fullName3():", person.fullName3()); // "Golam Faiyaz"
console.log("Updated fullName4 (getter):", person.fullName4); // "Golam Faiyaz"

// 🧱 Constructor Function
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// 👨 Creating instances
const p1 = new Person("Atique", "Shahriar", 25, "black");
const p2 = new Person("Golam", "Faiyaz", 27, "black");

// 🧩 Adding instance property
p1.address = "Mirpur-10, Dhaka";

// 🌐 Prototype property (shared by all)
Person.prototype.country = "Bangladesh";

// 🧾 Final Output
console.log("Person 1:", p1);
console.log("Person 2:", p2);
