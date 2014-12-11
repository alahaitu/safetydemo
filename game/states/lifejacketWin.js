'use strict';
  function LifejacketWin() {}
  LifejacketWin.prototype = {
    preload: function() {
    },
    create: function() {

      this.goodSound1 = this.add.audio('jee');
      this.applauseSound = this.add.audio('applause_sound');

      this.bg = this.game.add.sprite(0, 0, 'lifejacket_bgwin');

      this.wave = this.game.add.tileSprite(0, 240, 1024, 345, 'lifejacket_wave1');
      this.wave.autoScroll(-50,0);

      this.boat = this.game.add.sprite(0, 0, 'lifejack_boat');

      this.wave2 = this.game.add.tileSprite(0, 561, 1024, 125, 'lifejacket_wave2');
      this.wave2.autoScroll(-100,0);

      this.backButton = this.add.button(899, 23, 'exit_btn' , this.startPlayroom, this);

      this.applauseSound.play();

      this.game.time.events.add(Phaser.Timer.SECOND * 1, this.startCheer, this);
      this.game.time.events.add(Phaser.Timer.SECOND * 5, this.startPlayroom, this);

    },

    update: function() {
      this.boat.x++;
    },

    startCheer: function() {
    this.goodSound1.play();
    },

    paused: function() {
      // This method will be called when game paused.
    },
    render: function() {
      // Put render operations here.
    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    },
    shutdown: function() {
      // This method will be called when the state is shut down 
      // (i.e. you switch to another state from this one).
    }
  };
module.exports = LifejacketWin;
