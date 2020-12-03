const Engine= Matter.Engine;
 const World= Matter.World; 
 const Bodies= Matter.Bodies; 
 var myworld, myengine, ground,ball;
 
 function setup()
  { createCanvas(600,600);
     myengine=Engine.create();
      myworld=myengine.world; 
      
      var options= { isStatic: true } 
      ground=Bodies.rectangle(300,580,600,50,options);
      var boptions= { restitution:1.0 } 
      ball=Bodies.circle(300,100,20,boptions);
       World.add(myworld,ball);
       World.add(myworld,ground);
  }
       
function draw()
  { background(0); 
    Engine.update(myengine);
     rectMode(CENTER) ;
     fill("brown");
      rect(ground.position.x,ground.position.y,600,50);
      ellipseMode(RADIUS);
      ellipse(ball.position.x,ball.position.y,20,20);
  }