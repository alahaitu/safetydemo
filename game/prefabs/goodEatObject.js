'use strict';

var GoodEatObject = function(game, x, y, sprite, frame) {
	Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
 	this.body.velocity.x = 130;

	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;

};

GoodEatObject.prototype = Object.create(Phaser.Sprite.prototype);
GoodEatObject.prototype.constructor = GoodEatObject;

GoodEatObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
},

GoodEatObject.prototype.drop = function(){
	this.body.allowGravity = true;
	this.body.velocity.y = -200;
	this.body.velocity.x = 50;
	console.log("Good food dropped.");
};

module.exports = GoodEatObject;
