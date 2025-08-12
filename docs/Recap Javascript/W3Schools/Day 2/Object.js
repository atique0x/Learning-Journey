// Creating and modifying object properties
const obj1 = {
    age: 26,
};

obj1.firstName = "Atique";
obj1.lastName = "Shahriar";

console.log(obj1.age);
console.log(obj1["age"]);

// Object with different name sources
const firstName = "Atique",
    lastName = "Shahriar";

const person = {
    firstName: "Atique",
    lastName: "Shahriar",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    anotherName: this.firstName + " " + this.lastName, // likely undefined
    otherName: firstName + " " + lastName, // uses outer variables
};

console.log(person.fullName(), person.anotherName, person.otherName);

// Deleting and iterating properties
const person2 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue",
};

console.log(person2);

delete person2["age"]; // Remove property
console.log(person2);

person2.age = 26; // Add again
console.log(person2);

for (let x in person2) {
    console.log(person2[x]); // Iterate over values
}

const myArr = Object.values(person2);
console.log(typeof myArr, myArr); // Outputs: "object" [values...]
