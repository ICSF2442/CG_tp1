class GUI {
  constructor(webgl) {
    this.webgl = webgl;
    this.table1 = new MyTable(30, 12, 1.1, 30);
    this.inclinacao1 = 15 * Math.PI / 180;
    this.inclinacao2 = -this.inclinacao1/4;
    this.group = new THREE.Group();
    
    
    var guiVars = {
      "cleanScene": () => {
        for (var i = 0; i < this.webgl.scene.children.length; )
          this.webgl.scene.remove(this.webgl.scene.children[i]);
      },
      "drawBox": () => {
        var group = this.group;
        var group2 = new THREE.Group();
        var group3 = new THREE.Group();
        var grouptotal = new THREE.Group();
        var inclinacao1 = this.inclinacao1;
        var inclinacao2 = -inclinacao1/4;
        this.webgl.scene.add(new THREE.AxisHelper(20));
        var table1 = this.table1;
        var table2 = new MyTable(30, 12, 1.1, 30);
        
        var table3 = new MyTable(30, 12, 1.1, 30);
        var table4 = new MyTable(30, 12, 1.1, 30);

        var table5 = new MyTable(30, 12, 1.1, 30);
        var table6 = new MyTable(30, 12, 1.1, 30);

        //1º andar
        table2.translateX( table1.largura + table1.largura/4 );
        group.add(table1);
        group.add(table2);
        group.rotation.z += inclinacao1;
        

        //2º andar
        table3.translateY(table1.altura + table1.altura/2 );
        table3.translateX(table2.largura );

        table4.translateX( table3.largura + table3.largura/4 + table2.largura);
        
        table4.translateY(table2.altura + table2.altura/2);

        group2.add(table3);
        group2.add(table4);
        group2.rotation.z += inclinacao1;
        

        //3º andar

        table5.translateY(3*table1.altura + 2*table1.altura  );
        table5.translateX(table2.largura + table3.largura/4 );

        table6.translateX( table3.largura + 2*table3.largura/4 + table2.largura);
        table6.translateY(3*table2.altura + 2*table2.altura );

        group3.add(table5);
        group3.add(table6);
        group3.rotation.z +=inclinacao2;
        

        grouptotal.add(group);
        grouptotal.add(group2);
        grouptotal.add(group3);

        this.webgl.scene.add(grouptotal);


        var grouptotal2 = grouptotal.clone();
        grouptotal2.translateZ(2*table1.largura);
        this.webgl.scene.add(grouptotal2);


        var grouptotal3 = grouptotal.clone();
        grouptotal3.translateZ(4*table1.largura);
        this.webgl.scene.add(grouptotal3);

      },

      "drawEstante": () =>{
        var groupoE1 = new THREE.Group();
        this.webgl.scene.add(new THREE.AxisHelper(20));

        var Estante1 = new Estante(4.5*this.table1.largura,this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura);
        var Estante2 = new Estante(4.5*this.table1.largura,this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura);
        var Estante3 = new Estante(4.5*this.table1.largura,this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura);

        var Estanteblock1 = new Estante(0,4*this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura);
        var Estanteblock2 = new Estante(0,4*this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura);
        var Estanteblock3 = new Estante(0,4*this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura);

        var Apoio1 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1  )
        var Apoio2 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1  )
        var Apoio3 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1  )
        var Apoio4 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1  )

        groupoE1.add(Estante1);
        groupoE1.add(Estante2);
        groupoE1.add(Estante3);

        groupoE1.add(Estanteblock1);
        groupoE1.add(Estanteblock2);
        groupoE1.add(Estanteblock3);

        groupoE1.add(Apoio1);
        groupoE1.add(Apoio2);
        groupoE1.add(Apoio3);
        groupoE1.add(Apoio4);
        //1º andar
        //prateleira
        Estante1.rotation.z += this.inclinacao1;
        Estante1.translateX(this.table1.largura + this.table1.largura/2);
        Estante1.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estante1.translateY(-this.table1.altura/2);

        //block1
        Estanteblock1.rotation.z += this.inclinacao1;
        Estanteblock1.translateZ(this.table1.espessura/2 + this.table1.profundidade/2);
        Estanteblock1.translateX(-this.table1.largura + this.table1.largura/4); 
        Estanteblock1.translateY(-this.table1.altura/2 + 2*this.table1.profundidade);
        
        
        
        

        //2º andar
        Estante2.rotation.z += this.inclinacao1;
        Estante2.translateX(this.table1.largura + this.table1.largura/2 + this. table1.largura);
        Estante2.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estante2.translateY(-this.table1.altura/2 + this.table1.altura + this.table1.altura/2);
        

        //block2
        Estanteblock2.rotation.z += this.inclinacao1;
        Estanteblock2.translateX(this. table1.largura/4);
        Estanteblock2.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estanteblock2.translateY(-this.table1.altura/2 + this.table1.altura + this.table1.altura/2 + 2*this.table1.profundidade);
        
        
        //3º andar
        Estante3.rotation.z += this.inclinacao2;
        Estante3.translateX(this.table1.largura);
        Estante3.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estante3.translateY(-this.table1.altura/2 + 3*this.table1.altura + 2*this.table1.altura );
       

        //block3
        Estanteblock3.rotation.z += this.inclinacao2;
        Estanteblock3.translateX(3*this.table1.largura + this.table1.largura/4);
        Estanteblock3.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estanteblock3.translateY(-this.table1.altura/2 + 3*this.table1.altura + 2*this.table1.altura+ 2*this.table1.profundidade);

       
        

        //Apoios
        Apoio1.translateX(Estante1.largura/1.5);
        Apoio1.translateY(Apoio1.altura/4);
        Apoio1.translateZ(-2*this.table1.profundidade);
        

        Apoio2.translateX(Estante1.largura/4)
        Apoio2.translateY(Apoio2.altura/4)
        Apoio2.translateZ(-2*this.table1.profundidade);
        

        Apoio3.translateX(Estante1.largura/1.5);
        Apoio3.translateY(Apoio1.altura/4);
        Apoio3.translateZ(Estante1.profundidade - Apoio3.profundidade);
       

        Apoio4.translateX(Estante1.largura/4)
        Apoio4.translateY(Apoio2.altura/4)
        Apoio4.translateZ( Estante1.profundidade - Apoio3.profundidade);



        this.webgl.scene.add(groupoE1);

        //2º estante
        var groupE2 = groupoE1.clone();
        groupE2.translateZ(2*this.table1.largura)
        this.webgl.scene.add(groupE2);

        

        //3º estante
        var groupE3 = groupoE1.clone();
        groupE3.translateZ(4*this.table1.largura)
        this.webgl.scene.add(groupE3);


      },
