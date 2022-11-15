'use strict';

class Webgl {

  constructor() {
    
    // create counter
    this.clock = new THREE.Clock();

    // create a render and set the size
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xEEEEEE);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMapEnabled = true;

    // create scene
    this.scene = new THREE.Scene();

    // create camera
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);
    this.camera.position.x = 1000;
    this.camera.position.y = 1000;
    this.camera.position.z = 1000;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // create camera controller
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = false;

    // create ambient lighting
    this.ambientLight = new THREE.AmbientLight(0x878787);
    this.scene.add(this.ambientLight); 

    // create map
    this.map = new Map();
    this.map.rotation.x = -1.5708;
    this.scene.add(this.map);

    // create box
    this.box = [
      createBox(350, 0, -545),
      createBox(490, 0, -450)
    ]
    for (let i = 0; i < this.box.length; i++) {
      this.box[i].rotation.y = -0.5678;
      this.scene.add(this.box[i]);
    }

    // add the output of the renderer to the html element
    $("#WebGL-output").append(this.renderer.domElement);

    // function to create box into specific coordinates
    function createBox(x, y, z){
      var box = new Box();

      box.translateX(x);
      box.translateY(y);
      box.translateZ(z);

      return box;
    }

  }

  render () {
    // controls update
    let delta = this.clock.getDelta();
    this.controls.update(delta);

    // render the scene
    this.renderer.render(this.scene, this.camera);
  }

}
