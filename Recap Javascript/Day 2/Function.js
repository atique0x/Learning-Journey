console.log("Starting 2nd Day");

// Basic type conversions and checks
console.log(parseInt("10px")); // Output: 10

console.log(typeof new Date()); // Output: "object"
console.log(typeof class {}); // Output: "function"

// Closure with private variable – counter example
function myCounter() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    };
}

console.log(myCounter()()); // Output: 1 (new instance)
console.log(myCounter()()); // Output: 1 (new instance)

const add = myCounter(); // Persistent closure
console.log(add()); // Output: 1
console.log(add()); // Output: 2

// Closure for private data (with getter/setter)
function createSecret() {
    let secret = "JavaScript is awesome!";
    return {
        getSecret: function () {
            return secret;
        },
        setSecret: function (newSecret) {
            secret = newSecret;
        },
    };
}

const obj = createSecret();
console.log(obj.getSecret()); // JavaScript is awesome!
obj.setSecret("Closures are powerful!");
console.log(obj.getSecret()); // Closures are powerful!
