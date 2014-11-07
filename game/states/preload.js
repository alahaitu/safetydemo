
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

    // Placeholder assets
    this.load.image('alien', 'assets/img/eating/rectangle_purple.png');


    // Shared assets
    this.load.image('exit_btn', 'assets/img/Shared/ExitButton.png');
    this.load.image('score_meter', 'assets/img/Shared/VeggieP_ScoreMeter.png');
    this.load.image('pointer', 'assets/img/Shared/VeggieP_ScorePointer.png');    

    // Playroom assets
    this.load.image('playroom_bg', 'assets/img/Playroom/playr_bg.png');
    this.load.image('playr_button_ball', 'assets/img/Playroom/playr_button_ball.png');
    this.load.image('playr_button_duck', 'assets/img/Playroom/playr_button_duck.png');
    this.load.image('playr_button_eat', 'assets/img/Playroom/playr_button_eat.png');
    this.load.image('playr_button_plant', 'assets/img/Playroom/playr_button_plant.png');

    // Eating game assets

    // Good food
    this.load.image('eating_bg', 'assets/img/EatingGame/kitchen.png');
    this.load.image('eating_g1', 'assets/img/EatingGame/EatingGame_Carrot.png');
    this.load.image('eating_g2', 'assets/img/EatingGame/EatingGame_Potato.png');
    this.load.image('eating_g3', 'assets/img/EatingGame/EatingGame_Strawberry.png');
    this.load.image('eating_g4', 'assets/img/EatingGame/EatingGame_Tomato.png');

    // Bad good
    this.load.image('eating_b1', 'assets/img/EatingGame/EatingGame_X1.png');
    this.load.image('eating_b2', 'assets/img/EatingGame/EatingGame_X2.png');
    this.load.image('eating_b3', 'assets/img/EatingGame/EatingGame_X3.png');
    this.load.image('eating_b4', 'assets/img/EatingGame/EatingGame_X4.png');

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
