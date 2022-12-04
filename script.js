song1="";
song2="";
 function preload()
 {
    song1 = loadSound("music.mp3");
    song2= loadSound("music2.mp3");
 }
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

     poseNet = ml5.poseNet( video, modelLoaded);

}

 function modelLoaded() {
    console.log(" PoseNet is intialized! ");
}
function draw()
{
    image(video,0,0,600,500);
}
function play(){
    song.play();

}