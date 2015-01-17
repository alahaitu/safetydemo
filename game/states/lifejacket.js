'use strict';
var beachAlien = require('../prefabs/beachAlien');  
var lifejacket = require('../prefabs/lifejacket');  
var floor = require('../prefabs/floor');  

var beachAlienGroup;
var lifejacketGroup;
var score;
var lastScore;
var animationCounter;
var smileCounter;
var startAnimationCounter;
var startSmileCounter;

  function Lifejacket() {}
  Lifejacket.prototype = {
    preload: function() {},
    create: function() {
      score = 0;
      animationCounter  = 0;
      smileCounter = 0;
      startAnimationCounter = false;
      startSmileCounter = false;
      lastScore = 0;
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 400;

      this.beachBg = this.game.add.sprite(0, 0, 'lifejack_bg');
      this.backButton = this.add.button(899, 23, 'exit_btn' , this.startPlayroom, this);
      this.strapSound1 = this.add.audio('hihna_kiinni');
      this.strapSound2 = this.add.audio('hihna_kiinni_noniin');
      this.floor = new floor(this.game, 0, 680, 'spacest_floor');

      // Stop the game intro narration
      this.sound.remove(this.game.introNarration);

      // Intro narration for eating
      this.intro = this.add.audio('9_veneretkelle');
      this.intro.play('',0,1,false);

      beachAlienGroup = this.game.add.group();
      lifejacketGroup = this.game.add.group();

      this.spawnLifejackets(250, 577);

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

         this.beachAlien.inputEnabled = true;
         this.beachAlien.events.onInputDown.add(this.alienWalks, this.beachAlien);

        this.beachAlien.animations.add(this.beachAlien.name, [3,4]);
      }
    },
      spawnLifejackets: function(x, y) {

        var array = [];
        var rand;
        var sprite = '';
        var spawnCompensator = 0;

      for (var i=0; i < 3; i++){
        sprite ='';

        while (rand == array[i-1] || rand == array[i-2]){
            rand = this.game.rnd.integerInRange(1, 3);
        }

        switch (rand){
          case 1:
          sprite = 'lifejack_jacket1';
          spawnCompensator = 0;
            break;
          case 2:
          sprite = 'lifejack_jacket2';
          spawnCompensator = 40;
            break;
          case 3:
          sprite = 'lifejack_jacket3';
          spawnCompensator = 55;
            break;
        }
          array[i] = rand;
          this.lifejacket = new lifejacket(this.game, x + (i*230), y + spawnCompensator, sprite);
          this.lifejacket.name = sprite;
          this.lifejacket.inputEnabled = true;
          this.lifejacket.input.enableDrag(true);
          this.lifejacket.events.onDragStart.add(this.enableLifejacketGravity, this);
          this.lifejacket.events.onDragStop.add(this.disableLifejacketGravity, this);

          lifejacketGroup.add(this.lifejacket);
      }

    },

    alienWalks: function(alien){

     if (alien.name == "lifejack_alien1" && alien.frame == 2) {
              alien.loadTexture('lifejack_alien1',5);
              alien.body.velocity.x = 150;
              score++;
              animationCounter = 0;
        }

        if (alien.name == "lifejack_alien2" && alien.frame == 2)
        {
              alien.loadTexture('lifejack_alien2',5);
              alien.body.velocity.x = 150;
              score++;
              animationCounter = 0;
        }
        if (alien.name == "lifejack_alien3" && alien.frame == 2)
        {
              alien.loadTexture('lifejack_alien3',5);
              alien.body.velocity.x = 150;
              score++;
              animationCounter = 0;
        }

    },

    alienDressed: function(alien, lifejacket) {

        // If lifesaver & alien are matches, destroy lifejacket

        if (alien.name == "lifejack_alien1" && alien.frame != 2 && alien.frame != 5 && lifejacket.body.y < 280){
            alien.loadTexture('lifejack_alien1',1);
            startSmileCounter = true;

          if (lifejacket.name == "lifejack_jacket1") {
                lifejacket.destroy();
                alien.loadTexture('lifejack_alien1',2);
                startAnimationCounter = true;
          }
        }

       if (alien.name == "lifejack_alien2" && alien.frame != 2 && alien.frame != 5 && lifejacket.body.y < 280){
            alien.loadTexture('lifejack_alien2',1);
            startSmileCounter = true;

          if (lifejacket.name == "lifejack_jacket2") {
                lifejacket.destroy();
                alien.loadTexture('lifejack_alien2',2);
                startAnimationCounter = true;
          }
        }

       if (alien.name == "lifejack_alien3" && alien.frame != 2 && alien.frame != 5 && lifejacket.body.y < 280){
            alien.loadTexture('lifejack_alien3',1);
            startSmileCounter = true;

          if (lifejacket.name == "lifejack_jacket3") {
                lifejacket.destroy();
                alien.loadTexture('lifejack_alien3',2);
                startAnimationCounter = true;
          }
        }
    },

    update: function() {
     beachAlienGroup.forEach(function(beachAlien){
       lifejacketGroup.forEach(function(lifejacket){

            this.game.physics.arcade.overlap(beachAlien, lifejacket, this.alienDressed, null, this);

        }, this);
    }, this);

        // Collide the objects with invisible floor
        lifejacketGroup.forEach(function(lifejacket){
              this.game.physics.arcade.collide(lifejacket, this.floor);
        }, this);    

      if (score > lastScore){
        lastScore++;
        var rand = this.game.rnd.integerInRange(1, 2);
        switch (rand){
          case 1:
            this.strapSound1.play();
            break;
          case 2:
            this.strapSound2.play();
            break;
        }
      }
      
        if (score == 3){
          this.win();
          score++;
        }

    if (startAnimationCounter == true ){
      animationCounter++;
    }
    if (startSmileCounter == true ){
      smileCounter++;
    }

    if ( animationCounter > 300){
            this.startAnimation();
            startAnimationCounter = false;
            animationCounter = 0;
    }
    if ( smileCounter > 100){
            this.smileBack();
            startSmileCounter = false;
            smileCounter = 0;
    }
   },

   startAnimation: function(){

     beachAlienGroup.forEach(function(beachAlien){
      if (beachAlien.frame == 2){
        beachAlien.play(beachAlien.name, 1, true);
      }
    }, this);    
   },

   smileBack: function(){
     beachAlienGroup.forEach(function(beachAlien){
      if (beachAlien.frame == 1){
        var overlap = false;
       lifejacketGroup.forEach(function(lifejacket){
            if (this.game.physics.arcade.overlap(beachAlien, lifejacket, this.alienDressed, null, this) == true){
              overlap = true;
            }
        }, this);
       if ( overlap == false && beachAlien.frame != 5) {
        beachAlien.frame = 0;
      }
     }
    }, this);    
   },
     win: function(){
        this.game.time.events.add(Phaser.Timer.SECOND * 3, this.startWinScreen, this);
     },

     startWinScreen: function(){
      this.game.state.start('lifejacketWin');
     },
     enableLifejacketGravity : function(lifejacket){
      lifejacket.body.allowGravity = false;
      lifejacket.body.velocity.y = 0;
     },
     disableLifejacketGravity: function(lifejacket){
      lifejacket.body.allowGravity = true;
     },

    paused: function() {
      // This method will be called when game paused.
    },
    render: function() {
      // Put render operations here.
    },
    startPlayroom: function() {
      // Stop the intro narration
      this.sound.remove(this.intro);
      this.game.state.start('playroom');
    }
  };
module.exports = Lifejacket;
