define(function() {

    function preload() {
        this.game.stage.backgroundColor = "#c8210e";
        this.game.state.start('game');
    }

    return {
        preload: preload
    }
});