'use strict';

var Lifejacket = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = true;
	this.body.collideWorldBounds = true;  
	this.anchor.setTo(0.5, 0.5);

};

Lifejacket.prototype = Object.create(Phaser.Sprite.prototype);
Lifejacket.prototype.constructor = Lifejacket;

Lifejacket.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Lifejacket;
