let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.

let v: any = true;
v = "string"; // no error as it can be "any" type
let value: any = "hello";
// ✅ Allowed
value.toUpperCase(); // ✅ Allowed (even if value is a number)
value.trim(); // ✅ Allowed — compiler won’t complain even if runtime may fail

let w: unknown = 1;
w = "string"; // no error

// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

let newValue: unknown = "hello";
// newValue = 42;
console.log(typeof newValue);
if (newValue === "string") {
  console.log(newValue.toString());
}

type Shape = "circle" | "square" | "triangle";

function draw(shape: Shape) {
  if (shape === "circle") {
    console.log("Draw circle");
  } else if (shape === "square") {
    console.log("Draw square");
  } else {
    console.log("Unknown shape"); // ❌ Bug: triangle is treated as "unknown"
  }
}
draw("triangle");
