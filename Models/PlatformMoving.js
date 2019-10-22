class PlatformMoving extends Platform {

    maxXTravelDistance;
    maxYTravelDistance;
    startingXPosition;
    startingYPosition;
    velocityX;
    velocityY;

    constructor(width, height, posX, posY, color, velocityX, velocityY, maxXTravelDistance, maxYTravelDistance) {

        super(width, height, posX, posY, color);
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.maxXTravelDistance = maxXTravelDistance;
        this.maxYTravelDistance = maxYTravelDistance;

        this.startingYPosition = posY;
        this.startingXPosition = posX;

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