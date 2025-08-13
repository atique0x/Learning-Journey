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

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
const obj1 = {
  id: 1,
  name: "atique",
  age: 25,
};
console.log(obj1);

const obj2 = {
  email: "satique06@gmail.com",
  address: "Mirpur, Dhaka",
};
console.log(obj2);

const obj2JSON = JSON.stringify(obj2);
console.log(obj2JSON);

obj1.others = obj2JSON;
console.log(obj1);

const obj1JSON = JSON.stringify(obj1);
console.log(obj1JSON);

const obj1Parse = JSON.parse(obj1JSON);

function isJSONString(value) {
  if (typeof value !== "string") return false;
  try {
    JSON.parse(value);
    return true;
  } catch {
    return false;
  }
}

for (let key in obj1Parse) {
  if (isJSONString(obj1Parse[key])) {
    const newObj = JSON.parse(obj1Parse[key]);

    for (let key2 in newObj) {
      console.log(`${key2}: `, newObj[key2]);
    }
  } else {
    console.log(`${key}: `, obj1Parse[key]);
  }
}
