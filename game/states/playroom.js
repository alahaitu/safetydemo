'use strict';
  function Playroom() {}
  Playroom.prototype = {
    create: function() {
      this.playroom_background = this.game.add.sprite(0, 0, 'playroom_bg');

      this.eatingSceneStartButton = this.game.add.button(715, 225, 'playr_button_eat', this.eatingSceneStartClick, this);
      this.beachSceneStartButton = this.game.add.button(210, 460, 'playr_button_duck', this.beachSceneStartClick, this);
      this.spaceSceneStartButton = this.game.add.button(835, 500, 'playr_button_ball', this.spaceSceneStartClick, this);
      this.spaceSceneStartButton = this.game.add.button(45, 160, 'playr_button_plant', this.spaceSceneStartClick, this);


      //this.eatingSceneStartButton.anchor.setTo(0.5,0.5);
      //this.beachSceneStartButton.anchor.setTo(0.5,0.5);
      //this.spaceSceneStartButton.anchor.setTo(0.5,0.5);


    },
    eatingSceneStartClick: function() {
      this.game.state.start('eatingScene');
    },
    beachSceneStartClick: function() {
      this.game.state.start('beachScene');
    },
    spaceSceneStartClick: function() {
      this.game.state.start('spaceScene');
    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = Playroom;
