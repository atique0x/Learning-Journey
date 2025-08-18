var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); //Start with 0
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["Created"] = 201] = "Created";
    HttpStatus[HttpStatus["Accepted"] = 202] = "Accepted";
    HttpStatus[HttpStatus["NoContent"] = 204] = "NoContent";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
})(HttpStatus || (HttpStatus = {}));
console.log(HttpStatus.Unauthorized);
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
console.log(Color.Green); // Output: GREEN
var userRole;
(function (userRole) {
    userRole["Admin"] = "ADMIN";
    userRole["User"] = "USER";
    userRole[userRole["Guest"] = 6] = "Guest";
})(userRole || (userRole = {}));
console.log(userRole.Guest);
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["InProgress"] = "IN_PROGRESS";
    Status["Completed"] = "COMPLETED";
    Status["Failed"] = "FAILED";
})(Status || (Status = {}));
function getCurrentStatus(status) {
    console.log("Current status is: ".concat(status));
}
getCurrentStatus(Status.Pending);
//getCurrentStatus("Others"); // This will cause a TypeScript error since "Others" is not a valid Status enum value
var Menu;
(function (Menu) {
    Menu["Home"] = "HOME";
    Menu["About"] = "ABOUT";
    Menu["Contact"] = "CONTACT";
    Menu["Services"] = "SERVICES";
    Menu["Blog"] = "BLOG";
    Menu["FAQ"] = "FAQ";
    Menu["Terms"] = "TERMS";
    Menu["Privacy"] = "PRIVACY";
    Menu["Support"] = "SUPPORT";
})(Menu || (Menu = {}));
function navigateTo(menu) {
    console.log("Navigating to: ".concat(menu));
}
navigateTo(Menu.Home); // Output: HOME
navigateTo(Menu.About); // Output: Navigating to: ABOUT
navigateTo(Menu.Contact); // Output: Navigating to: CONTACT
//navigateTo(Menu.Career); //Career is not a valid Menu enum value, this will cause a TypeScript error
//navigateTo("Services"); // This will also cause a TypeScript error since "Services" is not a valid Menu enum value
var enumLikeSatus = {
    Pending: null,
    InProgress: undefined,
    Completed: "COMPLETED",
    Failed: true,
    Cancelled: 0,
    Others: [1, 2],
};
