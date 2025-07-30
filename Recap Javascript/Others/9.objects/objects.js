const person = {
    name: "Atique",
    age: 25,
    isStudent: true,
};

console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

person.age = 26;
person["name"] = "Atique Shahriar";
person.email = "atique@example.com";

delete person.isStudent;

//Object Methods
const user = {
    username: "atique",
    greet: function () {
        return `Hello, ${this.username}!`;
    },
};

console.log(user.greet()); // Hello, atique!

//Nested Objected
const student = {
    name: "Atique",
    grades: {
        math: 90,
        science: 85,
    },
};

console.log(student.grades.math); // 90

for (let key in student) {
    if (typeof student[key] === "object") {
        for (let nestedKey in student[key]) {
            console.log(`${nestedKey}: ${student[key][nestedKey]}`);
        }
    } else {
        console.log(`${key}: ${student[key]}`);
    }
}
