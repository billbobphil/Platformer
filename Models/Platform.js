class Platform {

    posX;
    posY;
    velocityX;
    velocityY;
    maxXTravelDistance;
    maxYTravelDistance;
    startingXPosition;
    startingYPosition;
    color;
    width;
    height;
    movementController;
    affectedByGravity;
    affectedByFriction;
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
        this.affectedByGravity = false;
        this.affectedByFriction = false;

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

    setMovingPlatform(direction, velocity, maxTravelDistance) {
        if(direction == 'vertical') {
            this.startingYPosition = this.posY;
            this.velocityY = velocity;
            this.maxYTravelDistance = maxTravelDistance;
        }
        else if (direction == 'horizontal') {
            this.startingXPosition = this.posX;
            this.velocityX = velocity;
            this.maxXTravelDistance = maxTravelDistance;
        }
    }
}