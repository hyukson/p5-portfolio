let smile = 0;

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

  fill(0);
  arc(300, 155, 180, 180, PI, 0);

  // 눈
  fill(255);
  strokeWeight(2);
  ellipse(260, 180, 40, 20);
  ellipse(340, 180, 40, 20);

  // 눈동자 (마우스만 반응)
  fill(50, 100, 200);

  let lx = map(mouseX, 0, width, -8, 8);
  let ly = map(mouseY, 0, height, -5, 5);

  ellipse(260 + lx, 180 + ly, 15, 15);
  ellipse(340 + lx, 180 + ly, 15, 15);

  // 코
  stroke(0);
  line(300, 190, 300, 230);

  // 입 (키보드로 변화)
  fill(255, 100, 100);

  if (smile == 0) {
    arc(300, 250, 60, 30, 0, PI); // 무표정
  } else {
    arc(300, 260, 60, 30, PI, TWO_PI); // 웃는 얼굴
  }

  // 귀
  fill(255, 224, 189);
  ellipse(200, 200, 40, 60);
  ellipse(400, 200, 40, 60);

  fill(255, 224, 180);
  ellipse(200, 205, 20, 30);
  ellipse(400, 205, 20, 30);

  // 몸
  fill(255, 224, 189);
  rect(280, 310, 40, 60);

  fill(100, 150, 200);
  rect(220, 370, 160, 80, 20);

  // 장식
  fill(255, 215, 0);
  ellipse(200, 240, 10, 10);
  ellipse(400, 240, 10, 10);
}

// 키보드 이벤트
function keyPressed() {
  if (key == ' ') {
    smile = 1 - smile; // 스페이스바로 표정 변경
  }
}