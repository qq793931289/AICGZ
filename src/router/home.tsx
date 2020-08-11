import * as React from 'react';

export default class Home extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <a href='#/detail'>去detail</a>
        {/* <button onClick={() => this.props.history.push('detail')}>通过函数跳转</button> */}
      </div>
    )
  }

}


// import React from 'react';


// export default class Home extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     // }


//     render() {
//         return (
//             <div>
//                 <a href='#/detail/3'>去detail</a>
//                     <button onClick={() => this.props.history.push({
//                         pathname: '/detail',
//                         state: {
//                             id: 3
//                         }
//                 })}>通过函数跳转</button>
//             </div>
//         )
//     }
// }