class Hazard {

    posX;
    posY;
    velocityX;
    velocityY;
    color;
    width;
    height;
    movementController;
    affectedByGravity;
    type = 'hazard';
    sprite;

    constructor(width, height, posX, posY, color, spritePath) {

        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.velocityX = 0;
        this.velocityY = 0;
        this.color = color;
        this.movementController = new PlatformMovementController();
        this.affectedByGravity = false;
        // let image = new Image(this.width, this.height);
        // image.src = spritePath;
        // this.sprite = image;

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