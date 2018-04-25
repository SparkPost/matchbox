const path = require('path');
const autoprefixer = require('autoprefixer');

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
            loader: require.resolve('postcss-loader'),
            options: {
              plugins: () => [
                autoprefixer()
              ]
            }
          },
          {
            loader: require.resolve('sass-loader')
          }
        ],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              fix: true
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: path.resolve(__dirname, '../src')
      },
    ]
  }
}
