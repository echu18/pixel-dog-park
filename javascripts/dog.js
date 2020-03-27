


// Colors
var orange = new THREE.Color("hsl(31, 77%, 48%)");
// var orangeMat = new THREE.MeshLambertMaterial({ color: orange, wireframe: true, opacity: 0.85, shading: THREE.FlatShading });
var orangeMat = new THREE.MeshStandardMaterial({ color: orange, transparent: true, opacity: 1 });
// orangeMat.castShadow = true;
// orangeMat.receiveShadow = true;
// orangeMat.roughness = 1;

var white = new THREE.Color("hsl(30, 53%, 66%)");
var whiteMat = new THREE.MeshStandardMaterial({ color: white });


var blue = new THREE.Color("hsl(215, 73%, 55%)");
var blueMat = new THREE.MeshStandardMaterial({ color: blue });

var brown = new THREE.Color("hsl(29, 72%, 20%)");
var brownMat = new THREE.MeshStandardMaterial({ color: brown });

var black = new THREE.Color("hsl(29, 14%, 12%)");
var blackMat = new THREE.MeshStandardMaterial({ color: black });

var green = new THREE.Color("hsl(113, 83%, 31%)");
var darkGreen = new THREE.Color("hsl(113, 77%, 26%)");
// var greenMat = new THREE.LambertMaterial({ color: green });





function createGrassPlane() {
    var groundGeom = new THREE.PlaneBufferGeometry(500, 500, 8, 8);
    var groundMat = new THREE.MeshBasicMaterial({ color: green, side: THREE.DoubleSide });
    var grassPlane = new THREE.Mesh(groundGeom, groundMat);
    grassPlane.rotateX(- Math.PI / 2);
    grassPlane.position.y = -60;

    scene.add(grassPlane);
    
    var grassSmallGeom = new THREE.BoxGeometry(15, 15, 15);
    var grassMat = new THREE.MeshLambertMaterial({ color: darkGreen })
    
    for (var i = 0; i < 100; i++) {  // Loops thru and makes a new mesh object each iteration
        var grassSmall = new THREE.Mesh(grassSmallGeom, grassMat);  // Randomize positions with math.random
        grassSmall.position.x = (Math.random() - 0.5) * 500;
        // grassSmall.position.y = (Math.random() - 0.5) * 1;
        grassSmall.position.y = -50;
        grassSmall.position.z = (Math.random() - 0.5) * 400;
        scene.add(grassSmall);
    }
}
















function createDog() {
    dog = new Dog();
    scene.add(dog);
}








// Dog

