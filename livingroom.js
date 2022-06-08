img="";
function preload()
{
    img = loadImage('livingroom.png');
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
text("Sofa", 100, 160); 
noFill();
stroke("#FF0000"); 
rect(0, 150, 600, 100 );

fill("#FF0000"); 
text("Table", 510, 400); 
noFill();
stroke("#FF0000"); 
rect(500, 300, 100, 100 );

fill("#FF0000"); 
text("Oteman", 210, 400); 
noFill();
stroke("#FF0000"); 
rect(200, 300, 100, 100 );
}
