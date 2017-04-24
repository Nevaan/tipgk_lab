define(function() {
    function preload() {
    }

    function create() {
        this.game.stage.backgroundColor = "#4488AA";
        this.game.state.start('load');
    }

    function shutdown() {
    }

    return {
        // Wartosci po lewej musza odpowiadac Phaser lifecycle
        preload: preload,
        create: create,
        shutdown: shutdown
    }
});