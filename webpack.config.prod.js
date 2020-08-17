const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const fs = require('fs');

// const lessToJs = require('less-vars-to-js');

// // 获取自己定义的要覆盖antd默认样式的文件
// const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/assets/style/themes.less'), 'utf8'));

module.exports = {
  devtool: 'inline-source-map',
  /*入口*/
  // entry: path.join(__dirname, 'src/index.tsx'),
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
    // path: path.join(__dirname, './dist'),
    // filename: 'bundle.js',
    chunkFilename: '[name].js',
    // chunkFilename: '[name].[chunkhash].js',
    // publicPath: 'home2020/',
  },
  css: {
    extract: false
  },
  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   use: [{
      //     loader: 'ts-loader'
      //   }],
      // },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'fast-css-loader', 'fast-sass-loader'],
      },
      // {
      //   test: /\.js$/,
      //   use: ['babel-loader?cacheDirectory=true'],
      //   include: path.join(__dirname, 'src')
      //   // include: path.join(__dirname, 'node_modules')
      // },
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   use: [{
      //     loader: 'url-loader',
      //     options: {
      //       limit: 8192
      //     }
      //   }]
      // },


      // All files with a '.ts' or '.tsx' extension will be handled by
      // 'awesome-typescript-loader'.
      {
        test: /\.(tsx|ts)?$/,
        use: [{
          loader: 'react-hot-loader/webpack'
        }, {
          loader: 'babel-loader'
        }, {
          loader: 'awesome-typescript-loader'
        }]
      },

      // All output '.js' files will have any sourcemaps re-processed by
      // 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      // {
      //   test: /\.less$/,
      //   use: [{
      //     loader: "style-loader"
      //   }, {
      //     loader: "css-loader"
      //   }, {
      //     loader: "less-loader",
      //     // options: {
      //     //   // modifyVars: themeVariables
      //     // }
      //   }]
      // },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: '/'
        })
      }, {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?limit=8192&name=[name].[ext]&publicPath='
      }

    ]
  },

  // devServer: {
  //   host: "0.0.0.0",
  //   port: "8888",
  //   contentBase: path.join(__dirname, "./dist"),
  //   hot: true,
  //   overlay: {
  //     errors: true
  //   },
  //   publicPath: "/public/",
  //   historyApiFallback: {
  //     index: "/public/index.html"
  //   }
  // },

  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.tsx',
    //   title: 'hello ts&react',
    //   inject: false,
    //   minify: {
    //     removeComments: true,
    //     collapseWhitespace: true
    //   },
    //   chunksSortMode: 'dependency'
    // }),
    new ExtractTextPlugin({
      filename: '[name].css',
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}