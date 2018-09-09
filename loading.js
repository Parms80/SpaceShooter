var progress = 0;

function showLoading() {

    ctx = myGameArea.context;
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Loading", window.innerWidth/2, window.innerHeight/2);
    updateProgressBar();
    drawProgressBar();
    // drawShip();
}

function updateProgressBar() {
    progress += (window.innerWidth-40)/100;
    if (progress >= window.innerWidth-40) {
      gameState = GAMESTATE_GAMEPLAY;
    }
}

function drawProgressBar() {
    ctx.fillRect(20, window.innerHeight/2 + 40, progress, 20);
}

function drawShip() {
  myGameArea.context.drawImage("Sprites/player.png", 
          20 + progress, 
          window.innerHeight/2 + 40,
          playerShip.width * xScale, playerShip.height * yScale);
}