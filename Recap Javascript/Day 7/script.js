console.log(document.getElementById("demo1"));
console.log(document.getElementsByClassName("para"));
console.log(document.getElementsByTagName("p"));

const demo1 = document.getElementById("demo1");
const demo2 = document.getElementById("demo2");
const demo3 = document.getElementById("demo3");

let p = document.createElement("p");
console.log(p);
p.setAttribute("class", "paraClass");
p.innerText = "New paragraph";

document.body.appendChild(p);
console.log(demo2);
document.body.removeChild(demo2);

document.body.replaceChild(p, demo3);

const from1 = document.forms["form1"];
console.log(form1.elements[0].value);

demo1.innerHTML = Date(0);

function myMove() {
    const elem = document.getElementById("animate");
    const elem2 = document.getElementById("animate2");
    let pos = 0;
    let direction = 1;
    let pos2 = 0;
    let direction2 = 1;

    const id = setInterval(() => {
        if (pos == 0) {
            direction = 1;
        } else if (pos == 350) {
            direction = -1;
        }

        if (direction == 1) {
            pos++;
        } else {
            pos--;
        }

        elem.style.top = pos + "px";
        elem.style.left = pos + "px";

        if (pos2 == 0) {
            direction2 = 1;
        } else if (pos2 == 350) {
            direction2 = -1;
        }

        if (direction2 == 1) {
            pos2++;
        } else {
            pos2--;
        }
        elem2.style.top = pos2 + "px";
        elem2.style.right = pos2 + "px";
    }, 1);
}

function hoverMe() {
    console.log("Hovered");
    const hoverBtn = document.getElementById("hoverBtn");
    hoverBtn.innerText = "Thank You";
}

function hoverOut() {
    console.log("Hovered Out");
    const hoverBtn = document.getElementById("hoverBtn");
    hoverBtn.innerText = "Mouse Hover";
}

document.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
});

console.log(navigator.language);
console.log(navigator.onLine);
console.log(navigator.cookieEnabled);
console.log(navigator.appName);
console.log(navigator.appVersion);

// window.confirm("sometext");
const pTimeOut = document.getElementById("timeOutId");
const pInterval = document.getElementById("intervalId");

let timeOut;
let interval;

document.getElementById("setTimeOutBtn").addEventListener("click", () => {
    console.log("Clicked");
    timeOut = setTimeout(() => {
        pTimeOut.innerText = "Print after 3 sec";
    }, 3000);
});

document.getElementById("clearTimeOutBtn").addEventListener("click", () => {
    console.log("Clicked2");
    clearTimeout(timeOut);
});

document.getElementById("setIntervalBtn").addEventListener("click", () => {
    console.log("Clicked3");
    interval = setInterval(() => {
        pInterval.innerHTML = new Date().toLocaleTimeString();
        console.log("Timing");
    }, 3000);
});

document.getElementById("clearIntervalBtn").addEventListener("click", () => {
    clearInterval(interval);
});
