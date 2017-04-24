define(function() {

    function preload() {
        this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'phaserLogo');
        this.logo.anchor.setTo(0.5);
    }

    function create() {
        this.game.stage.backgroundColor = "#7e8652";
    }


    function render() {
    }

    function update() {
    }


    return {
        create: create,
        preload: preload,
        update: update,
        render: render
    }
});