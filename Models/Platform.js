class Platform {

    posX;
    posY;
    velocityX;
    velocityY;
    color;
    width;
    height;
    movementController;
    affectedByGravity = false;
    affectedByFriction = false;
    type = 'platform';

    constructor(width, height, posX, posY, color) {

        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.velocityX = 0;
        this.velocityY = 0;
        this.color = color;
        this.movementController = new PlatformMovementController(this);

    }

    setPosY = (posY) => {
        console.log('platform posY passed value: ' + posY);
        this.posY = posY;
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