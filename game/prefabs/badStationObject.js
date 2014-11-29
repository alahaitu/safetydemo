'use strict';

var BadStationObject = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = true;
	this.body.collideWorldBounds = true;

};

BadStationObject.prototype = Object.create(Phaser.Sprite.prototype);
BadStationObject.prototype.constructor = BadStationObject;

BadStationObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = BadStationObject;
