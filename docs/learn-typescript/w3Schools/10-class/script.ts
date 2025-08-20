class Player {
  private name: string;
  age: number;
  readonly country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play(): void {
    console.log(`${this.name} is from ${this.country}`);
  }
}

const newPlayer: Player = new Player("Atique", 24, "Bangladesh");
const oldPlayer: Player = new Player("Akash", 30, "Bangladesh");
// newPlayer.play();

const players: Player[] = [];

players.push(newPlayer);
players.push(oldPlayer);
console.log(players);

//newPlayer.name ="Asif";
//console.log("Player Name: ", newPlayer.name); // Not accessible from outside of the class
newPlayer.play(); // access by method
// newPlayer.country = "UK";
console.log(newPlayer.country);

class Rectangle {
  private height: number;
  protected width: number;

  constructor(h: number, w: number) {
    this.height = h;
    this.width = w;
  }

  getArea(): number {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  constructor(slide: number) {
    super(slide, slide);
  }
  printSizes(): void {
    console.log(this.width); // ✅ works because width is protected
    //console.log(this.height); // ❌ Error! height is private
  }
}

const mySq = new Square(10);

console.log(mySq.getArea());

class Shape {
  private color: string;
  constructor(color: string) {
    this.color = color;
  }
  getColor(): string {
    return this.color;
  }
}
class Rectangles extends Shape {
  private height: number;
  protected width: number;
  constructor(height: number, width: number, color: string) {
    super(color);
    this.height = height;
    this.width = width;
  }
  getArea(): void {
    console.log(
      `The area of the rectangle is ${this.height}*${
        this.width
      }. Color is ${this.getColor()}`
    );
  }
}

const newRectangle = new Rectangles(5, 6, "red");
newRectangle.getArea();
