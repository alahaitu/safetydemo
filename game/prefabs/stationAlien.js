'use strict';

var StationAlien = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
	this.body.immovable = true;
  
};

StationAlien.prototype = Object.create(Phaser.Sprite.prototype);
StationAlien.prototype.constructor = StationAlien;

StationAlien.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = StationAlien;
