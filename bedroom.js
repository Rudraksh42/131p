img="";
function preload()
{
    img = loadImage('bedroom.png');
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
text("Bed", 45, 355); 
noFill();
stroke("#FF0000"); 
rect(0, 250, 1000, 150 );

fill("#FF0000"); 
text("Lamp", 500, 100); 
noFill();
stroke("#FF0000"); 
rect(450, 0, 150, 150 );

fill("#FF0000"); 
text("AC", 250, 100); 
noFill();
stroke("#FF0000"); 
rect(150, 0, 150, 150 );
}
