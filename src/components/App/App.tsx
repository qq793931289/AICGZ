import * as React from 'react';

import Nav from '../nav/nav';
// import getRouter from 'router/router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        {/* {getRouter()} */}
      </div>
    )
  }
}