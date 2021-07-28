var path;
var runner;
var rb;
var lb;
function preload(){
  //pre-load images
  path=loadImage("path.png")
  runner=loadAnimation("Runner-1.png","Runner-2.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road=createSprite(200,200,60,70)
  road.addImage(path)
  road.velocityY = 4

  boy = createSprite(200,300);
  boy.addAnimation("runner",runner)
  boy.scale = 0.05

  rb = createSprite(390,200,10,400);
  rb.visible = false;

  lb = createSprite(10,200,10,400);
  lb.visible = false;
}

function draw() {
  background(0);
 // console.log(road.y)

if(road.y > 400){

  road.y = road.height / 4

  
}
boy.x = World.mouseX
boy.collide(lb)
boy.collide(rb)


 drawSprites();
}
