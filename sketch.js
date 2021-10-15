const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var delta,deltaImg;
var bg, bgImg;

function preload() {
deltaImg = loadAnimation("Run1.png","Run2.png","Run3.png","Run4.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    delta = createSprite(100,100,40,40)
    delta.addAnimation(deltaImg)


    
    
}

function draw(){
background()
drawSprites()




}
