{
    // 1. ARRAY WITHOUT TYPE ANNOTATION
    // If no type is specified, TypeScript infers the type from the first assignment.
    // Here, the array has string, number, and boolean — so TS infers: (string | number | boolean)[]
    var user = ["atique", 25, true];
    user.push("ashik"); // ✅ Allowed (string)
    user.push(26); // ✅ Allowed (number)
    user.push(false); // ✅ Allowed (boolean)
    // user.push({});   // ❌ Error — object is not part of the inferred union type
    // 2. ARRAY WITH TYPE ANNOTATION (HOMOGENEOUS ARRAY)
    // Type annotation forces the array to have ONLY one type (string in this case).
    var user2 = ["atique", "ashik"];
    user2.push("new name"); // ✅ Allowed
    // user2.push(25);      // ❌ Error — number not allowed in string[]
    // 3. ARRAY WITH UNION TYPES (HETEROGENEOUS ARRAY)
    // This allows multiple types — here, string OR number.
    var user3 = ["atique", "ashik", 26];
    user3.push(99); // ✅ Allowed (number)
    user3.push("hello"); // ✅ Allowed (string)
    // user3.push(true);  // ❌ Error — boolean not allowed
    // 4. READONLY ARRAY (CANNOT BE MODIFIED)
    var colors = ["red", "green", "blue"];
    // colors.push("yellow"); // ❌ Error — Cannot modify a readonly array
}
