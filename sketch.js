
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2   
}
ground = new Ground(1100,600,20,120);
groundOBj = new Ground(width/2,670,width,20);
leftSide = new Ground(1350,600,20,120);

rectMode(CENTER);
ellipseMode(RADIUS);
	//Create the Bodies Here.
ball = Bodies.circle(260,100,20,ball_options);
World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51);
  fill(127);
  ground.show();
  groundOBj.show();
  leftSide.show();
  ellipse(ball.position.x,ball.position.y,20,20);
  Engine.update(engine);
  
}

function keyPressed()
{
if(keyCode === UP_ARROW)
	{
Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}


