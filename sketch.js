var bullet ,wall

var speed,weight,thikness


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  bullet = createSprite(20, 200, 20, 7);
  bullet.velocityX=speed;
  bullet.shapeColor=color(225)
 bullet.weight=weight;
 thickness=random(35,60);

 wall = createSprite(1300,200,thikness,height/2);   
  wall.shapeColor=color("White");


};

function draw() {
  background("Black");  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed* speed/(thickness*thickness*thickness)
    if(damage < 10 ){
      wall.shapeColor=color(255,0,0);
    }
    if(damage>10){
      wall.shapeColor=color(0,255,0);
      
    }
    
    
    
    }
// if(wall.x-bullet.x < (bullet.width + wall.width)/2){
//   bullet.velocityX=0;
//   var damage=0.5*weight*speed*speed/thickness*thickness*thickness

  
//   if(damage < 10 ){
//     wall.shapeColor=color("red");
//   }
//   if(damage>10){
//     wall.shapeColor=color("green");
//   }
 
// }
// hasCollided();


  drawSprites();
  }
 function hasCollided(bullet, wall)
{
bulletRightEdge=bullet.x + bullet.width;
wallLeftEdge=wall.x
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false


// if(hasCollided(bullet,wall)){
// bullet.velocityX=0;
// var damage = 0.5*weight*speed* speed/(thickness*thikness*thikness)
// if(damage < 10 ){
//   wall.shapeColor=color(255,0,0);
// }
// if(damage>10){
//   wall.shapeColor=color(0,255,0);
// }



// }
}