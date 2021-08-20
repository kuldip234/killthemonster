const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("background.png");
}

function setup() {
  createCanvas(1400, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(750, 570, 50, 50);
  box2 = new Box(750, 520, 50, 50);
  box3 = new Box(750, 470, 50, 50);
  box4 = new Box(750, 420, 50, 50);
  box5 = new Box(750, 370, 50, 50);
  box6 = new Box(750, 320, 50, 50);
  box7 = new Box(800, 570, 50, 50);
  box8 = new Box(800, 520, 50, 50);
  box9 = new Box(800, 470, 50, 50);
  box10 = new Box(800, 420, 50, 50);
  box11 = new Box(800, 370, 50, 50);
  box12 = new Box(800, 320, 50, 50);
  box13 = new Box(850, 570, 50, 50);
  box14 = new Box(850, 520, 50, 50);
  box15 = new Box(850, 470, 50, 50);
  box16 = new Box(850, 420, 50, 50);
  box17 = new Box(850, 370, 50, 50);
  box18 = new Box(850, 320, 50, 50);
  box19 = new Box(900, 570, 50, 50);
  box20 = new Box(900, 520, 50, 50);
  box21 = new Box(900, 470, 50, 50);
  box22 = new Box(900, 420, 50, 50);
  box23 = new Box(900, 370, 50, 50);
  box24 = new Box(900, 320, 50, 50);
  
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  box22.display()
  box23.display()
  box24.display()
  

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {
  //set the position of hero when mouse is dragged
  Matter.Body.setPosition(hero.body, { x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}