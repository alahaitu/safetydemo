'use strict';
var drowningAlien = require('../prefabs/drowningAlien');  
var lifesaver = require('../prefabs/lifesaver');

var drowningAlienGroup;

  function BeachScene() {}
  BeachScene.prototype = {
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.beachBg = this.game.add.sprite(0, 0, 'beach_bg');
      this.backButton = this.add.button(899, 23, 'exit_btn' , this.exitScene, this);

      drowningAlienGroup = this.game.add.group();

      this.lifesaver = new lifesaver(this.game, this.game.width/2, 450, 'beach_lsaver');
      this.game.add.existing(this.lifesaver);
      this.lifesaver.inputEnabled = true;
      this.lifesaver.input.enableDrag(true);

      this.spawnDrowningAliens(150, 100);

    },
    update: function() {

        drowningAlienGroup.forEach(function(drowningAlien){
              this.game.physics.arcade.overlap(drowningAlien, this.lifesaver, this.alienSaved, null, this);

              if (drowningAlien && drowningAlien.body.y > 450 ){
                this.spawnNewLifesaver(drowningAlien.body.x, drowningAlien.body.y);
                drowningAlien.destroy();
              }

        }, this);

    },
    spawnDrowningAliens: function(x, y) {

      for (var i=0; i < 3; i++){
        var sprite ='';
        var rand = this.game.rnd.integerInRange(1, 2);
        switch (rand){
          case 1:
          sprite = 'beach_alien1';
            break;
          case 2:
          sprite = 'beach_alien2';
            break;
        }

          this.drowningAlien = new drowningAlien(this.game, x + (i*300), y + this.game.rnd.integerInRange(-100, 100), sprite);
          drowningAlienGroup.add(this.drowningAlien);
      }

    },

    alienSaved: function(alien) {
          alien.body.velocity.y = 150;
          this.lifesaver.destroy();
    },

    spawnNewLifesaver: function(x, y){
      this.lifesaver = new lifesaver(this.game, x, y, 'beach_lsaver');
      this.game.add.existing(this.lifesaver);
      this.lifesaver.inputEnabled = true;
      this.lifesaver.input.enableDrag(true);

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
