// ARRAY WITHOUT TYPE ANNOTATION
// If no type is specified, TypeScript infers the type from the first assignment.
// Here, the array has string, number, and boolean — so TS infers: (string | number | boolean)[]
const user = ["atique", 25, true];
user.push("ashik"); // ✅ Allowed (string)
user.push(26); // ✅ Allowed (number)
user.push(false); // ✅ Allowed (boolean)
// user.push({});   // ❌ Error — object is not part of the inferred union type

// ARRAY WITH TYPE ANNOTATION (HOMOGENEOUS ARRAY)
// Type annotation forces the array to have ONLY one type (string in this case).
const user2: string[] = ["atique", "ashik"];
user2.push("new name"); // ✅ Allowed
// user2.push(25);      // ❌ Error — number not allowed in string[]

// ARRAY WITH UNION TYPES (HETEROGENEOUS ARRAY)
// This allows multiple types — here, string OR number.
const user3: (string | number)[] = ["atique", "ashik", 26];
user3.push(99); // ✅ Allowed (number)
user3.push("hello"); // ✅ Allowed (string)
// user3.push(true);  // ❌ Error — boolean not allowed

// READONLY ARRAY (CANNOT BE MODIFIED)
const colors: readonly string[] = ["red", "green", "blue"];
// colors.push("yellow"); // ❌ Error — Cannot modify a readonly array

//Spread & Rest
let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5];
let merged: number[] = [...arr1, ...arr2]; // [1, 2, 3, 4, 5]

console.log(merged);

function logAll(...args: number[]) {
  console.log(args);
}

logAll(1, 2, 3, 4); // [1, 2, 3, 4]

type User = {
  id: number;
  name: string;
  age: number;
  role: { name: "Admin" | "User" };
  isActive?: boolean;
  address: {
    city: string;
    house?: { flatno?: number; houseno?: number };
  };
  greet: () => string;
};

const admnis: User[] = [
  {
    id: 1,
    name: "Asif",
    age: 26,
    role: { name: "Admin" },
    isActive: true,
    address: { city: "Mirpur", house: { flatno: 101 } },
    greet() {
      return `Hello, ${this.name}`;
    },
  },
  {
    id: 2,
    name: "Rafi",
    age: 30,
    role: { name: "Admin" },
    address: { city: "Banani" }, // house omitted
    greet() {
      return `Welcome, ${this.name}`;
    },
  },
  {
    id: 3,
    name: "Akash",
    age: 30,
    role: { name: "User" },
    address: { city: "Jatrabari" }, // house omitted
    greet() {
      return `Welcome, ${this.name}`;
    },
  },
];

admnis.map((admin: User) => {
  let activity: boolean | undefined = admin.isActive; //infer type boolean and string
  console.log(activity);
});

//Here type define is not understand
const groupBy = admnis.reduce((acc: Record<string, string[]>, cur: User) => {
  let roleName: "Admin" | "User" = cur.role.name;
  if (!acc[roleName]) {
    acc[roleName] = [];
  }
  acc[roleName].push(cur.name);
  return acc;
}, {});
console.log(groupBy);
