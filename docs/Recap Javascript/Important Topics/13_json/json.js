const jsonObj = {
    name: "Atique",
    age: 25,
    isStudent: false,
    courses: ["JavaScript", "Angular", "TypeScript"],
    address: {
        city: "Dhaka",
        country: "Bangladesh",
    },
};
//{"name":"Atique","age":25,"isStudent":false,"courses":["JavaScript","Angular","TypeScript"],"address":{"city":"Dhaka","country":"Bangladesh"}}

console.log(typeof jsonObj);

const json = JSON.stringify(jsonObj);
console.log(json);
console.log(typeof json);

const convertJsonObj = JSON.parse(json);
console.log(convertJsonObj);

const sym1 = Symbol("id");
const obj = {
    name: "Atique",
    age: undefined,
    greet: function () {
        console.log("Hello!");
    },
    skills: ["JavaScript", undefined, "Angular"],
    date: new Date(),
    [sym1]: "key",
};

console.log(JSON.stringify(obj));

const jsonV = `{"name":"Atique","skills":["JavaScript",null,"Angular"],"date":"2025-08-08T06:52:31.123Z"}
`;

console.log(JSON.parse(jsonV));
