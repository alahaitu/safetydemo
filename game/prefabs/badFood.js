'use strict';

var BadFood = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
	this.body.velocity.x = 130;
	this.anchor.setTo(0.5, 0.5);

	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;
  
};

BadFood.prototype = Object.create(Phaser.Sprite.prototype);
BadFood.prototype.constructor = BadFood;

BadFood.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = BadFood;
