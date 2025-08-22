interface User {
  username: string;
  password: string;
}
interface UserWithFullName extends User {
  name: string;
}

interface UserWithEmail extends User {
  email: string;
}
interface UserWithEmailFullName extends User {
  email: string;
  name: string;
}

type UserCategory =
  | User
  | UserWithEmail
  | UserWithFullName
  | UserWithEmailFullName;

function submitUser(username: string, password: string): User;
function submitUser(
  username: string,
  password: string,
  fullname: string
): UserWithFullName;

function submitUser(
  username: string,
  password: string,
  email: string
): UserWithEmail;

function submitUser(
  username: string,
  password: string,
  fullname: string,
  email: string
): UserWithEmailFullName;

// Implementation
function submitUser(
  username: string,
  password: string,
  name?: string,
  email?: string
): UserCategory {
  let user: UserCategory;

  if (name && email) {
    user = { username, password, name, email };
    return user;
  } else if (name) {
    user = { username, password, name };
    return user;
  } else if (email) {
    user = { username, password, email };
    return user;
  } else {
    user = { username, password };
    return user;
  }
}

const form = document.getElementById("userForm") as HTMLFormElement;
const output = document.getElementById("output") as HTMLDivElement;

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  const username = (
    form.elements.namedItem("username") as HTMLInputElement
  ).value.trim();
  const password = (
    form.elements.namedItem("password") as HTMLInputElement
  ).value.trim();
  const fullname = (
    form.elements.namedItem("fullname") as HTMLInputElement
  ).value.trim();
  const email = (
    form.elements.namedItem("email") as HTMLInputElement
  ).value.trim();

  if (!username || !password) {
    alert("Username and password are required!");
    return;
  }
  let user: UserCategory;
  if (fullname && email) user = submitUser(username, password, fullname, email);
  else if (fullname) user = submitUser(username, password, fullname);
  else if (email) user = submitUser(username, password, email);
  else user = submitUser(username, password);

  output.classList.remove("hidden");
  output.innerHTML = `
        <h2 class="text-lg font-semibold mb-2">Submitted User:</h2>
        <pre class="bg-gray-200 rounded-lg p-3 text-sm">${JSON.stringify(
          user,
          null,
          2
        )}</pre>
      `;
});

function doubles(value: number | number[]): number | number[] {
  if (Array.isArray(value)) return value.map((v) => v * 2);
  return value * 2;
}

const results1 = doubles(5); // TypeScript infers: number | number[]
const results2 = doubles([1, 2, 3]); // TypeScript infers: number | number[]
//results1.toFixed(2);

function double(value: number): number;
function double(value: number[]): number[];
function double(value: number | number[]): number | number[] {
  if (Array.isArray(value)) return value.map((v) => v * 2);
  return value * 2;
}

const result1 = double(5); // TypeScript infers: number
const result2 = double([1, 2, 3]); // TypeScript infers: number[]

console.log(result1.toFixed());
