'use strict';
var spaceAlien = require('../prefabs/spaceAlien');  

  function SpaceScene() {}
  SpaceScene.prototype = {
    preload: function() {
      // Override this method to add some load operations. 
      // If you need to use the loader, you may need to use them here.
    },
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 200;

      this.add.sprite(0, 0, 'trampoline_game_bg');

      this.spaceAlien = new spaceAlien(this.game, 100, 200, 'trampoline_game_alien');
      this.game.add.existing(this.spaceAlien);
    },
    update: function() {
      if (this.game.input.activePointer.isDown){
          this.spaceAlien.up();
      }
    },
    paused: function() {
    },
    render: function() {
    },
    shutdown: function() {
    }
  };
module.exports = SpaceScene;
