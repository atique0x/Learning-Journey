function validateInput() {
    const inputVal = document.getElementById("num1");
    console.log(inputVal.checkValidity());

    document.getElementById("demo1").innerText = inputVal.validationMessage;
}

function backBtn() {
    window.history.back();
}

function backMoreBtn() {
    window.history.go(-2);
}

function goMoreBtn() {
    window.history.go(3);
}

function forwardBtn() {
    window.history.forward();
}

function getHistory() {
    alert(window.history.length);
}

function setLocalStorage() {
    localStorage.setItem("token", "api12364587");
}

function getLocalStorage() {
    console.log(localStorage.getItem("token"));
}

function removeLocalStorage() {
    localStorage.removeItem("token");
}

function clearAllStorage() {
    localStorage.clear();
}

function setSessionStorage() {
    sessionStorage.setItem("token", "api12364587");
}

function getSessionStorage() {
    console.log(sessionStorage.getItem("token"));
}

function removeSessionStorage() {
    sessionStorage.removeItem("token");
}

navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}
