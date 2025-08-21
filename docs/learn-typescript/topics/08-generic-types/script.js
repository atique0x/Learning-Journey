var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var numArr = [1, 5, 9, 7];
var strArr = ["1", "5", "9", "7"];
var boolArr = [true, false, false, false];
function identity(val) {
    return val;
}
console.log(identity(5));
console.log(identity("Atique"));
function loggingIdenties(arg) {
    return arg.length;
}
console.log(loggingIdenties([1, 2, 3, 4, 5]));
function loggingIdentity(arg) {
    return arg[6];
}
console.log(loggingIdentity([1, 2, 3, 4, 5]));
var Status;
(function (Status) {
    Status["PENDING"] = "pending";
    Status["RUNNING"] = "running";
    Status["COMPLETE"] = "complete";
})(Status || (Status = {}));
var response = {
    apiId: 1,
    data: { userId: 1, name: "atique" },
    status: Status.COMPLETE,
    message: "Successful",
};
console.log(response);
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.pushItem = function (item) {
        this.items.push(item);
    };
    Stack.prototype.popItem = function () {
        return this.items.pop();
    };
    Stack.prototype.checkItems = function () {
        return this.items;
    };
    return Stack;
}());
var numberStack = new Stack();
numberStack.pushItem(1);
// numberStack.pushItem(2);
// numberStack.pushItem(5);
// numberStack.pushItem(8);
// numberStack.pushItem(3);
console.log(numberStack.checkItems());
console.log(numberStack.popItem());
console.log(numberStack.popItem());
console.log(numberStack.checkItems());
var stringStack = new Stack();
stringStack.pushItem("1");
stringStack.pushItem("2");
console.log(stringStack.checkItems());
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var merged = mergeObjects({ name: "Atique" }, { age: 24 });
console.log(merged);
console.log(merged.name, merged.age); // Atique 24
function createString(len, val) {
    return val.concat(len);
}
console.log(createString("0x", "Atique"));
