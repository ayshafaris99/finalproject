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
let pixelbrushcheck;
//let imgs =[];
//let savedimg;

function preload() {
	//imgs[i] = loadImage('Users/student/downloads/mycanvas_0.png');
	pixelbrushimg = loadImage('pixelbrush.png');
	brush1img = loadImage('brush1.png');
	brush2img = loadImage('brush2.png');
	brush3img = loadImage('paintbrushes.png');
	brush4img = loadImage('palette.png');
	displayimg = loadImage('display.png');
	volumeupimg = loadImage('volumeup.png');
	volumedownimg = loadImage('volumedown.png');
	resetimg = loadImage('reset.png');
	fairyidle = loadAnimation('fairyidle_0.png', 'fairyidle_1.png', 'fairyidle_2.png', 'fairyidle_3.png', 'fairyidle_4.png', 'fairyidle_5.png', 'fairyidle_6.png', 'fairyidle_7.png');
	//fairyidle.looping = false;
	fairyflying = loadAnimation('fairyfly_0.png', 'fairyfly_1.png', 'fairyfly_2.png', 'fairyfly_3.png', 'fairyfly_4.png', 'fairyfly_5.png', 'fairyfly_6.png', 'fairyfly_7.png');
}

function setup() {
	createCanvas(800,800);
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
	//savedimg = createCanvas(800, 800);
	fairy1sprite = createSprite(0, 0);
	//fairy1sprite.scale=100;
	fairy1sprite.addAnimation('standing', 'fairyidle_0.png', 'fairyidle_1.png', 'fairyidle_2.png', 'fairyidle_3.png', 'fairyidle_4.png', 'fairyidle_5.png', 'fairyidle_6.png', 'fairyidle_7.png');
	brushtwosize = 100;
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
	fill(0);
	text('points ' + '= ' + pointcounter, 10, 650);
	fill(text1);
	text('shape brush', 10, 80);
	fill(text2);
	text('pixels brush', 10, 160);
	fill(text3);
	text('blend brush', 10, 240);
	fill(text4);
	text('watercolor brush', 10, 320);
	fill(text5);
	text('display canvas', 10, 400);
	fill(text6);
	text('reset canvas', 10, 480);
	fill(text7);
	text('next task', 20, 680);
	fill(text8);
	text('volume up', 680, 100);
	fill(text9);
	text('volume down', 680, 200);
	textSize(14);
	text('color picker', 10, 540);
	//print(frameCount);
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

	if ((10 < mouseX) && (60 > mouseX) && (10 < mouseY) && (60 > mouseY)) {
		text1 = 0;
	} else {
		text1 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (90 < mouseY) && (140 > mouseY)) {
		text2 = 0;
	} else {
		text2 = 255;
	}
	if ((10 < mouseX) && (60 > mouseX) && (170 < mouseY) && (230 > mouseY)) {
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
	}
	if ((10 < mouseX) && (60 > mouseX) && (10 < mouseY) && (60 > mouseY) && (brushnum == 2)) { //shape brush two
		Shapebrushone = false;
		Shapebrushtwo = true;
		Shapebrushthree = false;
		brushtwo = false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (10 < mouseY) && (60 > mouseY) && (brushnum == 3)) { //shape brush three
		Shapebrushthree = true;
		Shapebrushtwo = false;
		Shapebrushone = false;
		brushtwo = false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (90 < mouseY) && (140 > mouseY)) { //
		pixelbrushcheck= true;
		Shapebrushthree = false;
		Shapebrushtwo = false;
		Shapebrushone = false;
		brushtwo = false;
	}
	if ((10 < mouseX) && (60 > mouseX) && (170 < mouseY) && (230 > mouseY)) {
		brushthree = true;
	}
	if ((10 < mouseX) && (60 > mouseX) && (250 < mouseY) && (300 > mouseY)) {
		brushtwo = true;
		Shapebrushtwo = false;
		Shapebrushone = false;
		Shapebrushthree = false;

	}
	if ((10 < mouseX) && (60 > mouseX) && (330 < mouseY) && (380 > mouseY)) {
		//canvas = loadImage('/Users/student/downloads/mycanvas'+ count +'.png'); 
		displayimages();
	}
	if ((10 < mouseX) && (60 > mouseX) && (410 < mouseY) && (460 > mouseY)) {
		clear();
	}
	if ((10 < mouseX) && (60 > mouseX) && (670 < mouseY) && (730 > mouseY)) {
		//clear();
		pointcounter += 20;
		count += 1;
		console.log('mycanvas' + count);
		//savedimg= saveCanvas('mycanvas_' + count);
		//imgs.push(savedimg;
	}
}

function mouseDragged() {
	if (Shapebrushone) {
		patternone(30, 3, 10);
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
	if(pixelbrushcheck){
		pixelbrush();
	}
}

function BrushShapeThree() {
	noStroke();
	speed4 = abs(mouseX - pmouseX) + abs(mouseX - pmouseY);
	//let xbrush = random(-10, 10);
	//let ybrush = random(-10, 10);
	ellipseMode(CENTER);
	fill(frameCount % 360, 20 + speed4, 100);
	let brushtime = sin(frameCount / 10) * 30;
	ellipse(mouseX, mouseY, brushtime + 60);
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
}

function RandomShapes(x, y, px, py, choice, color) {
	speed = abs(x - px) + abs(y - py);
	if (choice == "ellipse") {
		//stroke(speed);
		noStroke();
		fill(color);
		ellipse(x, y, speed, speed);
	} else {
		//stroke(0,speed);
		noStroke();
		fill(color);
		rect(x, y, speed, speed);
	}
}

function Brushtwo() {
	speed2 = abs(mouseX - pmouseX) + abs(mouseX - pmouseY);
	brushtwosize = speed2 - 50;
	print('watercolor');
	if (mouseIsPressed == true) {
		for (i = 0; i < brushtwosize; i += 1) {
			let thisX = mouseX + random(-i, i);
			let thisY = mouseY + random(-i, i);
			noStroke();
			fill(random(136), 32, 227, 5);
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
	//for (i = 0; i < imgs.length; i ++ ) {
    //image(imgs[i], random(width), random(height)); 
 //}

//}

function pixelbrush() {
  push();
  translate(mouseX, mouseY);
	tint(random(255), 70,100);
  scale(sin(frameCount*0.05) + 1.5 );
  rotate(frameCount*0.01);
 	image(pixelbrushimg, 0, 0, 100,100); 
  pop();
}
