//Creating variable for hider1(PLAYING CHARACTER).
var hider1;

//Creating variables for hide2 - hider5(NON - PLAYING CHARACTER).
var hider2, hider3, hider4, hider5;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, 
    wall12, wall13, wall14, wall15, wall16;

// gameState is set as start initially then moves to PLAY then either WIN or LOSE gamestates.
var gameState = "START";

function preload() {
  //Adding image for the start button.
  startButtonImg = loadImage("sprite_0.png");
  cageImg = loadImage("Cage.jpg");
  goldImg = loadImage("gold.jpg");
  coinImg = loadImage("coin.png");
}

function setup() {
  //Create canvas with width - 900, height - 720
  createCanvas(900,720);

  // START BUTTON
  startButton = createSprite(400,400)
  startButton.addImage("startButton",startButtonImg);
  startButton.scale = 0.3

  // PLAYERS
  
  // PC
  // Main hider
  hider1 = createSprite(300, 400, 20, 20);
  hider1.shapeColor = color("purple");

  // NPC
  // Seeker
  seeker = createSprite(400,300,20,20);
  seeker.shapeColor = color("red");

  // Hiders
  hider2 = createSprite(500, 400, 20, 20);
  hider2.shapeColor = color("blue");

  hider3 = createSprite(300, 500, 20, 20);
  hider3.shapeColor = color("blue");

  hider4 = createSprite(400, 500, 20, 20);
  hider4.shapeColor = color("blue");
  
  hider5 = createSprite(500, 500, 20, 20);
  hider5.shapeColor = color("blue");
  
  // Hider's velocity x and y will be 2.(So they move randomly)
  hider2.velocityX = 2;
  hider2.velocityY = 2;

  hider3.velocityX = 2;
  hider3.velocityY = 2;

  hider4.velocityX = 2;
  hider4.velocityY = 2;
  
  hider5.velocityX = 2;
  hider5.velocityY = 2;

  // CAGE OBJECT
  cage1 = createSprite(200, 200, 10,10);
  cage2 = createSprite(200, 200, 10,10);
  cage3 = createSprite(200, 200, 10,10);
  cage4 = createSprite(200, 200, 10,10);
  cage5 = createSprite(200, 200, 10,10);

  cage1.addImage("cageImg", cageImg);
  cage1.scale = 0.1;
  cage1.visible = false;

  cage2.addImage("cageImg", cageImg);
  cage2.scale = 0.1;
  cage2.visible = false;

  cage3.addImage("cageImg", cageImg);
  cage3.scale = 0.1;
  cage3.visible = false;

  cage4.addImage("cageImg", cageImg);
  cage4.scale = 0.1;
  cage4.visible = false;

  cage5.addImage("cageImg", cageImg);
  cage5.scale = 0.1;
  cage5.visible = false;
  
  // MAZE
  // Edges
  edge1 = createSprite(450,10,900,20);
  edge1.shapeColor = color("orange");

  edge2 = createSprite(10,360,20,720);
  edge2.shapeColor = color("orange");
  
  edge3 = createSprite(450,710,900,20);
  edge3.shapeColor = color("orange");
  
  edge4 = createSprite(890,360,20,720);
  edge4.shapeColor = color("orange");

  // Horizontal or vertical lines.
  wall1 = createSprite(60,150,20,200);
  wall1.shapeColor = color("black");

  wall2 = createSprite(400,60,300,20)
  wall2.shapeColor = color("black");

  wall3 = createSprite(300,150,150,20);
  wall3.shapeColor = color("black");

  wall4 = createSprite(460,240,120,20);
  wall4.shapeColor = color("black");

  wall5 = createSprite(200,320,20,150);
  wall5.shapeColor = color("black");

  wall6 = createSprite(160,390,100,20);
  wall6.shapeColor = color("black");

  wall7 = createSprite(110,455,20,150);
  wall7.shapeColor = color("black");

  wall8 = createSprite(200,600,150,20)
  wall8.shapeColor = color("black");

  wall9 = createSprite(400,500,300,20)
  wall9.shapeColor = color("black");

  wall10 = createSprite(400,570,20,150)
  wall10.shapeColor = color("black");

  wall11 = createSprite(620,650,20,100)
  wall11.shapeColor = color("black");


  //Slant lines
  wall12 = createSprite(740,530,20,100);
  wall12.shapeColor = color("black");
  wall12.rotation = 45;

  wall13 = createSprite(750,612,20,150);
  wall13.shapeColor = color("black");
  wall13.rotation = -45;

  wall14 = createSprite(660,260,20,200);
  wall14.shapeColor = color("black");
  wall14.rotation = -45;

  wall15 = createSprite(740,120,20,100);
  wall15.shapeColor = color("black");
  wall15.rotation = 45;

  wall16 = createSprite(715,166,20,50);
  wall16.shapeColor = color("black");
  wall16.rotation = -45;
} 

