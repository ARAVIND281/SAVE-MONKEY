var canvas, canvas1;
var form, player1, player;
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
var soundtest = 2;
var userPaddle, userPaddleimg, computerPaddle, computerPaddleimg;
var computerScore, playerScore, ball;
var scoreSound, wall_hitSound, hitSound;
var bg5, ballimg;
var test3 = 0;
var mainMenu; mainMenuTest = 0;
var testl1 = 0;
var ok = 0, ok2 = 0, ok3 = 0, ok4 = 0;
var gameState1 = 0;




function preload() {
  inbo = loadImage("image/inbo.png");
  player_img = loadImage("images/player.png");
  carImg1 = loadImage("images/car1.png");

  track = loadImage("images/track.png");
  back_img = loadImage("image2/back.png");
  playerPaddle_img = loadImage("image2/gun2.png");
  enemy_img = loadImage("image2/enemy.png");
  laserSound = loadSound('laser.ogg');
  backgroundImage3 = loadImage("image3/back.png");
  monkey_img = loadImage("image3/player.png");
  poisonbanana_img = loadImage("image3/banana.png");
  banana_img = loadImage("image3/banana1.png");
  background_img = loadImage("image/bg3.png");
  lbg = loadImage("image/lbg.png");
  mainSound = loadSound("audio/mainsound.mp3");
  scoreSound = loadSound('score.mp3');
  wall_hitSound = loadSound('wall_hit.mp3');
  hitSound = loadSound('hit.mp3');
  userPaddleimg = loadImage("monkey-.png");
  computerPaddleimg = loadImage("crocodile.png");
  bg5 = loadImage("river5.png");
  ballimg = loadImage("football.png")
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  mainMenu = createButton('MAIN MENU');
  mainMenu.hide();

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

  bananaGroup = new Group();


  userPaddle = createSprite(displayWidth - 20, 200, 10, 70);
  userPaddle.visible = false;
  computerPaddle = createSprite(20, 200, 10, 70);
  computerPaddle.visible = false;
  ball = createSprite(displayWidth / 2, displayHeight / 2, 12, 12);
  ball.visible = false;
  computerScore = 0;
  playerScore = 0;
  edges = createEdgeSprites();
  edges.visible = false;


}

function draw() {
  if (bg === 0) {
    background(background_img);
  }

  if (bg === 2) {
    background(lbg);
  }








  form.display();
  if (lev === 1) {
    //soundtest = 0;
    testl1 = 0.1;
    gameState1 = 0.1;
    stage1();
    playerPaddle.visible = false;
    monkey.visible = false;
    mainMenuTest = 1;
    mainMenu.hide();
    //ok = 0;

  }
  if (lev === 2) {
    player.visible = false;
    monkey.visible = false;
    gameState = 2.0;
    level2();
    mainMenu.hide();

  }

  if (lev === 3) {
    player.visible = false;
    playerPaddle.visible = false;

    gameState = 3.0;
    level3();
    mainMenu.hide();

  }

  if (lev === 4) {
    gameState = "serve";
    userPaddle.visible = true;
    computerPaddle.visible = true;
    ball.visible = true;
    level4();
    mainMenu.hide();

  }

  Iwall1.visible = false;
  Iwall2.visible = false;
  Iwall2_1.visible = false;
  Iwall2_2.visible = false;
  Iwall3_1.visible = false;
  Iwall3_2.visible = false;


  if (ok === 1 || ok2 === 1 || ok3 === 1 || ok4 === 1) {
    mainMenu.size(100, 40);
    mainMenu.position(displayWidth / 2, displayHeight / 2);
    mainMenu.show();
  }

  mainMenu.mousePressed(() => {
    ok = 2;
    ok4 = 2;
  });

  if (ok === 2 || ok4 === 2) {
    mainMenu.hide();
    ok2 = 0;
    ok3 = 0;
    ok4 = 0;
    gameState1 = 0;
    gameState = 0;
    score = 0;
    testl1 = 0;
    count = 0;
    score2 = 0;
    test1 = 0;
    count3 = 0;
    score3 = 0;
    test3 = 0;
    clear();
    lev = 0;
    ok = 3;
    computerScore = 0;
    playerScore = 0;
    playerPaddle = createSprite(displayWidth / 2, 2300, 40, 40);
    playerPaddle.addImage(playerPaddle_img);
    playerPaddle.scale = 2;
    player = createSprite(displayWidth / 2, 2300, 40, 40);
    player.addImage(player_img);
    player.scale = 2;
    if (frameCount % 40 === 0) {
      //car = createSprite(posX, posY, 30, 30);
    }
    if (frameCount % 40 === 0) {
      //enemy = createSprite(pos2X, pos2Y, 30, 30);
    }
    monkey = createSprite(displayWidth / 2, 2300, 40, 40);
    monkey.addImage(monkey_img);
    monkey.scale = 2;
    userPaddle = createSprite(displayWidth - 20, 200, 10, 70);
    userPaddle.visible = false;
    computerPaddle = createSprite(20, 200, 10, 70);
    computerPaddle.visible = false;
    ball = createSprite(displayWidth / 2, displayHeight / 2, 12, 12);
    ball.visible = false;
    monkey.visible = false;
    edges.visible = false;
  }



  drawSprites();


}



