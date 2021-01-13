
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	pendulum1 = new Pendulum(340, 450, "#00b0ff")
	pendulum2 = new Pendulum(400, 450, "#22c2dd")
	pendulum3 = new Pendulum(440, 450, "11a1ee")
	
	sling1 = new Sling(pendulum1.body, {x: 340, y: 200})
	sling2 = new Sling(pendulum2.body, {x: 400, y: 200})
	sling3 = new Sling(pendulum3.body, {x: 470, y: 200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  pendulum1.display()
  pendulum2.display()
  pendulum3.display()

  sling1.display()
  sling2.display()
  sling3.display()
 
}



