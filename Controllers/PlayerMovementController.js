class PlayerMovementController {

    upPressed;
    downPressed;
    leftPressed;
    rightPressed;
    maxVelocityX = 8;
    jumpHeight = 15;
    wallJumpHeight = 12;
    wallJumpHorizontalTakeoffSpeed = 8;


    constructor() {
        this.upPressed = false;
        this.downPressed = false;
        this.rightPressed = false;
        this.leftPressed = false;
        this.window = window;

        this.window.addEventListener('keydown', (event) => {
            this.keyDownHandler(event);
        });

        this.window.addEventListener('keyup', (event) => {
            this.keyUpHandler(event);
        });
    }

    keyDownHandler(keyEvent) {
        switch (keyEvent.key){
            case 'w':
            case 'W':

                this.upPressed = true;

                break;
            case 's':
            case 'S':

                this.downPressed = true;

                break;
            case 'a':
            case 'A':

                this.leftPressed = true;

                break;
            case 'd':
            case 'D':

                this.rightPressed = true;

                break;
        }
    }

    keyUpHandler(keyEvent) {
        switch (keyEvent.key){
            case 'w':
            case 'W':

                this.upPressed = false;

                break;
            case 's':
            case 'S':

                this.downPressed = false;

                break;
            case 'a':
            case 'A':

                this.leftPressed = false;

                break;
            case 'd':
            case 'D':

                this.rightPressed = false;

                break;
        }

    }

    calculateVelocityY(player) {

        if(this.upPressed) {
            if(player.grounded)
            {
                player.velocityY -= this.jumpHeight;
                player.grounded = false;
            }
            else if (player.onWallLeftEdge) {
                player.velocityY -= this.wallJumpHeight;
                player.velocityX = this.wallJumpHorizontalTakeoffSpeed;
            }
            else if (player.onWallRightEdge){
                player.velocityY -= this.wallJumpHeight;
                player.velocityX = -this.wallJumpHorizontalTakeoffSpeed;
            }
        }

        if(this.downPressed && !player.grounded) {
            player.velocityY += 1;
        }
        else if (this.downPressed && !player.ducking) {
            player.height = player.height - 10;
            player.posY = player.posY + 10;
            
            // let duckedImage = new Image();
            // duckedImage.src = '../Sprites/Player-Crouched.png';
            // player.sprite = duckedImage;
            player.ducking = true;
        }
        else if (!this.downPressed && player.ducking) {
            player.height = player.height + 10;

            // let standingImage = new Image();
            // standingImage.src = '../Sprites/Player.png';
            // player.sprite = standingImage;
            
            player.ducking = false;
        }
    }

    calculateVelocityX(player) {
        if(this.rightPressed) {
            if(player.velocityX <= this.maxVelocityX) 
            {
                player.velocityX += 2;
            }   
        }

        if (this.leftPressed) {
            if(player.velocityX > -this.maxVelocityX)
            {
                player.velocityX -= 2;
            }
        }
    }
}