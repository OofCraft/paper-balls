class Paper{

    constructor(x,y,width,height){
        var options={
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(100,640,20,options)
        this.width=width;
        this.height=height;
        World.add(world, this.body)
    }

    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y, 20)


    }
}