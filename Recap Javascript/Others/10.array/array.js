const numbers = [1, 4, 3, 9, 2, 5, 7, 5, 2];

numbers.push(8, 10); //Add an item to the end.
numbers.pop(); //Remove the last item.
numbers.unshift(6); //Add items to the beginning.
numbers.shift(); //Remove the first item.

console.log(numbers);

//find() returns the first matching element or undefined if none. Useful when you want to get one element from an array based on a condition.
//if not available return undefined
const findNumber = numbers.find((eachNumber) => {
    return eachNumber > 8;
});
console.log(findNumber);

//Returns the index of the first element in an array that satisfies the provided testing function.
// If no element matches, it returns -1.
const findIndex = numbers.findIndex((eachNumber, index) => {
    return eachNumber > 8; //if not available = -1
});
console.log(findIndex);

//filter() method creates a new array containing all elements that satisfy the condition. If no elements satisfy the condition, it returns an empty array ([]).
const filteredArr = numbers.filter((eachNumber) => {
    return eachNumber > 4;
});
console.log(filteredArr);

//.map() returns a new array by applying a function to each item. The original array stays unchanged.
const mapArr = numbers.map((eachNumber) => {
    return eachNumber * 2;
});
console.log(mapArr);

//Iterates through each element (no return value).
numbers.forEach((number, index) => {
    console.log(`${index}: ${number}`);
});

//Reduces array to a single value.
// array.reduce((accumulator, currentValue) => {
// }, initialValue);
const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);
console.log(sum);

//Returns true if at least one element passes a test.
console.log(numbers.some((num) => num > 2));

//Returns true if all elements pass a test.
console.log(numbers.every((num) => num > 0)); // true

//Returns a portion of an array (non-destructive).
const result = numbers.slice(1, 4);
console.log(result);

//Adds/removes/replaces elements.
console.log(numbers.splice(1, 2, 8, 9, 6));
console.log(numbers);

//Convert array to string
console.log(numbers.join("")); //" " "," "#" join with anything

//Sorting
numbers.push(25, 60);
console.log(numbers.sort());
console.log(
    numbers.sort((a, b) => {
        return a - b;
    })
);

const names = ["Atique", "Al", "Jonathan", "Ray"];
names.sort();
console.log(names);
names.sort((a, b) => {
    return a.length - b.length;
});
console.log(names);

const students = [
    { name: "Atique", grade: 90 },
    { name: "M", grade: 70 },
    { name: "B", grade: 85 },
    { name: "Sam", grade: 92 },
];

students.sort((a, b) => {
    return a.grade - b.grade;
});
console.log(students);
console.log(numbers.reverse());
