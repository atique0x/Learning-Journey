export interface RegisterUser {
  username: string;
  password: string;
}

export enum Status {
  Pending = "pending",
  Booked = "booked",
  Weekend = "weekend",
  Available = "available",
  Unavailable = "unavailable",
}

export interface BookInfo {
  user: string;
  date: string;
  status: Status;
  createdAt: number;
}
