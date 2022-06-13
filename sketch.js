var box1
var box2
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,200,30,40);
  box2 = new Box(200,300,30,400); 
}

function draw() 
{
  background(220);
box1.show()
box2.show()
}

