'use strict';
var spaceAlien = require('../prefabs/spaceAlien');  
var reflector = require('../prefabs/reflector');
var badSpaceObject = require('../prefabs/badSpaceObject');

var reflectorGroup;
var badObjectGroup;
var reflectorGeneratePace = 2.5;
var badObjectGeneratePace = 4.4;
var score = 0;
var streak = 0;

  function SpaceScene() {}
  SpaceScene.prototype = {

    preload: function() {
    },
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 400;
      this.game.input.enabled = true;
      score = 0;
      streak = 0;
      this.popSound = this.add.audio('plop_1');
      this.sadSound = this.add.audio('hyi_2');

      this.add.sprite(0, 0, 'spacerun_bg');
      this.backButton = this.add.button(899, 23, 'exit_btn' , this.startPlayroom, this);
      reflectorGroup = this.game.add.group();
      badObjectGroup = this.game.add.group();

      this.spaceAlien = new spaceAlien(this.game, 100, 200, 'spacerun_alien');
      this.game.add.existing(this.spaceAlien);

      this.scoreMeter = this.game.add.sprite(119, 38, 'spacerun_scoremetre');

      this.reflectorGeneratorTimer = this.game.time.events.loop(Phaser.Timer.SECOND * reflectorGeneratePace, this.reflectorGenerator, this);
      this.reflectorGeneratorTimer.timer.start();

      this.badObjectGeneratorTimer = this.game.time.events.loop(Phaser.Timer.SECOND * badObjectGeneratePace, this.badObjectGenerator, this);
      this.badObjectGeneratorTimer.timer.start();

    },

    reflectorGenerator: function(){
        var sprite ='';
        var rand = this.game.rnd.integerInRange(1, 5);
        switch (rand){
          case 1:
          sprite = 'spacerun_ref1';
            break;
          case 2:
          sprite = 'spacerun_ref2';
            break;
          case 3:
          sprite = 'spacerun_ref3';
            break;
          case 4:
          sprite = 'spacerun_ref4';
            break;
          case 5:
          sprite = 'spacerun_ref5';
            break;
        }
          this.reflector = new reflector(this.game, 1000, this.game.rnd.integerInRange(0, 500), sprite);
          reflectorGroup.add(this.reflector);
  },

  badObjectGenerator: function(){
        var sprite ='';
        var rand = this.game.rnd.integerInRange(1, 5);
        switch (rand){
          case 1:
          sprite = 'spacerun_meteorite_small';
            break;
          case 2:
          sprite = 'spacerun_meteorite_medium';
            break;
          case 3:
          sprite = 'spacerun_meteorite_medium';
            break;
          case 4:
          sprite = 'spacerun_meteorite';
            break;
          case 5:
          sprite = 'spacerun_car';
            break;
        }
          this.badSpaceObject = new badSpaceObject(this.game, 1000, this.game.rnd.integerInRange(0, 500), sprite);
          badObjectGroup.add(this.badSpaceObject);
  },

  alienBadObjectCollision: function(badSpaceObject){
    badSpaceObject.destroy();
    this.sadSound.play()
    
    if ( score >= 40){
        // Remove latest score sprite
        this.scoreSprite.destroy();
        score = score - 30;
        streak = 0;
    }
  },

  alienReflectorcollision: function(reflector){
    reflector.destroy();
    this.popSound.play();

    this.scoreSprite = this.add.sprite(130 + score, 47, 'spacerun_yellow');
    score = score + 30;
    streak++;

    // If player has collected 3 or more in a row, add a bit of extra challenge
    if (streak >= 3){
        // an ever increasing chance to spawn a bad object
        var rand = this.game.rnd.integerInRange(1, streak + 1);
        if (rand >= 4){
          this.badObjectGenerator();
        }
    }
  },

    update: function() {
      if (this.game.input.activePointer.isDown){
          this.spaceAlien.up();
      }

    // Collide reflector with the alien
    reflectorGroup.forEach(function(reflector){
          this.game.physics.arcade.collide(reflector, this.spaceAlien, this.alienReflectorcollision, null, this);
    }, this);

    // Collide bad objects with the alien
    badObjectGroup.forEach(function(badSpaceObject){
          this.game.physics.arcade.collide(badSpaceObject, this.spaceAlien, this.alienBadObjectCollision, null, this);
    }, this);


    // Check win
      if (score >= 600) {
         this.game.state.start('trampolineGameWin');
       }
    },
    paused: function() {
    },
    render: function() {
    },
    shutdown: function() {
    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = SpaceScene;
