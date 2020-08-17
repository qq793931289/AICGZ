import * as React from 'react';

export interface IframeProps {
  url: string;
}

export class Iframe extends React.Component<IframeProps> {

  private _url: string;

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
            console.log('iframe load end')
          }}
          ref="iframe"
          src="http://www.aicgz.com/home2015"
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