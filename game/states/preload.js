
'use strict';
function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.game.stage.backgroundColor = '#bbf2d9';
    this.asset = this.add.sprite(this.width/2,this.height/2, 'preloader');
    this.asset.anchor.setTo(0.0, 0.0);

    //this.load_bg = this.game.add.sprite(0, 0, 'loading_bg');
    this.load_alien = this.game.add.sprite(380, 220, 'loading_alien');
    this.load_alien.animations.add('wavehand');
    this.load_alien.play('wavehand', 4, true);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);

    // Shared assets
    this.load.image('exit_btn', 'assets/img/Shared/SpaceJump_home.png');
    this.load.audio('applause_sound', 'assets/sounds/applause.mp3');
    this.load.audio('bg_music', 'assets/sounds/tunnari-14-11-10.mp3');

    // Playroom assets
    this.load.image('playroom_bg', 'assets/img/Playroom/playr_bg.png');
    this.load.image('playr_button_duck', 'assets/img/Playroom/playr_button_duck.png');
    this.load.image('playr_button_eat', 'assets/img/Playroom/playr_button_eat.png');
    this.load.image('playr_button_plant', 'assets/img/Playroom/playr_button_plant.png');
    this.load.image('playr_button_space', 'assets/img/Playroom/playr_button_space.png');    
    this.load.image('playr_button_credits', 'assets/img/Playroom/playr_button_credits.png');    
    this.load.spritesheet('playr_sprite_wave', 'assets/img/Playroom/playr_sprite_wave.png', 360, 480, 14);

    // Eating game assets
    this.load.image('eating_game_win', 'assets/img/EatingGame/kitchen_winscreen.png');
    this.load.image('eating_bg', 'assets/img/EatingGame/kitchen.png');
    this.load.image('eating_table', 'assets/img/EatingGame/EatingGame_kitchen_table.png');
    this.load.audio('rousk1', 'assets/sounds/rousk01.mp3');
    this.load.audio('rousk2', 'assets/sounds/rousk02.mp3');
    this.load.audio('rousk3', 'assets/sounds/rousk03.mp3');
    this.load.audio('rousk4', 'assets/sounds/rousk04.mp3');
    this.load.audio('rousk5', 'assets/sounds/rousk05.mp3');
    this.load.audio('hyi_1', 'assets/sounds/hyi_1.mp3');
    this.load.audio('hyi_2', 'assets/sounds/hyi_2.mp3');
    this.load.audio('hyi_3', 'assets/sounds/hyi_3.mp3');
    this.load.image('rectangle_hitbox', 'assets/img/EatingGame/rectangle_hitbox.png');
    
    // Good food
    this.load.spritesheet('eating_alien_gf', 'assets/img/EatingGame/EatingGame_good_food_smap.png', 618, 630, 7);//383, 530, 9);
    this.load.image('eating_g1', 'assets/img/EatingGame/EatingGame_1.png');
    this.load.image('eating_g2', 'assets/img/EatingGame/EatingGame_2.png');
    this.load.image('eating_g3', 'assets/img/EatingGame/EatingGame_3.png');
    this.load.image('eating_g4', 'assets/img/EatingGame/EatingGame_4.png');
    this.load.image('eating_g5', 'assets/img/EatingGame/EatingGame_5.png');
    this.load.image('eating_g6', 'assets/img/EatingGame/EatingGame_6.png');    
    this.load.image('eating_g7', 'assets/img/EatingGame/EatingGame_7.png');    
    this.load.image('eating_g8', 'assets/img/EatingGame/EatingGame_8.png');    

    // Bad good
    this.load.spritesheet('eating_alien_bf', 'assets/img/EatingGame/EatingGame_bad_food_smap.png', 620, 630, 9); //435, 530, 3);
    this.load.image('eating_b1', 'assets/img/EatingGame/EatingGame_X1.png');
    this.load.image('eating_b2', 'assets/img/EatingGame/EatingGame_X2.png');
    this.load.image('eating_b3', 'assets/img/EatingGame/EatingGame_X3.png');
    this.load.image('eating_b4', 'assets/img/EatingGame/EatingGame_X4.png');
    this.load.image('eating_b5', 'assets/img/EatingGame/EatingGame_X5.png');
    this.load.image('eating_b6', 'assets/img/EatingGame/EatingGame_X6.png');

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
    this.load.audio('ei_kay_1', 'assets/sounds/ei_kay_1.mp3');
    this.load.audio('ei_kay_2', 'assets/sounds/ei_kay_2.mp3');
    this.load.image('spacest_floor', 'assets/img/SpaceStation/floor.png');
    this.load.audio('jee', 'assets/sounds/jee.mp3');
    this.load.audio('noniin', 'assets/sounds/noniin.mp3');

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
    this.load.audio('putkea_alas_1', 'assets/sounds/putkea_alas_1.mp3');
    this.load.audio('putkea_alas_2', 'assets/sounds/putkea_alas_2.mp3');
    this.load.audio('sattuu_1', 'assets/sounds/sattuu_1.mp3');
    this.load.audio('sattuu_2', 'assets/sounds/sattuu_2.mp3');
    this.load.audio('sattuu_3', 'assets/sounds/sattuu_3.mp3');
    this.load.spritesheet('spacerun_alienbike_sprite', 'assets/img/SpaceRun/spacerun_alienbike_sprite.png', 225, 285);
    this.load.audio('suihkumoottori', 'assets/sounds/suihkumoottori.mp3');
    this.load.audio('avaruusbiisi', 'assets/sounds/avaruusbiisi.mp3');
    this.load.audio('heijastin', 'assets/sounds/heijastin.mp3');
    this.load.image('spacerun_alien_hitbox', 'assets/img/SpaceRun/spacerun_alien_hitbox.png');
    this.load.image('spacerun_ground', 'assets/img/SpaceRun/spacerun_ground.png');
    this.load.image('spacerun_win_alien', 'assets/img/SpaceRun/spacerun_win_alien.png');
    this.load.image('spacerun_win_bg', 'assets/img/SpaceRun/spacerun_win_bg.png');

    // Lifejacket game assets
    this.load.spritesheet('lifejack_alien1', 'assets/img/LifeJacket/lifejack_alien1.png', 220, 450, 6);
    this.load.spritesheet('lifejack_alien2', 'assets/img/LifeJacket/lifejack_alien2.png', 280, 310, 6);
    this.load.spritesheet('lifejack_alien3', 'assets/img/LifeJacket/lifejack_alien3.png', 210, 360, 6);
    this.load.image('lifejack_jacket1', 'assets/img/LifeJacket/lifejack_jacket1.png');
    this.load.image('lifejack_jacket2', 'assets/img/LifeJacket/lifejack_jacket2.png');
    this.load.image('lifejack_jacket3', 'assets/img/LifeJacket/lifejack_jacket3.png');
    this.load.image('lifejack_bg', 'assets/img/LifeJacket/lifejack_bg.png');
    this.load.image('lifejacket_bgwin', 'assets/img/LifeJacket/lifejacket_bgwin.png');
    this.load.image('lifejacket_wave1', 'assets/img/LifeJacket/lifejacket_wave1.png');
    this.load.image('lifejacket_wave2', 'assets/img/LifeJacket/lifejacket_wave2.png');
    this.load.image('lifejack_boat', 'assets/img/LifeJacket/lifejack_boat-02.png');
    this.load.audio('hihna_kiinni', 'assets/sounds/hihna_kiinni.mp3');
    this.load.audio('hihna_kiinni_noniin', 'assets/sounds/hinha_kiinni_noniin.mp3');

    // Credits assets
    this.load.image('creditscr_bg', 'assets/img/Credit/creditscr_bg.png');
    this.load.image('creditscr_exit', 'assets/img/Credit/creditscr_exit.png');

    // Narrations
    this.load.audio('1_Intro', 'assets/sounds/1_Intro.mp3');
    this.load.audio('2_pikilla_nalka', 'assets/sounds/2_pikilla_nalka.mp3');
    this.load.audio('5_piki_on_syonyt_tarpeeksi', 'assets/sounds/5_piki_on_syonyt_tarpeeksi.mp3');
    this.load.audio('7_pyoraretkelle', 'assets/sounds/7_pyoraretkelle.mp3');
    this.load.audio('9_veneretkelle', 'assets/sounds/9_veneretkelle.mp3');
  },
  create: function() {
    this.music = this.add.audio('bg_music');
    this.music.play('',0,1,true);
    this.asset.cropEnabled = false;

    this.game.introNarration = this.add.audio('1_Intro');
    this.game.introNarration.play('',0,1,false);
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
