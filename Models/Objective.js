class Objective {    

    posX;
    posY;
    velocityX;
    velocityY;
    color;
    width;
    height;
    movementController;
    affectedByGravity;
    type = 'objective';

    constructor(posX, posY) {

        this.posX = posX;
        this.posY = posY;
        this.width = 40;
        this.height = 140;
        this.velocityX = 0;
        this.velocityY = 0;
        this.color = 'yellow';
        this.movementController = new PlatformMovementController();
        this.affectedByGravity = false;
        // this.sprite = new Image();
        // this.sprite.src = '../Sprites/Flag.png';

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