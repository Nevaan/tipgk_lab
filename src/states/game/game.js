define(['Phaser'] , function(Phaser) {

    var circle, ellipse, polygon, rectangle, roundedRect;


    function preload() {
    }

    function create() {
        circle = this.add.graphics(this.game.world.centerX, this.game.world.centerY);
        ellipse = this.add.graphics(this.game.world.centerX, this.game.world.centerY);
        polygon = this.add.graphics(this.game.world.centerX, this.game.world.centerY);
        rectangle = this.add.graphics(this.game.world.centerX, this.game.world.centerY);
        roundedRect = this.add.graphics(this.game.world.centerX, this.game.world.centerY);

        createCircle(50, 50, 20);
        createEllipse(-20, -20, 70, 30)
        createPolygon([ new Phaser.Point(200, 100), new Phaser.Point(350, 100), new Phaser.Point(375, 200), new Phaser.Point(150, 200) ]);
        createRectangle(-100, -200, 50,150);
        createRoundedRectangle(100,-200, 120,180, 40);

        this.game.stage.backgroundColor = "#7e8652";
    }

    function render() {
    }

    function update() {
    }

    function createCircle(x,y,d) {
        circle.beginFill(0x434986);
        circle.drawCircle(x,y,d);
        circle.endFill();
    }

    function createEllipse(x,y,width,height) {
        ellipse.beginFill(0x248617);
        ellipse.drawEllipse(x,y,width,height);
        ellipse.endFill();
    }

    function createPolygon(path) {
        var poly = new Phaser.Polygon();
        poly.setTo(path);
        ellipse.beginFill(0x105286);
        ellipse.drawPolygon(poly);
        ellipse.endFill();
    }

    function createRectangle(x,y,width,height) {
        rectangle.beginFill(0x860B1A);
        rectangle.drawRect(x,y,width,height);
        rectangle.endFill();
    }

    function createRoundedRectangle(x,y,width,height, radius) {
        roundedRect.beginFill();
        roundedRect.drawRoundedRect(x,y,width,height, radius);
        roundedRect.endFill();
    }

    return {
        create: create,
        preload: preload,
        update: update,
        render: render
    }
});