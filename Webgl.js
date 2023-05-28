'use strict';

class Webgl {

  constructor() {
        
    this.clock = new THREE.Clock();

    this.scene = new THREE.Scene();        
    this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    this.group = new THREE.Group()
    

    // create a render and set the size
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xEEEEEE);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // position and point the camera to the center of the scene
    this.camera.position.x = 100;
    this.camera.position.y = 10;
    this.camera.position.z = 10;
    this.camera.lookAt(this.scene.position);
        
    this.trackballControls = new THREE.TrackballControls(this.camera);
    this.trackballControls.rotateSpeed = 1.0;
    this.trackballControls.zoomSpeed = 1.0;
    this.trackballControls.panSpeed = 1.0;
    this.trackballControls.staticMoving = true;

    this.CamControls = new THREE.FirstPersonControls(this.camera);
    
    this.FlyControls = new THREE.FlyControls(this.camera);

    this.orbitControls = new THREE.OrbitControls(this.camera);

    
        
    
    // add the output of the renderer to the html element
    $("#WebGL-output").append(this.renderer.domElement);

    this.gui = new GUI(this);
  }
  
  render () {
    let delta = this.clock.getDelta();
    this.trackballControls.update(delta);
    this.orbitControls.update(delta);
    this.CamControls.update(delta);
    this.FlyControls.update(delta);
    
    //render the scene
    this.renderer.render(this.scene, this.camera);
    
  }

}
