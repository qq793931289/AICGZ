import React, { Component } from 'react'

// export default class Bundle extends Component {
//   state = {
//     // short for "module" but that's a keyword in js, so "mod"
//     mod: null
//   };

//   componentWillMount() {
//     this.load(this.props)
//   }

//   componentWillReceiveProps(nextProps: any) {
//     // if (nextProps.load !== this.props.load) {
//     this.load(nextProps)
//     // }
//   }

//   load(props: any) {

//     this.setState({
//       mod: null
//     });

//     props.load((mod: any) => {
//       this.setState({
//         // handle both es imports and cjs
//         mod: mod.default ? mod.default : mod
//       })
//     })
//   }

//   render() {
//     return this.props.children(this.state.mod)
//     // return <div></div>
//   }
// }
