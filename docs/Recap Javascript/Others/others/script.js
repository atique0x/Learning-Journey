//Templete Literals
const name = "Atique";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Atique!

const age = 25;
console.log(`I will be ${age + 1}`);

const multiline = `This is line one.
This is line two.
This is line three.`;

console.log(multiline);

function greet(name) {
    return `Hello, ${name}!`;
}

console.log(`Greetings: ${greet("Atique")}`);
