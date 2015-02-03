
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
    if (this.game.device.desktop)
    {
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.minWidth = 480;
        this.scale.minHeight = 322.5;
        this.scale.maxWidth = 1024;
        this.scale.maxHeight = 668;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);
    }
    else
    {
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.minWidth = 480;
        this.scale.minHeight = 322.5;
        this.scale.maxWidth = 1024;
        this.scale.maxHeight = 688;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.forceOrientation(true, false);
        this.scale.hasResized.add(this.gameResized, this);
        this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
        this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
        this.scale.setScreenSize(true);
    }

    this.game.state.start('preload');
  },
  gameResized: function (width, height) {
      //  This could be handy if you need to do any extra processing if the game resizes.
      //  A resize could happen if for example swapping orientation on a device.
  },
  enterIncorrectOrientation: function () {
      BasicGame.orientated = false;
      document.getElementById('orientation').style.display = 'block';
  },
  leaveIncorrectOrientation: function () {
      BasicGame.orientated = true;
      document.getElementById('orientation').style.display = 'none';
  }
};

module.exports = Boot;
