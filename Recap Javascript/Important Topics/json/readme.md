# JSON Overview

JSON (JavaScript Object Notation) is a lightweight, text-based format for storing and exchanging data.

---

## JSON Structure

Data is represented as key-value pairs, similar to JavaScript objects.

Supported data types:

-   **Objects**: `{ "key": value, ... }`
-   **Arrays**: `[value1, value2, ...]`
-   **Strings**: `"text"`
-   **Numbers**: `123`, `3.14`
-   **Boolean**: `true`, `false`
-   **null**

---

## Important Points

-   JSON keys **must be strings wrapped in double quotes** `" "`.
-   JSON strings **must use double quotes**, not single quotes.
-   JSON **does not allow** functions, `undefined`, or symbols.
-   Parsing invalid JSON will **throw a syntax error**.

---

## JSON Methods

-   Convert an object to JSON string:

    ```js
    JSON.stringify(obj); // Convert obj to json
    JSON.parse(json); //Convert json to obj
    ```
