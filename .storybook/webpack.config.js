const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!",
          "sass-loader"
        ],
        include: path.resolve(__dirname, '../src')
      }
    ]
  }
}
