'use strict';
var eatObject = require('../prefabs/eatObject');  

  function EatingScene() {}
  EatingScene.prototype = {

    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 500;

        this.eating_background = this.game.add.sprite(0, 0, 'eating_bg');
        this.backButton = this.add.button(899, 23, 'exit_btn' , this.startPlayroom, this);
        this.backButton = this.add.button(899, 23, 'pointer' , this.startPlayroom, this);
        this.backButton = this.add.button(899, 23, 'score_meter' , this.startPlayroom, this);

        this.objectGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * this.game.rnd.integerInRange(3, 4.5), this.generateObjects, this);

        this.objectGenerator.timer.start();

    },
    generateObjects: function() {

      this.eatObject = new eatObject(this.game, -201, 400, 'eating_x' + this.game.rnd.integerInRange(1, 8));

      this.game.add.existing(this.eatObject);

      this.input.onDown.add(this.eatObject.drop, this.eatObject);

    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = EatingScene;
