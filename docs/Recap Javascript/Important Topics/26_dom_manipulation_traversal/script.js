const inputField = document.getElementById("text-id");
let lastTime = 0;

inputField.addEventListener("input", () => {
  lastTime = new Date().getTime();
});

setInterval(() => {
  if (lastTime !== 0) {
    const nowTime = new Date().getTime();

    const timeDiff = nowTime - lastTime;

    if (timeDiff >= 2000) {
      console.log("2 second since last input!");
      lastTime = 0;
      document.getElementById("text-display").innerText = inputField.value;
    }
  }
}, 100);
