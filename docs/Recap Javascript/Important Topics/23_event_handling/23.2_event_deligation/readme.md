# Event Delegation in JavaScript

## What is Event Delegation?

Event delegation is a technique where you:

- Attach a **single event listener** to a parent (or ancestor) element.
- Let events from child elements **bubble up** to that parent.
- Inside the parent's listener, detect **which child** triggered the event using `event.target`.

**Key Idea:**  
Instead of adding many event listeners to multiple children, you “delegate” the responsibility to the parent.

## Why Event Delegation Exists

### Without Delegation:

- You attach 1 listener per child.
- If children are added/removed dynamically, you must reattach or remove listeners each time.

### With Delegation:

- One listener can handle an unlimited number of child events.
- Newly added children automatically work without extra code.
- Reduced memory and CPU usage.
- Ideal for large lists, tables, menus, or frequently changing DOM content.

## How it Works Internally

Event delegation works because of **event bubbling**:

1. A click happens on a child element.
2. The event **travels upward** (bubble phase) to its ancestors.
3. The parent's listener catches it.
4. Inside the handler, you check if the original `event.target` matches your desired selector or tag.

## Example

```html
<ul id="menu">
  <li id="home">Home</li>
  <li id="about">About</li>
  <li id="contact">Contact</li>
</ul>
<br />
<p id="showClicked"></p>
<br />
<button onclick="itemAdd()">Add Items</button>
```

```js
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
```

## When NOT to Use Event Delegation

Event delegation is powerful, but not always ideal:

- **High-frequency events** (e.g., `mousemove`, `scroll`)  
  Too many triggers can cause performance issues.
- **Non-bubbling events** (e.g., `focus`, `blur`, `mouseenter`, `mouseleave`)  
  These don’t bubble — use alternatives like `focusin`, `mouseover` if delegation is needed.
- **Different unrelated event types**  
  If child elements have very different event needs (`click`, `dblclick`, `dragstart`), delegation may not be suitable.

## Performance Considerations

| Scenario           | Listeners in Memory | Dynamic Child Support |
| ------------------ | ------------------- | --------------------- |
| Without Delegation | `n` (1 per child)   | Requires reattachment |
| With Delegation    | 1 (on parent)       | Works automatically   |

- **Example:**
  - 1,000 list items × 1 listener each = **1,000 functions** in memory.
  - With delegation: **1 function** in memory for all items.
