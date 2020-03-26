



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

camera.position.x = 10;
camera.position.y = 100;
camera.position.z = -500;

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
    var orangeMat = new THREE.MeshLambertMaterial({ color: orange, transparent: true, opacity: 0.95, shading: THREE.FlatShading });

    var white = new THREE.Color("hsl(17, 5%, 95%)");
    var whiteMat = new THREE.MeshLambertMaterial({ color: white, opacity: 0.85, shading: THREE.FlatShading });


    var blue = new THREE.Color("hsl(215, 73%, 55%)");
    var blueMat = new THREE.MeshLambertMaterial({ color: blue, opacity: 0.85, shading: THREE.FlatShading});
    
    var brown = new THREE.Color("hsl(29, 72%, 20%)");
    var brownMat = new THREE.MeshLambertMaterial({ color: brown, opacity: 0.85, shading: THREE.FlatShading});
    
    var black = new THREE.Color("hsl(29, 14%, 12%)");
    var blackMat = new THREE.MeshPhongMaterial({ color: black, opacity: 0.85, shading: THREE.FlatShading});


    // Face
    this.head = new THREE.Group();
    
        var faceBackGeom = new THREE.BoxGeometry(70, 70, 45);
        
        var faceBack = new THREE.Mesh(faceBackGeom, orangeMat);
            faceBack.position.x = 0;
            faceBack.position.y = 70;
            faceBack.position.z = -10;




        var faceMid1Geom = new THREE.BoxGeometry(60, 50, 45);

        var faceMid1 = new THREE.Mesh(faceMid1Geom, orangeMat);
        faceMid1.position.x = 0;
        faceMid1.position.y = 70;
        faceMid1.position.z = -30;
        

       
        // var faceFrontGeom = new THREE.BoxGeometry(50, 43, 15);

        // var faceFront = new THREE.Mesh(faceFrontGeom, blueMat);
        // faceFront.position.x = 0;
        // faceFront.position.y = 65;
        // faceFront.position.z = -50;



        var snoutBackGeom = new THREE.BoxGeometry(30, 30, 35);

        var snoutBack = new THREE.Mesh(snoutBackGeom, orangeMat);
        snoutBack.position.x = 0;
        snoutBack.position.y = 59;
        snoutBack.position.z = -50;




        var snoutFrontGeom = new THREE.BoxGeometry(25, 25, 35);
        // var snoutFrontGeom = new THREE.CylinderGeometry(12, 20, 50);

        var snoutFront = new THREE.Mesh(snoutFrontGeom, whiteMat);
        snoutFront.position.x = 0;
        snoutFront.position.y = 60;
        snoutFront.position.z = -65;
        // snoutFront.rotation.x = 300;


        var noseGeom = new THREE.BoxGeometry(15, 10, 7);

        var nose = new THREE.Mesh(noseGeom, brownMat);
        nose.position.x = 0;
        nose.position.y = 67;
        nose.position.z = -85;



    // Cheeks
        var cheekGeom = new THREE.BoxGeometry(13, 45, 45);

            var leftCheek = new THREE.Mesh(cheekGeom, orangeMat);
            leftCheek.position.x = 40;
            leftCheek.position.y = 65;
            leftCheek.position.z = -10;


        var cheekGeom = new THREE.BoxGeometry(13, 45, 45);

            var rightCheek = new THREE.Mesh(cheekGeom, orangeMat);
            rightCheek.position.x = -40;
            rightCheek.position.y = 65;
            rightCheek.position.z = -10;





    // Ears
        var earGeom = new THREE.BoxGeometry(20, 30, 20);
        var innerEarGeom = new THREE.BoxGeometry(10,15,2);

        var leftEar = new THREE.Mesh(earGeom, orangeMat);

            leftEar.position.x = 25;
            leftEar.position.y = 115;
            leftEar.position.z = -20;

            // leftEar.rotation.y = -10;
            // leftEar.rotation.z = -9;

        var leftInnerEar = new THREE.Mesh(innerEarGeom, whiteMat);
            leftInnerEar.position.x = 25;
            leftInnerEar.position.y = 115;
            leftInnerEar.position.z = -30;




        var rightEar = new THREE.Mesh(earGeom, orangeMat);

            rightEar.position.x = -25;
            rightEar.position.y = 115;
            rightEar.position.z = -20;

            // rightEar.rotation.y = 10;
            // rightEar.rotation.z = 9;

        var rightInnerEar = new THREE.Mesh(innerEarGeom, whiteMat);
            rightInnerEar.position.x = -25;
            rightInnerEar.position.y = 115;
            rightInnerEar.position.z = -30;




    
        // var eyeGeom = new THREE.SphereGeometry(7, 7, 7);
        // var roundEyeGeom = new THREE.SphereGeometry(5, 7, 7);
        var squareEyeGeom = new THREE.BoxGeometry(7, 13, 5);
        // var eyeGlareGeom = new THREE.BoxGeometry(5, 5, 5);
        // var roundEyeGeom = new THREE.SphereGeometry(5, 5, 5);


        var leftEye = new THREE.Mesh(squareEyeGeom, blackMat);
            leftEye.position.x = 15;
            leftEye.position.y = 80;
            leftEye.position.z = -53;
            // leftEye.rotation.z = -55;
            // leftEye.scale.setX(1.3)

        // var leftEyeGlare = new THREE.Mesh(eyeGlareGeom, blackMat);
        //     leftEyeGlare.position.x = 15;
        //     leftEyeGlare.position.y = 77;
        //     leftEyeGlare.position.z = -56;
            // leftEyeGlare.rotation.z = -70;
        // var leftEyeGlare = new THREE.Mesh(eyeGlareGeom, blackMat);
        //     leftEyeGlare.position.x = 15;
        //     leftEyeGlare.position.y = 80;
        //     leftEyeGlare.position.z = -56;
        //     // leftEyeGlare.rotation.z = -70;

        var rightEye = new THREE.Mesh(squareEyeGeom, blackMat);
            rightEye.position.x = -15;
            rightEye.position.y = 80;
            rightEye.position.z = -53;
            // rightEye.rotation.z = -55;
            // rightEye.scale.setX(1.3)






    
    this.head.add(leftCheek)
    this.head.add(rightCheek)
    this.head.add(leftEar)
    this.head.add(leftInnerEar)
    this.head.add(rightEar)
    this.head.add(rightInnerEar)
    this.head.add(faceBack)
    this.head.add(faceMid1)
    // this.head.add(faceFront)
    this.head.add(leftEye)
    this.head.add(rightEye)
    // this.head.add(leftEyeGlare)
    // this.head.add(rightEyeGlare)
    this.head.add(snoutBack)
    this.head.add(snoutFront)
    this.head.add(nose)


    this.head.position.y = 15
    this.head.position.z = 10











    // Body
    this.body = new THREE.Group();


    // Main body
    var chestGeom = new THREE.BoxGeometry(45, 50, 2);
    var chest = new THREE.Mesh(chestGeom, whiteMat)

        chest.position.x = 0;
        chest.position.y = 23;
        chest.position.z = -25;


    var bodyFrontGeom = new THREE.BoxGeometry(60, 85, 70);
    var bodyFront = new THREE.Mesh(bodyFrontGeom, orangeMat)

        bodyFront.position.x = 0;
        bodyFront.position.y = 35;
        bodyFront.position.z = 10;
    
    
    var bodyMidGeom = new THREE.BoxGeometry(70,80,60);
    var bodyMid = new THREE.Mesh(bodyMidGeom, orangeMat);
        
        bodyMid.position.x = 0;
        bodyMid.position.y = 10;
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

   
    var bellyGeom = new THREE.BoxGeometry(35, 20, 2);
    var belly = new THREE.Mesh(bellyGeom, whiteMat)

    belly.position.x = 0;
    belly.position.y = -20;
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

    var frontLegGeom = new THREE.BoxGeometry(20, 80, 20);
    var frontFootGeom = new THREE.BoxGeometry(20, 20, 30);
        
    this.leftFrontLeg = new THREE.Group();
        var frontLegLeft = new THREE.Mesh(frontLegGeom, orangeMat);
            frontLegLeft.position.x = 35;
            frontLegLeft.position.y = 0;
            frontLegLeft.position.z = 0;


        var frontFootLeft = new THREE.Mesh(frontFootGeom, whiteMat);
            frontFootLeft.position.x = 35;
            frontFootLeft.position.y = -50;
            frontFootLeft.position.z = -5;


    this.leftFrontLeg.add(frontLegLeft);
    this.leftFrontLeg.add(frontFootLeft);



    this.rightFrontLeg = new THREE.Group();
        var frontLegRight = new THREE.Mesh(frontLegGeom, orangeMat);
            frontLegRight.position.x = -35;
            frontLegRight.position.y = 0;
            frontLegRight.position.z = 0;


        var frontFootRight = new THREE.Mesh(frontFootGeom, whiteMat);
            frontFootRight.position.x = -35;
            frontFootRight.position.y = -50;
            frontFootRight.position.z = -5;

    this.rightFrontLeg.add(frontLegRight);
    this.rightFrontLeg.add(frontFootRight);




    this.leftFrontLeg.position.z = -10
    this.rightFrontLeg.position.z = -10





    
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
    scene.add(this.head);

}

















// Rendering

createLights();
createDoge();






var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}


new THREE.OrbitControls(camera, renderer.domElement)
render();


