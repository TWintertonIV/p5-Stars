let stars = [];
let centeredStars = [];
let strangeStars = [];

let numStars = 1975;
let numCenteredStars = 1500;
let numStrangeStars = 25;

let offset = [0,0];
let xStrength = 1;
let yStrength = 1;

let glowStrength = 0;


function initVariables(){
    //Generate offset for the background + more clustered stars.
    //x
    offset[0] = random(-350, 350);
    //y
    offset[1] = random(-250, 250);
    
    //Strength of background glow effect
    glowStrength = random(175,225);
    //How much the stretch of background effect + clustered stars is in X
    xStrength = random(1.78, 1.93);
    //How much the stretch of background effect + clustered stars is in Y
    yStrength = random(1.7, 1.85);
    
    
    //Generate the normal stars (non centered, non strange). Push to the star array
    for(let i = 0; i < numStars; i++){  
    stars.push(new star(false, false));
    }
    
    //Generate the centered stars (centered, non strange). Push to centered star array
    for(let i = 0; i < numCenteredStars; i++){
        centeredStars.push(new star(true, false));
    }
      //Generate the strange stars (non centered, strange). Push to strange star array.
    for(let i = 0; i < numStrangeStars; i++){
        strangeStars.push(new star(false, true));
    }    
}

function drawBackground(){
    for(var x = 0; x < width; x+=5){
      for(var y = 0; y < height; y += 5){
        var c = glowStrength * noise( 0.005 * x, 0.005 * y);
  
              fill(20 + random(0,20), 20, 80, c * scaledOutput(x,y));
        noStroke();
              rect(x, y, 5, 5);
      }
    }
  }

class star{
    constructor(centered, strange){
      if(strange){
  
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight);
  
        this.size = pow(random(0, 3.25), 1.5);
        this.starColor = color(random(200,225), random(200,225), random(200,225), random(0,500));
        this.XorY = (random(0,1) < .5);
        this.ecc = this.size * random(0, .2);  
  
  
      }
      
      else if(!centered){
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight);
  
        this.size = pow(random(0, 2), 1.5);
        this.starColor = color(random(210,225), random(210,225), random(210,225),random(0, 500));
        this.XorY = (random(0,1) < .5);
        this.ecc = this.size * random(0, .1);
  
      }
      else if(centered){
        this.x = ((windowWidth/2) + offset[0] + random(-(28 ** xStrength), (28 ** xStrength)));
        this.y = (windowHeight/2 + offset[1] + random(-(28 ** yStrength), (28 ** yStrength)));
  
        this.size = pow(random(0, 2), 1.5);
        this.starColor = color(random(210,225), random(210,225), random(210,225), 225 * (scaledOutput(this.x,this.y) * noise( 0.005 * this.x, 0.005 * this.y))**4);
        this.XorY = (random(0,1) < .5);
        this.ecc = this.size * random(0, .1);
  
      }
    }
  
  
    drawStar(){
      fill(this.starColor);
      noStroke();
      if(this.XorY == true){
        ellipse(this.x,this.y, this.size + this.ecc, this.size);
      }
      else{
        ellipse(this.x,this.y, this.size, this.size + this.ecc);
      }
    
    }
  }
  

//Return 1 near center of the offset, and slowly scale down to 0.
function scaledOutput(x, y){
    let value = -(((x - (width/2) - offset[0])**2)/width**xStrength + ((y-(height/2) - offset[1])**2)/height**yStrength) + 1;
    return value; 
}