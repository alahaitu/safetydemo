'use strict';

var BeachAlien = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;

	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;
  
};

BeachAlien.prototype = Object.create(Phaser.Sprite.prototype);
BeachAlien.prototype.constructor = BeachAlien;

BeachAlien.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = BeachAlien;
