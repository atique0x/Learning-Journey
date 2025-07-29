function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet("Atique")); // Hello, Atique!
console.log(greet()); // Hello, Guest!

function add(a, b, callback) {
    let c = a + b;
    callback(c); // calls the callback with the result
}

function display(sum) {
    console.log("The result of a & b:", sum);
}

add(4, 5, display); // The result of a & b: 9
