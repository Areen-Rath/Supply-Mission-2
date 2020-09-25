//Declaring constants for engine, world and bodies.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Declaring variables for engine and world to access it easily.
var myEngine, myWorld;

//Declaring variables for sprites, their images, bodies and options for package.
var helicopter, helicopterImage;
var package, packageImage, packageBody, package_options;
var ground;
var bin;

function preload(){

    //Loading helicopter and package images.
    helicopterImage = loadImage("helicopter.png");
    packageImage = loadImage("package.png");

}

function setup(){

    //Creating canvas.
    createCanvas(800, 600);

    //Accessing the engine and world from the engine and world variables.
    myEngine = Engine.create();
    myWorld = myEngine.world;

    //Creating helicopter, adding its image and making it small.
    helicopter = createSprite(400, 100, 50, 20);
    helicopter.addImage(helicopterImage);
    helicopter.scale = 0.75;

    //Preventing the package to fall from the starting.
    package_options = {
      isStatic : true, restitution : 0.5
    }

    //Creating package body, adding its options and adding it to the world.
    packageBody = Bodies.circle(400, 150, 25, package_options);
    World.add(myWorld, packageBody);

    //Creating package, adding its image, making it small, and hiding it.
    package = createSprite(400, 200, 150, 50);
    package.addImage(packageImage);
    package.scale = 0.2;
    package.visible = false;
    
    //Creating ground.
    ground = new Ground(400, 580, 800, 15);

    //Creating bin.
    bin = new Bin(400, 565, 200, 20);

    console.log(packageBody);

}

function draw(){
  
    //Hiding multiple sprites and bodies.
    background(0);

    //Using the laws of physics.
    Engine.update(myEngine);

    //Drawing the ground.
    ground.display();

    //Drawing the bin.
    bin.display();

    //Keeping the x and y values of package and package body the same.
    package.x = packageBody.position.x;
    package.y = packageBody.position.y;

    //Controlling the helicopter with left and right arrow keys.
    if(keyDown("LEFT_ARROW")){
      helicopter.x = helicopter.x - 5;
      Matter.Body.translate(packageBody, {x : -5, y : 0});
    }

    if(keyDown("RIGHT_ARROW")){
      helicopter.x = helicopter.x + 5;
      Matter.Body.translate(packageBody, {x : 5, y : 0});
    }

    //Dropping the package when down arrow key is pressed.
    if(keyDown("DOWN_ARROW")){
      package.visible = true;
      Matter.Body.setStatic(packageBody, false);
    }

    //Drawing the sprites.
    drawSprites();

}