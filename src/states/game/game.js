define(function() {

    var DEFAULT_LEVEL_DATA = {
            level: 0,
            score: 0
        },
        STEP_SIZE = 4;

    function init (levelData) {
        this.score     = 0;
        this.levelData = levelData === undefined
                        ? DEFAULT_LEVEL_DATA
                        : levelData;

        this.score += this.levelData.score;
        this.levelData.score = 0;
    }

    function preload () {
        this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaserLogo');
        this.game.load.audio('music', ['https://examples.phaser.io/assets/audio/bodenstaendig_2000_in_rock_4bit.mp3']);
        this.logo.anchor.setTo(0.5);
    }

    function create () {
        this.mainLoop = this.game.add.audio('music');

        this.mainLoop.play();


        this.escKey = this.game.input.keyboard
          .addKey(Phaser.Keyboard.ESC);

        this.arrowLeft = this.game.input.keyboard
          .addKey(Phaser.Keyboard.LEFT);
        this.arrowRight = this.game.input.keyboard
          .addKey(Phaser.Keyboard.RIGHT);
        this.arrowTop = this.game.input.keyboard
          .addKey(Phaser.Keyboard.UP);
        this.arrowBottom = this.game.input.keyboard
          .addKey(Phaser.Keyboard.DOWN);

        this.arrowRight.onDown.add(this.goRight, this);
        this.arrowLeft.onDown.add(this.goLeft, this);
        this.arrowTop.onDown.add(this.goTop, this);
        this.arrowBottom.onDown.add(this.goBottom, this);

        this.escKey.onDown.add(this.endGame, this);
    }


    function render () {
        this.game.debug.soundInfo(this.mainLoop, 20, 32);
    }

    function update () {
        
        this.game.stage.backgroundColor = "#7e8652";
    }

    function goRight () {
        this.logo.x += STEP_SIZE;
    }

    function goLeft () {
        this.logo.x -= STEP_SIZE;
    }

    function goTop () {
        this.logo.y -= STEP_SIZE;
    }

    function goBottom () {
        this.logo.y += STEP_SIZE;
    }

    function endGame () {
        this.game.state.start('menu', true, false, this.levelData);
    }


    return {
        init     : init,
        preload  : preload,
        create   : create,
        update   : update,
        render   : render,
        endGame  : endGame,
        goLeft   : goLeft,
        goRight  : goRight,
        goTop    : goTop,
        goBottom : goBottom
    };
});