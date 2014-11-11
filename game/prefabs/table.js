'use strict';

var Table = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
	this.body.immovable = true;  
  
};

Table.prototype = Object.create(Phaser.Sprite.prototype);
Table.prototype.constructor = Table;

Table.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Table;
