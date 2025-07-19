const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  "mode": "none",
  "entry": "./src/script/index.js",
  "output": {
    "path": path.resolve(__dirname + "/dist"),
    "filename": "main.js",
    "clean": true,
  },
  devServer: {
    contentBase: path.join(__dirname, "dist")
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/index.html"
  })],
  "module": {
    "rules": [{
      "test": /\.css$/,
      "use": ["style-loader",
        "css-loader"
      ]
    },]
  },
};