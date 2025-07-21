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

// Generating HTML content
let text = "";
let ul = "";

for (let i = 0; i < carArr.length; i++) {
    console.log(carArr[i]);
    text += carArr[i] + "<br>";
    ul += "<li>" + carArr[i] + "</li>"; // ✅ correct closing tag
}

document.getElementById("demo1").innerHTML = "Hello";
document.getElementById("demo2").innerHTML = ul;

console.log("UL Output:", ul);
console.log("Text Output:", text);

// ------------------------------------
// Looping through Arrays (Different Ways)
// ------------------------------------

// ✅ Traditional For Loop
console.log("For Loop:");
for (let i = 0; i < carArr.length; i++) {
    console.log(carArr[i]);
}

// ✅ While Loop
console.log("While Loop:");
let x = 0;
while (x < carArr.length) {
    console.log(carArr[x]);
    x++;
}

// ✅ Do...While Loop
console.log("Do While Loop:");
let y = 0;
do {
    console.log(carArr[y]);
    y++;
} while (y < carArr.length);

// ✅ for...of loop — gets **values**
console.log("for...of Loop (carArr values):");
for (let val of carArr) {
    console.log(val);
}

// ✅ for...in loop — gets **indexes**
console.log("for...in Loop (carArr indexes):");
for (let index in carArr) {
    console.log(index, carArr[index]);
}

// ------------------------------------
// Looping through Object
// ------------------------------------
console.log("for...in Loop (Object keys):");
for (let key in carObj) {
    console.log(key, carObj[key]);
}

// ------------------------------------
// Array of Objects
// ------------------------------------
console.log("Array of Objects using for...of:");
for (let car of cars) {
    console.log(car.name, car.price);
}

console.log("Array of Objects using for...in:");
for (let index in cars) {
    console.log(cars[index].name, cars[index].price);
}
