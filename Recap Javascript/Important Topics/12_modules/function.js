export const sum = (a = 0, b = 0) => {
    return a + b;
};

function sub(a = 0, b = 0) {
    return a - b;
}

function add(a, b, callback) {
    let c = a + b;
    callback(c); // calls the callback with the result
}

function display(sum) {
    console.log("The result of a & b:", sum);
}

const multiply = (a, b) => a * b;
export { multiply };

const functionObject = { sub, add, display };
export default functionObject;
