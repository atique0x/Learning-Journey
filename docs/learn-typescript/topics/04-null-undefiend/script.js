// let x: number = null; // ❌ Error
// let y: string = undefined; // ❌ Error
var z = null; // ✅ allowed
var w = undefined; // ✅ allowed
function findUser(id) {
    if (id === 0)
        return null; // user not found
    return "Atique";
}
console.log(findUser(0));
var val;
console.log(val !== null && val !== void 0 ? val : "Default"); // "Default"
//Declared but not initialized
var x;
console.log(x); // undefined
console.log(typeof x); // "undefined"
//Missing function parameter
function greet(name) {
    console.log(name);
}
greet(); // undefined
//Array element not set
var arr = [1, , 3];
console.log(arr[1]); // undefined
console.log(arr[10]); // undefined
console.log(null == undefined);
console.log(null === undefined);
//Null examples
var btn = document.getElementById("button");
console.log(btn);
var user = localStorage.getItem("user");
console.log(user);
