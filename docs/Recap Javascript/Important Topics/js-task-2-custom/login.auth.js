import { calenderRender } from "./calender.js";
import { getRegisterUsers } from "./register.js";
import { updateUI } from "./script.js";
import { setToken } from "./token.js";

export function loginAuth(username, password) {
  const users = getRegisterUsers();
  const user = users.find((user) => user.username === username);
  if (user) {
    if (user.password === password) {
      setToken(username);
      alert("Successfully login...");
      calenderRender();
      updateUI();
    } else {
      alert("Password doesn't match. Please provide correctly");
    }
  } else {
    alert("You are currently not registered");
  }
}
