document.getElementById("history-length").innerText = history.length;

function pushStateExample() {
  history.pushState(
    { page: "home" },
    "",
    "http://127.0.0.1:5500/docs/Recap%20Javascript/Important%20Topics/17_web_history/about.html"
  );
}

function replaceStateExample() {
  history.replaceState(
    { page: "home" },
    "",
    "http://127.0.0.1:5500/docs/Recap%20Javascript/Important%20Topics/17_web_history/index.html"
  );
}

window.addEventListener("popstate", (event) => {
  console.log(event);
  console.log(event.state);
});
