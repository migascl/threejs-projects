'use strict';

class Box extends THREE.Object3D {

  constructor(length, height, width, thickness, x, y, z) {
    super();
    
    // Base panel
    this.base = Box.createMesh(new THREE.CubeGeometry(length, 0.1, width));
    this.base.translateX(x);
    this.base.translateY(y);
    this.base.translateZ(z);
    // Left panel
    this.left = Box.createMesh(new THREE.CubeGeometry(thickness, height, width));
    this.left.translateX(length/2 - thickness/2 + x);
    this.left.translateY(height/2 + y);
    this.left.translateZ(z);
    // Right panel
    this.right = Box.createMesh(new THREE.CubeGeometry(thickness, height, width));
    this.right.translateX(-length/2 + thickness/2 + x);
    this.right.translateY(height/2 + y);
    this.right.translateZ(z);
    // Back panel
    this.up = Box.createMesh(new THREE.CubeGeometry(length, height, thickness));
    this.up.translateX(x);
    this.up.translateY(height/2 + y);
    this.up.translateZ(width/2 - thickness/2 + z);
    // Front panel
    this.down = Box.createMesh(new THREE.CubeGeometry(length, height, thickness));
    this.down.translateX(x);
    this.down.translateY(height/2 + y);
    this.down.translateZ(-width/2 + thickness/2 + z);

    this.add(this.base);
    this.add(this.left);
    this.add(this.right);
    this.add(this.up);
    this.add(this.down);
  }
  
  static createMesh(geom) {
    // Assign Material
    let wireFrameMat = new THREE.MeshLambertMaterial({color: 'blue'});
    wireFrameMat.wireframe = false;

    let mesh = new THREE.Mesh(geom, wireFrameMat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return mesh;
  }
  
}