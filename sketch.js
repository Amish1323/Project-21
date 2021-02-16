var bullet,wall,thickness;
var speed,weight;



function setup() {
  createCanvas(1400,400);

thickness = random(22,83)

  bullet  = createSprite(50,200,50,10);
  wall = createSprite(1200,200,thickness,100);
 wall.shapeColor = "white";
  

  speed = random(221,321);
  weight = random(30,52);

  bullet.velocityX = speed;
}

function draw() {
  background(1);  

   

  if(hasCollided(bullet,wall)){
  
    bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10){
    wall.shapeColor = color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor = color(0,255,0);
  }
  }


  drawSprites();
   
}

 function hasCollided(bullet1,wall1)

{
   bulletRigtEdge =bullet1.x +bullet1.width;
  wallLeftEdge=wall1.x;
  if(bulletRigtEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}