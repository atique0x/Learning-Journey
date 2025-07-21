const letters = new Set();

// Add values (duplicates will be ignored)
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("a"); // Ignored (duplicate)

// Add array elements (different reference = not duplicate)
letters.add(["a", "b"]);
letters.add(["a", "b"]);

console.log("All Set values:");
for (const item of letters) {
    console.log(item);
}

// === Set Methods ===

// ✅ size: Number of unique elements
console.log("Size:", letters.size);

// ✅ has(): Check if value exists
console.log("Has 'a':", letters.has("a")); // true
console.log("Has 'z':", letters.has("z")); // false

// ✅ delete(): Remove a specific element
letters.delete("b");
console.log("After deleting 'b':", letters);

// ✅ clear(): Remove all elements
// letters.clear(); // Uncomment to empty the set
// console.log("After clear():", letters);

// ✅ forEach(): Loop through set
letters.forEach((value) => console.log("forEach:", value));
