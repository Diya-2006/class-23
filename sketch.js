const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(200,100,50,100);
    box3 = new Box(100,300,50,50);
    box4= new Box(100,240,50,100);
    ground1= new Ground(200,390,400,30);
}

function draw(){
    background("white");
    Engine.update(engine);
    ground1.display();

    fill("blue")
    box1.display();
    fill("red")
    box2.display();

    fill("brown")
    box3.display();
    fill("yellow")
    box4.display();
}