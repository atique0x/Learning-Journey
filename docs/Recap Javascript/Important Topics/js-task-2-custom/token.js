export const setToken = (username) => {
  document.cookie = `username=${username}; max-age=1800; path=/`;
};

export const getToken = (key) => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.trim().split("=");
    if (cookieKey === key) return cookieValue;
  }
  return null;
};

export const removeToken = () => {
  document.cookie = "username=; max-age=0; path=/";
};
