const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, platform;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4;
var pig1, pig2;
var bird, slingshot;

var score = 0;
var turn = 0;

var gameState = "onSling";

function setup () {
    
    createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,20);
    platform = new Ground(150,305,300,170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);
    
    pig1 = new Pig(810,350);
    pig2 = new Pig(810,220);

    bird = new Bird(200,50);
    slingshot = new SlingShot(bird.body,{x:200,y:50});

}

function draw () {

    background("lightblue");

    Engine.update(engine);

    ground.display();
    platform.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();
    slingshot.display();

    pig1.score();
    pig2.score();

    if(turn === 2){
        turn = 0;
        reset();
    }

    stroke(0);
    fill(0);
    textSize(20);
    textFont("Georgia");
    text("Score: " + score,20,30);

    textSize(15);
    text("To increase your score, use the slingshot to launch the bird at the pigs to make them disappear!",565,15);
    text("Press space to retry. You only have two chances, so the third time you press space, the game will reset.",520,33);
    text("If the game doesn't reset properly, press the right arrow key a few times to fix the problem. Good luck!",520,51);
    text("Keep in mind that the right arrow key will only reset the game when it is needed. Have fun!",595,69);

    push();
    fill(random(0,255),random(0,255),random(0,255));
    textSize(60);
    strokeWeight(6);
    stroke(random(255,0,0),random(255,0,0),random(255,0,0))
    text("Angry",1000,250);
    text("Birds",1008,330)
    pop();

}

function mouseDragged(){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){

    if(keyCode === 32){

        slingshot.attach(bird.body);
        
        Matter.Body.setPosition(bird.body,{x:200,y:50});
        Matter.Body.setAngle(bird.body,0);
        Matter.Body.setVelocity(bird.body,{x:0,y:0});
        
        bird.trajectory = [];

        turn = turn + 1;

    }

    if(keyCode === RIGHT_ARROW && turn === 0)
        reset();

}

function reset () {

    slingshot.attach(bird.body);
    
    Matter.Body.setPosition(bird.body,{x:200,y:50});
    Matter.Body.setAngle(bird.body,0);
    Matter.Body.setVelocity(bird.body,{x:0,y:0});
    
    bird.trajectory = [];

    pig1.reset();
    pig2.reset();
    box1.reset();
    box2.reset();
    box3.reset();
    box4.reset();
    box5.reset();
    log1.reset();
    log2.reset();
    log3.reset();
    log4.reset();

    score = 0;

}