| Utility        | Effect / Description                                            | Works On       |
| -------------- | --------------------------------------------------------------- | -------------- |
| Partial<T>     | Makes all properties of an object type **optional**             | Object types   |
| Required<T>    | Makes all properties of an object type **required**             | Object types   |
| Readonly<T>    | Makes all properties of an object type **immutable / readonly** | Object types   |
| Pick<T, K>     | **Selects specific properties** from an object type             | Object types   |
| Omit<T, K>     | **Removes specific properties** from an object type             | Object types   |
| Awaited<T>     | **Extracts the resolved type** from a Promise                   | Promise types  |
| Exclude<T, U>  | **Removes types assignable to U** from a union type             | Union types    |
| Extract<T, U>  | **Keeps only types assignable to U** from a union type          | Union types    |
| NonNullable<T> | **Removes null and undefined** from a type                      | Any type       |
| ReturnType<T>  | **Extracts the return type** of a function type                 | Function types |
| Record<K, T>   | **Creates an object type with keys K and values of type T**     | Object types   |
