//resources: https://ellennickles.com/itpblog/2018/2/15/week-3-pixel-pavaring-app
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
let text9;
let text10;
let pointcounter;
let brush1img;
let brush2img;
let brush3img;
let brush4img;
let displayimg;
let resetimg;
let volumeupimg;
let volumedownimg;
let count;
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
let imagebrushcheck;
let pixelbrushcheck;
let moveX;
let moveY;
let index;
let skyimgone;
let skyimgtwo;
let skyimgthree;
let imageoption;
let skyoption;
let brushsound1;
let brushsound2;
//let brushsound3;
let brushsound4;
let brushsound5;
let pixelbrushsize;
let imgfill;
let soundcheck;
let soundimg;
let nosoundimg;
let fairyimg;
let micinput;
let saveimg;

function preload() {
	saveimg= loadImage('save.png');
	fairyimg = loadImage('fairy.png');
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
	skyimgone = loadImage("pastelsky.jpg");
	skyimgtwo = loadImage("sunset.jpg");
	skyimgthree = loadImage("beachskyimg.jpg");
	brushsound1 = loadSound("brushone.mp3");  
	brushsound2 = loadSound("brushtwo.mp3"); 
  brushsound5 = loadSound("oceansurf.mp3"); 
  brushsound4= loadSound("brushfour.mp3"); 
}

function setup() {
	createCanvas(800,800);
	micinput= new p5.AudioIn();
	skyimgone.resize(800,800);
	skyimgtwo.resize(800,800);
	skyimgthree.resize(800,800);
	skyoption=0;
	pixelbrushsize=5;
	soundcheck = true;
	imagebrushcheck = false;
	pixelbrushcheck = false;
	Shapebrushone = false;
	Shapebrushtwo = false;
	Shapebrushthree = false;
	brushnum = 0;
	totalShapeCount = 50;
	colorPicker = createColorPicker('#ed225d');
	colorPicker.position(width -470, height- 300);
	text1 = 0;
	text2 = 0;
	text3 = 0;
	text4 = 0;
	text5 = 0;
	text6 = 0;
	text7 = 0;
	text8 = 0;
	text9 = 0;
	text10= 0;
	count = 0;
	pointcounter = 0;
	brushtwo = false;
	brushthree = false;
	brushtwosize = 100;
	background(255);
}

