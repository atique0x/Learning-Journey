// Map Usage
const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("mangoes"); // Value is undefined
fruits.set("", 600); // Empty string as key

console.log(fruits);
console.log(fruits.get("bananas"));

// Type Check
console.log(typeof Infinity); // "number"

// Object Destructuring
const person = {
    name: "Atique",
    age: 25,
};

console.log(person);

const { name, age, country = "BD" } = person;
console.log(name, age, country); // Atique 25 BD

const { name: lastname } = person;
console.log(lastname); // Atique

// Spread Operator (Object Updating)
const persons = { name: "Atique", age: 25 };
const updated = { ...persons, age: 26 }; // age updated
console.log(updated); // { name: 'Atique', age: 26 }

// Optional Chaining
const user = {
    profile: {
        name: "Atique",
        country: "BD",
    },
};

console.log(user?.profile?.name); // "Atique"
console.log(user?.profile?.age); // undefined
console.log(user.profile.age); // undefined (no error)
console.log(user.address?.age); // undefined (safe)

// Array Reduce to Object
const words = ["hello", "world"];

const obj = words.reduce((acc, w) => {
    console.log(acc);
    acc[w] = w.length;
    return acc;
}, {});

console.log(obj); // { hello: 5, world: 5 }
