
'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/img/LoadScreen/loadscreen_bg.png');
   
    // Loading screen assets
    this.load.image('loading_bg', 'assets/img/LoadScreen/loadscreen_bg.png');
    this.load.spritesheet('loading_alien', 'assets/img/LoadScreen/loadscreen_aliensprite.png', 260, 350, 4);
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.stage.disableVisibilityChange = true;

    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.maxWidth = 1024;
    this.scale.maxHeight = 668;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize(true);

    this.game.state.start('preload');
  }
};

module.exports = Boot;
