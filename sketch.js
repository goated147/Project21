var car,wall;
var speed,weight,bullet,height;
function setup() {
  createCanvas(1600,400);
  speed=random(223,90)
  weight=random(30,52)
  thickness=random(223,321)
  bullet=createSprite(50,200,50,50);
  wall= createSprite(800,200,thickness,height/2);
  wall.shapeColor=("gray");
}

function draw() {
  background("white")
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}