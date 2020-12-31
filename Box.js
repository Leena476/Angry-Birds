class Box extends BaseClass {
  
  constructor (x,y,w,h) {
    
    super(x,y,w,h);

    this.image = loadImage("sprites/wood1.png");

  }

  reset () {

    Matter.Body.setPosition(this.body,{x:this.x,y:this.y});
    Matter.Body.setVelocity(this.body,{x:0,y:0});
    Matter.Body.setAngle(this.body,0);

  }

}