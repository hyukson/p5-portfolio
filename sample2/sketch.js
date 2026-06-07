function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);

  fill(0);
  ellipse(220, 200, 30, 120);
  ellipse(380, 200, 30, 120);
  
  fill(255, 224, 189);
  ellipse(300, 200, 180, 220);

  fill(0, 0, 0);
  arc(300, 155, 180, 180, PI, 0);

  fill(255);
  strokeWeight(2);
  ellipse(260, 180, 40, 20);
  ellipse(340, 180, 40, 20);

  fill(50, 100, 200);
  ellipse(260, 180, 15, 15);
  ellipse(340, 180, 15, 15);

  line(300, 190, 300, 230);

  fill(255, 100, 100);
  arc(300, 250, 60, 30, 0, PI);

  fill(255, 224, 189);
  ellipse(200, 200, 40, 60);
  ellipse(400, 200, 40, 60);
  
  fill(255, 224, 180);
  ellipse(200, 205, 20, 30);
  ellipse(400, 205, 20, 30);

  fill(255, 224, 189);
  rect(280, 310, 40, 60);

  fill(100, 150, 200);
  rect(220, 370, 160, 80, 20);
  
  fill(255, 215, 0);
  ellipse(200, 240, 10, 10);
  ellipse(400, 240, 10, 10);
}