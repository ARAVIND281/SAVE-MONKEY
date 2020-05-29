var canvas;
var form,player1;
var gameState = 0;
var player,player_img;
var track;
var carImg1,carImg2,carimg3,carImg4,carImg45;
var car,rand;
var carsGroup;
var Iwall1,Iwall2;
var score = 0;
var posY = -5000,posX = -500;
var lev = 0;

function preload() {
    intoSound = loadSound('audio/intoaudio.mp3');
    player_img = loadImage("images/player.png");
  carImg1 = loadImage("images/car1.png");
  carImg2 = loadImage("images/car2.jpg");
  carImg3 = loadImage("images/car3.jpg");
  carImg4 = loadImage("images/car4.jpg");
  carImg5 = loadImage("images/car5.jpg");
  track = loadImage("images/track.png");

}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    form = new Form();
    player1 = new Player();
    player = createSprite(displayWidth/2,2300,40,40);
  player.addImage(player_img);
  player.scale = 2;

  Iwall1 = createSprite(198,displayHeight/2,40,displayHeight*8);
  Iwall2 = createSprite(1260,displayHeight/2,40,displayHeight*8);

  carsGroup = new Group();
  if(frameCount%40===0){
    car = createSprite(posX,posY,30,30);
  }


}

function draw() {

    form.display();

    if(lev === 1){
        level1();

    }

    drawSprites();


} 

function level1(){
    background("#D8C7A9");
  image(track, 0,-displayHeight*6,displayWidth+100, displayHeight*9);
  camera.position.x = displayWidth/2;
  camera.position.y = player.y-100; 

  if(gameState===1){
    fill("brown");
    noStroke();
    textSize(40);
    text("You Lose!!!",displayWidth/4,player.y-300);
  }

  fill("brown");
  noStroke();
  textSize(20);
  text("Your Score: "+ score,50,player.y-200);

  Iwall1.visible = false;
  Iwall2.visible = false;
  player.collide(Iwall1);
  player.collide(Iwall2);
  player.velocityY = -10;

  if(keyDown(LEFT_ARROW)){
    player.x -= 10;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x += 10;
  }
  if(player.y === -4470){
    gameState = 2;
    player.velocityY = 0;
    carsGroup.setVelocityXEach(0);
    fill("brown");
    noStroke();
    textSize(40);
    text("You Win!!!",displayWidth/4,player.y-300);

  }
  if(frameCount % 50 === 0 && gameState === 0){
    score += 5;
  }

  if(frameCount % 50 === 0 && gameState === 0){
    rand = random(220,1255);
    car.y = player.y-800;
    car.x = rand;
    car.depth = player.depth;
    car.collide(Iwall1);
    car.collide(Iwall2);
    num = Math.round(random(1,1));

    switch(num) {
      case 1: car.addImage(carImg1);
              break;
      case 2: car.addImage(carImg2);
              break;
      case 3: car.addImage(carImg3);
              break;
      case 4: car.addImage(carImg4);
              break;
      case 5: car.addImage(carImg5);
              break;
      default: break;
    }

    car.scale = 2;
    car.velocityY = 10;
    carsGroup.add(car);
    car.lifetime = -100;
  }
  if(player.isTouching(car)){
    gameState = 1;
    player.destroy();
    carsGroup.destroyEach();
    score -= 5;
  }

}