
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var backgroundImg;
var score=0;

function preload(){	
  getBackgroundImage()  
}

function setup() {
	createCanvas(900, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    groundomega = new Ground(450,500,800,20);
    ground1 = new Ground(500,475,20,30)
    ground2 = new Ground(800,475,20,30)
    ground3 = new Ground(650,460,400,20)
  //  ground4 = new Ground(830,440,10,20)
  //  ground5 = new Ground(460,440,10,20)    

    box1=new Box(500,430,40,40)
    box2=new Box(530,430,40,40)
    box3=new Box(570,430,40,40)
    box4=new Box(610,430,40,40)
    box5=new Box(650,430,40,40)
    box6=new Box(690,430,40,40)
    box7=new Box(730,430,40,40)
    box8=new Box(770,430,40,40)
    box9=new Box(810,430,40,40)
    

    box10=new Box(510,390,40,40)
    box11=new Box(550,390,40,40)
    box12=new Box(590,390,40,40)
    box13=new Box(630,390,40,40)
    box14=new Box(670,390,40,40)
    box15=new Box(710,390,40,40)
    box16=new Box(750,390,40,40)
	  box17=new Box(790,390,40,40)

    
    box18=new Box(530,350,40,40)    
    box19=new Box(570,350,40,40)
    box20=new Box(610,350,40,40)
    box21=new Box(650,350,40,40)
    box22=new Box(690,350,40,40)
    box23=new Box(730,350,40,40)
    box24=new Box(770,350,40,40)


    box25=new Box(550,310,40,40)
    box26=new Box(590,310,40,40)
    box27=new Box(630,310,40,40)
    box28=new Box(670,310,40,40)
    box29=new Box(710,310,40,40)
    box30=new Box(750,310,40,40)
  
  
    box31=new Box(570,270,40,40)
    box32=new Box(610,270,40,40)
    box33=new Box(650,270,40,40)
    box34=new Box(690,270,40,40)
    box35=new Box(730,270,40,40)
   
    box36=new Box(590,230,40,40)
    box37=new Box(630,230,40,40)
    box38=new Box(670,230,40,40)
    box39=new Box(710,230,40,40)

    box40=new Box(610,190,40,40)
    box41=new Box(650,190,40,40)
    box42=new Box(690,190,40,40)

    box43=new Box(630,150,40,40)
    box44=new Box(670,150,40,40)

    box45=new Box(650,110,40,40)

    poly=new Polygon(300,300,50,50)

    sling1=new Slingshot(poly.body,{x:200,y:260})

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg)
  background(backgroundImg);
  Engine.update(engine);
  text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  text("SCORE : "+score,750,40);
  
  groundomega.display();
  ground1.display();
  ground2.display();
  ground3.display();
  
  fill("skyblue");  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
 
  fill("pink");
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();

  fill("turquoise");
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
 
  fill("grey");
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
 
  fill("violet")
  box31.display();
  box32.display();
  box33.display(); 
  box34.display();
  box35.display();
 
  fill("white")
  box36.display();
  box37.display();
  box38.display();
  box39.display();

  fill("purple");
  box40.display();
  box41.display();
  box42.display();

  fill(7,139,194)
  box43.display();
  box44.display();

  fill(0,130,131)
  box45.display();

  // imageMode(CENTER)
  // image(this.image,poly.position.x,poly.position.y,40,40);
  sling1.display();

  poly.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score(); 
  box31.score();
  box32.score();
  box33.score();
  box34.score();
  box35.score();
  box36.score();
  box37.score();
  box38.score();
  box39.score();
  box40.score();
  box41.score();
  box42.score();
  box43.score();
  box44.score();
  box45.score();
 
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(poly.body, {x: mouseX , y:mouseY});
}

function mouseReleased(){
  push()
  sling1.fly()
  pop()
}

function keyPressed(){
  if(keyCode === 32){
  sling1.attach(this.polygon);
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  //console.log(hour);

  if (hour >= 06 && hour <= 18) {
    bg = "light.jpg";
  } else {
    bg = "dark.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}