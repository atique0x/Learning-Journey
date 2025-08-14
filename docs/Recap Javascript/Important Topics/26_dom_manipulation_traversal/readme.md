# DOM Manipulation & Traversal

### [Project Link]("https://atique0x.github.io/Learning-Journey/Recap%20Javascript/Important%20Topics/26_dom_manipulation_traversal/index.html)

## What is DOM?

DOM (Document Object Model) is a programming interface for HTML and XML documents.  
It represents the page so that programs can change the document structure, style, and content.  
The DOM represents the document as nodes and objects, allowing JavaScript to interact with HTML elements.

## DOM Manipulation

DOM manipulation means changing the structure, content, or style of HTML elements dynamically using JavaScript.

**Common DOM Manipulation tasks:**

- Select elements
- Modify content
- Change attributes
- Modify styles
- Create new elements
- Remove elements
- Insert elements at specific places

## Selecting Elements

- `document.getElementById(id)`  
  Selects the element with the given id.

      const header = document.getElementById('main-header');

- `document.getElementsByClassName(className)`  
  Returns a live HTMLCollection of all elements with the given class.

      const items = document.getElementsByClassName('list-item');

- `document.getElementsByTagName(tagName)`  
  Returns a live HTMLCollection of all elements with the given tag name.

      const divs = document.getElementsByTagName('div');

- `document.querySelector(selector)`  
  Returns the first element that matches a CSS selector.

      const firstBtn = document.querySelector('.btn-primary');

- `document.querySelectorAll(selector)`  
  Returns a static NodeList of all elements that match a CSS selector.

      const buttons = document.querySelectorAll('button');

## Reading & Modifying Content

- `element.textContent`  
  Get or set the text content inside an element (ignores HTML tags).
  ```js
  const para = document.querySelector("p");
  console.log(para.textContent); // read
  para.textContent = "New text content"; // set
  ```
- `element.innerHTML`  
  Get or set the HTML content inside an element.

      div.innerHTML = "<span>New HTML content</span>";

- `element.innerText`  
  Similar to `textContent` but respects CSS styling and is slower (less used).

---

## Changing Attributes

- `element.getAttribute(attrName)`  
  Get the value of an attribute.

      const src = img.getAttribute('src');

- `element.setAttribute(attrName, value)`  
  Set or change an attribute value.

      link.setAttribute('href', 'https://example.com');

- `element.removeAttribute(attrName)`  
  Remove an attribute.

      input.removeAttribute('disabled');

## Changing Styles

You can directly change inline styles using the `style` property:

```js
box.style.backgroundColor = "blue";
box.style.display = "none";
```

## Creating, Adding, and Removing Elements

- Create a new element

      const newDiv = document.createElement('div');

- Add text to the new element

      newDiv.textContent = 'Hello World';

- Append the new element to a parent

      document.body.appendChild(newDiv);

- Insert before a specific element

  ```js
  const container = document.querySelector("#container");
  const referenceNode = document.querySelector("#reference");
  container.insertBefore(newDiv, referenceNode);
  ```

- Remove an element

        const toRemove = document.querySelector('.old-item');
        toRemove.remove();

<br><br>

# DOM Traversal

DOM traversal means navigating between nodes (elements) in the DOM tree.

## Useful Properties for Traversal

### Parent Nodes

- `element.parentNode` — returns the parent node (can be element or document)

- `element.parentElement` — returns parent element (ignores non-element parents)

### Child Nodes

- `element.childNodes` — returns a NodeList of all child nodes (including text, comment nodes)

- `element.children` — returns an HTMLCollection of only child elements (ignores text nodes)

### Sibling Nodes

- `element.nextSibling` — returns the next sibling node (including text nodes)

- `element.previousSibling` — returns the previous sibling node

- `element.nextElementSibling` — returns the next sibling element (ignores text nodes)

- `element.previousElementSibling` — returns the previous sibling element

  ```js
  <div>Div-1</div>
  <ul id="list">
      <li>Item 1</li>
      <li class="selected">Item 2</li>
      <li>Item 3</li>
  </ul>
  <div>Div-2</div>
  ```

  ```js
  const selected = document.querySelector(".selected");
  console.log(selected);
  // Logs: <li class="selected">Item 2</li> — the element with class "selected"

  // Parent
  const list = selected.parentElement; // <ul id="list">
  console.log(list);
  // Logs: <ul id="list">...</ul> — the parent <ul> containing the list items

  // Children of the list
  const allItems = list.children; // HTMLCollection of 3 <li>
  console.log(allItems);
  /* Logs: 
      HTMLCollection(3) [
          <li>Item 1</li>, 
          <li class="selected">Item 2</li>, 
          <li>Item 3</li>
      ] — all <li> elements inside the <ul>
      */

  // Next sibling element
  const next = selected.nextElementSibling; // <li>Item 3</li>
  console.log(next);
  // Logs: <li>Item 3</li> — the next sibling element after the selected <li>

  // Previous sibling element
  const prev = selected.previousElementSibling; // <li>Item 1</li>
  console.log(prev);
  // Logs: <li>Item 1</li> — the previous sibling element before the selected <li>

  const prevElement = list.previousElementSibling;
  console.log(prevElement);
  // Logs: <div>Div-1</div> — the element immediately before the <ul id="list">

  const nextElement = list.nextElementSibling;
  console.log(nextElement);
  // Logs: <div>Div-2</div> — the element immediately after the <ul id="list">
  ```

### Event Property

| Method / Property     | Description                                                   |
| --------------------- | ------------------------------------------------------------- |
| `e.preventDefault()`  | Prevents the browser’s default action (like form submission). |
| `e.stopPropagation()` | Stops the event from bubbling up to parent elements.          |
| `e.target`            | The element that triggered the event.                         |
| `e.timeStamp`         | Timestamp of when the event occurred.                         |
| `e.target.value`      | Current value of the input/textarea/select element.           |
| `e.submitter`         | Used in forms with multiple submit buttons.                   |
