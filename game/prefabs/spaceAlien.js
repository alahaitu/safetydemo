'use strict';

var SpaceAlien = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = true;
	this.body.immovable = true;
};

SpaceAlien.prototype = Object.create(Phaser.Sprite.prototype);
SpaceAlien.prototype.constructor = SpaceAlien;

SpaceAlien.prototype.update = function() {

// Alien can't fall below screen
if (this.body.y > 485){
		this.body.velocity.y = -100;
}

},
SpaceAlien.prototype.up = function() { 
	this.body.velocity.y = -330;
};

module.exports = SpaceAlien;