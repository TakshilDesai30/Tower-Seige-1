class Slingshot{
    constructor(bodyA,pointB) {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:10
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    display() {
        var posA = this.sling.bodyA.position;
        var posB = this.pointB;
        fill ("black");
        line(posA.x,posA.y,posB.x,posB.y);
    }
}