function formatValue(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); // Narrowed to string
  } else {
    return value.toFixed(2); // Narrowed to number
  }
}

formatValue("atique");

class Dog {
  bark() {
    console.log("Woof!");
  }
}
class Cat {
  meow() {
    console.log("Meow!");
  }
}
class Cow {
  hamba() {
    console.log("Hamba!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // Dog type
  } else {
    animal.meow(); // Cat type
  }
}

makeSound(new Dog());
// makeSound(new Cow());

interface Admin {
  role: string;
}
interface User {
  name: string;
}

function getRole(account: Admin | User) {
  if ("role" in account) {
    return account.role; // Admin type
  } else {
    return account.name; // User type
  }
}

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}
area({ kind: "circle", radius: 2 });

interface Fish {
  swim(): void;
}
interface Bird {
  fly(): void;
}

const fish: Fish = {
  swim: () => console.log("Fish"),
};

const bird: Bird = {
  fly: () => console.log("Bird"),
};

// ✅ User-defined type guard
interface Fish {
  swim(): void;
}
interface Bird {
  fly(): void;
}

function move(pet: Fish | Bird) {
  // ❌ ERROR: Property 'swim' does not exist on type 'Fish | Bird'
  // pet.swim();

  // ✅ Use type guard
  if ("swim" in pet) {
    pet.swim(); // ✅ Safe: TS knows it's Fish
  } else {
    pet.fly(); // ✅ Safe: TS knows it's Bird
  }
}

move(fish); // Output: Fish
move(bird); // Output: Bird
