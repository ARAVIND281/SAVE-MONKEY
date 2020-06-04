var canvas;
var form, player1;
var gameState = 0;
var maingameState = 1;
var player, player_img;
var track;
var carImg1, carImg2, carimg3, carImg4, carImg45;
var car, rand;
var carsGroup;
var Iwall1, Iwall2;
var score = 0;
var posY = -5000, posX = -500;
var lev = 0;
var backgroundImage;
var enemyGroup;
var BulletGroup;
var back, back_img;
var playerPaddle, playerPaddle_img;
var count = 0;
var enemy, enemy_img;
var pos2Y = -5000, pos2X = -500;
var score2 = 0, rand2;
var Iwall2_1, Iwall2_2;
var test1 = 0;
var laserSound;
var bullet;
var play;
var backgroundImage3;
var bg = 0, bg_img;
var monkey, monkey_img;
var count3 = 0;
var poisonbanana, poisonbanana_img;
var pos3Y = -5000, pos3X = -500;
var score3 = 0, rand3;
var Iwall3_1, Iwall3_2;
var banana, banana_img;
var ran3d;
var check;
var background_img;
var lbg;
var mainSound;
var soundtest = 1;



function preload() {
  intoSound = loadSound('audio/intoaudio.mp3');
  inbo = loadImage("image/inbo.png");
  player_img = loadImage("images/player.png");
  carImg1 = loadImage("images/car1.png");
  carImg2 = loadImage("images/car2.jpg");
  carImg3 = loadImage("images/car3.jpg");
  carImg4 = loadImage("images/car4.jpg");
  carImg5 = loadImage("images/car5.jpg");
  track = loadImage("images/track.png");
  back_img = loadImage("image2/back.png");
  playerPaddle_img = loadImage("image2/gun90.png");
  enemy_img = loadImage("image2/enemy.png");
  laserSound = loadSound('laser.ogg');
  backgroundImage3 = loadImage("image3/back.png");
  monkey_img = loadImage("image3/player.png");
  poisonbanana_img = loadImage("image3/banana.png");
  banana_img = loadImage("image3/banana1.png");
  background_img = loadImage("image/bg3.png");
  lbg = loadImage("image/lbg.png");
  mainSound = loadSound("audio/mainsound.mp3");

}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  form = new Form();
  player1 = new Player();
  player = createSprite(displayWidth / 2, 2300, 40, 40);
  player.addImage(player_img);
  player.scale = 2;

  Iwall1 = createSprite(displayWidth - 995, displayHeight / 2, 40, displayHeight * 15);
  Iwall2 = createSprite(displayWidth - 200, displayHeight / 2, 40, displayHeight * 15);


  carsGroup = new Group();
  if (frameCount % 40 === 0) {
    car = createSprite(posX, posY, 30, 30);
  }

  playerPaddle = createSprite(displayWidth / 2, 2300, 40, 40);
  playerPaddle.addImage(playerPaddle_img);
  playerPaddle.scale = 2;

  Iwall2_1 = createSprite(displayWidth - 995, displayHeight / 2, 40, displayHeight * 15);
  Iwall2_2 = createSprite(displayWidth - 200, displayHeight / 2, 40, displayHeight * 15);


  enemyGroup = new Group();
  if (frameCount % 40 === 0) {
    enemy = createSprite(pos2X, pos2Y, 30, 30);
  }

  BulletGroup = new Group();


  monkey = createSprite(displayWidth / 2, 2300, 40, 40);
  monkey.addImage(monkey_img);
  monkey.scale = 2;

  Iwall3_1 = createSprite(displayWidth - 995, displayHeight / 2, 40, displayHeight * 15);
  Iwall3_2 = createSprite(displayWidth - 200, displayHeight / 2, 40, displayHeight * 15);

  poisonbananaGroup = new Group();
  if (frameCount % 40 === 0) {
    poisonbanana = createSprite(pos3X, pos3Y, 30, 30);
  }
  bananaGroup = new Group();
  if (frameCount % 40 === 0) {
    banana = createSprite(pos3X, pos3Y, 30, 30);
  }


}

function draw() {
  if (bg === 0){
  background(background_img);
  }

  if(bg === 2){
    background(lbg);
  }

  
  form.display();
  if (lev === 1) {
    soundtest = 0;
    stage1();
    playerPaddle.visible = false;
    monkey.visible = false;

  }
  if (lev === 2) {
    player.visible = false;
    monkey.visible = false;
    gameState = 2.0;
    level2();

  }

  if (lev === 3) {
    player.visible = false;
    playerPaddle.visible = false;

    gameState = 3.0;
    level3();

  }

  Iwall1.visible = false;
  Iwall2.visible = false;
  Iwall2_1.visible = false;
  Iwall2_2.visible = false;
  Iwall3_1.visible = false;
  Iwall3_2.visible = false;


  if(soundtest === 1){
    mainSound.stop();
  }

  if(soundtest === 0){
    mainSound.play();
  }

  drawSprites();


}

