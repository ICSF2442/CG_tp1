'use strict';

class MyRobot extends THREE.Object3D {
  constructor(largura, altura, raio, tubo) {
    super();

    this.largura= largura;
    this.altura = altura;
    this.raio = raio;

    // Create the robot's body as a box
    const bodyGeometry = new THREE.BoxGeometry(largura, altura, largura);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xFFCC00 });
    const bodyMesh = new THREE.Mesh(bodyGeometry, bodyMaterial);
    this.add(bodyMesh);

    // Create the wheels as spheres with red color
    const wheelGeometry = new THREE.SphereGeometry(raio, 32, 32);
    const wheelMaterial = new THREE.MeshPhongMaterial({ color: 0xFF0000 });
    const wheelMeshes = [];
    for (let i = 0; i < 4; i++) {
      const wheelMesh = new THREE.Mesh(wheelGeometry, wheelMaterial);
      // Position the wheels around the body
      // Modify the positions according to your desired layout
      wheelMesh.position.x = (i % 2 === 0 ? 1 : -1) * (largura / 2);
      wheelMesh.position.y = -altura / 2;
      wheelMesh.position.z = (i < 2 ? 1 : -1) * (largura / 2);
      wheelMeshes.push(wheelMesh);
      this.add(wheelMesh);
    }

    // Create the arm as a tube with green color
    const armGeometry = new THREE.CylinderGeometry(1, 1, tubo, 32);
    const armMaterial = new THREE.MeshPhongMaterial({ color: 0x00FF00 });
    const armMesh = new THREE.Mesh(armGeometry, armMaterial);
    // Position the arm according to your desired location
    // Modify the position according to your desired layout
    armMesh.position.y = altura / 2;
    armMesh.position.z = largura / 2;
    this.add(armMesh);
  }
}
