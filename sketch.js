var bullet,wall;
var speed,weight,thickness;

function setup() {

  createCanvas(1600,400);

speed=random(223,321);

thickness=random(22,83)

weidth=random(30,52);

  bullet=createSprite(50,200,50,10);
 bullet.shapeColor="red";
bullet.velocityX=speed;

  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor="white";
}

function draw() {
  background("lightblue"); 
  var deformation;
if (wall.x-bullet.x<(bullet.width+wall.width)/2) 
{
 bullet.velocityX=0
  deformation=0.5 * weidth * speed * speed/(thickness*thickness*thickness)
if (deformation>10) {
  wall.shapeColor=color(255,0,0)
}
   if (deformation<10) {
     wall.shapeColor=color(0,255,0);
   }
}
 // background("lightblue");  
  drawSprites();
}