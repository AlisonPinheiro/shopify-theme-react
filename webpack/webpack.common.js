const path = require("path")
const pjson = require('../package.json');

module.exports = {

  entry: {
    'index' : "./scripts/index.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
          use: [{
            loader: "style-loader"
          }, {
            loader: "css-loader" 
          }, {
            loader: "sass-loader"
          }]
    }
    ]
  },
  output: {
    filename: `index.bundle.js`,
    path: path.resolve('./', "assets")
  }
}
