'use strict';
  function Credits() {}
  Credits.prototype = {
    preload: function() {},
    create: function() {
        this.credit_background = this.game.add.sprite(0, 0, 'creditscr_bg');
        this.backButton = this.add.button(910, 30, 'creditscr_exit' , this.startPlayroom, this);
    },
    startPlayroom: function(){
      this.game.state.start('playroom');
    },
    update: function() {
    },
    paused: function() {
    },
    render: function() {
    },
    shutdown: function() {
    }
  };
module.exports = Credits;
