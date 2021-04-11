import * as React from 'react';
import * as iCesium from 'icesium';

import { Input } from 'antd';
import { cesConfig } from './config';
const { Search } = Input;

export interface CesiumContainerProps {
  ref: any;
}

export class CesiumContainer extends React.Component {

  private iCesium?:  iCesium.AddressLocationComponent;
  private _container?: HTMLDivElement | null;
  public myInput = React.createRef();
  public ref: any;

  // constructor(props: CesiumContainerProps) {
  //   super(props);
  //   this.ref = props.ref;

  // }


  public getContainer() {
    return this.myInput;
  }

  public componentDidMount() {

    console.log('load  cesium dev ');
     
    this.iCesium = new iCesium.AddressLocationComponent({
      // id: 'cesiumContainer',
    }) ;
    // this.myInput = React.createRef();

    console.log('load  cesium dev end ');
  }

  private _search(input: string) {
    // this.iCesium?.search(input);
  }

  public handleClick() {
    // 使用原生的 DOM API 获取焦点
    // this.refs.myInput.focus();
    // console.log(this.refs, this.refs.myInput, ' // 使用原生的 DOM API 获取焦点');
  }

  public render() {
    const style = { height: '100vh' };
    const style2: React.CSSProperties = { position: 'relative', top: 0, left: 0, zIndex: 1 };
    return (
      <div
        id='cesiumContainer'
        // ref={(ref) => CesiumContainer._container = ref}
        ref='myInput'
        style={style}
        onClick={this.handleClick.bind(this)}
      >
        {/* <Search
          placeholder='百度地图API搜索'
          onSearch={value => {
            // this._search(value);
            this.iCesium!.search(value);
          }}
          style={{ width: 512, position: 'absolute', top: 50, left: 300, zIndex: 1 }}
          enterButton
        /> */}
        {/* {this.ref} */}
        <div style={style2}>
          <Search
            placeholder='百度地图API搜索地理位置'
            // ref='search'
            onSearch={value => {
              // this._search(value);
              this.iCesium!.search(value);
            }}
            style={{ width: 512, position: 'fixed', top: 50, left: 300, zIndex: 1 }}
            enterButton
          />
        </div>
        {  console.log('load div end')  }
      </div>
    );
  }

}