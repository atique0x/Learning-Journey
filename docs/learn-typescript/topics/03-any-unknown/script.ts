{
  let user = "name";
  // user = 2; // ❌ Error: TypeScript infers 'user' as string

  // Example: 'any' Type
  let variable: any;

  variable = 5; // ✅ number
  variable = "hello"; // ✅ string
  variable = true; // ✅ boolean
  variable = { a: 1 }; // ✅ object
  variable = [1, 2, 3]; // ✅ array

  // Using 'any' allows unsafe operations:
  let something: any = "hello";

  something.toUpperCase(); // ✅ works
  something = 123;
  // something.toUpperCase(); // ❌ Runtime error! TypeScript won’t catch this

  // - Disables type checking
  // - Allows method calls even if they may fail at runtime

  // Example: 'unknown' Type (Safer)
  let value: unknown = 10;
  console.log(value); // ✅ prints 10

  value = "hello";
  // console.log(value.toUpperCase()); // ❌ Compile-time error
  // ❗ You must narrow the type before using string methods

  if (typeof value === "string") {
    console.log(value.toUpperCase()); // ✅ Safe
  } else {
    console.log(value); // ✅ Works for other types
  }

  // 'unknown' Summary:
  // - Safer than 'any'
  // - TypeScript forces you to check the type before using it

  // Example with 'unknown'
  const checkUnknown = (value: unknown): void => {
    if (typeof value === "string") {
      console.log("String:", value.toUpperCase());
    } else if (typeof value === "number") {
      console.log("Number:", value * 2);
    } else {
      console.log("Other type:", value);
    }
  };

  checkUnknown("hello"); // ✅ String: HELLO
  checkUnknown(10); // ✅ Number: 20
  checkUnknown(true); // ✅ Other type: true
}
