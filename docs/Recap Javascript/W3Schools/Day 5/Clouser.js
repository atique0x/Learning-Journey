function outer() {
    let counter = 0;

    function inner() {
        counter++;
        return counter;
    }

    return inner; // 👈 Closure happens here
}

const count = outer(); // outer() runs once, returns inner
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
