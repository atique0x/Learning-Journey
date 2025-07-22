// Basic console test
console.log("Hello");

// === 1. Replace (case-insensitive)
const text = "Visit W3Schools. Is this all there is?";
const change1 = text.replace(/w3Schools/i, "Microsoft");
console.log("Original Text:", text);
console.log("After Replace:", change1);

// === 2. Match (case-insensitive search for 'is')
const matchCaseInsensitive = text.match(/is/i);
console.log("Match 'is' (case-insensitive):", matchCaseInsensitive);

// === 3. Match any of [i, s, a] globally
let result = text.match(/[isa]/g);
console.log("Match [i, s, a] globally:", result);

// === 4. Email Pattern: Letter(s) followed by digit(s), ending with '@'
console.log("Email Test:", /[a-zA-Z]\d*@/.test("satique06@gmail.com")); // true

// === 5. Match specific character [W] globally
const text3 = "This is W3Schools";
const pattern3 = /[W]/g;
const result3 = text3.match(pattern3);
console.log("Match [W] globally:", result3); // ["W"]

// === 6. BD Phone Number (with space formatting)
const number = "01311 33 0653";
console.log("BD Number Pattern Test:", /\d{5}\s\d{2}\s\d{4}/.test(number)); // true

// === 7. Date Format dd-mm-yyyy or dd/mm/yyyy
const date = "22/07/2025";
const datePattern = /^\d{2}[-/]\d{2}[-/]\d{2,4}$/;
console.log("Date Pattern Test:", datePattern.test(date)); // true
