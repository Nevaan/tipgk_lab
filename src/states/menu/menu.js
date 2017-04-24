define(function() {

    function preload() {
        this.game.stage.backgroundColor = "#366e9f";
        this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY - 75, 'phaserLogo');
        this.logo.anchor.setTo(0.5);
    }

    function create() {
        var menuButton = this.add.graphics(this.game.world.centerX, this.game.world.centerY);
        menuButton.beginFill(0xE5FF60);
        menuButton.drawRoundedRect(-75,150,150,50, 20);
        menuButton.endFill();

        var style = { font: "25px Arial", fill: "#000000", align: "center" };
        var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY + 175, "Start game", style);
        text.anchor.set(0.5);

        menuButton.inputEnabled = true;
        menuButton.input.useHandCursor = true;

        menuButton.events.onInputDown.add(function() {
            this.game.state.start('game');
        }, this);
    }

    return {
        preload: preload,
        create: create
    }
});