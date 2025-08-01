const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
console.log(emailRegex.test("user@example.com")); // true

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/;
console.log(passwordRegex.test("abc12345")); // true

const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
console.log(usernameRegex.test("user_123")); // true

const bdPhoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
console.log(bdPhoneRegex.test("01712345678")); // true

const urlRegex = /^https?:\/\/[^\s/$.?#].[^\s]*$/;
console.log(urlRegex.test("https://www.google.com")); // true

const dateRegex = /^\d{2}[-\/]\d{2}[-\/]\d{4}$/;
console.log(dateRegex.test("22/07/2025")); // true

const hexColorRegex = /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;
console.log(hexColorRegex.test("#ff5733")); // true

const creditCardRegex = /^\d{13,19}$/;
console.log(creditCardRegex.test("4111111111111111")); // true

const ipRegex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(?!$)|$){4}$/;
console.log(ipRegex.test("192.168.1.1")); // true

const numberExtract = "Total: 95 Taka".match(/\d+/g);
console.log(numberExtract); // ["95"]

const clean = "  Hello   World  ".replace(/\s+/g, "");
console.log(clean); // "HelloWorld"

const alphaOnly = /^[A-Za-z]+$/;
console.log(alphaOnly.test("OnlyLetters")); // true

const numOnly = /^\d+$/;
console.log(numOnly.test("123456")); // true

const alnumRegex = /^[A-Za-z0-9]+$/;
console.log(alnumRegex.test("abc123")); // true

const words = "I love JavaScript!".match(/\b\w+\b/g);
console.log(words); // ["I", "love", "JavaScript"]

console.log("________________________");
const str = "Hello123";
console.log(/\w/.test(str));
console.log(str.match(/\d/g));
console.log(str.replace(/\d/g, "*"));

const numberCheck = /^\+\d{3}\s\d{4}\s\d{3}\s\d{3}$/;

console.log(numberCheck.test("+880 1744 320 509"));

const mailCheck = /^[a-zA-Z0-9`]+\@[a-zA-Z0-9]+\.[a-z]{2,4}$/;
console.log(mailCheck.test("satique06`@gmail.com"));

const check = /^\+?(88)?01[346789]\d{8}$/;
console.log(check.test("+8801311330653"));
