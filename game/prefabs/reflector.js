'use strict';

var Reflector = function(game, x, y, sprite, frame) {
  	Phaser.Sprite.call(this, game, x, y, sprite, frame);

	this.game.physics.arcade.enableBody(this);

	this.body.allowGravity = false;
	this.anchor.setTo(0.5, 0.5);
    this.body.angularVelocity = this.game.rnd.integerInRange(-10, 10);


	var speed = this.game.rnd.integerInRange(100, 150);

 	this.body.velocity.x = -speed;

	var angle = this.game.rnd.integerInRange(0, 40);

 	if (this.body.y >= 250){
	 	this.body.velocity.y = -angle;
 	}
	if (this.body.y < 250){
	 	this.body.velocity.y = angle;
 	}


	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;
};

Reflector.prototype = Object.create(Phaser.Sprite.prototype);
Reflector.prototype.constructor = Reflector;

Reflector.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Reflector;
