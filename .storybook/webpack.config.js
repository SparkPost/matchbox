const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              importLoaders: 2,
              sourceMap: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            },
          },
          {
            loader: require.resolve('sass-loader')
          }
        ],
        include: path.resolve(__dirname, '../src')
      }
    ]
  }
}
