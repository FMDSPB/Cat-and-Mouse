var cat, catImage, catRun, catSat;
var mouse, mouseImage, mouseTaunt, mouseSat;
var garden, gardenImage;


function preload() {
    
    catImage = loadImage("tomOne.png");
    catRun = loadAnimation("tomTwo.png", "tomThree.png");
    catSat = loadImage("tomFour.png")

    mouseImage = loadImage("jerryOne.png");
    mouseTaunt = loadAnimation("jerryTwo.png", "jerryThree.png");
    ratSat = loadImage("jerryFour.png")

    gardenImage = loadImage('garden.png');
}

function setup(){
    createCanvas(1000,800);

    garden = createSprite(500, 400);
    garden.addImage(gardenImage);
    garden.scale = 1;

    cat = createSprite(800, 650);
    cat.addImage(catImage);
    cat.scale = 0.16;
    //cat.debug = true;
    cat.setCollider('rectangle', 1, 1, 1300, 1000)

    mouse = createSprite(100, 650);
    mouse.addImage(mouseImage);
    mouse.scale = 0.13;
    //mouse.debug = true;
    mouse.setCollider("rectangle", 1, 1, 900, 1000);

}

function draw() {

    background(255);

    keyPressed();
    
    if(mouse.isTouching(cat)) {

        cat.velocityX = 0;
        cat.addImage("Satisfied", catSat);
        cat.changeImage("Satisfied");

        mouse.addImage("Searching", ratSat);
        mouse.changeImage("Searching");
    }

    drawSprites();
}


function keyPressed(){

    if(keyDown("left")) {
    cat.velocityX = -4;
    cat.addAnimation("running", catRun)
    cat.changeAnimation("running");

    mouse.addAnimation("taunting", mouseTaunt);
    mouse.changeAnimation("taunting");

    }

}
