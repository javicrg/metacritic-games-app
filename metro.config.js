// NativeWind v4's Lightning CSS native binary has no Windows ia32 build.
// Use its API-compatible WebAssembly implementation when Node is 32-bit.
if (process.platform === "win32" && process.arch === "ia32") {
  const Module = require("module");
  const load = Module._load;
  Module._load = function (request, parent, isMain) {
    return load.call(
      this,
      request === "lightningcss" ? "lightningcss-wasm" : request,
      parent,
      isMain,
    );
  };
}

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
