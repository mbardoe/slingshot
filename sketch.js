 let acorn1;
 let gravity;

function setup() {
	//frameRate(2);
	createCanvas(400,400);
	background(0);
	acorn1= new Acorn(200, 200);
	gravity = createVector(0,0.1);

}

function draw() {

  background(0);
  let acorn1gravity=p5.Vector.mult(gravity, acorn1.mass);
  acorn1.applyForce(acorn1gravity);
  acorn1.update();
  acorn1.bounce();
  acorn1.displayEnergy(gravity);
  acorn1.show();

}