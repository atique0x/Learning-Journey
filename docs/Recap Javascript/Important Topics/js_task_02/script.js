const loggedUsers = [
  { username: "atique", password: "1234" },
  { username: "asif", password: "1234" },
  { username: "akash", password: "1234" },
  { username: "rafid", password: "1234" },
  { username: "tamim", password: "1234" },
];
localStorage.setItem("users", JSON.stringify(loggedUsers));

const getUserData = () => JSON.parse(localStorage.getItem("users"));

const setCookie = (username) => {
  document.cookie = `username=${username}; max-age=1800; path=/`;
};

const getCookie = (name) => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
};

const removeCookie = () => {
  document.cookie = "username=; max-age=0; path=/";
};

let booked = JSON.parse(localStorage.getItem("booked")) || [];

const form = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logout");
const loginBtn = document.getElementById("login");
const fullCalender = document.getElementById("fullcalender");
const confirmBook = document.getElementById("confirm-book");

const updateUI = () => {
  const username = getCookie("username");
  if (username) {
    logoutBtn.removeAttribute("hidden");
    fullCalender.removeAttribute("hidden");
    loginBtn.setAttribute("hidden", "hidden");
  } else {
    logoutBtn.setAttribute("hidden", "hidden");
    fullCalender.setAttribute("hidden", "hidden");
    loginBtn.removeAttribute("hidden");
  }
};
updateUI();

logoutBtn.addEventListener("click", () => {
  removeCookie();
  alert("User logged out successfully");
  updateUI();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const users = getUserData();

  const user = users.find((u) => u.username === username);
  if (!user) return alert("User not defined");
  if (user.password !== password) return alert("Password doesn't match");

  setCookie(username);
  updateUI();
  alert("Logged in successfully");
  form.reset();
});

function showCalender() {
  const { Calendar } = window.VanillaCalendarPro;

  const options = {
    onCreateDateEls(self, dateEl) {
      const isWeekend = dateEl.getAttribute("data-vc-date-weekend");
      const btn = dateEl.querySelector("button");
      btn.classList.add(
        "flex",
        "flex-col",
        "gap-2",
        "!p-2",
        "!border",
        "!font-bold"
      );

      const dateStr = dateEl.getAttribute("data-vc-date");
      const dateTime = new Date(dateStr).getTime();
      const today = new Date().getTime() - 24 * 60 * 60 * 1000;

      const span = document.createElement("span");
      btn.appendChild(span);

      if (isWeekend === "") {
        btn.disabled = true;
        btn.classList.add("!bg-gray-400", "!text-white", "!cursor-not-allowed");
        span.innerText = "Weekend";
      } else if (dateTime < today) {
        btn.disabled = true;
        btn.classList.add("!bg-red-300", "!text-white", "!cursor-not-allowed");
        span.innerText = "Not Available";
      } else {
        const username = getCookie("username");
        const findBooked = booked.find((b) => b.date === dateStr);
        if (findBooked) {
          if (findBooked.isBooked === "pending") {
            span.innerText = "Pending";
            btn.disabled = true;
            btn.classList.add("!bg-orange-400", "!cursor-not-allowed");
          } else if (findBooked.isBooked === "booked") {
            span.innerText = "Booked";
            btn.disabled = true;
            btn.classList.add(
              "!bg-green-500",
              "!text-white",
              "!cursor-not-allowed"
            );
          }
        } else {
          span.innerText = "Available";
          btn.addEventListener("click", () => {
            if (booked.find((b) => b.currentUser === username)) {
              return alert("You already submitted a booking");
            }

            booked.push({
              currentUser: username,
              date: dateStr,
              isBooked: "pending",
            });
            localStorage.setItem("booked", JSON.stringify(booked));

            span.innerText = "Pending";
            btn.disabled = true;
            btn.classList.add("!bg-orange-400", "!cursor-not-allowed");

            showConfirmation(username, dateStr);
          });
        }
      }
    },
  };

  const calendar = new Calendar("#calendar", options);
  calendar.init();
}

function showConfirmation(username, date) {
  confirmBook.innerHTML = "";

  const div = document.createElement("div");
  div.innerHTML = `Username: <b>${username}</b><br>Date: <b>${date}</b><br>Status: Pending`;

  const button = document.createElement("button");
  button.innerText = "Confirm Booking";
  button.classList.add("p-2", "mt-2", "bg-blue-500", "text-white", "rounded");

  const timeoutId = setTimeout(() => {
    booked = booked.filter(
      (b) =>
        !(
          b.currentUser === username &&
          b.date === date &&
          b.isBooked === "pending"
        )
    );
    localStorage.setItem("booked", JSON.stringify(booked));
    confirmBook.setAttribute("hidden", "hidden");
  }, 10000);

  button.addEventListener("click", () => {
    clearTimeout(timeoutId);
    const booking = booked.find(
      (b) => b.currentUser === username && b.date === date
    );
    if (booking) {
      booking.isBooked = "booked";
      localStorage.setItem("booked", JSON.stringify(booked));
      alert("Booking confirmed!");
      confirmBook.setAttribute("hidden", "hidden");
      showCalender();
    }
  });

  confirmBook.appendChild(div);
  confirmBook.appendChild(button);
  confirmBook.removeAttribute("hidden");
}

showCalender();
