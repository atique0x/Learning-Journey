// Example 1: Handling NaN (Improved)
let x;
try {
    x = 0 / 0; // NaN
    console.log(x); // NaN
    if (Number.isNaN(x)) {
        throw new Error("The value is invalid (NaN detected)");
    }
} catch (err) {
    console.log("Error caught:", err.message);
}

// Example 2: Handling invalid JSON parsing
try {
    const json = '{"name": "John", age: 30}'; // invalid JSON (age missing quotes)
    const obj = JSON.parse(json);
    console.log(obj);
} catch (err) {
    console.log("JSON parsing error:", err.message);
}

// Example 3: Accessing property of undefined
try {
    let obj = null;
    console.log(obj.name); // TypeError: Cannot read property 'name' of null
} catch (err) {
    console.log("Runtime error:", err.message);
}

// Example 4: Custom error throwing
function checkPositive(num) {
    if (num < 0) {
        throw new RangeError("Number must be positive");
    }
    return num;
}

try {
    console.log(checkPositive(-5));
} catch (err) {
    console.log(err.name + ":", err.message);
}

// Example 5: ReferenceError
try {
    console.log(notDeclaredVar);
} catch (err) {
    console.log(err.name + ":", err.message);
}
