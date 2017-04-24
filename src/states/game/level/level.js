define(function() {

    DEFAULT_LEVEL_DATA = {
        level: 0,
        score: 0
    };

    function preload() {
        this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaserLogo');
        this.logo.anchor.setTo(0.5);
    }

    function create() {
        this.game.stage.backgroundColor = "#7e8652";
        this.decideLevelState();
    }


    function render() {
    }

    function update() {
    }

    function nextRound () {
        this.game.state.start('game', true, false, this.levelData);
    }


    return {
        init: function(levelData) {
            this.levelData = levelData;
        },
        create: function() {
            
        },
        nextRound: nextRound
    }
});