import { finalBooked } from "./booking.js";
import { setBookings } from "./booking.js";
import { bookedInfo } from "./booking.js";

const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("month-year");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const currentDate = new Date();

let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

const todayMonth = currentDate.getMonth();
const todayYear = currentDate.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function formatDate(year, month, day) {
  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

export function calenderRender() {
  monthYear.innerText = `${months[currentMonth]} ${currentYear}`;

  if (currentYear === todayYear && currentMonth === todayMonth) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
  //   console.log(firstDay, lastDate);
  daysContainer.innerHTML = "";
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("bg-gray-200");
    daysContainer.appendChild(emptyDiv);
  }

  for (let day = 1; day <= lastDate; day++) {
    const dateObj = new Date(currentYear, currentMonth, day);
    const dayBtn = document.createElement("button");
    const dateId = formatDate(currentYear, currentMonth, day);
    dayBtn.id = dateId;
    dayBtn.textContent = day;
    dayBtn.setAttribute("data-weekday", weekdays[dateObj.getDay()]);

    const dateTag = document.createElement("p");
    const btnDate = dateObj.getTime();
    const todayDate = new Date(new Date().setHours(0, 0, 0, 0)).getTime();

    // Base classes
    dayBtn.classList.add(
      "p-2",
      "rounded-md",
      "border",
      "border-gray-300",
      "text-center",
      "cursor-pointer"
    );

    if (
      dayBtn.dataset.weekday === "Saturday" ||
      dayBtn.dataset.weekday === "Sunday"
    ) {
      dateTag.classList.add("bg-red-300", "rounded-md");
      dateTag.innerText = "Weekend";
      dayBtn.disabled = true;
      dayBtn.classList.add("!cursor-not-allowed", "bg-gray-300");
      dayBtn.classList.remove("hover:bg-blue-500", "hover:text-white");
    } else if (btnDate < todayDate) {
      dateTag.classList.add("bg-orange-200", "rounded-md");
      dateTag.innerText = "Unavailable";
      dayBtn.disabled = true;
      dayBtn.classList.add("!cursor-not-allowed", "bg-gray-200");
      dayBtn.classList.remove("hover:bg-blue-500", "hover:text-white");
    } else {
      const booked = bookedInfo.find((b) => b.date === dayBtn.id);
      if (booked) {
        dayBtn.disabled = true;
        dayBtn.classList.add("!cursor-not-allowed");
        if (booked.status === "booked") {
          dateTag.classList.add("bg-blue-400", "rounded-md");
          dateTag.innerText = "Booked";
          dayBtn.classList.add("bg-blue-500");
        } else if (booked.status === "pending") {
          dateTag.classList.add("bg-orange-400", "rounded-md");
          dateTag.innerText = "Pending";
          dayBtn.classList.add("bg-orange-500");
        }
        dayBtn.classList.remove("hover:bg-blue-500", "hover:text-white");
      } else {
        dateTag.classList.add("bg-green-400", "rounded-md");
        dateTag.innerText = "Available";
        dayBtn.classList.add("hover:bg-green-200");
        dayBtn.addEventListener("click", () => {
          setBookings(dayBtn.id);
          finalBooked();
        });
      }
    }
    dayBtn.appendChild(dateTag);
    daysContainer.appendChild(dayBtn);
  }
  //   console.log(calender);
}

prevBtn.addEventListener("click", () => {
  if (currentYear === todayYear && currentMonth === todayMonth) return;
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  calenderRender();
});

nextBtn.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  calenderRender();
});

calenderRender();
