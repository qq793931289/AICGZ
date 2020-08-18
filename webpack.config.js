const path = require('path');

const REACT_APP_PROXY_URL = process.env.REACT_APP_PROXY_URL;
let APIUrl = '';

if (REACT_APP_PROXY_URL == "pro") {//生产环境
  APIUrl = "生产环境的请求地址";
  console.log(APIUrl);
} else if (REACT_APP_PROXY_URL == "dev") {//测试环境
  APIUrl = "测试环境";
  console.log(APIUrl);
} else {//本地跑的服务
  APIUrl = "本地或者默认请求地址";
  console.log(APIUrl);
}

console.log(REACT_APP_PROXY_URL, APIUrl, process.env.REACT_APP_PROXY_URL);

console.log(process.env.REACT_APP_PROXY_URL)
console.log(process.env.REACT_APP_ENV)
console.log(process.env.REACT_APP_API_URL) // http://localhost:5555

console.log('http://localhost:5555');

module.exports = {

  /*入口*/
  entry: path.join(__dirname, 'src/index.tsx'),

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(__dirname, './dist1'),
    filename: 'bundle.js'
  },
  resolve: {
    // extensions: ['.ts', '.js', '.jsx', '.tsx'],
    alias: {
      // pages: path.join(__dirname, 'src/pages'),
      // component: path.join(__dirname, 'src/component'),
      // router: path.join(__dirname, 'src/router'),
      // 'react-dom': '@hot-loader/react-dom',
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader'
        }],
      },
    ]
  }
};