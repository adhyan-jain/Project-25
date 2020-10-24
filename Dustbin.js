class Dustbin {

    constructor(x,y,width,height){
  
      var options = {
        isStatic: true,
      }
  
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("dustbin.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(x,y,width,height){
  
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,x,y,width,height);
    }
  }