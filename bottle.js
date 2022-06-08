img="";
function preload()
{
    img = loadImage('bottles.png');
}
function setup()
{
canvas = createCanvas(640, 420);
canvas.center();
}
function draw()
{
image(img, 0, 0, 640, 420); 
fill("#FF0000"); 
text("Bottles", 100, 160); 
noFill();
stroke("#FF0000"); 
rect(30, 75, 600, 800 );

}