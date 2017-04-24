define(function() {

    function preload() {
        this.game.load.image('phaserLogo', 'assets/image/logo.png');

        this.game.load.image('gun', 'assets/image/gun.png');
        this.game.load.image('shield', 'assets/image/shield.png');
        this.game.load.image('sword', 'assets/image/sword.png');
        this.game.load.image('hero', 'assets/image/hero.png');
        this.game.load.image('dragon', 'assets/image/dragon.png');
        this.game.load.image('zombie', 'assets/image/zombie.png');
        this.game.load.image('ball', 'assets/image/ball.png');
    }

    function create() {
        this.game.state.start('menu');
    }

    return {
        preload: preload,
        create: create
    }
});