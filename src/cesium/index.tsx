import * as React from 'react';
import * as iCesium from 'icesium';

import { Input } from 'antd';
const { Search } = Input;

export class CesiumContainer extends React.Component {

  private iCesium?: iCesium.CesiumContainer;
  private _container?: HTMLDivElement | null;

  public componentDidMount() {
    this.iCesium = new iCesium.CesiumContainer({
      id: 'cesiumContainer',
    });
    console.log(this._container);
  }

  public render() {
    const style = { height: '100vh' };
    return (
      <div
        id='cesiumContainer'
        ref={(ref) => this._container = ref}
        style={style}
      >
        <div style={{ position: 'relative', top: 50, left: 150, zIndex: 1 }}>
          <Search
            placeholder='百度地图API搜索'
            onSearch={value => {
              // this._search(value);
              this.iCesium!.search(value);
            }}
            style={{ width: 512, position: 'absolute', top: 0, left: 0, zIndex: 1 }}
            enterButton
          />
        </div>

        {/* 浏览器不兼容! */}
        {/* <Link to='/Home' style={{ color: 'black' }}></Link> */}
        {/* <Link to='/detail' style={{ color: 'black' }}></Link> */}
        {/* <a href='#/Home'>回到home</a>
        <a href='#/detail'>回到detail</a> */}
      </div>
    );
  }

}