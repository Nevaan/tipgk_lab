define(function() {
    function preload() {
        //alert("Boot");
    }

    function create() {
        //alert ("boot-create");
        this.game.stage.backgroundColor = "#4488AA";
        this.game.state.start('load');
    }

    function init() {
        alert("boot-init" + this.math.difference(10,14));
    }

    function shutdown() {
        //alert("boot-shutdown");

    }

    return {
        // Wartosci po lewej musza odpowiadac phaser lifecycle
        preload: preload,
        create: create,
        init: init,
        shutdown: shutdown
    }
});