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
var Payment = /** @class */ (function () {
    function Payment(amount) {
        this.amount = amount;
    }
    Payment.prototype.validate = function () {
        console.log("Validating payment of $".concat(this.amount));
    };
    return Payment;
}());
var CreditCardPayment = /** @class */ (function (_super) {
    __extends(CreditCardPayment, _super);
    function CreditCardPayment(amount) {
        return _super.call(this, amount) || this;
    }
    CreditCardPayment.prototype.validate = function () {
        console.log("Validating payment of $".concat(this.amount + 1000));
    };
    CreditCardPayment.prototype.processPayment = function () {
        console.log("Processing credit card payment of $".concat(this.amount + 1000));
    };
    return CreditCardPayment;
}(Payment));
var PayPalPayment = /** @class */ (function (_super) {
    __extends(PayPalPayment, _super);
    function PayPalPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PayPalPayment.prototype.processPayment = function () {
        console.log("Processing PayPal payment of $".concat(this.amount));
    };
    return PayPalPayment;
}(Payment));
var credit = new CreditCardPayment(500);
credit.validate();
credit.processPayment();
var paypal = new PayPalPayment(500);
paypal.validate();
paypal.processPayment();
var APIResponse = /** @class */ (function () {
    function APIResponse(status, message, data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
    return APIResponse;
}());
var ApiResponse = /** @class */ (function () {
    function ApiResponse(status, message, data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
    return ApiResponse;
}());
var userResponse = new ApiResponse(200, "Success", {
    id: 1,
    name: "Atique",
});
var productResponse = new ApiResponse(200, "Success", {
    id: 5,
    title: "Laptop",
    price: 45000,
});
console.log(userResponse.data.name); // Atique
console.log(productResponse.data.title); // Laptop
var BaseEntity = /** @class */ (function () {
    function BaseEntity(id) {
        this.id = id;
    }
    return BaseEntity;
}());
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(id) {
        return _super.call(this, id) || this;
    }
    return User;
}(BaseEntity));
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.display = function () {
        console.log(this.items);
    };
    return Repository;
}());
var newRepo = new Repository();
newRepo.add(new User(1));
newRepo.add(new User(2));
newRepo.display();
