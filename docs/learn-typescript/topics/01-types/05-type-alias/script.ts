type UserId = number | string;
let userId: UserId;

userId = 1234; // number
userId = "1234"; // string
//userId = true; // Error: Type 'boolean' is not assignable to type 'UserId'.

type Status = "success" | "error" | "pending";

let currentStatus: Status;
currentStatus = "success"; // ✅ Allowed
// currentStatus = "loading"; // ❌ Error

type Users = {
  id: number;
  name: string;
  age: number;
  isActive?: boolean;
};

const user: Users = {
  id: 1,
  name: "Alice",
  age: 30,
};
console.log(user);

type GreetUser = (name: string) => string;

const greetUser = (name: string): string => {
  return `Hello, ${name}!`;
};

const greetUser2: GreetUser = (name) => {
  return `Hello, ${name}!`;
};

type TaskStatus = "todo" | "in-progress" | "done";
type Priority = "low" | "medium" | "high";

type User = {
  id: number;
  name: string;
  email: string;
  bio?: string;
  profilePicture?: string;
};

type Task = {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: Priority;
  assignee: User;
  tags: string[];
};

const user1: User = {
  id: 101,
  name: "Atique",
  email: "satique06@gmail.com",
};

const task1: Task = {
  id: 401,
  title: "Typescript",
  status: "in-progress",
  priority: "high",
  assignee: user1,
  tags: ["typescript", "learning", "frontend"],
};

type updateStatus = (task: Task, status: TaskStatus) => Task;

const updateTaksStatus = (task1: Task, status: TaskStatus): Task => {
  task1.status = status;
  return task1;
};

const updateAnotherTaksStatus: updateStatus = (task, status) => {
  task.status = status;
  return task;
};

console.log(updateTaksStatus(task1, "done"));

console.log(updateAnotherTaksStatus(task1, "todo"));

type Admin = {
  id: number;
  name: string;
  age: number;
  role: {
    role_id: number;
    name: "Admin";
  };
  address: {
    city: {
      name: string;
      postcode?: number;
    };
    house: {
      flatno?: number;
      houseno?: number;
    };
  };
  isActive?: boolean;
};

const admin1: Admin = {
  id: 1,
  name: "Asif",
  age: 26,
  address: {
    city: {
      name: "Mirpur",
      postcode: 1216,
    },
    house: {},
  },
  role: {
    role_id: 1,
    name: "Admin",
  },
};
