
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
    this.load.image('transparentRectangle', 'assets/img/EatingGame/rectangle_transparent.png');
    this.load.audio('bg_music', 'assets/sounds/bg_music.mp3');
    this.load.audio('bg_music', 'assets/sounds/tunnari-14-11-10.mp3');

    // Loading screen assets
    this.load.image('loading_bg', 'assets/img/LoadScreen/loadscreen_bg.png');
    this.load.spritesheet('loadscreen_aliensprite', 'assets/img/LoadScreen/loadscreen_aliensprite.png', 260, 350);

    // Shared assets
    this.load.image('exit_btn', 'assets/img/Shared/SpaceJump_home.png');
    this.load.image('score_meter', 'assets/img/Shared/VeggieP_ScoreMeter.png');
    this.load.image('score_pointer', 'assets/img/Shared/VeggieP_ScorePointer.png');
    this.load.image('score_basket', 'assets/img/Shared/TrampolineG_ScoreBasket.png');
    this.load.audio('helmet_on_sound', 'assets/sounds/helmet_on.wav');
    this.load.audio('applause_sound', 'assets/sounds/applause.wav');

    // Playroom assets
    this.load.image('playroom_bg', 'assets/img/Playroom/playr_bg.png');
    this.load.image('playr_button_ball', 'assets/img/Playroom/playr_button_ball.png');
    this.load.image('playr_button_duck', 'assets/img/Playroom/playr_button_duck.png');
    this.load.image('playr_button_eat', 'assets/img/Playroom/playr_button_eat.png');
    this.load.image('playr_button_plant', 'assets/img/Playroom/playr_button_plant.png');
    this.load.image('playr_button_space', 'assets/img/Playroom/playr_button_space.png');    

    // Eating game assets
    this.load.image('eating_game_win', 'assets/img/EatingGame/kitchen_winscreen.png');
    this.load.image('eating_bg', 'assets/img/EatingGame/kitchen.png');
    this.load.image('eating_table', 'assets/img/EatingGame/EatingGame_kitchen_table.png');
    this.load.audio('rousk1', 'assets/sounds/rousk01.wav');
    this.load.audio('rousk2', 'assets/sounds/rousk02.wav');
    this.load.audio('rousk3', 'assets/sounds/rousk03.wav');
    this.load.audio('rousk4', 'assets/sounds/rousk04.wav');
    this.load.audio('rousk5', 'assets/sounds/rousk05.wav');
    this.load.audio('hyi_1', 'assets/sounds/hyi_1.wav');
    this.load.audio('hyi_2', 'assets/sounds/hyi_2.wav');
    this.load.audio('hyi_3', 'assets/sounds/hyi_3.wav');
    this.load.audio('hammastys_1', 'assets/sounds/hammastys_1.wav');
    this.load.audio('hammastys_2', 'assets/sounds/hammastys_2.wav');
    this.load.audio('hammastys_3', 'assets/sounds/hammastys_3.wav');
    this.load.image('rectangle_hitbox', 'assets/img/EatingGame/rectangle_hitbox.png');
    this.load.audio('picking_veggie', 'assets/sounds/picking_veggie.wav');
    

    // Good food
    this.load.spritesheet('eating_alien_gf', 'assets/img/EatingGame/EatingGame_good_food_smap.png', 383, 530);
    this.load.image('eating_g1', 'assets/img/EatingGame/EatingGame_1.png');
    this.load.image('eating_g2', 'assets/img/EatingGame/EatingGame_2.png');
    this.load.image('eating_g3', 'assets/img/EatingGame/EatingGame_3.png');
    this.load.image('eating_g4', 'assets/img/EatingGame/EatingGame_4.png');
    this.load.image('eating_g5', 'assets/img/EatingGame/EatingGame_5.png');
    this.load.image('eating_g6', 'assets/img/EatingGame/EatingGame_6.png');    
    this.load.image('eating_g7', 'assets/img/EatingGame/EatingGame_7.png');    
    this.load.image('eating_g8', 'assets/img/EatingGame/EatingGame_8.png');    

    // Bad good
    this.load.spritesheet('eating_alien_bf', 'assets/img/EatingGame/EatingGame_bad_food_smap.png', 435, 530, 3);
    this.load.image('eating_b1', 'assets/img/EatingGame/EatingGame_X1.png');
    this.load.image('eating_b2', 'assets/img/EatingGame/EatingGame_X2.png');
    this.load.image('eating_b3', 'assets/img/EatingGame/EatingGame_X3.png');
    this.load.image('eating_b4', 'assets/img/EatingGame/EatingGame_X4.png');
    this.load.image('eating_b5', 'assets/img/EatingGame/EatingGame_X5.png');
    this.load.image('eating_b6', 'assets/img/EatingGame/EatingGame_X6.png');

    // Trampoline game assets
 
    this.load.image('trampoline_game_bg', 'assets/img//Trampoline/SpaceJump_bg.png');
    this.load.image('trampoline_game_alien', 'assets/img/Trampoline/SpaceJump_alien.png');
    this.load.image('trampoline_game_bee', 'assets/img/Trampoline/TrampolineG_Bee.png');
    this.load.image('trampoline_game_bear_ref', 'assets/img/Trampoline/SpaceJump_ref1.png');
    this.load.image('trampoline_game_heart_ref', 'assets/img/Trampoline/SpaceJump_ref2.png');
    this.load.image('trampoline_game_two_ref', 'assets/img/Trampoline/SpaceJump_ref3.png');
    this.load.image('trampoline_game_dog_ref', 'assets/img/Trampoline/SpaceJump_ref4.png');
    this.load.image('trampoline_game_star_ref', 'assets/img/Trampoline/SpaceJump_ref5.png');
    this.load.image('trampoline_game_jump_button', 'assets/img/Trampoline/TrampolineG_JumpButton.png');  
    //this.load.audio('bee_sound', 'assets/sounds/Tukes_bee_sfx.mp3');
    this.load.image('trampoline_game_win', 'assets/img/Trampoline/SpJumpWin_bg.png');
    this.load.image('trampoline_game_win_alien', 'assets/img/Trampoline/SpJumpWin_alien.png');
    this.load.spritesheet('trampoline_game_win_glow', 'assets/img/Trampoline/SpJumpWin_sprite.png', 670, 688, 2);
    this.load.image('trampoline_rbutton', 'assets/img/Trampoline/TrampolineG_RightButton.png');
    this.load.image('trampoline_lbutton', 'assets/img/Trampoline/TrampolineG_LeftButton.png');
    this.load.image('reflectors_icon', 'assets/img/Trampoline/SpaceJump_iconref.png');

    // Beach game assets
    this.load.image('beach_bg', 'assets/img/BeachGame/LifeSaver_bg.png');
    this.load.image('beach_lsaver', 'assets/img/BeachGame/LifeSaver_orangething.png');
    this.load.image('beach_alien1', 'assets/img/BeachGame/LifeSaver_bluealien.png');
    this.load.image('beach_alien1_saver', 'assets/img/BeachGame/LifeSaver_bluealien_wear.png');
    this.load.image('beach_alien2', 'assets/img/BeachGame/LifeSaver_pinkalien.png');
    this.load.image('beach_alien2_saver', 'assets/img/BeachGame/LifeSaver_pinkalien_wear.png');

    // Space station assets
    this.load.spritesheet('spacest_alien', 'assets/img/SpaceStation/spacest_sprite.png', 350, 460, 10);
    this.load.image('spacest_alienhitbox', 'assets/img/SpaceStation/alienhitbox.png');
    this.load.image('spacest_background', 'assets/img/SpaceStation/avaruusasema_bg.png');
    this.load.image('spacest_crown', 'assets/img/SpaceStation/spacest_crown.png');
    this.load.image('spacest_hat', 'assets/img/SpaceStation/spacest_hat.png');
    this.load.image('spacest_helmet', 'assets/img/SpaceStation/spacest_helmet.png');
    this.load.image('spacest_pipe', 'assets/img/SpaceStation/spacest_pipe.png');
    this.load.image('spacest_vest', 'assets/img/SpaceStation/spacest_vest.png');
    this.load.image('spacest_camera', 'assets/img/SpaceStation/spacest_camera.png');
    this.load.image('spacest_reflector', 'assets/img/SpaceStation/spacest_reflector.png');
    this.load.image('spacest_ribbon', 'assets/img/SpaceStation/spacest_ribbon.png');
    this.load.image('spacest_watch', 'assets/img/SpaceStation/spacest_watch.png');
    this.load.image('spacest_flower', 'assets/img/SpaceStation/spacest_flower.png');
    this.load.audio('ei_kay_1', 'assets/sounds/ei_kay_1.wav');
    this.load.audio('ei_kay_2', 'assets/sounds/ei_kay_2.wav');
    this.load.image('spacest_floor', 'assets/img/SpaceStation/floor.png');
    this.load.audio('jee', 'assets/sounds/jee.wav');
    this.load.audio('noniin', 'assets/sounds/noniin.wav');


    // Space run assets
    this.load.image('spacerun_alien', 'assets/img/SpaceRun/spacerun_alien.png');
    this.load.image('spacerun_bg', 'assets/img/SpaceRun/spacerun_bg.png');
    this.load.image('spacerun_car', 'assets/img/SpaceRun/spacerun_car.png');
    this.load.image('spacerun_iconref', 'assets/img/SpaceRun/spacerun_iconref.png');
    this.load.image('spacerun_instruction', 'assets/img/SpaceRun/spacerun_instruction.png');
    this.load.image('spacerun_meteorite', 'assets/img/SpaceRun/spacerun_meteorite.png');
    this.load.image('spacerun_meteorite_small', 'assets/img/SpaceRun/spacerun_meteorite_small.png');
    this.load.image('spacerun_meteorite_medium', 'assets/img/SpaceRun/spacerun_meteorite_medium.png');
    this.load.image('spacerun_ref1', 'assets/img/SpaceRun/spacerun_ref1.png');
    this.load.image('spacerun_ref2', 'assets/img/SpaceRun/spacerun_ref2.png');
    this.load.image('spacerun_ref3', 'assets/img/SpaceRun/spacerun_ref3.png');
    this.load.image('spacerun_ref4', 'assets/img/SpaceRun/spacerun_ref4.png');
    this.load.image('spacerun_ref5', 'assets/img/SpaceRun/spacerun_ref5.png');
    this.load.image('spacerun_scoremetre', 'assets/img/SpaceRun/spacerun_scoremetre.png');
    this.load.image('spacerun_yellow', 'assets/img/SpaceRun/spacerun_yellow.png');
    this.load.audio('plop_1', 'assets/sounds/plop_1.wav');
    this.load.audio('putkea_alas_1', 'assets/sounds/putkea_alas_1.wav');
    this.load.audio('putkea_alas_2', 'assets/sounds/putkea_alas_2.wav');
    this.load.audio('sattuu_1', 'assets/sounds/sattuu_1.wav');
    this.load.audio('sattuu_2', 'assets/sounds/sattuu_2.wav');
    this.load.audio('sattuu_3', 'assets/sounds/sattuu_3.wav');
    this.load.spritesheet('spacerun_alienbike_sprite', 'assets/img/SpaceRun/spacerun_alienbike_sprite.png', 225, 285);
    this.load.audio('suihkumoottori', 'assets/sounds/suihkumoottori.wav');
    this.load.audio('avaruusbiisi', 'assets/sounds/avaruusbiisi.wav');
    this.load.audio('heijastin', 'assets/sounds/heijastin.wav');


    this.load.image('spacerun_ground', 'assets/img/SpaceRun/spacerun_ground.png');

    // Lifejacket game assets
    this.load.spritesheet('lifejack_alien1', 'assets/img/LifeJacket/lifejack_alien1.png', 220, 450, 5);
    this.load.spritesheet('lifejack_alien2', 'assets/img/LifeJacket/lifejack_alien2.png', 280, 310, 5);
    this.load.spritesheet('lifejack_alien3', 'assets/img/LifeJacket/lifejack_alien3.png', 210, 360, 5);
    this.load.image('lifejack_jacket1', 'assets/img/LifeJacket/lifejack_jacket1.png');
    this.load.image('lifejack_jacket2', 'assets/img/LifeJacket/lifejack_jacket2.png');
    this.load.image('lifejack_jacket3', 'assets/img/LifeJacket/lifejack_jacket3.png');
    this.load.image('lifejack_bg', 'assets/img/LifeJacket/lifejack_bg.png');
    this.load.image('lifejacket_bgwin', 'assets/img/LifeJacket/lifejacket_bgwin.png');
    this.load.image('lifejacket_wave1', 'assets/img/LifeJacket/lifejacket_wave1.png');
    this.load.image('lifejacket_wave2', 'assets/img/LifeJacket/lifejacket_wave2.png');
    this.load.image('lifejack_boat', 'assets/img/LifeJacket/lifejack_boat-02.png');

    this.load.audio('hihna_kiinni', 'assets/sounds/hihna_kiinni.wav');
    this.load.audio('hihna_kiinni_noniin', 'assets/sounds/hinha_kiinni_noniin.wav');


  },
  create: function() {
    this.music = this.add.audio('bg_music');
    this.music.play('',0,1,true);
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