<<<<<<< HEAD

=======
      "drawArmazem": () =>{

      },

      
>>>>>>> origin/main
      "PerspectiveCamera": () => {
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.x = 180;
        camera.position.y = 180;
        camera.position.z = 180;
        camera.lookAt(this.webgl.scene.position);
        this.webgl.camera = camera; 

        
      },

      "OrthographicCamera" : () =>{
        var camera = new THREE.OrthographicCamera(window.innerWidth / -16, window.innerWidth / 16, window.innerHeight / 16, window.innerHeight / -16, -200, 500);
        camera.position.x = 100;
        camera.position.y = 50;
        camera.position.z = 300;
        camera.lookAt(this.webgl.scene.position);
        this.webgl.camera = camera;
      },

      "Trackball": () => {
        
        
        var trackballControls = new THREE.TrackballControls(this.webgl.camera, this.webgl.renderer.domElement); 
        
        this.webgl.trackballControls = trackballControls;

       
      },

      "OrbitControl" : () => {
        
        var orbitControls = new THREE.OrbitControls(this.webgl.camera);
        orbitControls.autoRotate = true;
        this.webgl.orbitControls = orbitControls;

    },

      "Firstperson" : () =>{
        var CamControls = new THREE.FirstPersonControls(this.webgl.camera);

        CamControls.lookSpeed = 0.4;
        CamControls.movementSpeed = 20;
        CamControls.noFly = true;
        CamControls.lookVertical = true;
        CamControls.constrainVertical = true;
        CamControls.verticalMin = 1.0;
        CamControls.verticalMax = 2.0;
        CamControls.lon = -150;
        CamControls.lat = 120;

        this.webgl.CamControls = CamControls;
        

        

      },

      "fly" : () =>{

        var FlyControls = new THREE.FlyControls(this.webgl.camera);

        FlyControls.movementSpeed = 50;
        FlyControls.domElement = document.querySelector("#WebGL-output");
        FlyControls.rollSpeed = Math.PI/2;
        FlyControls.autoForward = true; 
        FlyControls.dragToLook = false;

        this.webgl.FlyControls = FlyControls;


      }

      
    };

    var gui = new dat.GUI({ autoPlace: false });
    var cleanScene = gui.add(guiVars, 'cleanScene');
    var drawTables = gui.add(guiVars, 'drawBox');
<<<<<<< HEAD
    var drawEstante = gui.add(guiVars,'drawEstante');
    
=======
    var drawEstante = gui.add(guiVars,'drawEstante'); 
    var drawArmazem = gui.add(guiVars, 'drawArmazem');
>>>>>>> origin/main
    var perspectiveCamera = gui.add(guiVars, 'PerspectiveCamera');
    var OrthographicCamera = gui.add(guiVars, 'OrthographicCamera');
    var Trackball = gui.add(guiVars, 'Trackball');
    var OrbitControl = gui.add(guiVars, 'OrbitControl');
    var Firstperson = gui.add(guiVars,'Firstperson');
    var fly = gui.add(guiVars,'fly');

    var customContainer = document.getElementById('GUI-output');
    customContainer.appendChild(gui.domElement);
  }
}
