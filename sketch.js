 let acorn1;
 let gravity;
 let angle;
 let launch;

function setup() {
	//frameRate(2);
	angle=createSlider(0, 90, 30, 1);
	angle.position(20,30);
	launch=createButton("Launch");
	launch.mouseClicked(launchbutton);
	launch.size(80,30);
	launch.position(20, 60);
	createCanvas(400,400);
	background(0);
	acorn1= new Acorn(200, 200);
	gravity = createVector(0,0.1);

}

function draw() {

  background(0);
  text("Angle", 40+angle.width, 30);
  let acorn1gravity=p5.Vector.mult(gravity, acorn1.mass);
  acorn1.applyForce(acorn1gravity);
  acorn1.update();
  acorn1.bounce();
  acorn1.displayEnergy(gravity);
  acorn1.show();

}

function launchbutton(){
	//print(angle.value());
	acorn1.velocity=p5.Vector.fromAngle(radians(angle.value()),5);
	//print(acorn1.velocity);
	acorn1.position=createVector(20, height-20);
}

