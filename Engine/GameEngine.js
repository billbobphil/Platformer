class GameEngine {
    //TODO: level editor flag for which startlevel method to be running
    //TODO: collision - ensure objects that are NOT players colliding with other items on screen does not restart the level!
    gameWindow;
    context;
    friction;
    airFriction;
    gravity;
    gravitySpeed;
    levels;
    currentLevel;
    runningRenderInterval;
    runningInEditor;
    renderArray;

    constructor() {
        this.gameWindow = document.getElementById('GameScreen');
        this.context = this.gameWindow.getContext('2d');
        this.friction = .7;
        this.airFriction = .95;
        this.gravity = .8;
        this.runningInEditor = false;
    }

    startLevel = () => {
        console.log('[Game Engine] Starting');
        this.renderArray = this.levels[this.currentLevel].getLevelStartState();
        player.velocityX = 0;
        player.velocityY = 0;
        clearInterval(this.runningRenderInterval);

        this.runningRenderInterval = setInterval(() => {
                gameEngine.render(this.renderArray);
            }, 1000/60); //60 FPS
    }

    startLevelInEditor = (additionalObjectsArray) => {
        console.log('[Game Engine] Starting - Level Editor Mode');
        clearInterval(this.runningRenderInterval);

        if(!this.runningInEditor) {
            this.runningInEditor = true;
        }

        this.renderArray = this.levels[this.currentLevel].getLevelStartState();

        for(var i = 0; i < additionalObjectsArray.length; i++) {
            this.renderArray.push(additionalObjectsArray[i]);
        }

        console.log('[Game Engine] Render Array');
        console.log(this.renderArray);

        player.velocityX = 0;
        player.velocityY = 0;
        
        
        this.runningRenderInterval = setInterval(() => {
            gameEngine.render(this.renderArray);
        }, 1000/60); //60 FPS
    }

    stopEngine() {
        console.log('[Game Engine] Stopping');
        clearInterval(this.runningRenderInterval);
    }

    render = (gameObjectRenderList) => {
        
        this.clearCanvas();

        gameObjectRenderList.forEach((gameObject) => {
            this.renderObject(gameObject);
        });
    }

    renderObject = (gameObject) => {

        this.context.fillStyle = gameObject.color;

        //move game object appropriate to it's speed with world effects

        //Handling X movement
        if(gameObject.affectedByFriction) {
            this.manipulateFriction(gameObject);
        }
        
        if(gameObject.velocityX != 0 || gameObject.type == 'player') {
            gameObject.calculateVelocityX()
            gameObject.posX += gameObject.velocityX;
        }
        

        //Handling Y movement
        if(gameObject.velocityY != 0 || gameObject.type == 'player') {
            gameObject.calculateVelocityY();
        }

        if(gameObject.affectedByGravity) {
            gameObject.velocityY = gameObject.velocityY + this.gravity;
        }
       
        gameObject.posY += gameObject.velocityY;

        //bug -here?? - for posX
        this.windowCollision(gameObject);

        if(gameObject.affectedByGravity) {
            this.manipulateGravity(gameObject);
        }
        
        if(gameObject.type != 'player') {
            if(this.isColliding(gameObject)) {

                if(gameObject.type == 'platform') {
                    this.collidingWithPlatform(gameObject);
                }
                else if (gameObject.type == 'objective') {
                    this.collidingWithObjective(gameObject);
                }
                else if (gameObject.type == 'hazard') {
                    this.collidingWithHazard(gameObject);
                }

            }
            
        }

        

        //re-render game object
        if(gameObject.sprite) {
            this.context.drawImage(gameObject.sprite, gameObject.posX, gameObject.posY);
        }
        else {
            this.context.fillRect(gameObject.posX, gameObject.posY, gameObject.width, gameObject.height);
        }
        

    }

    clearCanvas = () => {
        this.context.clearRect(0,0, this.gameWindow.width, this.gameWindow.height);
    }

    manipulateGravity(gameObject) 
    {
        if(!gameObject.grounded) {
            gameObject.velocityY += this.gravity;
        }
    }

    manipulateFriction(gameObject) 
    {
        if(!gameObject.grounded) 
        {
            gameObject.velocityX = gameObject.velocityX * this.airFriction;
        }
        else 
        {
            gameObject.velocityX = gameObject.velocityX * this.friction;
        }
    }

    windowCollision(gameObject) {
        //Bottom of GameWindow
        if(gameObject.bottom() >= this.gameWindow.height){
            gameObject.posY = this.gameWindow.height - gameObject.height;

            if(this.runningInEditor) {
                this.startLevelInEditor(levelEditor.activeEditorObjects);
            }
            else {
                this.startLevel();
            }
            
        }

        //Left of GameWindow
        if(gameObject.left() <= 0) {
            // gameObject.onWallLeftEdge = true;
            gameObject.posX = 0;
        }
        else if (gameObject.onWallLeftEdge) {
            gameObject.onWallLeftEdge = false;
        }

        // //Right of GameWindow
        if (gameObject.right() >= this.gameWindow.width)
        {
            // gameObject.onWallRightEdge = true;
            gameObject.posX = this.gameWindow.width - gameObject.width;
        }
        else if (gameObject.onWallRightEdge) {
            gameObject.onWallRightEdge = false;
        }

        //Top of Game Window
        if(gameObject.top() <= 0) {
            gameObject.posY = 0;
        }   
    }

    collidingWithPlatform(platform) {

        if(player.bottom() > platform.top() && player.velocityY > 0) {
            // console.log('onTop');
            //Above platform
            player.grounded = true;
            player.groundedCount++;
            player.velocityY = 0;
            player.posY = platform.top() - player.height;
        }
        else if(player.bottom() > platform.top() && player.velocityY < 0)
        {
            // console.log('under');
            //Below platform
            player.velocityY = 0;
            player.posY = platform.bottom();
        }   
    }

    collidingWithObjective(objective) {
        // player.color = 'green';
        //advances level
        if(this.currentLevel != this.levels.length - 1) {
            this.currentLevel++;
            this.startLevel(); 
            
        }
        else {
            console.log('Finished all the levels!')
        }
        
        
    }

    collidingWithHazard(hazard) {
        if(this.runningInEditor) {
            this.startLevelInEditor(levelEditor.activeEditorObjects);
        }
        else {
            this.startLevel();
        }
    }

    isColliding(gameObject) {

        if((gameObject.left() < player.right()) 
        && (gameObject.right() > player.left()) 
        && (gameObject.bottom() > player.top()) 
        && (gameObject.top() < player.bottom()))
        {
            return true;
        }
        else {
            return false;
        }

    }

}