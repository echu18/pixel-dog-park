



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
    var orangeMat = new THREE.MeshLambertMaterial({ color: orange, opacity: 0.85, shading: THREE.FlatShading });

    var white = new THREE.Color("17, 5%, 95%");
    var whiteMat = new THREE.MeshLambertMaterial({ color: white, opacity: 0.85, shading: THREE.FlatShading });



    // Face
    var faceGeom = new THREE.BoxGeometry(70, 50, 60);
    this.face = new THREE.Mesh(faceGeom, orangeMat);

    this.face.position.z = 0;
    this.face.position.y = 70;
    this.face.position.x = 0;



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
    var chestGeom = new THREE.BoxGeometry(30, 20, 10);
    var chest = new THREE.Mesh(chestGeom, whiteMat)

        chest.position.x = 0;
        chest.position.y = 15;
        chest.position.z = -10;


    var bodyFrontGeom = new THREE.BoxGeometry(60, 50, 50);
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

    
 

    // Legs
    var hindLegGeom = new THREE.BoxGeometry(20, 50, 45);
    var hindFootGeom = new THREE.BoxGeometry(20, 20, 35);

    this.leftLeg = new THREE.Group();
        var hindLegLeft = new THREE.Mesh(hindLegGeom, orangeMat);

            hindLegLeft.position.x = 50;
            hindLegLeft.position.y = -35;
            hindLegLeft.position.z = 65;

        var hindFootLeft = new THREE.Mesh(hindFootGeom, orangeMat);

            hindFootLeft.position.x = 50;
            hindFootLeft.position.y = -50;
            hindFootLeft.position.z = 25;

        this.leftLeg.add(hindLegLeft);
        this.leftLeg.add(hindFootLeft);


    this.rightLeg = new THREE.Group();
        var hindLegRight = new THREE.Mesh(hindLegGeom, orangeMat);


        hindLegRight.position.x = -50;
        hindLegRight.position.y = -35;
        hindLegRight.position.z = 65;


        var hindFootGeom = new THREE.BoxGeometry(20, 20, 35);
        var hindFootRight = new THREE.Mesh(hindFootGeom, orangeMat);

        hindFootRight.position.x = -50;
        hindFootRight.position.y = -50;
        hindFootRight.position.z = 25;

        this.rightLeg.add(hindLegRight);
        this.rightLeg.add(hindFootRight);















    // this.body = new THREE.Group()

    
    // Add parts to body
    this.body.add(chest);
    this.body.add(bodyFront);
    this.body.add(bodyMid);
    this.body.add(bodyBack);
    this.body.add(bodyBum);
    this.body.add(this.leftLeg);
    this.body.add(this.rightLeg);
    



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


