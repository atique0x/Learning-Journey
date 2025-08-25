{
    // ✅ Only remaining properties are allowed
    var safeUser = {
        id: 1,
        name: "Atique",
        email: "atique@example.com",
    };
    // ❌ Error: 'password' and 'isAdmin' cannot exist in PublicUser
    // const invalidUser: PublicUser = {
    //   id: 2,
    //   name: "Shariar",
    //   email: "shariar@example.com",
    //   password: "1234",
    //   isAdmin: true
    // };
    // Using in functions
    function sendUserData(user) {
        console.log("Sending user data:", user);
    }
    sendUserData({
        id: 3,
        name: "Atique",
        email: "atique@example.com",
        isAdmin: false,
    });
    var partialUser = {
        name: "Shariar", // ✅ optional because of Partial
    };
}
