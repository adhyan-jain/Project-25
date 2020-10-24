class Paper {

 constructor(x,y,r){ 
       
  var options = {
   isStatic: false,
   restitution: 0.5,
   friction: 1.5,
   density: 1.2
  }

   this.x = x;
   this.y = y;
   this.r = r;
   this.body = Matter.Bodies.circle(x,y,15,options);
   World.add(world,this.body);
   this.image = loadImage("paper.png");
  }

  display(){
 
  var paperpos = this.body.position;
  var angle = this.body.angle;
  
  push()
  translate(paperpos.x,paperpos.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image,0,0,this.r,this.r);
  pop();
 }
}