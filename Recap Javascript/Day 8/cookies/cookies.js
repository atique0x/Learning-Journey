// Set a cookie with name, value, and expiration days
function setCookie(...value) {
    console.log("setCookie args:", value);

    const expDateInMillis = Date.now() + value[2] * 24 * 60 * 60 * 1000;
    const expDate = new Date(expDateInMillis).toUTCString();

    document.cookie = `${value[0]}=${encodeURIComponent(
        value[1]
    )}; expires=${expDate}; path=/`;
}

// Read and log all cookies
function readCookie() {
    const cookies = document.cookie;
    const cookiesArr = cookies.split(";");

    cookiesArr.forEach((cookie) => {
        console.log(cookie.trim());
    });

    console.log("All cookies array:", cookiesArr);
}

// Delete a cookie by name
function deleteCookie(name) {
    console.log("Before delete:", document.cookie);

    document.cookie =
        name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    console.log("After delete:", document.cookie);
}
