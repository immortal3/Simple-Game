
var m = 2
var b = 1
function setup()
{
  createCanvas(400,400);
  background(239, 131, 16);
}


function draw()
{
    for(var i = 0 ; i < width; i++)
    {
      x = i;
      y = m*x + b;
      x = map(x,0,width,width,0);
      y = map(y,0,height,height,0);
      if(y <= height)
      {
        fill(40);
        stroke(150);
        ellipse(x,y,1,1);

      }
      }
}
