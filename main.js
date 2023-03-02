song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("Enemy(PaglaSongs).mp3");
    song2 = loadSound("Bones(PaglaSongs).mp3");
}

function setup(){
    canvas = createCanvas(750,650);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,750,650);
}