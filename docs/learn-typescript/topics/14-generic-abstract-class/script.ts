abstract class Payment {
  public amount: number;
  constructor(amount: number) {
    this.amount = amount;
  }

  abstract processPayment(): void;

  validate(): void {
    console.log(`Validating payment of $${this.amount}`);
  }
}

class CreditCardPayment extends Payment {
  constructor(amount: number) {
    super(amount);
  }
  validate(): void {
    console.log(`Validating payment of $${this.amount + 1000}`);
  }

  processPayment(): void {
    console.log(`Processing credit card payment of $${this.amount + 1000}`);
  }
}

class PayPalPayment extends Payment {
  processPayment(): void {
    console.log(`Processing PayPal payment of $${this.amount}`);
  }
}
const credit = new CreditCardPayment(500);
credit.validate();
credit.processPayment();

const paypal = new PayPalPayment(500);
paypal.validate();
paypal.processPayment();

class APIResponse<T> {
  status: number;
  message: string;
  data: T;
  constructor(status: number, message: string, data: T) {
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

class ApiResponse<T> {
  constructor(public status: number, public message: string, public data: T) {}
}

const userResponse = new ApiResponse(200, "Success", {
  id: 1,
  name: "Atique",
});

const productResponse = new ApiResponse(200, "Success", {
  id: 5,
  title: "Laptop",
  price: 45000,
});

console.log(userResponse.data.name); // Atique
console.log(productResponse.data.title); // Laptop

abstract class BaseEntity {
  constructor(public id: number) {}
}

class User extends BaseEntity {
  constructor(id: number) {
    super(id);
  }
}

class Repository<T extends BaseEntity> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }
  display() {
    console.log(this.items);
  }
}

const newRepo = new Repository<User>();
newRepo.add(new User(1));
newRepo.add(new User(2));
newRepo.display();
