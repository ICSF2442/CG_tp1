'use strict';

class Estante extends THREE.Object3D {


  constructor(largura, altura, profundidade, vidro, armazem){
    super();
    var inclinacao= 90*Math.PI/180;

    this.largura = largura;
    this.altura = altura;
    this.profundidade = profundidade;

    var base1 = Estante.createMesh(new THREE.CubeGeometry(largura, altura , profundidade), armazem);
    this.add(base1);

    if(vidro == true){
         var glassMaterial = new THREE.MeshPhongMaterial({
                 color: 0x000000, // Set the color to black
                 specular: 0xffffff, // Set the specular color to white for glass-like reflections
                 shininess: 100000, // Adjust the shininess value to control the intensity of reflections
                 transparent: true, // Make the material transparent
                 opacity: 0.5 // Set the opacity value to control the transparency of the glass
               });
               base1.children[0].material = glassMaterial;
    }


  }

  static createMesh(geom,armazem) {
  if(armazem==true){
    let meshMaterial = new THREE.MeshLambertMaterial({ color: 0x808080 }); // Set color to black
        meshMaterial.side = THREE.DoubleSide;

        let wireFrameMat = new THREE.MeshBasicMaterial();
        wireFrameMat.wireframe = true;

        // create a multimaterial
        let mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

        return mesh;
  }else{
    // assign two materials
    let meshMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF});
    meshMaterial.side = THREE.DoubleSide;

    let wireFrameMat = new THREE.MeshBasicMaterial();
    wireFrameMat.wireframe = true;

    // create a multimaterial
    let mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

    return mesh;
  }
}
}