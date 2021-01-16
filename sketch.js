
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
const Constraint=Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject;
var rope1,rope2,rope3,rope4,rope5;
var world,engine;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject= new Roof(300,10,1100,30);
	
	
	bobObject1=new Bob(400,500,100);
	bobObject2=new Bob(500,500,100);
	bobObject3=new Bob(600,500,100);
	bobObject4=new Bob(700,500,100);
	bobObject5=new Bob(800,500,100);

	var render=Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,
			height:800,
			wideframes:false
		}
	});

	rope1=new Rope(bobObject1.body,roofObject.body,-200,0);
	rope2=new Rope(bobObject2.body,roofObject.body,-100,0);
	rope3=new Rope(bobObject3.body,roofObject.body,-0*2,0);
	rope4=new Rope(bobObject4.body,roofObject.body,100,0);
	rope5=new Rope(bobObject5.body,roofObject.body,200,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-20,y:-20});
	}
}


