// a Bob Ross sketch that draws with Bob Ross head and has audio of Bob Ross instructions
var photo;
var img; 

//to resize the image
var aspect;
var desiredImageSize = 400;

var  directions;
///////////////////////////

function preload() {
   photo = loadImage("Bob.jpg")
  img = loadImage ('background.jpg')
  
    soundFormats('mp3');
  directions = loadSound('BobTalk.mp3');
}
  

//do a backround//
function setup() {

aspect = img.width/img.height;
  
createCanvas(desiredImageSize * aspect, desiredImageSize); 
background (0)
  
  // rect shape variables in the size of the canvas
image(img, 0, 0, width, height);
noStroke();
 
   
  //play the sound
   directions.play();
 

  //create the save optiom
  createSaveButton();
  
  //create the clear option
  createClearButton();

  
}


function draw() {
  
// if a mouse is pressed the image shows up and you can paint inside the canvas lines

 
  //paint when mouse is pressed and not outide of canvas
  if (mouseIsPressed && mouseX >= 0 && mouseX <=width && mouseY >= 0 && mouseY <= height) 
    
    //draw the photo that follows the position of the mouse
    image (photo, mouseX, mouseY);  }
  
  function mousePressed() {
  photo.resize(25, 25);
  togglePlay();
    
  
  ///////////////
  
    //creating a save option and a clear option
    
    }
     // save option
function createSaveButton() {
   let button = createButton('Save!');
  button.mousePressed(saveImage);
}

//create clear 

function createClearButton() {
  let button = createButton('Clear!');
  button.mousePressed(clearCanvas);
}

//will happen when the 'Save' button is pressed
function saveImage() {
  save('BobRossMasterpiece.jpg'); 
      
  
  
  }
//Clear canvas but keep the backround as the original photo
    function clearCanvas() {
   image(img, 0, 0, width, height);
  
 
    
}


function togglePlay() {
  
  //check if audio is playing
  if (directions.isPlaying() == true) {
    
    //pause the audio
   directions.pause();
    
  }
  
  else {
    
    //resume playing audio
   directions.loop();
    
  }
}