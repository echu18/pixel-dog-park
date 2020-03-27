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


document.addEventListener('mousemove', handleMouseMove, false);
controls = new THREE.OrbitControls(camera, renderer.domElement)
// controls.enabled = false;
// controls.enableRotate = false;
controls.keys = {
    LEFT: 37, //left arrow
    UP: 38, // up arrow
    RIGHT: 39, // right arrow
    BOTTOM: 40 // down arrow
}

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






// Rendering




function handleMouseMove(event) {
    event.preventDefault();
    var tx = -1 + (event.clientX / WIDTH) * 2;
    var ty = 1 - (event.clientY / HEIGHT) * 2;
    mousePos = { x: tx, y: ty }
}



// Dog.prototype.updateBody = function(speed) {
//     console.log(mousePos)
//     this.eyes.position.x += (this.tHeadRotX - this.eyes.position.x) / speed;
//     this.eyes.position.y += (this.tHeadRotY - this.eyes.position.y) / speed;
// }

function trackEyes () {
    // console.log(mousePos)
    // var targetX = normalize(mousePos.x, -1, 1, -100, 100);
    // var targetY = normalize(mousePos.y, -1, 1, 25, 175);

    yDist = ((mousePos.y * 100) - (dog.eyeGlares.position.y))
    xDist = -((mousePos.x * 100) - (dog.eyeGlares.position.x))
  
    // this.updateBody(10);
    // debugger
    // dog.eyes.position.x += -(mousePos.x * 100) / 10;
    // dog.eyes.position.y += -(mousePos.y * 100) / 10;
    // dog.eyeGlares.position.x -= ((mousePos.x * 100) % 50);
    // dog.eyeGlares.position.x += ((mousePos.x * 100) / 10) % 10;
    console.log("X:" + mousePos.x)
    console.log("Y:" + mousePos.y)
    if (dog.eyeGlares.position.y + yDist >= -1) {
        dog.eyeGlares.position.y = -1;
    } else if (dog.eyeGlares.position.y + yDist < -5){ 
        dog.eyeGlares.position.y = -5;
    } else if (yDist > 0)  {
        dog.eyeGlares.position.y += yDist;
    } else {
        dog.eyeGlares.position.y -= yDist;
    }

    if (dog.eyeGlares.position.x + xDist >= 0) {
        dog.eyeGlares.position.x = 0;
    } else if (dog.eyeGlares.position.x + xDist < -5){ 
        dog.eyeGlares.position.x = -5;
    } else if (xDist > 0)  {
        dog.eyeGlares.position.x += xDist;
    } else {
        dog.eyeGlares.position.x -= xDist;
    }
    
    // dog.eyeGlares.position.y += ;
    // dog.head.rotation.x += (mousePos.x * 100) / 10;
    // dog.head.position.y += (normalize(mousePos.y, -140, 260, 20, 50) - dog.head.position.y ) / 50;
    // dog.head.rotation.z += normalize(mousePos.x, -200, 200, -Math.PI - .3, -Math.PI + .3);

}




function loop() {
    render();
    trackEyes();
    requestAnimationFrame(loop);

}

var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

createLights();
createGrassPlane();
createDog();


loop();





function normalize(v, vmin, vmax, tmin, tmax) {
    var nv = Math.max(Math.min(v, vmax), vmin);
    var dv = vmax - vmin;
    var pc = (nv - vmin) / dv;
    var dt = tmax - tmin;
    var tv = tmin + (pc * dt);
    return tv;
}
