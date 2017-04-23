define(function() {
    function create() {
        //alert("load-create");
        this.game.state.start('menu');
    }

    return {
        create: create
    }
});