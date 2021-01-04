class GROUND{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body=Bodies.rectangle(600,580,1200,40,options)
        World.add(myworld,this.body)
    }

    display(){
        var pos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,1200,40)
    }
}