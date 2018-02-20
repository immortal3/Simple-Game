

var mainBall;
var randomballs = [];
var hit = false;
var totalnumberofRandomBall = 1;
var baserandomBall = 5;
var highscore = 0;
var speedup  = 0;
var loading = true;
var width_Canvas = 800;
var height_Canvas = 500;


function soundLoaded(song)
{
  song.loop();
  loading = false;
}



function setup()
{
   createCanvas(width_Canvas,height_Canvas);
   background(203, 244, 66);
   frameRate(80);
   mainBall = new ball(100,100,45,45);
   song = loadSound('gamesound.mp3',soundLoaded);
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
    speedup += highscore/12;
    randomballs = [];
    totalnumberofRandomBall = baserandomBall + highscore/7;
    for(var i = 0 ; i < totalnumberofRandomBall ; i++)
    {
      var w = random(25,50);
      randomballs.push(new randomball(width_Canvas-50,random(height_Canvas),w,w,random(3+speedup,6+speedup),random(255),random(255),random(255)))
    }

}


function randomball(x,y,width,height,velX,r,g,b)
{
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.velX = velX;
  this.r = r;
  this.b = b;
  this.g = g;
}



function draw()
{

      if(loading)
      {
          fill(18, 65, 140);
          var textline = "Loading Game";
          textSize(30);
          text(textline,200,250);
          console.log('loading');
      }
      else
      {
          if(keyIsDown(UP_ARROW))
      {
        if(mainBall.y  >= mainBall.height)
        {
          
              mainBall.y = mainBall.y - 5;
        }
      }
      else if(keyIsDown(DOWN_ARROW))
      {
        if(mainBall.y + mainBall.height <= height_Canvas)
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
          alert('game over and your high score is '+highscore);
          window.location.reload()
          console.log('reload');
        }
        randomballs[i].x = randomballs[i].x - randomballs[i].velX;
        fill(randomballs[i].r,randomballs[i].g,randomballs[i].b);
        ellipse(randomballs[i].x,randomballs[i].y,randomballs[i].height,randomballs[i].width);
        if(randomballs[i].x <= 0)
        {
          counter += 1;
        }
        if(counter >= totalnumberofRandomBall)
        {
          generateRandomballs();
          highscore += 1;
          break;
        }

      }

      fill(0);
      var textline = "highscore :" + highscore;
      textSize(20);
      text(textline, 400 , 50);
  }
  

}

collidedcheck = function (x, y,d, x2, y2, d2) {
//2d
  if( abs(dist(x,y,x2,y2)) <= (d/2)+(d2/2) ){
    return true;
  }
  return false;
};
