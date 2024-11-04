let baseSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  baseSize = min(windowWidth, windowHeight) * 0.02; 

  let cols = 10;
  let rows = 5;
  let margin = baseSize * 2.5; 
  let cellWidth = (width - 2 * margin) / cols;
  let cellHeight = (height - 2 * margin) / rows;
  noLoop();
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * cellWidth + margin;
      let y = i * cellHeight + margin;
      drawGlyph(x, y, cellWidth, cellHeight);
    }
  }
}

function drawGlyph(x, y, w, h) {
  push();
  translate(x + w / 2, y + h / 2); 
  strokeWeight(baseSize * 0.15);
  noFill();

  
  let eyeSize = w * 0.3;
  let pupilSize = eyeSize * 0.3;
  ellipse(0, 0, eyeSize);       
  fill(0);                      
  ellipse(0, 0, pupilSize);     

  
  noFill();
  let ringSize = eyeSize * 1.5;
  ellipse(0, 0, ringSize);

  
  let numSegments = floor(random(1, 5)); 
  for (let i = 0; i < numSegments; i++) {
    let segmentAngle = random(TWO_PI);
    let segmentLength = random(w * 0.1, w * 0.3); 
    let segmentThickness = baseSize * random(0.1, 0.2); 
    
    push();
    rotate(segmentAngle);
    strokeWeight(segmentThickness);
    
    
    line(eyeSize / 2, 0, eyeSize / 2 + segmentLength, 0);
    
    
    if (random() < 0.5) { 
      let arcRadius = segmentLength * 0.5;
      arc(eyeSize / 2 + segmentLength, 0, arcRadius, arcRadius, 0, PI / 2);
    }

    
    if (random() < 0.7) { 
      let intersecPos = random(eyeSize / 2, eyeSize / 2 + segmentLength); 
      let intersecSize = baseSize * random(0.2, 0.4); 
      noFill(); 
      ellipse(intersecPos, 0, intersecSize); 
    }
    
    pop();
  }

  pop();
}
