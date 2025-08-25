{
  // -------------------------------------------
  // Interface Definitions
  // -------------------------------------------

  interface Config {
    port: number;
    secure: boolean;
  }

  // Using Readonly<T> utility type
  type ReadonlyConfig = Readonly<Config>;

  // ✅ Initialize a read-only object
  const config: ReadonlyConfig = {
    port: 3000,
    secure: true,
  };

  // ❌ Error: Cannot modify read-only properties
  // config.port = 4000;
  // config.secure = false;

  // Using in functions
  function showConfig(cfg: Readonly<Config>) {
    console.log(`Port: ${cfg.port}, Secure: ${cfg.secure}`);
  }

  showConfig(config);

  // -------------------------------------------
  // Combining with Partial
  // -------------------------------------------

  type PartialReadonlyConfig = Partial<Readonly<Config>>;

  const cfg: PartialReadonlyConfig = {
    port: 8080, // ✅ optional because of Partial
    // secure is optional
  };

  // -------------------------------------------
  // Combining Pick and Readonly
  // -------------------------------------------

  type PickReadonlyConfig = Pick<Config, "port"> & // normal property
    Readonly<Pick<Config, "secure">>; // readonly property

  const cfgpick: PickReadonlyConfig = {
    port: 8080,
    secure: true,
  };

  // ✅ port can be modified
  cfgpick.port = 500;

  // ❌ Error: Cannot modify readonly property
  // cfgpick.secure = false;
}
