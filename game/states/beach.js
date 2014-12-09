'use strict';
var beachAlien = require('../prefabs/beachAlien');  
var lifejacket = require('../prefabs/lifejacket');  

var beachAlienGroup;
var lifejacketGroup;
var score;

  function Beach() {}
  Beach.prototype = {
    preload: function() {},
    create: function() {
      score = 0;
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.beachBg = this.game.add.sprite(0, 0, 'lifejack_bg');
      this.backButton = this.add.button(899, 23, 'exit_btn' , this.startPlayroom, this);

      beachAlienGroup = this.game.add.group();
      lifejacketGroup = this.game.add.group();

      this.spawnLifejackets(250, 600);

      this.spawnBeachAliens(200, 290);
    },
      spawnBeachAliens: function(x, y) {

        var array = [];
        var rand;
        var sprite ='';
        var originalY = y;

      for (var i=0; i < 3; i++){
        sprite ='';

        while (rand == array[i-1] || rand == array[i-2]){
            rand = this.game.rnd.integerInRange(1, 3);
        }

        switch (rand){
          case 1:
          sprite = 'lifejack_alien1';
          y = y - 50;
            break;
          case 2:
          sprite = 'lifejack_alien2';
            break;
          case 3:
          sprite = 'lifejack_alien3';
            break;
        }
          array[i] = rand;
          this.beachAlien = new beachAlien(this.game, x + (i*300), y, sprite);
          this.beachAlien.name = sprite;
          beachAlienGroup.add(this.beachAlien);
          y = originalY;
      }
    },
      spawnLifejackets: function(x, y) {

        var array = [];
        var rand;
        var sprite = '';

      for (var i=0; i < 3; i++){
        sprite ='';

        while (rand == array[i-1] || rand == array[i-2]){
            rand = this.game.rnd.integerInRange(1, 3);
        }

        switch (rand){
          case 1:
          sprite = 'lifejack_jacket1';
            break;
          case 2:
          sprite = 'lifejack_jacket2';
            break;
          case 3:
          sprite = 'lifejack_jacket3';
            break;
        }

          array[i] = rand;
          this.lifejacket = new lifejacket(this.game, x + (i*200), y, sprite);
          this.lifejacket.name = sprite;
          this.lifejacket.inputEnabled = true;
          this.lifejacket.input.enableDrag(true);
          lifejacketGroup.add(this.lifejacket);
      }

    },
    alienDressed: function(alien, lifejacket) {

        // If lifesaver & alien are matches, destroy lifejacket and move alien away

        if (alien.name == "lifejack_alien1" && lifejacket.name == "lifejack_jacket1")
        {
              lifejacket.destroy();
              score++;
              alien.loadTexture('lifejack_alien1',3);
             // alien.body.velocity.x = 150;
        }

        if (alien.name == "lifejack_alien2" && lifejacket.name == "lifejack_jacket2")
        {
              lifejacket.destroy();
              score++;
              alien.loadTexture('lifejack_alien2',3);
              //alien.body.velocity.x = 150;
        }
        if (alien.name == "lifejack_alien3" && lifejacket.name == "lifejack_jacket3")
        {
              lifejacket.destroy();
              score++;
              alien.loadTexture('lifejack_alien3',3);

              //alien.body.velocity.x = 150;
        }

        if (score >= 3){
          this.win();
        }
    },

    update: function() {

     beachAlienGroup.forEach(function(beachAlien){
       lifejacketGroup.forEach(function(lifejacket){

              this.game.physics.arcade.overlap(beachAlien, lifejacket, this.alienDressed, null, this);

        }, this);
    }, this);    
   },

     win: function(){
      console.log("win");
     },

    paused: function() {
      // This method will be called when game paused.
    },
    render: function() {
      // Put render operations here.
    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = Beach;
