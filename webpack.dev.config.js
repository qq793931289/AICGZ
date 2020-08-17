const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  devtool: 'inline-source-map',
  /*入口*/
  entry: path.join(__dirname, 'src/index.tsx'),
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.tsx')
  ],
  resolve: {
    extensions: ['.ts', '.js', '.jsx', '.tsx'],
    alias: {
      // pages: path.join(__dirname, 'src/pages'),
      // component: path.join(__dirname, 'src/component'),
      // router: path.join(__dirname, 'src/router'),
      'react-dom': '@hot-loader/react-dom',
    }
  },

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    // chunkFilename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    // publicPath: 'home2020/',
  },
  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader'
        }],
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'fast-css-loader', 'fast-sass-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
        // include: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },

  devServer: {
    hot: true,
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
    host: '0.0.0.0',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]

};