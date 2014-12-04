'use strict';

var BadSpaceObject = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

	this.game.physics.arcade.enableBody(this);

	this.body.allowGravity = false;
	this.anchor.setTo(0.5, 0.5);

	if (sprite != "spacerun_car"){
	    this.body.angularVelocity = this.game.rnd.integerInRange(-30, 30);

		var angle = this.game.rnd.integerInRange(0, 20);

	 	if (this.body.y >= 250){
		 	this.body.velocity.y = -angle;
	 	}
		if (this.body.y < 250){
		 	this.body.velocity.y = angle;
	 	}
	}
	
	var speed = this.game.rnd.integerInRange(100, 150);

 	this.body.velocity.x = -speed;

	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;
};

BadSpaceObject.prototype = Object.create(Phaser.Sprite.prototype);
BadSpaceObject.prototype.constructor = BadSpaceObject;

BadSpaceObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = BadSpaceObject;
