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
const showBookedList = document.getElementById("show-booked-list");

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
    showBookedList.removeAttribute("hidden");
  } else {
    logoutBtn.setAttribute("hidden", "hidden");
    loginBtn.removeAttribute("hidden");
    fullCalender.setAttribute("hidden", "hidden");
    confirmBook.setAttribute("hidden", "hidden");
    showBookedList.setAttribute("hidden", "hidden");
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

//Login authentication
function loginAuth(username, password) {
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
}

// Login form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  loginAuth(username, password);
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
  showBookingList();
};

// Calendar rendering
function showCalender() {
  const { Calendar } = window.VanillaCalendarPro;

  const options = {
    displayDatesOutside: false,
    disableDatesPast: true,

    onCreateDateEls(self, dateEl) {
      const btn = dateEl.querySelector("button");
      // console.log(btn);
      if (!btn) return;
      btn.style.background = "inherit";
      btn.style.outline = "none";
      btn.className = "vc-date__btn flex flex-col gap-2 !h-20 ";
      const p = document.createElement("p");

      if (dateEl.getAttribute("data-vc-date-disabled") !== null) {
        p.innerText = "Disabled";
        btn.appendChild(p);
        return;
      }

      const date = dateEl.getAttribute("data-vc-date");

      if (dateEl.getAttribute("data-vc-date-weekend") !== null) {
        btn.disabled = true;
        btn.classList.add("!cursor-not-allowed", "!bg-gray-400", "!text-white");
        p.innerText = "Weekend";
      } else {
        const booked = bookedInfo.find((b) => b.date === date);
        if (booked) {
          btn.disabled = true;
          if (booked.status === "booked") {
            btn.classList.add(
              "!cursor-not-allowed",
              "!bg-green-500",
              "!text-white"
            );
            p.innerText = "Booked";
          } else if (booked.status === "pending") {
            btn.classList.add(
              "!cursor-not-allowed",
              "!bg-orange-400",
              "!text-white"
            );
            p.innerText = "Pending";
          }
        } else {
          p.innerText = "Available";
          btn.disabled = false;
          btn.addEventListener("click", () => setBookings(date));
        }
      }
      btn.appendChild(p);
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
    <p class="text-gray-800 font-semibold">Booking Date: ${checkBooked.date}</p>
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
    showBookingList();
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

function showBookingList() {
  showBookedList.innerHTML = "";
  const username = getToken("username");
  const bookedByUser = bookedInfo.filter(
    (b) => b.user === username && b.status === "booked"
  );
  const h = document.createElement("h2");
  h.innerText = "Previously Booked List";
  h.classList.add("text-2xl", "font-bold", "mb-6", "text-gray-800");
  showBookedList.appendChild(h);

  if (bookedByUser.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.innerText = "No bookings found.";
    emptyMsg.classList.add("text-gray-500", "italic");
    showBookedList.appendChild(emptyMsg);
    return;
  }

  bookedByUser.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("flex", "bg-white", "p-4", "mb-2", "gap-6");

    const dateP = document.createElement("p");
    dateP.innerText = `Booked Date: ${book.date}`;

    const createdAtP = document.createElement("p");
    const createdDate = new Date(book.createdAt);
    createdAtP.innerText = `Created: ${createdDate.toDateString()}`;
    createdAtP.classList.add("text-gray-500", "text-sm");

    div.append(dateP, createdAtP);
    showBookedList.appendChild(div);
  });
  console.log(bookedByUser);
}
showBookingList();
