class Dustbin {
    constructor(x,y,width,height,) {
        var options = {
            isStatic: true,
            restitution:0.3,
            friction : 0.5,
            density  : 2.6
        }
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    this.image = loadImage("dustbingreen.png")
    World.add(world,this.body)
    }
display() {
    push()
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    strokeWeight(3)
    image(this.image, this.x, this.y, this.height, this.height);
    pop()
    }
}