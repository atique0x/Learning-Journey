const numArr: Array<number> = [1, 5, 9, 7];
const strArr: Array<string> = ["1", "5", "9", "7"];
const boolArr: Array<boolean> = [true, false, false, false];

function identity<Type>(val: Type): Type {
  return val;
}

console.log(identity<number>(5));
console.log(identity<string>("Atique"));
function loggingIdenties<Type>(arg: Type[]): number {
  return arg.length;
}
console.log(loggingIdenties<number>([1, 2, 3, 4, 5]));

function loggingIdentity<Type>(arg: Type[]): Type | undefined {
  return arg[6];
}
console.log(loggingIdentity<number>([1, 2, 3, 4, 5]));

enum Status {
  PENDING = "pending",
  RUNNING = "running",
  COMPLETE = "complete",
}
type Message = string | null;

interface ApiResponse<T> {
  apiId: number;
  data: T;
  status: Status;
  message: Message;
}

interface User {
  userId: number;
  name: string;
  email?: string;
}

const response: ApiResponse<User> = {
  apiId: 1,
  data: { userId: 1, name: "atique" },
  status: Status.COMPLETE,
  message: "Successful",
};
console.log(response);

class Stack<T> {
  items: T[] = [];
  pushItem(item: T): void {
    this.items.push(item);
  }
  popItem(): T | undefined {
    return this.items.pop();
  }
  checkItems(): T[] {
    return this.items;
  }
}

const numberStack = new Stack<number>();
numberStack.pushItem(1);
// numberStack.pushItem(2);
// numberStack.pushItem(5);
// numberStack.pushItem(8);
// numberStack.pushItem(3);
console.log(numberStack.checkItems());
console.log(numberStack.popItem());
console.log(numberStack.popItem());
console.log(numberStack.checkItems());

const stringStack = new Stack<string>();
stringStack.pushItem("1");
stringStack.pushItem("2");
console.log(stringStack.checkItems());

function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = mergeObjects({ name: "Atique" }, { age: 24 });
console.log(merged);
console.log(merged.name, merged.age); // Atique 24

function createString<T extends string>(len: T, val: T): string {
  return val.concat(len);
}
console.log(createString("0x", "Atique"));
