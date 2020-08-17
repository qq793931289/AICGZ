const CracoVtkPlugin = require("craco-vtk");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const webpack = require('webpack')


const REACT_APP_PROXY_URL = process.env.REACT_APP_PROXY_URL;
let APIUrl = '';

if (REACT_APP_PROXY_URL == "pro") {//生产环境
  APIUrl = "生产环境的请求地址";
} else if (REACT_APP_PROXY_URL == "dev") {//测试环境
  APIUrl = "测试环境";
} else {//本地跑的服务
  APIUrl = "本地或者默认请求地址";
}

console.log(REACT_APP_PROXY_URL, APIUrl, process.env.REACT_APP_PROXY_URL);

console.log(process.env.REACT_APP_PROXY_URL)
console.log(process.env.REACT_APP_ENV)
console.log(process.env.REACT_APP_API_URL) // http://localhost:5555

console.log('http://localhost:5555');

module.exports = {
  webpack: {
    plugins: [
      // new BundleAnalyzerPlugin(),
      // 打压缩包
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          ['js', 'css'].join('|') +
          ')$'
        ),
        threshold: 1024,
        minRatio: 0.8
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),


    ],
    //抽离公用模块
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            chunks: 'initial',
            minChunks: 2, maxInitialRequests: 5,
            minSize: 0
          },
          vendor: {
            test: /node_modules/,
            chunks: 'initial',
            name: 'vendor',
            priority: 10,
            enforce: true

          }
        }
      },
      UglifyJsPlugin: {
        // 删除注释
        output: {
          comments: true
        },
        // 删除console debugger 删除警告
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true,//不打印log
        },
      }
    }
  },
  babel: {
    plugins: [
      ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
      ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
  },
  plugins: [
    {
      plugin: CracoVtkPlugin()
    }
  ]
};