function stage1() {
  player.visible = true;
  edges.visible = false;
  background("#D8C7A9");
  image(track, 0, -displayHeight * 6, displayWidth + 100, displayHeight * 9);
  camera.position.x = displayWidth / 2;
  camera.position.y = player.y - 100;

  fill("brown");
  noStroke();
  textSize(20);
  //text("Your Score: " + score, 50, player.y - 200);

  Iwall1.visible = false;
  Iwall2.visible = false;
  player.collide(Iwall1);
  player.collide(Iwall2);
  player.velocityY = -10;

  if (keyDown(LEFT_ARROW) && testl1 === 0.1) {
    player.x -= 10;
  }
  if (keyDown(RIGHT_ARROW) && testl1 === 0.1) {
    player.x += 10;
  }

  if (frameCount % 50 === 0 && testl1 === 0.1 && gameState1 === 0.1) {
    score += 5;
  }

  if (frameCount % 50 === 0 && testl1 === 0.1) {
    car = createSprite(posX, posY, 30, 30);
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
    car.lifetime = 150;
  }
  if (player.isTouching(car) /*&& testl1 === 0.1*/) {
    testl1 = 1;
    mainSound.stop();
    testl1 = 1;

    mainMenuTest = 2;
    player.destroy();
    //player.visible=false;
    player.velocityY = 0;
    carsGroup.destroyEach();
    //carsGroup.visible = false ;
    score -= 5;
    testl1 = 1;
    console.log("hi");
    mainMenu.show();
    ok = 1;
  }

  if (testl1 === 1) {

    mainSound.stop();
    fill("brown");
    noStroke();
    textSize(40);
    text("You Lose!!!", displayWidth / 4, player.y - 300);
    mainMenuTest = 2;
    //testl1 = 1;
    mainMenu.show();
    ok = 1;
  }

  if (player.y === -4470) {

    mainSound.stop();
    gameState1 = 2;
    player.velocityY = 0;
    carsGroup.setVelocityXEach(0);
    fill("brown");
    noStroke();
    textSize(40);
    text("You Win!!!", displayWidth / 4, player.y - 300);
    mainMenuTest = 2;
    carsGroup.destroyEach();
    //carsGroup.visible = false ;
    //testl1 = 1;
    mainMenu.show();
    ok = 1;

  }



}

