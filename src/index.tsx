// import {
//   Router as HashRouter, // 或者是HashRouter、MemoryRouter
//   Route,   // 这是基本的路由块
//   Link,    // 这是a标签
//   Switch,  // 这是监听空路由的
//   Redirect, // 这是重定向
//   Prompt   // 防止转换
// } from 'react-router-dom';
// import { Router } from 'react-router-dom';

// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';
import { message } from 'antd';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// import React from 'react';
// import ReactDOM from 'react-dom';
// // import Router from './router/router';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './components/App/App';

// renderWithHotReload(App);

// if ((module as any).hot) {
//   (module as any).hot.accept('components/App/App', () => {
//     const NextApp = require('components/App/App').default;
//     renderWithHotReload(NextApp);
//   });
// }

// function renderWithHotReload(RootElement: React.Component | any) {
//   ReactDOM.render(
//     <Router>
//       <RootElement />
//     </Router >,
//     document.getElementById('root')
//   );
// }


// import React from 'react';
// import ReactDom from 'react-dom';

// import getRouter from './router/router';

// if ((module as any).hot) {
//   (module as any).hot.accept();
// }

// ReactDom.render(
//   getRouter(), document.getElementById('root'));


import React from 'react';
import ReactDom from 'react-dom';
// import React from 'react';
// import ReactDom from 'react-dom';
// import { AppContainer, setConfig } from 'react-hot-loader';

import { getRouter } from './router/router';
import { BrowserUtil } from './utils/browserutil';
import { HrefUtil } from './utils/debug';
import { WEBGLUtil } from './utils/webgl';
import { Statement } from './utils/const';

// setConfig({
//   showReactDomPatchNotification: false,
// });

/*初始化*/
// renderWithHotReload(getRouter());

/*热更新*/
// if ((module as any).hot) {
//   (module as any).hot.accept('./router/router', () => {
//     // const getRouter = require('./router/router').default;
//     // renderWithHotReload(getRouter());
//   });
// }

// function renderWithHotReload(RootElement: any) {
//   ReactDom.render(
//     <AppContainer>
//       {RootElement}
//     </AppContainer>,
//     document.getElementById('root'));
// }


// import createHistory from 'history/createHashHistory';
// const history = createHistory();

ReactDom.render(
  // <HashRouter history={history}>
  //   {getRouter()}
  // </HashRouter >
  <div style={{ height: '100vh' }}>
    {/* {<getRouter />} */}
    {getRouter()}
    {
      message.success('近期已更新：iCesium ')
    }

  </div >
  , document.getElementById('root'));

document.oncontextmenu = function () { return false; };
document.onselectstart = function () { return false; };

new BrowserUtil();
new HrefUtil();
new WEBGLUtil();
new Statement();


// export default renderWithHotReload;