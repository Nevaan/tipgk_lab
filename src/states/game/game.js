define(function() {

    DEFAULT_LEVEL_DATA = {
        level: 0,
        score: 0
    };

    function init (levelData) {
        console.log(levelData);
        this.score     = 0;
        this.levelData = levelData === undefined
                        ? DEFAULT_LEVEL_DATA
                        : levelData;

        this.score += this.levelData.score;
        this.levelData.score = 0;

        this.nextLevel();
    }

    function preload () {
        this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaserLogo');
        this.logo.anchor.setTo(0.5);
    }

    function create () {
        this.game.stage.backgroundColor = "#7e8652";
        this.escKey = this.game.input.keyboard
          .addKey(Phaser.Keyboard.ESC);

        this.escKey.onDown.add(this.endGame, this);
    }


    function render () {

    }

    function update () {

    }

    function endGame () {
        this.game.state.start('menu', true, false, this.levelData);
    }

    function nextLevel () {
        this.levelData.level++;

        this.score += this.levelData.score;

        this.game.state.start('level', true, false, this.levelData);
    }


    return {
        init     : init,
        preload  : preload,
        create   : create,
        update   : update,
        render   : render,
        endGame  : endGame,
        nextLevel: nextLevel
    };
});