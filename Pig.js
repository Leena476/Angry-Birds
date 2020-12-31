class Pig extends BaseClass {
    
  constructor (x,y) {
        
        super(x,y,50,50);

        this.image = loadImage("sprites/enemy.png");
        this.visibility = 255;
        
    }

    display(){
   
        if(this.body.speed < 6){
          super.display();
        } else {
          
          var position = this.body.position;
          World.remove(world,this.body);
          
          push();
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          image(this.image,position.x,position.y,50,50);
          pop();

        }
   
    }

    score () {

          if(this.visibility < 0 && this.visibility > -300)
              score++

    }

    reset () {

      World.add(world,this.body);

      Matter.Body.setPosition(this.body,{x:this.x,y:this.y});
      Matter.Body.setVelocity(this.body,{x:0,y:0});
      Matter.Body.setAngle(this.body,0);

      this.visibility = 255;

    }

}