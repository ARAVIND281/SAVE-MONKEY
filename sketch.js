var canvas;
var form,player;

function preload() {

}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);
    form = new Form();
    player = new Player();


}

function draw() {

    form.display();

    drawSprites();


} 