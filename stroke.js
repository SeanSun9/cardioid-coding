class Stroke{
     

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.location = createVector(this.x,this.y);
        this.velocity = createVector(3,7);
        this.acceleration = createVector(0,0);
        this.maxSpeed = 0.3;
    }

    update(){
        this.location.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    follow(vectors){
        let xx = floor(this.location.x/scl);
        let yy = floor(this.location.y/scl);
        let index = xx + yy*cols;
        this.acceleration.add(vectors[index]);
    }

    



    display(){
       
            fill(211,130,120);
            stroke(222);
            strokeWeight(0.2);
            ellipse(this.location.x,this.location.y,12);

        }

    

    edge(){
        if(this.location.x>width){ 
            this.location.x = 0;
            //this.updatePrev();
        }
        if(this.location.x<0){
            this.location.x = width;
            //this.updatePrev();
        }
        if(this.location.y>height){ 
            this.location.y = 0;
            //this.updatePrev();
        }
        if(this.location.y<0){ 
            this.location.y = height;
            //this.updatePrev();
        }
    }

}

    
