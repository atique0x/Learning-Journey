var _a;
/*
Number data type
*/
var num1 = 15;
var num2 = 15.6;
//let num: number = "";
var num3 = "10";
var total = num1 + num2;
console.log(total);
console.log(typeof total);
// const add: number = num1 + num2 + num3;
// console.log(add);
var oct = 74;
var bin = 5;
var hex = 0x012d;
console.log(oct, bin, hex);
/*
String data types
*/
var userName = "atique0x";
var userAddress = "Dhaka";
var user = "Name of user is ".concat(userName, " and address is ").concat(userAddress);
console.log(user);
var len = userName.length;
console.log("Length:", len);
console.log(userName.toUpperCase());
var isExist = userName.includes("0");
var endCheck = userName.endsWith("x");
var indexFind = userName.indexOf("t");
/*
Boolean
*/
var isActive = true;
/*
Null & Undefiend
*/
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
//Symbol
var key1 = Symbol("key1");
var key2 = Symbol("key1");
console.log("key1:", key1);
console.log("key2:", key2);
console.log(key1 === key2);
var obj = (_a = {},
    _a[key1] = 100,
    _a.name = "Atique",
    _a);
console.log(obj[key1]);
{
    var num1_1 = 0 / 0; // NaN
    var num2_1 = 1 / 0; // Infinity
    var num3_1 = 0 / 1; // 0
    console.log("num1: ", num1_1);
    console.log("num2: ", num2_1);
    console.log("num3: ", num3_1);
    function checkValue(num) {
        if (isNaN(num)) {
            console.log("Number is NaN - ", num); //num1
        }
        if (!isFinite(num)) {
            console.log("Number is Infinity - ", num); //num1,num2
        }
        if (isFinite(num)) {
            console.log("Number is Finite - ", num); //num3
        }
        if (num === Infinity) {
            console.log("Number is infinity"); //num2
        }
    }
    checkValue(num1_1);
    checkValue(num2_1);
    checkValue(num3_1);
}
