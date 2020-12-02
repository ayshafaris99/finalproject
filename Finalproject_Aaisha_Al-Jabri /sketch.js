let brushone;
let brushtwo; 
let brushthree;
let c;
let text1; 
let text2;
let text3;
let text4;
let text5;
let text6;
let text7;
let text8;
let pointcounter;
let fairyidle;


function preload(){
	fairyidle= loadAnimation('fairyidle_0.png','fairyidle_1.png','fairyidle_2.png','fairyidle_3.png','fairyidle_4.png','fairyidle_5.png','fairyidle_6.png','fairyidle_7.png');
	fairyidle.looping = false;
}
function setup(){
	colorPicker = createColorPicker('#ed225d');
  colorPicker.position(width+230, height + 400);
	text1= 0;
	text2= 0;
	text3= 0;
	text4= 0;
	text5= 0;
	text6= 0;
	text7= 0;
	text8= 0;
	text9= 0;
	pointcounter= 0;
	background(255);
	brushone = false;
	brushtwo = false;
	brushthree = false; 
	createCanvas(800, 800);
  
}

function draw() {
	c= colorPicker.color();
	fill(224,52,109);
	rect(10,10,50,50); //first brush
	fill(247,45,214);
	rect(10,90,50,50);// second brush
	fill(224,52,217);
	rect(10,170,50,50);//third brush
	fill(135,43,182);
	rect(10,250,50,50);//fourth brush
	fill(194,47,130);
	rect(10,330,50,50);//save canvas
	fill(135,47,130);
	rect(10,410,50,50);//reset canvas
	fill(148,44,76);
	rect(10,670,80,20);//next task button 
	fill(0);
	text('points '+ '= '+ pointcounter,10,650);
	fill(text1);
  text('petals brush', 10, 80);
	fill(text2);
	text('pixels brush', 10,160);
	fill(text3);
	text('blend brush', 10,240);	
	fill(text4);
	text('watercolor brush',10,320);	
	fill(text5);
	text('save canvas', 10,400);
	fill(text6);
	text('reset canvas', 10,480);
	fill(text7);
	text('next task', 20,680);
	fill(text8);
	text('volume up', 600,100);
	fill(text9);
	text('volume down', 700,100);
	if((10<mouseX)&&(60>mouseX)&&(10<mouseY)&&(60>mouseY)){
	  text1 = 0;
  }else{
    text1 = 255;
  }	
	if((10<mouseX)&&(60>mouseX)&&(90<mouseY)&&(140>mouseY)){
	  text2 = 0;
  }else{
    text2 = 255;
  }	
	if((10<mouseX)&&(60>mouseX)&&(170<mouseY)&&(230>mouseY)){
	  text3 = 0;
  }else{
    text3 = 255;
  }	
	if((10<mouseX)&&(60>mouseX)&&(250<mouseY)&&(300>mouseY)){
	  text4 = 0;
  }else{
    text4 = 255;
  }	
		if((10<mouseX)&&(60>mouseX)&&(330<mouseY)&&(380>mouseY)){
	  text5 = 0;
  }else{
    text5 = 255;
  }
		if((10<mouseX)&&(60>mouseX)&&(410<mouseY)&&(460>mouseY)){
	  text6 = 0;
  }else{
    text6 = 255;
  }
		if((10<mouseX)&&(60>mouseX)&&(670<mouseY)&&(730>mouseY)){
	  text7 = 0;
  }else{
    text7 = 255;
  }
animation(fairyidle, 600,700);
}

function mousePressed(){
if((10<mouseX)&&(60>mouseX)&&(10<mouseY)&&(60>mouseY)){
	brushone= true;
	}
if((10<mouseX)&&(60>mouseX)&&(90<mouseY)&&(140>mouseY)){
	brushone=false;
	brushthree= false;
	brushtwo= true;
	}
if((10<mouseX)&&(60>mouseX)&&(170<mouseY)&&(230>mouseY)){
	brushthree= true;
}
	if((10<mouseX)&&(60>mouseX)&&(250<mouseY)&&(300>mouseY)){
	brushthree= true;
	}
	if((10<mouseX)&&(60>mouseX)&&(330<mouseY)&&(380>mouseY)){
	brushfour= true;
	}
	if((10<mouseX)&&(60>mouseX)&&(410<mouseY)&&(460>mouseY)){
	clear();
	}
	if((10<mouseX)&&(60>mouseX)&&(670<mouseY)&&(730>mouseY)){
	clear();
	pointcounter+=20;
	}
}
	
function mouseDragged(){
	if(brushone){
	patternone(c,30, 3,10);
	}
	else if(brushtwo){
	patternone(c,30, 3,10);	
	}
	else if(brushthree){
	patternone(c,30, 3,10);	
	}
	else if(brushfour){
	patternone(c,30, 3,10);	
	}
}

function patternone(shade, changex, scalex, scaley){//setting paarmeters 
//for the color of and the size of ellipses
  push(); 
  translate(mouseX, mouseY);//moving the pattern to where the mouse is 
  for (j = 0; j< changex; j++){ //this code will be run until j is bigger than fifty
  rotate(10);//chnaging angle of the pattern
  for (y = 10; y <= 100; y+=30) {//draws the pattern
        for (x= 50; x <= y; x +=5) {
            rotate(45);//rotates the pattern
            noStroke();
            fill(shade); // the color parameter will be applied here
            ellipse(x+5, y+5,scalex,scaley);// the scale parameters are run here, as well 
            //as adding x and y to make sure that the ellipses are not drawn over 
            //one another
          }}
  }
  pop();
}