export const confirmBook = document.getElementById("confirm-book");
import { calenderRender } from "./calender.js";
import { updateUI } from "./script.js";
import { getToken } from "./token.js";
// Booking logic
export const bookedInfo = JSON.parse(localStorage.getItem("bookedInfo")) || [];

export function setBookings(date) {
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
  calenderRender();
  finalBooked();
}

// Booking confirmation
export function finalBooked() {
  confirmBook.innerHTML = "";
  const username = getToken("username");
  const checkBooked = bookedInfo.find(
    (b) => b.user === username && b.status === "pending"
  );
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
    confirmBook.setAttribute("hidden", "hidden");
    calenderRender();
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
      calenderRender();
    } else {
      timer.innerText = `Time remaining: ${remaining}s`;
    }
  }, 100);

  confirmBook.appendChild(button);
}
finalBooked();
