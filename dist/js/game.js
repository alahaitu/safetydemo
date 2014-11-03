(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//global variables
window.onload = function () {
  var game = new Phaser.Game(1024, 688, Phaser.AUTO, 'safety-demo');

  // Game States
  game.state.add('beachScene', require('./states/beachScene'));
  game.state.add('boot', require('./states/boot'));
  game.state.add('eatingScene', require('./states/eatingScene'));
  game.state.add('gameover', require('./states/gameover'));
  game.state.add('menu', require('./states/menu'));
  game.state.add('play', require('./states/play'));
  game.state.add('playroom', require('./states/playroom'));
  game.state.add('preload', require('./states/preload'));
  game.state.add('spaceScene', require('./states/spaceScene'));
  

  game.state.start('boot');
};
},{"./states/beachScene":3,"./states/boot":4,"./states/eatingScene":5,"./states/gameover":6,"./states/menu":7,"./states/play":8,"./states/playroom":9,"./states/preload":10,"./states/spaceScene":11}],2:[function(require,module,exports){
'use strict';

var EatObject = function(game, x, y, sprite, frame) {
	Phaser.Sprite.call(this, game, x, y, sprite, frame);

  	this.game.physics.arcade.enableBody(this);
	this.body.allowGravity = false;
  	this.body.velocity.x = 100;

};

EatObject.prototype = Object.create(Phaser.Sprite.prototype);
EatObject.prototype.constructor = EatObject;

EatObject.prototype.update = function() {
  
  // write your prefab's specific update code here
  
},

EatObject.prototype.drop = function(){
	this.body.allowGravity = true;
	this.body.velocity.y = -200;
	this.body.velocity.x = 50;
};

module.exports = EatObject;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){

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

},{}],5:[function(require,module,exports){
'use strict';
var eatObject = require('../prefabs/eatObject');  

  function EatingScene() {}
  EatingScene.prototype = {

    create: function() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 500;

        this.sprite = this.game.add.sprite(0, 0, 'eating_bg');


        this.objectGenerator = this.game.time.events.loop(Phaser.Timer.SECOND * 3, this.generateObjects, this);
        this.objectGenerator.timer.start();

    },
    generateObjects: function() {

      this.eatObject = new eatObject(this.game, -50, 400, 'eating_x1');

      this.game.add.existing(this.eatObject);

      this.input.onDown.add(this.eatObject.drop, this.eatObject);

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
module.exports = EatingScene;

},{"../prefabs/eatObject":2}],6:[function(require,module,exports){

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

},{}],7:[function(require,module,exports){

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

},{}],8:[function(require,module,exports){

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
},{}],9:[function(require,module,exports){
'use strict';
  function Playroom() {}
  Playroom.prototype = {
    create: function() {
      this.sprite = this.game.add.sprite(0, 0, 'playroom_bg');

      this.eatingSceneStartButton = this.game.add.button(715, 225, 'playr_button_eat', this.eatingSceneStartClick, this);
      this.beachSceneStartButton = this.game.add.button(210, 460, 'playr_button_duck', this.beachSceneStartClick, this);
      this.spaceSceneStartButton = this.game.add.button(835, 500, 'playr_button_ball', this.spaceSceneStartClick, this);
      this.spaceSceneStartButton = this.game.add.button(45, 160, 'playr_button_plant', this.spaceSceneStartClick, this);


      //this.eatingSceneStartButton.anchor.setTo(0.5,0.5);
      //this.beachSceneStartButton.anchor.setTo(0.5,0.5);
      //this.spaceSceneStartButton.anchor.setTo(0.5,0.5);


    },
    eatingSceneStartClick: function() {
      this.game.state.start('eatingScene');
    },
    beachSceneStartClick: function() {
      this.game.state.start('beachScene');
    },
    spaceSceneStartClick: function() {
      this.game.state.start('spaceScene');
    }
  };
module.exports = Playroom;

},{}],10:[function(require,module,exports){

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

    // Playroom assets
    this.load.image('playroom_bg', 'assets/img/Playroom/playr_bg.png');
    this.load.image('playr_button_ball', 'assets/img/Playroom/playr_button_ball.png');
    this.load.image('playr_button_duck', 'assets/img/Playroom/playr_button_duck.png');
    this.load.image('playr_button_eat', 'assets/img/Playroom/playr_button_eat.png');
    this.load.image('playr_button_plant', 'assets/img/Playroom/playr_button_plant.png');

    // Eating game assets
    this.load.image('eating_bg', 'assets/img/EatingGame/kitchen.png');
    this.load.image('eating_carrot', 'assets/img/EatingGame/EatingGame_Carrot.png');
    this.load.image('eating_potato', 'assets/img/EatingGame/EatingGame_Potato.png');
    this.load.image('eating_strawberry', 'assets/img/EatingGame/EatingGame_Strawberry.png');
    this.load.image('eating_tomato', 'assets/img/EatingGame/EatingGame_Tomato.png');
    this.load.image('eating_x1', 'assets/img/EatingGame/EatingGame_X1.png');
    this.load.image('eating_x2', 'assets/img/EatingGame/EatingGame_X2.png');
    this.load.image('eating_x3', 'assets/img/EatingGame/EatingGame_X3.png');
    this.load.image('eating_x4', 'assets/img/EatingGame/EatingGame_X4.png');


    this.load.image('eatobject', 'assets/img/eating/rectangle_purple.png');
  },
  create: function() {
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

},{}],11:[function(require,module,exports){
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

},{}]},{},[1])