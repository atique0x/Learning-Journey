export const setUser = () => {
    const registerUsers = [
        { username: "atique", password: "1234" },
        { username: "asif", password: "1234" },
        { username: "akash", password: "1234" },
        { username: "rafid", password: "1234" },
        { username: "tamim", password: "1234" },
    ];
    localStorage.setItem("users", JSON.stringify(registerUsers));
};
setUser();
export const getRegisterUsers = () => {
    const findUsers = localStorage.getItem("users");
    let users;
    if (!findUsers)
        users = [];
    else {
        users = JSON.parse(findUsers);
    }
    return users;
};
