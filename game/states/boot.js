
'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    //this.load.image('preloader', 'assets/preloader.gif');
    this.load.image('preloader', 'assets/img/LoadScreen/loadscreen_bg.png');
  },
  create: function() {
    //this.background = this.game.add.sprite(0, 0, 'preloader_bg');
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;
