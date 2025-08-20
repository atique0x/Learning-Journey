// Store & retrive users in localStorage
export function setUser() {
  const loggedUsers = [
    { username: "atique", password: "1234" },
    { username: "asif", password: "1234" },
    { username: "akash", password: "1234" },
    { username: "rafid", password: "1234" },
    { username: "tamim", password: "1234" },
  ];
  localStorage.setItem("users", JSON.stringify(loggedUsers));
}

export const getRegisterUsers = () =>
  JSON.parse(localStorage.getItem("users")) || [];
