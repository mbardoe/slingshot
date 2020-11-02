class Acorn{

	constructor(x, y){
		this.position=createVector(x,y);
		this.velocity=createVector(-2,-4);
		this.acceleration=createVector(0,0);
		this.mass=10;
		this.radius=10;

	}

	show(){
		fill(200);
		ellipseMode(CENTER);
		ellipse(this.position.x, this.position.y, 2*this.radius, 2*this.radius);
	}

	update(){
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity);
		this.acceleration.mult(0);
	}

	applyForce(force){
		let thisForcesAcceleration=p5.Vector.div(force, this.mass);
		this.acceleration.add(thisForcesAcceleration);
	}

	bounce(){
		if (this.position.y+this.radius>=height){
			this.position.y=height-this.radius;
			this.velocity.y*=-1;
		}
		if (this.position.x+this.radius>=width){
			this.position.x=width-this.radius;
			this.velocity.x*=-1;
		}
		if (this.position.x-this.radius<=0){
			this.position.x=this.radius;
			this.velocity.x*=-1;
		}
	}

	displayEnergy(gravity){
		let potentialEnergy= this.mass * gravity.mag() * (height-this.position.y);
		fill(255);
		rectMode(CORNER);
		rect(0,height-potentialEnergy, 10, potentialEnergy);
		/*
		Put in a rectangle that is on top of the potential energy that 
		shows kinetic energy formula (1/2 * mass * velocity ^2) 
		this.velocity.magSq()...
		*/
		let kineticEnergy= 0.5* this.mass* this.velocity.magSq();
		fill(125)
		rect(0,height-kineticEnergy-potentialEnergy, 10, kineticEnergy);
		//Report energy
	}

	reportEnergy(){
		let potentialEnergy= this.mass * gravity.mag() * (height-this.position.y);
		let kineticEnergy= 0.5* this.mass* this.velocity.magSq();
		print("Height:");
		print(this.position.y);
		print("Potential Enegy");
		print(potentialEnergy);
		print("Kinetic Energy");
		print(kineticEnergy);
		print("Total Energy");
		print(kineticEnergy+potentialEnergy)
	}

}

