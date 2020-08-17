import React, { Component } from 'react';

// import './page1.scss';

import image from './images/www.aicgz.com.jpg';
import WeChat from './images/wechat.jpg';
// const url = './images/brickpsert.jpg';

export class IContact extends Component {

  // constructor() {

  // }

  render() {
    return (
      <div>
        this is Page1~
        <br />
        <img src={image} alt='' style={{ width: '256px', height: '256px', margin: '100px' }} />
        {/* <br /> */}
        <img src={WeChat} alt='' style={{ width: '256px', height: '256px' }} />

        {/* <img src='https://www.v-edu.net.cn/static/background.819f332c.jpg' alt='' style={{ width: '256px', height: '1024px' }} /> */}
        {/* <img src={url} /> */}
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tell：13725353558
        </p>
        <p>
          E-mail：qq793931289@qq.com
        </p>
      </div>
    )
  }
}