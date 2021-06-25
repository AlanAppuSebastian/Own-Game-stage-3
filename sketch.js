var waiter,waiterimg;
var manager,managerimg;
var cleaner,cleanerimg;
var bgimg;
var cloth,clothimg;
var knife,knifeimg;
var bag,bagimg;
var rain_bgimg;
var Call;
var gameState="intro";


function preload(){

waiterimg=loadImage("ASSETS/WAITER.png");
managerimg=loadImage("ASSETS/MANAGER.png");
cleanerimg=loadImage("ASSETS/CLEANER.png");
clothimg=loadImage("ASSETS/cloth.jpg");
knifeimg=loadImage("ASSETS/KNIFE.png");
bagimg=loadImage("ASSETS/BAG.jpg");
rain_bgimg=loadImage("ASSETS/RAIN.jpg");
bgimg=loadImage("ASSETS/bg.jpg");
Call=loadSound("ASSETS/CALL.mp3");
}

function setup(){
  createCanvas(1200,800);
}


function draw(){

if(gameState==="intro"){
bg=createSprite(600,400,1200,800);
bg.shapeColor="black";
drawSprites(); 
textSize(20);
fill("white")
textFont("Agency FB")
text("Are you a detective? Do you like to solve cases?Then you are welcome to help dicetitive Rahul with a case..",200,80);
text("A celebrity has been murdered in his hotel room, and Money has been robbed .help Rahul to find clues and solve the case",200,100);
text("There are three suspects -",200,200);
text("•	RISHI(Hotel room cleaner, 40 inch, left hander )",200,250)
text("•	DEVA(Manager, 40 inch, Right hander)",200,300)
text("•	SURYA(Waiter, orange T-shirt,40 inch, Left hander)",200,350)
textSize(30)
fill("red")
textFont("Castellar")
text("You need to find out who is the killer.",200,450);
textFont("Castellar")
text("PRESS ENTER TO CONTINUE",200,550);
if(keyDown("enter")){
gameState="Call";
}
}

if(gameState==="Call"){

bg.addImage(rain_bgimg);
Call.play();
Call.Stop();

}

}


