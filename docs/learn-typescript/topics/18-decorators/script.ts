function classDecorator(target: Function) {
  console.log("This is a class decorators...");
  console.log(target);
}

@classDecorator
class Admin {
  name: string = "Atique Shahriar";
  role: string = "Admin";
  constructor() {
    console.log("Admin is logged...");
  }
  getInfo() {
    return `${this.name} is a ${this.role}`;
  }
}

const newAdmin = new Admin();
console.log(newAdmin.getInfo());
