let t;



function setup() {
createCanvas(600,400);
background(19,213,219);
}

function draw() {

    // noStroke();
    // fill(219,62,94,10);
    // ellipse(mouseX,mouseY,16,16);



 t = millis()/1000;
 translate(width/2,height/2);
 cardioid(t,66);
 cardioid(t,-66);

//companion(t);

// let a = n*137.5;
// let r = c*sqrt(n);

// let x = r*cos(a);
// let y = r*sin(a);

// fill(n%256,50,75);
// noStroke();
// ellipse(x,y,8,8);
// n += 1;


//translate(width/2,height/2);

// yoff = 0;
// for(let y=0;y<rows;y++){
//     xoff = 0;
//     for(let x=0;x<cols;x++){
//         let index = x + y*cols;
        
//         let angle = noise(xoff,yoff+10000,zoff+30000);
//         let v = p5.Vector.fromAngle(angle);
//         v.setMag(0.01);

//         flowfield[index] = v;

//         // push();
//         // translate(x*scl,y*scl);
//         // rotate(v.heading());
//         // stroke(250,150);
//         // strokeWeight(0.1);
//         // line(0,0,scl,0);
//         // pop();

//         xoff += 0.03;

//     }
// yoff += 0.02;
// }
// zoff += 0.01;


// for(let i=0;i<strokes.length;i++){

//     strokes[i].update();
//     strokes[i].follow(flowfield);
//     strokes[i].display();
//     strokes[i].edge();



//}






}


function cardioid(t,A){
let theta = t;
let r = A*(1-cos(theta));

let x = r*cos(theta);
let y = r*sin(theta);

let diameter = t;
if(diameter>=15){
    diameter = 15;
}

fill(theta*50,theta*10,theta*10,theta*10);
noStroke();
ellipse(x,y,diameter);

}

function companion(t){
    let theta = t;
    let r = 150*sin(t/2);
    
    let x = r*cos(theta);
    let y = r*sin(theta);
    
    
    fill(theta*50,theta*10,theta*10,theta*10);
    noStroke();
    ellipse(x,y,6);
    
    }

