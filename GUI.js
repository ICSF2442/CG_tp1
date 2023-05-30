class GUI {
  constructor(webgl) {
    this.webgl = webgl;

    //Caixas
    this.table1 = new MyTable(40, 6.5, 1, 20);
    

    //inclinação
    this.inclinacao1 = 3 * Math.PI / 180;
    this.inclinacao2 = -this.inclinacao1/4;
    this.inclinacao90graus = 90 * Math.PI / 180;

    //grupos
    this.group = new THREE.Group();
    this.group2 = new THREE.Group();
    this.group3 = new THREE.Group();
    this.grouptotal = new THREE.Group();


     this.Apoio1 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1,false,false )
    
    
    var guiVars = {
      "cleanScene": () => {
        for (var i = 0; i < this.webgl.scene.children.length; )
          this.webgl.scene.remove(this.webgl.scene.children[i]);
      },
      "drawBox": () => {
        
        
        this.webgl.scene.add(this.table1);

      },

      "drawEstante": () =>{
        var groupoE1 = new THREE.Group();
        this.webgl.scene.add(new THREE.AxisHelper(20));

        var inclinacao1 = this.inclinacao1;
        var inclinacao2 = -inclinacao1/4;
        this.webgl.scene.add(new THREE.AxisHelper(20));
        var table1 = this.table1;
        var table2 = new MyTable(40, 6.5, 1, 20);
        var table3 = new MyTable(40, 6.5, 1, 20);
        var table4 = new MyTable(40, 6.5, 1, 20);
        var table5 = new MyTable(40, 6.5, 1, 20);
        var table6 = new MyTable(40, 6.5, 1, 20);

        //1º andar
        table2.translateX( table1.largura + table1.largura/4 );
        this.group.add(table1);
        this.group.add(table2);
        this.group.rotation.z = inclinacao1;
        

        //2º andar
        table3.translateY(table1.altura + table1.altura/2 );
        table3.translateX(table2.largura );

        table4.translateX( table3.largura + table3.largura/4 + table2.largura);
        
        table4.translateY(table2.altura + table2.altura/2);

        this.group2.add(table3);
        this.group2.add(table4);
        this.group2.rotation.z = inclinacao1;
        

        //3º andar

        table5.translateY(3*table1.altura + 2*table1.altura  );
        table5.translateX(table2.largura + table3.largura/4 );

        table6.translateX( table3.largura + 2*table3.largura/4 + table2.largura);
        table6.translateY(3*table2.altura + 2*table2.altura );

        this.group3.add(table5);
        this.group3.add(table6);
        this.group3.rotation.z =inclinacao2;
        

        this.grouptotal.add(this.group);
        this.grouptotal.add(this.group2);
        this.grouptotal.add(this.group3);

        this.webgl.scene.add(this.grouptotal);


        var grouptotal2 = this.grouptotal.clone();
        grouptotal2.translateZ(2*table1.largura);
        this.webgl.scene.add(grouptotal2);


        var grouptotal3 = this.grouptotal.clone();
        grouptotal3.translateZ(4*table1.largura);
        this.webgl.scene.add(grouptotal3);


        var Estante1 = new Estante(4.5*this.table1.largura,this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura,false,false);
        var Estante2 = new Estante(4.5*this.table1.largura,this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura,false,false);
        var Estante3 = new Estante(4.5*this.table1.largura,this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura,false,false);

        var Estanteblock1 = new Estante(0,4*this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura,false,false);
        var Estanteblock2 = new Estante(0,4*this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura,false,false);
        var Estanteblock3 = new Estante(0,4*this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura,false,false);

        var Apoio1 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1  ,false,false)
        var Apoio2 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1  ,false,false)
        var Apoio3 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1  ,false,false)
        var Apoio4 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1  ,false,false)

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
        Estante1.rotation.z = this.inclinacao1;
        Estante1.translateX(this.table1.largura + this.table1.largura/2);
        Estante1.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estante1.translateY(-this.table1.altura/2);

        //block1
        Estanteblock1.rotation.z = this.inclinacao1;
        Estanteblock1.translateZ(this.table1.espessura/2 + this.table1.profundidade/2);
        Estanteblock1.translateX(-this.table1.largura + this.table1.largura/4); 
        Estanteblock1.translateY(-this.table1.altura/2 + 2*this.table1.profundidade);
        
        
        
        

        //2º andar
        Estante2.rotation.z = this.inclinacao1;
        Estante2.translateX(this.table1.largura + this.table1.largura/2 + this. table1.largura);
        Estante2.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estante2.translateY(-this.table1.altura/2 + this.table1.altura + this.table1.altura/2);
        

        //block2
        Estanteblock2.rotation.z = this.inclinacao1;
        Estanteblock2.translateX(this. table1.largura/4);
        Estanteblock2.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estanteblock2.translateY(-this.table1.altura/2 + this.table1.altura + this.table1.altura/2 + 2*this.table1.profundidade);
        
        
        //3º andar
        Estante3.rotation.z = this.inclinacao2;
        Estante3.translateX(this.table1.largura);
        Estante3.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estante3.translateY(-this.table1.altura/2 + 3*this.table1.altura + 2*this.table1.altura );
       

        //block3
        Estanteblock3.rotation.z = this.inclinacao2;
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
      "drawArmazem": () =>{
      var armazemChao = new Estante(15*this.table1.largura,1.1,15*this.table1.largura,false,true); //Chao
      armazemChao.translateY(-this.Apoio1.altura/4);

      var armazemParede1 = new Estante(1.1,8*this.table1.largura,15*this.table1.largura,false,true); //Parede de trás
      armazemParede1.translateX(15*this.table1.largura/2);
      armazemParede1.translateY((8*this.table1.largura/2)-this.Apoio1.altura/4);

       var armazemParede2 = new Estante(15*this.table1.largura,8*this.table1.largura,1.1,false,true); //Parede da direita
       armazemParede2.translateY((8*this.table1.largura/2)-this.Apoio1.altura/4);
       armazemParede2.translateZ(15*this.table1.largura/2);

      var armazemParede3 = new Estante(15*this.table1.largura,8*this.table1.largura,1.1,false,true); //Parede da esquerda
      armazemParede3.translateY((8*this.table1.largura/2)-this.Apoio1.altura/4);
      armazemParede3.translateZ(-15*this.table1.largura/2);

      var armazemTeto = new Estante(15*this.table1.largura,1.1,15*this.table1.largura,true,true); //Teto
      armazemTeto.translateY(8*this.table1.largura-this.Apoio1.altura/4);

       var armazemFrente = new Estante(1.1,8*this.table1.largura,15*this.table1.largura,true,true); //Parede da frente
       armazemFrente.translateX(-15*this.table1.largura/2);
       armazemFrente.translateY((8*this.table1.largura/2)-this.Apoio1.altura/4);


      var GroupArmazem = new THREE.Group();
      GroupArmazem.add(armazemChao);
      GroupArmazem.add(armazemParede1);
      GroupArmazem.add(armazemParede2);
      GroupArmazem.add(armazemParede3);
      GroupArmazem.add(armazemTeto);
      GroupArmazem.add(armazemFrente);
      this.webgl.scene.add(GroupArmazem);

      var groupoE1 = new THREE.Group();
        this.webgl.scene.add(new THREE.AxisHelper(20));

        var inclinacao1 = this.inclinacao1;
        var inclinacao2 = -inclinacao1/4;
        this.webgl.scene.add(new THREE.AxisHelper(20));
        var table1 = this.table1;
        var table2 = this.table2;
        
        var table3 = this.table3;
        var table4 = this.table4;

        var table5 = this.table5;
        var table6 = this.table6;

        //1º andar
        this.table2.translateX( table1.largura + table1.largura/4 );
        this.group.add(table1);
        this.group.add(table2);
        this.group.rotation.z = inclinacao1;
        

        //2º andar
        table3.translateY(table1.altura + table1.altura/2 );
        table3.translateX(table2.largura );

        table4.translateX( table3.largura + table3.largura/4 + table2.largura);
        
        table4.translateY(table2.altura + table2.altura/2);

        this.group2.add(table3);
        this.group2.add(table4);
        this.group2.rotation.z = inclinacao1;
        

        //3º andar

        table5.translateY(3*table1.altura + 2*table1.altura  );
        table5.translateX(table2.largura + table3.largura/4 );

        table6.translateX( table3.largura + 2*table3.largura/4 + table2.largura);
        table6.translateY(3*table2.altura + 2*table2.altura );

        this.group3.add(table5);
        this.group3.add(table6);
        this.group3.rotation.z =inclinacao2;
        

        this.grouptotal.add(this.group);
        this.grouptotal.add(this.group2);
        this.grouptotal.add(this.group3);

        this.webgl.scene.add(this.grouptotal);


        var grouptotal2 = this.grouptotal.clone();
        grouptotal2.translateZ(2*table1.largura);
        this.webgl.scene.add(grouptotal2);


        var grouptotal3 = this.grouptotal.clone();
        grouptotal3.translateZ(4*table1.largura);
        this.webgl.scene.add(grouptotal3);


        var Estante1 = new Estante(4.5*this.table1.largura,this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura,false,false);
        var Estante2 = new Estante(4.5*this.table1.largura,this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura,false,false);
        var Estante3 = new Estante(4.5*this.table1.largura,this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura,false,false);

        var Estanteblock1 = new Estante(0,4*this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura,false,false);
        var Estanteblock2 = new Estante(0,4*this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura,false,false);
        var Estanteblock3 = new Estante(0,4*this.table1.profundidade,4*this.table1.profundidade +this.table1.espessura,false,false);

        var Apoio1 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1  ,false,false)
        var Apoio2 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1  ,false,false)
        var Apoio3 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1  ,false,false)
        var Apoio4 = new Estante(5 , 6*this.table1.altura + this.table1.altura/2 , 1  ,false,false)

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
        Estante1.rotation.z = this.inclinacao1;
        Estante1.translateX(this.table1.largura + this.table1.largura/2);
        Estante1.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estante1.translateY(-this.table1.altura/2);

        //block1
        Estanteblock1.rotation.z = this.inclinacao1;
        Estanteblock1.translateZ(this.table1.espessura/2 + this.table1.profundidade/2);
        Estanteblock1.translateX(-this.table1.largura + this.table1.largura/4); 
        Estanteblock1.translateY(-this.table1.altura/2 + 2*this.table1.profundidade);
        
        
        
        

        //2º andar
        Estante2.rotation.z = this.inclinacao1;
        Estante2.translateX(this.table1.largura + this.table1.largura/2 + this. table1.largura);
        Estante2.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estante2.translateY(-this.table1.altura/2 + this.table1.altura + this.table1.altura/2);
        

        //block2
        Estanteblock2.rotation.z = this.inclinacao1;
        Estanteblock2.translateX(this. table1.largura/4);
        Estanteblock2.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estanteblock2.translateY(-this.table1.altura/2 + this.table1.altura + this.table1.altura/2 + 2*this.table1.profundidade);
        
        
        //3º andar
        Estante3.rotation.z = this.inclinacao2;
        Estante3.translateX(this.table1.largura);
        Estante3.translateZ(this.table1.espessura/2 + this.table1.profundidade/2); 
        Estante3.translateY(-this.table1.altura/2 + 3*this.table1.altura + 2*this.table1.altura );
       

        //block3
        Estanteblock3.rotation.z = this.inclinacao2;
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
    var drawEstante = gui.add(guiVars,'drawEstante');
    var drawArmazem = gui.add(guiVars, 'drawArmazem');
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
