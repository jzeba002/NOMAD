//creating global variables to track player interaction
var learnt = 0;
var clicks = 0;

//creating global variables for the intro breathing exercise
var font;
var intFade = 0;
var intFadeAmount = 1;

//creating variable to hold background music, the button and Nomie's x&y values
var sugarcookie;
var button;
var nomieX = 0
var nomieY = 100

//variable to hold random number;
var randomNo;


function preload(){
    //preloading any extra resources needed
    font = loadFont('ARLRDBD.ttf');
    
}

function setup() {
    //creating the canvas and loading audio
    createCanvas(1280, 720);
    
    //setting the background music 
    sugarcookie = createAudio('sugarcookie.wav');
    sugarcookie.position(20, 30);
    sugarcookie.size(300);
    sugarcookie.showControls();
    
    
}

function draw() {
    //setting the background colour
    background(85, 128, 121); 
    translate(width/2, height/2);
    
    //checking for which stage Nomad should operate in
    if(mouseIsPressed) {
        clicks = clicks + 1;
    }
    
    //determining when to stop running the intro screen and move into Nomad
    if(clicks == 0){
        intro();
    }else if (clicks > 0){
        buttonUtil()
        nomadInt()
    }
    
    //determining which life stage Nomie should be in
    if (clicks > 0){
        if (learnt < 5){
        nomieSeed();
        }else if (learnt > 4 && learnt < 10){
            nomieSapling();
        }else if (learnt > 9){
            nomieFruit();
        }
    }
    
    phraseTitleDesign(); 
    phraseDescDesign();
    
}

//creating the function for the intro screen
function intro() {
    
       //creating the intro logo
       textFont(font);

       fill(255, 253, 208, intFade);
       textSize(100);
       text("NOMAD",-185, 0);

       textSize(32);
       fill(169, 169, 169);
       text("click to enter",-90, 80);

       //creating the breathing exercise effect for the intro  
       if (intFade < 0) {
           intFadeAmount = 1;
       } else if (intFade > 255) {
           intFadeAmount = -1;
       }
       intFade += intFadeAmount;
}

//creating the function for designing and utilising the button 
function buttonUtil() {
    //creating and setting the button to pick the language!     
    button = createButton("learn an untranslatable!");
    button.size(150);
    button.position(width/2 - 75, 600);
    
    //utilising button functionality
    button.mousePressed(randomisePhrase);
}

//creating the functions that draw the different life states of Nomie
function nomieSeed() {
    noStroke();
    
    //nomies body
    fill(51, 17, 0);
    ellipse(nomieX, nomieY, 80, 100);
    
    //nomies eyes
    fill(255, 255, 232)
    ellipse(nomieX - 12.5, nomieY - 10, 15, 25)
    ellipse(nomieX + 12.5, nomieY - 10, 15, 25)
    
    //nomies iris
    fill(25);
    ellipse(nomieX - 12.5, nomieY - 10, 5, 5)
    ellipse(nomieX + 12.5, nomieY - 10, 5, 5)
    
    //nomies nose
    fill(230, 217, 207);
    ellipse(nomieX, nomieY, 5, 5)
    
    //thought bubble
    fill(255)
    ellipse(nomieX + 50, nomieY - 50, 20, 20)
    ellipse(nomieX + 80, nomieY - 80, 30, 30)
    ellipse(nomieX + 170, nomieY - 140, 210, 130)
    
    fill(41, 75, 59);
    textSize(16);
    text("Hi! I'm Nomie,", nomieX + 110, nomieY - 160);
    text("I'm your seed friend!", nomieX + 90, nomieY - 140);
    text("Help me grow!", nomieX + 110, nomieY - 120);
    
    
    
}

function nomieSapling(){
    noStroke();
    
    fill(90, 114, 71);
    ellipse(nomieX, nomieY, 120, 140);
    
    fill(255, 255, 232)
    ellipse(nomieX - 30, nomieY - 10, 30, 40)
    ellipse(nomieX + 30, nomieY - 10, 30, 40)
    
    fill(25);
    ellipse(nomieX - 30, nomieY - 10, 10, 10)
    ellipse(nomieX + 30, nomieY - 10, 10, 10)
    
    
    fill(230, 217, 207);
    ellipse(nomieX, nomieY, 10, 10)
    
}

