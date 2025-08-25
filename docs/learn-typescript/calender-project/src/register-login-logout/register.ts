// Store & retrive users in localStorage
import { RegisterUser } from "../type-defining/type.js";

export const setUser = (): void => {
  const registerUsers: RegisterUser[] = [
    { username: "atique", password: "1234" },
    { username: "asif", password: "1234" },
    { username: "akash", password: "1234" },
    { username: "rafid", password: "1234" },
    { username: "tamim", password: "1234" },
  ];
  localStorage.setItem("users", JSON.stringify(registerUsers));
};
setUser();

export const getRegisterUsers = (): RegisterUser[] => {
  const findUsers: string | null = localStorage.getItem("users");
  let users: RegisterUser[];
  if (!findUsers) users = [];
  else {
    users = JSON.parse(findUsers);
  }
  return users;
};
