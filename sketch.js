var fr,mr
 var go1,go2,go3,go4 
function setup() {
  createCanvas(1200,800);
  fr = createSprite(200, 200, 50, 80);
  mr = createSprite(400,200,80,30);
  fr.shapeColor = "green";
  mr.shapeColor = "green";
  go1 = createSprite (100,100,50,50);
  go1.shapeColor = "green";
  go2 = createSprite (200,100,50,50);
  go2.shapeColor = "green";
  go3 = createSprite (300,100,50,50);
  go3.shapeColor = "green";
  go4 = createSprite (400,100,50,50);
  go4.shapeColor = "green";
} 

function draw() {
  background(0);
  mr.x = World.mouseX
  mr.y = World.mouseY
  if(isTouching(mr,go1)) {
  mr.shapeColor = "red";
  go1.shapeColor = "red";
  }
  else {
    mr.shapeColor = "green";
    go1.shapeColor = "green";
  }
  drawSprites();
}