{
    // ✅ Initialize a read-only object
    var config = {
        port: 3000,
        secure: true,
    };
    // ❌ Error: Cannot modify read-only properties
    // config.port = 4000;
    // config.secure = false;
    // Using in functions
    function showConfig(cfg) {
        console.log("Port: ".concat(cfg.port, ", Secure: ").concat(cfg.secure));
    }
    showConfig(config);
    var cfg = {
        port: 8080, // ✅ optional because of Partial
        // secure is optional
    };
    var cfgpick = {
        port: 8080,
        secure: true,
    };
    // ✅ port can be modified
    cfgpick.port = 500;
    // ❌ Error: Cannot modify readonly property
    // cfgpick.secure = false;
}
