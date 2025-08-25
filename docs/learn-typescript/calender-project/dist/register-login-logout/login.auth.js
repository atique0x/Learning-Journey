import { calenderRender } from "../calender-booking/calender.js";
import { setToken } from "../token/cookie-token.js";
import { getRegisterUsers } from "./register.js";
import { updateUI } from "../ui-render/ui-update.js";
export const form = document.getElementById("loginForm");
const nameField = document.getElementById("username");
const passwordField = document.getElementById("password");
export const login = () => {
    form?.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = nameField.value.trim();
        const password = passwordField.value.trim();
        console.log(username, password);
        if (!username || !password) {
            alert("Please provide username and password");
            return;
        }
        //Validation check
        const registerUsers = getRegisterUsers();
        const user = registerUsers.find((user) => user.username === username);
        if (user) {
            if (user.password === password) {
                setToken(username);
                updateUI();
                alert("Successfully login...");
                calenderRender();
            }
            else {
                alert("Password doesn't match. Please provide correctly");
            }
        }
        else {
            alert("You are currently not registered");
        }
        form.reset();
    });
};
