'use strict';

class MyTable extends THREE.Object3D {

  
  constructor(largura, altura, profundidade, espessura ){
    super();
    var inclinacao= 90*Math.PI/180;

    var ladog1 = MyTable.createMesh(new THREE.CubeGeometry(largura, altura, profundidade)); 
    
    this.largura = largura;
    this.altura = altura;
    this.profundidade = profundidade;
    this.espessura = espessura;
    
    

    var ladobase = MyTable.createMesh(new THREE.CubeGeometry(largura,  profundidade , espessura));
    ladobase.position.x+= ladog1.position.x;
    ladobase.position.y -= altura/2 - profundidade/2 ;
    ladobase.position.z+=espessura/2 + profundidade/2 ;
    
    
    
    
    
    

    var ladog2 = MyTable.createMesh(new THREE.CubeGeometry(largura, altura, profundidade)); 
    ladog2.position.y= ladog1.position.y;
    ladog2.position.x= ladog1.position.x;
    ladog2.position.z= profundidade + espessura;

    var ladp1= MyTable.createMesh(new THREE.CubeGeometry(espessura, altura-profundidade, profundidade)); 
    ladp1.rotation.y += inclinacao  ;
    ladp1.position.y += profundidade/2;
    ladp1.position.z+= espessura/2 + profundidade/2  ;
    ladp1.position.x+= largura/2 - profundidade/2;

    var ladp2= MyTable.createMesh(new THREE.CubeGeometry(espessura , altura-profundidade, profundidade)); 
    ladp2.rotation.y += inclinacao  ;
    ladp2.position.y += profundidade/2;
    ladp2.position.z+= espessura/2 + profundidade/2;
    ladp2.position.x-= largura/2 - profundidade/2;

    
    

    this.add(ladog1);
    this.add(ladog2);
    this.add(ladobase);
    this.add(ladp1);
    this.add(ladp2);
    
    
  }
  
  
  static createMesh(geom) {
    // assign two materials
    let meshMaterial = new THREE.MeshNormalMaterial();
    meshMaterial.side = THREE.DoubleSide;
    let wireFrameMat = new THREE.MeshBasicMaterial();
    wireFrameMat.wireframe = true;

    // create a multimaterial
    let mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

    return mesh;
  }

}