class Drops{
    constructor(x,y){
        var options = {
            'friction':0.1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,options);
        World.add(world,this.body);

       
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        pop();
        stroke("blue");
        strokeWeight(3);
        fill("blue");
        
        if(this.drops.position.y > height){
         Matter.body.setPosition(this.drop, {x:random(0,400), y:random(0,400)})   
        }
    }
}