import { users } from "./data.js";
import { posts, notifications } from "./data.js";

const showDashboardBtn = document.getElementById("showDashboardBtn");
const userIdInput = document.getElementById("userId");
const log = document.getElementById("log");

//Prolife
const profileSection = document.getElementById("profileSection");
const profileId = document.getElementById("profileId");
const profileName = document.getElementById("profileName");
const profileActive = document.getElementById("profileActive");

//Post
const postsSection = document.getElementById("postsSection");
const postsTableBody = document.getElementById("postsTableBody");

//Notification
const notificationsSection = document.getElementById("notificationsSection");
const notificationsList = document.getElementById("notificationsList");

let userId = null;

function userDataLoad() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 2000);
  });
}

function userPostLoad() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(posts);
    }, 1000);
  });
}

function userNotificationLoad() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(notifications);
    }, 3000);
  });
}

showDashboardBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userId = Number(userIdInput.value);
  showing(userId);
});

async function getUserProfile(userId) {
  logMessage(`🔄 Data is fetching for user ${userId}.........`);
  const allUser = await userDataLoad();
  const profile = allUser.find((user) => user.id === userId);
  if (profile) {
    logMessage(`✔️ Data fetched: ${profile.name}`);
    return profile;
  } else {
    throw new Error(`❌ Invalid user input`);
  }
}

async function getUserPost(user) {
  logMessage(`🔄 Fetching post of ${user.name}........`);
  const posts = await userPostLoad();
  const userPost = posts.filter((post) => post.userId == user.id);

  if (userPost.length > 0) {
    logMessage(`✔️ ${userPost.length} post(s) fetched of ${user.name}`);
  } else {
    logMessage(`ℹ️ No posts available for ${user.name}`);
  }
  return userPost;
}

async function getUserNotification(user) {
  logMessage(`🔄 Fetching notifications of ${user.name}........`);
  const notifications = await userNotificationLoad();
  const userNotifications = notifications.filter(
    (notification) => notification.userId == user.id
  );

  if (userNotifications.length > 0) {
    logMessage(
      `✔️ ${userNotifications.length} notification(s) fetched of ${user.name}`
    );
  } else {
    logMessage(`ℹ️ No notifications available for ${user.name}`);
  }
  return userNotifications;
}

function logMessage(message) {
  log.textContent += message + "\n";
}
function clearAll() {
  log.textContent = "";
  profileSection.style.display = "none";
  postsSection.style.display = "none";
  notificationsSection.style.display = "none";
}

async function showing(userId) {
  try {
    clearAll();
    const profile = await getUserProfile(userId);
    console.log(profile);
    profileId.textContent = profile.id;
    profileName.textContent = profile.name;
    profileActive.textContent = profile.isActive ? "Yes" : "No";
    profileSection.style.display = "block";

    const [posts, notifications] = await Promise.all([
      getUserPost(profile),
      getUserNotification(profile),
    ]);

    postsTableBody.innerHTML = "";
    if (posts.length > 0) {
      posts.forEach((post) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td class="border border-gray-300 px-2 py-1">${post.id}</td><td class="border border-gray-300 px-2 py-1">${post.title}</td>`;
        postsTableBody.appendChild(tr);
      });
      postsSection.style.display = "block";
    } else {
      postsSection.style.display = "none";
    }

    notificationsList.innerHTML = "";
    if (notifications.length > 0) {
      notifications.forEach((n) => {
        const li = document.createElement("li");
        li.textContent = `${n.message} ${n.read ? "(Read)" : "(Unread)"}`;
        notificationsList.appendChild(li);
      });
      notificationsSection.style.display = "block";
    } else {
      notificationsSection.style.display = "none";
    }
  } catch (error) {
    logMessage(error);
  }
}
