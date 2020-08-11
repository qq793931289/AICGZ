

import * as React from 'react';
import * as Cesium from 'cesium';
import * as THREE from 'three';


// @import url(./templates/bucket.css);
import 'cesium/Source/Widgets/widgets.css';
(Cesium as any).buildModuleUrl.setBaseUrl('https://cesium.com/downloads/cesiumjs/releases/1.70.1/Build/Cesium/Source');
// (window as any).CESIUM_BASE_URL = "https://cesium.com/downloads/cesiumjs/releases/1.71.0/Build/Cesium/Source";



Cesium.Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzODAwZjJkYS02MmMyLTRhYjctYjZlMy04N2JiNDY5Mjg0M2IiLCJpZCI6MjQ0M' +
  'TMsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODUxOTM5MDN9.ImztRbucAywyYtlbPc2pxo_H4dnMAlOn1SZv2z4bAlU';

export default class CesiumContainer extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log(Cesium, THREE);
    // console.log(this.props.match.params);
    // console.log(this.props.history.location.state);
    const viewer = new Cesium.Viewer("cesiumContainer", {
      imageryProvider: false as any,
      // animation: false,  //是否显示动画控件
      // baseLayerPicker: false, //是否显示图层选择控件
      // geocoder: true, //是否显示地名查找控件
      // timeline: false, //是否显示时间线控件
      // sceneModePicker: true, //是否显示投影方式控件
      // navigationHelpButton: false, //是否显示帮助信息控件
      // infoBox: true,  //是否显示点击要素之后显示的信息
      // imageryProvider : new Cesium.WebMapTileServiceImageryProvider({
      //     url: "http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles",
      //     layer: "tdtVecBasicLayer",
      //     style: "default",
      //     format: "image/jpeg",
      //     tileMatrixSetID: "GoogleMapsCompatible",
      //     show: false
      // })
    });
  }


  render() {
    return (
      <div id='cesiumContainer'>
        {/* 浏览器不兼容! */}
      </div>
    )
  }

}