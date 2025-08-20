{
  // Tuple: [string, number, boolean]
  const user: [string, number, boolean] = ["atique", 25, true];
  console.log(user);
  // Correct assignments
  user[0] = "ashik"; // ✅ string in position 0
  user[1] = 30; // ✅ number in position 1
  user[2] = false; // ✅ boolean in position 2
  console.log(user);

  // Wrong assignments
  // user[0] = 100;    // ❌ number not allowed in position 0
  // user[1] = "text"; // ❌ string not allowed in position 1

  // Array — flexible length & type (if union used)
  const arr: (string | number)[] = ["atique", 25];
  arr.push(30); // ✅ allowed
  arr.push("ok"); // ✅ allowed

  // Tuple — fixed length & fixed type order
  const tup: [string, number] = ["atique", 25];
  // tup[0] = 100;  // ❌ not allowed
  // tup[1] = "ok"; // ❌ not allowed
  tup.push(28); // ✅ allowed, but not part of the tuple definition ❌
  console.log(tup); // Output: ["atique", 25, 28]

  // Optional second element
  const point: [number, number?] = [10];
  const point2: [number, number?] = [10, 20]; // ✅ also valid
  //const point3: [number, number?, number] = [10, 20]; // ❌ not allowed

  const tup1: readonly [string, number] = ["atique", 25];
  //tup1.push(30); // ❌ not allowed, readonly tuple.//
}