function draw() {
	image(fairyimg, 300,580,200,200); // fairyimage
	c = colorPicker.color();
	fill(255);
	rect(10,570,50,50);
	image(saveimg, 10,570,50,50);//save image icon  picture 
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
	rect(680,10, 50, 50);//save button
	image(soundimg,680,10,50,50);//volume button image
	rect(680,120, 50, 50);
	image(nosoundimg,680,120,50,50);//no volume button image
	//text disappears and appears when mouse hovers on each icon
	fill(text1);
	text('shape brush 1/2/3', 10, 80); 
	fill(text2);
	text('pixels brush s/k/y', 10, 160);
	fill(text3);
	text('sound brush', 10, 240);
	fill(text4);
	text('watercolor brush', 10, 320);
	fill(text5);
	text('image brush a/b/c', 10, 400);
	fill(text6);
	text('reset canvas', 10, 480);
	fill(text7);
	text('next task', 20, 680);
	fill(text8);
	text('sound', 680, 100);
	fill(text9);
	text('nosound', 680, 200);
	fill(text10);
	text('save image', 10, 640);
	fill(0);
	text('color picker', 10, 540);
	if (brushthree){  //sound brush on 
		soundBrush();
		}
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
		text('left of the screen.', 460, 690);
	}
	if (pointcounter == 0 && frameCount > 180) {
		fill(0);
		rect(450, 650, 300, 50);
		fill(255);
		text('I will walk you through the process', 460, 670);
		text('of completing a beautiful painting', 460, 690);
		text('by giving you different prompts.', 460, 710);
	}
	if (pointcounter == 0 && frameCount > 250) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
		text('after completing each task', 460, 670);
		text('press on (next task) to get', 460, 690);
		text('the next painting prompt.', 460, 710);
	}
	if (pointcounter == 0 && frameCount > 330) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
		text('Toggle between keys 1-3 ', 460, 670);
		text('to change the shapes', 460, 690);
		text('brush.', 460, 710);
	}
	if (pointcounter == 0 && frameCount > 400) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
		text('Toggle between keys a/b/c ', 460, 670);
		text('to change the image', 460, 690);
		text('brush.', 460, 710);
	}
		if (pointcounter == 0 && frameCount > 480) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
		text('Toggle between keys s/k/y ', 460, 670);
		text('to change the pixels', 460, 690);
		text('brush.', 460, 710);
	}
	if (pointcounter == 0 && frameCount > 550) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
		text('For the first task: use the', 460, 670);
		text('brushes to paint how ', 460, 690);
		text('you are feeling today.', 460, 710);
	}
		if (pointcounter == 10 && frameCount > 650) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
	  text('If you are feeling stressed', 460, 670);
		text('paint about what is making', 460, 690);
		text('you feel that way', 460, 710);
	}
	if (pointcounter == 20 && frameCount > 650) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
    text('Draw something that makes', 460, 670);
		text('you feel good', 460, 690);
	}
		if (pointcounter == 30 && frameCount > 650) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
	  text('Draw what you imagine', 460, 670);
		text('when you hear the', 460, 690);
		text('word (calm)', 460, 710);
	}
		if (pointcounter == 40 && frameCount > 560) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
		text('Visualize what helps', 460, 670);
		text('you destress', 460, 690);
	}
	if (pointcounter == 50 && frameCount > 650) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
		text('Are you feeling better now? ', 460, 670);
		text('Draw how you are feeling now', 460, 690);
	}
		if (pointcounter == 60 && frameCount > 650) {
		fill(0);
		rect(450, 650, 300, 70);
		fill(255);
		text('you have completed the', 460, 670);
		text('painting now you can keep the', 460, 690);
		text('the saved image to reflect on it', 460, 710);
	}
	//labels for brush icons
	if ((10 < mouseX) && (60 > mouseX) && (10 < mouseY) && (60 > mouseY)) { //shapebrush one label
		text1 = 0;
	} else {
		text1 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (90 < mouseY) && (140 > mouseY)) {//pixels brush label
		text2 = 0;
	} else {
		text2 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (170 < mouseY) && (230 > mouseY)) {//sound brush label
		text3 = 0;
	} else {
		text3 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (250 < mouseY) && (300 > mouseY)) {//watercolor brush
		text4 = 0;
	} else {
		text4 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (330 < mouseY) && (380 > mouseY)) {//image brush label
		text5 = 0;
	} else {
		text5 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (410 < mouseY) && (460 > mouseY)) {// reset icon label
		text6 = 0;
	} else {
		text6 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (670 < mouseY) && (730 > mouseY)) {//
		text7 = 0;
	} else {
		text7 = 255;
}
		if ((10 < mouseX) && (60 > mouseX) && (570 < mouseY) && (620 > mouseY)){//save button label
		text10 = 0;
	} else {
		text10 = 255;
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
		brushthree= false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (10 < mouseY) && (60 > mouseY) && (brushnum == 2)) { //shape brush two
		Shapebrushone = false;
		Shapebrushtwo = true;
		Shapebrushthree = false;
		brushtwo = false;
		imagebrushcheck= false;
		pixelbrushcheck= false;
		brushthree= false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (10 < mouseY) && (60 > mouseY) && (brushnum == 3)) { //shape brush three
		Shapebrushthree = true;
		Shapebrushtwo = false;
		Shapebrushone = false;
		brushtwo = false;
		imagebrushcheck= false;
		pixelbrushcheck= false;
		brushthree= false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (90 < mouseY) && (140 > mouseY)) { //pixel brush 
		pixelbrushcheck= true;
		Shapebrushthree = false;
		Shapebrushtwo = false;
		Shapebrushone = false;
		brushtwo = false;
		imagebrushcheck = false;
		brushthree= false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (170 < mouseY) && (230 > mouseY)) {//sound brush 
		brushthree= true;
		pixelbrushcheck= false;
		Shapebrushthree = false;
		Shapebrushtwo = false;
		Shapebrushone = false;
		brushtwo = false;
		imagebrushcheck = false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (250 < mouseY) && (300 > mouseY)) { //watercolor brush 
		brushtwo = true;
		imagebrushcheck= false;
		Shapebrushthree = false;
		Shapebrushtwo = false;
		Shapebrushone = false;
		pixelbrushcheck= false;
		brushthree= false;

	}
	if ((10 < mouseX) && (60 > mouseX) && (330 < mouseY) && (380 > mouseY)) {//image brush + add more image options 
		imagebrushcheck= true;
		Shapebrushthree = false;
		Shapebrushtwo = false;
		Shapebrushone = false;
		brushtwo = false;
		pixelbrushcheck= false;
		brushthree= false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (410 < mouseY) && (460 > mouseY)) {//reset image icon
		clear();
		background(255);
	}
	if ((10 < mouseX) && (60 > mouseX) && (670 < mouseY) && (730 > mouseY)) {//points counter 
		pointcounter += 10;  //adds 10 points after each task is done 
		fill(255);
		rect(10, 650, 80, 40)
		fill(0);
	  text('points ' + '= ' + pointcounter, 20, 660);// shows points
		count += 1;
	}
	if ((680 < mouseX) &&(730 > mouseX) && (10 < mouseY) && (60 > mouseY)) {// volume on 
		soundcheck = true;
    print('soundcheckon');
	}
  if ((680 < mouseX) && (730 > mouseX) && (120 < mouseY) && (170 > mouseY)) {// volume off
		soundcheck = false; 
		print('nosound');
}
		if ((10 < mouseX) && (60 > mouseX) && (570 < mouseY) && (620 > mouseY)) {//save image icon  
	saveCanvas('mycanvas_' + count);
	}
}

