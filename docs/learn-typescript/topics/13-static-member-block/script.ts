class App {
  static appName: string;
  //appName = "My App"; undefiend
  username: string;
  constructor(username: string) {
    this.username = username;
  }
  static {
    this.appName = "My App";
  }
  greetings() {
    console.log(
      `Welcome to ${App.appName} from method. Username ${this.username}`
    );
  }
  static greet() {
    // console.log(
    //   `Welcome to ${App.appName} from static method. Username ${this.username}`
    // );
    console.log(`Welcome to ${App.appName} from static method`);
  }
}

const newApp = new App("Atique");
newApp.greetings();

console.log(App.appName); // "My App"
App.greet(); // "Welcome to My App"

App.appName = "My FB App";
newApp.greetings();

console.log(App.appName); // "My App"
App.greet(); // "Welcome to My App"

export class AppConfig {
  static readonly BASE_URL = "https://api.example.com";
  static VERSION = "1.0.0";
}

console.log(AppConfig.VERSION);
AppConfig.VERSION = "1.5.0";
console.log(AppConfig.VERSION);
console.log(AppConfig.BASE_URL); // ✅ Direct access

export class DateUtils {
  static format(date: Date): string {
    return date.toLocaleDateString("en-US");
  }
}

console.log(DateUtils.format(new Date())); // "Aug 23, 2025"

class User {
  userCount: number = 0;
  id: number;
  name: string;

  constructor(name: string) {
    this.name = name;
    this.id = ++this.userCount; // increment shared counter
  }
}

const u1 = new User("Atique");
const u2 = new User("Shariar");

console.log(u1.id); // 1
console.log(u2.id); // 2
console.log(u1.userCount); // 2
console.log(u2.userCount); // 2

// class User {
//   static userCount = 0;
//   id: number;
//   name: string;

//   constructor(name: string) {
//     this.name = name;
//     this.id = ++User.userCount; // increment shared counter
//   }
// }

// const u1 = new User("Atique");
// const u2 = new User("Shariar");

// console.log(u1.id); // 1
// console.log(u2.id); // 2
// console.log(User.userCount); // 2
