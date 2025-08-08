## Example of Spread, Optional Chaining, and Nullish Coalescing Operator

```js
const defaultConfig = {
    theme: "dark",
    fonts: ["Arial", "Helvetica"], // Default font list
    options: {
        showSidebar: null, // Default sidebar option (null means no explicit setting)
        notifications: null, // Default notifications option
    },
};

function setup(userConfig = {}) {
    // Merge defaultConfig with userConfig
    // Spread operator combines properties, userConfig overrides defaults
    // fonts are merged as arrays to combine default and user fonts
    // options are merged as nested objects, userConfig.options overrides defaults
    const mergeConfig = {
        ...defaultConfig,
        ...userConfig,
        fonts: [...defaultConfig.fonts, ...userConfig.fonts],
        options: {
            ...defaultConfig.options,
            ...userConfig.options,
        },
    };

    // Use optional chaining to safely access nested property showSidebar
    // Use nullish coalescing (??) to default to "Enabled" if showSidebar is null or undefined
    const sidebar = mergeConfig?.options?.showSidebar ?? "Enabled";

    // Safely access notifications option; no default fallback here
    const notifications = mergeConfig?.options?.notifications;

    // Log the fully merged configuration object
    console.log("Config:", mergeConfig);
    // Log the notifications setting (true, false, null, or undefined)
    console.log("Notifications:", notifications);
    // Log the sidebar setting or fallback default
    console.log("Sidebar shown:", sidebar);
}

const userConfig = {
    fonts: ["Time New Roman"], // User adds a new font to the list
    options: {
        notifications: true, // User enables notifications
    },
};

// Call setup with the userConfig object
setup(userConfig);
```

### Output

```js
Config: {
  theme: 'dark',
  fonts: ['Arial', 'Helvetica', 'Time New Roman'],
  options: { showSidebar: null, notifications: true }
}
Notifications: true
Sidebar shown: Enabled
```

<br>

# Summary Table

| Operator           | Syntax                    | Purpose                                                 | Example                 |
| ------------------ | ------------------------- | ------------------------------------------------------- | ----------------------- |
| Spread             | `...array` or `...object` | Expand iterable/object into elements or properties      | `[...arr1, ...arr2]`    |
| Rest               | `...args`                 | Collect remaining elements/properties into array/object | `function(...args) {}`  |
| Nullish Coalescing | `??`                      | Provide default for `null` or `undefined` values        | `value ?? defaultValue` |
| Optional Chaining  | `?.`                      | Safe access nested properties or functions              | `obj?.prop?.func?.()`   |