function nomieFruit(){
    noStroke();
    
    fill(90, 49, 93);
    ellipse(nomieX, nomieY, 250, 260);
    
    fill(255, 255, 232)
    ellipse(nomieX - 50, nomieY - 30, 50, 60)
    ellipse(nomieX + 50, nomieY - 30, 50, 60)
    
    fill(25)
    ellipse(nomieX - 50, nomieY - 30, 15, 15)
    ellipse(nomieX + 50, nomieY - 30, 15, 15)
    
    //nomies nose
    fill(230, 217, 207);
    ellipse(nomieX, nomieY, 20, 20)
    
    //nomie freckles
    fill(51, 17, 0);
        //left
    ellipse(nomieX - 60, nomieY + 20, 5, 5)
    ellipse(nomieX - 40, nomieY + 30, 5, 5)
    ellipse(nomieX - 60, nomieY + 40, 5, 5)
    
        //right
    ellipse(nomieX + 60, nomieY + 20, 5, 5)
    ellipse(nomieX + 40, nomieY + 30, 5, 5)
    ellipse(nomieX + 60, nomieY + 40, 5, 5)
    
    //thought bubble
    fill(255)
    ellipse(nomieX + 100, nomieY - 110, 30, 30)
    ellipse(nomieX + 220, nomieY - 140, 210, 130)
    
    fill(41, 75, 59);
    textSize(16);
    text("I'm fully grown!", nomieX + 160, nomieY - 160);
    text("Thank you for you help!", nomieX + 130, nomieY - 140);
    text("Come back anytime!", nomieX + 140, nomieY - 120);
    
}

//creating the function that randomises a language 
function randomisePhrase() {
    randomNo = int(random(0, 14)); 
    console.log(randomNo)
    learnt = learnt + 1;
    
}

//creating the functions that displays the randomised languages' word
function phraseTitleDesign() {
    
    //setting font and title coordinates
    textFont(font);
    let titleX = -620
    let titleY = -160
    
    //setting title look
    fill(255, 253, 208);
    textSize(80);
    

    if(randomNo == 0){
        text("• Samar:",titleX, titleY);
    }else if(randomNo == 1){
        text("• Hyppytyynytyydytys:",titleX, titleY);
    }else if(randomNo == 2){
        text("• Yaourt:",titleX, titleY);
    }else if(randomNo == 3){
        text("• Fernweh:",titleX, titleY);
    }else if(randomNo == 4){
        text("• Psithurism:",titleX, titleY);
    }else if(randomNo == 5){
        text("• Firgun:",titleX, titleY);
    }else if(randomNo == 6){
        text("• Elmosolyodni:",titleX, titleY);
    }else if(randomNo == 7){
        text("• Abbiocco:",titleX, titleY);
    }else if(randomNo == 8){
        text("• Komorebi:",titleX, titleY);
    }else if(randomNo == 9){
        text("• Nepakartojama:",titleX, titleY);
    }else if(randomNo == 10){
        text("• Yr:",titleX, titleY);
    }else if(randomNo == 11){
        text("• Gökotta:",titleX, titleY);
    }else if(randomNo == 12){
        text("• Gigil:",titleX, titleY);
    }else if(randomNo == 13){
        text("• Goya:",titleX, titleY);
    }else if(randomNo == 14){
        text("• Cafuné:",titleX, titleY);
    }
}

function phraseDescDesign(){
    
    //setting the font and the coordinates of the descriptions
    textFont(font);
    let descX = -560
    let descY = -120
    
    //phrase
    textSize(20);
    fill(215, 185, 154);
    
    if(randomNo == 0){
        text("Arabic: The act of staying up once the sun has gone to sleep and enjoying time with friends.", descX, descY)
    }else if(randomNo == 1){
        text("Finnish: The fun one experiences when sitting on a bouncy cushion.", descX, descY)
    }else if(randomNo == 2){
        text("French: Singing along to a song with nonsensical noises.", descX, descY)
    }else if(randomNo == 3){
        text("German: Homesickness for a place you've never visited.", descX, descY)
    }else if(randomNo == 4){
        text("Greek: The sound of leaves rustling in the wind.", descX, descY)
    }else if(randomNo == 5){
        text("Hebrew: Absolute sincere happiness for another person, free of ulterior motive.", descX, descY)
    }else if(randomNo == 6){
        text("Hungarian: The act of smiling, even when nothing is particularly funny.", descX, descY)
    }else if(randomNo == 7){
        text("Italian: The drowsy state one may experience after eating a lot of food.", descX, descY)
    }else if(randomNo == 8){
        text("Japanese: Sunlight breaking through the leaves of a tree.", descX, descY)
    }else if(randomNo == 9){
        text("Lithuanian: A situation so perfect, it could never happen again.", descX, descY)
    }else if(randomNo == 10){
        text("Norwegian: A rain so fine it resembles mist.", descX, descY)
    }else if(randomNo == 11){
        text("Swedish: The act of getting up early to hear the birds sing.", descX, descY)
    }else if(randomNo == 12){
        text("Tagalog: The overwhelm one feels at seeing something unbearably cute.", descX, descY)
    }else if(randomNo == 13){
        text("Urdu: The immersion one feels at a fantasy that feels so realistic, it momentarily becomes real.", descX, descY)
    }else if(randomNo == 14){
        text("Brazilian: The act of lovingly running your fingers through someones hair.", descX, descY)
    }
}

//creating extra interface details
function nomadInt(){
    
    //creating the logo
    textFont(font);

    fill(41, 75, 59, intFade);
    textSize(60);
    text("NOMAD",370, -290);
    
    //recreating the breathing exercise effect for the logo  
       if (intFade < 0) {
           intFadeAmount = 1;
       } else if (intFade > 255) {
           intFadeAmount = -1;
       }
       intFade += intFadeAmount;
}