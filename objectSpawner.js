function ObjectSpawner(objectsArray, spawnTime) {
	this.objectsArray = objectsArray;
	this.spawnTime = spawnTime;
	this.timeToSpawn = spawnTime;
}

ObjectSpawner.prototype.reset = function() {
	for (i = 0; i < this.objectsArray.length; i++) {
		this.objectsArray[i].reset();
	}
}

ObjectSpawner.prototype.updateObjects = function() {
	for (var i = 0; i < this.objectsArray.length; i++) {
		if (this.objectsArray[i].isAlive) {
			this.objectsArray[i].update();
		}
	}

	this.checkSpawnTime();
}

ObjectSpawner.prototype.checkSpawnTime = function() {
	this.timeToSpawn--;
	if (this.timeToSpawn < 0) {
		this.timeToSpawn = this.spawnTime;
		this.spawnNewObject();
	}
}

ObjectSpawner.prototype.spawnNewObject = function() {
	for (var i = 0; i < this.objectsArray.length; i++) {
		if (!this.objectsArray[i].isAlive) {
			this.objectsArray[i].respawn();
			break;
		}
	}
}

ObjectSpawner.prototype.drawObjects = function() {
	for (var i = 0; i < this.objectsArray.length; i++) {
		if (this.objectsArray[i].isAlive) {
			this.objectsArray[i].draw();
		}
	}
}