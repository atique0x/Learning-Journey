const sayHello = () => {
    console.log("Hello!");
};

sayHello(); // Output: Hello!

const users = { name: "Atique Shahriar", age: 25, isActive: true };

const activeUser = (user) => {
    return users.isActive;
};

console.log(activeUser(users));
