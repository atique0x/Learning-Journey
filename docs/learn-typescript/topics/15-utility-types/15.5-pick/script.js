{
    // ✅ Only selected properties are allowed
    var profile = {
        id: 1,
        name: "Atique",
    };
    // ❌ Error: 'email' and 'isAdmin' cannot exist in UserProfile
    // const invalidProfile: UserProfile = {
    //   id: 2,
    //   name: "Shariar",
    //   email: "shariar@example.com"
    // };
    // Using in functions
    function showProfile(user) {
        console.log("User: ".concat(user.name, ", Email: ").concat(user.email));
    }
    showProfile({
        name: "Atique",
        email: "atique@example.com",
    });
    var admin = {
        id: 1,
        name: "Atique",
        isAdmin: true,
    };
}
