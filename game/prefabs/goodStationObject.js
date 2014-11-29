'use strict';

var GoodStationObject = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = true;
	this.body.collideWorldBounds = true;
  
};

GoodStationObject.prototype = Object.create(Phaser.Sprite.prototype);
GoodStationObject.prototype.constructor = GoodStationObject;

GoodStationObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = GoodStationObject;
