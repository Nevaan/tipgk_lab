requirejs.config({
    baseUrl: './',
    paths: {
        Phaser: 'node_modules/phaser/build/phaser',
        GameStates: 'src/states/GameStates'
    }
});

require(['Phaser', 'GameStates'],
    function(Phaser, GameStates) {
        var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'gameWindow');

        game.state.add('boot', GameStates.boot);
        game.state.add('load', GameStates.load);
        game.state.add('menu', GameStates.menu);
        game.state.add('game', GameStates.game);

        game.state.start('boot');
    }
);