interface userInfo {
  readonly userId: number;
  userName: string;
  userEmail: string;
}

const user1: userInfo = {
  userId: 1,
  userName: "atique",
  userEmail: "satique06@gmail.com",
  userAddress: "Mirpur, Dhaka-1216",
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
};

type UserInfo = {
  readonly userId: number;
  userName: string;
  userEmail: string;
};
// type UserInfo // Reassigment is not possible

type Admin = UserInfo & {
  role: "admin";
};

const user2 = {
  userId: 3,
  userName: "akash",
  userEmail: "akash@gmail.com",
  userAddress: "Mirpur, Dhaka-1216",
};
const admin2 = {
  userId: 4,
  userName: "asif",
  userEmail: "asif@gmail.com",
  userAddress: "Mirpur, Dhaka-1216",
};
