



var scene,
    camera,
    controls,
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane,
    shadowLight,
    backLight,
    light,
    renderer,
    container;

//SCENE
var floor, lion, fan,
    isBlowing = false;

//SCREEN VARIABLES

var HEIGHT,
    WIDTH,
    windowHalfX,
    windowHalfY,
    mousePos = { x: 0, y: 0 };
    dist = 0;




    
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

camera.position.z = -200;
camera.position.x = 200;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor('#e5e5e5');
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

// controls = new OrbitControls(camera, renderer.domElement);



// Set up lighting
function createLights() {
    // var backLight = new THREE.PointLight(0xFFFFFF, 1, 1000)
    // backLight.position.set(0, 100, 1000)
    
    // var frontLight = new THREE.PointLight(0xFFFFFF, 1, 1000)
    // frontLight.position.set(0, 200, 100)
    
    // var leftLight = new THREE.DirectionalLight(0xFFFFFF, 1, 1000)
    // leftLight.position.set(100,0,100)
    
    
    // var ambientLight = new THREE.AmbientLight(0x404040);
    

    var light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1.4);
    scene.add(light);

    // scene.add(backLight);
    // scene.add(frontLight);
    // scene.add(leftLight);
    
    // scene.add(ambientLight)
;}



// Set up mouse/key/etc events

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();










function createDoge() {
    doge = new Doge();
    scene.add(doge);
}








// Doge

