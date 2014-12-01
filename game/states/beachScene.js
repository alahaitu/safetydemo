'use strict';
  function BeachScene() {}
  BeachScene.prototype = {
    create: function() {
    
      this.beachBg = this.game.add.sprite(0, 0, 'beach_bg');
      this.alien1 = this.game.add.sprite(0, 60, 'beach_alien1');
      //this.beachBg = this.game.add.sprite(0, 0, 'beach_alien1_saver');
      this.alien2 = this.game.add.sprite(600, 200, 'beach_alien2');
      //this.beachBg = this.game.add.sprite(0, 0, 'beach_alien2_saver');
      this.lifesaver = this.game.add.sprite(this.game.width/2, 450, 'beach_lsaver');

      this.add.sprite(40, 35, 'score_basket');
      this.backButton = this.add.button(899, 23, 'exit_btn' , this.exitScene, this);
      this.scoreMeter = this.game.add.sprite(119, 38, 'score_meter');
      this.pointer = this.game.add.sprite(114, 21, 'score_pointer');

      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.enable([this.lifesaver, this.alien1, this.alien2]);

      this.lifesaver.inputEnabled = true;
      this.lifesaver.input.enableDrag(true);
      this.lifesaver.body.collideWorldBounds = true;

      //this.lifesaver.events.startDrag.add(this.startDrag, this);
      //this.lifesaver.events.stopDrag.add(this.stopDrag, this);

    },
    update: function() {
      
      this.alien1.x += 1;
      this.alien2.x -= 1;

      this.game.physics.arcade.collide(this.alien1, this.lifesaver, this.alien1Saved, null, this);
      this.game.physics.arcade.collide(this.alien2, this.lifesaver, this.alien2Saved, null, this);

    },
    alien1Saved: function() {
      console.log("Alien 1 saved.");
    },
    alien2Saved: function() {
      console.log("Alien 2 saved.");
    },
    startDrag: function(sprite, pointer) {
      this.lifesaver.body.moves = false;
      console.log("Drag started.");
    },
    stopStop: function(sprite, pointer) {
      this.lifesaver.body.moves = true;
      console.log("Drag stopped.");
    },
    exitScene: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = BeachScene;
