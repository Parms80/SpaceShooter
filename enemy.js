function EnemyShip(width, height, src, worldXPos, worldYPos, type, velocity) {
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
    this.explosionSound = new sound("Sounds/explosion-17.wav");
}

EnemyShip.prototype.reset = function() {
    this.isAlive = false;
}

EnemyShip.prototype.respawn = function() {
    this.worldXPos = Math.floor(Math.random()*numWorldUnitsX);
    this.worldYPos = 0;
    this.isAlive = true;
}

EnemyShip.prototype.update = function() {
    if (this.isAlive){
        this.worldYPos += this.velocity;
        if (this.worldYPos > window.innerHeight/yScale) {
            this.isAlive = false;
        }
    }

    if (this.collisionWith(playerShip)) {
        playerShip.takeDamage();
        this.killEnemy();
    }
}

EnemyShip.prototype.collisionWith = function(otherobj) {
    if (otherobj.isAlive) {
        var myleft = this.worldXPos - this.width/2;
        var myright = this.worldXPos + this.width/2;
        var mytop = this.worldYPos - this.height/2;
        var mybottom = this.worldYPos + this.height/2;
        var otherleft = otherobj.worldXPos - otherobj.width/2;
        var otherright = otherobj.worldXPos + otherobj.width/2;
        var othertop = otherobj.worldYPos - otherobj.height/2;
        var otherbottom = otherobj.worldYPos + otherobj.height/2;

        var crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }
        return crash;
    } else {
        return false;
    }
}

EnemyShip.prototype.killEnemy = function() {
    this.isAlive = false;
    this.explosionSound.play();
}

EnemyShip.prototype.draw = function() {
    if (this.isAlive) {
        ctx = myGameArea.context;
        if (this.type == "image") {
          myGameArea.context.drawImage(this.image, 
            this.worldXPos * xScale - this.width/2, 
            this.worldYPos * yScale,
            this.width * xScale, this.height * yScale);
        } else {
            ctx.fillStyle = "blue";
            ctx.fillRect(this.worldXPos, this.worldYPos, this.width * xScale, this.height * yScale);
        }
    }
}