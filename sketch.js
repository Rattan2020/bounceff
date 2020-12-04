var fixedRect, movingRect;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(0, 0, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;
  

}

function draw() {
  background(0,0,0);  


bounceOff(fixedRect,movingRect);
  
  drawSprites();
}

