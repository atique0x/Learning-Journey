# JavaScript Object Properties & Methods

---

## Keys and Values

-   **Keys** are called **properties**.
-   **Values** can be any data type: string, number, boolean, array, object, or function.

---

## Useful Object Methods

| Method                          | Description                                          |
| ------------------------------- | ---------------------------------------------------- |
| `Object.keys(obj)`              | Returns an array of the object's **keys**            |
| `Object.values(obj)`            | Returns an array of the object's **values**          |
| `Object.entries(obj)`           | Returns an array of **[key, value]** pairs           |
| `Object.assign(target, source)` | Copies values from source object(s) to target object |

<br>

```js
const user = {
    name: "Atique",
    age: 25,
    isActive: false,
    isDeleted: true,
    greet: function () {
        console.log(`Hello, ${this.name}`);
    },
};
```

```js
user.isActive = true; // Update property
user.email = "satique06@gmail.com"; // Add new property
delete user.isDeleted; // Remove property
```

> **Objects in JavaScript are mutable** — you can freely add, update, or delete properties.

---

## Methods

**Built-in methods to interact with object properties:**

```js
Object.keys(user); // ['name', 'age', 'isActive', 'greet', 'email']
Object.values(user); // ['Atique', 25, true, function, 'satique06@gmail.com']
Object.entries(user); // [['name', 'Atique'], ['age', 25], ...]
```

-   `Object.keys(user)` → Returns array of property names (keys)
-   `Object.values(user)` → Returns array of values
-   `Object.entries(user)` → Returns array of [key, value] pairs

## Copying Objects

Original object contains user info and nested `settings` object.

```js
const mainObj = {
    user: "Atique",
    role: "admin",
    active: true,
    settings: { theme: "dark", notification: true },
};
```

**Shallow Copy:**

```js
const copyObj = { ...mainObj }; // Shallow copy mainObj into copyObj (top-level properties copied, nested objects by reference)
copyObj.active = false; // Update 'active' property only in copyObj
console.log(mainObj, copyObj); // Log both: mainObj.active is still true, copyObj.active is false

copyObj.settings.theme = "light"; // Modify nested object 'settings.theme' via copyObj (shared reference!)
console.log(mainObj.settings, copyObj.settings); // Both objects show 'theme' as 'light' because 'settings' is shared
```

-   Only top-level properties copied
-   `settings` is still a reference → Changes in one affect the other

---

**Deep Copy (Safe Way):**

```js
const deepCopy = structuredClone(mainObj); // Create a deep copy of mainObj, cloning nested objects as well
deepCopy.settings.theme = "dark"; // Update 'theme' property only in deepCopy.settings (separate object)
console.log(mainObj.settings, deepCopy.settings); // mainObj.settings remains unchanged; deepCopy.settings has 'dark'
```

-   Fully clones nested objects
-   Changes in `deepCopy` do not affect `mainObj`

---

## `Object.freeze(obj)`

```js
Object.freeze(mainObj);
mainObj.active = false; // will not work
```

-   Makes the object completely **immutable**
-   No add, remove, or modify operations allowed

## `Object.seal(obj)`

```js
const config = { mode: "light" };
Object.seal(config);

config.mode = "dark"; // allowed
config.theme = "blue"; // ignored
```

-   Sealed object allows updating **existing** properties
-   Cannot add or delete properties

## Symbol Usage

```js
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 == sym2); //false
```

-   `Symbol("id")` creates a **unique identifier**
-   Even with the same description, symbols are always **unique**
-   Even though both symbols have the same - description "id", each Symbol is unique.
-   So sym1 == sym2 (and also sym1 === sym2) is always false.

---

## Object

Example object with unusual keys:

```js
const loggedIn = {
    id: 1,
    name: "Atique",
    email: "satique06@gmail.com",
    2: "4",
    true: true,
    undefined: undefined,
    NaN: NaN,
    function: "Function",
    [sym1]: "key",
};
//console.log(loggedIn[sym1]); //key
```

**Explanation:**

> JavaScript automatically converts all non-string keys to strings:

-   `true` → `"true"`
-   `undefined` → `"undefined"`
-   `NaN` → `"NaN"`
-   `2` → `"2"`
-   `function` → `"function"` (a valid string key)

---

## `Object.groupBy()` method

```js
const groupedEmployee = Object.groupBy(employees, (emp) => emp.department);
console.log(groupedEmployee);
```
