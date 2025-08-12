{
  //Event Bubbling
  document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
  });

  document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
  });
}

{
  //Event Capturing
  document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
  });

  document.getElementById("parent").addEventListener(
    "click",
    () => {
      console.log("Parent capturing");
    },
    { capture: true }
  );
}
