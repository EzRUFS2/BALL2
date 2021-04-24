class DustBin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }
        

        this.image=loadImage("dustbingreen.png")
        this.bodyb = Bodies.rectangle(x,y, width, height,options );
	    World.add(world, this.bodyb);
	    this.bodyl= Bodies.rectangle((x-(width/2)), (y-(height*2)), height, width/2 ,options);
	    World.add(world, this.bodyl);
	    this.bodyr = Bodies.rectangle((x+(width/2)), (y-(height*2)), height, width/2 ,options);
        World.add(world, this.bodyr);
        this.bodyb.width = width
        this.bodyb.height = height 
        
   }
   display(){
       fill("purple");
       rect(this.bodyb.position.x, this.bodyb.position.y,this.bodyb.width, this.bodyb.height)
       rect((this.bodyb.position.x-(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)
       rect((this.bodyb.position.x+(this.bodyb.width/2)), (this.bodyb.position.y-(this.bodyb.height*(2*(this.bodyb.width/100)))), this.bodyb.height, this.bodyb.width/2)

      push()
      translate(posLeft.x, posLeft.y);
      rectMode(CENTER)
      angleMode(RADIUS)
      fill(255)
      rotate(this.angle)
      pop()
 



       push()
       translate(posRight.x, PosRight.y);
       rectMode(CENTER)
       //strokeWeight(4);
       angleMode(RADIUS)
       fill(255)
       rotate(-1*this.angle)
       pop()

       push()
       translate(posBottom.x,posBottom.y+10);
       rectMode(CENTER)
       //strokeWeight(4);
       angleMode(RADIUS)
       fill(255)
       imageMode(CENTER);
       image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)












   }
}