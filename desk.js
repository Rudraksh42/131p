img="";
function preload()
{
    img = loadImage('desktop.png');
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
text("Table", 100, 160); 
noFill();
stroke("#FF0000"); 
rect(100, 75, 500, 800 );

fill("#FF0000"); 
text("PC", 160, 110); 
noFill();
stroke("#FF0000"); 
rect(150, 85, 350, 210 );
}
