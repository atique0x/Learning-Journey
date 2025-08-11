# Array Methods Overview

```js
//Data Format
{
    id: 1,
    name: "Alice",
    age: 28,
    address: { city: "New York", zip: 10001 },
    hobbies: ["reading", "traveling"],
},
```

## map()

- **Purpose:** Transforms each element of an array into a new element, returning a new array of the same length.
- **Returns:** New array with transformed elements.
- **Original Array:** Does not modify the original array.
- **Example:** Transforming all user names to uppercase.

  ```js
  const namesUpper = users.map((user) => user.name.toUpperCase());

  console.log(namesUpper);
  // ["ALICE", "BOB", "CHARLIE", "DIANA", "EVAN"]
  ```

## filter()

- **Purpose:** Returns a new array containing only the elements that pass a test (predicate function).
- **Returns:** New array with elements that satisfy the condition.
- **Original Array:** Does not modify the original array.
- **Example:** Filtering users who live in Chicago.

  ```js
  const chicagoUsers = users.filter((user) => user.address.city === "Chicago");

  console.log(chicagoUsers);
  /* 
  [
  { id: 2, name: "Bob", ... },
  { id: 5, name: "Evan", ... }
  ]
  */
  ```

## reduce()

- **Purpose:** Reduces the array to a single value by accumulating a result through a function.
- **Returns:** Single value (could be a number, object, array, string, etc.).
- **Parameters:** Takes a callback with accumulator and current element and an optional initial value.
- **Example:** Grouping users by their city into an object.

  ```js
  const groupedByCity = users.reduce((acc, user) => {
    const city = user.address.city;

    if (!acc[city]) {
      acc[city] = [];
    }

    acc[city].push(user);

    return acc;
  }, {});

  console.log(groupedByCity);

  /*
  {
  "New York": [
      { id: 1, name: "Alice", age: 28, address: {...}, hobbies: [...] },
      { id: 4, name: "Diana", age: 40, address: {...}, hobbies: [...] }
  ],
  "Chicago": [
      { id: 2, name: "Bob", age: 34, address: {...}, hobbies: [...] },
      { id: 5, name: "Evan", age: 30, address: {...}, hobbies: [...] }
  ],
  "San Francisco": [
      { id: 3, name: "Charlie", age: 22, address: {...}, hobbies: [...] }
  ]
  }*/
  ```

## find()

- **Purpose:** Returns the first element in the array that satisfies a test function.
- **Returns:** The found element or `undefined` if none found.
- **Behavior:** Stops searching once an element is found.
- **Example:** Finding the first user who has "music" as a hobby.

  ```js
  const musicLover = users.find((user) => user.hobbies.includes("music"));

  console.log(musicLover);
  /* 
  {
    id: 4,
    name: "Diana",
    age: 40,
    address: { city: "New York", zip: 10002 },
    hobbies: ["music", "reading"]
  }
  */
  ```

## findIndex()

- **Purpose:** Returns the index of the first element that satisfies the test function.
- **Returns:** Index (number) or `-1` if none found.
- **Behavior:** Stops searching once an element is found.
- **Example:** Finding the index of the first user living in San Francisco.

  ```js
  const sfUserIndex = users.findIndex(
    (user) => user.address.city === "San Francisco"
  );

  console.log(sfUserIndex); // 2
  ```

## some()

- **Purpose:** Checks if at least one element in the array passes the test function.
- **Returns:** `true` or `false`.
- **Behavior:** Stops checking as soon as one match is found.
- **Example:** Checking if there is at least one user younger than 25.

  ```js
  const hasYoungUser = users.some((user) => user.age < 25);
  console.log(hasYoungUser); // true (Charlie is 22)
  ```
