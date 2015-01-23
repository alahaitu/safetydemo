'use strict';
var goodFood = require('../prefabs/goodFood');  
var badFood = require('../prefabs/badFood');  
var alien = require('../prefabs/alien');  
var table = require('../prefabs/table');  
var score = 0;
var goodGroup;
var badGroup;
var flyingGoodFoodGroup;
var flyingBadFoodGroup;
var previousGoodRandom;
var previousBadRandom;

  function Eating() {}
  Eating.prototype = {

    create: function() {
        score = 0;
        previousGoodRandom = 0;
        previousBadRandom = 0;
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 500;

        // Graphics
        this.eating_background = this.game.add.sprite(0, 0, 'eating_bg');
        this.alienSprite = this.game.add.sprite(560,80, 'eating_alien_gf');
        this.alienSprite.animations.add('eat');
        this.table = new table(this.game, 0, 492, 'eating_table');
        this.game.add.existing(this.table);
        this.backButton = this.add.button(899, 23, 'exit_btn' , this.startPlayroom, this);
        
        // Sounds
        this.eatingSoundGood1 = this.add.audio('rousk1');
        this.eatingSoundGood2 = this.add.audio('rousk2');
        this.eatingSoundGood3 = this.add.audio('rousk3');
        this.eatingSoundGood4 = this.add.audio('rousk4');
        this.eatingSoundGood5 = this.add.audio('rousk5');
        this.eatingSoundBad1 = this.add.audio('hyi_1');
        this.eatingSoundBad2 = this.add.audio('hyi_2');
        this.eatingSoundBad3 = this.add.audio('hyi_3');

        // Stop the game intro narration
        this.sound.remove(this.game.introNarration);

        // Intro narration for eating
        this.intro = this.add.audio('2_pikilla_nalka');
        this.intro.play('',0,1,false);
        
        this.alien = new alien(this.game, 760, 300, 'rectangle_hitbox');
        this.game.add.existing(this.alien);

        goodGroup = this.game.add.group();
        badGroup = this.game.add.group();
        flyingGoodFoodGroup = this.game.add.group();
        flyingBadFoodGroup = this.game.add.group();

        this.objectGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 2.5, this.generateObjects, this);

        this.objectGenerator.timer.start();

    },
    update: function() {

    flyingGoodFoodGroup.forEach(function(food){
      this.goodFly(food);
      this.game.physics.arcade.overlap(food, this.alien, this.goodCollision, null, this);
     }, this);

    flyingBadFoodGroup.forEach(function(food){
      this.badFly(food);
      this.game.physics.arcade.overlap(food, this.alien, this.badCollision, null, this);
     }, this);

      if (score > 7) {
        this.game.time.events.add(Phaser.Timer.SECOND * 1, this.startWinScreen, this);
        score = 0;
      }
    },

    goodFly: function(food){
      if (food != undefined){

        if (food.x < 760){
            food.body.velocity.x = food.body.velocity.x + 10;
          }
          else if (food.x >= 760){
            if (food.body.velocity.x > 130){
              food.body.velocity.x = 130;
            }
            food.body.velocity.x = food.body.velocity.x - 10;
          }

        if (food.y > 300){
          food.y = food.y - 2;

          // If close to the alien, double the y movement
          if ( food.x > 650){
            food.y = food.y - 2;
          }
        }
      }
    },

    badFly: function(food){
       if (food != undefined){

        if (food.x < 760){
            food.body.velocity.x = food.body.velocity.x + 10;
          }
          else if (food.x >= 760){
            if (food.body.velocity.x > 130){
              food.body.velocity.x = 130;
            }
            food.body.velocity.x = food.body.velocity.x - 10;
          }

        if (food.y > 300){
          food.y = food.y - 2;

          // If close to the alien, double the y movement
          if ( food.x > 650){
            food.y = food.y - 2;
          }
        }
      }

    },

    goodCollision: function(goodFood){
      score++;
      goodFood.destroy();

      this.alienSprite.loadTexture('eating_alien_gf');
      this.alienSprite.play('eat', 8, false);
      this.randomEatingSoundGood();

    },
    badCollision: function(badFood){
      score--;
      badFood.destroy();

      this.alienSprite.loadTexture('eating_alien_bf');
      this.alienSprite.play('eat', 8, false);
      this.randomEatingSoundBad();

    },

    randomEatingSoundGood: function(){
        var rand = this.game.rnd.integerInRange(1, 5);

        switch (rand){
          case 1:
            this.eatingSoundGood1.play();
            break;
          case 2:
            this.eatingSoundGood2.play();
            break;
          case 3:
            this.eatingSoundGood3.play();
            break;
          case 4:
            this.eatingSoundGood4.play();
            break;
          case 5:
            this.eatingSoundGood5.play();
            break;
        }
    },
    randomEatingSoundBad: function(){
        var rand = this.game.rnd.integerInRange(1, 3);

        switch (rand){
          case 1:
            this.eatingSoundBad1.play();
            break;
          case 2:
            this.eatingSoundBad2.play();
            break;
          case 3:
            this.eatingSoundBad3.play();
            break;
        }
    },
    generateObjects: function() {
        var goodOrBad = this.game.rnd.integerInRange(0,1);

        // Good object
        if (goodOrBad == 0) {

            var rand = previousGoodRandom;

            while (rand == previousGoodRandom){
              rand = this.game.rnd.integerInRange(1, 8);
            }
            previousGoodRandom = rand;

            this.goodFood = new goodFood(this.game, -40, 520, 'eating_g' + rand);
            this.goodFood.inputEnabled = true;
            this.goodFood.events.onInputDown.add(this.addGoodFlying, this.goodFood);
            goodGroup.add(this.goodFood);
        }

        // Bad object
        else if (goodOrBad == 1) {

            var rand = previousBadRandom;

            while (rand == previousBadRandom){
              rand = this.game.rnd.integerInRange(1, 6);
            }
            previousBadRandom = rand;

            this.badFood = new badFood(this.game, -40, 520, 'eating_b' + rand);
            this.game.add.existing(this.badFood);
            this.badFood.inputEnabled = true;
            this.badFood.events.onInputDown.add(this.addBadFlying, this.badFood);
            badGroup.add(this.badFood);
        }


    },
    addGoodFlying: function(food){
       flyingGoodFoodGroup.add(food);
    },
    addBadFlying: function(food){
       flyingBadFoodGroup.add(food);
    },
    startWinScreen: function() {
       this.game.state.start('eatingGameWin');
    },

    startPlayroom: function() {
    // Stop the intro narration
    this.sound.remove(this.intro);

    this.game.state.start('playroom');
    }
  };
module.exports = Eating;
