'use strict';

var BadEatObject = function(game, x, y, sprite, frame) {
	Phaser.Sprite.call(this, game, x, y, sprite, frame);

	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
  	this.body.velocity.x = 100;

	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;
  
};

BadEatObject.prototype = Object.create(Phaser.Sprite.prototype);
BadEatObject.prototype.constructor = BadEatObject;

BadEatObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

BadEatObject.prototype.drop = function(){
	this.body.allowGravity = true;
	this.body.velocity.y = -200;
	this.body.velocity.x = 50;
};

module.exports = BadEatObject;
