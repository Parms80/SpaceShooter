function PlayerShip(width, height, src, worldXPos, worldYPos, type) {
	this.type = type;
	  if (type == "image") {
	    this.image = new Image();
	    this.image.src = src;
	  }
    this.width = width;
    this.height = height;
    this.worldXPos = worldXPos;
    this.worldYPos = worldYPos; 
    this.shield = 3;
    this.isAlive = true;
    this.explosionSound = new sound("Sounds/explosion-17.wav");
}

PlayerShip.prototype.reset = function() {
	this.shield = 3;
	this.isAlive = true;
}

PlayerShip.prototype.updatePlayerShip = function() {
	if (this.isAlive) {
	    if (myGameArea.x) {
	        this.worldXPos = myGameArea.x / xScale;
	        if (this.worldXPos > numWorldUnitsX-this.width) {
	        	this.worldXPos = numWorldUnitsX-this.width;
	        }
	    }
	    if (myGameArea.touchX) {
	        this.worldXPos = myGameArea.x / xScale;
	    }
	}
}

PlayerShip.prototype.takeDamage = function() {
	this.shield--;
	if (this.shield <= 0) {
		this.isAlive = false;
    	this.explosionSound.play();
    	gameState = GAMESTATE_GAMEOVER;
	}
}

PlayerShip.prototype.drawPlayerShip = function() {
	if (this.isAlive) {
	    ctx = myGameArea.context;
	    if (this.type == "image") {
	      myGameArea.context.drawImage(this.image, 
	        this.worldXPos * xScale - this.width/2, 
	        this.worldYPos * yScale,
	        this.width * xScale, this.height * yScale);
	    } else {
	        ctx.fillStyle = "red";
	        ctx.fillRect(this.worldXPos, this.worldYPos, this.width * xScale, this.height * yScale);
	    }
	}
}

PlayerShip.prototype.getShield = function() {
	return this.shield;
}