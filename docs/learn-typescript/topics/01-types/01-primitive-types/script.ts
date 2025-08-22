/*
Number data type
*/
let num1: number = 15;
let num2: number = 15.6;
//let num: number = "";
let num3 = "10";
const total: number = num1 + num2;
console.log(total);
console.log(typeof total);

// const add: number = num1 + num2 + num3;
// console.log(add);

let oct: number = 0o112;
let bin: number = 0b0101;
let hex: number = 0x012d;
console.log(oct, bin, hex);

/*
String data types
*/
const userName: string = "atique0x";
const userAddress: string = `Dhaka`;
const user: string = `Name of user is ${userName} and address is ${userAddress}`;
console.log(user);

const len: number = userName.length;
console.log("Length:", len);
console.log(userName.toUpperCase());

const isExist: boolean = userName.includes("0");
const endCheck: boolean = userName.endsWith("x");
const indexFind: number = userName.indexOf("t");

/*
Boolean
*/
let isActive: boolean = true;

/*
Null & Undefiend
*/

// let x: number = null; // ❌ Error
// let y: string = undefined; // ❌ Error

let z: number | null = null; // ✅ allowed
let w: string | undefined = undefined; // ✅ allowed

function findUser(id: number): string | null {
  if (id === 0) return null; // user not found
  return "Atique";
}

console.log(findUser(0));

let val: string | undefined;
console.log(val ?? "Default"); // "Default"

//Symbol
let key1: symbol = Symbol("key1");
let key2: symbol = Symbol("key1");
console.log("key1:", key1);
console.log("key2:", key2);
console.log(key1 === key2);

const obj = {
  [key1]: 100,
  name: "Atique",
};
console.log(obj[key1]);

{
  const num1 = 0 / 0; // NaN
  const num2 = 1 / 0; // Infinity
  const num3 = 0 / 1; // 0

  console.log("num1: ", num1);
  console.log("num2: ", num2);
  console.log("num3: ", num3);

  function checkValue(num: number) {
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
  checkValue(num1);
  checkValue(num2);
  checkValue(num3);
}
