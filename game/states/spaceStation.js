'use strict';
var stationAlien = require('../prefabs/stationAlien');  

  function SpaceStation() {}
  SpaceStation.prototype = {
    preload: function() {
      // Override this method to add some load operations. 
      // If you need to use the loader, you may need to use them here.
    },
    create: function() {
      this.add.sprite(0, 0, 'trampoline_game_bg');

      this.stationAlien = new stationAlien(this.game, 40, 150, 'spacest_alien');
      this.game.add.existing(this.stationAlien);

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
module.exports = SpaceStation;
