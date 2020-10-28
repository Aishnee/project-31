const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(480,800);
  world = engine.world;
  engine = Engine.create();
  createSprite(400, 200, 50, 50);
  ground = new Ground(600,height,1200,20)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}