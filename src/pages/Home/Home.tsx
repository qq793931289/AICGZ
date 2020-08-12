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


import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        this is home~
      </div>
    )
  }
}