import { getToken } from "../token/cookie-token.js";
import { form } from "../register-login-logout/login.auth.js";

const calenderDiv = document.getElementById("calender-div") as HTMLDivElement;
const userNameDisplay = document.getElementById(
  "user-name-display"
) as HTMLHeadingElement;
const confirmBook = document.getElementById("confirm-book") as HTMLDivElement;

export const updateUI = (): void => {
  const username: string | undefined = getToken("username");

  console.log(username);

  if (username) {
    form.setAttribute("hidden", "hidden");
    calenderDiv.removeAttribute("hidden");
    userNameDisplay.textContent = `Currently logged in: ${
      username[0]?.toUpperCase() + username.slice(1)
    }`;
  } else {
    form.removeAttribute("hidden");
    calenderDiv?.setAttribute("hidden", "hidden");
    confirmBook?.removeAttribute("hidden");
  }
};
