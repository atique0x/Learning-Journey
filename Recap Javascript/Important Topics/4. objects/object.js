const user = {
    name: "Atique",
    age: 25,
    isActive: false,
    isDeleted: true,
    greet: function () {
        console.log(`Hello, ${this.name}`);
    },
};

console.log(user.isActive); // false
user.isActive = true; // Updating property
console.log(user.isActive); // true
user.email = "satique06@gmail.com"; // Adds a new property
delete user.isDeleted; // Removes a property
//Objects are mutable, so you can freely add, update, or delete keys.
console.log(user);

const { age } = user;
console.log(age);

const keyOfObj = Object.keys(user); // ['name', 'age', 'isActive', 'greet', 'email']
console.log(Array.isArray(keyOfObj), keyOfObj);

const valueOfObj = Object.values(user); // ['Atique', 25, true, function, 'satique06@gmail.com']
console.log(Array.isArray(valueOfObj), valueOfObj);

const entriesObj = Object.entries(user); // [['name', 'Atique'], ['age', 25], ...]
console.log(Array.isArray(entriesObj), entriesObj);

const cartItem = {
    productId: 123,
    quantity: 2,
    price: 500,
    total() {
        return this.quantity * this.price;
    },
};

console.log(cartItem.total());

//Copy
const mainObj = {
    user: "Atique",
    role: "admin",
    active: true,
    settings: { theme: "dark", notification: true },
};

// Spread Operator (...) creates a shallow copy
// This copies only the top-level properties.
// If a property’s value is a primitive (string, number, boolean), it copies the value.
// If a property’s value is an object or array, it copies the reference, NOT the nested data.

const copyObj = { ...mainObj };
copyObj.active = false;
console.log(mainObj, copyObj);

copyObj.settings.theme = "light";
console.log(mainObj.settings, copyObj.settings);

const deepCopy = structuredClone(mainObj);
deepCopy.settings.theme = "dark";
console.log(mainObj.settings, deepCopy.settings);

// Object.freeze(obj)
// Makes entire object immutable
// No changes: no new props, deletions, or updates
Object.freeze(mainObj);
mainObj.active = false; //not works

console.log(mainObj.active);

// Object.seal(obj)
// Props can be updated
// But no new props or deletions allowed
const config = { mode: "light" };
Object.seal(config);

config.mode = "dark"; // allowed
config.theme = "blue"; // ignoredconst config = { mode: "light" };
Object.seal(config);

config.mode = "dark"; // allowed
config.theme = "blue"; // ignored
console.log(config);

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 == sym2);
const loggedIn = {
    id: 1,
    name: "Atique",
    email: "satique06@gmail.com",
    2: "4",
    true: true,
    undefined: undefined,
    NaN: NaN,
    function: "Function",
};

console.log(loggedIn);
console.log(sym1, sym2);
