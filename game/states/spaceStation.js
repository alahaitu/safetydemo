'use strict';
var stationAlien = require('../prefabs/stationAlien');  
var goodStationObject = require('../prefabs/goodStationObject');
var badStationObject = require('../prefabs/badStationObject');
var floor = require('../prefabs/floor');

var badObjectGroup;
var state = 0;
var soundCooldown = 0;

  function SpaceStation() {}
  SpaceStation.prototype = {
    preload: function() {
      // Override this method to add some load operations. 
      // If you need to use the loader, you may need to use them here.
    },
    create: function() {
      this.game.sound.stopAll();
      this.music = this.add.audio('avaruusbiisi');
      this.music.play('',0,1,true);

      // Intro narration for spaceStation
      this.intro = this.add.audio('7_pyoraretkelle');
      this.intro.play('',0,1,false);

      state = 0;
      soundCooldown = 0;
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 400;
      this.popSound1 = this.add.audio('putkea_alas_1');
      this.popSound2 = this.add.audio('putkea_alas_2');
      this.noSound1 = this.add.audio('ei_kay_1');
      this.noSound2 = this.add.audio('ei_kay_2');
      this.goodSound1 = this.add.audio('jee');
      this.goodSound2 = this.add.audio('noniin');

      this.add.sprite(0, 0, 'spacest_background');

      this.floor = new floor(this.game, 0, 650, 'spacest_floor');
      this.game.add.existing(this.floor);

      this.backButton = this.add.button(899, 23, 'exit_btn' , this.startPlayroom, this);

      this.stationAlien = new stationAlien(this.game, 140, 250, 'spacest_alienhitbox');
      this.game.add.existing(this.stationAlien);

      this.alienSprite = this.game.add.sprite(40 ,180, 'spacest_alien');

      badObjectGroup = this.game.add.group();

      this.objectGenerator();
    },

    objectGenerator: function(){

      var pipe = 0;
      var total = 0;
      var goodPipe = 0;
      var lastSprite = 0;
      var rand = 0;

      // Spwan 2 "bad" objects
      for (var i = 0; i < 2; i++)
      {
          var sprite;

        while (rand == lastSprite){
          rand = this.game.rnd.integerInRange(1, 6);
        }
          lastSprite = rand;

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
            case 6:
            sprite = 'spacest_flower';
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
            this.badStationObject = new badStationObject(this.game, 570, 0, sprite);
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
            this.badStationObject = new badStationObject(this.game, 740, 0, sprite);
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
                this.goodStationObject = new goodStationObject(this.game, 740, 0, goodSprite);
          break;
          case 4:
                this.goodStationObject = new goodStationObject(this.game, 570, 0, goodSprite);
          break;
          case 5:
                this.goodStationObject = new goodStationObject(this.game, 400, 0, goodSprite);
          break;
        }
          this.game.add.existing(this.goodStationObject);
          this.goodStationObject.inputEnabled = true;
          this.goodStationObject.input.enableDrag(true);

          var rand = this.game.rnd.integerInRange(1, 2);

          switch (rand){
            case 1:
                this.popSound1.play();
              break;
            case 2:
                this.popSound2.play();
              break;
            }
            
      this.add.sprite(420, 0, 'spacest_pipe');

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

    // Collide the objects with invisible floor
      this.game.physics.arcade.collide(this.goodStationObject, this.floor);

    badObjectGroup.forEach(function(badStationObject){
          this.game.physics.arcade.collide(badStationObject, this.floor);
    }, this);

    // Collide check for aliens & objects
    this.game.physics.arcade.overlap(this.goodStationObject, this.stationAlien, this.goodCollide, null, this);

    badObjectGroup.forEach(function(badStationObject){
          this.game.physics.arcade.overlap(badStationObject, this.stationAlien, this.badCollide, null, this);
    }, this);
    
      if (soundCooldown != 0){
        soundCooldown--;
      }
    },

    badCollide: function() {

      if ( soundCooldown == 0 ){
          var rand = this.game.rnd.integerInRange(1, 2);
          switch (rand){
            case 1:
            this.noSound1.play();
              break;
            case 2:
            this.noSound2.play();
              break;
            }
        soundCooldown = 100;
      }

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


      var rand = this.game.rnd.integerInRange(1, 2);
      switch (rand){
            case 1:
            this.goodSound1.play();
              break;
            case 2:
            this.goodSound2.play();
              break;
            }


      // Proceed to next state, Spawn new objects,
      state++;
      if (state < 1){
        soundCooldown++;
      }
      if ( state < 3){
        this.objectGenerator();
      }

      // Victory, proceed to next game
      if (state == 3)
      {
        this.applauseSound = this.add.audio('applause_sound');
        this.game.time.events.add(Phaser.Timer.SECOND * 8, this.startSpaceScene, this);
        this.game.time.events.add(Phaser.Timer.SECOND * 4, this.spaceSceneInstruction, this);
        this.applauseSound.play();
      }
    },
    startSpaceScene: function() {
      this.game.state.start('spaceScene');
    },
    spaceSceneInstruction: function() {
      this.add.sprite(0, 0, 'spacerun_instruction');
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
    },
    startPlayroom: function() {

      this.game.sound.stopAll();
      this.bgmusic = this.add.audio('bg_music');
      this.bgmusic.play('',0,1,true);

      this.game.state.start('playroom');


    }
  };
module.exports = SpaceStation;
