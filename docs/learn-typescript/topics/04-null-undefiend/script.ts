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
