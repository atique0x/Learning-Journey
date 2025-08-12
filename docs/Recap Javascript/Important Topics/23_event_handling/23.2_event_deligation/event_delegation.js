const menu = document.getElementById("menu");
const showItem = document.getElementById("showClicked");

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    showItem.innerText = `You clicked ${e.target.textContent}`;
    console.log(`You clicked ${e.target.id}`);
  }
});

function itemAdd() {
  showItem.innerText = "";
  const itemName = prompt().trim();
  console.log(itemName);
  if (!itemName) {
    return;
  }
  const newLi = document.createElement("li");
  newLi.innerText = itemName;
  newLi.setAttribute("id", itemName.toLowerCase(0));
  menu.appendChild(newLi);
  alert(`New item ${itemName} added`);
}
