class Blocks{
    constructor(x,y) {
        var options={
           'restitution':0.4,
           'density':0.8,
           'friction':0.8
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=40;
        this.height=60;
        World.add(world,this.body);
    }
    display() {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}