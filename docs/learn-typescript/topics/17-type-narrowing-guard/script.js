function formatValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase(); // Narrowed to string
    }
    else {
        return value.toFixed(2); // Narrowed to number
    }
}
formatValue("atique");
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.bark = function () {
        console.log("Woof!");
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.meow = function () {
        console.log("Meow!");
    };
    return Cat;
}());
var Cow = /** @class */ (function () {
    function Cow() {
    }
    Cow.prototype.hamba = function () {
        console.log("Hamba!");
    };
    return Cow;
}());
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark(); // Dog type
    }
    else {
        animal.meow(); // Cat type
    }
}
makeSound(new Dog());
function getRole(account) {
    if ("role" in account) {
        return account.role; // Admin type
    }
    else {
        return account.name; // User type
    }
}
function area(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.size, 2);
        case "rectangle":
            return shape.width * shape.height;
    }
}
area({ kind: "circle", radius: 2 });
var fish = {
    swim: function () { return console.log("Fish"); },
};
var bird = {
    fly: function () { return console.log("Bird"); },
};
function move(pet) {
    // ❌ ERROR: Property 'swim' does not exist on type 'Fish | Bird'
    // pet.swim();
    // ✅ Use type guard
    if ("swim" in pet) {
        pet.swim(); // ✅ Safe: TS knows it's Fish
    }
    else {
        pet.fly(); // ✅ Safe: TS knows it's Bird
    }
}
move(fish); // Output: Fish
move(bird); // Output: Bird
