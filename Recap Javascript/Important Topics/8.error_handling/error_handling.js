try {
    let user = null;
    console.log(user.name);
} catch (err) {
    console.log(`Error Name: ${err.name},   Error Message: ${err.message}`);
} finally {
    console.log("Always executes");
}

let age = 10;

try {
    if (age < 10) {
        throw new Error("Your age is less than 10");
    } else if (age < 15) {
        throw new Error("Your age is less than 15");
    } else {
        console.log(`Your age is ${age}`);
    }
} catch (error) {
    console.log(error);
} finally {
}

function checkPositive(num) {
    if (num < 0) {
        throw new RangeError("Number must be positive");
    }
    return num;
}

try {
    console.log(checkPositive(-5));
} catch (err) {
    console.log(err.name + ":", err.message);
}
