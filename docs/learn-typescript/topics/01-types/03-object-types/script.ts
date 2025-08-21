const user: {
  name: string; // string type
  2: number; // number type key
  isActive: boolean; // boolean type
} = {
  name: "atique",
  2: 25,
  isActive: true,
  // address: "Dhaka", // ❌ Not allowed, property not defined in type
};
console.log("User:", user[2]);

const user2: {
  readonly id: number; // number
  name: string;
  age: number; // number
  isActive: boolean; // boolean
  address?: string; // optional property
  email?: string; // optional property
} = {
  id: 1, // number
  name: "atique",
  age: 25, // number
  isActive: true, // boolean
  //address: "Dhaka", // ✅ allowed, optional property
};
//user2.id = 2; // ❌ not allowed, readonly property
user2.name = "ashik"; // ✅ allowed, string
user2.email = "satique06@gmail.com"; // ✅ allowed, optional property
//user2.others="hello"; // ❌ not allowed, type is fixed

const user3: {
  name: string; // string
  age: number; // number
  isActive: boolean; // boolean
  marks?: number[]; // array of numbers
  hobbies?: (string | boolean)[]; // array of strings
  address?: { city: string; country: string }; // object with specific properties
} = {
  name: "atique",
  age: 25,
  isActive: true,
  marks: [85, 90, 95], // ✅ allowed, array of numbers
  hobbies: ["reading", "coding", true], // ✅ allowed, array of strings and booleans
  address: { city: "Dhaka", country: "Bangladesh" }, // ✅ allowed, object with specific properties
  //address: { city: "Dhaka" }, // ❌ not allowed, missing country property
};

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap["atique"] = 25; // ✅ allowed, string key and number value
nameAgeMap["ashik"] = 30; // ✅ allowed, string key and number value
//nameAgeMap[1] = "twenty"; // ❌ not allowed, key must be a string and value must be a number
nameAgeMap.akash = 28; // ✅ allowed, string key and number value
//nameAgeMap.rafid= "22"; // ❌ not allowed, value must be a number
console.log("Name-Age Map:", nameAgeMap);
