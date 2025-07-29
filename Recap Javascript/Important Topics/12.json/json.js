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

const obj = {
    name: "Atique",
    age: undefined,
    greet: function () {
        console.log("Hello!");
    },
    skills: ["JavaScript", undefined, "Angular"],
};

console.log(JSON.stringify(obj));

const jsonV = `{"name":"Atique","skills":["JavaScript",null,"Angular"]}`;

console.log(JSON.parse(jsonV));
