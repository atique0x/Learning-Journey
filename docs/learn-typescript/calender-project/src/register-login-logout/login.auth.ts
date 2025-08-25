import { calenderRender } from "../calender-booking/calender.js";
import { setToken } from "../token/cookie-token.js";
import { getRegisterUsers } from "./register.js";
import { RegisterUser } from "../type-defining/type.js";
import { updateUI } from "../ui-render/ui-update.js";

export const form = document.getElementById("loginForm") as HTMLFormElement;
const nameField = document.getElementById("username") as HTMLInputElement;
const passwordField = document.getElementById("password") as HTMLInputElement;

export const login = (): void => {
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const username: string = nameField.value.trim();
    const password: string = passwordField.value.trim();
    console.log(username, password);

    if (!username || !password) {
      alert("Please provide username and password");
      return;
    }

    //Validation check
    const registerUsers: RegisterUser[] = getRegisterUsers();

    const user: RegisterUser | undefined = registerUsers.find(
      (user) => user.username === username
    );
    if (user) {
      if (user.password === password) {
        setToken(username);
        updateUI();
        alert("Successfully login...");
        calenderRender();
      } else {
        alert("Password doesn't match. Please provide correctly");
      }
    } else {
      alert("You are currently not registered");
    }
    form.reset();
  });
};
