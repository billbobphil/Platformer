class Level0 {

    levelGameObjectArray;
    gameWindow;
    name;

    constructor(gameWindow) {
        this.gameWindow = gameWindow;
        this.name = 'First Steps';
    }

    getLevelStartState() {

        this.levelGameObjectArray = new Array();

        //Manipulate player starting position if desired
        player.posX = 0;
        player.posY = this.gameWindow.height - 50 - player.height;

        let platform1 = new Platform((this.gameWindow.width / 2) - 120, 10, 0, this.gameWindow.height - 50,  '#000');
        let platform2 = new Platform((this.gameWindow.width / 2) - 50, 10, this.gameWindow.width / 2 + 50, this.gameWindow.height - 50,  'black');
        let objective = new Objective(this.gameWindow.width - 50, platform2.posY - 140);

        this.levelGameObjectArray.push(player);

        this.levelGameObjectArray.push(platform1);
        this.levelGameObjectArray.push(platform2);
        this.levelGameObjectArray.push(objective);

        return this.levelGameObjectArray;
    }

}