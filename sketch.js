const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3;
var paper;
var ground;

function setup() {
  createCanvas(800, 400);
  
  engine = Engine.create();
  world = engine.world;

  dustbin1 = new Dustbin(570,300,20,170);
  dustbin2 = new Dustbin(725,300,20,170);
  dustbin3 = new Dustbin(650,450,150,170);

  paper = new Paper(100,360,45);

  ground = new Ground(400,390,800,20);

  Engine.run(engine);

  console.log(paper);
}

function draw() {
 
  background(250);
  
  Engine.update(engine);

  rectMode(CENTER);

  paper.display();
  dustbin3.display(650,300,150,170);
  ground.display();
}

function keyPressed(){

    if(keyCode === UP_ARROW){
    
    Matter.Body.applyForce(paper.body,paper.body.position,{x: 30,y: -40});
    }
    }