import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { HashRouter, Route, Switch, hashHistory } from 'react-router-dom';
import Home from './home';
import Detail from './detail';
import CesiumContainer from '../cesium/ui.comp';


const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={CesiumContainer} />
      <Route exact path="/Home" component={Home} />
      {/* <Route exact path="/detail" component={Detail} /> */}
      <Route exact path="/detail" component={Detail} />
      {/* <HashRouter history={hashHistory} /> */}
    </Switch>

  </HashRouter>
);


export default BasicRoute;