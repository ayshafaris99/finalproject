//figure out save canvas
//import brush images
//resources: https://ellennickles.com/itpblog/2018/2/15/week-3-pixel-pavaring-app
let brushone;
let brushtwo;
let brushthree;
let brushfour;
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
let brush1img;
let brush2img;
let brush3img;
let brush4img;
let displayimg;
let resetimg;
let volumeupimg;
let volumedownimg;
let count;
let savedfiles;
let canvas;
let speed;
let totalShapeCount;
let brushnum;
let Shapebrushone;
let Shapebrushtwo;
let Shapebrushthree;
let speed2;
let brushtwosize;
let brushtwovalue;
var lastX, lastY;
let speed3;
let speed4;
let colorbrush;
let colorbrush2;
let pixelbrushimg;
let imagebrushcheck;
let pixelbrushcheck;
let moveX;
let moveY;
let index;
let pointillize = 16;
let skyimgone;
let skyimgtwo;
let skyimgthree;
let imageoption;
let imagecolor;
let image2color;
let image3color;
let skyoption;
let brushsound1;
let brushsound2;
let brushsound3;
let brushsound4;
let changex;
let pixelbrushsize;
let imgfill;
let souncheck;
let brushsoundcheck;

//let imgs = [];
//let savedimg;

function preload() {
//for (i = 0; i < imgs.length; i ++ ) {
    //imgs[i] = loadImage('/Users/student/downloads/mycanvas'+ count +'.png');
 // }
	flowerimg = loadImage('flower.png');
	sunimg = loadImage('sun.png');
	moonfaceimg = loadImage('moonface.png');
	brush1img = loadImage('brush1.png');
	brush2img = loadImage('brush2.png');
	brush3img = loadImage('paintbrushes.png');
	brush4img = loadImage('palette.png');
	displayimg = loadImage('display.png');
	soundimg = loadImage('volumeup.png');
	nosoundimg = loadImage('nosound.png');
	resetimg = loadImage('reset.png');
	fairyidle = loadAnimation('fairyidle_0.png', 'fairyidle_1.png', 'fairyidle_2.png', 'fairyidle_3.png', 'fairyidle_4.png', 'fairyidle_5.png', 'fairyidle_6.png', 'fairyidle_7.png');
	//fairyidle.looping = false;
	fairyflying = loadAnimation('fairyfly_0.png', 'fairyfly_1.png', 'fairyfly_2.png', 'fairyfly_3.png', 'fairyfly_4.png', 'fairyfly_5.png', 'fairyfly_6.png', 'fairyfly_7.png');
	skyimgone = loadImage("pastelsky.jpg");
	skyimgtwo = loadImage("sunset.jpg");
	skyimgthree = loadImage("beachskyimg.jpg");
	brushsound1 = loadSound("brushone.mp3");  
	brushsound2 = loadSound("brushone.mp3"); 
  brushsound3 = loadSound("brushone.mp3"); 
  brushsound4= loadSound("brushone.mp3"); 
}

function setup() {
	skyimgone.resize(800,800);
	skyimgtwo.resize(800,800);
	skyimgthree.resize(800,800);
	skyoption=0;
	pixelbrushsize=5;
	souncheck = true;
  brushsoundcheck= false;
	imagebrushcheck = false;
	pixelbrushcheck = false;
	Shapebrushone = false;
	Shapebrushtwo = false;
	Shapebrushthree = false;
	brushnum = 0;
	totalShapeCount = 50;
	colorPicker = createColorPicker('#ed225d');
	colorPicker.position(width + 230, height + 400);
	text1 = 0;
	text2 = 0;
	text3 = 0;
	text4 = 0;
	text5 = 0;
	text6 = 0;
	text7 = 0;
	text8 = 0;
	text9 = 0;
	count = 0;
	pointcounter = 0;
	background(255);
	brushone = false;
	brushtwo = false;
	brushthree = false;
	savedimg = createCanvas(800, 800);
	fairy1sprite = createSprite(0, 0);
	//fairy1sprite.scale=100;
	fairy1sprite.addAnimation('standing', 'fairyidle_0.png', 'fairyidle_1.png', 'fairyidle_2.png', 'fairyidle_3.png', 'fairyidle_4.png', 'fairyidle_5.png', 'fairyidle_6.png', 'fairyidle_7.png');
	brushtwosize = 100;
	//background(colorPicker.color());
	//savedimg = createCanvas(500,500);
}

