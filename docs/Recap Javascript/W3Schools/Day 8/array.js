const numbers = [1, 4, 3, 9, 2, 5, 7, 5, 2];

//find() returns the first matching element or undefined if none. Useful when you want to get one element from an array based on a condition.
//ARRAY
const findNumber = numbers.find((eachNumber) => {
    return eachNumber > 8; //if not available = undefined
});
console.log(findNumber);

//Returns the index of the first element in an array that satisfies the provided testing function. If no element matches, it returns -1.
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
