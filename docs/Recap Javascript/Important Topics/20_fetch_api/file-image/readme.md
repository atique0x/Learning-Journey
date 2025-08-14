# Handling Files in the Browser

#### [Image uploading project link](https://atique0x.github.io/Learning-Journey/Recap%20Javascript/Important%20Topics/20_fetch_api/file-image/index.html)

## `<input type="file">`

Allows users to select files from their device. Can be used with **JavaScript** to read and preview files.

---

## FileReader API

Converts **File objects** into usable data formats in JavaScript.

```js
const reader = new FileReader();
reader.onload = (event) => {
  localStorage.setItem("image", event.target.result); // Save Base64
  imagePreview.src = event.target.result; // Display preview
  imagePreview.style.display = "block";
};
reader.readAsDataURL(imageFile); // Convert to Base64
```

### Common Methods

| Method                    | Description                      | Use Case / Notes                                                                   |
| ------------------------- | -------------------------------- | ---------------------------------------------------------------------------------- |
| `readAsDataURL(file)`     | Converts file to a Base64 string | Useful for **image previews**, can be stored in `localStorage` (small images only) |
| `readAsArrayBuffer(file)` | Converts file to raw binary data | Useful for **sending files via network** or processing them in JS                  |

- **Pros:** Works entirely **client-side**, no server needed.
- **Cons:** Large files can consume significant memory.`localStorage` has **size limits (~5–10MB)**.

---

## `URL.createObjectURL`

Creates a **temporary URL** that points to a file in memory.

```js
const fileURL = URL.createObjectURL(otherFile);
pdfPreview.src = fileURL;
pdfPreview.style.display = "block";
```

- Can be assigned to `<img>` or `<iframe>` for **instant previews**.
- Example usage: PDFs, images, videos.

**Pros:** Efficient, no Base64 conversion needed. Handles **large files** well.

**Cons:** URL exists only while the page is open. Must call `URL.revokeObjectURL()` to **free memory**.

---

## Writing Images (Browser → Storage / Server)

### LocalStorage: Stores image data as a **Base64 string**.

- Persistent across page reloads.
- Easy to retrieve and display.
- Size limitation (~5–10MB).
- Base64 adds **~33% overhead** to file size.

### Uploading to Server

- Convert image into:
  - `FormData` / `multipart` (common for web forms)
  - Base64 string (less common for large files)
- Server can save as:
  - File on disk
  - Database blob
- After uploading, server usually returns a **URL for the image**.

---

## Previewing Techniques

| Technique              | How to Use                                                       | Pros                                      | Cons                                                |
| ---------------------- | ---------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------- |
| **Base64 Preview**     | FileReader → `readAsDataURL`, assign to `img.src`                | Works offline, persists in `localStorage` | Memory-heavy for large files                        |
| **Object URL Preview** | `URL.createObjectURL(file)`, assign to `img.src` or `iframe.src` | Fast, memory-efficient                    | Temporary; must revoke with `URL.revokeObjectURL()` |

<br>
<br>

# FormData in JavaScript

`FormData` is a built-in JavaScript object used to construct key/value pairs representing form fields and their values. It is primarily used to send form data asynchronously via `fetch` or `XMLHttpRequest`, especially when uploading files.

- **Note:** No need to set `Content-Type` to `multipart/form-data`; the browser sets it automatically with proper boundaries.
- Can handle both text and file uploads.

---

## Creating a FormData Object

### 1. From an HTML form

```js
const form = document.getElementById("myForm");
const formData = new FormData(form);
```

- Automatically captures all form fields.
- Handles file inputs (`<input type="file">`) easily.
- Only captures fields that have a `name` attribute.

### 2. Creating empty FormData and appending manually

```js
const formData = new FormData();
formData.append("username", "Atique");
formData.append("email", "atique@example.com");
```

- You can manually add key/value pairs to the FormData object.
- Supports both text fields and file uploads.

---

## Important FormData Methods

| Method                          | Description                                                                 |
| ------------------------------- | --------------------------------------------------------------------------- |
| `append(name, value, filename)` | Adds a new key/value pair. For files, `filename` can specify the file name. |
| `delete(name)`                  | Deletes a key/value pair.                                                   |
| `get(name)`                     | Returns the first value associated with the given key.                      |
| `has(name)`                     | Checks if a key exists.                                                     |
| `keys()`                        | Returns an iterator of all keys.                                            |
| `values()`                      | Returns an iterator of all values.                                          |
| `entries()`                     | Returns an iterator of `[key, value]` pairs.                                |
