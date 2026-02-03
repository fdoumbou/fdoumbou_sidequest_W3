// midScreen.js
// This file defines the "midScreen" state

// Main draw function for this screen
function drawMidScreen() {
  background(200, 200, 250); // Light blue background

  fill(0); // Black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Mid Screen", width / 2, height / 2 - 50);

  textSize(18);
  text("Press ENTER to continue to the game.", width / 2, height / 2);
}

// Mouse input for this screen
function midScreenMousePressed() {
  // No mouse interaction for this screen
}

// Keyboard input for this screen
function midScreenKeyPressed() {
  if (keyCode === ENTER) {
    currentScreen = "game"; // Transition to the game screen
  }
}
