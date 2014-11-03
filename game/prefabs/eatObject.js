'use strict';

var EatObject = function(game, x, y, sprite, frame) {
	Phaser.Sprite.call(this, game, x, y, sprite, frame);

  	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
  	this.body.velocity.x = 100;

};

EatObject.prototype = Object.create(Phaser.Sprite.prototype);
EatObject.prototype.constructor = EatObject;

EatObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
},

EatObject.prototype.drop = function(){
	this.body.allowGravity = true;
	this.body.velocity.y = -200;
	this.body.velocity.x = 50;
};

module.exports = EatObject;
