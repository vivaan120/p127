song = "";
song2 = "";
function setup(){
    canvas = createCanvas(400, 300);
    canvas.position(450,250);

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 400, 300);
}
function preload()
{
song = loadSound("music.mp3");
song2 = loadSound("music2.mp3");
}