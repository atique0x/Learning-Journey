var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player.prototype.play = function () {
        console.log("".concat(this.name, " is from ").concat(this.country));
    };
    return Player;
}());
var newPlayer = new Player("Atique", 24, "Bangladesh");
var oldPlayer = new Player("Akash", 30, "Bangladesh");
// newPlayer.play();
var players = [];
players.push(newPlayer);
players.push(oldPlayer);
console.log(players);
//newPlayer.name ="Asif";
//console.log("Player Name: ", newPlayer.name); // Not accessible from outside of the class
newPlayer.play(); // access by method
// newPlayer.country = "UK";
console.log(newPlayer.country);
var Rectangle = /** @class */ (function () {
    function Rectangle(h, w) {
        this.height = h;
        this.width = w;
    }
    Rectangle.prototype.getArea = function () {
        return this.height * this.width;
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(slide) {
        return _super.call(this, slide, slide) || this;
    }
    Square.prototype.printSizes = function () {
        console.log(this.width); // ✅ works because width is protected
        //console.log(this.height); // ❌ Error! height is private
    };
    return Square;
}(Rectangle));
var mySq = new Square(10);
console.log(mySq.getArea());
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    return Shape;
}());
var Rectangles = /** @class */ (function (_super) {
    __extends(Rectangles, _super);
    function Rectangles(height, width, color) {
        var _this = _super.call(this, color) || this;
        _this.height = height;
        _this.width = width;
        return _this;
    }
    Rectangles.prototype.getArea = function () {
        console.log("The area of the rectangle is ".concat(this.height, "*").concat(this.width, ". Color is ").concat(this.getColor()));
    };
    return Rectangles;
}(Shape));
var newRectangle = new Rectangles(5, 6, "red");
newRectangle.getArea();
