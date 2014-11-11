'use strict';
var dropCheck = false;

var GoodEatObject = function(game, x, y, sprite, frame) {
	Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = true;
 	this.body.velocity.x = 20;

	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;

	dropCheck = false;
};

GoodEatObject.prototype = Object.create(Phaser.Sprite.prototype);
GoodEatObject.prototype.constructor = GoodEatObject;

GoodEatObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
},

GoodEatObject.prototype.dropCheck = function(){
	// Higher horizontal speed on table
 	this.body.velocity.x = 130;

 	// Return false drops the object off the table
	if (dropCheck == true){
		return false;
	}
	return true;
},

GoodEatObject.prototype.drop = function(){
	this.body.allowGravity = true;
	this.body.velocity.x = 20;
	console.log("Good food dropped.");
	dropCheck = true;
};

module.exports = GoodEatObject;
