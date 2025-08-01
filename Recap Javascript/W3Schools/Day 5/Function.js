// ✅ Using rest operator (...arg) in arrow function
console.log("== Rest Parameter ==");
const x = (...arg) => {
    console.log("arg as array:", arg);
};
x(1, 4, 2, [5, 6, 7]);

// ✅ 'arguments' only works in regular functions (not arrow functions)
console.log("\n== 'arguments' Object ==");
function arg() {
    console.log("First argument:", arguments[0]);
}
arg(1, 2, 4, 65, 2);

// ✅ 'this' in regular functions with call()
console.log("\n== 'this' with call() ==");
function sayHI() {
    console.log("user.name:", user.name); // from outer scope
    console.log("this:", this); // passed via .call()
}
const user = { name: "Atique" };
sayHI.call("Hello"); // "Hello" becomes 'this', but not useful here

// ✅ call() with arguments passed individually
console.log("\n== call() Example ==");
const person = {
    fullName(age, country) {
        return `${this.firstName} ${this.lastName}. Age: ${age}. Country: ${country}`;
    },
};
const person2 = {
    firstName: "Atique",
    lastName: "Shahriar",
};
console.log(person.fullName.call(person2, 25, "Bangladesh")); // Atique Shahriar. Age: 25. Country: Bangladesh

// ✅ call(), apply(), bind()
console.log("\n== call vs apply vs bind ==");

function introduce(language, country) {
    return `${this.name} codes in ${language}, lives in ${country}`;
}
const dev = { name: "Atique" };

console.log("call():", introduce.call(dev, "JavaScript", "Bangladesh")); // immediate call
console.log("apply():", introduce.apply(dev, ["JavaScript", "Bangladesh"])); // immediate call with array

// bind() returns a new function you can call later
const introLater = introduce.bind(dev, "JavaScript", "Bangladesh");
console.log("bind():", introLater()); // delayed execution
