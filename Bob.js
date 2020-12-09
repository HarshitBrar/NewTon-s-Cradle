class Bob{
    constructor(x,y){
        var options = {
            isStatic : false,
            restitution : 1,
            friction : 0.5,
            density : 0.7
        }
        this.body = Bodies.circle(x,y,20,options);
        

        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("red");
        ellipse(pos.x,pos.y,20,20);
    }
}