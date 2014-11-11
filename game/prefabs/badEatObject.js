'use strict';
var dropCheck = false;

var BadEatObject = function(game, x, y, sprite, frame) {
	Phaser.Sprite.call(this, game, x, y, sprite, frame);

	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = true;
  	this.body.velocity.x = 20;

	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;

  	dropCheck = false;
};

BadEatObject.prototype = Object.create(Phaser.Sprite.prototype);
BadEatObject.prototype.constructor = BadEatObject;

BadEatObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
},

BadEatObject.prototype.dropCheck = function(){
	// Higher horizontal speed on table
 	this.body.velocity.x = 130;

 	// Return false drops the object off the table
	if (dropCheck == true){
		return false;
	}
	return true;
},

BadEatObject.prototype.drop = function(){
	this.body.allowGravity = true;
	this.body.velocity.x = 20;
	this.inputEnabled = false;
	console.log("Bad food dropped.");
	dropCheck = true;
};

module.exports = BadEatObject;