function level2() {

  playerPaddle.visible = true;
  edges.visible = false;
  if (gameState === 2.0) {
    background("#D8C7A9");
    image(back_img, 0, -displayHeight * 6, displayWidth + 100, displayHeight * 9);
    camera.position.x = displayWidth / 2;
    camera.position.y = playerPaddle.y - 100;

    if (keyDown(32) && frameCount % 3 === 0 && gameState === 2.0 && test1 === 0) {

      laserSound.play();
      bullet = createSprite(200, 200, 2, 8);
      bullet.shapeColor = "red";
      bullet.lifetime = 100;
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
      enemy = createSprite(pos2X, pos2Y, 30, 30);
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
      enemy.lifetime = 150;
    }




    if (BulletGroup.isTouching(enemy) && enemy.y > playerPaddle.y - 330 && enemy.visible === true) {

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
      //bullet.velocityY = 0;
      mainSound.stop();
      ok2 = 1;

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
    //bullet.velocityY = 0;
    mainSound.stop();
    ok2 = 1;
  }

  if (playerPaddle.y === -4470) {
    gameState = 2.1;
    playerPaddle.velocityY = 0;
    enemyGroup.setVelocityXEach(0);
    BulletGroup.destroyEach();
    enemyGroup.destroyEach();
    laserSound.stop();
    bullet.velocityY = 0;
    mainSound.stop();
    ok2 = 1;

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
    mainSound.stop();
    ok2 = 1;
    edges.visible = false;
  }

}

function level3() {

  background("#D8C7A9");
  monkey.visible = true;
  edges.visible = false;
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
    poisonbanana = createSprite(pos3X, pos3Y, 30, 30);
    poisonbanana.y = monkey.y - 800;
    poisonbanana.x = rand3;
    poisonbanana.depth = monkey.depth;
    poisonbanana.collide(Iwall3_1);
    poisonbanana.collide(Iwall3_2);
    poisonbanana.addImage(poisonbanana_img);
    poisonbanana.scale = 2;
    poisonbanana.velocityY = 10;
    poisonbananaGroup.add(poisonbanana);
    poisonbanana.lifetime = 150;
  }

  if (frameCount % 55 === 0 && gameState === 3.0) {
    banana = createSprite(pos3X, pos3Y, 30, 30);
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
    banana.lifetime = 150;
  }


  if (monkey.isTouching(bananaGroup) && banana.visible === true) {
    banana.visible = false;
    score3 += 1;
  }

  if (monkey.isTouching(poisonbananaGroup)) {
    gameState = 3.1;
    test3 = 1;
    monkey.destroy();
    bananaGroup.destroyEach();
    poisonbananaGroup.destroyEach();
    score3 -= 1;
    mainSound.stop();
    ok3 = 1;
  }

  if (monkey.y === -4470 && gameState !== 3.1) {
    gameState = 3.1;
    monkey.velocityY = 0;
    poisonbananaGroup.setVelocityXEach(0);
    mainSound.stop();
    ok3 = 1;

  }

  if (gameState === 3.1 || test3 === 1) {
    fill("brown");
    noStroke();
    textSize(40);
    text("You Lose!!!", displayWidth / 4, monkey.y - 300);
    bananaGroup.destroyEach();
    poisonbananaGroup.destroyEach();
    mainSound.stop();
  }

  //console.log(monkey.y);
  //console.log(gameState);

  if (score3 > 9) {
    gameState = 3.2;
    mainSound.stop();
    ok3 = 1;
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
    mainSound.stop();
    ok3 = 1;
  }

}

function level4() {
  fill(255);

  background(bg5);
  edges.visible = false;
  text(computerScore, displayWidth / 2 - 30, 20);
  text(playerScore, displayWidth / 2 + 30, 20);
  userPaddle.addImage(userPaddleimg);
  userPaddle.scale = 0.2;
  computerPaddle.addImage(computerPaddleimg);
  computerPaddle.scale = 0.2;
  ball.addImage(ballimg);
  ball.scale = 0.2;
  camera.y = 384;



  for (var i = 0; i < displayHeight; i += 20) {
    line(displayWidth / 2, i, displayWidth / 2, i + 10);
  }



  if (gameState === "serve") {
    fill(255);
    text("Press Space to Serve", displayWidth / 2 - 50, displayHeight / 2 - 20);
  }

  if (gameState === "over") {
    fill(255);
    text("Game Over!", displayWidth / 2 - 30, displayHeight / 2 - 40);
  }




  if (keyDown("space") && gameState == "serve" && ball.x === displayWidth / 2 && ball.y === displayHeight / 2) {
    ball.velocityX = 8;
    ball.velocityY = 8;
    gameState = "play";
  }


  userPaddle.y = World.mouseY;




  if (ball.isTouching(userPaddle)) {
    hitSound.play();
    ball.x = ball.x - 5;
    ball.velocityX = -ball.velocityX;
  }


  if (ball.isTouching(computerPaddle)) {
    hitSound.play();
    ball.x = ball.x + 5;
    ball.velocityX = -ball.velocityX;
  }


  if (ball.x > displayWidth || ball.x < 0) {
    scoreSound.play();

    if (ball.x < 0) {
      playerScore++;
    }
    else {
      computerScore++;
    }

    ball.x = displayWidth / 2;
    ball.y = displayHeight / 2;
    ball.velocityX = 0;
    ball.velocityY = 0;
    gameState = "serve";

    if (computerScore === 5 || playerScore === 5) {
      gameState = "over";
      ok4 = 1;
      ball.destroy();
      computerPaddle.destroy();
      userPaddle.destroy();
      mainSound.stop();
      clear();
    }
  }


  if (ball.isTouching(edges[2]) || ball.isTouching(edges[3])) {
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
    wall_hitSound.play();
  }


  computerPaddle.y = ball.y;
}