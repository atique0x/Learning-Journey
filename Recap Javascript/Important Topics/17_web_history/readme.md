# Web History in JavaScript

The **Web History API** allows you to interact with the browser's history stack — the list of pages the user has visited in the current tab.

Using this API, you can:

- Navigate back and forth through the history (like browser back/forward buttons)
- Modify the current history entry
- Add new entries without a page reload

## Properties & Methods

| Property / Method                             | Description                                                                       |
| --------------------------------------------- | --------------------------------------------------------------------------------- |
| **`history.length`**                          | Returns the number of entries in the session history, including the current page. |
| **`history.back()`**                          | Goes back one page (same as clicking the Back button).                            |
| **`history.forward()`**                       | Goes forward one page (same as clicking the Forward button).                      |
| **`history.go(n)`**                           | Moves forward/backward `n` pages (`n` negative = back).                           |
| **`history.pushState(state, title, url)`**    | Adds a new history entry with state, title, and URL without reloading the page.   |
| **`history.replaceState(state, title, url)`** | Modifies the current history entry without adding a new one.                      |

## Navigating Through History

```js
// Go back one page
history.back();

// Go forward one page
history.forward();

// Go back two pages
history.go(-2);

// Go forward three pages
history.go(3);
```

## Using pushState() and replaceState()

These methods let you change the **URL displayed in the browser** without reloading the page. Useful for **SPA (Single Page Applications)**.

```js
// Add a new history entry
history.pushState({page: 1}, "Title 1", "?page=1");

// Modify the current history entry
history.replaceState({page: 2}, "Title 2", "?page=2");
```

**Parameters:**

- **`state`** → Object associated with the history entry (retrievable later).
- **`title`** → A string (ignored by most browsers, but should be set).
- **`url`** → New URL to display (must be same origin).

## Summary

- `window.history` lets you move through the browser’s session history.
- Use **`pushState`** and **`replaceState`** to change URLs and states without reloading the page.
- Use the **`popstate`** event to react to user navigation.