function draw() {
  // Background color is green.
  background("green");  

  cage1.x = hider1.x;
  cage1.y = hider1.y;

  cage2.x = hider2.x;
  cage2.y = hider2.y;

  cage3.x = hider3.x;
  cage3.y = hider3.y;

  cage4.x = hider4.x;
  cage4.y = hider4.y;

  cage5.x = hider5.x;
  cage5.y = hider5.y;

  if(mousePressedOver(startButton)){
    gameState = "PLAY";
    startButton.destroy();
  }

  if(gameState === "PLAY"){
    // If the arrow keys are pressed then they move in their respective directions.
    if(keyDown("UP_ARROW")){
      hider1.y-= 4;
    }

    if(keyDown("DOWN_ARROW")){
      hider1.y+= 4;
    }

    if(keyDown("RIGHT_ARROW")){
      hider1.x+= 4;
    }

    if(keyDown("LEFT_ARROW")){
      hider1.x-= 4;
    }

    if(seeker.isTouching(hider1)){
      gameState = "END"
    }

    if(seeker.isTouching(hider2)){
      cage2.visible = true;
      hider2.velocityX = 0;
      hider2.velocityY = 0;
    }
    
    if(seeker.isTouching(hider3)){
      cage2.visible = true;
    }

    if(seeker.isTouching(hider4)){
      cage2.visible = true;
    }

    if(seeker.isTouching(hider5)){
      cage2.visible = true;
    }
  }

  if(gameState === "END"){
    
  }

  // Code for the hiders and seekers to bounce off
  hider1.bounceOff(wall1);
  hider1.bounceOff(wall2);
  hider1.bounceOff(wall3);
  hider1.bounceOff(wall4);
  hider1.bounceOff(wall5);
  hider1.bounceOff(wall6);
  hider1.bounceOff(wall7);
  hider1.bounceOff(wall8);
  hider1.bounceOff(wall9);
  hider1.bounceOff(wall10);
  hider1.bounceOff(wall11);
  hider1.bounceOff(wall12);
  hider1.bounceOff(wall13);
  hider1.bounceOff(wall14);
  hider1.bounceOff(wall15);
  hider1.bounceOff(wall16);

  // hider1.bounceOff(hider2);
  // hider1.bounceOff(hider3);
  // hider1.bounceOff(hider4);
  // hider1.bounceOff(hider5);

  hider1.bounceOff(edge1);
  hider1.bounceOff(edge2);
  hider1.bounceOff(edge3);
  hider1.bounceOff(edge4);

  hider2.bounceOff(wall1);
  hider2.bounceOff(wall2);
  hider2.bounceOff(wall3);
  hider2.bounceOff(wall4);
  hider2.bounceOff(wall5);
  hider2.bounceOff(wall6);  
  hider2.bounceOff(wall7);
  hider2.bounceOff(wall8);
  hider2.bounceOff(wall9);
  hider2.bounceOff(wall10);
  hider2.bounceOff(wall11);
  hider2.bounceOff(wall12);
  hider2.bounceOff(wall13);
  hider2.bounceOff(wall14);
  hider2.bounceOff(wall15);
  hider2.bounceOff(wall16);

  // hider2.bounceOff(hider1);
  // hider2.bounceOff(hider3);
  // hider2.bounceOff(hider4);
  // hider2.bounceOff(hider5);

  hider2.bounceOff(edge1);
  hider2.bounceOff(edge2);
  hider2.bounceOff(edge3);
  hider2.bounceOff(edge4);


  hider3.bounceOff(wall1);
  hider3.bounceOff(wall2);
  hider3.bounceOff(wall3);
  hider3.bounceOff(wall4);
  hider3.bounceOff(wall5);
  hider3.bounceOff(wall6);  
  hider3.bounceOff(wall7);
  hider3.bounceOff(wall8);
  hider3.bounceOff(wall9);
  hider3.bounceOff(wall10);
  hider3.bounceOff(wall11);
  hider3.bounceOff(wall12);
  hider3.bounceOff(wall13);
  hider3.bounceOff(wall14);
  hider3.bounceOff(wall15);
  hider3.bounceOff(wall16);

  // hider3.bounceOff(hider1);
  // hider3.bounceOff(hider2);
  // hider3.bounceOff(hider4);
  // hider3.bounceOff(hider5);

  hider3.bounceOff(edge1);
  hider3.bounceOff(edge2);
  hider3.bounceOff(edge3);
  hider3.bounceOff(edge4);


  hider4.bounceOff(wall1);
  hider4.bounceOff(wall2);
  hider4.bounceOff(wall3);
  hider4.bounceOff(wall4);
  hider4.bounceOff(wall5);
  hider4.bounceOff(wall6);  
  hider4.bounceOff(wall7);
  hider4.bounceOff(wall8);
  hider4.bounceOff(wall9);
  hider4.bounceOff(wall10);
  hider4.bounceOff(wall11);
  hider4.bounceOff(wall12);
  hider4.bounceOff(wall13);
  hider4.bounceOff(wall14);
  hider4.bounceOff(wall15);
  hider4.bounceOff(wall16);

  // hider4.bounceOff(hider1);
  // hider4.bounceOff(hider2);
  // hider4.bounceOff(hider3);
  // hider4.bounceOff(hider5);

  hider4.bounceOff(edge1);
  hider4.bounceOff(edge2);
  hider4.bounceOff(edge3);
  hider4.bounceOff(edge4);


  hider5.bounceOff(wall1);
  hider5.bounceOff(wall2);
  hider5.bounceOff(wall3);
  hider5.bounceOff(wall4);
  hider5.bounceOff(wall5);
  hider5.bounceOff(wall6);  
  hider5.bounceOff(wall7);
  hider5.bounceOff(wall8);
  hider5.bounceOff(wall9);
  hider5.bounceOff(wall10);
  hider5.bounceOff(wall11);
  hider5.bounceOff(wall12);
  hider5.bounceOff(wall13);
  hider5.bounceOff(wall14);
  hider5.bounceOff(wall15);
  hider5.bounceOff(wall16);

  // hider5.bounceOff(hider1);
  // hider5.bounceOff(hider2);
  // hider5.bounceOff(hider3);
  // hider5.bounceOff(hider4);

  hider5.bounceOff(edge1);
  hider5.bounceOff(edge2);
  hider5.bounceOff(edge3);
  hider5.bounceOff(edge4);

  drawSprites();

}
