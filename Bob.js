class Bob {
    constructor(x,y,r){
        var options= {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density: 1.2
         }
         this.x=x;
         this.y=y;
         this.r=r;

         this.body = Bodies.circle(this.x, this.y, this.r, options);
         
        World.add(world, this.body);

       
    }
    display(){

        var bobPos = this.body.position;

        push()
      
        fill("pink")
        rectMode(CENTER);
        circle(bobPos.x,bobPos.y,this.r)
        pop()
    }
}