function draw() {
	push();
	translate(380, 650);
	scale(0.3);
	var frame = round(map(mouseX, 0, width, 0, fairy1sprite.animation.getLastFrame()));
	//note: frames must be integer numbers so I have to round the result of map
	fairy1sprite.animation.changeFrame(frame);
	//fairy1sprite.animation.update();
	drawSprites();
	pop();
	c = colorPicker.color();
	fill(224, 52, 109);
	rect(10, 10, 50, 50); //first brush
	image(brush1img, 10, 10, 50, 50); //brush icon
	fill(247, 45, 214);
	rect(10, 90, 50, 50); // second brush
	image(brush2img, 10, 90, 50, 50); //brush icon
	fill(224, 52, 217);
	rect(10, 170, 50, 50); //third brush
	image(brush3img, 10, 170, 50, 50);
	fill(135, 43, 182);
	rect(10, 250, 50, 50); //fourth brush
	image(brush4img, 10, 250, 50, 50);
	fill(194, 47, 130);
	rect(10, 330, 50, 50); //save canvas
	image(displayimg, 10, 330, 50, 50);
	fill(135, 47, 130);
	rect(10, 410, 50, 50); //reset canvas
	image(resetimg, 10, 410, 50, 50)
	fill(148, 44, 76);
	rect(10, 670, 80, 20); //next task button 
	fill(255);
	rect(680,10, 50, 50);
	image(soundimg,680,10,50,50);
	rect(680,120, 50, 50);
	image(nosoundimg,680,120,50,50);
	fill(0);
	text('points ' + '= ' + pointcounter, 10, 650);
	fill(text1);
	text('shape brush', 10, 80);
	fill(text2);
	text('pixels brush', 10, 160);
	fill(text3);
	text('sound brush', 10, 240);
	fill(text4);
	text('watercolor brush', 10, 320);
	fill(text5);
	text('image brush', 10, 400);
	fill(text6);
	text('reset canvas', 10, 480);
	fill(text7);
	text('next task', 20, 680);
	fill(text8);
	text('sound', 680, 100);
	fill(text9);
	text('nosound', 680, 200);
	textSize(14);
	text('color picker', 10, 540);
	//print(frameCount);
	//text for instructions appear over time
	if (pointcounter == 0 && frameCount < 80) {
		fill(0);
		rect(450, 650, 300, 50);
		textLeading(30);
		fill(255);
		text('Hello there! This is a relaxing painting', 460, 670);
		text('game to help you destress.', 460, 690);
	} else if (pointcounter == 0 && frameCount > 80) {
		fill(0);
		rect(450, 650, 300, 50);
		fill(255);
		text('You can pick from the brushes that are on the', 460, 670);
		text('right of the screen.', 460, 690);
	}
	if (pointcounter == 0 && frameCount > 180) {
		fill(0);
		rect(450, 650, 300, 50);
		fill(255);
		text('You can pick the colors of your brushes', 460, 670);
		text('from the color picker.', 460, 690);
	}
	if (pointcounter == 0 && frameCount > 250) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
		text('I will walk you through the process', 460, 670);
		text('of completeting a beautiful painting', 460, 690);
		text('by giving you different prompts.', 460, 710);
	}
	if (pointcounter == 0 && frameCount > 330) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
		text('after completing each task', 460, 670);
		text('press on (next task) to get', 460, 690);
		text('the next painting prompt.', 460, 710);
	}
	if (pointcounter == 0 && frameCount > 400) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
		text('if you want to display the', 460, 670);
		text('press on (next task) to get', 460, 690);
		text('the next painting prompt.', 460, 710);
	}
	//labels for brush icons
	if ((10 < mouseX) && (60 > mouseX) && (10 < mouseY) && (60 > mouseY)) { //shapebrush label
		text1 = 0;
	} else {
		text1 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (90 < mouseY) && (140 > mouseY)) {//
		text2 = 0;
	} else {
		text2 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (170 < mouseY) && (230 > mouseY)) {//
		text3 = 0;
	} else {
		text3 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (250 < mouseY) && (300 > mouseY)) {
		text4 = 0;
	} else {
		text4 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (330 < mouseY) && (380 > mouseY)) {
		text5 = 0;
	} else {
		text5 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (410 < mouseY) && (460 > mouseY)) {
		text6 = 0;
	} else {
		text6 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (670 < mouseY) && (730 > mouseY)) {
		text7 = 0;
	} else {
		text7 = 255;
}
}

