# Utility Type: `Readonly<T>`

`Readonly<T>` is a built-in TypeScript utility type that makes **all properties of a type immutable**.  
Once initialized, the properties **cannot be changed**.  
It enforces **immutability**, which is especially useful in **state management**, **configuration objects**, and **safe coding practices**.

---

> “Take every property in a type and make it **read-only**.”

---

## Examples

```ts
//Basic Readonly

interface Config {
  port: number;
  secure: boolean;
}

const config: Readonly<Config> = {
  port: 3000,
  secure: true,
};

// ❌ Cannot modify properties
// config.port = 4000;
```

---

```ts
//Function Example

function showConfig(cfg: Readonly<Config>) {
  console.log(`Port: ${cfg.port}, Secure: ${cfg.secure}`);
}

showConfig(config);
```

---

```ts
//Combining Partial + Readonly

type PartialReadonlyConfig = Partial<Readonly<Config>>;

const cfg: PartialReadonlyConfig = {
  port: 8080, // ✅ Optional, but still read-only if provided
};
```

---

```ts
//Combining Pick + Readonly

type PickReadonlyConfig = Pick<Config, "port"> & // normal
  Readonly<Pick<Config, "secure">>; // readonly

const cfgpick: PickReadonlyConfig = {
  port: 8080,
  secure: true,
};

// ✅ port can be changed
cfgpick.port = 500;

// ❌ secure cannot be changed
// cfgpick.secure = false;
```

---

## Notes

- `Readonly<T>` **does not** deeply enforce immutability.
  Nested objects remain **mutable** unless you use **DeepReadonly**.
- Can be combined with **Pick**, **Omit**, **Partial**, or **Required** for **precise type control**.
- Useful in:
  - **State management** (e.g., React, Redux)
  - **API responses**
  - **Immutable configuration objects**

### Deep Readonly Example

```ts
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

interface AppConfig {
  port: number;
  database: {
    url: string;
    password: string;
  };
}

const appConfig: DeepReadonly<AppConfig> = {
  port: 3000,
  database: {
    url: "localhost",
    password: "secret",
  },
};

// ❌ Cannot modify nested objects either
// appConfig.database.password = "newpass";
```

---

## Key Takeaways

- Makes **all properties immutable**
- Uses **mapped types** with `readonly`
- Protects objects from **accidental mutation**
- Useful for **immutable configs**, **React/Redux state**, **API responses**, combined utility types
