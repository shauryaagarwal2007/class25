const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function preload(){
back=loadImage("sprites/bg.png")
}

function setup() {
  createCanvas(1200,600);

  myengine = Engine.create();  //.world
  myworld = myengine.world;
  
  ground=new GROUND();

  box1 = new BOX(700,320,70,70);
  box2 = new BOX(920,320,70,70);
  box3 = new BOX(700,240,70,70);
  box4 = new BOX(920,240,70,70);
  box5 = new BOX(810,160,70,70);

  bird = new BIRD(150,160);

  pig1 = new PIG(810,320);
  pig2 = new PIG(810,240);

  log1 = new LOG(810,260,300,PI/2);
  log2 = new LOG(810,180,300,PI/2);
  log3 = new LOG(760,120,150,PI/7);
  log4 = new LOG(870,120,150,-PI/7);
}

function draw() {
  background(back);  

  Engine.update(myengine)

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  bird.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  ground.display();
}