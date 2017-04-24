/**
 * Created by pawel on 23.04.2017.
 */

requirejs.config({
    paths: {
        boot : 'src/states/boot/boot',
        load : 'src/states/load/load',
        menu : 'src/states/menu/menu',
        game : 'src/states/game/game',
        level: 'src/states/game/level/level'
    }
});

define(['boot', 'load', 'menu', 'game'], function(boot, load, menu, game) {
    return {
        boot: boot,
        load: load,
        menu: menu,
        game: game
    }
});