const carArr = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
const carObj = {
    name: "BMW",
    price: 2100,
    model: 2015,
};

const cars = [
    { name: "BMW", price: 2100 },
    { name: "Volvo", price: 3600 },
    { name: "Saab", price: 1800 },
];

// Traditional For Loop
console.log("_____For Loop:");
for (let i = 0; i < carArr.length; i++) {
    console.log(carArr[i]);
}

// While Loop
console.log("_____While Loop:");
let x = 0;
while (x < carArr.length) {
    console.log(carArr[x]);
    x++;
}

// Do...While Loop
console.log("_____Do While Loop:");
let y = 0;
do {
    console.log(carArr[y]);
    y++;
} while (y < carArr.length);

// for...of loop — gets **values**
console.log("for...of Loop (carArr values):");
for (let a of carArr) {
    console.log(a);
}

// for...in loop — gets **indexes**
console.log("for...in Loop (carArr indexes):");
for (let index in carArr) {
    console.log(index, carArr[index]);
}

console.log("for...in Loop (Object keys):");
for (let key in carObj) {
    console.log(key, carObj[key]);
}

let data = null;
while (data == null) {
    console.log(data);
    data = "";
}

// let input;
// const correctPassword = "b";
// do {
//     input = prompt("Enter your password:");
// } while (input !== correctPassword);

const user = {
    name: "Atique",
    age: 22,
    email: "atique@example.com",
    isActive: true,
};

for (let key in user) {
    if (key === "email") continue;
    if (key === "isActive") break;
    console.log(key, "→", user[key]);
}

const maxValue = 1000000;

for (let i = 0; i < maxValue; i++) {
    if (i === 19000) {
        console.log(i);
    }
}
let value;

do {
    value = Number(prompt());
    if (value === 500) break;
} while (value !== 19000);

console.log(value);
