import React, { Component } from 'react';

// import './page1.scss';

import image from './images/brickpsert.jpg';
// const url = './images/brickpsert.jpg';

export default class Page1 extends Component {

  // constructor() {

  // }

  render() {
    return (
      <div>
        this is Page1~
        <img src={image} alt='' />
        {/* <img src='https://www.v-edu.net.cn/static/background.819f332c.jpg' alt='' /> */}
        {/* <img src={url} /> */}
      </div>
    )
  }
}