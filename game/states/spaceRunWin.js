'use strict';
  function SpaceRunWin() {}
  SpaceRunWin.prototype = {
    create: function() {
      this.add.sprite(0, 0, 'spacerun_win_bg');
      this.add.sprite(180,0, 'spacerun_win_alien');
      this.applauseSound = this.add.audio('applause_sound');
      this.game.time.events.add(Phaser.Timer.SECOND * 3, this.startPlayground, this);
      this.applauseSound.play();
    },
    startPlayground: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = SpaceRunWin;
