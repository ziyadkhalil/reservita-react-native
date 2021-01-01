module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          cwd: ".",
          extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js"],
          alias: {
            "@assets": "./assets",
            "@app": "./src/",
          },
        },
      ],
    ],
    //   // "jest-hoist",
    // ],
  };
};
