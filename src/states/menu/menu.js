define(function() {

    function preload() {
        this.game.stage.backgroundColor = "#366e9f";
        this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 75, 'phaserLogo');
        this.logo.anchor.setTo(0.5);
        //this.game.state.start('game');
    }

    function create() {
        var graphics = this.add.graphics(this.game.world.centerX, this.game.world.centerY);
        graphics.beginFill(0xE5FF60);
        graphics.drawRoundedRect(-75,150,150,50, 20);
        graphics.endFill();

        var style = { font: "25px Arial", fill: "#000000", align: "center" };
        var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 175, "Start game", style);
        text.anchor.set(0.5);

        graphics.inputEnabled = true;
        graphics.input.useHandCursor = true;

        graphics.events.onInputDown.add(function() {
            this.game.state.start('game');
        }, this);
    }

    return {
        preload: preload,
        create: create
    }
});