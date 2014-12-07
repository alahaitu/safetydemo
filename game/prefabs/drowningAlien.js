'use strict';

var DrowningAlien = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
	
	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;
};

DrowningAlien.prototype = Object.create(Phaser.Sprite.prototype);
DrowningAlien.prototype.constructor = DrowningAlien;

DrowningAlien.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = DrowningAlien;
