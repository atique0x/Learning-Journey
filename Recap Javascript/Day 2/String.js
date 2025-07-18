console.log(
    "...............................STRING................................."
);

const name = "Atique Shahriar";

console.log(name.length);

console.log(name[4]);

const text = "Please locate where 'locate' Ate occurs!";

console.log(text.indexOf("locate"));
console.log(text.indexOf("cate"));
console.log(text.indexOf("and"));
console.log(text.indexOf("locate", 15));

console.log(text.lastIndexOf("locate"));

console.log(text.search("locate"));
console.log(text.search(/locate/));

console.log(text.match("ate"));
console.log(text.match(/ate/g));
console.log(text.match(/ate/gi));

console.log(text.includes("locate"));
console.log(text.includes("Atique"));

console.log(text.startsWith("Please"));
console.log(text.startsWith("locate"));
console.log(text.endsWith("!"));
console.log(text.endsWith("occurs"));

console.log(text.slice(7, 13));
console.log(text.slice(-7));

console.log(text.substring(7, 13));
console.log(text.substr(7, 6));

console.log("  Hello World!  ".trim());
console.log("  Hello World!  ".trimStart());
console.log("  Hello World!  ".trimEnd());

console.log("a".padStart(3, "0"));
console.log("5".padEnd(4, "x"));

console.log("hello".repeat(3));

console.log("hi".concat(" there"));

console.log("Bangladesh".charAt(3));
console.log("Bangladesh".charCodeAt(3));
console.log("😀".codePointAt(0));

console.log("HELLO".toLowerCase());
console.log("hello".toUpperCase());

console.log("hello".at(-1));
console.log("hello".at(0));

console.log((123).toString());
console.log(new String("abc").valueOf());

console.log("abc".localeCompare("abd"));

console.log("abc".isWellFormed());
console.log("\uD800".toWellFormed());

console.log(typeof BigInt(2));
console.log((9.569452).toFixed(2));
console.log((9.569452).toFixed(4));
console.log((9.569452).toPrecision(2));
console.log((119.469452).toPrecision(3));
