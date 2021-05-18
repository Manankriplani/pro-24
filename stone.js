class stone{
	constructor(x,y,w,h){
	
		var options = {
			'density':9,
			'friction': 1.0,
			'restitution':0.5
		  };

	
		this.x=x;
		this.y=y;
		this.w=w
        this.h=h
		this.body=Bodies.rectangle(this.x, this.y, w,h, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			strokeWeight(4);
			stroke("black");
			fill(" orange");
			
			rectMode(CENTER)
			rect(0,0,this.w,this.h)
			pop()
	}

}