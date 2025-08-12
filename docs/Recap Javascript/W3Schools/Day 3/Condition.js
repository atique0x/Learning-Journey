const x = null ?? "Nullish";
const y = undefined ?? "Nullish";
const a = NaN ?? "Nullish";
const b = false ?? "Nullish";
const c = 0 ?? "Nullish";
console.log(x, y, a, b, c);

const user = {
    name: "Atique",
    address: {
        city: "Dhaka",
    },
};

console.log(user.address?.city); // "Dhaka"
console.log(user.address?.zip); // undefined
console.log(user.contact?.phone); //undefined

const time = 15;
let greeting;

if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);

let day;
switch (new Date().getDay()) {
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    default:
        day = "Weekend";
}
console.log(day);
