class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    greet() {
        return `Hello, I am ${this.name}. Height: ${this.height}. Age: ${this.age}.`;
    }

    // Getter for fullInfo
    get fullInfo() {
        return `${this.name}, Age: ${this.age}, Height: ${this.height}`;
    }

    // Setter for fullInfo (expects: "Name Age Height")
    set fullInfo(value) {
        const [name, age, height] = value.split(" ");
        this.name = name;
        this.age = Number(age);
        this.height = height;
    }
}

class Gender extends Person {
    constructor(name, age, height, gender) {
        super(name, age, height); // include height!
        this.gender = gender;
    }

    show() {
        return `${this.greet()} Gender: ${this.gender}.`;
    }

    // Getter for full details including gender
    get profile() {
        return `${this.fullInfo}, Gender: ${this.gender}`;
    }

    // Setter for full profile
    set profile(value) {
        const [name, age, height, gender] = value.split(" ");
        this.fullInfo = `${name} ${age} ${height}`;
        this.gender = gender;
    }
}

// Usage
const p1 = new Person("Atique", 25, "5'10");
console.log(p1.greet());
console.log(p1.fullInfo);

p1.fullInfo = "Faiyaz 30 6'0";
console.log(p1.fullInfo);

const m1 = new Gender("Atique", 25, "5'10", "Male");
console.log(m1.greet());
console.log(m1.show());
console.log(m1.profile);

m1.profile = "Sajjad 28 5'9 Male";
console.log(m1.profile);
