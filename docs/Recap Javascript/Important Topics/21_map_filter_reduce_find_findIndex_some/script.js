const users = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    address: { city: "New York", zip: 10001 },
    hobbies: ["reading", "traveling"],
  },
  {
    id: 2,
    name: "Bob",
    age: 34,
    address: { city: "Chicago", zip: 60601 },
    hobbies: ["sports", "cooking"],
  },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    address: { city: "San Francisco", zip: 94101 },
    hobbies: ["gaming", "traveling"],
  },
  {
    id: 4,
    name: "Diana",
    age: 40,
    address: { city: "New York", zip: 10002 },
    hobbies: ["music", "reading"],
  },
  {
    id: 5,
    name: "Evan",
    age: 30,
    address: { city: "Chicago", zip: 60602 },
    hobbies: ["traveling", "sports"],
  },
];

//Map
const namesUpper = users.map((user) => user.name.toUpperCase());
console.log("Map: ", namesUpper);

//Filter
const chicagoUsers = users.filter((user) => user.address.city === "Chicago");
console.log("Filter: ", chicagoUsers);

//Reduce
const groupedByCity = users.reduce((acc, user) => {
  const city = user.address.city;

  if (!acc[city]) {
    acc[city] = [];
  }

  acc[city].push(user);

  return acc;
}, {});
console.log(groupedByCity);

//Find
const musicLover = users.find((user) => user.hobbies.includes("music"));
console.log("Find: ", musicLover);

//FindIndex
const sfUserIndex = users.findIndex(
  (user) => user.address.city === "San Francisco"
);
console.log("Find Index: ", sfUserIndex);

//Some
const hasYoungUser = users.some((user) => user.age < 25);
console.log("Some: ", hasYoungUser);
