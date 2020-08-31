
import * as iThree from 'ithree';

import React from 'react';

export default class ThreeContainer extends React.Component {

  // constructor() {
  //   super();
  // }

  public componentDidMount() {
    new iThree.ThreeRun();
  }

  public render() {
    const style = { width: '100%', height: '100vh' };
    return (
      <div id='threeContainer' style={style} >
        {/* 浏览器不兼容! */}
      </div>
    );
  }

}