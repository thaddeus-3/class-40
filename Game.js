class Game{
    constructor() {

    }
    getState() {
        var gameRef = database.ref("gameState")
        gameRef.on("value",function(data){
            gameState = data.val()
        }) 
    }
    update(state) {
        database.ref("/").update({
            gameState:state
        })
    }
    async start() {
        if(gameState === 0) {

            player = new Player();
            var playerRef = await database.ref("playerCount").once("value")
            if(playerRef.exists()) {
                playerCount=playerRef.val()
                player.getCount();
            }

            form = new Form();
            form.display() 

        }
        car1 = createSprite(100,200)
        car2 = createSprite(300,200)
        car3 = createSprite(500,200)
        car4 = createSprite(700,200)
        cars = [car1, car2, car3, car4]
        car1.addImage(carimage1);
        car2.addImage(carimage2);
        car3.addImage(carimage3);
        car4.addImage(carimage4);
        car1.scale = 0.7
        car2.scale = 0.9
    }
    play() {
        form.hide()
        text("gameStart",100,50)
        Player.getPlayerInfo()
        player.getFinishedPlayers()
        if(allPlayers!==undefined){
            background("green");
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
            var pos=100
            var index = 0
            var x=220 
            var y=0
            for(var plr in allPlayers) {
                index = index+1
                x=x+250
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index) {
                    fill("red")
                    ellipse(x,y,100,150);
                    cars[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y;
                }else {
                    fill("black")
                }
                textSize(18)
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,cars[index-1].x,cars[index-1].y+80)
                pos+=40
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null&& finished!==true) {
            player.distance+=50
            player.update()
        }
        drawSprites();
        if(player.distance>=5000&& finishedPlayers<=4&& finished===false) {
           // gameState = 2
           Player.updateFinishedPlayers()
           player.rank=finishedPlayers
           player.update()
           finished=true;
        }
    }
    end() {
        console.log("gameEnd")
    }
}