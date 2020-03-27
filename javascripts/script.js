HEIGHT = window.innerHeight;
WIDTH = window.innerWidth;



// var scene,
//     camera,
//     controls,
//     fieldOfView,
//     aspectRatio,
//     nearPlane,
//     farPlane,
//     shadowLight,
//     backLight,
//     light,
//     renderer,
//     container;

// //SCENE
// var floor, lion, fan,
//     isBlowing = false;

// //SCREEN VARIABLES

// var HEIGHT,
//     WIDTH,
//     windowHalfX,
//     windowHalfY,
//     mousePos = { x: 0, y: 0 };
//     dist = 0;




    
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(100, window.innerWidth/window.innerHeight, 0.1, 2000);

camera.position.x = 10;
camera.position.y = 100;
camera.position.z = -200;

var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
renderer.setClearColor('#e5e5e5');
renderer.shadowMap.enabled = true;
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
    
    var ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    

    
    backLight = new THREE.DirectionalLight(0xffffff, 0.3);
    backLight.position.set(50, 100, 150);;
    backLight.castShadow = true;

    frontLight = new THREE.DirectionalLight(0xffffff, 1);
    frontLight.position.set(0, 100, -150);;
    frontLight.castShadow = true;

    leftLight = new THREE.DirectionalLight(0xffffff, 1);
    leftLight.position.set(100, 0, 0);;
    leftLight.castShadow = true;

    rightLight = new THREE.DirectionalLight(0xffffff, 1);
    rightLight.position.set(-100, 0, 0);;
    rightLight.castShadow = true;

    // backLight.position.set(-100, 500, -700);
    // backLight.shadowDarkness = .1;
    
    scene.add(ambientLight)
    scene.add(backLight);
    scene.add(frontLight);
    scene.add(leftLight);
    scene.add(rightLight);  
}












// Set up mouse/key/etc events

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var mousePos = {x:0, y:0}



// function handleMouseMove(event){
//     var tx=-1 + (event.clientX / WIDTH) * 2;
//     var ty= 1 - (event.clientY / HEIGHT) * 2;
//     mousePos = {x:tx, y:ty}
// }

// document.addEventListener('mousemove', handleMouseMove, false);




// Rendering

createLights();
createGrassPlane();
createDog();


Dog.prototype.track = function(xTarget, yTarget){

}



var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

controls = new THREE.OrbitControls(camera, renderer.domElement)




// now handle the mousemove event

// function handleMouseMove(e) {
//     var tx = -1 + (e.clientX / WIDTH) * 2;
//     var ty = 1 - (e.clientY / HEIGHT) * 2;
//     mousePos = { x: tx, y: ty };
// }

// Dog.prototype.track = function() {
//     this.eyes.position.x = normalize(mousePos.x, -1, 1, -100, 100);
//     this.eyes.position.y = normalize(mousePos.y, -1, 1, 25, 175);
// }

function loop() {
    render();
    // dog.track();
}




loop();





// function normalize(v, vmin, vmax, tmin, tmax) {
//     var nv = Math.max(Math.min(v, vmax), vmin);
//     var dv = vmax - vmin;
//     var pc = (nv - vmin) / dv;
//     var dt = tmax - tmin;
//     var tv = tmin + (pc * dt);
//     return tv;
// }
