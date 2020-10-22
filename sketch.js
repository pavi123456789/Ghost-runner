
var tower, towerImg ;
var door, doorImg, doorsGroup ;
var climber, climberGroup,  climberImg ;
var ghost,ghostImg ;
var block, blockGroup; 
var gameState="play";
var spooky ;

function preload() {
  
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  
  doorsGroup=new Group();
  
  climberImg=loadImage("climber.png");
  
  climberGroup=new Group();
  
  ghostImg=loadImage("ghost-standing.png");
  
  blockGroup=new Group();
  
  spooky=loadSound("spooky.wav");
  
}


function setup() {
  createCanvas(600,600);
  
  tower=createSprite(270,300);
  tower.addImage("tower", towerImg);
  tower.velocityY=+1;
  
  ghost=createSprite(300,100,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale=0.3;
  

  
  
  
}

function draw() {
  background("white");
  
  if (gameState==="play") {
  
    //spooky.play();
    
  if (tower.y>400) {
    tower.y=300;
  }
  
  spawnDoors();
  
  if (keyDown("space")) {
    ghost.velocityY=-5;
         
  }
  
  if (keyDown("left")) {
    ghost.x=ghost.x-5;
   }
  
  if (keyDown("right")) {
    ghost.x=ghost.x+5;
      }
  
  ghost.velocityY=ghost.velocityY+0.5;
  
  if (climberGroup.isTouching(ghost)) {
       ghost.velocityY=0;
    }
  
  if(blockGroup.isTouching(ghost) || ghost.y>600 ) {
    ghost.destroy();
    gameState="over";
  }
  
  
  drawSprites();
  }
  
  if (gameState==="end") {
    strock("green");
    fill("green");
    textsize(50);
    text ("Game Over", 250, 250);
    
  }
}

function spawnDoors() {
  if (frameCount%250===0) {
    door=createSprite(200,-50);
    climber=createSprite(200,10);
    block=createSprite(200,15);
    
    block.visible=false;
    
    
    door.addImage("door", doorImg);
    climber.addImage("climber", climberImg);
    
    door.x=Math.round(random(100,400));
    climber.x=door.x;
    block.x=door.x;
    
    block.width=climber.width;
    block.height=2;
    
    door.velocityY=1;
    climber.velocityY=1;
    block.velocityY=1;
    
    ghost.depth=door.depth;
    ghost.depth+=1
    
    door.lifetime=900;
    climber.lifetime=900;
    block.lifetime=900;
    
    block.debug=true;
    
    doorsGroup.add(door);
    climberGroup.add(climber);
    blockGroup.add(block);
  }
  
  
  
}







