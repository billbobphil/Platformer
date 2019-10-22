class Player {

    posX;
    posY;
    velocityX;
    velocityY;
    grounded = true;
    ducking = false;
    onWallRightEdge = false;
    onWallLeftEdge = false;
    color;
    width;
    height;
    affectedByGravity;
    affectedByFriction;
    sprite;
    type = 'player';

    constructor(posX, posY, width, height, velX, velY, color, movementController, affectedByGravity) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.velocityX = velX;
        this.velocityY = velY;
        this.color = color;
        this.movementController = movementController;
        this.affectedByGravity = affectedByGravity;
        this.affectedByFriction = true;
        // this.sprite = new Image(this.width, this.height);
        // this.sprite.src = '../Sprites/Player.png';
    }

    calculateVelocityX() {
        this.movementController.calculateVelocityX(this);
    }

    calculateVelocityY() {
        this.movementController.calculateVelocityY(this);
    }

    left() {
        return this.posX;
    }

    right() {
        return this.posX + this.width;
    }
    
    top() {
        return this.posY;
    }

    bottom() {
        return this.posY + this.height;
    }

    


}