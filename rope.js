class Rope {
    constructor (body1, body2, c) {
        //this.offsetX=offsetX
        //this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:c ,y:0}
        }
        this.c = c
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
    }
    display(){
        var A = this.rope.bodyA.position;
        var B = this.rope.bodyB.position;
        strokeWeight(3);

        //var Stand1X = pointA.x;
        //var Stand1Y = pointA.y;
        //var Stand2X = pointB.x + this.offsetX;
        //var Stand2Y = pointB.y + this.offsetY;
        //line(Stand1X,Stand1Y,Stand2X,Stand2Y);
        line(A.x, A.y, B.x + this.c , B.y )
    }

}