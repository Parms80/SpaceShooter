function Projectile(width, height, src, worldXPos, worldYPos, type, velocity) {
	this.type = type;
	  if (type == "image") {
	    this.image = new Image();
	    this.image.src = src;
	  }
    this.width = width;
    this.height = height;
    this.worldXPos = worldXPos;
    this.worldYPos = worldYPos; 
    this.velocity = velocity;
    this.isAlive = false;
    this.bulletSound = new sound("Sounds/sfx_laser1.ogg");
}

Projectile.prototype.reset = function() {
	this.isAlive = false;
}

Projectile.prototype.respawn = function() {
    this.worldXPos = playerShip.worldXPos;
    this.worldYPos = playerShip.worldYPos;
    this.isAlive = true;
	// this.bulletSound.play();
}

Projectile.prototype.update = function() {
    this.worldYPos += this.velocity;
    if (this.worldYPos < 0) {
    	this.isAlive = false;
    }

    this.checkCollisions();
}

Projectile.prototype.checkCollisions = function() {

	for (i = 0; i < enemyShips.length; i++) {
		if (enemyShips[i].isAlive) {
			if (this.worldXPos >= enemyShips[i].worldXPos-enemyShips[i].width/2 &&
				this.worldXPos <= enemyShips[i].worldXPos+enemyShips[i].width/2 &&
				this.worldYPos >= enemyShips[i].worldYPos-enemyShips[i].height/2 &&
				this.worldYPos <= enemyShips[i].worldYPos+enemyShips[i].height/2){
				this.isAlive = false;
				enemyShips[i].killEnemy();
			}
		}
	}
}

Projectile.prototype.draw = function() {
    ctx = myGameArea.context;
    if (this.type == "image") {
      myGameArea.context.drawImage(this.image, 
        this.worldXPos * xScale - this.width/2, 
        this.worldYPos * yScale,
        this.width * xScale, this.height * yScale);
    } else {
        ctx.fillStyle = "white";
        ctx.fillRect(this.worldXPos, this.worldYPos, this.width * xScale, this.height * yScale);
    }
}