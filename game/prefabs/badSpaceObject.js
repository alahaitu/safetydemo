'use strict';

var BadSpaceObject = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

	this.game.physics.arcade.enableBody(this);

	this.body.allowGravity = false;

	var speed = this.game.rnd.integerInRange(100, 350);

 	this.body.velocity.x = -speed;

	var angle = this.game.rnd.integerInRange(20, 70);

 	if (this.body.y >= 250){
	 	this.body.velocity.y = -angle;
 	}
	if (this.body.y < 250){
	 	this.body.velocity.y = angle;
 	}


	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;
};

BadSpaceObject.prototype = Object.create(Phaser.Sprite.prototype);
BadSpaceObject.prototype.constructor = BadSpaceObject;

BadSpaceObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = BadSpaceObject;
