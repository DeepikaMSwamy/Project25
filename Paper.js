class Paper{
    constructor(x,y,width,height){
       var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.0,
       }
       
       this.body=Bodies.rectangle(x,y,width,height,options)
       this.width=width
       this.height==height
       this.image=loadImage("paper.png");  
       World.add(world,this.body);
    }

    display(){
        var paperpos=this.body.position;

        imageMode(RADIUS);
        image(this.image,paperpos.x,paperpos.y,this.width,this.height);
              
    }
}