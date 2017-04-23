define(function() {

    function preload() {
        this.game.stage.backgroundColor = "#c8210e";
        //alert("Menu");
        this.game.state.start('game');
    }

    return {
        preload: preload
    }
});