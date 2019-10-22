class Level1 {

    levelGameObjectArray;
    gameWindow;
    name;

    constructor(gameWindow) {
        this.gameWindow = gameWindow;
        this.name = 'More Steps';
    }

    getLevelStartState() {

        this.levelGameObjectArray = new Array();

        //Manipulate player starting position if desired
        player.posX = 0;
        player.posY = this.gameWindow.height - 50 - player.height;

        let platform1 = new Platform(100, 10, 0, this.gameWindow.height - 50, 'black');
        let platform2 = new Platform(100, 10, platform1.posX + 250, this.gameWindow.height - 50, 'black');
        let platform3 = new Platform(100, 10, platform2.posX + 250, this.gameWindow.height - 50, 'black');
        let platform4 = new Platform(100, 10, platform3.posX + 250, this.gameWindow.height - 50, 'black');
        let platform5 = new Platform(100, 10, platform4.posX + 250, this.gameWindow.height - 50, 'black');
        let platform6 = new Platform(100, 10, platform5.posX + 250, this.gameWindow.height - 50, 'black');
        let platform7 = new Platform(100, 10, platform6.posX + 250, this.gameWindow.height - 50, 'black');
        let platform8 = new Platform(100, 10, platform7.posX + 250, this.gameWindow.height - 50, 'black');
        let platform9 = new Platform(100, 10, platform8.posX + 250, this.gameWindow.height - 50, 'black');
        let objective = new Objective(platform9.posX - 25, platform9.posY - 140);


        this.levelGameObjectArray.push(player);
        this.levelGameObjectArray.push(platform1);
        this.levelGameObjectArray.push(platform2);
        this.levelGameObjectArray.push(platform3);
        this.levelGameObjectArray.push(platform4);
        this.levelGameObjectArray.push(platform5);
        this.levelGameObjectArray.push(platform6);
        this.levelGameObjectArray.push(platform7);
        this.levelGameObjectArray.push(platform8);
        this.levelGameObjectArray.push(platform9);
        this.levelGameObjectArray.push(objective);

        // this.levelGameObjectArray.push(objective);

        return this.levelGameObjectArray;
    }

}