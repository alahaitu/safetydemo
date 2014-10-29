'use strict';
  function Playroom() {}
  Playroom.prototype = {
    preload: function() {
      // Override this method to add some load operations. 
      // If you need to use the loader, you may need to use them here.
    },
    create: function() {
      this.sprite = this.game.add.sprite(0, 0, 'playroom_bg');

      this.eatingSceneStartButton = this.game.add.button(this.game.width/2, 550, 'rectangle_blue', this.eatingSceneStartClick, this);
      this.beachSceneStartButton = this.game.add.button(200, 540, 'rectangle_green', this.beachSceneStartClick, this);
      this.spaceSceneStartButton = this.game.add.button(850, 600, 'rectangle_red', this.spaceSceneStartClick, this);

      this.eatingSceneStartButton.anchor.setTo(0.5,0.5);
      this.beachSceneStartButton.anchor.setTo(0.5,0.5);
      this.spaceSceneStartButton.anchor.setTo(0.5,0.5);


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
module.exports = Playroom;