function mouseDragged() {
	//turns brushes on when mouse is dragged
	if (Shapebrushone) {  
		patternone(30, 3, 10);
		playSound(brushsound1); //plays speific sound with brush one 
	}
	if (Shapebrushtwo) {

		for (i = 0; i < totalShapeCount; i++) {
			colorbrush = color(speed,random(250),143,random(255)); //creates different colors according to the brush's speed
			RandomShapes(mouseX, mouseY, pmouseX, pmouseY, "rectangle", colorbrush); //creates square pattern
		}
		for (i = 0; i < totalShapeCount; i++) {

			colorbrush2 = color(speed, random(126), 223, random(225));//creates different colors according to the brush's speed
			RandomShapes(mouseX, mouseY, pmouseX, pmouseY, "ellipse", colorbrush2);//creates circle pattern
		}
		playSound(brushsound1); //plays first brush sound
	}
	if (Shapebrushthree) {
		BrushShapeThree(); //second shape pattern brush (stars)
		playSound(brushsound1);
	}
	if (brushtwo) {
		Brushtwo(); //watercolor brush
		playSound(brushsound2);
	}//different image options for the image brush 
	if((imagebrushcheck)&&(imageoption==1)){
		imagebrush(flowerimg);
		playSound(brushsound5);// plays specific sound for this brush
	}
		if((imagebrushcheck)&&(imageoption==2)){
		imagebrush(sunimg);
		playSound(brushsound5);

	}
		if((imagebrushcheck)&&(imageoption==3)){
		imagebrush(moonfaceimg);
    playSound(brushsound5);
	}//different image options for the pixel brush 
	if((pixelbrushcheck)&&(skyoption==1)) {
		imgfill = skyimgone.get(mouseX, mouseY); //get pixels of this image to pixelate
		 pixelbrush();
		 playSound(brushsound4);// plays specific sound for this brush
	}
		if((pixelbrushcheck)&&(skyoption==2)) {
		imgfill = skyimgtwo.get(mouseX, mouseY); //get pixels of this image to pixelate
		pixelbrush();
		 playSound(brushsound4);
	}
		if((pixelbrushcheck)&&(skyoption==3)) {
		imgfill = skyimgthree.get(mouseX, mouseY); //get pixels of this image to pixelate
		pixelbrush();
		playSound(brushsound4);
	}
}
function soundBrush(){ // this brush is not working and unfortunately I was not able to debug it
	micinput.start();
	let soundbrushvolume = micinput.getLevel();
	let threshold = 0.1;
	console.log(soundbrushvolume);
	//let ysound = map(soundbrushvolume, 0, 1, height, 0);
  //let ythreshold = map(threshold, 0, 1, height, 0);
  if (soundbrushvolume > threshold) {
    noStroke(0);
		c.setAlpha(soundbrushvolume);//change opacity of color depending on the volume 
    fill(c);
    rect(random(width), random(height),soundbrushvolume , 20);
  }
	  if (soundbrushvolume > 5) {
    noStroke(0);
    fill(c,100 );
    ellipse(random(width), random(height), 20, soundbrushvolume);
  }

  // Graph the overall volume and show threshold
}