Doge = function () {
    // Colors
    var orange = new THREE.Color("hsl(17, 80%, 60%)");
    // var orangeMat = new THREE.MeshLambertMaterial({ color: orange, wireframe: true, opacity: 0.85, shading: THREE.FlatShading });
    var orangeMat = new THREE.MeshLambertMaterial({ color: orange, transparent: true, opacity: 0.85, shading: THREE.FlatShading });

    var white = new THREE.Color("hsl(17, 5%, 95%)");
    var whiteMat = new THREE.MeshLambertMaterial({ color: white, opacity: 0.85, shading: THREE.FlatShading });


    var blue = new THREE.Color("hsl(215, 73%, 55%)");
    var blueMat = new THREE.MeshLambertMaterial({ color: blue, opacity: 0.85, shading: THREE.FlatShading});


    // Face
    var faceGeom = new THREE.BoxGeometry(80, 60, 65);
    this.face = new THREE.Mesh(faceGeom, orangeMat);

    this.face.position.x = 0;
    this.face.position.y = 80;
    this.face.position.z = 10;



    // Ears
    var earGeom = new THREE.BoxGeometry(5, 5, 5);
    this.leftEar = new THREE.Mesh(earGeom, orangeMat);


    // this.head.position.z = 15;
    // this.head.position.y = 10;
    // this.head.position.x = 0;



    // 
    var eyeGeom
    var snoutGeom


    // Head
    // THREE.group()







    // Body
    this.body = new THREE.Group();


    // Main body
    var chestGeom = new THREE.BoxGeometry(60, 40, 2);
    var chest = new THREE.Mesh(chestGeom, whiteMat)

        chest.position.x = 0;
        chest.position.y = 15;
        chest.position.z = -15;


    var bodyFrontGeom = new THREE.BoxGeometry(60, 70, 70);
    var bodyFront = new THREE.Mesh(bodyFrontGeom, orangeMat)

        bodyFront.position.x = 0;
        bodyFront.position.y = 30;
        bodyFront.position.z = 20;
    
    
    var bodyMidGeom = new THREE.BoxGeometry(70,100,60);
    var bodyMid = new THREE.Mesh(bodyMidGeom, orangeMat);
        
        bodyMid.position.x = 0;
        bodyMid.position.y = -10;
        bodyMid.position.z = 40;
        


    var bodyBackGeom = new THREE.BoxGeometry(80,80,60);
    var bodyBack = new THREE.Mesh(bodyBackGeom, orangeMat);
    
        bodyBack.position.x = 0;
        bodyBack.position.y = -20;
        bodyBack.position.z = 60;


    var bodyBumGeom = new THREE.BoxGeometry(70,50,20);
    var bodyBum = new THREE.Mesh(bodyBumGeom, orangeMat);
    
        bodyBum.position.x = 0;
        bodyBum.position.y = -35;
        bodyBum.position.z = 95;

   
    var bellyGeom = new THREE.BoxGeometry(35, 50, 2);
    var belly = new THREE.Mesh(bellyGeom, whiteMat)

    belly.position.x = 0;
    belly.position.y = -35;
    belly.position.z = 10;

 

    // Legs
    var hindLegGeom = new THREE.BoxGeometry(20, 50, 45);
    var hindFootGeom = new THREE.BoxGeometry(20, 20, 30);

    this.leftHindLeg = new THREE.Group();
        var hindLegLeft = new THREE.Mesh(hindLegGeom, orangeMat);

            hindLegLeft.position.x = 50;
            hindLegLeft.position.y = -32;
            hindLegLeft.position.z = 65;

        var hindFootLeft = new THREE.Mesh(hindFootGeom, whiteMat);

            hindFootLeft.position.x = 50;
            hindFootLeft.position.y = -47;
            hindFootLeft.position.z = 28;

        this.leftHindLeg.add(hindLegLeft);
        this.leftHindLeg.add(hindFootLeft);


    this.rightHindLeg = new THREE.Group();
        var hindLegRight = new THREE.Mesh(hindLegGeom, orangeMat);


        hindLegRight.position.x = -50;
        hindLegRight.position.y = -32;
        hindLegRight.position.z = 65;


        var hindFootGeom = new THREE.BoxGeometry(20, 20, 30);
        var hindFootRight = new THREE.Mesh(hindFootGeom, whiteMat);

        hindFootRight.position.x = -50;
        hindFootRight.position.y = -47;
        hindFootRight.position.z = 28;

        this.rightHindLeg.add(hindLegRight);
        this.rightHindLeg.add(hindFootRight);





    // Front Legs

    var frontLegGeom = new THREE.BoxGeometry(20, 100, 20);
    var frontFootGeom = new THREE.BoxGeometry(20, 20, 20);
        
    this.leftFrontLeg = new THREE.Group();
        var frontLegLeft = new THREE.Mesh(frontLegGeom, orangeMat);
            frontLegLeft.position.x = 35;
            frontLegLeft.position.y = -10;
            frontLegLeft.position.z = 0;


        var frontFootLeft = new THREE.Mesh(frontFootGeom, whiteMat);
            frontFootLeft.position.x = 35;
            frontFootLeft.position.y = -50;
            frontFootLeft.position.z = -20;


    this.leftFrontLeg.add(frontLegLeft);
    this.leftFrontLeg.add(frontFootLeft);



    this.rightFrontLeg = new THREE.Group();
        var frontLegRight = new THREE.Mesh(frontLegGeom, orangeMat);
            frontLegRight.position.x = -35;
            frontLegRight.position.y = -10;
            frontLegRight.position.z = 0;


        var frontFootRight = new THREE.Mesh(frontFootGeom, whiteMat);
            frontFootRight.position.x = -35;
            frontFootRight.position.y = -50;
            frontFootRight.position.z = -20;

    this.rightFrontLeg.add(frontLegRight);
    this.rightFrontLeg.add(frontFootRight);










    // this.body = new THREE.Group()

    
    // Add parts to body
    this.body.add(chest);
    this.body.add(bodyFront);
    this.body.add(bodyMid);
    this.body.add(bodyBack);
    this.body.add(bodyBum);
    this.body.add(belly);
    this.body.add(this.leftHindLeg);
    this.body.add(this.rightHindLeg);
    this.body.add(this.leftFrontLeg);
    this.body.add(this.rightFrontLeg);
    



    // Add into scene
    scene.add(this.body);
    scene.add(this.face);

}











createLights();
createDoge();






var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}


new THREE.OrbitControls(camera, renderer.domElement)
render();


