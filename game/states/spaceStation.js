'use strict';
var stationAlien = require('../prefabs/stationAlien');  
var goodStationObject = require('../prefabs/goodStationObject');
var badStationObject = require('../prefabs/badStationObject');

var badObjectGroup;

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

      this.stationAlien = new stationAlien(this.game, 40, 150, 'spacest_alien');
      this.game.add.existing(this.stationAlien);

      this.stationAlien.loadTexture('spacest_alien',0);

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
          var rand = this.game.rnd.integerInRange(1, 2);

          switch (rand){
            case 1:
            sprite = 'spacest_hat';
              break;
            case 2:
            sprite = 'spacest_crown';
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

        // Spawn the "Good" object
        switch(total){
          case 3:
                this.goodStationObject = new goodStationObject(this.game, 700, 0, 'spacest_vest');
          break;
          case 4:
                this.goodStationObject = new goodStationObject(this.game, 550, 0, 'spacest_vest');
          break;
          case 5:
                this.goodStationObject = new goodStationObject(this.game, 400, 0, 'spacest_vest');
          break;
        }
          this.game.add.existing(this.goodStationObject);
          this.goodStationObject.inputEnabled = true;
          this.goodStationObject.input.enableDrag(true);
    },

    update: function() {

    this.game.physics.arcade.collide(this.goodStationObject, this.stationAlien, this.goodCollide, null, this);

    badObjectGroup.forEach(function(badStationObject){
          this.game.physics.arcade.collide(badStationObject, this.stationAlien, this.badCollide, null, this);
    }, this);

    },

    badCollide: function() {
      console.log("bad");
    },
    goodCollide: function() {
      console.log("good");
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
