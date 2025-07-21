const carArr = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
const carObj = {
    name: "BMW",
    price: 2100,
    model: 2015,
};

let text = "";
let ul = "";

for (let i = 0; i < carArr.length; i++) {
    console.log(carArr[i]);
    text += carArr[i] + "<br>";
    ul += "<li>" + carArr[i] + "</li>";
}

document.getElementById("demo1").innerHTML = "Hello";
document.getElementById("demo2").innerHTML = ul;

console.log(ul);
console.log(text);

for (let x in carArr) {
    console.log(x);
}

for (let key in carObj) {
    console.log(key);
}

const cars = [
    { name: "BMW", price: 2100 },
    { name: "Volvo", price: 3600 },
    { name: "Saab", price: 1800 },
];

for (let i of cars) {
    console.log(i);
}
for (let j in cars) {
    console.log(cars[j]);
}
console.log("For Loop");
for (let i = 0; i < carArr.length; i++) {
    console.log(carArr[i]);
}

console.log("While Loop");
let x = 0;
while (x < carArr.length) {
    console.log(carArr[x]);
    x++;
}

console.log("Do While Loop");
let y = 0;
do {
    console.log(carArr[y]);
    y++;
} while (y < carArr.length);
