import { bookedInfo, finalBooked, setBookingData } from "./bookings.js";
import { Status } from "../type-defining/type.js";
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
// Format date as YYYY-MM-DD
const formatDate = (year, month, day) => {
    const mm = String(month + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
};
// Apply styles and labels based on status
const setDayStatus = (dayBtn, dateTag, status) => {
    dayBtn.disabled = status !== Status.Available;
    dayBtn.classList.add("!cursor-not-allowed");
    dayBtn.classList.remove("hover:bg-blue-500", "hover:text-white");
    switch (status) {
        case Status.Weekend:
            dateTag.className = "bg-red-300 rounded-md";
            dayBtn.classList.add("bg-gray-300");
            break;
        case Status.Unavailable:
            dateTag.className = "bg-orange-200 rounded-md";
            dayBtn.classList.add("bg-gray-200");
            break;
        case Status.Booked:
            dateTag.className = "bg-blue-400 rounded-md";
            dayBtn.classList.add("bg-blue-500");
            break;
        case Status.Pending:
            dateTag.className = "bg-orange-400 rounded-md";
            dayBtn.classList.add("bg-orange-500");
            break;
        case Status.Available:
            dateTag.className = "bg-green-400 rounded-md";
            dayBtn.classList.add("cursor-pointer", "hover:bg-green-200");
            break;
    }
    dateTag.innerText = status;
};
const createEmptyDiv = () => {
    const div = document.createElement("div");
    div.classList.add("bg-gray-200");
    return div;
};
export const calenderRender = () => {
    monthYear.innerText = `${months[currentMonth]} ${currentYear}`;
    prevBtn.disabled = currentYear === todayYear && currentMonth === todayMonth;
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    daysContainer.innerHTML = "";
    // Empty divs for alignment
    for (let i = 0; i < firstDay; i++)
        daysContainer.appendChild(createEmptyDiv());
    const todayDate = new Date(new Date().setHours(0, 0, 0, 0)).getTime();
    for (let day = 1; day <= lastDate; day++) {
        const dateObj = new Date(currentYear, currentMonth, day);
        const dateId = formatDate(currentYear, currentMonth, day);
        const dayBtn = document.createElement("button");
        dayBtn.id = dateId;
        dayBtn.textContent = `${day}`;
        dayBtn.setAttribute("data-weekday", `${weekdays[dateObj.getDay()]}`);
        dayBtn.classList.add("p-2", "rounded-md", "border", "border-gray-300", "text-center", "cursor-pointer");
        const dateTag = document.createElement("p");
        const btnDate = dateObj.getTime();
        // Weekend
        let status;
        if (dayBtn.dataset.weekday === "Saturday" ||
            dayBtn.dataset.weekday === "Sunday") {
            status = Status.Weekend;
        }
        // Past dates
        else if (btnDate < todayDate) {
            status = Status.Unavailable;
        }
        // Available / Booked / Pending
        else {
            const booked = bookedInfo.find((b) => b.date === dayBtn.id);
            status = booked
                ? booked.status === Status.Booked
                    ? Status.Booked
                    : Status.Pending
                : Status.Available;
        }
        setDayStatus(dayBtn, dateTag, status);
        if (status === Status.Available) {
            dayBtn.addEventListener("click", () => {
                setBookingData(dayBtn.id);
                finalBooked();
            });
        }
        dayBtn.appendChild(dateTag);
        daysContainer.appendChild(dayBtn);
    }
    for (let i = firstDay + lastDate; i < 42; i++)
        daysContainer.appendChild(createEmptyDiv());
};
// Previous / Next buttons
prevBtn.addEventListener("click", () => {
    if (currentYear === todayYear && currentMonth === todayMonth)
        return;
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
// Initial render
calenderRender();
