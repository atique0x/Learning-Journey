const loggedUsers = [
  { username: "atique", password: "1234" },
  { username: "asif", password: "1234" },
  { username: "akash", password: "1234" },
  { username: "rafid", password: "1234" },
  { username: "tamim", password: "1234" },
];

// Store & retrive users in localStorage
localStorage.setItem("users", JSON.stringify(loggedUsers));
const getRegisterUsers = () => JSON.parse(localStorage.getItem("users")) || [];

// DOM elements
const form = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logout");
const loginBtn = document.getElementById("login");
const fullCalender = document.getElementById("calender-div");
const confirmBook = document.getElementById("confirm-book");

// Cookie management
const setToken = (username) => {
  document.cookie = `username=${username}; max-age=1800; path=/`;
};

const getToken = (key) => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.trim().split("=");
    if (cookieKey === key) return cookieValue;
  }
  return null;
};

const removeToken = () => {
  document.cookie = "username=; max-age=0; path=/";
};

// UI update based on login status
const updateUI = () => {
  const username = getToken("username");
  if (username) {
    logoutBtn.removeAttribute("hidden");
    loginBtn.setAttribute("hidden", "hidden");
    fullCalender.removeAttribute("hidden");
  } else {
    logoutBtn.setAttribute("hidden", "hidden");
    loginBtn.removeAttribute("hidden");
    fullCalender.setAttribute("hidden", "hidden");
    confirmBook.setAttribute("hidden", "hidden");
  }
};

// Logout handler
logoutBtn.addEventListener("click", () => {
  const currentUser = getToken("username");
  const pendingBook = bookedInfo.find(
    (book) => book.user === currentUser && book.status === "pending"
  );
  if (pendingBook) {
    const index = bookedInfo.indexOf(pendingBook);
    bookedInfo.splice(index, 1);
    localStorage.setItem("bookedInfo", JSON.stringify(bookedInfo));
  }

  removeToken();
  updateUI();

  alert("User logged out successfully");
});

// Login form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const users = getRegisterUsers();

  const user = users.find((user) => user.username === username);

  if (user) {
    if (user.password === password) {
      setToken(username);
      updateUI();
      alert("Successfully login...");
      showCalender();
      finalBooked();
    } else {
      alert("Password doesn't match. Please provide correctly");
    }
  } else {
    alert("You are currently not registered");
  }
  form.reset();
});

updateUI();

// Booking logic
const bookedInfo = JSON.parse(localStorage.getItem("bookedInfo")) || [];
const setBookings = (date) => {
  const currentUser = getToken("username");
  if (!currentUser) return;

  const checkPending = bookedInfo.find(
    (book) => book.user === currentUser && book.status === "pending"
  );
  if (checkPending) {
    alert("You have a pending booking");
    return;
  }

  const newBook = {
    user: currentUser,
    date: date,
    status: "pending",
    createdAt: new Date().getTime(),
  };
  bookedInfo.push(newBook);
  localStorage.setItem("bookedInfo", JSON.stringify(bookedInfo));
  showCalender();
  finalBooked();
};

// Calendar rendering
function showCalender() {
  const { Calendar } = window.VanillaCalendarPro;

  const options = {
    onCreateDateEls(self, dateEl) {
      const btn = dateEl.querySelector("button");
      btn.classList.remove("vc-date__btn");
      btn.classList.add("flex", "flex-col", "gap-2", "!h-20");

      const p = document.createElement("p");

      const isWeekend = dateEl.getAttribute("data-vc-date-weekend");
      if (isWeekend !== null) {
        // Fixed weekend detection
        btn.disabled = true;
        btn.classList.add("!cursor-not-allowed", "!bg-gray-400", "!text-white");
        p.innerText = "Weekend";
        btn.appendChild(p);
        dateEl.appendChild(btn);
        return;
      }

      const date = dateEl.getAttribute("data-vc-date");
      const dateTime = new Date(date).getTime();
      const today = new Date();
      today.setHours(0, 0, 0, 0); // start of today

      if (dateTime < today.getTime()) {
        p.innerText = "Unavailable";
        btn.disabled = true;
        btn.classList.add("!bg-red-400", "!text-white", "!cursor-not-allowed");
      } else {
        p.innerText = "Available";

        const checkAlreadyBooked = bookedInfo.find((b) => b.date === date);
        if (checkAlreadyBooked) {
          if (checkAlreadyBooked.status === "booked") {
            p.innerText = "Booked";
            btn.disabled = true;
            btn.classList.add(
              "!bg-green-400",
              "!text-white",
              "!cursor-not-allowed"
            );
          } else if (checkAlreadyBooked.status === "pending") {
            p.innerText = "Pending";
            btn.disabled = true;
            btn.classList.add(
              "!bg-yellow-400",
              "!text-white",
              "!cursor-not-allowed"
            );
          }
        }
        if (!btn.disabled) {
          btn.addEventListener("click", () => {
            alert("Booking...");
            setBookings(date);
          });
        }
      }

      btn.appendChild(p);
      dateEl.appendChild(btn);
    },
  };

  new Calendar("#calendar", options).init();
}

showCalender();

// Booking confirmation
const finalBooked = () => {
  const username = getToken("username");
  const checkBooked = bookedInfo.find(
    (b) => b.user === username && b.status === "pending"
  );
  confirmBook.innerHTML = "";
  if (!checkBooked) {
    confirmBook.setAttribute("hidden", "hidden");
    return;
  }
  confirmBook.removeAttribute("hidden");
  const div = document.createElement("div");
  div.innerHTML = `
  <div>
    <p class="text-gray-800 font-semibold">Username: ${checkBooked.user}</p>
    <p class="text-gray-600">Status: ${checkBooked.status}</p>
    <p id="timer" class="text-red-500 font-bold"></p>
  </div>
`;
  confirmBook.appendChild(div);

  const button = document.createElement("button");
  button.innerText = "Confirm";
  button.classList.add("bg-blue-500", "text-white", "py-2", "px-4");

  button.addEventListener("click", () => {
    checkBooked.status = "booked";
    localStorage.setItem("bookedInfo", JSON.stringify(bookedInfo));
    showCalender();
    confirmBook.setAttribute("hidden", "hidden");
    clearInterval(interval);
    alert("Booking complete");
  });
  const timer = document.getElementById("timer");
  const interval = setInterval(() => {
    const remaining = Math.ceil(
      (checkBooked.createdAt + 100000 - Date.now()) / 1000
    );
    if (remaining <= 0) {
      const index = bookedInfo.indexOf(checkBooked);
      if (index !== -1) bookedInfo.splice(index, 1);
      localStorage.setItem("bookedInfo", JSON.stringify(bookedInfo));
      confirmBook.setAttribute("hidden", "hidden");
      clearInterval(interval);
      showCalender();
    } else {
      timer.innerText = `Time remaining: ${remaining}s`;
    }
  }, 1000);

  confirmBook.appendChild(button);
};
finalBooked();
