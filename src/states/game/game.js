define(['Phaser'], function(Phaser) {

    var circle;
    function create() {

        this.game.stage.backgroundColor = "#c8c025";

        var g = this.game.add.graphics(0,0);
        g.beginFill(0xFF0000, 0.5);
        circle = g.drawCircle(300, 300, 100);
    }

    function render() {

    }

    function update() {

    }


    return {
        create: create,
        update: update,
        render: render
    }
});