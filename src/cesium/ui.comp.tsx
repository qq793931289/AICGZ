

import * as React from 'react';
import * as Cesium from 'cesium';
import * as THREE from 'three';


// @import url(./templates/bucket.css);
import 'cesium/Source/Widgets/widgets.css';
// import { Link } from 'react-router-dom';
(Cesium as any).buildModuleUrl.setBaseUrl('https://cesium.com/downloads/cesiumjs/releases/1.72/Build/Cesium/Source');
(window as any).CESIUM_BASE_URL = 'https://cesium.com/downloads/cesiumjs/releases/1.72/Build/Cesium/Source';



Cesium.Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzODAwZjJkYS02MmMyLTRhYjctYjZlMy04N2JiNDY5Mjg0M2IiLCJpZCI6MjQ0M' +
  'TMsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODUxOTM5MDN9.ImztRbucAywyYtlbPc2pxo_H4dnMAlOn1SZv2z4bAlU';

export class CesiumContainer extends React.Component {

  public viewer?: Cesium.Viewer;
  public googleMap?: Cesium.UrlTemplateImageryProvider;
  public mapboxMap?: Cesium.MapboxStyleImageryProvider;


  // constructor(props) {
  //   super(props);
  // }

  public componentDidMount() {
    // console.log(Cesium, THREE);
    // console.log(this.props.match.params);
    // console.log(this.props.history.location.state);
    this.viewer = new Cesium.Viewer('cesiumContainer', {
      imageryProvider: false as any,
      selectionIndicator: false,
      animation: false,
      timeline: false,
      fullscreenButton: false,
      infoBox: false,
      homeButton: false,
      baseLayerPicker: false,
      navigationHelpButton: false,
      geocoder: false,
      sceneModePicker: false,
      scene3DOnly: true,
      requestRenderMode: true,
      maximumRenderTimeChange: Infinity,

      // imageryProvider : new Cesium.WebMapTileServiceImageryProvider({
      //     url: 'http://t0.tianditu.com/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles',
      //     layer: 'tdtVecBasicLayer',
      //     style: 'default',
      //     format: 'image/jpeg',
      //     tileMatrixSetID: 'GoogleMapsCompatible',
      //     show: false
      // })
    });

    (this.viewer.cesiumWidget.creditContainer as HTMLElement).style.display = "none";
    this.viewer.scene.debugShowFramesPerSecond = true;

    this.viewer.scene.skyBox && (this.viewer.scene.skyBox.show = false);
    this.viewer.scene.sun = new Cesium.Sun();
    this.viewer.scene.sun.show = false;

    this.viewer.scene.moon = new Cesium.Moon({
      show: false,
    });

    // this.viewer.scene.screenSpaceCameraController.enableTilt = false;
    // this.viewer.scene.screenSpaceCameraController.enableLook = true;

    // this.viewer.scene.screenSpaceCameraController.enableRotate = true;
    // this.viewer.scene.screenSpaceCameraController.enableTranslate = true;
    // this.viewer.scene.screenSpaceCameraController.enableZoom = true;

    this._googleMap();

    Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(113.2759952545166, 23.117055306224895, 114.0, 24.0);

    this.viewer.camera.setView({
      // Cesium的坐标是以地心为原点，一向指向南美洲，一向指向亚洲，一向指向北极州
      // fromDegrees()方法，将经纬度和高程转换为世界坐标
      destination: Cesium.Cartesian3.fromDegrees(113.48, 23.00, 150000.0),
      orientation: {
        // 指向
        // heading: Cesium.Math.toRadians(90),
        // 视角
        // pitch: Cesium.Math.toRadians(-90),
        // roll: 0.0
      }
    });

  }

  // public mapboxMapStatus(status: boolean = true) {
  //   this.mapboxMap.show = status;
  // }

  private _googleMap = () => {
    var esriImageryProvider = new Cesium.ArcGisMapServerImageryProvider({
      url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
    });
    this.viewer!.imageryLayers.addImageryProvider(esriImageryProvider);

  };


  private _mapboxMap = () => {
    const imageryProvider = new Cesium.MapboxStyleImageryProvider({
      url: 'https://api.mapbox.com/styles/v1',
      username: 'qq793931289',
      styleId: 'ckatbx8pa43341insqhces8m3',
      accessToken:
        'pk.eyJ1IjoicXE3OTM5MzEyODkiLCJhIjoiY2s5M3oxbmFzMDdrczNlbXpibDI0bTQxYiJ9.GuZhkGBTu6vkisVE7CKGeA',
      scaleFactor: true,
      // hasAlphaChannel: false,
      // tileHeight: 256,
      // tileWidth: 256,
      // tilesize: 256,
      // fileExtension: 'jpeg',
      // format: 'jpg',
    });
    this.mapboxMap = this!.viewer!.imageryLayers.addImageryProvider(
      imageryProvider,
    ) as any;
    // this.mapboxMapStatus(false);
  };


  public render() {
    const style = { height: '100vh' };
    return (
      <div
        id='cesiumContainer'
        style={style}
      >
        {/* 浏览器不兼容! */}
        {/* <Link to='/Home' style={{ color: 'black' }}></Link> */}
        {/* <Link to='/detail' style={{ color: 'black' }}></Link> */}
        {/* <a href='#/Home'>回到home</a>
        <a href='#/detail'>回到detail</a> */}
      </div>
    );
  }

}