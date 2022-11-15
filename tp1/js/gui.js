  'use strict';

class Gui {

  constructor(webgl) {
	  this.webgl = webgl;

    var guiControls = {

      "boxX" : 0,
      "boxY" : 0,
      "boxZ" : 0,
      "boxL" : 7,
      "boxH" : 5,
      "boxW" : 8,
      "boxT" : 1,
      "shelfX" : 0,
      "shelfY" : 0,
      "shelfZ" : 0,
      "shelfL" : 10,
      "shelfH" : 20,
      "shelfW" : 20,

      "showBox" : () => {  
        this.webgl.renderBox(guiControls.boxL, guiControls.boxH, guiControls.boxW, guiControls.boxT, guiControls.boxX, guiControls.boxY, guiControls.boxZ);
      },
      "showShelf" : () => {
        this.webgl.renderShelf(guiControls.shelfL, guiControls.shelfH, guiControls.shelfW, guiControls.boxL, guiControls.boxH, guiControls.boxW, guiControls.boxT, guiControls.shelfX, guiControls.shelfY, guiControls.shelfZ);
      },
      "showWarehouse" : () => {
        this.webgl.renderWarehouse(guiControls.shelfL, guiControls.shelfH, guiControls.shelfW, guiControls.boxL, guiControls.boxH, guiControls.boxW, guiControls.boxT, guiControls.shelfX, guiControls.shelfY, guiControls.shelfZ);
      },
      "showRobot" : () => {
        this.webgl.renderRobot(guiControls.shelfL, guiControls.shelfH, guiControls.shelfW, guiControls.boxL, guiControls.boxH, guiControls.boxW, guiControls.boxT, guiControls.shelfX, guiControls.shelfY, guiControls.shelfZ);
      },
      "activateRobot" : () => {
        this.webgl.animateRobot(guiControls.shelfX - guiControls.shelfW, guiControls.shelfX + guiControls.shelfW);
      },

      // Switch between Perspective and Orthographic camera
      "activeCamera" : "Perspective",
      "switchCamera" : () => {
        if (this.webgl.camera instanceof THREE.PerspectiveCamera) {
          this.webgl.orthoCamera();
          guiControls.activeCamera = "Orthographic";
        } else {
          this.webgl.persCamera();
          guiControls.activeCamera = "Perspective";
        }
      },

      "trackball" : () => { 
        this.webgl.trackballControls();
      },
      "orbit" : () => { 
        this.webgl.orbitControls();
      },
      "firstperson" : () => { 
        this.webgl.firstpersonControls();
      },
      "fly" : () => { 
        this.webgl.flyControls();
      }
        
    };
    
    var gui = new dat.GUI({ autoPlace: false });

    gui.add(guiControls, 'showBox');
    gui.add(guiControls, 'showShelf');
    gui.add(guiControls, 'showWarehouse');
    var robot = gui.addFolder('robot');
    robot.add(guiControls, 'showRobot');
    robot.add(guiControls, 'activateRobot');

    var camera = gui.addFolder('camera');
    camera.add(guiControls, 'activeCamera').listen();
    camera.add(guiControls, 'switchCamera');

    var controls = gui.addFolder('controls');
    controls.add(guiControls, 'trackball');
    controls.add(guiControls, 'orbit');
    controls.add(guiControls, 'firstperson');
    controls.add(guiControls, 'fly');

    var customContainer = document.getElementById('Gui-output');
    customContainer.appendChild(gui.domElement);
  }

}
