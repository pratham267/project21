var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
 speed=random(200,321);
 thickness=random(22,83)

 bullet= createSprite(50,200,50,50);
  wall=createSprite(1500,200,thickness,height/2);
  bullet.velocityX=speed;
 bullet.collide(wall);
}
function draw() {
  background(255,255,255);
  wall.shapeColor=color(80,80,80);  
  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function hascollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}