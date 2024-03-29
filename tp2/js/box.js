'use strict';

class Box extends THREE.Object3D {

  constructor() {
    super();

    // box size
    var size = 28;
    var text = 'ALTERNATORS XPTO MY COMPANY INC';

    // box geometry
    var boxGeometry = new THREE.BoxGeometry(size, size, size);
    boxGeometry.translate(size/2, size/2, -size/2); // set anchor point of box
    // box material
    var boxSideTexture = new THREE.TextureLoader().load('../assets/textures/cardboard.png');
    var boxTopTexture = new THREE.TextureLoader().load('../assets/textures/alternator.png');
    boxTopTexture.wrapS = THREE.RepeatWrapping;
    boxTopTexture.wrapT = THREE.RepeatWrapping;
    boxTopTexture.repeat.set(4, 2);
    const boxMaterial = [
        new THREE.MeshBasicMaterial({ map: boxSideTexture }), //right side
        new THREE.MeshBasicMaterial({ map: boxSideTexture }), //left side
        new THREE.MeshBasicMaterial({ map: boxTopTexture }), //top side
        new THREE.MeshBasicMaterial({ map: boxSideTexture }), //bottom side
        new THREE.MeshBasicMaterial({ map: boxSideTexture }), //front side
        new THREE.MeshBasicMaterial({ map: boxSideTexture }), //back side
    ];
    // box mesh
    var cubeMesh = new THREE.Mesh(boxGeometry, boxMaterial);

    // box text
    new THREE.FontLoader().load('../assets/fonts/helvetiker_regular.typeface.json', 
      function (font) {
        var textGeometry = new THREE.TextGeometry(text, { font: font, size: 1, height: 0.1 });
        var textMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
        var textMesh = new THREE.Mesh(textGeometry, textMaterial)
        textMesh.translateY(size/2);
        cubeMesh.add(textMesh);
      }
    );

    this.add(cubeMesh);
  }

}