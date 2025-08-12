# 🧠 JavaScript Classes (ES6+)

A **class** in JavaScript is a blueprint for creating objects with shared structure (properties) and behavior (methods). It makes object-oriented programming easier and cleaner compared to using constructor functions and prototypes.

---

## 🔹 `class`

**Definition**  
Defines a new class. A class can contain a constructor and methods.

```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}
```

## Constructor

A special method for setting up (initializing) new objects created from the class. Runs automatically when `new` is used.

-   Each class can have **only one** constructor.
-   It’s optional. If not present, JavaScript adds an empty one by default.

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}

const user1 = new Person("Atique", 25);
user1.greet(); // Output: Hi, I'm Atique and I'm 25 years old.
```

## Extends

Creates a subclass that inherits properties and methods from a parent class.

```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} barks.`);
    }
}

const dog1 = new Dog("Rex");
dog1.speak(); // Rex makes a noise.
dog1.bark(); // Rex barks.
```

## super

Used to call the constructor or methods of the parent class.  
Must be called before using `this` in a subclass constructor.

```js
super(args); // call parent constructor
super.methodName(); // call parent method
```

```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name); // Calls Animal's constructor
        this.color = color;
    }

    describe() {
        super.speak(); // Calls Animal's speak()
        console.log(`${this.name} is a ${this.color} cat.`);
    }
}

const kitty = new Cat("Whiskers", "white");
kitty.describe();
// Whiskers makes a noise.
// Whiskers is a white cat.
```

## Summary Table

| Keyword       | Purpose                                             |
| ------------- | --------------------------------------------------- |
| `class`       | Defines a class (blueprint for objects)             |
| `constructor` | Initializes class properties when creating instance |
| `extends`     | Inherits from another class                         |
| `super`       | Calls parent constructor or methods                 |
