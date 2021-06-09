var database;
var form, player, game;
var gameState = 0;
var playerCount = 0;
var bg;
var allPlayers
var car1, car2, car3, car4;
var cars
var carimage1, carimage2, carimage3, carimage4, track;
var finishedPlayers = 0;
var finished=false
function preload() {
    bg = loadImage("carracinggame.jpeg")
    carimage1 = loadImage("car1.png")
    carimage2 = loadImage("car2.png")
    carimage3 = loadImage("car3.png")
    carimage4 = loadImage("car4.png")
    track = loadImage("track.jpeg")
}
function setup() {
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw() {
     background(bg);
     if(playerCount===4&& finishedPlayers===0) {
         game.update(1)
     }
     if(gameState===1) {
         clear()
         game.play()
     }
     if(finishedPlayers===4){
         game.update(2)
     }
     if(gameState===2&& finishedPlayers===4) {
         game.end()
     }
}