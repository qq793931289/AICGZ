

import * as React from 'react';
import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import 'three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
// import { RoughnessMipmapper } from 'three/examples/jsm/utils/RoughnessMipmapper.js';
// console.log(THREE);



export default class ThreeContainer extends React.Component {

  public container: any;
  public controls: any;
  public camera: any;
  public scene: any;
  public renderer: any;
  public mesh: any;

  // constructor(props) {
  //   super(props);
  // }

  public componentDidMount() {
    // console.log(this.props.match.params);
    // console.log(this.props.history.location.state);
    // console.log(THREE);

    this.init();
    this.renderCanvas();
    this.onWindowResize();

  }

  public onWindowResize() {
    return;

    this.camera.aspect = window.innerWidth / window.innerHeight;

    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.renderCanvas();

  }

  //
  public animate = () => {

    window.requestAnimationFrame(this.animate);

    this.renderCanvas();

    this.mesh.rotateX(0.01).rotateY(0.01).rotateZ(-0.01);

  }

  public renderCanvas = () => {

    this.renderer.render(this.scene, this.camera);

  }

  public init() {

    // this.container = document.createElement('div');
    this.container = document.getElementById('threeContainer');
    // document.body.appendChild(this.container);

    // this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20);
    // this.camera.position.set(- 1.8, 0.6, 2.7);

    this.camera = new THREE.PerspectiveCamera(72, window.innerWidth / window.innerHeight, 1, 3500);
    this.camera.position.z = 2750;

    // console.log(this.container);
    // var SCREEN_WIDTH = this.container.style.width;
    // var SCREEN_HEIGHT = this.container.style.height;
    // var aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    // var frustumSize = 600;
    // this.camera = new THREE.OrthographicCamera(0.5 * frustumSize * aspect / - 2, 0.5 * frustumSize * aspect / 2, frustumSize / 2, frustumSize / - 2, 150, 1000);

    this.scene = new THREE.Scene();

    this.scene.add(new THREE.AmbientLight(0x444444));

    var light1 = new THREE.DirectionalLight(0xffffff, 0.5);
    light1.position.set(1, 1, 1);
    this.scene.add(light1);

    var light2 = new THREE.DirectionalLight(0xffffff, 1.5);
    light2.position.set(0, - 1, 0);
    this.scene.add(light2);

    const box = new THREE.BoxBufferGeometry(2, 2, 2, 2, 2, 2);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffff00,
      wireframe: true,
    });
    this.mesh = new THREE.Mesh(box, material);
    this.scene.add(this.mesh);



    // new RGBELoader()
    //   .setDataType(THREE.UnsignedByteType)
    //   .setPath('textures/equirectangular/')
    //   .load('royal_esplanade_1k.hdr', function (texture) {

    //     var envMap = pmremGenerator.fromEquirectangular(texture).texture;

    //     scene.background = envMap;
    //     scene.environment = envMap;

    //     texture.dispose();
    //     pmremGenerator.dispose();

    //     render();

    //     // model

    //     // use of RoughnessMipmapper is optional
    //     var roughnessMipmapper = new RoughnessMipmapper(renderer);

    //     var loader = new GLTFLoader().setPath('models/gltf/DamagedHelmet/glTF/');
    //     loader.load('DamagedHelmet.gltf', function (gltf) {

    //       gltf.scene.traverse(function (child) {

    //         if (child.isMesh) {

    //           // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
    //           // roughnessMipmapper.generateMipmaps( child.material );

    //         }

    //       });

    //       scene.add(gltf.scene);

    //       roughnessMipmapper.dispose();

    //       render();

    //     });

    //   });

    this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, stencil: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.container.appendChild(this.renderer.domElement);

    this.renderer.autoClearStencil = false;

    // var pmremGenerator = new THREE.PMREMGenerator(renderer);
    // pmremGenerator.compileEquirectangularShader();

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.addEventListener('change', this.renderCanvas); // use if there is no animation loop
    this.controls.minDistance = 2;
    this.controls.maxDistance = 10;
    this.controls.target.set(0, 0, - 0.2);
    this.controls.update();

    this.animate();

    window.addEventListener('resize', this.onWindowResize, false);

  }


  public render() {
    const style = { width: '100%', height: '100vh' }
    return (
      <div id='threeContainer' style={style}>
        {/* 浏览器不兼容! */}
      </div>
    )
  }

}