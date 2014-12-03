'use strict';

var Floor = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
	this.body.immovable = true;  
};

Floor.prototype = Object.create(Phaser.Sprite.prototype);
Floor.prototype.constructor = Floor;

Floor.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Floor;
