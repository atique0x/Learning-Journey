class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    speak() {
        super.speak();
        console.log(`${this.name} barks. Age: ${this.age}`);
    }
    talk() {
        super.speak();
    }
}

const dog = new Dog("Rex", 5);
dog.speak(); // Rex barks.
dog.talk();

class Person {
    constructor(name, age, address, role = "User") {
        this.name = name;
        this._age = age;
        this.address = address;
        this.role = role;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 0 || value > 150) {
            console.log("Invalid age!");
        } else {
            this._age = value;
        }
    }

    display() {
        console.log(
            `This is ${this.role}. Name: ${this.name} Age: ${this.age} Address: ${this.address}`
        );
    }
}

const p1 = new Person("Atique", 25, "Dhaka", "Admin");
p1.address = "Mirpur";
console.log(p1.age);
p1.age = -50;
p1.display();
