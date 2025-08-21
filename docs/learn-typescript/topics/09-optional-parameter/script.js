function greet(name, age) {
    //console.log(`Hello ${name}, you are ${age} years old.`);
    //Optional parameters are implicitly undefined if not passed.
    if (age) {
        console.log("Hello ".concat(name, ", you are ").concat(age, " years old."));
    }
    else {
        console.log("Hello ".concat(name));
    }
}
greet("Atique", 25); // Hello Atique, you are 25 years old.
greet("Atique"); // Hello Atique... age undefiend
//Cannot have required parameters after optional ones
// function test(a?: number, b: string) {} // ❌ Error
function test(a, b) { } // ✅ Works
var log1 = {
    message: "Default Message",
};
console.log(log1.level); //undefiend
var log2 = {
    message: "Default Message",
    level: "no error if not provide",
};
