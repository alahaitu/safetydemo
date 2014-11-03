
'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);

    // Playroom assets
    this.load.image('playroom_bg', 'assets/img/Playroom/playr_bg.png');
    this.load.image('playr_button_ball', 'assets/img/Playroom/playr_button_ball.png');
    this.load.image('playr_button_duck', 'assets/img/Playroom/playr_button_duck.png');
    this.load.image('playr_button_eat', 'assets/img/Playroom/playr_button_eat.png');
    this.load.image('playr_button_plant', 'assets/img/Playroom/playr_button_plant.png');

    // Eating game assets
    this.load.image('eating_bg', 'assets/img/EatingGame/kitchen.png');
    this.load.image('eating_carrot', 'assets/img/EatingGame/EatingGame_Carrot.png');
    this.load.image('eating_potato', 'assets/img/EatingGame/EatingGame_Potato.png');
    this.load.image('eating_strawberry', 'assets/img/EatingGame/EatingGame_Strawberry.png');
    this.load.image('eating_tomato', 'assets/img/EatingGame/EatingGame_Tomato.png');
    this.load.image('eating_x1', 'assets/img/EatingGame/EatingGame_X1.png');
    this.load.image('eating_x2', 'assets/img/EatingGame/EatingGame_X2.png');
    this.load.image('eating_x3', 'assets/img/EatingGame/EatingGame_X3.png');
    this.load.image('eating_x4', 'assets/img/EatingGame/EatingGame_X4.png');


    this.load.image('eatobject', 'assets/img/eating/rectangle_purple.png');
  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if(!!this.ready) {
      this.game.state.start('playroom');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};

module.exports = Preload;
