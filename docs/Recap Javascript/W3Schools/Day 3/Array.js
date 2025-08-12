// Create array and assign values
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars); // ["Saab", "Volvo", "BMW"]

// Modify array element
cars[0] = "Yamaha";
console.log(cars); // ["Yamaha", "Volvo", "BMW"]

// Convert array to string
console.log(cars.toString()); // "Yamaha,Volvo,BMW"
console.log(cars.length); // 3
console.log(cars.sort()); // Sorted alphabetically

// Type checks
console.log(Array.isArray(cars)); // true
console.log(cars instanceof Array); // true

// Access and join
console.log(cars[0]); // "BMW" after sort
console.log(cars.join("  *  ")); // "BMW  *  Volvo  *  Yamaha"

// Number array
const number = [1, 3, 125, 3640, 5, 8, 6, 2, 36, 42, 60, 15, 23, 34];

// Find and findIndex
const foundValue = number.find((val, indx) => indx > 3);
console.log(foundValue); // 3640 (first index > 3)

const foundIndex = number.findIndex((val) => val > 40);
console.log(foundIndex); // 3 (index of 3640)

// Sorted without mutating original
console.log(number.toSorted((a, b) => a - b)); // Ascending

// Sorting array of objects by year
const carsObj = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
];
console.log(carsObj.sort((a, b) => a.year - b.year));

// forEach - only loops, doesn't return
number.forEach((val) => {
    console.log(val > 18); // Just prints check
});

// map - transforms array
const mapped = number.map((val) => val * 5);
console.log(mapped);

// Original array stays unchanged
console.log(number);

// filter - extract values > 40
const filtered = number.filter((val) => val > 40);
console.log(filtered);

// reduce - sum all values, starting from 100
const reduced = number.reduce((total, val) => total + val, 100);
console.log(reduced);

// Spread and Math usage
console.log(...number); // Spread to individual values
console.log(Math.min.apply(null, number));
console.log(Math.max(...number));

// Loop through values
for (let x of cars.values()) {
    console.log(x);
}

// Destructuring and rest
const [a, ...rest] = [1, 2, 3];
console.log(a, rest); // 1 [2, 3]

// Splice - modify array in-place
let arr = [1, 2, 3, 4];
arr.splice(1, 2, "a", "b", "c", "d");
console.log(arr); // [1, "a", "b", "c", "d", 4]

// Additional Examples
const letters = ["a", "b", "c"];
console.log(letters.concat(["d", "e"])); // ['a', 'b', 'c', 'd', 'e']
console.log(letters.slice(1)); // ['b', 'c']

const multi = [1, [2, [3, [4]]]];
console.log(multi.flat(2)); // [1, 2, 3, [4]]

console.log([1, 2, 3].every((x) => x > 0)); // true
console.log([1, 2, 3].some((x) => x > 2)); // true

console.log(Array.from("123")); // ['1', '2', '3']
console.log(Array.of(7, 8, 9)); // [7, 8, 9]

const fillArr = new Array(4).fill("X");
console.log(fillArr); // ["X", "X", "X", "X"]

const moved = [10, 20, 30, 40];
moved.copyWithin(0, 2);
console.log(moved); // [30, 40, 30, 40]

const nums = [1, 5, 6, 8, 10, 25, 89, 1, 26, 5, 4, 39];

const numsObj = {
    x: 3,
    y: 4,
    z: 6,
    m: 5,
    n: 2,
    o: 1,
};

console.log(nums);
console.log(numsObj);

const [r, s, ...restA] = nums;
const { x, y, o, ...p } = numsObj;
console.log(x, o, p);

console.log(...nums);

function spread(...num) {
    console.log(a);
}

spread(3, 4, 6, 2, 6);