function stage1() {
  background("#D8C7A9");
  image(track, 0, -displayHeight * 6, displayWidth + 100, displayHeight * 9);
  camera.position.x = displayWidth / 2;
  camera.position.y = player.y - 100;

  fill("brown");
  noStroke();
  textSize(20);
  text("Your Score: " + score, 50, player.y - 200);

  Iwall1.visible = false;
  Iwall2.visible = false;
  player.collide(Iwall1);
  player.collide(Iwall2);
  player.velocityY = -10;

  if (keyDown(LEFT_ARROW) && gameState === 0) {
    player.x -= 10;
  }
  if (keyDown(RIGHT_ARROW) && gameState === 0) {
    player.x += 10;
  }

  if (frameCount % 50 === 0 && gameState === 0) {
    score += 5;
  }

  if (frameCount % 50 === 0 && gameState === 0) {
    rand = random(displayWidth - 995, displayWidth - 200);
    car.y = player.y - 800;
    car.x = rand;
    car.depth = player.depth;
    car.collide(Iwall1);
    car.collide(Iwall2);
    num = Math.round(random(1, 1));

    switch (num) {
      case 1: car.addImage(carImg1);
        break;
      default: break;
    }

    car.scale = 2;
    car.velocityY = 10;
    carsGroup.add(car);
    car.lifetime = -100;
  }
  if (player.isTouching(car) && gameState === 0) {
    soundtest = 1;
    gameState = 1;
    player.destroy();
    carsGroup.destroyEach();
    score -= 5;
  }

  if (gameState === 1) {
    soundtest = 1;
    fill("brown");
    noStroke();
    textSize(40);
    text("You Lose!!!", displayWidth / 4, player.y - 300);
  }

  if (player.y === -4470) {
    soundtest = 1;
    gameState = 2;
    player.velocityY = 0;
    carsGroup.setVelocityXEach(0);
    fill("brown");
    noStroke();
    textSize(40);
    text("You Win!!!", displayWidth / 4, player.y - 300);

  }



}

function level2() {

  playerPaddle.visible = true;
  if (gameState === 2.0) {
    background("#D8C7A9");
    image(back_img, 0, -displayHeight * 6, displayWidth + 100, displayHeight * 9);
    camera.position.x = displayWidth / 2;
    camera.position.y = playerPaddle.y - 100;

    if (keyDown(32) && frameCount % 3 === 0 && gameState === 2.0 && test1 === 0) {

      laserSound.play();
      bullet = createSprite(200, 200, 2, 8);
      bullet.shapeColor = "red";
      bullet.lifetime = 80;
      bullet.x = playerPaddle.x - 7;
      bullet.y = playerPaddle.y + 5;
      bullet.velocityY = -30;
      BulletGroup.push(bullet);

    }

    if (keyDown(LEFT_ARROW) && gameState === 2.0) {
      playerPaddle.x -= 10;
    }
    if (keyDown(RIGHT_ARROW) && gameState === 2.0) {
      playerPaddle.x += 10;
    }

    fill("brown");
    noStroke();
    textSize(20);
    text("Your Score: " + score2, 50, playerPaddle.y - 200);

    Iwall2_1.visible = false;
    Iwall2_2.visible = false;
    playerPaddle.collide(Iwall2_1);
    playerPaddle.collide(Iwall2_2);
    playerPaddle.velocityY = -10;

    if (frameCount % 50 === 0 && gameState === 2.0) {
      rand2 = random(displayWidth - 995, displayWidth - 200);
      enemy.visible = true;
      enemy.y = playerPaddle.y - 800;
      enemy.x = rand2;
      enemy.depth = playerPaddle.depth;
      enemy.collide(Iwall2_1);
      enemy.collide(Iwall2_2);
      num2 = Math.round(random(1, 1));

      switch (num2) {
        case 1: enemy.addImage(enemy_img);
          break;
        default: break;
      }

      enemy.scale = 2;
      enemy.velocityY = 10;
      enemyGroup.add(enemy);
      enemy.lifetime = -100;
    }




    if (BulletGroup.isTouching(enemy) && enemy.y > playerPaddle.y - 330  && enemy.visible === true ) {

      enemy.visible = false;
      score2 += 1;

    }


    if (playerPaddle.isTouching(enemy) && enemy.visible === true) {
      test1 = 1;
      gameState = 2.1;
      playerPaddle.destroy();
      enemyGroup.destroyEach();
      score2 -= 1;
      BulletGroup.destroyEach();
      enemyGroup.destroyEach();
      laserSound.stop();
      bullet.velocityY = 0;

    }
  }

  if (gameState === 2.1) {
    fill("brown");
    noStroke();
    textSize(40);
    text("You Lose!!!", displayWidth / 4, playerPaddle.y - 300);
    BulletGroup.destroyEach();
    enemyGroup.destroyEach();
    laserSound.stop();
    bullet.velocityY = 0;
  }

  if (playerPaddle.y === -4470) {
    gameState = 2.1;
    playerPaddle.velocityY = 0;
    enemyGroup.setVelocityXEach(0);
    BulletGroup.destroyEach();
    enemyGroup.destroyEach();
    laserSound.stop();
    bullet.velocityY = 0;

  }

  if (score2 > 9) {
    gameState = 2.2;
    playerPaddle.velocityY = 0;
    enemyGroup.setVelocityXEach(0);
    fill("brown");
    noStroke();
    textSize(40);
    text("You Win!!!", displayWidth / 4, playerPaddle.y - 300);
    BulletGroup.destroyEach();
    enemyGroup.destroyEach();
    laserSound.stop();
    bullet.velocityY = 0;
  }

}

