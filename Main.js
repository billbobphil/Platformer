// Globals
let playerHeight = 30;
let playerWidth = 30;
let canvas = document.getElementById('GameScreen');
let player = new Player(canvas.width - playerWidth, canvas.height - playerHeight, playerWidth, playerHeight, 0, 0, '#FFFFFF', new PlayerMovementController(), true);
let gameEngine = new GameEngine();

window.addEventListener('load', (e) => {

    setup();

    gameEngine.levels = getAllLevels();
    gameEngine.currentLevel = 0;
    gameEngine.startLevel();

});

setup = () => {
    //Initialize canvas as desired    
    canvas.style.backgroundColor = 'rgba(40, 40, 40, .8)';
}

getAllLevels = () => {
    levelArray = new Array();

    levelArray.push(new Level0(canvas));
    levelArray.push(new Level1(canvas));
    levelArray.push(new Level2(canvas));
    levelArray.push(new Level3(canvas));

    return levelArray;
}
