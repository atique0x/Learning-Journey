import { updateUI } from "../ui-render/ui-update.js";

export const setToken = (username: string) => {
  document.cookie = `username=${username}; max-age=1800; path=/`;
};

export const getToken = (key: string): string | undefined => {
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.trim().split("=");
    if (cookieKey === key) return cookieValue;
  }
  return undefined;
};

export const removeToken = (): void => {
  document.cookie = "username=; max-age=0; path=/";
  updateUI();
};
