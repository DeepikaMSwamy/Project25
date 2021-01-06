
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dp1,dp2,dp3;
var dustbinImg;

function preload() {
	
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;

  Engine.run(engine); 
  paper = new Paper(50,500,50,200);
	//dp1 = new Dustbin(910,600,20,140);
	//dp2 = new Dustbin(1090,600,20,140);
  dp3 = new Dustbin(1100,570,150,150);
  ground = new Ground(400,700,1900,20);
 
	 
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);

  background("lightgrey");

  
 
 
  //dp1.display();
  //dp2.display();
  dp3.display();
  ground.display();
  paper.display();
  image(dustbinImg,855,500,200,200);
}


function keyPressed(){
 if(keyCode === UP_ARROW){ 
   Body.applyForce(paper.body,paper.body.position,{x:635,y:-549});	 
 }	
}