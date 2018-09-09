showGameOver = function() {
	
    ctx = myGameArea.context;
    ctx.font = "30px Arial";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.fillText("Game Over", window.innerWidth/2, window.innerHeight/2);
	ctx.fillText("Press screen to restart", window.innerWidth/2, window.innerHeight - 30);

}