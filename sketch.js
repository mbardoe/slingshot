 let acorn1;
 let gravity;
 let angle;
 let launch;
 let stretch;
 let stretchConstant=50000;

function setup() {
	//frameRate(2);
	angle=createSlider(0, 90, 30, 1);
	angle.position(20,30);
	stretch=createSlider(0, .15, .05, .002);
	stretch.position(20, 60);
	launch=createButton("Launch");
	launch.mouseClicked(launchbutton);
	launch.size(80,30);
	launch.position(20, 90);
	createCanvas(1200,800);
	background(0);
	acorn1= new Acorn(200, 200);
	gravity = createVector(0,0.1);
	launchbutton();

}

function draw() {

  background(0);
  text("Angle", 40+angle.width, 30);
  text( angle.value(), 10, 30);
  text("Stretch", 40+stretch.width, 60);
  text( stretch.value(), 10, 60);
  let acorn1gravity=p5.Vector.mult(gravity, acorn1.mass);
  acorn1.applyForce(acorn1gravity);
  acorn1.update();
  acorn1.bounce();
  acorn1.displayEnergy(gravity);
  acorn1.show();
  // show the aim
  stroke(0,255,0);
  strokeWeight(4);
  direction=p5.Vector.fromAngle(radians(angle.value()),stretch.value()*200);
  line(20, height-20, 20+direction.x, height-20-direction.y);
  strokeWeight(0);
  stroke(255);
}

function launchbutton(){
	let slingshotEnergy=1/2*stretchConstant*pow(stretch.value(),2);
	let velocity=sqrt(2*slingshotEnergy/acorn1.mass);
	//print(angle.value());
	acorn1.velocity=p5.Vector.fromAngle(-radians(angle.value()),velocity);
	//print(acorn1.velocity);
	acorn1.position=createVector(20, height-20);
}

