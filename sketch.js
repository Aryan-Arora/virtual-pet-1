//Create variables here
var dog;
var dog1;
var happydog;
var foodStock;
var foodS;
var database;
function preload()
{
  //load images here
  dog1=loadImage("Dog.png")
  happydog=loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(400,200,10,10)
  dog.addImage(dog1)
  dog.scale=0.2
  database=firebase.database();
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
  drawSprites();
  stroke(255)
  text("Food Remaining: "+foodS,10,10)
  
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happydog)

}
}

function readStock(data){
foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;

  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}



