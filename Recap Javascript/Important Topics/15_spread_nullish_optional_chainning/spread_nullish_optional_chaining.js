const defaultConfig = {
    theme: "dark",
    fonts: ["Arial", "Helvetica"],
    options: {
        showSidebar: null,
        notifications: null,
    },
};

function setup(userConfig = {}) {
    const mergeConfig = {
        ...defaultConfig,
        ...userConfig,
        fonts: [...defaultConfig.fonts, ...userConfig.fonts],
        options: {
            ...defaultConfig.options,
            ...userConfig.options,
        },
    };
    const sidebar = mergeConfig?.options?.showSidebar ?? "Enabled";

    const notifications = mergeConfig?.options?.notifications;

    console.log("Config:", mergeConfig);
    console.log("Notifications:", notifications);
    console.log("Sidebar shown:", sidebar);
}

const userConfig = {
    fonts: ["Time New Roman"],
    options: {
        notifications: true,
    },
};
setup(userConfig);
