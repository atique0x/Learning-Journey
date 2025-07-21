// Create dates in various formats
console.log("Default Current Date:", new Date());
console.log("Date from 'Jul 21, 2025':", new Date("Jul 21, 2025"));
console.log("Date from '21 Jul, 2025':", new Date("21 Jul, 2025"));
console.log("ISO-like format (2005-12-5):", new Date("2005-12-5"));

// Create with specific values
console.log("Specific Date & Time:", new Date(2018, 7, 25, 15, 40, 20, 36));
console.log("From Timestamp (ms):", new Date(1753079431009));
console.log("Only Year String:", new Date("2024"));
console.log("Only Year Number:", new Date(2024)); // treated as ms
console.log("Year and Month:", new Date(2024, 8)); // Sept 1, 2024

// Output in string formats
console.log("toDateString():", new Date().toDateString());
console.log("toUTCString():", new Date().toUTCString());
console.log("toISOString():", new Date().toISOString());

// Use arrays for readable day/month names
const today = new Date();
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
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

// Extract parts
console.log("Today:", today);
console.log("Day:", days[today.getDay()]);
console.log("Year:", today.getFullYear());
console.log("Month:", months[today.getMonth()]);
console.log("Date:", today.getDate());
console.log("Hours:", today.getHours());
console.log("Minutes:", today.getMinutes());
console.log("Seconds:", today.getSeconds());
console.log("Milliseconds:", today.getMilliseconds());
console.log("Total Milliseconds since 1970:", today.getTime());

// Modify date
today.setDate(25);
console.log("After setDate(25):", today);
