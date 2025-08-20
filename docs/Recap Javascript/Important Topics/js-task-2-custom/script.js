import { setUser, getRegisterUsers } from "./register.js";
import { getToken, removeToken } from "./token.js";
import { loginAuth } from "./login.auth.js";
import { calenderRender } from "./calender.js";
import { confirmBook, finalBooked } from "./booking.js";

setUser();
calenderRender();

// DOM elements
const form = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logout");
const calenderDiv = document.getElementById("calender-div");
const userNameDisplay = document.getElementById("user-name-display");

export const updateUI = () => {
  const username = getToken("username");
  console.log(username);
  if (username) {
    calenderDiv.removeAttribute("hidden");
    form.setAttribute("hidden", "hidden");
    userNameDisplay.textContent = `Currently Logged In: ${
      username[0].toUpperCase() + username.slice(1)
    }`;
    finalBooked();
  } else {
    calenderDiv.setAttribute("hidden", "hidden");
    form.removeAttribute("hidden");
    confirmBook.removeAttribute("hidden");
  }
};

// Logout handler
logoutBtn.addEventListener("click", () => {
  const currentUser = getToken("username");
  if (!currentUser) return;
  removeToken();
  updateUI();
  finalBooked();
  alert("Logout successfully...");
});

// Login form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  if (!username && !password) {
    alert("Please provide username and password");
    return;
  }
  loginAuth(username, password);
  form.reset();
});

updateUI();
