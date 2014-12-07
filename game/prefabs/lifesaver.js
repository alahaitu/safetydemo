'use strict';

var Lifesaver = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
	this.body.collideWorldBounds = true;  
};

Lifesaver.prototype = Object.create(Phaser.Sprite.prototype);
Lifesaver.prototype.constructor = Lifesaver;

Lifesaver.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Lifesaver;
