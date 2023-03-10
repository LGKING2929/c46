var bg,bgimg;
var bottomground; 
var topground;
var balloon,balloonimg
var obstacletop,obstop1,obsop2;
var obstaclebottom,obsbottom1,obsbottom2,obsbottom3;
function preload () {
  bgimg=loadImage("assets/bg.png")
  balloonimg=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
  obstop1=loadImage("assets/obsTop1.png")
  obstop2=loadImage("assets/obsTop2.png")
  obsbottom1=loadImage("assets/obsBottom1.png")
  obsbottom2=loadImage("assets/obsBottom2.png")
  obsbottom3=loadImage("assets/obsBottom3.png")
}
function setup () {
  createCanvas(windowWidth,windowHeight)
  bg=createSprite(width/2,height/2,windowWidth,windowHeight)
  bg.addImage(bgimg)
  bg.scale=1.3
  //creating top and bottom ground
  bottomground=createSprite(200,390,800,20)
  topground=createSprite(200,10,800,20)
  bottomground.visible=false
  topground.visible=false
  //creating balloon
  balloon=createSprite(100,290,30,30)
  balloon.addAnimation("ballon",balloonimg)
  balloon.scale=0.9
}

function draw () {
  background("black")
  //making the hot air balloon jump
  if (keyDown("space")) {
  balloon.velocityY=-6
  }
  //creating gravity
  balloon.velocityY=balloon.velocityY+2
  //calling function for obstop
  spawnObstaclesTop()
  spawnObstaclesBottom()
    drawSprites();
}
  //creating top obstacle
  function spawnObstaclesTop() {
    if (frameCount%60==0) {
      obstacletop=createSprite(1500,50,40,50)
      obstacletop.velocityX= -4  
      obstacletop.scale=0.1
      obstacletop.lifetime=350    
      //randown y pos for obs
      obstacletop.y=Math.round(random(10,100))
      //generate randowm top obs
      var r=Math.round(random(1,2))
      switch(r){
        case 1:obstacletop.addImage(obstop1)
               break;
        case 2:obstacletop.addImage(obstop2)  
              break;
        default:break;      
      }
    } 
  }
  //creating bottom obstacle
  function spawnObstaclesBottom() {
    if (frameCount%60==0) {
      obstaclebottom=createSprite(1300,600,40,50)
      obstaclebottom.velocityX= -4  
      obstaclebottom.scale=0.2
      obstaclebottom.lifetime=350  
      //randowm pos
      obstaclebottom.y=Math.round(random(600,700))
      //generate randowm botttom obs
      var r=Math.round(random(1,3))
      switch(r){
        case 1:obstaclebottom.addImage(obsbottom1)
               break;
        case 2:obstaclebottom.addImage(obsbottom2)  
              break;
        case 3:obstaclebottom .addImage(obsbottom3) 
              break;     
        default:break;      
      }
    }
  }