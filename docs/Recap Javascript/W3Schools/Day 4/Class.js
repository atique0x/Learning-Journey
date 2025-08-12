class ClassName {
    constructor(property1, property2, property3, property4) {
        this.property1 = property1;
        this.property2 = property2;
        this.property3 = property3;
        this.property4 = property4;
    }

    classMethod1() {
        console.log(`This is method1. This is ${this.property1}`);
    }

    classMethod2(methodProperty) {
        console.log(
            `This is method2. This is ${this.property2}. External property: ${methodProperty}`
        );
    }
}

const instance = new ClassName("Value1", "Value2", "Value3", "Value4");
instance.classMethod1(); // This is method1. This is Value1
instance.classMethod2("External"); // This is method2. This is Value2. External property: External

class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    greet(type) {
        console.log(
            `This is ${type}. The name of the ${type} is ${this.name} and color is ${this.color}`
        );
    }
}

const cat = new Animal("Luna");
cat.greet("Cat");
