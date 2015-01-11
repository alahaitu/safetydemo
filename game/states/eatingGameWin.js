'use strict';
  function EatingGameWin() {}
  EatingGameWin.prototype = {
    preload: function() {
      // Override this method to add some load operations. 
      // If you need to use the loader, you may need to use them here.
    },
    create: function() {
      this.add.sprite(0, 0, 'eating_game_win');
      this.applauseSound = this.add.audio('applause_sound');
      this.applauseSound.play();

      this.winNarration = this.add.audio('5_piki_on_syonyt_tarpeeksi');

      this.game.time.events.add(Phaser.Timer.SECOND * 4, this.startPlayground, this);
      this.game.time.events.add(Phaser.Timer.SECOND * 1, this.startNarration, this);
    },
    startPlayground: function() {
      this.game.state.start('playroom');
    },

    startNarration: function() {
      this.winNarration.play();
    },

    update: function() {
      // state update code
    },
    paused: function() {
      // This method will be called when game paused.
    },
    render: function() {
      // Put render operations here.
    },
    shutdown: function() {
      // This method will be called when the state is shut down 
      // (i.e. you switch to another state from this one).
    }
  };
module.exports = EatingGameWin;
