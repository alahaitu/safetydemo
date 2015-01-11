
'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
   
    // Loading screen assets
    this.load.image('loading_bg', 'assets/img/LoadScreen/loadscreen_bg.png');
    this.load.spritesheet('loading_alien', 'assets/img/LoadScreen/loadscreen_aliensprite.png', 260, 350, 4);
  },
  create: function() {
    //this.background = this.game.add.sprite(0, 0, 'preloader_bg');
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;
