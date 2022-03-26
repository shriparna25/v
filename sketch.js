var playbutton;
var clickhere_img;
var gameState = 0;
var startscreen;
var finalmsg;
var surprise;
var surprise_img;


function preload(){

startscreen = loadImage("bdaybg.jpg");
clickhere_img = loadImage("clickhere.png");
finalmsg = loadImage("finalmsg.png");
surprise_img = loadImage("surprise.jpg");



}



function setup(){
createCanvas(windowWidth-50, windowHeight-50 )

playbutton = createSprite(100, 100);

playbutton.visible = false;
playbutton = createSprite(100,100);
playbutton.scale = 0.1;

}

function draw(){

    if(gameState == 1){
    
        surprise = createSprite(100, 100);
        surprise.addImage(surprise_img);
        surprise.scale = 0.9;

        playbutton.addImage(clickhere_img);
        playbutton.visible = false;
        background(finalmsg);
        
        //text msg

        }


    if(gameState == 0){
        background("startscreen");
        createCanvas(windowWidth-50, windowHeight-50 )
    
    playbutton = createSprite(100, 100);
    playbutton.addImage(clickhere_img);
    playbutton.visible = true;
    playbutton.scale = 0.7;
    
    }


    if(mousePressedOver(playbutton)){
        playbutton.visible = false;
        gameState= 1;
       
        
    }
    
    
    drawSprites();
}




    