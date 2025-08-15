{
  // 1. ARRAY WITHOUT TYPE ANNOTATION
  // If no type is specified, TypeScript infers the type from the first assignment.
  // Here, the array has string, number, and boolean — so TS infers: (string | number | boolean)[]
  const user = ["atique", 25, true];
  user.push("ashik"); // ✅ Allowed (string)
  user.push(26); // ✅ Allowed (number)
  user.push(false); // ✅ Allowed (boolean)
  // user.push({});   // ❌ Error — object is not part of the inferred union type

  // 2. ARRAY WITH TYPE ANNOTATION (HOMOGENEOUS ARRAY)
  // Type annotation forces the array to have ONLY one type (string in this case).
  const user2: string[] = ["atique", "ashik"];
  user2.push("new name"); // ✅ Allowed
  // user2.push(25);      // ❌ Error — number not allowed in string[]

  // 3. ARRAY WITH UNION TYPES (HETEROGENEOUS ARRAY)
  // This allows multiple types — here, string OR number.
  const user3: (string | number)[] = ["atique", "ashik", 26];
  user3.push(99); // ✅ Allowed (number)
  user3.push("hello"); // ✅ Allowed (string)
  // user3.push(true);  // ❌ Error — boolean not allowed

  // 4. READONLY ARRAY (CANNOT BE MODIFIED)
  const colors: readonly string[] = ["red", "green", "blue"];
  // colors.push("yellow"); // ❌ Error — Cannot modify a readonly array
}
