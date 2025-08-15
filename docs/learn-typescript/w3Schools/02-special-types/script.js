var u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
var v = true;
v = "string"; // no error as it can be "any" type
var value = "hello";
// ✅ Allowed
value.toUpperCase(); // ✅ Allowed (even if value is a number)
value.trim(); // ✅ Allowed — compiler won’t complain even if runtime may fail
var w = 1;
w = "string"; // no error
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
var newValue = "hello";
// newValue = 42;
console.log(typeof newValue);
if (newValue === "string") {
    console.log(newValue.toString());
}
function draw(shape) {
    if (shape === "circle") {
        console.log("Draw circle");
    }
    else if (shape === "square") {
        console.log("Draw square");
    }
    else {
        console.log("Unknown shape"); // ❌ Bug: triangle is treated as "unknown"
    }
}
draw("triangle");
