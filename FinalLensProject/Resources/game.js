// Snapchat Lens Studio Game Template
// Simple tap-based game

// Game variables
var score = 0;
var gameActive = false;
var timer = 30; // 30 seconds game time

// UI elements
var scoreText = null;
var timerText = null;
var startButton = null;

// Initialize the game
function initializeGame() {
    // Create UI elements
    createUI();
    
    // Set up touch/tap interactions
    setupInteractions();
    
    // Initialize game state
    resetGame();
}

// Create UI elements
function createUI() {
    // Score text
    scoreText = Scene.createText("Score: 0");
    scoreText.size = 40;
    scoreText.position = new vec2(0, 0.4);
    
    // Timer text
    timerText = Scene.createText("Time: 30");
    timerText.size = 40;
    timerText.position = new vec2(0, 0.3);
    
    // Start button
    startButton = Scene.createText("START GAME");
    startButton.size = 50;
    startButton.position = new vec2(0, 0);
    startButton.color = new vec4(0, 1, 0, 1); // Green color
}

// Set up touch/tap interactions
function setupInteractions() {
    // Start button tap
    startButton.onTouchStart(function() {
        if (!gameActive) {
            startGame();
        }
    });
    
    // Screen tap during gameplay
    Touch.onTouchStart(function() {
        if (gameActive) {
            incrementScore();
        }
    });
}

// Reset game state
function resetGame() {
    score = 0;
    timer = 30;
    gameActive = false;
    
    if (scoreText) {
        scoreText.text = "Score: 0";
    }
    
    if (timerText) {
        timerText.text = "Time: 30";
    }
    
    if (startButton) {
        startButton.text = "START GAME";
    }
}

// Start the game
function startGame() {
    gameActive = true;
    startButton.text = "GAME ON!";
    
    // Start countdown timer
    var countdown = global.setTimeout(function() {
        if (timer > 0) {
            timer--;
            timerText.text = "Time: " + timer;
            
            if (timer <= 0) {
                endGame();
            } else {
                countdown(); // Continue countdown
            }
        }
    }, 1000);
}

// Increment score
function incrementScore() {
    if (gameActive) {
        score++;
        scoreText.text = "Score: " + score;
    }
}

// End the game
function endGame() {
    gameActive = false;
    startButton.text = "PLAY AGAIN";
    
    // Show final score
    var finalMessage = Scene.createText("Game Over! Final Score: " + score);
    finalMessage.size = 40;
    finalMessage.position = new vec2(0, -0.2);
    finalMessage.color = new vec4(1, 1, 0, 1); // Yellow color
    
    // Remove message after 3 seconds
    global.setTimeout(function() {
        if (finalMessage) {
            finalMessage.destroy();
        }
    }, 3000);
}

// Initialize when script loads
initializeGame();