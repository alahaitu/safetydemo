'use strict';
  function Playroom() {}
  Playroom.prototype = {
    create: function() {
      this.playroom_background = this.game.add.sprite(0, 0, 'playroom_bg');

      this.eatingSceneStartButton = this.game.add.button(676, 245, 'playr_button_eat', this.eatingSceneStartClick, this);
      this.beachSceneStartButton = this.game.add.button(210, 460, 'playr_button_duck', this.beachSceneStartClick, this);
      this.spaceSceneStartButton = this.game.add.button(750, 50, 'playr_button_space', this.spaceSceneStartClick, this);
      this.plant = this.game.add.button(45, 160, 'playr_button_plant', this.plantAnimationClick, this);
      this.creditStartButton = this.game.add.button(50, 570, 'playr_button_credits', this.creditStartClick, this);

      this.alienWave = this.game.add.sprite(323,100, 'playr_sprite_wave');
      this.alienWave.animations.add('wave');
      this.alienWave.play('wave', 8, true);

    },
    eatingSceneStartClick: function() {
      this.game.state.start('eating');
    },
    beachSceneStartClick: function() {
      this.game.state.start('lifejacket');
    },
    spaceSceneStartClick: function() {
      this.game.state.start('spaceStation');
    },
    plantAnimationClick: function() {
    },
    ballAnimationClick: function() {
    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    },
    creditStartClick: function() {
      this.game.state.start('credit');
    }
  };
module.exports = Playroom;
