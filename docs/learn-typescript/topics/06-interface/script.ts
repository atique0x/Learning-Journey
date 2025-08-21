interface userInfo {
  readonly userId: number | string;
  userName: string;
  userEmail: string;
  action: () => string;
}

const user1: userInfo = {
  userId: "One",
  userName: "atique",
  userEmail: "satique06@gmail.com",
  userAddress: "Mirpur, Dhaka-1216",
  action: () => {
    return "";
  },
};

interface userInfo {
  userAddress: string;
  userPhone?: string;
}

interface admin extends userInfo {
  role: "admin";
}

const admin1: admin = {
  userId: 2,
  userName: "atique",
  userEmail: "satique06@gmail.com",
  userAddress: "Mirpur, Dhaka-1216",
  role: "admin",
  action: () => {
    return "";
  },
};

type UserInfo = {
  readonly userId: number;
  userName: string;
  userEmail: string;
  action: () => string;
};
// type UserInfo // Reassigment is not possible

type Admin = UserInfo & {
  role: "admin";
};

const user2: Admin = {
  userId: 3,
  userName: "akash",
  userEmail: "akash@gmail.com",
  action: () => {
    return "";
  },
  role: "admin",
};
const admin2 = {
  userId: 4,
  userName: "asif",
  userEmail: "asif@gmail.com",
  userAddress: "Mirpur, Dhaka-1216",
};

interface CalculateSum {
  (x: number, y: number): number;
}
type CalculateSumType = (x: number, y: number) => number;

const sum: CalculateSumType = function (x, y) {
  return x + y;
};
console.log(sum(7, 3));
const add: CalculateSum = (x, y) => {
  return x + y;
};

console.log(add(5, 6));
