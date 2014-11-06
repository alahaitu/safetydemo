'use strict';
var goodEatObject = require('../prefabs/goodEatObject');  
var badEatObject = require('../prefabs/badEatObject');  

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

      var goodOrBad = this.game.rnd.integerInRange(0,1);

      // Good object
      if (goodOrBad == 0) {
          this.goodEatObject = new goodEatObject(this.game, -201, 400, 'eating_x' + this.game.rnd.integerInRange(5, 8));

          this.game.add.existing(this.goodEatObject);

          this.input.onDown.add(this.goodEatObject.drop, this.goodEatObject);
      }

      // Bad object
      else if (goodOrBad == 1) {
          this.badEatObject = new badEatObject(this.game, -201, 400, 'eating_x' + this.game.rnd.integerInRange(1, 4));

          this.game.add.existing(this.badEatObject);

          this.input.onDown.add(this.badEatObject.drop, this.badEatObject);
      }



    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = EatingScene;
