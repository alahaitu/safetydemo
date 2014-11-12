(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(1024, 688, Phaser.AUTO, 'safety-demo');

  // Game States
  game.state.add('beachScene', require('./states/beachScene'));
  game.state.add('boot', require('./states/boot'));
  game.state.add('eatingGameWin', require('./states/eatingGameWin'));
  game.state.add('eatingScene', require('./states/eatingScene'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('playroom', require('./states/playroom'));
  game.state.add('preload', require('./states/preload'));
  game.state.add('spaceScene', require('./states/spaceScene'));
  game.state.add('trampoline', require('./states/trampoline'));
  game.state.add('trampolineCutscene', require('./states/trampolineCutscene'));
  game.state.add('trampolineGameWin', require('./states/trampolineGameWin'));
  

  game.state.start('boot');
};
},{"./states/beachScene":6,"./states/boot":7,"./states/eatingGameWin":8,"./states/eatingScene":9,"./states/gameover":10,"./states/menu":11,"./states/play":12,"./states/playroom":13,"./states/preload":14,"./states/spaceScene":15,"./states/trampoline":16,"./states/trampolineCutscene":17,"./states/trampolineGameWin":18}],2:[function(require,module,exports){
'use strict';

var Alien = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
	this.body.immovable = true;  

};

Alien.prototype = Object.create(Phaser.Sprite.prototype);
Alien.prototype.constructor = Alien;

Alien.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Alien;

},{}],3:[function(require,module,exports){
'use strict';

var BadEatObject = function(game, x, y, sprite, frame) {
	Phaser.Sprite.call(this, game, x, y, sprite, frame);

	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
  this.body.velocity.x = 130;

	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;
};

BadEatObject.prototype = Object.create(Phaser.Sprite.prototype);
BadEatObject.prototype.constructor = BadEatObject;
BadEatObject.prototype.create = function(){;}
BadEatObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
},

BadEatObject.prototype.drop = function(){
	this.body.allowGravity = true;
	this.body.velocity.y = -200;
	this.body.velocity.x = 50;
	this.inputEnabled = false;
	//this.popSound.play();
	console.log("Bad food dropped.");
};

module.exports = BadEatObject;

},{}],4:[function(require,module,exports){
'use strict';

var GoodEatObject = function(game, x, y, sprite, frame) {
	Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
 	this.body.velocity.x = 130;

	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;

};

GoodEatObject.prototype = Object.create(Phaser.Sprite.prototype);
GoodEatObject.prototype.constructor = GoodEatObject;
GoodEatObject.prototype.create = function(){}
GoodEatObject.prototype.update = function() {
  
  // write your prefab's specific update code here 
  
},

GoodEatObject.prototype.drop = function(){
	this.body.allowGravity = true;
	this.body.velocity.y = -200;
	this.body.velocity.x = 50;
	this.inputEnabled = false;
	//this.popSound.play();
	console.log("Good food dropped.");
};

module.exports = GoodEatObject;

},{}],5:[function(require,module,exports){
'use strict';

var Table = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
	this.body.immovable = true;  
  
};

Table.prototype = Object.create(Phaser.Sprite.prototype);
Table.prototype.constructor = Table;

Table.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Table;

},{}],6:[function(require,module,exports){
'use strict';
  function BeachScene() {}
  BeachScene.prototype = {
    preload: function() {
      // Override this method to add some load operations. 
      // If you need to use the loader, you may need to use them here.
    },
    create: function() {
      // This method is called after the game engine successfully switches states. 
      // Feel free to add any setup code here (do not load anything here, override preload() instead).
    },
    update: function() {
      // state update code
    },
    paused: function() {
      // This method will be called when game paused.
    },
    render: function() {
      // Put render operations here.
    },
    shutdown: function() {
      // This method will be called when the state is shut down 
      // (i.e. you switch to another state from this one).
    }
  };
module.exports = BeachScene;

},{}],7:[function(require,module,exports){

'use strict';

function Boot() {
}

Boot.prototype = {
  preload: function() {
    this.load.image('preloader', 'assets/preloader.gif');
  },
  create: function() {
    this.game.input.maxPointers = 1;
    this.game.state.start('preload');
  }
};

module.exports = Boot;

},{}],8:[function(require,module,exports){
'use strict';
  function EatingGameWin() {}
  EatingGameWin.prototype = {
    preload: function() {
      // Override this method to add some load operations. 
      // If you need to use the loader, you may need to use them here.
    },
    create: function() {
      this.add.sprite(0, 0, 'eating_game_win');
      this.applauseSound = this.add.audio('applause_sound');
      this.game.time.events.add(Phaser.Timer.SECOND * 4, this.startPlayground, this);
      this.applauseSound.play();
    },
    startPlayground: function() {
      this.game.state.start('playroom');
    },

    update: function() {
      // state update code
    },
    paused: function() {
      // This method will be called when game paused.
    },
    render: function() {
      // Put render operations here.
    },
    shutdown: function() {
      // This method will be called when the state is shut down 
      // (i.e. you switch to another state from this one).
    }
  };
module.exports = EatingGameWin;

},{}],9:[function(require,module,exports){
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
        this.eating_background = this.game.add.sprite(0, 0, 'eating_bg');
        this.alienSprite = this.game.add.sprite(560,80, 'eating_alien_gf');
        this.alienSprite.animations.add('eat');
        this.table = new table(this.game, 0, 561, 'eating_table');
        this.game.add.existing(this.table);
        this.add.sprite(40, 35, 'score_basket');
        this.backButton = this.add.button(899, 23, 'exit_btn' , this.startPlayroom, this);
        this.scoreMeter = this.game.add.sprite(119, 38, 'score_meter');
        this.pointer = this.game.add.sprite(114, 21, 'score_pointer');
        
        // Sounds
        this.eatingSoundGood1 = this.add.audio('rousk1');
        this.eatingSoundGood2 = this.add.audio('rousk2');
        this.eatingSoundGood3 = this.add.audio('rousk3');
        this.eatingSoundGood4 = this.add.audio('rousk4');
        this.eatingSoundGood5 = this.add.audio('rousk5');
        this.eatingSoundBad = this.add.audio('rousk2');

        this.alien = new alien(this.game, 820, 520, 'alien');
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

      console.log("Yam! Good food!");
    },
    badCollision: function(){
      this.badEatObject.destroy();
      if (this.pointer.x > this.scoreMeter.x){
        this.pointer.x = this.pointer.x - 90;
      }
      this.alienSprite.loadTexture('eating_alien_bf');
      this.alienSprite.play('eat', 8, false);
      this.eatingSoundBad.play();

      console.log("Yuck! Bad food!");
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

},{"../prefabs/alien":2,"../prefabs/badEatObject":3,"../prefabs/goodEatObject":4,"../prefabs/table":5}],10:[function(require,module,exports){

'use strict';
function GameOver() {}

GameOver.prototype = {
  preload: function () {

  },
  create: function () {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.titleText = this.game.add.text(this.game.world.centerX,100, 'Game Over!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.congratsText = this.game.add.text(this.game.world.centerX, 200, 'You Win!', { font: '32px Arial', fill: '#ffffff', align: 'center'});
    this.congratsText.anchor.setTo(0.5, 0.5);

    this.instructionText = this.game.add.text(this.game.world.centerX, 300, 'Click To Play Again', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionText.anchor.setTo(0.5, 0.5);
  },
  update: function () {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};
module.exports = GameOver;

},{}],11:[function(require,module,exports){

'use strict';
function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    var style = { font: '65px Arial', fill: '#ffffff', align: 'center'};
    this.sprite = this.game.add.sprite(this.game.world.centerX, 138, 'yeoman');
    this.sprite.anchor.setTo(0.5, 0.5);

    this.titleText = this.game.add.text(this.game.world.centerX, 300, '\'Allo, \'Allo!', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.instructionsText = this.game.add.text(this.game.world.centerX, 400, 'Click anywhere to play "Click The Yeoman Logo"', { font: '16px Arial', fill: '#ffffff', align: 'center'});
    this.instructionsText.anchor.setTo(0.5, 0.5);

    this.sprite.angle = -20;
    this.game.add.tween(this.sprite).to({angle: 20}, 1000, Phaser.Easing.Linear.NONE, true, 0, 1000, true);
  },
  update: function() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('play');
    }
  }
};

module.exports = Menu;

},{}],12:[function(require,module,exports){

  'use strict';
  function Play() {}
  Play.prototype = {
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.sprite = this.game.add.sprite(this.game.width/2, this.game.height/2, 'yeoman');
      this.sprite.inputEnabled = true;
      
      this.game.physics.arcade.enable(this.sprite);
      this.sprite.body.collideWorldBounds = true;
      this.sprite.body.bounce.setTo(1,1);
      this.sprite.body.velocity.x = this.game.rnd.integerInRange(-500,500);
      this.sprite.body.velocity.y = this.game.rnd.integerInRange(-500,500);

      this.sprite.events.onInputDown.add(this.clickListener, this);
    },
    update: function() {

    },
    clickListener: function() {
      this.game.state.start('gameover');
    }
  };
  
  module.exports = Play;
},{}],13:[function(require,module,exports){
'use strict';
  function Playroom() {}
  Playroom.prototype = {
    create: function() {
      this.playroom_background = this.game.add.sprite(0, 0, 'playroom_bg');

      this.eatingSceneStartButton = this.game.add.button(715, 225, 'playr_button_eat', this.eatingSceneStartClick, this);
      this.beachSceneStartButton = this.game.add.button(210, 460, 'playr_button_duck', this.beachSceneStartClick, this);
      this.spaceSceneStartButton = this.game.add.button(750, 50, 'playr_button_space', this.spaceSceneStartClick, this);
      this.ball= this.game.add.button(835, 500, 'playr_button_ball', this.ballAnimationClick, this);
      this.plant = this.game.add.button(45, 160, 'playr_button_plant', this.plantAnimationClick, this);

    },
    eatingSceneStartClick: function() {
      this.game.state.start('eatingScene');
    },
    beachSceneStartClick: function() {
      //this.game.state.start('trampolineGameWin');
    },
    spaceSceneStartClick: function() {
      this.game.state.start('trampoline');
    },
    plantAnimationClick: function() {
    },
    ballAnimationClick: function() {

    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = Playroom;

},{}],14:[function(require,module,exports){

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
    this.load.image('alien', 'assets/img/EatingGame/rectangle_transparent.png');
    this.load.audio('bg_music', 'assets/sounds/bg_music.mp3');
    this.load.image('alien', 'assets/img/EatingGame/rectangle_purple.png');
    this.load.audio('bg_music', 'assets/sounds/tunnari-14-11-10.mp3');

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
    this.load.image('eating_table', 'assets/img/EatingGame/EatingGame_kitchen table.png');
    this.load.audio('rousk1', 'assets/sounds/rousk01.wav');
    this.load.audio('rousk2', 'assets/sounds/rousk02.wav');
    this.load.audio('rousk3', 'assets/sounds/rousk03.wav');
    this.load.audio('rousk4', 'assets/sounds/rousk04.wav');
    this.load.audio('rousk5', 'assets/sounds/rousk05.wav');

    // Good food
    this.load.spritesheet('eating_alien_gf', 'assets/img/EatingGame/EatingGame_good_food sprite.png', 440, 610);
    this.load.image('eating_g1', 'assets/img/EatingGame/EatingGame_1.png');
    this.load.image('eating_g2', 'assets/img/EatingGame/EatingGame_2.png');
    this.load.image('eating_g3', 'assets/img/EatingGame/EatingGame_3.png');
    this.load.image('eating_g4', 'assets/img/EatingGame/EatingGame_4.png');
    this.load.image('eating_g5', 'assets/img/EatingGame/EatingGame_5.png');
    this.load.image('eating_g6', 'assets/img/EatingGame/EatingGame_6.png');    
    this.load.image('eating_g7', 'assets/img/EatingGame/EatingGame_7.png');    
    this.load.image('eating_g8', 'assets/img/EatingGame/EatingGame_8.png');    

    // Bad good
    this.load.spritesheet('eating_alien_bf', 'assets/img/EatingGame/EatingGame_bad_food sprite.png', 500, 610);
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
    this.load.image('trampoline_game_jump_button', 'assets/img/Trampoline/TrampolineG_JumpButton.png');  
    //this.load.audio('bee_sound', 'assets/sounds/Tukes_bee_sfx.mp3');
    this.load.image('trampoline_game_win', 'assets/img/Trampoline/SpJumpWin_bg.png');
    this.load.image('trampoline_game_win_alien', 'assets/img/Trampoline/SpJumpWin_alien.png');
    this.load.spritesheet('trampoline_game_win_glow', 'assets/img/Trampoline/SpJumpWin_sprite.png', 670, 688, 2);
    this.load.image('trampoline_rbutton', 'assets/img/Trampoline/TrampolineG_RightButton.png');
    this.load.image('trampoline_lbutton', 'assets/img/Trampoline/TrampolineG_LeftButton.png');
    this.load.image('reflectors_icon', 'assets/img/Trampoline/SpaceJump_iconref.png');

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

},{}],15:[function(require,module,exports){
'use strict';
  function SpaceScene() {}
  SpaceScene.prototype = {
    preload: function() {
      // Override this method to add some load operations. 
      // If you need to use the loader, you may need to use them here.
    },
    create: function() {
      // This method is called after the game engine successfully switches states. 
      // Feel free to add any setup code here (do not load anything here, override preload() instead).
    },
    update: function() {
      // state update code
    },
    paused: function() {
      // This method will be called when game paused.
    },
    render: function() {
      // Put render operations here.
    },
    shutdown: function() {
      // This method will be called when the state is shut down 
      // (i.e. you switch to another state from this one).
    }
  };
module.exports = SpaceScene;

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
'use strict';
  function TrampolineCutscene() {}
  TrampolineCutscene.prototype = {
    create: function() {
      this.add.sprite(0, 0, 'trampoline_bg');
      this.add.sprite(93, 110, 'trampoline_back');
      this.jumping = this.add.sprite(250, 0, 'trampoline_jumping', 1);
      this.add.sprite(93, 100, 'trampoline_front');
      this.add.button(850, 600, 'fwd_button', this.startTrampoline, this);
      this.game.time.events.add(Phaser.Timer.SECOND * 0.5, this.trampolineKidSay, this);

      this.trampolineKidSound = this.add.audio('youre_next_fi');

      this.jumpingAnim = this.jumping.animations.add('jumps');
      this.jumpingAnimation();
    },
    trampolineKidSay: function() {
      this.trampolineKidSound.play();
    },
    jumpingAnimation: function(){
      this.jumpingAnim.play(16, true);
    },
    startTrampoline: function() {
      this.game.state.start('trampoline');
    }
  };
module.exports = TrampolineCutscene;

},{}],18:[function(require,module,exports){
'use strict';
  function TrampolineGameWin() {}
  TrampolineGameWin.prototype = {
    create: function() {
      this.add.sprite(0, 0, 'trampoline_game_win');
      //this.add.sprite(180,0, 'trampoline_game_win_glow');      
      this.add.sprite(180,0, 'trampoline_game_win_alien');
      this.applauseSound = this.add.audio('applause_sound');
      this.game.time.events.add(Phaser.Timer.SECOND * 3, this.startPlayground, this);
      this.applauseSound.play();
    },
    startPlayground: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = TrampolineGameWin;

},{}]},{},[1])