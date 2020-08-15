import * as React from 'react';
export default class Home2016 extends React.Component {

  render() {
    return (
      <iframe
        style={{ width: '100%', height: '100%', overflow: 'visible' }}
        onLoad={() => {
          console.log('iframe load end')
        }}
        ref="iframe"
        src="http://www.aicgz.com"
        width="100%"
        height='100%'
        scrolling="no"
        frameBorder="0"
        title='aicgz.com'
      />
    );
  }
}