"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = exports.AppConfig = void 0;
var App = /** @class */ (function () {
    function App(username) {
        this.username = username;
    }
    App.prototype.greetings = function () {
        console.log("Welcome to ".concat(_a.appName, " from method. Username ").concat(this.username));
    };
    App.greet = function () {
        // console.log(
        //   `Welcome to ${App.appName} from static method. Username ${this.username}`
        // );
        console.log("Welcome to ".concat(_a.appName, " from static method"));
    };
    return App;
}());
_a = App;
(function () {
    _a.appName = "My App";
})();
var newApp = new App("Atique");
newApp.greetings();
console.log(App.appName); // "My App"
App.greet(); // "Welcome to My App"
App.appName = "My FB App";
newApp.greetings();
console.log(App.appName); // "My App"
App.greet(); // "Welcome to My App"
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.BASE_URL = "https://api.example.com";
    AppConfig.VERSION = "1.0.0";
    return AppConfig;
}());
exports.AppConfig = AppConfig;
console.log(AppConfig.VERSION);
AppConfig.VERSION = "1.5.0";
console.log(AppConfig.VERSION);
console.log(AppConfig.BASE_URL); // ✅ Direct access
var DateUtils = /** @class */ (function () {
    function DateUtils() {
    }
    DateUtils.format = function (date) {
        return date.toLocaleDateString("en-US");
    };
    return DateUtils;
}());
exports.DateUtils = DateUtils;
console.log(DateUtils.format(new Date())); // "Aug 23, 2025"
var User = /** @class */ (function () {
    function User(name) {
        this.userCount = 0;
        this.name = name;
        this.id = ++this.userCount; // increment shared counter
    }
    return User;
}());
var u1 = new User("Atique");
var u2 = new User("Shariar");
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
