# Recursive Function

A recursive function is a function that **calls itself** in order to solve a problem.

## Why Use Recursion?

-   A task can be broken into smaller sub-tasks of the same type.
-   You don't know how many times a function will be called (like navigating folders or solving puzzles such as Fibonacci, factorial, etc.).

### Base Case

-   This is the **stopping condition**. It tells the function when to stop calling itself.
-   Without a base case, the function would keep calling itself forever and cause an error (infinite recursion).

### Recursive Case

-   This is where the function **calls itself**, but with a simpler or smaller input to move toward the base case.
-   It breaks the big problem into smaller parts so that each time we get closer to solving the full problem.

<br>
## 1. Counting Up

### Loop Version (Iterative):

The function prints numbers from 1 through `num` using a simple for loop.  
The logic is straightforward: repeat a block of code `num` times.

```js
function countUpLoop(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}
countUpLoop(10);
```

> Example: counting up to 10 prints numbers 1 to 10.

---

### Recursive Version:

-   The function prints the current number and then calls itself with the next number (`num + 1`).
-   The recursion stops when the number reaches 10 (base case).

```js
function countUp(num) {
    console.log(num);
    if (num >= 10) {
        return;
    }
    countUp(num + 1);
}
countUp(1);
```

-   The recursion unfolds like this:  
    `countUp(1)` → prints 1, calls `countUp(2)`  
    `countUp(2)` → prints 2, calls `countUp(3)`  
    ...  
    `countUp(10)` → prints 10, stops recursion

---

## 2. Counting Down

-   This recursive function counts down from `num` to 1, but prints the numbers during the **“unwinding”** phase of recursion.
-   It first calls itself with `num - 1` until it reaches 0 (base case). Then it prints the numbers as recursion returns.

```js
console.log("Count Down");
function countDown(num) {
    if (num == 0) {
        return;
    }
    countDown(num - 1);
    console.log(num); //Print after return
}
countDown(10);
```

> Output is from 1 to 10, but the recursion works “backwards.”

---

## 3. Factorial Calculation

Calculates factorial by calling itself with `num - 1`.  
Multiplies `num` by the factorial of `num - 1`.  
Stops when `num === 1` (base case).

```js
function factorial(num) {
    if (num === 1) {
        return 1;
    }

    return num * factorial(num - 1);
}

console.log(factorial(5));
```

Example: factorial of 5 is 120.

<br>

## Folder Structure

```js
const folder = {
    name: "root",
    children: [
        { name: "file1" },
        {
            name: "subfolder",
            children: [
                { name: "file2" },
                {
                    name: "nested",
                    children: [{ name: "file3" }],
                },
            ],
        },
    ],
};
```

---

## 🔁 1. Loop-Based Version:

```js
function foolderLoop(root) {
    console.log(root); // logs entire root object
    console.log(root.name); // prints "root"

    if (root.children) {
        for (let child of root.children) {
            console.log(child.name); // file1, subfolder

            if (child.children) {
                for (let grandChild of child.children) {
                    console.log(grandChild.name); // file2, nested

                    if (grandChild.children) {
                        for (let anotherChild of grandChild.children) {
                            console.log(anotherChild.name); // file3
                        }
                    }
                }
            }
        }
    }
}
foolderLoop(folder);
```

**Explanation:**
Here handling each level manually:

-   **child** = children of `root` → `file1`, `subfolder`
-   **grandChild** = children of `subfolder` → `file2`, `nested`
-   **anotherChild** = children of `nested` → `file3`
    It works **only up to 3 levels**. We need **more nested loops** if the structure goes deeper.

---

## 🔁 2. Recursive Version:

```js
function folderRecursive(folder) {
    console.log(folder.name); // Print current folder or file name

    if (!folder.children) {
        return; // Base case: no children → stop here
    }

    for (let child of folder.children) {
        folderRecursive(child); // Recursive call for each child
    }
}
folderRecursive(folder);
```

**Explanation:** This function uses **recursion** – a function that calls itself.

Steps:

1. Print `folder.name`
2. If `folder.children` exists, loop through each and call `folderRecursive()` again

> Works for **any level** of nesting – goes deep automatically

---

## ✅ Conclusion

-   Use **recursive functions** for tree-like structures
-   **Loop-based** is manual and breaks with deeper levels
-   **Recursion** is cleaner, shorter, and scalable

<br>
<br>

# Loop vs. Recursion

| Problem                       | Can use Loop? | Recursion is Better Because...                           |
| ----------------------------- | ------------- | -------------------------------------------------------- |
| Counting / summing numbers    | ✅ Yes        | Loop is better (simpler, faster)                         |
| Calculating factorial         | ✅ Yes        | Loop is fine, recursion works for learning               |
| Fibonacci sequence            | ✅ Yes        | Loop is better for performance (avoid repeated calls)    |
| Traversing nested folders     | ✅ With stack | Recursion is cleaner and shorter                         |
| Traversing DOM tree           | ✅ With stack | Recursion matches the structure of the DOM               |
| Parsing nested JSON           | ✅ With stack | Recursion is more elegant                                |
| Solving a maze (backtracking) | ✅ With stack | Recursion matches the natural trial/error structure      |
| Tree/graph traversal (DFS)    | ✅ With stack | Recursion is cleaner, loop needs explicit stack          |
| QuickSort / MergeSort         | ✅ With stack | Recursion is natural due to divide-and-conquer structure |

---

## But why use recursion often comes down to:

-   **Clarity** – Code is easier to understand
-   **Structure** – Natural fit for tree/nested data
-   **Less time** to write/debug in many cases
