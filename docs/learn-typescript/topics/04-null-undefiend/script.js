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
