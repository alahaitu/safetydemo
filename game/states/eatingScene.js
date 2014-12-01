'use strict';
var goodEatObject = require('../prefabs/goodEatObject');  
var badEatObject = require('../prefabs/badEatObject');  
var alien = require('../prefabs/alien');  
var table = require('../prefabs/table');  
var lastSpawn = null;

  function EatingScene() {}
  EatingScene.prototype = {

    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 500;

        // Graphics
        this.scoreMeter = this.game.add.sprite(119, 38, 'score_meter');
        this.pointer = this.game.add.sprite(114, 21, 'score_pointer');
        this.add.sprite(40, 35, 'score_basket');
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
        this.eatingSoundSurprised1 = this.add.audio('hammastys_1');
        this.eatingSoundSurprised2 = this.add.audio('hammastys_2');
        this.eatingSoundSurprised3 = this.add.audio('hammastys_3');

        this.alien = new alien(this.game, 820, 520, 'transparentRectangle');
        this.game.add.existing(this.alien);

        this.objectGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 3.3, this.generateObjects, this);

        this.objectGenerator.timer.start();

    },
    update: function() {
          this.game.physics.arcade.collide(this.alien, this.goodEatObject, this.goodCollision, null, this);
          this.game.physics.arcade.collide(this.alien, this.badEatObject, this.badCollision, null, this);

          if (this.pointer.x > 650) {
           this.game.state.start('eatingGameWin');
          }
    },

    goodCollision: function(){
      this.goodEatObject.destroy();
      if (this.pointer.x < this.scoreMeter.width + this.scoreMeter.x - 90){
        this.pointer.x = this.pointer.x + 90; // 28
      }
      this.alienSprite.loadTexture('eating_alien_gf');
      this.alienSprite.play('eat', 8, false);
      this.randomEatingSoundGood();

    },
    badCollision: function(){
      this.badEatObject.destroy();
      if (this.pointer.x > this.scoreMeter.x){
        this.pointer.x = this.pointer.x - 90;
      }
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

        //var goodOrBad = this.game.rnd.integerInRange(0,1);

        // Good object
        if (lastSpawn != "good") {
            this.goodEatObject = new goodEatObject(this.game, -40, 520, 'eating_g' + this.game.rnd.integerInRange(1, 8));
            this.game.add.existing(this.goodEatObject);
            this.goodEatObject.anchor.setTo(0.5,0.5);
            this.goodEatObject.inputEnabled = true;
            this.goodEatObject.events.onInputDown.add(this.goodEatObject.drop, this.goodEatObject);
            console.log("Good food generated.")
            lastSpawn = "good";
        }

        // Bad object
        else if (lastSpawn != "bad") {
            this.badEatObject = new badEatObject(this.game, -40, 520, 'eating_b' + this.game.rnd.integerInRange(1, 6));
            this.game.add.existing(this.badEatObject);
            this.badEatObject.anchor.setTo(0.5,0.5)
            this.badEatObject.inputEnabled = true;
            this.badEatObject.events.onInputDown.add(this.badEatObject.drop, this.badEatObject);
            console.log("Bad food generated.")
            lastSpawn = "bad";
        }

    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = EatingScene;
