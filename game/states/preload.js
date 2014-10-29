
'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('playroom_bg', 'assets/img/playroom/background.png');
    this.load.image('rectangle_blue', 'assets/img/playroom/rectangle_blue.png');
    this.load.image('rectangle_green', 'assets/img/playroom/rectangle_green.png');
    this.load.image('rectangle_red', 'assets/img/playroom/rectangle_red.png');
    this.load.image('eatobject', 'assets/img/eating/rectangle_purple.png');
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('eatingScene');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;
