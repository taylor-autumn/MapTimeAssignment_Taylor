monthCount=0
signs=["capricorn","aquarius","pisces","aries","taurus","gemini","cancer","leo","virgo","libra","scorpio","sagittarius"];
signList=signs[monthCount];
let movingValue=-100
let stopMovement=false;
let signHeightPos=160
let currentSignImage;
let signImages={};
let dateOptions={};
let signOptions={};
let planetMovements={};
let startingMilliTime=0;

function preload(){
  signImages["capricorn"]=loadImage("Images/capricorn.png");
  signImages["aquarius"]=loadImage("Images/aquarius.PNG");
  signImages["pisces"]=loadImage("Images/pisces.PNG");
  signImages["aries"]=loadImage("Images/aries.png");
  signImages["taurus"]=loadImage("Images/taurus.png");
  signImages["gemini"]=loadImage("Images/gemini.PNG");
  signImages["cancer"]=loadImage("Images/cancer.png");
  signImages["leo"]=loadImage("Images/leo.png");
  signImages["virgo"]=loadImage("Images/virgo.PNG");
  signImages["libra"]=loadImage("Images/libra.png");
  signImages["scorpio"]=loadImage("Images/scorpio.png");
  signImages["sagittarius"]=loadImage("Images/sagittarius.png");
  spaceBG=loadImage("Images/space.jpg");
  
  //controlling which planet rotation is showing up when the sign changes
  planetMovements["capricorn"]=loadImage("Planets/Planet1.PNG");
  planetMovements["aquarius"]=loadImage("Planets/Planet2.PNG");
  planetMovements["pisces"]=loadImage("Planets/Planet3.PNG");
  planetMovements["aries"]=loadImage("Planets/Planet4.PNG");
  planetMovements["taurus"]=loadImage("Planets/Planet5.PNG");
  planetMovements["gemini"]=loadImage("Planets/Planet1.PNG");
  planetMovements["cancer"]=loadImage("Planets/Planet2.PNG");
  planetMovements["leo"]=loadImage("Planets/Planet3.PNG");
  planetMovements["virgo"]=loadImage("Planets/Planet4.PNG");
  planetMovements["libra"]=loadImage("Planets/Planet5.PNG");
  planetMovements["scorpio"]=loadImage("Planets/Planet1.PNG");
  planetMovements["sagittarius"]=loadImage("Planets/Planet2.PNG");
  
}

//cycle through the dates text
dateOptions["capricorn"]="December 22-January 19";
dateOptions["aquarius"]="January 20-February 18";
dateOptions["pisces"]="February 19-March 20";
dateOptions["aries"]="March 21-April 19";
dateOptions["taurus"]="April 20-May 20";
dateOptions["gemini"]="May 21-June 21";
dateOptions["cancer"]="June 22-July 22";
dateOptions["leo"]="July 23-August 22";
dateOptions["virgo"]="August 23-September 22";
dateOptions["libra"]="September 23-October 23";
dateOptions["scorpio"]="October 24-November 21";
dateOptions["sagittarius"]="November 22-December 21";
  
//cycle through the signs text
signOptions["capricorn"]="Capricorn";
signOptions["aquarius"]="Aquarius";
signOptions["pisces"]="Pisces";
signOptions["aries"]="Aries";
signOptions["taurus"]="Taurus";
signOptions["gemini"]="Gemini";
signOptions["cancer"]="Cancer";
signOptions["leo"]="Leo";
signOptions["virgo"]="Virgo";
signOptions["libra"]="Libra";
signOptions["scorpio"]="Scorpio";
signOptions["sagittarius"]="Sagittarius";
  

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  startingMilliTime=int(millis());

}

function draw() {
  background(0);
  image(spaceBG,200,200,400,400);


  //this should calculate how much time has passed since the millis started calculating so that when I spawn a new sign it starts the millis over maybe?
  let loopMilli=int(millis())-startingMilliTime;
  
//stuff from class
  //let mpath = map(ms*.01,0,60,-20,430);
  //let mpath = map(ms,0,60,0,width);
  travelingSign=image(signImages[signs[monthCount]],movingValue,signHeightPos,150,150);


  if (stopMovement==false){
    print(signs[monthCount]);
    movingValue=loopMilli*0.1;
    if (movingValue>=480){
      // movingValue=600; resets it off screen since I can't kill it
      // signHeight=50
      stopMovement=true;
      
      //update my sign
      monthCount++;
      if (monthCount>=signs.length){
        monthCount=0;
      }
      
      //reset starting point for next sign
      movingValue=-50;
      startingMilliTime=int(millis());
      stopMovement=false;
      
    }
  }
    
  push();
  fill(255);
  textSize(20);
  text("Current Date Gap:",4,24);
  text("Current Zodiac Sign:" , 4,54);
  textSize(19);
  fill("#6495ED");
  text(dateOptions[signs[monthCount]],171,25);
  textSize(20);
  text(signOptions[signs[monthCount]],192,55);
  pop();
  
  push();
  image(planetMovements[signs[monthCount]],200,450,480,500);
  pop();
  
  push();
  fill(255);
  circle(mouseX,mouseY,10);
  text("(" + mouseX + "," + mouseY + ")",mouseX+10,mouseY-10);
  pop();
  
}

