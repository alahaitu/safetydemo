'use strict';
var eatObject = require('../prefabs/eatObject');  

  function EatingScene() {}
  EatingScene.prototype = {
    preload: function() {
      // Override this method to add some load operations. 
      // If you need to use the loader, you may need to use them here.
    },
    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 500;

        this.sprite = this.game.add.sprite(0, 0, 'playroom_bg');


        this.objectGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 3, this.generateObjects, this);
        this.objectGenerator.timer.start();

    },
    generateObjects: function() {

      this.eatObject = new eatObject(this.game, -50, 300);

      this.game.add.existing(this.eatObject);

      this.input.onDown.add(this.eatObject.drop, this.eatObject);

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
module.exports = EatingScene;
