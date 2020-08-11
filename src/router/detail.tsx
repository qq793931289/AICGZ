import * as React from 'react';


export default class Home extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    // console.log(this.props.match.params);
    // console.log(this.props.history.location.state);
  }

  render() {
    return (
      <div>
        <a href='#/'>回到home</a>
      </div>
    )
  }
}