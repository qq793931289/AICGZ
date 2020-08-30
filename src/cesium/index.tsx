import * as React from 'react';
import * as iCesium from 'icesium';

import { Input } from 'antd';
import { CesiumContainer } from './ui.comp';
const { Search } = Input;

export class CesiumComponent extends React.Component {

  private iCesium?: iCesium.CesiumContainer;
  public _container?: HTMLDivElement | null;

  public componentDidMount() {
    // this.search = React.createRef();

  }

  public render() {
    const style: React.CSSProperties = { position: 'relative', top: 0, left: 0, zIndex: 1 };
    return (
      <div style={style}>
        <CesiumContainer />

        {/* <div style={style}>
          <Search
            placeholder='百度地图API搜索'
            // ref='search'
            onSearch={value => {
              // this._search(value);
              // this.iCesium!.search(value);
            }}
            style={{ width: 512, position: 'fixed', top: 50, left: 300, zIndex: 1 }}
            enterButton
          />
        </div> */}
      </div>

    );
  }

}