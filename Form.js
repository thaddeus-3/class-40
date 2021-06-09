class Form {
    constructor() {
        this.title = createElement("H1");
        this.input = createInput("Enter Name:");
        this.button = createButton("Start");
        this.greeting = createElement("H3");
        this.reset = createButton("Reset");
    }
    hide() {
        this.title.hide()
        this.input.hide()
        this.greeting.hide()
        this.button.hide()
    }
    display() {

        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2,0);
 
        this.input.position(displayWidth/2,displayHeight/2);

        this.button.position(displayWidth/2+50,displayHeight/2+50);
        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index=playerCount
            player.update(name);
            player.updateCount(playerCount);

            this.greeting.html("Hello"+player.name);
            this.greeting.position(displayWidth/2,displayHeight/2);
        })
        this.reset.position(displayWidth-100,50)
        this.reset.mousePressed(()=> {
            database.ref('/').update({
                players:null,
                gameState:0,
                playerCount:0,
                finishedPlayers:0
            })
        })
    }
}