Dog = function () {
    // Head
    this.head = new THREE.Group();

    var headBackGeom = new THREE.BoxGeometry(75, 80, 45);
    var headBack = new THREE.Mesh(headBackGeom, orangeMat);
    headBack.position.x = 0;
    headBack.position.y = 60;
    headBack.position.z = 0;


    var headTopGeom = new THREE.BoxGeometry(30, 15, 50);
    var headTop = new THREE.Mesh(headTopGeom, orangeMat);
    headTop.position.x = 0;
    headTop.position.y = 95;
    headTop.position.z = -15;

    var headFrontGeom = new THREE.BoxGeometry(40, 40, 45);
    var headFront = new THREE.Mesh(headFrontGeom, orangeMat);
    headFront.position.x = 0;
    headFront.position.y = 68;
    headFront.position.z = -33;



    var headMidGeom = new THREE.BoxGeometry(65, 45, 75);
    var headMid = new THREE.Mesh(headMidGeom, orangeMat);
    headMid.position.x = 0;
    headMid.position.y = 70;
    headMid.position.z = -10;


    var faceWhiteGeom = new THREE.BoxGeometry(70, 20, 30);
    var faceWhite = new THREE.Mesh(faceWhiteGeom, whiteMat);
    faceWhite.position.x = 0;
    faceWhite.position.y = 60;
    faceWhite.position.z = -45;

    var cheekWhiteGeom = new THREE.BoxGeometry(90, 20, 30);
    var cheekWhite = new THREE.Mesh(cheekWhiteGeom, whiteMat);
    cheekWhite.position.x = 0;
    cheekWhite.position.y = 63;
    cheekWhite.position.z = -25;


    // var faceFrontGeom = new THREE.BoxGeometry(50, 43, 15);

    // var faceFront = new THREE.Mesh(faceFrontGeom, blueMat);
    // faceFront.position.x = 0;
    // faceFront.position.y = 65;
    // faceFront.position.z = -50;



    this.snout = new THREE.Group();
    // var snoutBackGeom = new THREE.BoxGeometry(35, 25, 35);

    // var snoutBack = new THREE.Mesh(snoutBackGeom, blueMat);
    // snoutBack.position.x = 0;
    // snoutBack.position.y = 59;
    // snoutBack.position.z = -50;

    var snoutBackGeom = new THREE.BoxGeometry(25, 25, 45);

    var snoutBack = new THREE.Mesh(snoutBackGeom, orangeMat);
    snoutBack.position.x = 0;
    snoutBack.position.y = 59;
    snoutBack.position.z = -60;


    var snoutSideUpperGeom = new THREE.BoxGeometry(45, 20, 30);

    var snoutSideUpper = new THREE.Mesh(snoutSideUpperGeom, orangeMat);
    snoutSideUpper.position.x = 0;
    snoutSideUpper.position.y = 59;
    snoutSideUpper.position.z = -50;

    var snoutSideUpperWhiteGeom = new THREE.BoxGeometry(50, 23, 30);
    var snoutSideUpperWhite = new THREE.Mesh(snoutSideUpperWhiteGeom, whiteMat);
    snoutSideUpperWhite.position.x = 0;
    snoutSideUpperWhite.position.y = 59;
    snoutSideUpperWhite.position.z = -55;



    var snoutFrontGeom = new THREE.BoxGeometry(27, 15, 35);
    // var snoutFrontGeom = new THREE.CylinderGeometry(12, 20, 50);

    var snoutFront = new THREE.Mesh(snoutFrontGeom, whiteMat);
    snoutFront.position.x = 0;
    snoutFront.position.y = 54;
    snoutFront.position.z = -66;
    // snoutFront.rotation.x = 300;


    var noseGeom = new THREE.BoxGeometry(15, 10, 7);

    var nose = new THREE.Mesh(noseGeom, brownMat);
    nose.position.x = 0;
    nose.position.y = 67;
    nose.position.z = -85;





    // Mouth 
    this.mouth = new THREE.Group();
    // var mouthGeom = new THREE.BoxGeometry(11, 9, 23);

    // var leftMouth = new THREE.Mesh(mouthGeom, whiteMat);
    // leftMouth.position.x = 6;
    // leftMouth.position.y = 57;
    // leftMouth.position.z = -76;
    // // leftMouth.rotation.z = -0.8;
    // // leftMouth.rotation.z = -0.7;



    // var rightMouth = new THREE.Mesh(mouthGeom, whiteMat);
    // rightMouth.position.x = -6;
    // rightMouth.position.y = 57;
    // rightMouth.position.z = -76;
    // // rightMouth.rotation.z = 0.8;
    // // rightMouth.rotation.z = 0.8;



    // var mouthFrontGeom = new THREE.BoxGeometry(7, 9, 20);
    // var frontMouth = new THREE.Mesh(mouthFrontGeom, whiteMat);
    // frontMouth.position.x = 0;
    // frontMouth.position.y = 49;
    // frontMouth.position.z = -77;
    // // frontMouth.rotation.z = -0.8;



    // var mouthBackMidGeom = new THREE.BoxGeometry(27, 7, 10);
    // var backMouthMid = new THREE.Mesh(mouthBackMidGeom, blackMat);
    // backMouthMid.position.x = 0;
    // backMouthMid.position.y = 54;
    // backMouthMid.position.z = -80;
    // // backMouthMid.rotation.z = -0.8;


    // var mouthBackSideGeom = new THREE.BoxGeometry(30, 7, 9);
    // var backMouthSide = new THREE.Mesh(mouthBackSideGeom, blackMat);
    // backMouthSide.position.x = 0;
    // backMouthSide.position.y = 55;
    // backMouthSide.position.z = -80;



    var mouthGeom = new THREE.TorusGeometry(6, 1, 5, 10, Math.PI + 0.6);
    // var mouthRight = new THREE.Mesh(mouthGeom, new THREE.MeshBasicMaterial({ color: white }));
    var mouthRight = new THREE.Mesh(mouthGeom, blackMat);
    mouthRight.position.x = -6;
    mouthRight.position.z = -85;
    mouthRight.position.y = 60;
    mouthRight.rotation.z = -Math.PI + 0.1;
    mouthRight.rotation.x = 0.1;
    mouthRight.rotation.y = 600;

    // var mouthLeft = new THREE.Mesh(mouthGeom, new THREE.MeshBasicMaterial({ color: white}));
    var mouthLeft = new THREE.Mesh(mouthGeom, blackMat);
    mouthLeft.position.x = 6;
    mouthLeft.position.z = -85;
    mouthLeft.position.y = 60;
    mouthLeft.rotation.x = 0.1;
    mouthLeft.rotation.z = -Math.PI + 0.1;



    this.snout.add(mouthRight);
    this.snout.add(mouthLeft);
    // this.mouth.add(leftMouth);
    // this.mouth.add(rightMouth);
    // this.mouth.add(frontMouth);
    // this.mouth.add(backMouthMid);
    // this.mouth.add(backMouthSide);

    this.snout.add(snoutSideUpperWhite);
    this.snout.add(snoutSideUpper);
    this.snout.add(snoutFront);
    this.snout.add(snoutBack);
    this.snout.add(nose);
    // this.snout.add(this.mouth);







    // Cheeks
    var innerCheekGeom = new THREE.BoxGeometry(90, 50, 45);
    var innerCheek = new THREE.Mesh(innerCheekGeom, orangeMat);
    innerCheek.position.x = 0;
    innerCheek.position.y = 65;
    innerCheek.position.z = -10;



    var outerCheekGeom = new THREE.BoxGeometry(105, 35, 45);
    var outerCheek = new THREE.Mesh(outerCheekGeom, orangeMat);
    outerCheek.position.x = 0;
    outerCheek.position.y = 65;
    outerCheek.position.z = -10;



    this.head.add(cheekWhite)
    this.head.add(faceWhite)
    this.head.add(headBack)
    this.head.add(headFront)
    this.head.add(headTop)
    this.head.add(headMid)
    this.head.add(snoutBack)
    this.head.add(snoutFront)
    this.head.add(innerCheek)
    this.head.add(outerCheek)
    this.head.add(nose)


    // Ears
    this.ears = new THREE.Group();
    this.leftEar = new THREE.Group();

    var earGeom = new THREE.BoxGeometry(25, 30, 20);
    var innerEarGeom = new THREE.BoxGeometry(10, 20, 2);

    var leftEar = new THREE.Mesh(earGeom, orangeMat);

    leftEar.position.x = 25;
    leftEar.position.y = 115;
    leftEar.position.z = -20;

    // leftEar.rotation.y = -10;
    // leftEar.rotation.z = 9;

    var leftInnerEar = new THREE.Mesh(innerEarGeom, whiteMat);
    leftInnerEar.position.x = 25;
    leftInnerEar.position.y = 115;
    leftInnerEar.position.z = -30;

    this.leftEar.add(leftEar);
    this.leftEar.add(leftInnerEar);
    this.leftEar.position.x = 0;
    // this.leftEar.position.x = -15;
    // this.leftEar.rotation.y = -0.1;
    // this.leftEar.rotation.z = -0.10;


    this.rightEar = new THREE.Group();

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

    this.rightEar.add(rightEar);
    this.rightEar.add(rightInnerEar);
    this.rightEar.position.x = 0;
    // this.rightEar.position.x = 15;
    // this.rightEar.rotation.y = 0.1;
    // this.rightEar.rotation.z = 0.10;



    this.ears.add(this.leftEar);
    this.ears.add(this.rightEar);

    this.ears.position.y = -10;
    this.ears.position.z = 13;



    this.eyes = new THREE.Group()

    // var eyeGeom = new THREE.SphereGeometry(7, 7, 7);
    // var roundEyeGeom = new THREE.SphereGeometry(5, 7, 7);
    // var roundEyeGeom = new THREE.SphereGeometry(5, 5, 5);
    var squareEyeGeom = new THREE.BoxGeometry(8, 8, 5);
    var eyeGlareGeom = new THREE.BoxGeometry(3, 3, 5);
    var eyeBrowGeom = new THREE.BoxGeometry(12, 5, 5);

    
    var leftEye = new THREE.Mesh(squareEyeGeom, blackMat);
    leftEye.position.x = 15;
    leftEye.position.y = 77;
    leftEye.position.z = -53;
    
    var leftEyeGlare = new THREE.Mesh(eyeGlareGeom, whiteMat);
    leftEyeGlare.position.x = 18;
    leftEyeGlare.position.y = 80;
    leftEyeGlare.position.z = -54;
    // leftEyeGlare.rotation.z = -70;
    
    // var leftEyeGlare = new THREE.Mesh(eyeGlareGeom, blackMat);
    //     leftEyeGlare.position.x = 15;
    //     leftEyeGlare.position.y = 80;
    //     leftEyeGlare.position.z = -56;
    //     // leftEyeGlare.rotation.z = -70;
    
    
    var leftEyeBrow = new THREE.Mesh(eyeBrowGeom, whiteMat);
    leftEyeBrow.position.x = 15;
    leftEyeBrow.position.y = 88;
    leftEyeBrow.position.z = -55;
    // leftEyeBrow.rotation.z = -53;
    // leftEyeBrow.rotation.z = 3.2;
    
    
    var rightEye = new THREE.Mesh(squareEyeGeom, blackMat);
    rightEye.position.x = -15;
    rightEye.position.y = 77;
    rightEye.position.z = -53;
    // rightEye.rotation.z = -55;
    // rightEye.scale.setX(1.3)
    
    var rightEyeGlare = new THREE.Mesh(eyeGlareGeom, whiteMat);
    rightEyeGlare.position.x = -12;
    rightEyeGlare.position.y = 80;
    rightEyeGlare.position.z = -54;
    // leftEyeGlare.rotation.z = -70;
    
    
    var rightEyeBrow = new THREE.Mesh(eyeBrowGeom, whiteMat);
    rightEyeBrow.position.x = -15;
    rightEyeBrow.position.y = 88;
    rightEyeBrow.position.z = -55;
    // rightEyeBrow.rotation.z = 53;
    // rightEyeBrow.rotation.z = -3.2;
    
    this.eyeGlares = new THREE.Group();
    this.eyeGlares.add(leftEyeGlare)
    this.eyeGlares.add(rightEyeGlare)
    
    this.eyes.add(leftEye);
    this.eyes.add(rightEye);
    this.eyes.add(this.eyeGlares)
    this.eyes.position.z = -2
    
    
    
    // var box = new THREE.Box3();
    // leftEye.geometry.computeBoundingBox();
    // box.copy(leftEye.geometry.boundingBox).applyMatrix4(leftEye.matrixWorld);
    
    
    
    
    
    
    
    
    
    this.head.add(leftEyeBrow);
    this.head.add(rightEyeBrow);

    this.head.add(this.ears)
    this.head.add(this.head)
    this.head.add(this.eyes)
    this.head.add(this.snout)
    // this.head.add(mouth)
    // this.head.add(innerCheek)
    // this.head.add(outerCheek)
    // this.head.add(rightCheek)
    // this.head.add(leftEar)
    // this.head.add(leftInnerEar)
    // this.head.add(rightEar)
    // this.head.add(rightInnerEar)
    // this.head.add(faceBack)
    // this.head.add(faceMid1)
    // this.head.add(faceFront)
    // this.head.add(leftEye)
    // this.head.add(rightEye)
    // this.head.add(leftEyeGlare)
    // this.head.add(rightEyeGlare)
    // this.head.add(snoutBack)
    // this.head.add(snoutFront)
    // this.head.add(nose)


    this.head.position.y = 15
    this.head.position.z = 10
    this.head.scale.y = 1.1;











    // Body
    this.body = new THREE.Group();
    this.torso = new THREE.Group();

    // Main body
    var bodyChestGeom = new THREE.BoxGeometry(45, 75, 20);
    var bodyChest = new THREE.Mesh(bodyChestGeom, whiteMat)
    bodyChest.position.x = 0;
    bodyChest.position.y = 35;
    bodyChest.position.z = -18;

    var chestTopGeom = new THREE.BoxGeometry(30, 60, 20);
    var chestTop = new THREE.Mesh(chestTopGeom, whiteMat)
    chestTop.position.x = 0;
    chestTop.position.y = 40;
    chestTop.position.z = -25;


    var bodyFrontGeom = new THREE.BoxGeometry(60, 65, 70);
    var bodyFront = new THREE.Mesh(bodyFrontGeom, orangeMat)
    bodyFront.position.x = 0;
    bodyFront.position.y = 35;
    bodyFront.position.z = 15;


    var bodyMidGeom = new THREE.BoxGeometry(75, 55, 75);
    var bodyMid = new THREE.Mesh(bodyMidGeom, orangeMat);
    bodyMid.position.x = 0;
    bodyMid.position.y = 12;
    bodyMid.position.z = 35;



    var bodyBackGeom = new THREE.BoxGeometry(80, 80, 60);
    var bodyBack = new THREE.Mesh(bodyBackGeom, orangeMat);
    bodyBack.position.x = 0;
    bodyBack.position.y = -20;
    bodyBack.position.z = 60;


    var bodyBumGeom = new THREE.BoxGeometry(70, 60, 20);
    var bodyBum = new THREE.Mesh(bodyBumGeom, orangeMat);
    bodyBum.position.x = 0;
    bodyBum.position.y = -30;
    bodyBum.position.z = 95;


    var bumPatternGeom = new THREE.BoxGeometry(40, 45, 13);
    var bumPattern = new THREE.Mesh(bumPatternGeom, whiteMat);
    bumPattern.position.x = 0;
    bumPattern.position.y = -38;
    bumPattern.position.z = 110;

    var tailGeom = new THREE.BoxGeometry(15, 20, 20);
    var tail = new THREE.Mesh(tailGeom, orangeMat);
    tail.position.x = 0;
    tail.position.y = -22;
    tail.position.z = 110;


    var bellyGeom = new THREE.BoxGeometry(35, 20, 2);
    var belly = new THREE.Mesh(bellyGeom, whiteMat)
    belly.position.x = 0;
    belly.position.y = -5;
    belly.position.z = -5;


    this.torso.add(chestTop);
    this.torso.add(bodyChest);
    this.torso.add(bodyFront);
    this.torso.add(bodyMid);
    this.torso.add(bodyBack);
    this.torso.add(belly);
    this.torso.add(bodyBum);
    this.torso.add(bumPattern);
    this.torso.add(tail);






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
    this.body.add(this.torso)
    this.body.add(this.leftHindLeg);
    this.body.add(this.rightHindLeg);
    this.body.add(this.leftFrontLeg);
    this.body.add(this.rightFrontLeg);




    // Add into scene
    scene.add(this.body);
    scene.add(this.head);

}















