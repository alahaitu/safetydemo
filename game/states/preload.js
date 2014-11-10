
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
    this.load.audio('bg_music', 'assets/sounds/bg_music.mp3');


    // Shared assets
    this.load.image('exit_btn', 'assets/img/Shared/SpaceJump_home.png');
    this.load.image('score_meter', 'assets/img/Shared/VeggieP_ScoreMeter.png');
    this.load.image('score_pointer', 'assets/img/Shared/VeggieP_ScorePointer.png');
    this.load.image('score_basket', 'assets/img/Shared/TrampolineG_ScoreBasket.png');
    this.load.audio('helmet_on_sound', 'assets/sounds/helmet_on.wav');


    // Playroom assets
    this.load.image('playroom_bg', 'assets/img/Playroom/playr_bg.png');
    this.load.image('playr_button_ball', 'assets/img/Playroom/playr_button_ball.png');
    this.load.image('playr_button_duck', 'assets/img/Playroom/playr_button_duck.png');
    this.load.image('playr_button_eat', 'assets/img/Playroom/playr_button_eat.png');
    this.load.image('playr_button_plant', 'assets/img/Playroom/playr_button_plant.png');
    this.load.image('playr_button_space', 'assets/img/Playroom/playr_button_space.png');    

    // Eating game assets

    // Good food
    this.load.image('eating_bg', 'assets/img/EatingGame/kitchen.png');
    this.load.image('eating_g1', 'assets/img/EatingGame/EatingGame_1.png');
    this.load.image('eating_g2', 'assets/img/EatingGame/EatingGame_2.png');
    this.load.image('eating_g3', 'assets/img/EatingGame/EatingGame_3.png');
    this.load.image('eating_g4', 'assets/img/EatingGame/EatingGame_4.png');
    this.load.image('eating_g5', 'assets/img/EatingGame/EatingGame_5.png');
    this.load.image('eating_g6', 'assets/img/EatingGame/EatingGame_6.png');    

    // Bad good
    this.load.image('eating_b1', 'assets/img/EatingGame/EatingGame_X1.png');
    this.load.image('eating_b2', 'assets/img/EatingGame/EatingGame_X2.png');
    this.load.image('eating_b3', 'assets/img/EatingGame/EatingGame_X3.png');
    this.load.image('eating_b4', 'assets/img/EatingGame/EatingGame_X4.png');
    this.load.image('eating_b5', 'assets/img/EatingGame/EatingGame_X5.png');
    this.load.image('eating_b6', 'assets/img/EatingGame/EatingGame_X6.png');

    // Trampoline game assets

    this.load.image('trampoline_game_bg', 'assets/img//Trampoline/SpaceJump_bg.png');
    this.load.image('trampoline_game_alien', 'assets/img/Trampoline/SpaceJump_alien.png');
    //this.load.image('trampoline_game_bee', 'assets/img/Trampoline/TrampolineG_Bee.png');
    this.load.image('trampoline_game_cherry', 'assets/img/Trampoline/SpaceJump_ref1.png');
    this.load.image('trampoline_game_grape', 'assets/img/Trampoline/SpaceJump_ref2.png');
    this.load.image('trampoline_game_strawberry', 'assets/img/Trampoline/SpaceJump_ref3.png');
    this.load.image('trampoline_game_jump_button', 'assets/img/Trampoline/TrampolineG_JumpButton.png');  
    //this.load.audio('bee_sound', 'assets/sounds/Tukes_bee_sfx.mp3');
    this.load.image('trampoline_game_win', 'assets/img/Trampoline/TrampolineG_Win.png');
    this.load.image('trampoline_rbutton', 'assets/img/Trampoline/TrampolineG_RightButton.png');
    this.load.image('trampoline_lbutton', 'assets/img/Trampoline/TrampolineG_LeftButton.png');

    this.music = this.add.audio('bg_music');
    this.music.play('',0,1,true);

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
