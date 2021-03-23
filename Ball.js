class Ball{
  constructor(x, y,width,height) {
    var options = {
        'restitution':0.4,
        'friction':0.3,
        'density':0.4,
        
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("candy.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    
    //var angle = this.body.angle; 
    //push();
    //translate(pos.x, pos.y);
    //rotate(angle);
    imageMode(CENTER);

    
    image(this.image,pos.x, pos.y);
    //pop();
  }
};