'use strict';
var stationAlien = require('../prefabs/stationAlien');  
var goodStationObject = require('../prefabs/goodStationObject');
var badStationObject = require('../prefabs/badStationObject');

var badObjectGroup;
var state = 0;

  function SpaceStation() {}
  SpaceStation.prototype = {
    preload: function() {
      // Override this method to add some load operations. 
      // If you need to use the loader, you may need to use them here.
    },
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 200;

      this.add.sprite(0, 0, 'trampoline_game_bg');
      this.add.sprite(420, 0, 'spacest_pipe');

      this.stationAlien = new stationAlien(this.game, 120, 450, 'spacest_alienhitbox');
      this.game.add.existing(this.stationAlien);

      this.alienSprite = this.game.add.sprite(40 ,150, 'spacest_alien');

     // this.objectGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 5, this.objectGenerator, this);
    //  this.objectGenerator.timer.start();

      badObjectGroup = this.game.add.group();

      this.objectGenerator();

    },

    objectGenerator: function(){

      var pipe = 0;
      var total = 0;
      var goodPipe = 0;

      // Spwan 2 "bad" objects
      for (var i = 0; i < 2; i++)
      {
          var sprite;
          var rand = this.game.rnd.integerInRange(1, 5);

          switch (rand){
            case 1:
            sprite = 'spacest_hat';
              break;
            case 2:
            sprite = 'spacest_crown';
              break;
            case 3:
            sprite = 'spacest_camera';
              break;
            case 4:
            sprite = 'spacest_ribbon';
              break;
            case 5:
            sprite = 'spacest_watch';
              break;
          }

          // If going through loop for first time, randomize
          if (pipe == 0){
            pipe = this.game.rnd.integerInRange(1, 3);
          }

        switch (pipe){
          case 1:
            total = total + 1;
            this.badStationObject = new badStationObject(this.game, 400, 0, sprite);
            pipe = this.game.rnd.integerInRange(2, 3);
            break;
          case 2:
            total = total + 2;
            this.badStationObject = new badStationObject(this.game, 550, 0, sprite);
                var random = this.game.rnd.integerInRange(1, 2);
              if (random == 1){
                pipe = 1;
              }
              else if (random == 2){
                pipe = 3;
              }
          break;
          case 3:
            total = total + 3;
            this.badStationObject = new badStationObject(this.game, 700, 0, sprite);
            pipe = this.game.rnd.integerInRange(1, 2);
          break;
          }
            this.badStationObject.inputEnabled = true;
            this.badStationObject.input.enableDrag(true);

            badObjectGroup.add(this.badStationObject);
        }

      // Select good object sprite to match state
      var goodSprite = 'spacest_vest';
       switch (state){
            case 0:
            goodSprite = 'spacest_vest';
              break;
            case 1:
            goodSprite = 'spacest_helmet';
              break;
            case 2:
            goodSprite = 'spacest_reflector';
              break;
          }

        // Spawn the "Good" object
        switch(total){
          case 3:
                this.goodStationObject = new goodStationObject(this.game, 700, 0, goodSprite);
          break;
          case 4:
                this.goodStationObject = new goodStationObject(this.game, 550, 0, goodSprite);
          break;
          case 5:
                this.goodStationObject = new goodStationObject(this.game, 400, 0, goodSprite);
          break;
        }
          this.game.add.existing(this.goodStationObject);
          this.goodStationObject.inputEnabled = true;
          this.goodStationObject.input.enableDrag(true);
    },

    update: function() {

      // Change the sprite to match sate
      switch(state){
      case 0:
          this.alienSprite.loadTexture('spacest_alien',0);
      break;
      case 1:
          this.alienSprite.loadTexture('spacest_alien',4);
      break;
      case 2:
          this.alienSprite.loadTexture('spacest_alien',5);
      break;
      case 3:
          this.alienSprite.loadTexture('spacest_alien',6);
      break;
      }

    this.game.physics.arcade.collide(this.goodStationObject, this.stationAlien, this.goodCollide, null, this);

    badObjectGroup.forEach(function(badStationObject){
          this.game.physics.arcade.collide(badStationObject, this.stationAlien, this.badCollide, null, this);
    }, this);

    },

    badCollide: function() {
      switch(state){
      case 0:
          this.alienSprite.loadTexture('spacest_alien',1);
      break;
      case 1:
          this.alienSprite.loadTexture('spacest_alien',2);
      break;
      case 2:
          this.alienSprite.loadTexture('spacest_alien',3);
      break;
      }
    },

    goodCollide: function() {

      // Destroy all objects
      this.goodStationObject.destroy();
      badObjectGroup.destroy();
      badObjectGroup = this.game.add.group();

      // Proceed to next state, Spawn new objects,
      state++;
      if ( state < 3){
        this.objectGenerator();
      }

      // Victory, proceed to next game
      if (state == 3)
      {
        this.applauseSound = this.add.audio('applause_sound');
        this.game.time.events.add(Phaser.Timer.SECOND * 4, this.startSpaceScene, this);
        this.applauseSound.play();
      }
    },
    startSpaceScene: function() {
      this.game.state.start('spaceScene');

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
module.exports = SpaceStation;
