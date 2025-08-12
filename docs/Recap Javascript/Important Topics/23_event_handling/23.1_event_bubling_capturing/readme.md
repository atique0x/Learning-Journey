# Event Propagation

When a user triggers an event (like a click), that event doesn't just affect the element directly under the cursor. Instead, it propagates through the DOM tree in three phases:

1. **Capturing phase:**  
   The event starts at the window and moves down the DOM tree towards the target element.

2. **Target phase:**  
   The event reaches the target element where the event actually occurred.

3. **Bubbling phase:**  
   After the target phase, the event bubbles up the DOM tree back to the window, triggering listeners on ancestors.

## Event Bubbling

When an event happens on an element, it first triggers on that element, then “bubbles up” to its ancestors in the DOM tree, firing the same event type on each ancestor (unless stopped).

Example of event firing order when clicking a child element:

```html
<div id="parent">
  <button id="child">Click Me</button>
</div>
```

```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

// Child clicked
// Parent clicked
```

**This happens because:**

- Event is dispatched to the child element first
- Then it bubbles up to the parent element
- Then continues up the DOM tree unless stopped

## Event Capturing

Capturing is the opposite — an event is handled from the top down before it reaches the target.

If you pass `{ capture: true }` in `addEventListener`, the listener will be invoked during the capturing phase.

Example of event firing order when clicking a child element with capturing enabled on the parent:

```js
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

//Parent capturing
//Child clicked
```

## Stopping Bubbling

To prevent an event from bubbling up the DOM tree and triggering ancestor listeners, call:

`event.stopPropagation();`

```js
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Only child");
});
```

This ensures only the target element's event listener runs.

## Key Points

| Concept           | Direction                | Use Case                         |
| ----------------- | ------------------------ | -------------------------------- |
| Bubbling          | Child → Parent           | Default JS behavior              |
| Capturing         | Parent → Child           | Rarely used, special needs       |
| stopPropagation() | Stops bubbling/capturing | Prevent parent/ancestor handlers |
| Event Delegation  | Uses bubbling            | Fewer listeners, dynamic content |
