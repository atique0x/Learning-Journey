# Type Aliases in TypeScript

A **Type Alias** gives a custom name to a type (primitive, union, object, array, function) to make code readable, reusable, and type-safe.

## Why Use Type Aliases

- Improves readability and maintainability
- Promotes reusability of complex types
- Ensures type safety
- Handles nested objects, arrays, unions, and functions
- Ideal for large projects

## Primitive & Union Type Aliases

```ts
type UserId = number | string;

let userId: UserId;
userId = 1234; // ✅ number
userId = "1234"; // ✅ string
// userId = true;   // ❌ Error: boolean not allowed
```

```ts
type Status = "success" | "error" | "pending";

let currentStatus: Status;
currentStatus = "success"; // ✅ Allowed
// currentStatus = "loading"; // ❌ Error
```

- Union types allow multiple types for a variable.
- Compiler ensures only allowed values are used.

---

## 2. Object Type Aliases

```ts
type Users = {
  id: number;
  name: string;
  age: number;
  isActive?: boolean; // optional property
};

const user: Users = {
  id: 1,
  name: "Atique",
  age: 24,
};
```

- Optional properties are marked with `?`.
- Object aliases make nested data structures easier to manage.

---

## 3. Function Type Aliases

```ts
type GreetUser = (name: string) => string;

const greetUser = (name: string): string => `Hello, ${name}!`;

const greetUser2: GreetUser = (name) => `Hello, ${name}!`;
```

- Function aliases enforce parameter types and return types.
- Useful for callbacks and higher-order functions.

---

## Task Management

```ts
type TaskStatus = "todo" | "in-progress" | "done";
type Priority = "low" | "medium" | "high";

type User = {
  id: number;
  name: string;
  email: string;
  bio?: string;
  profilePicture?: string;
};

type Task = {
  id: number;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: Priority;
  assignee: User;
  tags: string[];
};

type UpdateStatus = (task: Task, status: TaskStatus) => Task;

const updateTaskStatus: UpdateStatus = (task, status) => {
  task.status = status;
  return task;
};
```
