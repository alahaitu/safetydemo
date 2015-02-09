'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(1024, 688, Phaser.AUTO, 'safety-demo');

  // Game States
  game.state.add('boot', require('./states/boot'));
  game.state.add('credits', require('./states/credits'));
  game.state.add('eating', require('./states/eating'));
  game.state.add('eatingGameWin', require('./states/eatingGameWin'));
  game.state.add('lifejacket', require('./states/lifejacket'));
  game.state.add('lifejacketWin', require('./states/lifejacketWin'));
  game.state.add('playroom', require('./states/playroom'));
  game.state.add('preload', require('./states/preload'));
  game.state.add('spaceRunWin', require('./states/spaceRunWin'));
  game.state.add('spaceScene', require('./states/spaceScene'));
  game.state.add('spaceStation', require('./states/spaceStation'));
  

  game.state.start('boot');
};