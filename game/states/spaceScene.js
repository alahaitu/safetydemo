'use strict';
var spaceAlien = require('../prefabs/spaceAlien');  
var reflector = require('../prefabs/reflector');

var reflectorGroup;
var reflectorGeneratePace = 1.5;

  function SpaceScene() {}
  SpaceScene.prototype = {

    preload: function() {
    },
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 200;

      this.add.sprite(0, 0, 'trampoline_game_bg');

      this.spaceAlien = new spaceAlien(this.game, 100, 200, 'trampoline_game_alien');
      this.game.add.existing(this.spaceAlien);

      this.reflectorGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * reflectorGeneratePace, this.reflectorGenerator, this);

      this.reflectorGenerator.timer.start();

      reflectorGroup = this.game.add.group();
    },

    reflectorGenerator: function(){
        var sprite;
        var rand = this.game.rnd.integerInRange(1, 5);

        switch (rand){
          case 1:
          sprite = 'trampoline_game_heart_ref';
            break;
          case 2:
          sprite = 'trampoline_game_bear_ref';
            break;
          case 3:
          sprite = 'trampoline_game_two_ref';
            break;
          case 4:
          sprite = 'trampoline_game_dog_ref';
            break;
          case 5:
          sprite = 'trampoline_game_star_ref';
            break;
        }

          this.reflector = new reflector(this.game, 1000, this.game.rnd.integerInRange(0, 500), sprite);
          reflectorGroup.add(this.reflector);
  },

  alienReflectorcollision: function(reflector){
    reflector.destroy();
  },

    update: function() {
      if (this.game.input.activePointer.isDown){
          this.spaceAlien.up();
      }

    // Collide reflector with the alien
    reflectorGroup.forEach(function(reflector){
          this.game.physics.arcade.collide(reflector, this.spaceAlien, this.alienReflectorcollision, null, this);
    }, this);

    },
    paused: function() {
    },
    render: function() {
    },
    shutdown: function() {
    }
  };
module.exports = SpaceScene;
