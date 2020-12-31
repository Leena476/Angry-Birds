class Log extends BaseClass{
  
  constructor (x,y,h,angle) {

    super(x,y,20,h,angle);

    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body,angle);
    
  }

  reset () {

    Matter.Body.setPosition(this.body,{x:this.x,y:this.y});
    Matter.Body.setVelocity(this.body,{x:0,y:0});
    Matter.Body.setAngle(this.body,PI/2);

  }

}