// import React from 'react';

// import { Route, Switch } from 'react-router-dom';

// import Bundle from './Bundle';
// import Loading from '../components/Loading/Loading';

// import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
// import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
// import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
// import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';
// import NotFound from 'bundle-loader?lazy&name=notFound!pages/NotFound/NotFound';

// const createComponent = (component: React.Component) => (props) => (
//   <Bundle load={component}>
//     {
//       (Component) => Component ? <Component {...props} /> : <Loading />
//     }
//   </Bundle>
// );

// export default () => (
//   <div>
//     <Switch>
//       <Route exact path='/' component={createComponent(Home)} />
//       <Route path='/page1' component={createComponent(Page1)} />
//       <Route path='/counter' component={createComponent(Counter)} />
//       <Route path='/userinfo' component={createComponent(UserInfo)} />
//       <Route component={createComponent(NotFound)} />
//     </Switch>
//   </div>
// );

// import React from 'react';

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import Home from '../pages/Home/Home';
// import Page1 from '../pages/Page1/Page1';


// const getRouter = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to='/'>首页</Link></li>
//         <li><Link to='/page1'>Page1</Link></li>
//       </ul>
//       <Switch>
//         <Route exact path='/' component={Home} />
//         <Route path='/page1' component={Page1} />
//       </Switch>
//     </div>
//   </Router>
// );

// export default getRouter;


import React from 'react';

import {
  BrowserRouter as Router, Route, Switch,
  // Link
} from 'react-router-dom';

// import Bundle from './Bundle';

// import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
// import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
// import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
// import UserInfo from 'bundle-loader?lazy&name=userInfo!pages/UserInfo/UserInfo';

// import Home from '../pages/layout/main/home2020/ui.comp';
// import Page1 from '../pages/page1/page1';
// import Menu from '../pages/menu/navigation';

// const Loading = function () {
//   return <div>Loading...</div>
// };

// const createComponent = (component: any) => (props: any) => (
//   <Bundle load={component}>
//     {
//       (Component) => Component ? <Component {...props} /> : <Loading />
//     }
//   </Bundle>
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.scss';
import { Row, Col } from 'antd';
import BaseLayout from '../pages/layout';

// export class getRouter {

//   public render() {
//     return (
//       <Router>
//         <BaseLayout />
//       </Router>
//     )
//   }
// }


export const getRouter = () => (
  <Router>
    <BaseLayout />
    {/* <>
      <>
        <Row>
          <Col flex='256px'>
            <Menu />
          </Col>
          <Col flex='auto'>
            <Switch>

              <Route exact path='/' component={Home} />
              <Route path='/page1' component={Page1} />
              <Route path='/menu' component={Menu} />

            </Switch>
          </Col>
        </Row>
      </>
    </> */}
  </Router>
);

// export default getRouter;
{/* <Route exact path='/' component={createComponent(Home)} />
              <Route path='/page1' component={createComponent(Page1)} /> */}
{/* <Route path='/counter' component={createComponent(Counter)} />
              <Route path='/userinfo' component={createComponent(UserInfo)} /> */}