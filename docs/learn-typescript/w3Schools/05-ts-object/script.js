{
    var user = {
        name: "atique",
        age: 25,
        isActive: true,
        // address: "Dhaka", // ❌ Not allowed, property not defined in type
    };
    console.log("User:", user);
    var user2 = {
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
    var user3 = {
        name: "atique",
        age: 25,
        isActive: true,
        marks: [85, 90, 95], // ✅ allowed, array of numbers
        hobbies: ["reading", "coding", true], // ✅ allowed, array of strings and booleans
        address: { city: "Dhaka", country: "Bangladesh" }, // ✅ allowed, object with specific properties
        //address: { city: "Dhaka" }, // ❌ not allowed, missing country property
    };
    var nameAgeMap = {};
    nameAgeMap["atique"] = 25; // ✅ allowed, string key and number value
    nameAgeMap["ashik"] = 30; // ✅ allowed, string key and number value
    //nameAgeMap[1] = "twenty"; // ❌ not allowed, key must be a string and value must be a number
    nameAgeMap.akash = 28; // ✅ allowed, string key and number value
    //nameAgeMap.rafid= "22"; // ❌ not allowed, value must be a number
    console.log("Name-Age Map:", nameAgeMap);
}
