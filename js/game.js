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
  game.state.add('spaceStation', require('./states/spaceStation'));
  game.state.add('trampoline', require('./states/trampoline'));
  game.state.add('trampolineCutscene', require('./states/trampolineCutscene'));
  game.state.add('trampolineGameWin', require('./states/trampolineGameWin'));
  

  game.state.start('boot');
};
},{"./states/beachScene":12,"./states/boot":13,"./states/eatingGameWin":14,"./states/eatingScene":15,"./states/gameover":16,"./states/menu":17,"./states/play":18,"./states/playroom":19,"./states/preload":20,"./states/spaceScene":21,"./states/spaceStation":22,"./states/trampoline":23,"./states/trampolineCutscene":24,"./states/trampolineGameWin":25}],2:[function(require,module,exports){
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

var BadSpaceObject = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

	this.game.physics.arcade.enableBody(this);

	this.body.allowGravity = false;

	var speed = this.game.rnd.integerInRange(200, 350);

 	this.body.velocity.x = -speed;

	var angle = this.game.rnd.integerInRange(20, 70);

 	if (this.body.y >= 250){
	 	this.body.velocity.y = -angle;
 	}
	if (this.body.y < 250){
	 	this.body.velocity.y = angle;
 	}
	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;
};

BadSpaceObject.prototype = Object.create(Phaser.Sprite.prototype);
BadSpaceObject.prototype.constructor = BadSpaceObject;

BadSpaceObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = BadSpaceObject;

},{}],5:[function(require,module,exports){
'use strict';

var BadStationObject = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = true;
	this.body.collideWorldBounds = true;

};

BadStationObject.prototype = Object.create(Phaser.Sprite.prototype);
BadStationObject.prototype.constructor = BadStationObject;

BadStationObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = BadStationObject;

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
'use strict';

var GoodStationObject = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = true;
	this.body.collideWorldBounds = true;
  
};

GoodStationObject.prototype = Object.create(Phaser.Sprite.prototype);
GoodStationObject.prototype.constructor = GoodStationObject;

GoodStationObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = GoodStationObject;

},{}],8:[function(require,module,exports){
'use strict';

var Reflector = function(game, x, y, sprite, frame) {
  	Phaser.Sprite.call(this, game, x, y, sprite, frame);

	this.game.physics.arcade.enableBody(this);

	this.body.allowGravity = false;

	var speed = this.game.rnd.integerInRange(170, 250);

 	this.body.velocity.x = -speed;

	var angle = this.game.rnd.integerInRange(0, 40);

 	if (this.body.y >= 250){
	 	this.body.velocity.y = -angle;
 	}
	if (this.body.y < 250){
	 	this.body.velocity.y = angle;
 	}


	this.checkWorldBounds = true;	
	this.outOfBoundsKill = true;
};

Reflector.prototype = Object.create(Phaser.Sprite.prototype);
Reflector.prototype.constructor = Reflector;

Reflector.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = Reflector;

},{}],9:[function(require,module,exports){
'use strict';

var SpaceAlien = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = true;
	this.body.immovable = true;
};

SpaceAlien.prototype = Object.create(Phaser.Sprite.prototype);
SpaceAlien.prototype.constructor = SpaceAlien;

SpaceAlien.prototype.update = function() {

// Alien can't fall below screen
if (this.body.y > 485){
		this.body.velocity.y = -100;
}

},
SpaceAlien.prototype.up = function() { 
	this.body.velocity.y = -330;
};

module.exports = SpaceAlien;

},{}],10:[function(require,module,exports){
'use strict';

var StationAlien = function(game, x, y, sprite, frame) {
  Phaser.Sprite.call(this, game, x, y, sprite, frame);

 	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
	this.body.immovable = true;
  
};

StationAlien.prototype = Object.create(Phaser.Sprite.prototype);
StationAlien.prototype.constructor = StationAlien;

StationAlien.prototype.update = function() {
  
  // write your prefab's specific update code here
  
};

module.exports = StationAlien;

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){

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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{"../prefabs/alien":2,"../prefabs/badEatObject":3,"../prefabs/goodEatObject":6,"../prefabs/table":11}],16:[function(require,module,exports){

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

},{}],17:[function(require,module,exports){

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

},{}],18:[function(require,module,exports){

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
},{}],19:[function(require,module,exports){
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
      //this.game.state.start('beachScene');
    },
    spaceSceneStartClick: function() {
      this.game.state.start('spaceStation');
    },
    plantAnimationClick: function() {
      //this.game.state.start('spaceStation');
    },
    ballAnimationClick: function() {
      //this.game.state.start('spaceScene');
    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = Playroom;

},{}],20:[function(require,module,exports){

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

    // Good food
    this.load.spritesheet('eating_alien_gf', 'assets/img/EatingGame/EatingGame_good_food_smap.png', 442, 610);
    this.load.image('eating_g1', 'assets/img/EatingGame/EatingGame_1.png');
    this.load.image('eating_g2', 'assets/img/EatingGame/EatingGame_2.png');
    this.load.image('eating_g3', 'assets/img/EatingGame/EatingGame_3.png');
    this.load.image('eating_g4', 'assets/img/EatingGame/EatingGame_4.png');
    this.load.image('eating_g5', 'assets/img/EatingGame/EatingGame_5.png');
    this.load.image('eating_g6', 'assets/img/EatingGame/EatingGame_6.png');    
    this.load.image('eating_g7', 'assets/img/EatingGame/EatingGame_7.png');    
    this.load.image('eating_g8', 'assets/img/EatingGame/EatingGame_8.png');    

    // Bad good
    this.load.spritesheet('eating_alien_bf', 'assets/img/EatingGame/EatingGame_bad_food_smap.png', 500, 610);
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

},{}],21:[function(require,module,exports){
'use strict';
var spaceAlien = require('../prefabs/spaceAlien');  
var reflector = require('../prefabs/reflector');
var badSpaceObject = require('../prefabs/badSpaceObject');

var reflectorGroup;
var badObjectGroup;
var reflectorGeneratePace = 2.5;
var badObjectGeneratePace = 4.4;
var score = 0;
var streak = 0;

  function SpaceScene() {}
  SpaceScene.prototype = {

    preload: function() {
    },
    create: function() {
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 400;
      this.game.input.enabled = true;
      score = 0;
      streak = 0;
      this.popSound = this.add.audio('plop_1');
      this.sadSound = this.add.audio('hyi_2');

      this.add.sprite(0, 0, 'spacerun_bg');
      this.backButton = this.add.button(899, 23, 'exit_btn' , this.startPlayroom, this);
      reflectorGroup = this.game.add.group();
      badObjectGroup = this.game.add.group();

      this.spaceAlien = new spaceAlien(this.game, 100, 200, 'spacerun_alien');
      this.game.add.existing(this.spaceAlien);

      this.scoreMeter = this.game.add.sprite(119, 38, 'spacerun_scoremetre');

      this.reflectorGeneratorTimer = this.game.time.events.loop(Phaser.Timer.SECOND * reflectorGeneratePace, this.reflectorGenerator, this);
      this.reflectorGeneratorTimer.timer.start();

      this.badObjectGeneratorTimer = this.game.time.events.loop(Phaser.Timer.SECOND * badObjectGeneratePace, this.badObjectGenerator, this);
      this.badObjectGeneratorTimer.timer.start();

    },

    reflectorGenerator: function(){
        var sprite ='';
        var rand = this.game.rnd.integerInRange(1, 5);
        switch (rand){
          case 1:
          sprite = 'spacerun_ref1';
            break;
          case 2:
          sprite = 'spacerun_ref2';
            break;
          case 3:
          sprite = 'spacerun_ref3';
            break;
          case 4:
          sprite = 'spacerun_ref4';
            break;
          case 5:
          sprite = 'spacerun_ref5';
            break;
        }
          this.reflector = new reflector(this.game, 1000, this.game.rnd.integerInRange(0, 500), sprite);
          reflectorGroup.add(this.reflector);
  },

  badObjectGenerator: function(){
        var sprite ='';
        var rand = this.game.rnd.integerInRange(1, 5);
        switch (rand){
          case 1:
          sprite = 'spacerun_meteorite_small';
            break;
          case 2:
          sprite = 'spacerun_meteorite_medium';
            break;
          case 3:
          sprite = 'spacerun_meteorite_medium';
            break;
          case 4:
          sprite = 'spacerun_meteorite';
            break;
          case 5:
          sprite = 'spacerun_car';
            break;
        }
          this.badSpaceObject = new badSpaceObject(this.game, 1000, this.game.rnd.integerInRange(0, 500), sprite);
          badObjectGroup.add(this.badSpaceObject);
  },

  alienBadObjectCollision: function(badSpaceObject){
    badSpaceObject.destroy();
    this.sadSound.play()
    
    if ( score >= 40){
        // Remove latest score sprite
        this.scoreSprite.destroy();
        score = score - 30;
        streak = 0;
    }
  },

  alienReflectorcollision: function(reflector){
    reflector.destroy();
    this.popSound.play();

    this.scoreSprite = this.add.sprite(130 + score, 47, 'spacerun_yellow');
    score = score + 30;
    streak++;

    // If player has collected 3 or more in a row, add a bit of extra challenge
    if (streak >= 3){
        // an ever increasing chance to spawn a bad object
        var rand = this.game.rnd.integerInRange(1, streak + 1);
        if (rand >= 4){
          this.badObjectGenerator();
        }
    }
  },

    update: function() {
      if (this.game.input.activePointer.isDown){
          this.spaceAlien.up();
      }

    // Collide reflector with the alien
    reflectorGroup.forEach(function(reflector){
          this.game.physics.arcade.collide(reflector, this.spaceAlien, this.alienReflectorcollision, null, this);
    }, this);

    // Collide bad objects with the alien
    badObjectGroup.forEach(function(badSpaceObject){
          this.game.physics.arcade.collide(badSpaceObject, this.spaceAlien, this.alienBadObjectCollision, null, this);
    }, this);


    // Check win
      if (score >= 600) {
         this.game.state.start('trampolineGameWin');
       }
    },
    paused: function() {
    },
    render: function() {
    },
    shutdown: function() {
    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = SpaceScene;

},{"../prefabs/badSpaceObject":4,"../prefabs/reflector":8,"../prefabs/spaceAlien":9}],22:[function(require,module,exports){
'use strict';
var stationAlien = require('../prefabs/stationAlien');  
var goodStationObject = require('../prefabs/goodStationObject');
var badStationObject = require('../prefabs/badStationObject');

var badObjectGroup;
var state = 0;
var soundCooldown = 0;

  function SpaceStation() {}
  SpaceStation.prototype = {
    preload: function() {
      // Override this method to add some load operations. 
      // If you need to use the loader, you may need to use them here.
    },
    create: function() {
      state = 0;
      soundCooldown = 0;
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 400;
      this.popSound1 = this.add.audio('putkea_alas_1');
      this.popSound2 = this.add.audio('putkea_alas_2');
      this.noSound1 = this.add.audio('ei_kay_1');
      this.noSound2 = this.add.audio('ei_kay_2');

      this.add.sprite(0, 0, 'trampoline_game_bg');
      this.add.sprite(420, 0, 'spacest_pipe');
      this.backButton = this.add.button(899, 23, 'exit_btn' , this.startPlayroom, this);

      this.stationAlien = new stationAlien(this.game, 120, 450, 'spacest_alienhitbox');
      this.game.add.existing(this.stationAlien);

      this.alienSprite = this.game.add.sprite(40 ,150, 'spacest_alien');

      badObjectGroup = this.game.add.group();

      this.objectGenerator();

    },

    objectGenerator: function(){

      var pipe = 0;
      var total = 0;
      var goodPipe = 0;

      // Spwan 2 "bad" objects
      for (var i = 0; i < 2; i++)
      {
          var sprite;
          var rand = this.game.rnd.integerInRange(1, 6);

          switch (rand){
            case 1:
            sprite = 'spacest_hat';
              break;
            case 2:
            sprite = 'spacest_crown';
              break;
            case 3:
            sprite = 'spacest_camera';
              break;
            case 4:
            sprite = 'spacest_ribbon';
              break;
            case 5:
            sprite = 'spacest_watch';
              break;
            case 6:
            sprite = 'spacest_flower';
              break;
          }

          // If going through loop for first time, randomize
          if (pipe == 0){
            pipe = this.game.rnd.integerInRange(1, 3);
          }

        switch (pipe){
          case 1:
            total = total + 1;
            this.badStationObject = new badStationObject(this.game, 400, 0, sprite);
            pipe = this.game.rnd.integerInRange(2, 3);
            break;
          case 2:
            total = total + 2;
            this.badStationObject = new badStationObject(this.game, 550, 0, sprite);
                var random = this.game.rnd.integerInRange(1, 2);
              if (random == 1){
                pipe = 1;
              }
              else if (random == 2){
                pipe = 3;
              }
          break;
          case 3:
            total = total + 3;
            this.badStationObject = new badStationObject(this.game, 700, 0, sprite);
            pipe = this.game.rnd.integerInRange(1, 2);
          break;
          }
            this.badStationObject.inputEnabled = true;
            this.badStationObject.input.enableDrag(true);

            badObjectGroup.add(this.badStationObject);
        }

      // Select good object sprite to match state
      var goodSprite = 'spacest_vest';
       switch (state){
            case 0:
            goodSprite = 'spacest_vest';
              break;
            case 1:
            goodSprite = 'spacest_helmet';
              break;
            case 2:
            goodSprite = 'spacest_reflector';
              break;
          }

        // Spawn the "Good" object
        switch(total){
          case 3:
                this.goodStationObject = new goodStationObject(this.game, 700, 0, goodSprite);
          break;
          case 4:
                this.goodStationObject = new goodStationObject(this.game, 550, 0, goodSprite);
          break;
          case 5:
                this.goodStationObject = new goodStationObject(this.game, 400, 0, goodSprite);
          break;
        }
          this.game.add.existing(this.goodStationObject);
          this.goodStationObject.inputEnabled = true;
          this.goodStationObject.input.enableDrag(true);

          var rand = this.game.rnd.integerInRange(1, 2);

          switch (rand){
            case 1:
                this.popSound1.play();
              break;
            case 2:
                this.popSound2.play();
              break;
            }

    },

    update: function() {

      // Change the sprite to match sate
      switch(state){
      case 0:
          this.alienSprite.loadTexture('spacest_alien',0);
      break;
      case 1:
          this.alienSprite.loadTexture('spacest_alien',4);
      break;
      case 2:
          this.alienSprite.loadTexture('spacest_alien',5);
      break;
      case 3:
          this.alienSprite.loadTexture('spacest_alien',6);
      break;
      }

    this.game.physics.arcade.collide(this.goodStationObject, this.stationAlien, this.goodCollide, null, this);

    badObjectGroup.forEach(function(badStationObject){
          this.game.physics.arcade.collide(badStationObject, this.stationAlien, this.badCollide, null, this);
    }, this);
    
      if (soundCooldown != 0){
        soundCooldown--;
      }
    },

    badCollide: function() {

      if ( soundCooldown == 0 ){
          var rand = this.game.rnd.integerInRange(1, 2);
          switch (rand){
            case 1:
            this.noSound1.play();
              break;
            case 2:
            this.noSound2.play();
              break;
            }
        soundCooldown = 100;
      }

      switch(state){
      case 0:
          this.alienSprite.loadTexture('spacest_alien',1);
      break;
      case 1:
          this.alienSprite.loadTexture('spacest_alien',2);
      break;
      case 2:
          this.alienSprite.loadTexture('spacest_alien',3);
      break;
      }
    },

    goodCollide: function() {

      // Destroy all objects
      this.goodStationObject.destroy();
      badObjectGroup.destroy();
      badObjectGroup = this.game.add.group();

      // Proceed to next state, Spawn new objects,
      state++;
      if (state < 1){
        soundCooldown++;
      }
      if ( state < 3){
        this.objectGenerator();
      }

      // Victory, proceed to next game
      if (state == 3)
      {
        this.applauseSound = this.add.audio('applause_sound');
        this.game.time.events.add(Phaser.Timer.SECOND * 8, this.startSpaceScene, this);
        this.game.time.events.add(Phaser.Timer.SECOND * 4, this.spaceSceneInstruction, this);
        this.applauseSound.play();
      }
    },
    startSpaceScene: function() {
      this.game.state.start('spaceScene');
    },
    spaceSceneInstruction: function() {
      this.add.sprite(0, 0, 'spacerun_instruction');
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
    },
    startPlayroom: function() {
      this.game.state.start('playroom');
    }
  };
module.exports = SpaceStation;

},{"../prefabs/badStationObject":5,"../prefabs/goodStationObject":7,"../prefabs/stationAlien":10}],23:[function(require,module,exports){
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
      this.player.alpha = 0.2;
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
      if (this.player.alpha < 1){
        this.player.alpha = this.player.alpha  + 0.05;
      }
    },
    pickHeart: function() {
      this.popSound.play();
      this.scorePointer.x += 28;
      this.heart_ref.kill();
      this.game.time.events.add(Phaser.Timer.SECOND * 3, this.resetHeart, this);
      if (this.player.alpha < 1){
        this.player.alpha = this.player.alpha  + 0.05;
      }
    },
    pickTwo: function() {
      this.popSound.play();
      this.scorePointer.x += 28;
      this.two_ref.kill();
      this.game.time.events.add(Phaser.Timer.SECOND * 3, this.resetTwo, this);
      if (this.player.alpha < 1){
        this.player.alpha = this.player.alpha  + 0.05;
      }
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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
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