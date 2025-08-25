import { finalBooked } from "../calender-booking/bookings.js";
import { getToken, removeToken } from "../token/cookie-token.js";
import { updateUI } from "../ui-render/ui-update.js";
const logoutBtn = document.getElementById("logout");
export const logout = () => {
    logoutBtn?.addEventListener("click", () => {
        const currentUser = getToken("username");
        if (!currentUser)
            return;
        removeToken();
        updateUI();
        finalBooked();
        alert("Logout successfully...");
    });
};
