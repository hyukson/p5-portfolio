function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
}

function draw() {
  background(160);

  // 시간 변수
  let t = frameCount * 0.03;

  // 중앙 검은 사각형
  fill(40);
  rect(220, 150, 160, 120);

  // 작은 사각형 애니메이션
  let moveY = sin(t * 2) * 5;

  fill(240);
  rect(300, 240 + moveY, 15, 40);
  rect(330, 240 - moveY, 15, 40);
  rect(300, 140 - moveY, 15, 40);
  rect(330, 140 + moveY, 15, 40);

  // 회색 원들 크기 변화
  let s1 = 80 + sin(t) * 10;
  let s2 = 100 + cos(t) * 12;
  let s3 = 110 + sin(t * 1.5) * 15;

  fill(200);
  ellipse(260, 130, s1, s1);
  ellipse(320, 100, s2, s2);
  ellipse(390, 130, s3, s3);

  // 흰색 원 움직임
  let moveX = sin(t) * 10;

  fill(240);
  ellipse(230 + moveX, 250, 110, 110);
  ellipse(430 - moveX, 220, 140, 140);

  fill(230);
  ellipse(230 + moveX, 250, 50, 50);
  ellipse(430 - moveX, 220, 70, 70);

  // 노란색 원 색상 변화
  let yellowValue = 200 + sin(t * 2) * 55;

  fill(255, yellowValue, 0);

  ellipse(210, 70, 90 + sin(t) * 8);
  ellipse(170, 200, 80 + cos(t) * 8);
  ellipse(500, 90, 90 + sin(t * 1.3) * 8);
  ellipse(480, 180, 70 + cos(t * 1.5) * 8);

  // 내부 밝은 부분
  fill(255, 240, 100);

  ellipse(210, 70, 20);
  ellipse(170, 200, 20);
  ellipse(500, 90, 20);
  ellipse(480, 180, 20);

  // 검은 점
  fill(0);

  ellipse(210, 70, 10);
  ellipse(170, 200, 10);
  ellipse(500, 90, 10);
  ellipse(480, 180, 10);

  // 갈색 막대
  fill(165, 42, 42);

  rect(230, 260, 5, 60);
  rect(490, 200, 5, 60);
}

// GIF 저장
function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('abstract_animation', 5);
  }
}