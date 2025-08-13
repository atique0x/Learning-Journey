// Function with five parameters
function checkParameter(a, b, c, d, e) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  console.log(`c: ${c}`);
  console.log(`d: ${d}`);
  console.log(`e: ${e}`);
}

// 1️⃣ Passing undefined for missing arguments
// Explicitly skip parameters by passing undefined
checkParameter(1, 2, undefined, 4, undefined);
/*
Output:
a: 1
b: 2
c: undefined
d: 4
e: undefined
*/

// 2️⃣ Using spread operator with an array
// Sparse array slots become undefined automatically
checkParameter(...[1, 2, , , 6]);
/*
Output:
a: 1
b: 2
c: undefined
d: undefined
e: 6
*/

// 3️⃣ Using an object with destructuring
function checkObjectParameter({ a, b, c, d, e }) {
  console.log(`a: ${a}`);
  console.log(`b: ${b}`);
  console.log(`c: ${c}`);
  console.log(`d: ${d}`);
  console.log(`e: ${e}`);
}

// Pass only the arguments you want by property name
checkObjectParameter({ a: 3, e: 2, b: 5 });
/*
Output:
a: 3
b: 5
c: undefined
d: undefined
e: 2
*/
