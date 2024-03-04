let totalStars = [];




function setup() {
   
  //Canvas Setup
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  background(0);
  totalStars.push(stars);
  totalStars.push(centeredStars);
  totalStars.push(strangeStars);
  console.log(totalStars); 
  initVariables();
  drawBackground();  
  //Draw the background. Loops through x,y values and generates noise at those values. Draws small squares that
  //change in opacity based on noise * proximity to the center of the cluster.
  
}

function draw() {
  
  for(i = 0; i < numStars; i++){
    stars[i].drawStar();
  }
  for(i = 0; i < numCenteredStars; i++){
    centeredStars[i].drawStar();
  }
  for(i = 0; i < numStrangeStars; i++){
    strangeStars[i].drawStar();
  }

}


function canvasUpdate(){
  resizeCanvas(windowWidth, windowHeight);
  background(23,27,35);
}





