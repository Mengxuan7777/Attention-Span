let countdown = 8; // Countdown in seconds
let countdownInterval;
let isDrawing = false;
let prevX, prevY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  // Draw the countdown clock in the background
  background(255, 20);
  fill(0, 0, 255, 50);
  textSize(30);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(countdown, width / 2, height / 2);

  // Draw lines only when isDrawing is true and mouse is pressed
  if (isDrawing && prevX !== undefined && prevY !== undefined && countdown > 0) {
    stroke(0);
    strokeWeight(5);
    line(prevX, prevY, mouseX, mouseY);
    prevX = mouseX;
    prevY = mouseY;
  }
}

function updateCountdown() {
  countdown--;
  if (countdown === 0) {
    clearInterval(countdownInterval);
    isDrawing = false; // Disable drawing after 8 seconds
    // Additional actions after the countdown is over can be added here
  }
}

function mousePressed() {
  if (countdown > 0) {
    isDrawing = true;
    prevX = mouseX;
    prevY = mouseY;
  }
}

function mouseReleased() {
  isDrawing = false;
}

function showCanvas() {
  // Hide the prompt and button
  document.getElementById("prompt").style.display = "none";
  
  // Start the countdown when the user presses the button
  countdownInterval = setInterval(updateCountdown, 1000);
}
