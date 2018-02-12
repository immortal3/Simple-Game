

var mainBall;
var randomballs = [];
var hit = false;
var totalnumberofRandomBall = 10;
var highscore = 0;

function setup()
{
   createCanvas(600,600);
   background(203, 244, 66);
   frameRate(80);
   mainBall = new ball(100,100,45,45);
  generateRandomballs();
}


function ball(x,y,width,height)
{
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}




function generateRandomballs()
{
    randomballs = [];
    for(var i = 0 ; i < totalnumberofRandomBall ; i++)
    {
      var w = random(25,50);
      randomballs.push(new randomball(550,random(600),w,w,random(3,6)))
    }
}


function randomball(x,y,width,height,velX)
{
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.velX = velX;
}

function draw()
{

  if(keyIsDown(UP_ARROW))
  {
    if(mainBall.y  >= mainBall.height)
    {
      mainBall.y = mainBall.y - 5;
    }
    //console.log('here');
  }
  else if(keyIsDown(DOWN_ARROW))
  {
    if(mainBall.y + mainBall.height <= 600)
    {
      mainBall.y = mainBall.y + 5;
    }
  }
  clear();
  fill(0,255,255);
  background(203, 244, 66);
  ellipseMode(CENTER);
  ellipse(mainBall.x,mainBall.y,mainBall.width,mainBall.height);
  var counter = 0;
  for(var i = 0;i < totalnumberofRandomBall ; i++)
  {
    hit = collidedcheck(mainBall.x,mainBall.y,mainBall.width,randomballs[i].x,randomballs[i].y,randomballs[i].width);
    if(hit == true)
    {
      noLoop();
      alert('game over');
    }
    fill(90,152,230)
    randomballs[i].x = randomballs[i].x - randomballs[i].velX;
    fill(90,152,230)
    ellipse(randomballs[i].x,randomballs[i].y,randomballs[i].height,randomballs[i].width);
    if(randomballs[i].x <= 0)
    {
      counter += 1;
      //console.log(counter);
    }
    if(counter >= totalnumberofRandomBall)
    {
      generateRandomballs();
      highscore += 1;
      break;
    }

  }
  var textline = "highscore :" + highscore;
  textSize(20);
  text(textline, 400 , 50);

}

collidedcheck = function (x, y,d, x2, y2, d2) {
//2d
  if( abs(dist(x,y,x2,y2)) <= (d/2)+(d2/2) ){
    return true;
  }
  return false;
};
