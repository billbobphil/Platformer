class Level3 {

    levelGameObjectArray;
    gameWindow;
    name;

    constructor(gameWindow) {
        this.gameWindow = gameWindow;
        this.name = 'Going Up!';
    }

    getLevelStartState() {

        this.levelGameObjectArray = new Array();

        //Manipulate player starting position if desired
        player.posX = 0;
        player.posY = this.gameWindow.height - 50 - player.height;

        let platform1 = new Platform(200, 10, 0, this.gameWindow.height - 50, '#000');
        let hazard1 = new Hazard(40, 30, 80, this.gameWindow.height - 90,  'red');
        let platform2 = new Platform( 130, 10, 250, this.gameWindow.height - 120, '#000');
        let hazard2 = new Hazard(80, 20, platform2.posX + platform2.width - 80, platform2.posY - 30, 'red');
        let platform3 = new Platform(50, 10, 150, this.gameWindow.height - 185, 'black');
        let platform4 = new Platform(50, 10, 280, 650, 'black');
        // let hazard3 = new Hazard(20, 20, 370, 600, 'red');
        let hazard3 = new HazardSpike(370, 600);
        let platform5 = new Platform(50, 10, 420, 650, 'black');

        let platform6 = new PlatformMoving(50, 10, 600, 700, 'black', 1.5, 0, 150, 0);

        let platform7 = new Platform(150, 40, 850, 700, 'black');
        let hazard4 = new Hazard(40, 30, 810, 710, 'red');

        let platform8 = new PlatformMoving(50, 10, 1100, 700, 'black', 0, -1.5, 0, 150);

        

        let objective = new Objective(this.gameWindow.width - 50, 140);

        this.levelGameObjectArray.push(player);
        this.levelGameObjectArray.push(platform1);
        this.levelGameObjectArray.push(hazard1);
        this.levelGameObjectArray.push(platform2);
        this.levelGameObjectArray.push(hazard2);
        this.levelGameObjectArray.push(platform3);
        this.levelGameObjectArray.push(platform4);
        this.levelGameObjectArray.push(hazard3);
        this.levelGameObjectArray.push(platform5);
        this.levelGameObjectArray.push(platform6);
        this.levelGameObjectArray.push(platform7);
        this.levelGameObjectArray.push(hazard4);
        this.levelGameObjectArray.push(platform8);
        // this.levelGameObjectArray.push(objective);


        return this.levelGameObjectArray;
    }

}