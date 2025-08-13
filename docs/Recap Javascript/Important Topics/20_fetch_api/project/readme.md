# Handling Files in the Browser

## 1. `<input type="file">`

Allows users to select files from their device. Can be used with **JavaScript** to read and preview files.

---

## 2. FileReader API

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

**Pros:** Works entirely **client-side**, no server needed.

**Cons:** Large files can consume significant memory.`localStorage` has **size limits (~5–10MB)**.

---

## 3. `URL.createObjectURL`

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

## 4. Writing Images (Browser → Storage / Server)

### 4.1 LocalStorage (Base64)

Stores image data as a **Base64 string**.

**Pros:**

- Persistent across page reloads.
- Easy to retrieve and display.

**Cons:**

- Size limitation (~5–10MB).
- Base64 adds **~33% overhead** to file size.

### 4.2 Uploading to Server

- Convert image into:
  - `FormData` / `multipart` (common for web forms)
  - Base64 string (less common for large files)
- Server can save as:
  - File on disk
  - Database blob
- After uploading, server usually returns a **URL for the image**.

---

## 5. Previewing Techniques

| Technique              | How to Use                                                       | Pros                                      | Cons                                                |
| ---------------------- | ---------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------- |
| **Base64 Preview**     | FileReader → `readAsDataURL`, assign to `img.src`                | Works offline, persists in `localStorage` | Memory-heavy for large files                        |
| **Object URL Preview** | `URL.createObjectURL(file)`, assign to `img.src` or `iframe.src` | Fast, memory-efficient                    | Temporary; must revoke with `URL.revokeObjectURL()` |
