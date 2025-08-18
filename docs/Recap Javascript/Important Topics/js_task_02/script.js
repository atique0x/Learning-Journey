const loggedUsers = [
  { username: "atique", password: "1234" },
  { username: "asif", password: "1234" },
  { username: "akash", password: "1234" },
  { username: "rafid", password: "1234" },
  { username: "tamim", password: "1234" },
];
//Set userdata to local storage
localStorage.setItem("users", JSON.stringify(loggedUsers));

//get userdata from local storage
const getUserData = () => {
  return JSON.parse(localStorage.getItem("users"));
};

let calendarDates = JSON.parse(localStorage.getItem("dates"));

if (!calendarDates) {
  calendarDates = [];
  for (let day = 1; day <= 28; day++) {
    calendarDates.push({
      id: `day-${day}`,
      value: `${day}`,
      isAvailable: true,
    });
  }
  localStorage.setItem("dates", JSON.stringify(calendarDates));
}

//
const form = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logout");
const loginBtn = document.getElementById("login");
const fullCalender = document.getElementById("fullcalender");

//set cookie stay 30 min
const setCookie = (username) => {
  document.cookie = `username=${username}; max-age=1800; path=/`;
};

const getCookie = (name) => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
};

const removeCookie = () => {
  document.cookie = `username=; max-age=0; path=/`;
};

const dateBook = () => {};

const setBookedInfoIntoStorage = (user, dateId) => {
  const newBooked = JSON.parse(localStorage.getItem("bookedData")) || [];
  newBooked.push({ user, dateId });

  localStorage.setItem("bookedData", JSON.stringify(newBooked));
};

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

//Logout user
logoutBtn.addEventListener("click", () => {
  removeCookie();
  alert("User logged out successfully");
  updateUI();
});

//Submit user info
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const users = getUserData();
  console.log(users);

  const user = users.find((user) => user.username === username);

  if (user) {
    if (user.password === password) {
      console.log("Username:", username);
      console.log("Password:", password);

      setCookie(username);

      updateUI();
      alert("Logged in successfully");
    } else {
      alert("Password doesn't match");
    }
  } else {
    alert("User not defiend");
  }
  form.reset();
});

updateUI();

const calendarContainer = document.getElementById("calendar");

for (let i = 0; i < calendarDates.length; i++) {
  const date = calendarDates[i];
  const button = document.createElement("button");
  const today = new Date().getDate();

  if (date.value < today) {
    date.isAvailable = "unavailable";
    localStorage.setItem("dates", JSON.stringify(calendarDates));
  }

  const buttonUI = () => {
    button.id = date.id;
    button.className = `p-2 border border-gray-200 rounded ${
      date.isAvailable === "unavailable"
        ? "bg-gray-400 text-white cursor-not-allowed"
        : date.isAvailable
        ? "cursor-pointer"
        : "bg-gray-400 text-white cursor-not-allowed"
    }`;

    button.innerHTML = `${date.value} <br> ${
      date.isAvailable === "unavailable"
        ? "Not Available"
        : date.isAvailable
        ? "Available"
        : "Booked"
    }`;
  };
  buttonUI();

  button.addEventListener("click", () => {
    const username = getCookie("username");

    console.log(username);
    if (date.isAvailable === true) {
      const isBooked = prompt("If you want to book, write yes").toLowerCase();
      if (isBooked === "yes") {
        date.isAvailable = false;
        localStorage.setItem("dates", JSON.stringify(calendarDates));
        setBookedInfoIntoStorage(username, date.id);
        buttonUI();
      } else {
        alert("No booked select");
      }
    } else {
      alert("Already booked");
    }
  });
  calendarContainer.appendChild(button);
}

// console.log(today);