function level3() {

  background("#D8C7A9");
  image(backgroundImage3, 0, -displayHeight * 6, displayWidth + 100, displayHeight * 9);
  camera.position.x = displayWidth / 2;
  camera.position.y = monkey.y - 100;
  fill("brown");
  noStroke();
  textSize(20);
  text("Your Score: " + score3, 50, monkey.y - 200);
  Iwall3_1.visible = false;
  Iwall3_2.visible = false;
  monkey.collide(Iwall3_1);
  monkey.collide(Iwall3_2);
  monkey.velocityY = -10;


  if (keyDown(LEFT_ARROW) && gameState === 3.0) {
    monkey.x -= 10;
  }
  if (keyDown(RIGHT_ARROW) && gameState === 3.0) {
    monkey.x += 10;
  }



  rand3 = random(displayWidth - 995, displayWidth - 200);
  if (frameCount % 50 === 0 && gameState === 3.0) {

    poisonbanana.y = monkey.y - 800;
    poisonbanana.x = rand3;
    poisonbanana.depth = monkey.depth;
    poisonbanana.collide(Iwall3_1);
    poisonbanana.collide(Iwall3_2);
    poisonbanana.addImage(poisonbanana_img);
    poisonbanana.scale = 2;
    poisonbanana.velocityY = 10;
    poisonbananaGroup.add(poisonbanana);
    poisonbanana.lifetime = -100;
  }

  if (frameCount % 55 === 0 && gameState === 3.0) {
    banana.visible = true;
    banana.y = monkey.y - 800;
    banana.x = rand3;
    banana.depth = monkey.depth;
    banana.collide(Iwall3_1);
    banana.collide(Iwall3_2);
    banana.addImage(banana_img);
    banana.scale = 2;
    banana.velocityY = 10;
    bananaGroup.add(banana);
    banana.lifetime = -100;
  }


  if (monkey.isTouching(bananaGroup) && banana.visible === true) {
    banana.visible = false;
    score3 += 1;
  }

  if (monkey.isTouching(poisonbananaGroup)) {
    gameState = 3.1;
    monkey.destroy();
    bananaGroup.destroyEach();
    poisonbananaGroup.destroyEach();
    score3 -= 1;
  }

  if (monkey.y === -4470) {
    gameState = 3.1;
    monkey.velocityY = 0;
    poisonbananaGroup.setVelocityXEach(0);

  }

  console.log(monkey.y);
  console.log(gameState);
  
  console.log(monkey.y);
  if (score3 > 9) {
    gameState = 3.2;
  }

  if (gameState === 3.1) {
    fill("brown");
    noStroke();
    textSize(40);
    text("You Lose!!!", displayWidth / 4, monkey.y - 300);
    bananaGroup.destroyEach();
    poisonbananaGroup.destroyEach();
  }
  if (gameState === 3.2) {
    monkey.velocityY = 0;
    poisonbananaGroup.setVelocityXEach(0);
    poisonbananaGroup.setVelocityXEach(0);
    fill("brown");
    noStroke();
    textSize(40);
    text("You Win!!!", displayWidth / 4, monkey.y - 300);
    bananaGroup.destroyEach();
    poisonbananaGroup.destroyEach();
  }

}