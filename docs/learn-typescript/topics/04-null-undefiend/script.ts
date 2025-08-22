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

//Declared but not initialized
let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"

//Missing function parameter
function greet(name?: string) {
  console.log(name);
}
greet(); // undefined

//Array element not set
const arr = [1, , 3];
console.log(arr[1]); // undefined
console.log(arr[10]); // undefined

console.log(null == undefined);
console.log(null === undefined);

//Null examples

const btn = document.getElementById("button");
console.log(btn);

const user = localStorage.getItem("user");
console.log(user);
