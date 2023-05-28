'use strict';

class Estante extends THREE.Object3D {

 
  constructor(largura, altura, profundidade){
    super();
    var inclinacao= 90*Math.PI/180;

    this.largura = largura;
    this.altura = altura;
    this.profundidade = profundidade;

    var base1 = Estante.createMesh(new THREE.CubeGeometry(largura, altura , profundidade)); 
    
    

    
    

    this.add(base1);
    
    
    
  }
  
  static createMesh(geom) {
    // assign two materials
    let meshMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Set color to black
    meshMaterial.side = THREE.DoubleSide;
  
    let wireFrameMat = new THREE.MeshBasicMaterial();
    wireFrameMat.wireframe = true;
  
    // create a multimaterial
    let mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);
  
    return mesh;
  }

}