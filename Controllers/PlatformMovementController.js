class PlatformMovementController {

    platform;

    constructor(platform){
        this.platform = platform;
    }

    calculateVelocityX () {
        if(this.platform.right() >= this.platform.startingXPosition + this.platform.maxXTravelDistance 
        || this.platform.left() + 1 <= this.platform.startingXPosition) {
            this.platform.velocityX = this.platform.velocityX * - 1;
        }
    }

    calculateVelocityY() {
        if(this.platform.top() <= this.platform.startingYPosition - this.platform.maxYTravelDistance 
        || this.platform.top() >= this.platform.startingYPosition + 1){
            this.platform.velocityY = this.platform.velocityY * -1;
        }
    }

}