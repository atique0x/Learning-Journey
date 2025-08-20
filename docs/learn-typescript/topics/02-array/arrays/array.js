var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
{
    // ARRAY WITHOUT TYPE ANNOTATION
    // If no type is specified, TypeScript infers the type from the first assignment.
    // Here, the array has string, number, and boolean — so TS infers: (string | number | boolean)[]
    var user = ["atique", 25, true];
    user.push("ashik"); // ✅ Allowed (string)
    user.push(26); // ✅ Allowed (number)
    user.push(false); // ✅ Allowed (boolean)
    // user.push({});   // ❌ Error — object is not part of the inferred union type
    // ARRAY WITH TYPE ANNOTATION (HOMOGENEOUS ARRAY)
    // Type annotation forces the array to have ONLY one type (string in this case).
    var user2 = ["atique", "ashik"];
    user2.push("new name"); // ✅ Allowed
    // user2.push(25);      // ❌ Error — number not allowed in string[]
    // ARRAY WITH UNION TYPES (HETEROGENEOUS ARRAY)
    // This allows multiple types — here, string OR number.
    var user3 = ["atique", "ashik", 26];
    user3.push(99); // ✅ Allowed (number)
    user3.push("hello"); // ✅ Allowed (string)
    // user3.push(true);  // ❌ Error — boolean not allowed
    // READONLY ARRAY (CANNOT BE MODIFIED)
    var colors = ["red", "green", "blue"];
    // colors.push("yellow"); // ❌ Error — Cannot modify a readonly array
    //Spread & Rest
    var arr1 = [1, 2, 3];
    var arr2 = [4, 5];
    var merged = __spreadArray(__spreadArray([], arr1, true), arr2, true); // [1, 2, 3, 4, 5]
    console.log(merged);
    function logAll() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
    }
    logAll(1, 2, 3, 4); // [1, 2, 3, 4]
}
