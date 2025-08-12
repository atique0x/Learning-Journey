// Users
export const users = [
  { id: 1, name: "Atique", isActive: true },
  { id: 2, name: "Akash", isActive: true },
  { id: 3, name: "Rafid", isActive: false },
  { id: 4, name: "Tamim", isActive: true },
  { id: 5, name: "Rashmi", isActive: false },
  { id: 6, name: "Ahsan", isActive: true },
  { id: 7, name: "Ishan", isActive: true },
  { id: 8, name: "Arif", isActive: false },
  { id: 9, name: "Shreya", isActive: true },
  { id: 10, name: "Ashik", isActive: true },
];

// Posts
export const posts = [
  { userId: 1, id: 101, title: "Atique's Public Post", public: true },
  { userId: 1, id: 102, title: "Atique's Private Notes", public: false },

  { userId: 2, id: 103, title: "Akash's Morning Thoughts", public: true },
  { userId: 2, id: 104, title: "Akash's Secret Plan", public: false },

  { userId: 4, id: 106, title: "Tamim's Travel Blog", public: true },
  { userId: 4, id: 107, title: "Tamim's Personal Diary", public: false },

  { userId: 5, id: 108, title: "Rashmi's Cooking Tips", public: true },

  { userId: 6, id: 109, title: "Ahsan's Tech Review", public: true },

  { userId: 7, id: 110, title: "Ishan's Nature Photos", public: true },

  { userId: 8, id: 111, title: "Arif's Music Playlist", public: false },

  { userId: 9, id: 112, title: "Shreya's Art Portfolio", public: true },

  { userId: 10, id: 113, title: "Ashik's Gaming Highlights", public: true },
];

// Notifications
export const notifications = [
  { userId: 1, id: 201, message: "Welcome Atique!", read: true },
  { userId: 1, id: 202, message: "You have 3 new messages", read: false },

  {
    userId: 2,
    id: 203,
    message: "Akash, your subscription expires soon",
    read: true,
  },

  { userId: 3, id: 204, message: "Rafid, password changed", read: true },
  { userId: 3, id: 205, message: "New login from unknown device", read: false },

  { userId: 4, id: 206, message: "Tamim, event invitation", read: false },

  { userId: 5, id: 207, message: "Rashmi, welcome!", read: true },

  {
    userId: 6,
    id: 208,
    message: "Ahsan, new comment on your post",
    read: false,
  },

  { userId: 7, id: 209, message: "Ishan, profile updated", read: true },

  { userId: 8, id: 210, message: "Arif, verify your email", read: false },

  { userId: 9, id: 211, message: "Shreya, password reset", read: true },

  { userId: 10, id: 212, message: "Ashik, new follower", read: false },
];