function mousePressed() {
	if ((10 < mouseX) && (60 > mouseX) && (10 < mouseY) && (60 > mouseY) && (brushnum == 1)) { //shape brush one
		Shapebrushtwo = false;
		Shapebrushone = true;
		brushtwo = false;
		Shapebrushthree = false;
		imagebrushcheck= false;
		pixelbrushcheck= false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (10 < mouseY) && (60 > mouseY) && (brushnum == 2)) { //shape brush two
		Shapebrushone = false;
		Shapebrushtwo = true;
		Shapebrushthree = false;
		brushtwo = false;
		imagebrushcheck= false;
		pixelbrushcheck= false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (10 < mouseY) && (60 > mouseY) && (brushnum == 3)) { //shape brush three
		Shapebrushthree = true;
		Shapebrushtwo = false;
		Shapebrushone = false;
		brushtwo = false;
		imagebrushcheck= false;
		pixelbrushcheck= false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (90 < mouseY) && (140 > mouseY)) { //pixel brush 
		pixelbrushcheck= true;
		Shapebrushthree = false;
		Shapebrushtwo = false;
		Shapebrushone = false;
		brushtwo = false;
		imagebrushcheck = false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (170 < mouseY) && (230 > mouseY)) {//blend brush 
		brushthree = true;
	}
	if ((10 < mouseX) && (60 > mouseX) && (250 < mouseY) && (300 > mouseY)) { //watercolor brush 
		brushtwo = true;
		imagebrushcheck= false;
		Shapebrushthree = false;
		Shapebrushtwo = false;
		Shapebrushone = false;
		pixelbrushcheck= false;

	}
	if ((10 < mouseX) && (60 > mouseX) && (330 < mouseY) && (380 > mouseY)) {//image brush + add more image options 
		//canvas = loadImage('/Users/student/downloads/mycanvas'+ count +'.png'); 
		//displayimages();
		imagebrushcheck= true;
		Shapebrushthree = false;
		Shapebrushtwo = false;
		Shapebrushone = false;
		brushtwo = false;
		pixelbrushcheck= false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (410 < mouseY) && (460 > mouseY)) {
		clear();
	}
	if ((10 < mouseX) && (60 > mouseX) && (670 < mouseY) && (730 > mouseY)) {
		//clear();
		pointcounter += 20;
		count += 1;
		//console.log('mycanvas' + count);
		//saveCanvas(savedimg, 'mycanvas_' + count);
	}
	if ((680 < mouseX) &&(730 > mouseX) && (10 < mouseY) && (60 > mouseY)) {
		soundcheck= true;
    print('soundcheckon');
	}
  if ((680 < mouseX) && (730 > mouseX) && (120 < mouseY) && (170 > mouseY)) {
		soundcheck=false; 
		print('nosound');
}
}

function mouseDragged() {
	if (Shapebrushone) {
		patternone(30, 3, 10);
		playSound(brushsound1);
	}
	if (Shapebrushtwo) {

		for (i = 0; i < totalShapeCount; i++) {
			colorbrush = color(speed,random(250),143,random(255));
			RandomShapes(mouseX, mouseY, pmouseX, pmouseY, "rectangle", colorbrush);
		}
		for (i = 0; i < totalShapeCount; i++) {

			colorbrush2 = color(speed, random(126), 223, random(225));
			RandomShapes(mouseX, mouseY, pmouseX, pmouseY, "ellipse", colorbrush2);
		}
	}
	if (Shapebrushthree) {
		BrushShapeThree();
	}
	if (brushtwo) {
		Brushtwo();
	}
	if((imagebrushcheck)&&(imageoption==1)){
		imagebrush(flowerimg);
	
	}
		if((imagebrushcheck)&&(imageoption==2)){
		imagebrush(sunimg);
	}
		if((imagebrushcheck)&&(imageoption==3)){
		imagebrush(moonfaceimg);

	}
	if((pixelbrushcheck)&&(skyoption==1)) {
		imgfill = skyimgone.get(mouseX, mouseY); 
		pixelbrush();
	}
		if((pixelbrushcheck)&&(skyoption==2)) {
		imgfill = skyimgtwo.get(mouseX, mouseY); 
		pixelbrush();
	}
		if((pixelbrushcheck)&&(skyoption==3)) {
		imgfill = skyimgthree.get(mouseX, mouseY); 
		pixelbrush();
	}
}
function playSound(songname){
	if (soundcheck){
	let volume = map(mouseX, 0, width, 0, 0.01);
	let soundspeed = map(mouseY, 0, height, 0, 1);
  soundspeed = constrain(soundspeed, 0.01, 4);
	songname.play();
  //brushsound1.loop();
	songname.amp(volume);
	songname.rate(soundspeed);
	print('songplayed');
	}
	else{
		songname.stop();
	}
}


