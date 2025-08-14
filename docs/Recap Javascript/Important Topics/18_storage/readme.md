# Local Storage vs Session Storage

| Feature / Aspect               | Local Storage                                                                                                                                                                                                                                   | Session Storage                                                                                                                                                                                                                                                    |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Scope**                      | Data is accessible to all tabs/windows of the same origin.                                                                                                                                                                                      | Data is accessible only to the tab/window where it was created.                                                                                                                                                                                                    |
| **Persistence / Lifetime**     | Persists indefinitely until explicitly removed via code or browser settings.                                                                                                                                                                    | Exists only for the duration of the page session. Cleared when the tab or window is closed.                                                                                                                                                                        |
| **Capacity**                   | ~5–10 MB per origin (varies by browser).                                                                                                                                                                                                        | ~5–10 MB per origin (varies by browser).                                                                                                                                                                                                                           |
| **Data Type**                  | Stores strings only (objects/arrays must be serialized with `JSON.stringify`).                                                                                                                                                                  | Stores strings only (objects/arrays must be serialized with `JSON.stringify`).                                                                                                                                                                                     |
| **Access Speed**               | Very fast (in-memory + disk cache), best for small/medium datasets.                                                                                                                                                                             | Same as Local Storage — minimal latency for reads/writes.                                                                                                                                                                                                          |
| **Accessibility**              | Accessible across tabs/windows of the same origin and protocol.                                                                                                                                                                                 | Restricted to the same browser tab/window.                                                                                                                                                                                                                         |
| **When to Use**                | - Persistent user settings (theme, language) <br> - Saved login tokens (non-sensitive) <br> - Offline app data <br> - Cached API responses for performance <br> - Game progress or achievement data                                             | - Multi-step form progress in a single tab <br> - Temporary e-commerce cart per tab <br> - Single-session authentication tokens <br> - UI state that should reset when tab is closed                                                                               |
| **Security Considerations**    | Vulnerable to XSS(Cross-Site Scripting) attacks if the site is not secure. Never store sensitive info (passwords, credit card details).                                                                                                         | Same vulnerabilities as Local Storage, but data is shorter-lived.                                                                                                                                                                                                  |
| **Advanced Use Case Examples** | - Offline Web Apps: Store large datasets for offline use (e.g., note-taking app) <br> - Performance Optimization: Cache frequently accessed API responses <br> - User Personalization: Save dashboard widget arrangements or last visited pages | - Session-Specific Views: Keep search filters or pagination state per tab <br> - One-Time Access Tokens: Store a token that expires when the tab closes <br> - Temporary Draft Storage: Keep form draft data during a session without cluttering long-term storage |
| **Clearing Data**              | Can be cleared via `localStorage.clear()` in code or manually in browser settings.                                                                                                                                                              | Can be cleared via `sessionStorage.clear()` in code or automatically on tab close.                                                                                                                                                                                 |

<br>

## Just for idea

### IndexedDB

- A browser-based, NoSQL database for storing large amounts of structured data.
- Supports objects, files, blobs, and complex data.
- Data is stored asynchronously and persists until cleared.
- Ideal for offline apps, large data, and complex queries.
- Supported by all modern browsers.

### Browser Extensions Storage

Special storage APIs used by browser extensions, separate from websites.

Types:

- **storage.local** — persistent, stores data locally for the extension.
- **storage.sync** — syncs data across user’s browsers/devices.
- **storage.session** — temporary, lasts while extension runs.

Used to save extension settings, state, and preferences securely and independently.
