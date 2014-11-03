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
