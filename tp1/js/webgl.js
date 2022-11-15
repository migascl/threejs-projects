'use strict';

class Webgl {

  constructor() {
        
    this.clock = new THREE.Clock();

    // create a render and set the size
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xEEEEEE);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMapEnabled = true;

    // create scenes
    this.scene = new THREE.Scene();

    this.persCamera();
    this.renderGlobal();

    // Add the output of the renderer to the html element
    $("#WebGL-output").append(this.renderer.domElement);

    this.gui = new Gui(this);
  }

  // Camera types
  persCamera () {
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.x = 20;
    this.camera.position.y = 20;
    this.camera.position.z = 20;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.orbitControls();
  }
  orthoCamera () {
    this.camera = new THREE.OrthographicCamera(window.innerWidth / -16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / -16, -200, 500);
    this.camera.position.x = 20;
    this.camera.position.y = 20;
    this.camera.position.z = 20;
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.orbitControls();
  }

  // Control types
  trackballControls () {
    this.controls = new THREE.TrackballControls(this.camera);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.0;
    this.controls.panSpeed = 1.0;
    //this.controls.noZoom=false;
    //this.controls.noPan=false;
    this.controls.staticMoving = true;
    //this.controls.dynamicDampingFactor=0.3;
  }
  orbitControls () {
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = false;
  }
  firstpersonControls () {
    this.controls = new THREE.FirstPersonControls(this.camera);
    this.controls.lookSpeed = 0.4;
    this.controls.movementSpeed = 20;
    this.controls.noFly = true;
    this.controls.lookVertical = true;
    this.controls.constrainVertical = true;
    this.controls.verticalMin = 1.0;
    this.controls.verticalMax = 2.0;
    this.controls.lon = -150;
    this.controls.lat = 120;
  }
  flyControls () {
    this.controls = new THREE.FlyControls(this.camera);
    this.controls.movementSpeed = 25;
    this.controls.domElement = document.querySelector("#WebGL-output");
    this.controls.rollSpeed = Math.PI / 24;
    this.controls.autoForward = true;
    this.controls.dragToLook = false;
  }

  renderGlobal (){
    this.cleanCanvas();

    //this.scene.add(new THREE.AxisHelper(500));

    // add subtle ambient lighting
    this.ambientLight = new THREE.AmbientLight(0x878787);
    this.scene.add(this.ambientLight);

    var planeGeometry = new THREE.PlaneGeometry(150, 150, 1, 1);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
    this.plane = new THREE.Mesh(planeGeometry, planeMaterial);
    this.plane.receiveShadow = true;
    this.plane.rotation.x = -0.5 * Math.PI;
    this.plane.position.x = 0;
    this.plane.position.y = 0;
    this.plane.position.z = 0;
    this.scene.add(this.plane);
  }

  renderBox (boxL, boxH, boxW, boxT, boxX, boxY, boxZ) {
    this.renderGlobal();

    var box = new Box(boxL, boxH, boxW, boxT, boxX, boxY, boxZ);
    this.scene.add(box);

    this.spotLight = new THREE.SpotLight(0xffffff);
    this.spotLight.position.set(boxX + 50, boxY + 50, boxZ + 50);
    this.spotLight.castShadow = true;
    this.spotLight.target = box;
    this.scene.add(this.spotLight);
  }

  renderShelf (shelfL, shelfH, shelfW, boxL, boxH, boxW, boxT, shelfX, shelfY, shelfZ) {
    this.renderGlobal();

    this.shelf = new Shelf(shelfL, shelfH, shelfW, boxL, boxH, boxW, boxT, shelfX, shelfY, shelfZ);
    this.scene.add(this.shelf);

    this.spotLight = new THREE.SpotLight(0xffffff);
    this.spotLight.position.set(shelfX, shelfY + shelfH + 40, shelfZ);
    this.spotLight.castShadow = true;
    this.spotLight.target = this.shelf;
    this.scene.add(this.spotLight);
  }

  renderWarehouse (shelfL, shelfH, shelfW, boxL, boxH, boxW, boxT, shelfX, shelfY, shelfZ) {
    this.renderGlobal();

    this.shelf1 = new Shelf(shelfL, shelfH, shelfW, boxL, boxH, boxW, boxT, shelfX, shelfY, shelfZ);
    this.scene.add(this.shelf1);
    this.shelf2 = new Shelf(shelfL, shelfH, shelfW, boxL, boxH, boxW, boxT, shelfX - shelfW, shelfY, shelfZ);
    this.scene.add(this.shelf2);
    this.shelf3 = new Shelf(shelfL, shelfH, shelfW, boxL, boxH, boxW, boxT, shelfX + shelfW, shelfY, shelfZ);
    this.scene.add(this.shelf3);

    this.spotLight1 = new THREE.SpotLight(0xffffff);
    this.spotLight1.position.set(shelfX, shelfY + shelfH + 40, shelfZ);
    this.spotLight1.intensity = 0.5;
    this.spotLight1.castShadow = true;
    this.spotLight1.target = this.shelf1;
    this.scene.add(this.spotLight1);
    this.spotLight2 = new THREE.SpotLight(0xffffff);
    this.spotLight2.position.set(shelfX - shelfW / 2, shelfY + shelfH + 40, shelfZ);
    this.spotLight2.intensity = 0.5;
    this.spotLight2.castShadow = true;
    this.spotLight2.target = this.shelf2;
    this.scene.add(this.spotLight2);
    this.spotLight3 = new THREE.SpotLight(0xffffff);
    this.spotLight3.position.set(shelfX + shelfW / 2, shelfY + shelfH + 40, shelfZ);
    this.spotLight3.intensity = 0.5;
    this.spotLight3.castShadow = true;
    this.spotLight3.target = this.shelf3;
    this.scene.add(this.spotLight3);
  }

  renderRobot (shelfL, shelfH, shelfW, boxL, boxH, boxW, boxT, shelfX, shelfY, shelfZ) {
    this.renderGlobal();

    this.renderWarehouse(shelfL, shelfH, shelfW, boxL, boxH, boxW, boxT, shelfX, shelfY, shelfZ);
  
    this.robot = new Robot(shelfX, shelfY + 3, shelfZ + 30);
    this.scene.add(this.robot);
  }
  animateRobot (A, B){
    if(this.animationEnabled == false){
      this.animationEnabled = true;
    }else{
      this.animationEnabled = false;
    }
    this.pointA = A;
    this.pointB = B;
    this.scale = 0.5;
  }

  cleanCanvas () {
    for (var i = 0; i < this.scene.children.length; )
      this.scene.remove(this.scene.children[i]);  

      this.animationEnabled = false;
  }

  render () {
    let delta = this.clock.getDelta();

    this.controls.update(delta);

    
    if(this.animationEnabled == true){
      if(this.robot.position.x < this.pointA){
        this.scale = 0.5;
      }
      if(this.robot.position.x > this.pointB){
        this.scale = -0.5;
      }
      this.robot.position.x += this.scale;
    }

    //render the scene
    this.renderer.render(this.scene, this.camera);
  }

}
