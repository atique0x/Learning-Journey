var val = "hello";
//val = 3;
var value;
value = "Hello"; // ✅ valid
value = 100; // ✅ valid
// value = true;  // ❌ Error: Type 'boolean' is not assignable
function printId(id) {
    console.log("ID:", id);
}
printId(101); // ✅ number
printId("TS123"); // ✅ string
// printId(true);    // ❌ Error
function checkStatus(status) {
    if (typeof status === "string") {
        console.log(status.toUpperCase());
    }
    else if (typeof status === "string") {
        console.log(status);
    }
}
checkStatus(200);
checkStatus("success");
function getStatus(code) {
    return code === 200 ? "success" : "error";
}
getStatus(200);
var items = ["apple", 10, "banana", 25];
function returnCheck(num, str) {
    if (num === 1) {
        return str.length;
    }
    return str.toUpperCase();
}
console.log(returnCheck(1, "Atique"));
console.log(returnCheck(0, "Atique"));