function BrushShapeThree() {
	movex= mouseX+10; //x position for brush
	movey= mouseY+10;//y position for brush
	noStroke();
	push();
	speed4 = abs(mouseX - pmouseX) + abs(mouseX - pmouseY); //tracks speed of brush 
	for (i=0; i<5; i++){
		fill(frameCount % 360, 20 + speed4, speed4);// chnages the color of the brush according to the speed of the brush 
		translate(movex,movey); //moves the brush 
		rotate(frameCount*0.01); // rotates the brush according to the frame
	  scale(sin(frameCount*0.05) + 1.5 );//chnages scale of teh brush according to the frame
    star(mouseX, mouseY, 30, 70, 5); // star shape
		movex-= 1;
	  movey-= 1;
	}
	pop();
}

function patternone(changex, scalex, scaley) { //setting paarmeters 
	//for the color of and the size of ellipses
	speed3 = abs(mouseX - pmouseX) + abs(mouseX - pmouseY);
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

function keyPressed() { //assigns different key presses for the different brushes so that the user can toggle between the brush options
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
	speed = abs(x - px) + abs(y - py); //speed of mouse
	if (choice == "ellipse") {// circle brush pattern 
		//stroke(speed);
		noStroke();
		fill(color);
		rotate(frameCount*0.01);
		ellipse(x, y, speed, speed); //chnages the size of the pattern brush according to the speed of the mouse
	} else {// square brush pattern 
		//stroke(0,speed);
		noStroke();
		fill(color);
		rotate(frameCount*0.01);
		rect(x, y, speed, speed);//chnages the size of the pattern brush according to the speed of the mouse
	}
}

function Brushtwo() {
	speed2 = abs(mouseX - pmouseX) + abs(mouseX - pmouseY);// tracks speed of the mouse
	brushtwosize = speed2; //changes the size of the brush 
	print('watercolor');
	if (mouseIsPressed == true) { //when mouse is pressd 
		for (i = 0; i < brushtwosize; i += 1) {// spreads the brush to look like watercolor
			let thisX = mouseX + random(-i, i); //moves the brush x position up and down randomly 
			let thisY = mouseY + random(-i, i);//moves the brush y position up and down randomly 
			noStroke();
			fill(random(136), 32,brushtwosize%frameCount, 5);// color chnages with the change of framecount
			beginShape();
			vertex(mouseX, mouseY);// follows where the mosue position is
			// draws the brush shape
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
				fill(imgfill);// fills brush with the color of pixels from the chosen image
				ellipse(mouseX, mouseY,pixelbrushsize,pixelbrushsize);// draws pixel brush
}

function mouseWheel (event){ //chnages brush size with mouseWheel
	let mouse= event.delta; // tracks the chnages in the event of mouse wheel
	if(mouse>0){ //mousewheel up makes teh brush bigger
	pixelbrushsize+=2;
	}
	if(mouse<0){//mousewheel down makes teh brush bigger
		pixelbrushsize-=2;
		if(pixelbrushsize <=1){
		pixelbrushsize = 5;
}
	}
}
function imagebrush(imagechoice) {//controls the image that is used for the brush
  push();
  translate(mouseX, mouseY); //moved to where mouse is
	tint(random(255),245,177); //chnages color each frame
  scale(sin(frameCount*0.05) + 1.5 );// sie of brush chnages with frmeCount
  rotate(frameCount*0.01);// brush rotates with change with frameCount
 	image(imagechoice, 0, 0, 100,100);  // picks image for brush
  pop();
}

function star(x, y, radius1, radius2, npoints) {//https://p5js.org/examples/form-star.html
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {//draws star shape
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
function playSound(songname){ //controls which sound is beign played
	if (soundcheck){ // check for sound button beign pressed
	//volume is being controlled by teh speed of the mouse
	let volume = map(mouseX, 0, width, 0, 0.01);  
	volume = constrain(volume, 0, 1);
	let soundspeed = map(mouseY, 0, height, 0, 1); 
  soundspeed = constrain(soundspeed, 1, 4);
	songname.play(); //plays song
  //brushsound1.loop();
	songname.amp(volume); 
	songname.rate(soundspeed);
	print('songplayed');
	}
	else{ //if no soudn is pressed 
		songname.stop();
	}
}