function BrushShapeThree() {
	movex= mouseX+10;
	movey= mouseY+10;
	//let brushtime = sin(frameCount / 10) * 30;
	noStroke();
	push();
	speed4 = abs(mouseX - pmouseX) + abs(mouseX - pmouseY);
	//let xbrush = random(-10, 10);
	//let ybrush = random(-10, 10);
	for (i=0; i<5; i++){
		fill(frameCount % 360, 20 + speed4, speed4);
		translate(movex,movey);
		rotate(frameCount*0.01);
	  scale(sin(frameCount*0.05) + 1.5 );
    star(mouseX, mouseY, 30, 70, 5);
		movex-= 1;
	  movey-= 1;
	}
	pop();
}

function patternone(changex, scalex, scaley) { //setting paarmeters 
	//for the color of and the size of ellipses
	speed3 = abs(mouseX - pmouseX) + abs(mouseX - pmouseY);
	//if(brushsound1.isPlaying()){
   // console.log("yes");
  //}
  //else console.log("no");
 // }
	
	push();
	translate(mouseX, mouseY); //moving the pattern to where the mouse is 
	for (j = 0; j < changex; j++) { //this code will be run until j is bigger than fifty
		rotate(speed3); //chnaging angle of the pattern
		scale(sin(frameCount * speed3) + 1.5);
		for (y = 10; y <= 100; y += 30) { //draws the pattern
			for (x = 50; x <= y; x += 5) {
				scale(sin(frameCount % speed3));
				rotate(45); //rotates the pattern
				noStroke();
				fill(random(255) % frameCount, 32, 227, random(255)); // the color parameter will be applied here
				ellipse(x + 5, y + 5, scalex, scaley); // the scale parameters are run here, as well 
				//as adding x and y to make sure that the ellipses are not drawn over 
				//one another
			}
		}
	}
	pop();
}

function keyPressed() {
	if (key == "1") {
		brushnum = 1;
	}
	if (key == "2") {
		brushnum = 2;
	}
	if (key == "3") {
		brushnum = 3;
	}
  if (key =="a"){
		imageoption = 1;
	}
	if (key =="b"){
		imageoption= 2;
	}
	if (key =="c"){
		imageoption= 3;
		}	
	 if (key =="s"){
		skyoption = 1;
	}
	if (key =="k"){
		skyoption= 2;
	}
	if (key =="y"){
		skyoption= 3;
		}	
}

function RandomShapes(x, y, px, py, choice, color) {
	speed = abs(x - px) + abs(y - py);
	if (choice == "ellipse") {
		//stroke(speed);
		noStroke();
		fill(color);
		rotate(frameCount*0.01);
		ellipse(x, y, speed, speed);
	} else {
		//stroke(0,speed);
		noStroke();
		fill(color);
		rotate(frameCount*0.01);
		rect(x, y, speed, speed);
	}
}

function Brushtwo() {
	speed2 = abs(mouseX - pmouseX) + abs(mouseX - pmouseY);
	brushtwosize = speed2;
	print('watercolor');
	if (mouseIsPressed == true) {
		for (i = 0; i < brushtwosize; i += 1) {
			let thisX = mouseX + random(-i, i);
			let thisY = mouseY + random(-i, i);
			noStroke();
			fill(random(136), 32,brushtwosize%frameCount, 5);
			beginShape();
			vertex(mouseX, mouseY);
			bezierVertex(lastX, lastY, thisX, thisY, thisX, thisY);
			bezierVertex(mouseX, mouseY, mouseX, mouseY, mouseX, mouseY);
			lastX = thisX;
			lastY = thisY;
			endShape();
		}
	}
}
//function displayimages(){
	// print('image displayed');
	// for (var i=0; i<5; i++) {
   // image(imgs[i], random(width), random(height)); 
 // }
//}

function pixelbrush(){
				noStroke();
				fill(imgfill);
				ellipse(mouseX, mouseY,pixelbrushsize,pixelbrushsize);
}

function mouseWheel (event){
	let mouse= event.delta;
	if(mouse>0){
	pixelbrushsize+=2;
	}
	if(mouse<0){
		pixelbrushsize-=2;
		if(pixelbrushsize <=1){
		pixelbrushsize = 5;
}
	}
}
function imagebrush(imagechoice) {
  push();
  translate(mouseX, mouseY);
	tint(random(255),245,177);
  scale(sin(frameCount*0.05) + 1.5 );
  rotate(frameCount*0.01);
 	image(imagechoice, 0, 0, 100,100); 
  pop();
}

function star(x, y, radius1, radius2, npoints) {//https://p5js.org/examples/form-star.html
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
