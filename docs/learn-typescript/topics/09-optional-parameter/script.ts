function greet(name: string, age?: number) {
  //console.log(`Hello ${name}, you are ${age} years old.`);
  //Optional parameters are implicitly undefined if not passed.
  if (age) {
    console.log(`Hello ${name}, you are ${age} years old.`);
  } else {
    console.log(`Hello ${name}`);
  }
}

greet("Atique", 25); // Hello Atique, you are 25 years old.
greet("Atique"); // Hello Atique... age undefiend

//Cannot have required parameters after optional ones
// function test(a?: number, b: string) {} // ❌ Error

function test(a: number, b?: string) {} // ✅ Works

interface Logger {
  message: string;
  level?: string;
}
const log1: Logger = {
  message: "Default Message",
};
console.log(log1.level); //undefiend

const log2: Logger = {
  message: "Default Message",
  level: "no error if not provide",
};
