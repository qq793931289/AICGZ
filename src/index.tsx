// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
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


import React from 'react';
import ReactDom from 'react-dom';

import getRouter from './router/router';

ReactDom.render(
  getRouter(), document.getElementById('root'));