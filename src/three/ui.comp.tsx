

import * as React from 'react';
import * as THREE from 'three';
console.log(THREE);

export default class ThreeContainer extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // console.log(this.props.match.params);
    // console.log(this.props.history.location.state);
    console.log(THREE);

  }


  render() {
    return (
      <div id='threeContainer'>
        {/* 浏览器不兼容! */}
      </div>
    )
  }

}