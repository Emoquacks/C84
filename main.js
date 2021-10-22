var canvas=document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_width = 100;
var rover_height = 90;
var background_image = "mars.jpg";
var rover_image = "rover.png";
var rover_X = 10;
var rover_Y = 10;
function add(){
    bg_img = new Image();
    bg_img.onload=uploadBackground;
    bg_img.src = background_image;

    rover_img = new Image();
    rover_img.onload=uploadRover;
    rover_img.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height)
}
function uploadRover(){
    ctx.drawImage(rover_image, rover_X, rover_Y, rover_width, rover_height);
}