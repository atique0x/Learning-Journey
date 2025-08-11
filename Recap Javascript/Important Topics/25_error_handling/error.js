// Example 1: Handling NaN (Improved)
let x;
try {
  x = 0 / 0; // NaN
  console.log(x); // NaN
  if (Number.isNaN(x)) {
    throw new Error("The value is invalid (NaN detected)");
  }
} catch (err) {
  console.log("Error caught:", err.message);
}

// Example 2: Handling invalid JSON parsing
try {
  const json = '{"name": "John", age: 30}'; // invalid JSON (age missing quotes)
  const obj = JSON.parse(json);
  console.log(obj);
} catch (err) {
  console.log("JSON parsing error:", err.message);
}

// Example 3: Accessing property of undefined
try {
  let obj = null;
  console.log(obj.name); // TypeError: Cannot read property 'name' of null
} catch (err) {
  console.log("Runtime error:", err.message);
}

// Example 4: Custom error throwing
function checkPositive(num) {
  if (num < 0) {
    throw new RangeError("Number must be positive");
  }
  return num;
}

try {
  console.log(checkPositive(-5));
} catch (err) {
  console.log(err.name + ":", err.message);
}

// Example 5: ReferenceError
try {
  console.log(notDeclaredVar);
} catch (err) {
  console.log(err.name + ":", err.message);
}

//Example
async function getUser(userId) {
  try {
    if (!userId) {
      throw new Error("User Id is required");
    }
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }
    const users = await response.json();

    const findingUser = users.find((user) => user.id === userId);
    if (!findingUser) {
      throw new Error(`User is not exist with user id-${userId}`);
    }

    console.log(findingUser);
  } catch (err) {
    console.log("Error: ", err.message);
  }
}

getUser(1);
getUser("");
getUser(12);
