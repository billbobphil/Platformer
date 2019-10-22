class Level2 {

    levelGameObjectArray;
    gameWindow;
    name;

    constructor(gameWindow) {
        this.gameWindow = gameWindow;
        this.name = 'Intro to Hazards';
    }

    getLevelStartState() {

        this.levelGameObjectArray = new Array();

        //Manipulate player starting position if desired
        player.posX = 0;
        player.posY = this.gameWindow.height - 50 - player.height;

        let platform1 = new Platform(200, 10, 0, this.gameWindow.height - 50, '#000');
        let platform2 = new Platform((this.gameWindow.width / 2) - 50, 10, this.gameWindow.width / 2 + 50, this.gameWindow.height - 50, 'black');
        let platform3 =  new Platform(100, 10, 250, this.gameWindow.height - 115, '#000');
        let platform4 = new Platform(100, 10, 500, this.gameWindow.height - 145, '#000');
        
        let hazard1 = new Hazard(50, 50, this.gameWindow.width - 400, this.gameWindow.height - 100, 'red', '../Sprites/Spike.png');
        let hazard2 = new Hazard(85, 15, platform1.posX + 50, platform1.posY - 45, 'red', '../Sprites/Spike.png');
        let hazard3 = new Hazard(10, 100, platform2.posX, this.gameWindow.height - 250, 'red');
        let objective = new Objective(this.gameWindow.width - 50, platform2.posY - 140);

        this.levelGameObjectArray.push(player);
        this.levelGameObjectArray.push(platform1);
        this.levelGameObjectArray.push(platform2);
        this.levelGameObjectArray.push(platform3);
        this.levelGameObjectArray.push(platform4);
        this.levelGameObjectArray.push(objective);
        this.levelGameObjectArray.push(hazard1);
        this.levelGameObjectArray.push(hazard2);
        this.levelGameObjectArray.push(hazard3);

        return this.levelGameObjectArray;
    }

}