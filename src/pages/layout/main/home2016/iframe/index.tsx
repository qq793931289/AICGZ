import * as React from 'react';

export interface IframeProps {
  url: string;
}

export class IframeHome2016 extends React.Component<IframeProps> {

  private _url: string = 'http://www.aicgz.com/home2015';

  constructor(props: IframeProps) {
    super(props);
    this._url = props.url;
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100vh', overflow: 'visible' }}>
        <iframe
          style={{ width: '100%', height: '100vh', overflow: 'visible' }}
          onLoad={() => {
            // console.log('iframe load end')
          }}
          ref="iframe"
          src={this._url}
          width="100%"
          height='100vh'
          scrolling="no"
          frameBorder="0"
          title='aicgz.com'
        />
      </div>
    );
  }
}

const baseUrl = 'http://www.aicgz.com/home2015';
export class IframeHome2016VR extends React.Component {
  render() {
    return (
      <IframeHome2016 url={baseUrl + '/vr/index.html'} />
    );
  }
}

// export class IframeHome2016Air extends React.Component {
//   render() {
//     return (
//       <IframeHome2016 url={'http://www.aicgz.com/home2015/air'} />
//     );
//   }
// }

export class IframeHome2016Tiyanqu extends React.Component {
  render() {
    return (
      <IframeHome2016 url={baseUrl + '/tiyanqu/chapter-09/tiyanqu.html'} />
    );
  }
}

export class IframeHome2016Zhanshiqu extends React.Component {
  render() {
    return (
      <IframeHome2016 url={baseUrl + '/tiyanqu/chapter-09/zhanshiqu.html'} />
    );
  }
}