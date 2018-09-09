function drawEnergyBars() {
	var numBars = playerShip.getShield();
	var ctx = myGameArea.context;
    ctx.font = "20px Arial";

	ctx.fillStyle = "white";
	ctx.textAlign = "left";
	ctx.fillText("Shield", 20, 50);

	ctx.fillStyle = "blue";
	for (i = 0; i < numBars; i++) {
	    ctx.fillRect(20+ 50*i + i*2,60,50,20);
	}
}