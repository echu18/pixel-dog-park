



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




    // Body
    this.body = new THREE.Group();

    var chestGeom = new THREE.BoxGeometry(70, 70, 10);
    var chest = new THREE.Mesh(chestGeom, whiteMat)

    chest.position.x = 0;
    chest.position.y = 0;
    chest.position.z = -10;



    var bodyFrontGeom = new THREE.BoxGeometry(70, 120, 50);
    var bodyFront = new THREE.Mesh(bodyFrontGeom, orangeMat)

    bodyFront.position.x = 0;
    bodyFront.position.y = 0;
    bodyFront.position.z = 20;
    
    
    var bodyMidGeom = new THREE.BoxGeometry(70,100,60);
    var bodyMid = new THREE.Mesh(bodyMidGeom, orangeMat);
    
    bodyMid.position.x = 0;
    bodyMid.position.y = -10;
    bodyMid.position.z = 40;
    


    var bodyBackGeom = new THREE.BoxGeometry(70,80,60);
    var bodyBack = new THREE.Mesh(bodyBackGeom, orangeMat);
    
    bodyBack.position.x = 0;
    bodyBack.position.y = -20;
    bodyBack.position.z = 60;

    
    this.body.add(chest);
    this.body.add(bodyFront);
    this.body.add(bodyMid);
    this.body.add(bodyBack);





    // Face
    var faceGeom = new THREE.BoxGeometry(70, 60, 50);
    this.face = new THREE.Mesh(faceGeom, orangeMat);
    
    this.face.position.z = 0;
    this.face.position.y = 80;
    this.face.position.x = 0;
    


    // Ears
    var earGeom = new THREE.BoxGeometry(5,5,5);
    this.leftEar = new THREE.Mesh(earGeom, orangeMat);


    // this.head.position.z = 15;
    // this.head.position.y = 10;
    // this.head.position.x = 0;



    // Face
    var eyeGeom
    var snoutGeom
    









    // this.body = new THREE.Group()

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


