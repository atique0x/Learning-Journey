const allUsers = JSON.parse(localStorage.getItem("users")) || [];

const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const registerBtn = document.getElementById("registerBtn");
const loginBtn = document.getElementById("loginBtn");
const formDiv = document.getElementById("formDiv");
const profile = document.getElementById("profile");
const logoutBtn = document.getElementById("logoutBtn");

function setLocalStorage(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

function showRegisterForm() {
  loginForm.setAttribute("hidden", "hidden");
  registerForm.removeAttribute("hidden");
}

function showLoginForm() {
  registerForm.setAttribute("hidden", "hidden");
  loginForm.removeAttribute("hidden");
}

function handleRegisterSubmit(e) {
  e.preventDefault();

  const username = e.target.username.value.trim();
  const userNameReg = /^[a-zA-Z][a-zA-Z0-9]{2,11}$/;
  if (!userNameReg.test(username)) {
    alert(
      "Username must start with a letter, be 3–12 chars long, and contain only letters & numbers."
    );
    return;
  }

  if (allUsers.find((user) => user.username === username)) {
    alert("You already have an account");
    return;
  }

  const newUser = {
    _id: allUsers.length + 1,
    username: username,
    email: e.target.email.value.trim(),
    password: e.target.password.value,
  };

  allUsers.push(newUser);
  setLocalStorage(allUsers);
  alert("Registration successful!");

  e.target.reset();
  registerForm.setAttribute("hidden", "hidden");
  showLoginForm();
}

function handleLoginSubmit(e) {
  e.preventDefault();

  const username = e.target.usernameLogIn.value.trim();
  const password = e.target.passwordLogIn.value;

  if (!username || !password) {
    alert("Please enter both username and password");
    return;
  }

  const findUser = allUsers.find((user) => user.username === username);
  if (!findUser) {
    alert("Currently don't have any account. Register First");
    return;
  }

  if (findUser.password !== password) {
    alert("Password doesn't match");
    return;
  }

  alert(`Successfully logged in as ${username}`);

  const date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
  const expires = date.toUTCString();
  document.cookie = `username=${findUser.username}; path=/; expires=${expires}`;

  e.target.reset();
  updateUI();
}

function updateUI() {
  const cookieValue = getCookie("username");
  if (cookieValue) {
    formDiv.setAttribute("hidden", "hidden");
    profile.removeAttribute("hidden");

    const user = allUsers.find((user) => user.username === cookieValue);
    if (user) {
      document.getElementById("profileUsername").innerText = user.username;
      document.getElementById("profileEmail").innerText = user.email;
    } else {
      profile.innerHTML = "<p>User not found</p>";
    }
  } else {
    formDiv.removeAttribute("hidden");
    profile.setAttribute("hidden", "hidden");
  }
}

function handleLogout() {
  document.cookie = "username=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  alert("User successfully logged out");
  updateUI();
}

registerBtn.addEventListener("click", showRegisterForm);
loginBtn.addEventListener("click", showLoginForm);
registerForm.addEventListener("submit", handleRegisterSubmit);
loginForm.addEventListener("submit", handleLoginSubmit);
logoutBtn.addEventListener("click", handleLogout);

updateUI();
