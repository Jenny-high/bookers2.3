module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    ["@babel/plugin-transform-class-properties", { loose: true }],
    ["@babel/plugin-transform-private-methods", { loose: true }],
    ["@babel/plugin-transform-private-property-in-object", { loose: true }],
    ["@babel/plugin-transform-destructuring"],
    ["@babel/plugin-proposal-object-rest-spread", { useBuiltIns: true }],
    ["@babel/plugin-transform-runtime", { helpers: false }],
    ["@babel/plugin-transform-regenerator", { async: false }],
    "babel-plugin-macros",
    "@babel/plugin-syntax-dynamic-import"
  ]
};
