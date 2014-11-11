'use strict';
  function Trampoline() {}
  Trampoline.prototype = {
    create: function() {
      this.add.sprite(0, 0, 'trampoline_game_bg');
      this.bear_ref = this.add.sprite(400, 140, 'trampoline_game_bear_ref');
      this.heart_ref = this.add.sprite(600, 140, 'trampoline_game_heart_ref');
      this.two_ref = this.add.sprite(800, 140, 'trampoline_game_two_ref');
      this.player = this.add.sprite(426, 502, 'trampoline_game_alien');
      this.bee = this.add.sprite(1024, 80, 'trampoline_game_bee');
      this.add.sprite(119, 38, 'score_meter');
      this.scorePointer = this.add.sprite(114, 21, 'score_pointer');
      this.add.sprite(40, 35, 'reflectors_icon');
      this.add.button(850, 535, 'trampoline_game_jump_button', this.playerJump, this);
      this.add.button(25, 535, 'trampoline_lbutton', this.playerLeft, this);
      this.add.button(220, 535, 'trampoline_rbutton', this.playerRight, this);
      this.add.button(899, 23, 'exit_btn', this.exitScene, this);    

      //this.beeSound = this.add.audio('bee_sound');
      this.popSound = this.add.audio('helmet_on_sound');

      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.enable([this.player, this.bee, this.bear_ref, this.heart_ref, this.two_ref]);
      this.player.body.velocity.setTo(200, 200);
      this.player.body.collideWorldBounds = true;
      this.player.body.bounce.set(0.8);
      this.player.body.gravity.set(0, 180);

      this.player.body.immovable = true;
      this.bee.body.immovable = true;

      this.randomX = this.game.rnd.integerInRange(0, 1024-this.bear_ref.body.width);
      this.randomY = this.game.rnd.integerInRange(140, 400);

    },
    update: function() {
      /*if (this.bee.x > 0-this.bee.width) {
        this.bee.x -= 3;
      }
      else {
        this.game.time.events.add(Phaser.Timer.SECOND * this.game.rnd.integerInRange(0.5, 1.5), this.resetBee, this);
      }*/

      this.game.physics.arcade.collide(this.player, this.bee, this.beeCollision, null, this);
      this.game.physics.arcade.collide(this.player, this.bear_ref, this.pickBear, null, this);
      this.game.physics.arcade.collide(this.player, this.heart_ref, this.pickHeart, null, this);
      this.game.physics.arcade.collide(this.player, this.two_ref, this.pickTwo, null, this);

      if (this.scorePointer.x > 672) {
         this.game.state.start('trampolineGameWin');
      }

    },
    pickBear: function() {
      this.popSound.play();
      this.scorePointer.x += 28;
      this.bear_ref.kill();
      this.game.time.events.add(Phaser.Timer.SECOND * 3, this.resetBear, this);
    },
    pickHeart: function() {
      this.popSound.play();
      this.scorePointer.x += 28;
      this.heart_ref.kill();
      this.game.time.events.add(Phaser.Timer.SECOND * 3, this.resetHeart, this);
    },
    pickTwo: function() {
      this.popSound.play();
      this.scorePointer.x += 28;
      this.two_ref.kill();
      this.game.time.events.add(Phaser.Timer.SECOND * 3, this.resetTwo, this);
    },
    resetBear: function() {
      this.bear_ref.reset(this.game.rnd.integerInRange(0, 1024-this.bear_ref.body.width), 140);
    },
    resetHeart: function() {
      this.heart_ref.reset(this.game.rnd.integerInRange(0, 1024-this.heart_ref.body.width), 140);
    },
    resetTwo: function() {
      this.two_ref.reset(this.game.rnd.integerInRange(0, 1024-this.two_ref.body.width), 140);
    },
    beeCollision: function() {
      console.log("sting!");
      //this.beeSound.play();
    },
    resetBee: function() {
      this.bee.reset(1024, this.game.rnd.integerInRange(100, 400));
      //this.beeSound.play();
    },
    playerJump: function() {
      this.player.body.velocity.y = 600;
    },
    playerLeft: function() {
      if (this.player.body.velocity.x > 0)
        this.player.body.velocity.x = -(this.player.body.velocity.x)
    },
    playerRight: function() {
      if (this.player.body.velocity.x < 0)
      this.player.body.velocity.x = -(this.player.body.velocity.x);
    },
    exitScene: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = Trampoline;
