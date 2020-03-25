



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

camera.position.z = 5;

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
    var backLight = new THREE.PointLight(0xFFFFFF, 1, 1000)
    backLight.position.set(0, 0, 0)
    
    var frontLight = new THREE.DirectionalLight(0xFFFFFF, 1, 100)
    frontLight.position.set(100,0,100)
    
    scene.add(backLight);
    scene.add(frontLight);
}



// Set up mouse/key/etc events

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();










function createDoge() {
    doge = new Doge();
    scene.add(doge);
}








// Doge

Doge = function () {
    var beige = new THREE.Color("hsl(17, 80%, 60%)");
    this.beigeColor = new THREE.MeshLambertMaterial({
        color: beige,
        shading: THREE.FlatShading
    });



    // var bodyGeom = new THREE.CylinderGeometry(30, 80, 140, 4);
    var bodyGeom = new THREE.CylinderGeometry(10, 10, 20, 32);

    // var bodyGeom = new THREE.BoxGeometry(1, 1, 1);
    // this.material = new THREE.MeshLambertMaterial({color: 0xad3525});
    this.body = new THREE.Mesh(bodyGeom, this.beigeColor)
    // this.body = new THREE.Mesh(bodyGeom, this.beigeColor)


    this.body.position.z = 3;
    this.body.position.y = 0;
    this.bodyVertices = [0, 1, 2, 3, 4, 10];

    this.body.geometry.applyMatrix(new THREE.Matrix4().makeRotationY(Math.PI / 3));



    scene.add(this.body);


}











createLights();
createDoge();






var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}


new THREE.OrbitControls(camera, renderer.domElement)
render();


