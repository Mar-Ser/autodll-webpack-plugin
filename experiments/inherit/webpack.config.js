const path = require('path');
const AutoDllPlugin = require('../../lib');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: {
    main: './src/index.js',
  },
  target: 'web',

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
      '.png',
      '.jpg',
      '.jpeg',
      '.svg',
      '.ttf',
      '.eot',
      '.woff',
      '.woff2',
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
    new AutoDllPlugin({
      debug: true,
      inject: true,
      filename: '[name].[hash].js',
      entry: {
        vendor: [/*'./src/awesome-module.js',*/ 'react', 'react-dom' /*, 'font-awesome'*/],
        other: ['react'],
      },

      path: './dll',
      inherit: {
        devtool: 'source-map',
      },
      config: {
        output: {},
        plugins: [
          // new UglifyJsPlugin()
        ],
      },
    }),
  ],
};
