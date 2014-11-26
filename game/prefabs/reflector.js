'use strict';

var Reflector = function(game, x, y, sprite, frame) {
  	Phaser.Sprite.call(this, game, x, y, sprite, frame);

	this.game.physics.arcade.enableBody(this);

	this.body.allowGravity = false;

 	this.body.velocity.x = -170;

	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;
};

Reflector.prototype = Object.create(Phaser.Sprite.prototype);
Reflector.prototype.constructor = Reflector;

Reflector.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Reflector;
