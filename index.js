requirejs.config({
    baseUrl: './',
    paths: {
        Phaser: 'node_modules/phaser/build/phaser'
    }
});

require(['Phaser'],
    function(Phaser)
    {
        window.game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameWindow', { preload: preload, create: create, update: update });

        function preload()
        {
        }

        function create()
        {
        }

        function update()
        {
        }
    });