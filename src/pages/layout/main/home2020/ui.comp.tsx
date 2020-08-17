// import React, { Component } from 'react';
// import { hot } from 'react-hot-loader';

// class Home extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     count: 0
//   //   }
//   // }

//   // _handleClick() {
//   //   this.setState({
//   //     count: ++this.state.count
//   //   });
//   // }

//   render() {
//     return (
//       <div>
//         this is home~ <br />
//         {/* 当前计数：{ this.state.count} <br />
//         < button onClick={() => this._handleClick()
//         }> 自增 < /button> */}
//       </div>
//     )
//   }
// }

// export default hot(module)(Home);


import React from 'react';
import { Divider } from 'antd';
import { ListStack } from './list/ui.comp';


export default class Home extends React.Component {

  public state = {
    count: 0
  }

  constructor(props: any) {
    super(props);
    console.log(this.state);

  }

  private _handleClick() {
    console.log(this.state.count);
    let num = this.state.count;
    this.setState({
      count: ++num,
    }, () => {
      console.log(this.state.count)
    });

  }

  render() {
    return (

      <div>
        HOME<br />
        <div>本网站构建相关信息：</div>
        <Divider orientation="left">技术栈</Divider>
        <ListStack />


        {/* 当前计数：{ this.state.count}<br /> */}
        {/* <button onClick={() => this._handleClick()}>点击</button> */}
      </div>
    )
  }
}