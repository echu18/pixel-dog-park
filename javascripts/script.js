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
    isPetting = false;

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


document.addEventListener('mousemove', handleMouseMove, false);
document.addEventListener('mousedown', handleMouseDown, false);
document.addEventListener('mouseup', handleMouseUp, false);


controls = new THREE.OrbitControls(camera, renderer.domElement)
controls.enabled = false;
controls.enableRotate = false;
controls.keys = {
    LEFT: 37, //left arrow
    UP: 38, // up arrow
    RIGHT: 39, // right arrow
    BOTTOM: 40 // down arrow
}







// Rendering




function handleMouseMove(event) {
    event.preventDefault();
    var tx = -1 + (event.clientX / WIDTH) * 2;
    var ty = 1 - (event.clientY / HEIGHT) * 2;
    mousePos = { x: tx, y: ty }
}


function handleMouseDown(event) {
    event.preventDefault();
    var tx = -1 + (event.clientX / WIDTH) * 2;
    var ty = 1 - (event.clientY / HEIGHT) * 2;
    mousePos = { x: tx, y: ty }
    isPetting = true;
}

function handleMouseUp(event) {
    // event.preventDefault();
    // var tx = -1 + (event.clientX / WIDTH) * 2;
    // var ty = 1 - (event.clientY / HEIGHT) * 2;
    // mousePos = { x: tx, y: ty }
    isPetting = false;
}



// Dog.prototype.updateBody = function(speed) {
//     console.log(mousePos)
//     this.eyes.position.x += (this.tHeadRotX - this.eyes.position.x) / speed;
//     this.eyes.position.y += (this.tHeadRotY - this.eyes.position.y) / speed;
// }


Dog.prototype.petHead = function() {
    yDist = ((mousePos.y * 100) - (this.head.position.y) / 10)
    xDist = -((mousePos.x * 10) - (this.head.position.x) / 10)


    var xPos = mousePos.x * 100
    var yPos = mousePos.y * 100
    // if ((yPos <= 65 && yPos >= 40) && (xPos <= 50 && yPos >= -50 )) {


    if ((yPos <= 65 && yPos >= 40) && isPetting ) {
        
        if (xPos <= 50 && xPos >= 15 ) {
            this.head.rotation.z = 0.1;
        } else if (xPos <= 15 && xPos >= -15) {
            this.head.rotation.x = -0.2;
            this.head.position.y = 12;
        } else if (xPos <= -15 && xPos >= -50) {
            this.head.rotation.z = -0.1;
        }
    }

        // && mousePos.x <= this.head.position.x + 3 

    // if (mousePos.x - 3 <= this.head.position.x + 3 && mousePos.y - 3 >= this.head.position.x + 3) {
    //     if (this.head.position.y + yDist >= -1) {
    //         this.head.position.y = -1;
    //     } else if (this.head.position.y + yDist < -5) {
    //         this.head.position.y = -5;
    //     } else if (yDist > 0) {
    //         this.head.position.y += yDist;
    //     } else {
    //         this.head.position.y -= yDist;
    //     }

    //     // if (this.head.position.x + xDist >= 0) {
    //     //     this.head.position.x = 0;
    //     // } else if (this.head.position.x + xDist < -5) {
    //     //     this.head.position.x = -5;
    //     // } else if (xDist > 0) {
    //     //     this.head.position.x += xDist;
    //     // } else {
    //     //     this.head.position.x -= xDist;
    //     // }
    // }
}

Dog.prototype.idleAnim = function() {
    this.head.rotation.x = 0;
    this.head.rotation.z = 0;
    this.head.position.x = 0;
    this.head.position.y = 15;
    dog.trackEyes();
}


Dog.prototype.trackEyes = function() {
    yDist = ((mousePos.y * 100) - (this.eyeGlares.position.y)/100)
    xDist = -((mousePos.x * 100) - (this.eyeGlares.position.x)/100)
  
    if (this.eyeGlares.position.y + yDist >= -1) {
        this.eyeGlares.position.y = -1;
    } else if (this.eyeGlares.position.y + yDist < -5){ 
        this.eyeGlares.position.y = -5;
    } else if (yDist > 0)  {
        this.eyeGlares.position.y += yDist;
    } else {
        this.eyeGlares.position.y -= yDist;
    }

    if (this.eyeGlares.position.x + xDist >= 0) {
        this.eyeGlares.position.x = 0;
    } else if (this.eyeGlares.position.x + xDist < -5){ 
        this.eyeGlares.position.x = -5;
    } else if (xDist > 0)  {
        this.eyeGlares.position.x += xDist;
    } else {
        this.eyeGlares.position.x -= xDist;
    }
}





var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}


createLights();
createGrassPlane();
createDog();

function loop() {
    render();
    // dog.trackEyes();

    if (isPetting) {
        dog.petHead();
    } else {
        dog.idleAnim();
    }





    requestAnimationFrame(loop);
}

loop();





function normalize(v, vmin, vmax, tmin, tmax) {
    var nv = Math.max(Math.min(v, vmax), vmin);
    var dv = vmax - vmin;
    var pc = (nv - vmin) / dv;
    var dt = tmax - tmin;
    var tv = tmin + (pc * dt);
    return tv;
}





   // console.log(mousePos)
    // var targetX = normalize(mousePos.x, -1, 1, -100, 100);
    // var targetY = normalize(mousePos.y, -1, 1, 25, 175);

    // this.updateBody(10);
    // debugger
    // dog.eyes.position.x += -(mousePos.x * 100) / 10;
    // dog.eyes.position.y += -(mousePos.y * 100) / 10;
    // dog.eyeGlares.position.x -= ((mousePos.x * 100) % 50);
    // dog.eyeGlares.position.x += ((mousePos.x * 100) / 10) % 10;
       // dog.eyeGlares.position.y += ;
    // dog.head.rotation.x += (mousePos.x * 100) / 10;
    // dog.head.position.y += (normalize(mousePos.y, -140, 260, 20, 50) - dog.head.position.y ) / 50;
    // dog.head.rotation.z += normalize(mousePos.x, -200, 200, -Math.PI - .3, -Math.PI + .3);
