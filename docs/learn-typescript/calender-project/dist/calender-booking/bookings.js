import { calenderRender } from "./calender.js";
import { getToken } from "../token/cookie-token.js";
import { Status } from "../type-defining/type.js";
export const confirmBook = document.getElementById("confirm-book");
const BOOKING_EXPIRY_MS = 200000;
let intervalId = null;
export let bookedInfo = [];
const localBookData = localStorage.getItem("bookedInfo");
bookedInfo = localBookData ? JSON.parse(localBookData) : [];
const saveBookings = () => {
    localStorage.setItem("bookedInfo", JSON.stringify(bookedInfo));
};
const findPendingBooking = (currentUser) => {
    return bookedInfo.find((book) => book.user === currentUser && book.status === Status.Pending);
};
export const setBookingData = (date) => {
    const currentUser = getToken("username");
    if (!currentUser)
        return;
    const pending = findPendingBooking(currentUser);
    if (pending)
        return alert("You have a pending booking");
    bookedInfo.push({
        user: currentUser,
        date,
        status: Status.Pending,
        createdAt: new Date().getTime(),
    });
    saveBookings();
    calenderRender();
    finalBooked();
};
export const finalBooked = () => {
    confirmBook.innerHTML = "";
    const currentUser = getToken("username");
    if (!currentUser)
        return;
    const pending = findPendingBooking(currentUser);
    if (!pending) {
        confirmBook.setAttribute("hidden", "hidden");
        return;
    }
    confirmBook.removeAttribute("hidden");
    renderBookingInfo(pending);
};
const renderBookingInfo = (pending) => {
    confirmBook.innerHTML = `
  <table class="w-4xl border border-gray-300 text-left">
    <thead>
      <tr class="bg-gray-200">
        <th class="px-4 py-2 border">Booking Date</th>
        <th class="px-4 py-2 border">Status</th>
        <th class="px-4 py-2 border">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="px-4 py-2 border">${pending.date}</td>
        <td class="px-4 py-2 border">${pending.status.toUpperCase()}<span id="timer" class="ml-10 text-red-500 font-bold mt-2"></span></td>
        <td class="px-4 py-2 border">
          <button id="confirm-btn" class="bg-blue-500 text-white py-2 px-4">Confirm</button>

        </td>
      </tr>
    </tbody>
  </table>
`;
    document
        .getElementById("confirm-btn")
        ?.addEventListener("click", () => handleConfirm(pending));
    startBookingTimer(pending);
};
const handleConfirm = (pending) => {
    {
        pending.status = Status.Booked;
        saveBookings();
        confirmBook.setAttribute("hidden", "hidden");
        calenderRender();
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        alert("Booking complete...");
    }
};
const startBookingTimer = (pending) => {
    const timer = document.getElementById("timer");
    if (intervalId)
        clearInterval(intervalId);
    intervalId = setInterval(() => {
        const remaining = Math.ceil((pending.createdAt + BOOKING_EXPIRY_MS - Date.now()) / 1000);
        if (remaining <= 0) {
            bookedInfo = bookedInfo.filter((b) => b !== pending);
            saveBookings();
            confirmBook.setAttribute("hidden", "hidden");
            clearInterval(intervalId);
            intervalId = null;
            calenderRender();
        }
        else {
            timer.innerText = `Time remaining: ${remaining}s`;
        }
    }, 100);
};
finalBooked();
