//Spread with Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
//...arr1 spreads the elements into the new array.

//Copying Arrays
const original = [10, 20];
const copy = [...original];
copy.push(30);

console.log(original); // [10, 20]
console.log(copy); // [10, 20, 30]

//Merging Arrays
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]

// Spread with Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }

const defaultSettings = { theme: "light", notifications: true };
const userSettings = { notifications: false };

const settings = { ...defaultSettings, ...userSettings };
console.log(settings); // { theme: 'light', notifications: false }

const base = { a: 1, b: 2 };
const override1 = { b: 20, c: 30 };
const override2 = { a: 100, d: 40 };

//Merging Multiple Objects with Conflicting Properties
const mergedObj = { ...base, ...override1, ...override2 };
console.log(mergedObj);
// { a: 100, b: 20, c: 30, d: 40 }

const users1 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const users2 = [
  { id: 2, name: "Bobby" },
  { id: 3, name: "Charlie" },
];

const mergeUser = [...users1, ...users2];
console.log(mergeUser);

const mergeUniqueUser = [
  ...users1,
  ...users2.filter((u2) => !users1.find((u1) => u1.id == u2.id)),
];
console.log(mergeUniqueUser);
/*



*/
const person = {
  name: "Alice",
  age: 28,
  profession: "Engineer",
  city: "Dhaka",
  isMarried: false,
};

const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2021,
  color: "Blue",
  isElectric: false,
};

// const newObj = { ...person, car.color }; //❌ This is wrong
// const newObj = {
//   ...person,
//   carColor: car.color, // Possible but change attribute name
// };

const { color, brand } = car; // pick multiple keys
const newObj = { ...person, color, brand }; // Possible

console.log("New Object: ", newObj);
/*



*/
// Rest in Function Parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(5, 10)); // 15

//Rest with Array Destructuring
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest); // [20, 30, 40]

//Rest with Object Destructuring
const { x, ...others } = { x: 1, y: 2, z: 3 };
console.log(x); // 1
console.log(others); // { b: 2, c: 3 }
