var canvas;
var backgroundImage, track, car1_img, car2_img;
var fireAuth, db;
var game, welcome, player10, player20;
var secret_word;
var player, allPlayers;
var gameState = null;
var playerCount;
function preload() {
  backgroundImage = loadImage("./assets/bg.jpg");
  track = loadImage("./assets/track.jpg");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
}

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  fireAuth = firebase.auth();
  db = firebase.database();
  game = new Game();
  welcome = new Welcome();
  player10 = new player1();
  player20 = new player2();
  player = new Player();

  car1 = createSprite(width / 2, 200);
  car1.addImage("car1", car1_img);
  car2 = createSprite(width - 300, 200);
  car2.addImage("car2", car2_img);

  cars = [car1, car2];
}

function draw() {
  background(backgroundImage);
  if (gameState === null || gameState === 0) {
    game.start();
  }
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    clear();
    player20.greeting.hide();
    player20.greeting2.hide();
    player20.playButton.hide();

    player10.greeting.hide();
    player10.greeting2.hide();
    player10.playButton.hide();
    player10.secretWord.hide();

    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
}

function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
}
