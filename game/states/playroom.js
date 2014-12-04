'use strict';
  function Playroom() {}
  Playroom.prototype = {
    create: function() {
      this.playroom_background = this.game.add.sprite(0, 0, 'playroom_bg');

      this.eatingSceneStartButton = this.game.add.button(676, 245, 'playr_button_eat', this.eatingSceneStartClick, this);
      this.beachSceneStartButton = this.game.add.button(210, 460, 'playr_button_duck', this.beachSceneStartClick, this);
      this.spaceSceneStartButton = this.game.add.button(750, 50, 'playr_button_space', this.spaceSceneStartClick, this);
      //this.ball= this.game.add.button(835, 500, 'playr_button_ball', this.ballAnimationClick, this);
      this.plant = this.game.add.button(45, 160, 'playr_button_plant', this.plantAnimationClick, this);

    },
    eatingSceneStartClick: function() {
      this.game.state.start('eating');
    },
    beachSceneStartClick: function() {
      //this.game.state.start('beachScene');
    },
    spaceSceneStartClick: function() {
      this.game.state.start('spaceStation');
    },
    plantAnimationClick: function() {
      //this.game.state.start('spaceStation');
    },
    ballAnimationClick: function() {
      //this.game.state.start('spaceScene');
    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = Playroom;
